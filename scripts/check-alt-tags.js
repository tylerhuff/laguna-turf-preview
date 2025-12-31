import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../client/src');

function findFiles(dir, extension) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(file, extension));
    } else {
      if (file.endsWith(extension)) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = findFiles(rootDir, '.tsx');
let issues = 0;

console.log('Checking for missing alt tags in images...');

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Simple regex to find img tags without alt attribute
  // Matches <img ... > and checks if alt= is missing
  // This is a basic check and might have false positives/negatives with complex multi-line props
  
  // Strategy: Find all <img ... /> strings
  const imgTags = content.match(/<img[^>]+>/g);
  
  if (imgTags) {
    imgTags.forEach((tag, index) => {
      if (!tag.includes('alt=')) {
        console.error(`[MISSING ALT] ${path.relative(rootDir, file)}: ${tag}`);
        issues++;
      } else {
        // Check for empty alt that isn't explicitly empty string (e.g. alt={variable} is ok, alt="" is ok)
        // This regex just checks presence.
      }
    });
  }
});

if (issues === 0) {
  console.log('✅ All images have alt tags!');
} else {
  console.error(`❌ Found ${issues} images without alt tags.`);
  process.exit(1);
}
