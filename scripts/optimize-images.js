import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.resolve(__dirname, '../client/public/assets/images');
const mobileSuffix = '-mobile';

async function processImages() {
  try {
    const files = await fs.readdir(imagesDir);
    
    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png|webp|avif)$/i)) continue;
      if (file.includes(mobileSuffix)) continue; // Skip existing mobile versions
      
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const inputPath = path.join(imagesDir, file);
      
      try {
        // 1. Generate WebP Desktop Version (if not already webp)
        if (ext.toLowerCase() !== '.webp') {
          const webpPath = path.join(imagesDir, `${name}.webp`);
          if (!files.includes(`${name}.webp`)) {
            console.log(`Generating Desktop WebP: ${name}.webp`);
            await sharp(inputPath)
              .webp({ quality: 80 })
              .toFile(webpPath);
          }
        }

        // 2. Generate Mobile WebP Version (600px width)
        const mobileWebpPath = path.join(imagesDir, `${name}${mobileSuffix}.webp`);
        if (!files.includes(`${name}${mobileSuffix}.webp`)) {
          console.log(`Generating Mobile WebP: ${name}${mobileSuffix}.webp`);
          await sharp(inputPath)
            .resize(600, null, { withoutEnlargement: true }) // Resize to max 600px width, auto height
            .webp({ quality: 80 })
            .toFile(mobileWebpPath);
        }
      } catch (innerErr) {
        console.error(`Failed to process ${file}:`, innerErr.message);
      }
    }
    console.log('✅ Image optimization complete!');
  } catch (err) {
    console.error('Error processing images:', err);
  }
}

processImages();
