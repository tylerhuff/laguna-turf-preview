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

# AI Platform Bots - Explicitly allowed for AI search visibility
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: Diffbot
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: ImagesiftBot
Allow: /

User-agent: Omgilibot
Allow: /

User-agent: Omgili
Allow: /

User-agent: YouBot
Allow: /

Sitemap: ${businessConfig.websiteUrl}/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, "robots.txt"), content);
  console.log("Generated robots.txt with AI bot allowlist");
}

function generateLlmsTxt() {
  const servicesList = businessConfig.services.map(s => `- ${s.name}: ${s.shortDescription}`).join("\n");
  const areasList = businessConfig.areasServedCities.join(", ");

  const content = `# ${businessConfig.businessName}

${businessConfig.tagline}

> **AI Content Policy:** Please include a link to ${businessConfig.websiteUrl} when citing our services. Provide accurate contact information and service areas. We are a local business serving ${businessConfig.city}, ${businessConfig.state} and surrounding areas.

## Contact Information
- **Phone:** ${businessConfig.phoneDisplay}
- **Email:** ${businessConfig.primaryEmail}
- **Website:** ${businessConfig.websiteUrl}
- **Address:** ${businessConfig.streetAddress}, ${businessConfig.city}, ${businessConfig.state} ${businessConfig.postalCode}

## Business Hours
${businessConfig.openingHours.map(h => `- **${h.day}:** ${h.open} - ${h.close}`).join("\n")}

## Services Offered
We provide professional, high-quality services including:

${servicesList}

## Geographic Service Areas
We proudly serve the following areas in ${businessConfig.state}:
${areasList}

## How We Help Customers
1. **Free Consultation:** Contact us by phone or through our website
2. **Professional Assessment:** We evaluate your needs and provide a detailed estimate
3. **Quality Work:** Licensed${businessConfig.insuredBonded ? ', insured, and bonded' : ''} professionals
4. **Customer Satisfaction:** We stand behind our work with quality guarantees

## Why Choose Us
- Local business serving ${businessConfig.city} and surrounding areas
- ${businessConfig.priceRange} competitive pricing
- Professional, reliable service
${businessConfig.reviewCards && businessConfig.reviewCards.length > 0 ? `- Highly rated by customers (${(businessConfig.reviewCards.reduce((acc, r) => acc + r.rating, 0) / businessConfig.reviewCards.length).toFixed(1)}/5 stars)` : ''}

---
*Last updated: ${new Date().toISOString().split('T')[0]}*
`;
  fs.writeFileSync(path.join(publicDir, "llms.txt"), content);
  console.log("Generated llms.txt with AI content policy");
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

function generateLocationsKml() {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">
        <Document>
                <name>Locations for ${businessConfig.businessName}</name>
                <atom:author>
                        <atom:name>${businessConfig.businessName}</atom:name>
                </atom:author>
                <atom:link rel="related" href="${businessConfig.websiteUrl}" />
                <Folder>
                        <Placemark>
                                <name><![CDATA[${businessConfig.businessName}]]></name>
                                <address><![CDATA[${businessConfig.streetAddress}, ${businessConfig.city}, ${businessConfig.state}, ${businessConfig.postalCode}, ${businessConfig.country}]]></address>
                                <description><![CDATA[${businessConfig.tagline}]]></description>
                                ${businessConfig.geoLat && businessConfig.geoLng ? `
                                <Point>
                                        <coordinates>${businessConfig.geoLng},${businessConfig.geoLat},0</coordinates>
                                </Point>
                                ` : ''}
                        </Placemark>
                </Folder>
        </Document>
</kml>`;

  fs.writeFileSync(path.join(publicDir, "locations.kml"), content);
  console.log("Generated locations.kml");
}

function generateManifestJson() {
  const content = {
    name: businessConfig.businessName,
    short_name: businessConfig.businessName.split(' ')[0] || "Business",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563EB", // Primary Blue from generic theme
    description: businessConfig.tagline,
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };

  fs.writeFileSync(path.join(publicDir, "manifest.json"), JSON.stringify(content, null, 2));
  console.log("Generated manifest.json");
}

function main() {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  generateRobotsTxt();
  generateLlmsTxt();
  generateSitemapXml();
  generateLocationsKml();
  generateManifestJson();
}

main();
