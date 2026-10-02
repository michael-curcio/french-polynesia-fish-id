// Renders the App Store icon (1024x1024, square, no alpha) from ../icons/icon.svg
// and writes it into the Xcode asset catalog. Also writes plain launch-screen
// images (light and dark) that match the app's background.
import sharp from 'sharp';
import { readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const app = join(here, '..');
const svg = readFileSync(join(app, '..', 'icons', 'icon.svg'), 'utf8').replace(/rx="112"/, 'rx="0"');

const iconSet = join(app, 'ios/App/App/Assets.xcassets/AppIcon.appiconset');
const icon = await sharp(Buffer.from(svg), { density: 1024 / 512 * 72 })
  .resize(1024, 1024).flatten({ background: '#06131d' }).removeAlpha().png().toBuffer();
for (const f of readdirSync(iconSet)) if (f.endsWith('.png')) rmSync(join(iconSet, f));
writeFileSync(join(iconSet, 'AppIcon-1024.png'), icon);
writeFileSync(join(app, 'store-assets/icon-1024.png'), icon);
writeFileSync(join(iconSet, 'Contents.json'), JSON.stringify({
  images: [{ filename: 'AppIcon-1024.png', idiom: 'universal', platform: 'ios', size: '1024x1024' }],
  info: { author: 'xcode', version: 1 },
}, null, 2));

const splashSet = join(app, 'ios/App/App/Assets.xcassets/Splash.imageset');
for (const f of readdirSync(splashSet)) if (f.endsWith('.png')) rmSync(join(splashSet, f));
const solid = (hex) => sharp({ create: { width: 2732, height: 2732, channels: 3, background: hex } }).png().toBuffer();
writeFileSync(join(splashSet, 'splash-light.png'), await solid('#f5f6f8'));
writeFileSync(join(splashSet, 'splash-dark.png'), await solid('#0b0f14'));
writeFileSync(join(splashSet, 'Contents.json'), JSON.stringify({
  images: [
    { idiom: 'universal', filename: 'splash-light.png', scale: '1x' },
    { idiom: 'universal', filename: 'splash-dark.png', scale: '1x', appearances: [{ appearance: 'luminosity', value: 'dark' }] },
    { idiom: 'universal', scale: '2x' },
    { idiom: 'universal', scale: '3x' },
  ],
  info: { author: 'xcode', version: 1 },
}, null, 2));
console.log('icon and launch images written');
