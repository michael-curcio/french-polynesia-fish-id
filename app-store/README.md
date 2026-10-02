# French Polynesia Fish ID — App Store (iOS) build

This folder turns the web app at the repo root into a native iPhone app with
[Capacitor](https://capacitorjs.com). The GitHub Pages site is unaffected: it is
still served from the repo root on `main`.

## What's already done (no Mac needed)
- **Capacitor 8 iOS project** in `ios/` (Swift Package Manager, no CocoaPods).
  - iPhone only, portrait only, iOS 15+.
  - `ITSAppUsesNonExemptEncryption = NO` (skips export-compliance questions).
  - Home-screen name: **Fish ID**. Bundle ID: **com.michaelcurcio.fpfishid** (change before the first upload if you want; it is permanent afterwards).
  - Status bar follows light/dark mode; launch screen is a plain light/dark background (Capacitor's default logo removed).
- **Web build script**: `npm run build:web` copies the site from the repo root into `www/` without the web-only service worker and manifest (not needed in the app — everything is bundled).
- **App icon**: `store-assets/icon-1024.png` (1024×1024, no transparency), already in the Xcode asset catalog. Regenerate with `npm run icon`.
- **Screenshots**: `store-assets/screenshots/` at 1320×2868 (6.9" iPhone). Regenerate with `npm run screenshots` (run `npm run build:web` first).
- **Listing text**: `LISTING.md` (name, subtitle, description, keywords, review notes).
- **Privacy policy & support pages**: `site/privacy.html`, `site/support.html` (fill in `[SUPPORT EMAIL]` and `[DATE]`).
- All photos allow commercial use (non-commercial ones were removed).

## Decisions still open
1. **Free, or free + one-time unlock?** If paid: add StoreKit (e.g. a Capacitor in-app-purchase plugin), a paywall, and a Restore Purchases button. Not built yet.
2. **Bundle ID** — keep `com.michaelcurcio.fpfishid` or pick another before the first upload.
3. **Support email** for the support/privacy pages and App Store Connect.
4. **EU trader declaration** (only needed to sell in the EU).
5. Optional: a designer-made icon to replace the generated one.

## On the Mac (first session)
Requirements: macOS with the latest **Xcode** (from the Mac App Store), **Node 20+**, and your developer Apple ID.

```bash
git clone https://github.com/michael-curcio/french-polynesia-fish-id
cd french-polynesia-fish-id
git checkout claude/phone-viewing-capability-2kizjs
cd app-store
npm install
npm run sync        # builds www/ and copies it into the iOS project
npm run open        # opens ios/App/App.xcodeproj in Xcode
```

In Xcode:
1. **Xcode → Settings → Accounts → +** and sign in with the developer Apple ID.
2. Select the **App** target → **Signing & Capabilities** → tick *Automatically manage signing* → choose your team.
3. Pick an iPhone simulator (or your plugged-in iPhone) and press **Run**. Check: offline mode, safe areas around the notch, dark mode, links opening in Safari.
4. When it looks right: choose **Any iOS Device (arm64)** → **Product → Archive** → **Distribute App → App Store Connect → Upload**.

Then in App Store Connect: create the app with the same bundle ID, fill in `LISTING.md`, upload the screenshots, set Data Not Collected, test via TestFlight, and submit for review.

## Updating the app later
Change the web app at the repo root as usual, then in `app-store/`:
```bash
npm run sync
```
Bump **Version** (e.g. 1.0.1) and **Build** in Xcode (App target → General), archive and upload again.

## Publishing the support & privacy pages
Copy `site/privacy.html` and `site/support.html` to the repo root on `main` (they'll be at
`https://michael-curcio.github.io/french-polynesia-fish-id/privacy.html` and `/support.html`), or host them anywhere you like.
