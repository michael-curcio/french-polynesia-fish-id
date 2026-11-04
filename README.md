# French Polynesia Fish ID (built app)

Learn the fish of French Polynesia: what to shoot and what to avoid. Offline-capable spearfishing fish-ID cards.

This repository only holds the built web app served by GitHub Pages. Open the site in Safari on an iPhone, tap Share → Add to Home Screen, then open it from the Home Screen once while online; it works offline after that.

Photos come from Wikimedia Commons and iNaturalist under Creative Commons licences that allow commercial use (CC BY, CC BY-SA, CC0) or are public domain; each photo's author and licence are shown in the app.

## Grand Cay Fish ID (`grand-cay/`)

A sister app for Grand Cay, Abaco, in the northern Bahamas, served at `/grand-cay/`. It covers 64 species: what to shoot, what to leave, and the Bahamian rules that apply (Hawaiian sling or pole spear only, no scuba, 200 yards from shore, no-take parks, Nassau grouper and crawfish seasons, visiting-boat limits, protected sharks and turtles).

- **Study:** seven habitat decks plus Trophy targets and Leave it, with swipeable cards (ID marks, look-alikes, hunting, rules, eating and ciguatera risk). A season panel shows whether Nassau grouper and crawfish are open today.
- **Fish ID:** a photo quiz that tracks which fish you've mastered.
- **Fish Info:** questions on rules, safety, hunting, ID and eating.
- **Rules:** the Bahamas rules in one place, with sources.

It is plain HTML, CSS and JavaScript modules with no build step: edit the files in `grand-cay/` directly. Species text lives in `grand-cay/js/data/*.js`. `grand-cay/js/data/photos.js` and `grand-cay/precache.json` are generated from the iNaturalist open-data export, using only CC0, CC BY and CC BY-SA photos; each photo's author and licence are shown in the app and link to the original. When you change app files, bump `VERSION` in `grand-cay/sw.js` so phones pick up the update.

The root `sw.js` skips `/grand-cay/` in its navigation fallback, so the French Polynesia app doesn't take over the Grand Cay URL. If you rebuild the French Polynesia app, keep that rule (in vite-plugin-pwa: `workbox.navigateFallbackDenylist: [/\/grand-cay(\/|$)/]`).

The rules are a summary, not legal advice. Check with the Bahamas Department of Marine Resources before you fish.
