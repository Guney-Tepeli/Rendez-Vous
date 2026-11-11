// Rendez-Vous: a native macOS window around the web app.
//
// Why a small Swift app and not Electron / Tauri: no new dependency and no
// bundled browser engine. macOS already ships WebKit; this file gives it a
// window, a menu, an icon, and the three things a browser tab did for free:
//   1. serving the built site (from the app bundle, through a custom URL
//      scheme so ES modules and localStorage behave as on a web origin),
//   2. saving files (the page posts {kind: "save"}; we show a save panel),
//   3. printing / PDF (the page posts {kind: "print"}; we open the print panel).
// The page side of 2 and 3 is src/lib/native.ts.
//
// Progress lives in WebKit's storage for this app (~/Library/WebKit/<bundle id>),
// tied to the origin rendezvous://localhost, so it survives app updates.

import Cocoa
import WebKit

let scheme = "rendezvous"
let startURL = URL(string: "\(scheme)://localhost/index.html")!

/// Serves files from Contents/Resources/web for rendezvous://localhost/<path>.
final class BundleSchemeHandler: NSObject, WKURLSchemeHandler {
    let root: URL = Bundle.main.resourceURL!.appendingPathComponent("web")

    func webView(_ webView: WKWebView, start task: WKURLSchemeTask) {
        guard let url = task.request.url else { return }
        var path = url.path
        if path.isEmpty || path == "/" { path = "/index.html" }
        let file = root.appendingPathComponent(String(path.dropFirst())).standardizedFileURL
        // Never serve anything outside the web folder ("../" in a URL).
        guard file.path.hasPrefix(root.standardizedFileURL.path), let data = try? Data(contentsOf: file) else {
            task.didFailWithError(URLError(.fileDoesNotExist))
            return
        }
        let response = HTTPURLResponse(
            url: url, statusCode: 200, httpVersion: "HTTP/1.1",
            headerFields: ["Content-Type": mimeType(for: file.pathExtension), "Content-Length": String(data.count)])!
        task.didReceive(response)
        task.didReceive(data)
        task.didFinish()
    }

    func webView(_ webView: WKWebView, stop task: WKURLSchemeTask) {}

    private func mimeType(for ext: String) -> String {
        switch ext.lowercased() {
        case "html": return "text/html; charset=utf-8"
        case "js", "mjs": return "text/javascript; charset=utf-8"
        case "css": return "text/css; charset=utf-8"
        case "json": return "application/json"
        case "svg": return "image/svg+xml"
        case "png": return "image/png"
        case "woff2": return "font/woff2"
        default: return "application/octet-stream"
        }
    }
}

final class AppDelegate: NSObject, NSApplicationDelegate, WKScriptMessageHandler, WKNavigationDelegate {
    var window: NSWindow!
    var webView: WKWebView!
    let selfTest = ProcessInfo.processInfo.environment["RENDEZVOUS_SELFTEST"] == "1"

    func applicationDidFinishLaunching(_ notification: Notification) {
        buildMenu()

        let config = WKWebViewConfiguration()
        config.setURLSchemeHandler(BundleSchemeHandler(), forURLScheme: scheme)
        config.websiteDataStore = .default() // persistent: progress survives restarts
        config.userContentController.add(self, name: "rendezvous")

        webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = self
        webView.setValue(false, forKey: "drawsBackground") // no white flash in dark mode

        window = NSWindow(
            contentRect: NSRect(x: 0, y: 0, width: 1100, height: 820),
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered, defer: false)
        window.title = "Rendez-Vous"
        window.minSize = NSSize(width: 420, height: 560)
        window.contentView = webView
        window.center()
        window.setFrameAutosaveName("RendezVousMain")
        window.makeKeyAndOrderFront(nil)

        webView.load(URLRequest(url: startURL))
        NSApp.activate(ignoringOtherApps: true)
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool { true }

    // MARK: messages from the page (src/lib/native.ts)

    func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let body = message.body as? [String: Any], let kind = body["kind"] as? String else { return }
        switch kind {
        case "save":
            guard let name = body["name"] as? String, let base64 = body["base64"] as? String,
                  let data = Data(base64Encoded: base64) else { return }
            let panel = NSSavePanel()
            panel.nameFieldStringValue = name
            panel.directoryURL = FileManager.default.urls(for: .downloadsDirectory, in: .userDomainMask).first
            panel.beginSheetModal(for: window) { response in
                guard response == .OK, let url = panel.url else { return }
                do { try data.write(to: url) } catch { NSAlert(error: error).runModal() }
            }
        case "print":
            let info = NSPrintInfo.shared
            info.topMargin = 36; info.bottomMargin = 36; info.leftMargin = 36; info.rightMargin = 36
            let operation = webView.printOperation(with: info)
            operation.view?.frame = webView.bounds
            operation.runModal(for: window, delegate: nil, didRun: nil, contextInfo: nil)
        default:
            break
        }
    }

    // MARK: self-test (RENDEZVOUS_SELFTEST=1): prove storage, modules and the bridge work, then quit.

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        guard selfTest else { return }
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
            let js = """
            (() => {
              let storage = "no";
              try { localStorage.setItem("selftest", "1"); storage = localStorage.getItem("selftest") === "1" ? "yes" : "no"; } catch (e) { storage = "error " + e.name; }
              return JSON.stringify({
                origin: location.origin,
                appRendered: document.querySelector("main") !== null,
                title: document.querySelector("h1")?.textContent ?? null,
                storage,
                savedState: localStorage.getItem("french-app/state") !== null,
                bridge: !!(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.rendezvous),
                speech: "speechSynthesis" in window,
                frenchVoices: speechSynthesis.getVoices().filter(v => v.lang.startsWith("fr")).length
              });
            })()
            """
            webView.evaluateJavaScript(js) { result, error in
                print(result as? String ?? "error: \(String(describing: error))")
                NSApp.terminate(nil)
            }
        }
    }

    // MARK: menu (without an Edit menu, Cmd+C / Cmd+V do nothing in text fields)

    func buildMenu() {
        let main = NSMenu()
        let appItem = NSMenuItem(); main.addItem(appItem)
        let appMenu = NSMenu()
        appMenu.addItem(withTitle: "Hide Rendez-Vous", action: #selector(NSApplication.hide(_:)), keyEquivalent: "h")
        appMenu.addItem(.separator())
        appMenu.addItem(withTitle: "Quit Rendez-Vous", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")
        appItem.submenu = appMenu

        let editItem = NSMenuItem(); main.addItem(editItem)
        let edit = NSMenu(title: "Edit")
        edit.addItem(withTitle: "Undo", action: Selector(("undo:")), keyEquivalent: "z")
        edit.addItem(withTitle: "Redo", action: Selector(("redo:")), keyEquivalent: "Z")
        edit.addItem(.separator())
        edit.addItem(withTitle: "Cut", action: #selector(NSText.cut(_:)), keyEquivalent: "x")
        edit.addItem(withTitle: "Copy", action: #selector(NSText.copy(_:)), keyEquivalent: "c")
        edit.addItem(withTitle: "Paste", action: #selector(NSText.paste(_:)), keyEquivalent: "v")
        edit.addItem(withTitle: "Select All", action: #selector(NSText.selectAll(_:)), keyEquivalent: "a")
        editItem.submenu = edit

        let viewItem = NSMenuItem(); main.addItem(viewItem)
        let view = NSMenu(title: "View")
        view.addItem(withTitle: "Reload", action: #selector(reload), keyEquivalent: "r")
        view.addItem(withTitle: "Enter Full Screen", action: #selector(NSWindow.toggleFullScreen(_:)), keyEquivalent: "f")
        viewItem.submenu = view

        let windowItem = NSMenuItem(); main.addItem(windowItem)
        let windowMenu = NSMenu(title: "Window")
        windowMenu.addItem(withTitle: "Minimize", action: #selector(NSWindow.performMiniaturize(_:)), keyEquivalent: "m")
        windowMenu.addItem(withTitle: "Close", action: #selector(NSWindow.performClose(_:)), keyEquivalent: "w")
        windowItem.submenu = windowMenu
        NSApp.windowsMenu = windowMenu
        NSApp.mainMenu = main
    }

    @objc func reload() { webView.reload() }
}

let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate
app.setActivationPolicy(.regular)
app.run()
