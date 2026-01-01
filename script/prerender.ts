
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPublic = path.resolve(__dirname, '../dist/public');

const routes = [
  '/',
  '/about-us',
  '/san-clemente',
  '/services/web-design',
  '/services/search-engine-optimization',
  '/services/website-care',
  '/portfolio',
  '/industries/contractors',
  '/industries/home-builders',
  '/industries/painters',
  '/industries/professional-services',
  '/resources',
  '/contact-us',
  '/privacy-policy',
  '/terms-of-service'
];

export async function prerender() {
  console.log('Starting prerendering...');

  // 1. Start a simple static server
  const app = express();
  app.use(express.static(distPublic));
  // Fallback to index.html for SPA routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPublic, 'index.html'));
  });

  const server = app.listen(3000);
  console.log('Static server started on port 3000');

  try {
    // 2. Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      const page = await browser.newPage();
      
      // Set viewport to desktop to ensure all content renders
      await page.setViewport({ width: 1280, height: 800 });

      await page.goto(`http://localhost:3000${route}`, {
        waitUntil: 'networkidle0', // Wait until network is idle (no more requests)
        timeout: 60000
      });

      // Wait a bit extra for React Helmet to update the head
      await new Promise(r => setTimeout(r, 1000));

      // Get the full HTML
      const html = await page.content();

      // Determine where to save the file
      // If route is '/', save to index.html (overwriting the shell)
      // If route is '/about', save to about/index.html
      let filePath;
      if (route === '/') {
        filePath = path.join(distPublic, 'index.html');
      } else {
        const routeDir = path.join(distPublic, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        filePath = path.join(routeDir, 'index.html');
      }

      fs.writeFileSync(filePath, html);
      console.log(`Saved ${filePath}`);
      
      await page.close();
    }

    await browser.close();
    console.log('Prerendering complete.');

  } catch (error) {
    console.error('Error during prerendering:', error);
    throw error;
  } finally {
    server.close();
  }
}

// Allow running directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  prerender();
}
