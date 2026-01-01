
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_TO_RESIZE = [
  {
    path: 'client/public/assets/images/local-search-grid-after.webp',
    width: 600,
    suffix: '-mobile'
  },
  {
    path: 'client/public/assets/images/local-search-grid-before.webp',
    width: 600,
    suffix: '-mobile'
  },
  {
    path: 'client/public/assets/images/AscendEquities.webp',
    width: 600,
    suffix: '-mobile'
  },
  {
    path: 'client/public/assets/images/seo-hero.webp',
    width: 800,
    suffix: '-mobile'
  }
];

async function resizeImages() {
  console.log('Starting specific resize tasks...');
  
  for (const task of IMAGES_TO_RESIZE) {
    const inputPath = path.resolve(__dirname, '..', task.path);
    const dir = path.dirname(inputPath);
    const ext = path.extname(inputPath);
    const name = path.basename(inputPath, ext);
    const outputPath = path.join(dir, `${name}${task.suffix}${ext}`);
    
    if (fs.existsSync(inputPath)) {
      console.log(`Resizing ${inputPath} -> ${outputPath} (width: ${task.width})`);
      try {
        await sharp(inputPath)
          .resize({ width: task.width })
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`✅ Created ${outputPath}`);
      } catch (e) {
        console.error(`❌ Failed to resize ${inputPath}:`, e);
      }
    } else {
      console.log(`⚠️ File not found: ${inputPath}`);
    }
  }
}

resizeImages();
