#!/bin/bash
# Builds Rendez-Vous.app in the repository root:
#   web build (dist/) -> Swift app, universal (Apple silicon + Intel), macOS 11+
#   -> app icon -> Contents/Resources/web
# Needs: Node (see .nvmrc) and the Xcode command line tools (xcode-select --install).
# Run again after any change to the app or its content, and commit the result.
set -euo pipefail
cd "$(dirname "$0")/.."

APP="Rendez-Vous.app"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

# SKIP_WEB=1 reuses an existing dist/ (only for testing the Swift side).
if [ "${SKIP_WEB:-}" != "1" ]; then npm run -s build; fi

rm -rf "$APP"
mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"

for arch in arm64 x86_64; do
  xcrun swiftc -O -swift-version 5 -target "$arch-apple-macos11.0" mac/RendezVous.swift -o "$WORK/RendezVous-$arch"
done
lipo -create "$WORK/RendezVous-arm64" "$WORK/RendezVous-x86_64" -output "$APP/Contents/MacOS/Rendez-Vous"

xcrun swiftc -swift-version 5 mac/icon.swift -o "$WORK/icon"
"$WORK/icon" "$WORK/icon.png"
ICONSET="$WORK/AppIcon.iconset"; mkdir "$ICONSET"
for px in 16 32 128 256 512; do
  sips -z $px $px "$WORK/icon.png" --out "$ICONSET/icon_${px}x${px}.png" >/dev/null
  sips -z $((px * 2)) $((px * 2)) "$WORK/icon.png" --out "$ICONSET/icon_${px}x${px}@2x.png" >/dev/null
done
iconutil -c icns "$ICONSET" -o "$APP/Contents/Resources/AppIcon.icns"

cp -R dist "$APP/Contents/Resources/web"

cat > "$APP/Contents/Info.plist" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleName</key><string>Rendez-Vous</string>
  <key>CFBundleDisplayName</key><string>Rendez-Vous</string>
  <key>CFBundleIdentifier</key><string>app.rendezvous.french</string>
  <key>CFBundleExecutable</key><string>Rendez-Vous</string>
  <key>CFBundleIconFile</key><string>AppIcon</string>
  <key>CFBundlePackageType</key><string>APPL</string>
  <key>CFBundleShortVersionString</key><string>1.0</string>
  <key>CFBundleVersion</key><string>1</string>
  <key>LSMinimumSystemVersion</key><string>11.0</string>
  <key>NSHighResolutionCapable</key><true/>
  <key>LSApplicationCategoryType</key><string>public.app-category.education</string>
</dict>
</plist>
PLIST

# Ad-hoc signature: required to run on Apple silicon; not an Apple identity.
codesign --force --deep --sign - "$APP"
echo "Built $APP ($(du -sh "$APP" | cut -f1))"
