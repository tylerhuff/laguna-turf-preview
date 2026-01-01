
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PUBLIC_DIR = path.resolve(__dirname, '../client/public/assets');
const QUALITY = 80;
const MAX_WIDTH = 1600; // Resize huge images

// Helper to get file size in KB
const getFileSizeKB = (filePath) => {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
};

// Recursive function to walk directories
async function walkAndOptimize(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await walkAndOptimize(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const webpPath = filePath.replace(ext, '.webp');
        
        let shouldConvert = false;
        
        if (!fs.existsSync(webpPath)) {
          console.log(`[NEW] Creating WebP for: ${file}`);
          shouldConvert = true;
        } else {
          // Check if source is newer than webp
          const sourceStat = fs.statSync(filePath);
          const webpStat = fs.statSync(webpPath);
          if (sourceStat.mtime > webpStat.mtime) {
             console.log(`[UPDATE] Source changed, updating WebP for: ${file}`);
             shouldConvert = true;
          }
        }

        if (shouldConvert) {
          try {
            const originalSize = getFileSizeKB(filePath);
            
            await sharp(filePath)
              .resize({ width: MAX_WIDTH, withoutEnlargement: true })
              .webp({ quality: QUALITY })
              .toFile(webpPath);
            
            const newSize = getFileSizeKB(webpPath);
            const savings = (100 - (newSize / originalSize * 100)).toFixed(1);
            
            console.log(`✅ Optimized ${file}: ${originalSize}KB -> ${newSize}KB (${savings}% savings)`);
          } catch (err) {
            console.error(`❌ Error optimizing ${file}:`, err);
          }
        }
      }
    }
  }
}

console.log(`🚀 Starting Media Optimization Audit in ${PUBLIC_DIR}...`);
if (fs.existsSync(PUBLIC_DIR)) {
  walkAndOptimize(PUBLIC_DIR)
    .then(() => console.log('✨ Media Optimization Complete!'))
    .catch(err => console.error('Fatal Error:', err));
} else {
  console.error(`Directory not found: ${PUBLIC_DIR}`);
}
