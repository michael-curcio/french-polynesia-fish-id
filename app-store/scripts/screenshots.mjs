// Captures App Store screenshots (6.9" iPhone, 1320x2868) from app-store/www.
// Run `npm run build:web` first. Adds a simple iOS-style status bar so the
// shots look like the installed app.
import { chromium } from 'playwright';
import http from 'node:http';
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const www = join(here, '..', 'www');
const out = join(here, '..', 'store-assets', 'screenshots');
mkdirSync(out, { recursive: true });

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const p = join(www, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html'));
  if (!existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' });
  res.end(readFileSync(p));
}).listen(0);
const base = `http://localhost:${server.address().port}/`;

const statusBar = `
  :root{--safe-top:62px!important;--safe-bottom:34px!important}
  #__sb{position:fixed;top:0;left:0;right:0;height:62px;z-index:99999;display:flex;align-items:center;justify-content:space-between;padding:8px 34px 0 52px;font:600 17px -apple-system,Inter,system-ui,sans-serif;color:#0f172a;pointer-events:none}
  #__sb svg{display:block}`;
const sbHtml = `<div id="__sb"><span>9:41</span><span style="display:flex;gap:6px;align-items:center">
  <svg width="18" height="12" viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1" fill="#0f172a"/><rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="#0f172a"/><rect x="10" y="3" width="3" height="9" rx="1" fill="#0f172a"/><rect x="15" y="0" width="3" height="12" rx="1" fill="#0f172a"/></svg>
  <svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="#0f172a" opacity=".45"/><rect x="2" y="2" width="18" height="8" rx="1.8" fill="#0f172a"/><rect x="23" y="4" width="1.6" height="4" rx=".8" fill="#0f172a" opacity=".45"/></svg></span></div>`;

const shots = [
  { name: '1-home', url: '#/' },
  { name: '2-trophy-card', url: '#/deck/trophy' },
  { name: '3-hunting', url: '#/deck/trophy', scrollTo: 'h3' },
  { name: '4-species-index', url: '#/fish' },
  { name: '5-fish-id-quiz', url: '#/id' },
];

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 440, height: 956 }, deviceScaleFactor: 3, colorScheme: 'light' });
for (const s of shots) {
  await page.goto(base + s.url);
  await page.waitForLoadState('networkidle');
  await page.addStyleTag({ content: statusBar });
  await page.evaluate((h) => document.body.insertAdjacentHTML('beforeend', h), sbHtml);
  await page.waitForTimeout(900);
  if (s.scrollTo) {
    await page.evaluate((sel) => { const el = [...document.querySelectorAll('article ' + sel)].find(e => e.getBoundingClientRect().left >= 0 && e.getBoundingClientRect().left < 440); el && el.scrollIntoView({ block: 'start' }); }, s.scrollTo);
    await page.evaluate(() => { const sc = [...document.querySelectorAll('*')].find(e => e.scrollHeight > e.clientHeight + 200 && getComputedStyle(e).overflowY !== 'visible'); (sc || document.scrollingElement).scrollBy(0, -140); });
    await page.waitForTimeout(400);
  }
  await page.screenshot({ path: join(out, `${s.name}.png`) });
  console.log('saved', s.name);
}
await browser.close();
server.close();
