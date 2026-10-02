// Copies the deployed web app (repo root) into app-store/www for the iOS build.
// The web-only service worker and install manifest are left out: inside the
// native app every file is already bundled, so they aren't needed.
import { cpSync, rmSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const www = join(here, '..', 'www');

rmSync(www, { recursive: true, force: true });
mkdirSync(www, { recursive: true });
for (const item of ['index.html', 'assets', 'photos', 'icons']) {
  cpSync(join(root, item), join(www, item), { recursive: true });
}

// index.html: drop the web manifest link (not used by the native app).
const indexPath = join(www, 'index.html');
let html = readFileSync(indexPath, 'utf8');
html = html.replace(/\s*<link rel="manifest"[^>]*>/, '');
writeFileSync(indexPath, html);

if (!existsSync(join(www, 'assets'))) throw new Error('assets missing');
console.log('www ready:', www);
