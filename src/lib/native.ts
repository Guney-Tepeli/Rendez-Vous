/**
 * Bridge to the macOS app (mac/RendezVous.swift), when the page runs inside it.
 *
 * In a browser, files are saved with a normal download link and PDFs with
 * the browser's print dialog. Inside the app's WKWebView neither works:
 * WebKit ignores `<a download>` for blobs and `window.print()` unless the
 * host app implements them. So the page asks the app, through a message
 * handler the app registers, to show a save panel or the print panel.
 */

interface NativeHandler {
  postMessage(message: unknown): void;
}

function handler(): NativeHandler | undefined {
  const webkit = (window as unknown as { webkit?: { messageHandlers?: Record<string, NativeHandler> } }).webkit;
  return webkit?.messageHandlers?.["rendezvous"];
}

export function isNativeApp(): boolean {
  return handler() !== undefined;
}

/** Save a file: native save panel in the app, a download in a browser. */
export async function saveFile(name: string, blob: Blob): Promise<void> {
  const native = handler();
  if (native !== undefined) {
    const bytes = new Uint8Array(await blob.arrayBuffer());
    let binary = "";
    for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
    native.postMessage({ kind: "save", name, base64: btoa(binary) });
    return;
  }
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

/** Print the page (the print panel offers "Save as PDF"). */
export function printPage(): void {
  const native = handler();
  if (native !== undefined) native.postMessage({ kind: "print" });
  else window.print();
}
