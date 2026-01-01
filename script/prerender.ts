import puppeteer from 'puppeteer';
import { preview } from 'vite';
import { mkdir, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { execSync } from 'child_process';

const routes = [
  '/',
  '/san-clemente',
  '/privacy-policy',
  '/terms-of-service',
  '/about-us',
  '/industries/contractors',
  '/industries/home-builders',
  '/industries/professional-services',
  '/industries/painters',
  '/services',
  '/services/web-design',
  '/services/search-engine-optimization',
  '/services/website-care',
  '/portfolio',
  '/contact-us',
  '/resources',
  '/resources/how-online-marketing-works',
  '/resources/google-business-profile-basics',
  '/resources/first-30-days',
  '/resources/ongoing-monthly-work'
];

async function prerender() {
  console.log('Starting preview server...');
  const server = await preview({
    preview: { 
      port: 0, // Let Vite pick a free port
      open: false 
    },
    configFile: 'vite.config.ts',
    root: 'client' 
  });
  
  // Get the actual port
  const address = server.httpServer.address();
  const port = typeof address === 'object' && address ? address.port : 5000;
  const baseUrl = `http://localhost:${port}`;
  
  console.log(`Preview server running on port ${port}`);

  console.log('Launching browser...');
  const executablePath = execSync('which chromium').toString().trim();
  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to desktop to ensure full render
    await page.setViewport({ width: 1280, height: 800 });

    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      
      const url = `${baseUrl}${route}`;
      await page.goto(url, { waitUntil: 'networkidle0' });
      
      // Wait a bit extra for animations/suspense to settle
      await new Promise(r => setTimeout(r, 1000));

      // Remove scripts that might cause double-hydration issues (optional, but safer for "pure" static feel)
      // Actually, we WANT hydration so React takes over. 
      // But we want the HTML to be fully populated.
      
      const html = await page.content();
      
      // Determine file path
      const relativePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const filePath = join('dist/public', relativePath);
      
      // Ensure dir exists
      await mkdir(dirname(filePath), { recursive: true });
      
      // Write file
      await writeFile(filePath, html);
    }

  } catch (e) {
    console.error('Error during prerendering:', e);
    process.exit(1);
  } finally {
    await browser.close();
    server.httpServer.close();
    console.log('Prerendering complete.');
  }
}

prerender();
