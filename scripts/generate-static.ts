import { businessConfig } from "../client/src/config/business";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to get root dir (assuming this script is in /scripts or /script)
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "client", "public");

function generateRobotsTxt() {
  const content = `User-agent: *
Allow: /
Sitemap: ${businessConfig.websiteUrl}/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, "robots.txt"), content);
  console.log("Generated robots.txt");
}

function generateLlmsTxt() {
  const servicesList = businessConfig.services.map(s => `- ${s.name}: ${s.shortDescription}`).join("\n");
  const areasList = businessConfig.areasServedCities.join(", ");
  
  const content = `# ${businessConfig.businessName}

${businessConfig.tagline}

## Contact
- Phone: ${businessConfig.phoneDisplay}
- Email: ${businessConfig.primaryEmail}
- Website: ${businessConfig.websiteUrl}
- Address: ${businessConfig.streetAddress}, ${businessConfig.city}, ${businessConfig.state} ${businessConfig.postalCode}

## Hours
${businessConfig.openingHours.map(h => `- ${h.day}: ${h.open} - ${h.close}`).join("\n")}

## Services
${servicesList}

## Service Areas
${areasList}
`;
  fs.writeFileSync(path.join(publicDir, "llms.txt"), content);
  console.log("Generated llms.txt");
}

function generateSitemapXml() {
  const baseUrl = businessConfig.websiteUrl;
  const pages = [
    "",
    "/services",
    "/service-areas",
    "/about",
    "/contact",
    "/resources",
    "/privacy-policy",
    "/terms-of-service",
    "/accessibility"
  ];

  // Add services
  businessConfig.services.forEach(s => {
    pages.push(`/services/${s.slug}`);
  });

  // Add locations
  businessConfig.areasServedCities.forEach(city => {
    const citySlug = city.toLowerCase().replace(/\s+/g, '-');
    pages.push(`/locations/${citySlug}`);
    // Add location + service combos
    businessConfig.services.forEach(s => {
      pages.push(`/locations/${citySlug}/${s.slug}`);
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml);
  console.log("Generated sitemap.xml");
}

function main() {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  generateRobotsTxt();
  generateLlmsTxt();
  generateSitemapXml();
}

main();
