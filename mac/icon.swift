// Draws the app icon (1024 px PNG): a blue rounded square with a white "Fr"
// and a thin blue-white-red stripe. Run by build.sh; no image files needed.
import Cocoa

let size: CGFloat = 1024
let image = NSImage(size: NSSize(width: size, height: size))
image.lockFocus()
let inset: CGFloat = 100 // macOS icon grid: the shape sits inside the canvas
let rect = NSRect(x: inset, y: inset, width: size - 2 * inset, height: size - 2 * inset)
let shape = NSBezierPath(roundedRect: rect, xRadius: 185, yRadius: 185)
NSGradient(starting: NSColor(calibratedRed: 0.20, green: 0.38, blue: 0.92, alpha: 1),
           ending: NSColor(calibratedRed: 0.07, green: 0.17, blue: 0.55, alpha: 1))!.draw(in: shape, angle: -90)

let style = NSMutableParagraphStyle(); style.alignment = .center
let font = NSFont(name: "Georgia-Bold", size: 400) ?? NSFont.boldSystemFont(ofSize: 400)
let text = NSAttributedString(string: "Fr", attributes: [.font: font, .foregroundColor: NSColor.white, .paragraphStyle: style])
text.draw(in: NSRect(x: rect.minX, y: rect.midY - 250, width: rect.width, height: 500))

let stripeWidth = rect.width * 0.5 / 3, stripeY = rect.minY + 150, stripeX = rect.midX - stripeWidth * 1.5
for (index, color) in [NSColor(calibratedRed: 0.55, green: 0.70, blue: 1, alpha: 1), .white, NSColor(calibratedRed: 0.93, green: 0.25, blue: 0.27, alpha: 1)].enumerated() {
    color.setFill()
    NSBezierPath(rect: NSRect(x: stripeX + CGFloat(index) * stripeWidth, y: stripeY, width: stripeWidth, height: 28)).fill()
}
image.unlockFocus()

let rep = NSBitmapImageRep(data: image.tiffRepresentation!)!
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: CommandLine.arguments[1]))
