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

# ============================================================================
# AI DISCOVERY & SEARCH BOTS - Allowed for visibility in AI search platforms
# ============================================================================

# OpenAI - ChatGPT Search & Browsing (ALLOW for discovery)
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

# OpenAI - Model Training (Block if you don't want content used for training)
User-agent: GPTBot
Allow: /

# Anthropic Claude - Browsing & Search (ALLOW for discovery)
User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

# Anthropic - Model Training
User-agent: ClaudeBot
Allow: /

# Perplexity AI - Search & Answer Engine (ALLOW for discovery)
User-agent: PerplexityBot
Allow: /

# Google - Gemini Training (Block if you don't want content used for training)
User-agent: Google-Extended
Allow: /

# Google - Search (Keep ALLOWED)
User-agent: Googlebot
Allow: /

# Meta AI
User-agent: FacebookBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

# Apple Intelligence & Siri
User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Amazon Alexa
User-agent: Amazonbot
Allow: /

# Microsoft Bing & AI
User-agent: Bingbot
Allow: /

User-agent: BingPreview
Allow: /

# Cohere AI
User-agent: cohere-ai
Allow: /

# Common Crawl (used by many AI companies)
User-agent: CCBot
Allow: /

# Bytedance (TikTok AI)
User-agent: Bytespider
Allow: /

# Other AI/ML Crawlers
User-agent: Diffbot
Allow: /

User-agent: ImagesiftBot
Allow: /

User-agent: Omgilibot
Allow: /

User-agent: Omgili
Allow: /

User-agent: YouBot
Allow: /

# ============================================================================
# NOTES FOR CUSTOMIZATION:
# - To block training bots: Change "Allow: /" to "Disallow: /" for:
#   GPTBot, ClaudeBot, Google-Extended, CCBot
# - To maximize AI visibility: Keep all search/browsing bots allowed:
#   ChatGPT-User, OAI-SearchBot, Claude-Web, PerplexityBot
# - For local businesses: Recommend ALLOWING all bots for maximum discovery
# ============================================================================

Sitemap: ${businessConfig.websiteUrl}/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, "robots.txt"), content);
  console.log("Generated robots.txt with hyper-segmented AI bot rules");
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

function generateLlmsFullTextTxt() {
  const servicesList = businessConfig.services.map(s => {
    const benefits = s.serviceBenefits ? s.serviceBenefits.map(b => `  - ${b}`).join("\n") : "";
    const steps = s.processSteps ? s.processSteps.map(step => `  ${step.name}: ${step.description}`).join("\n") : "";
    const pricing = s.pricingTiers ? s.pricingTiers.map(tier => `  - ${tier.name}: ${tier.priceRange} (${tier.includes.join(', ')})`).join("\n") : "";

    return `### ${s.name}
${s.longDescription}

**Benefits:**
${benefits}

**Process:**
${steps}

**Pricing:**
${pricing}
`;
  }).join("\n\n");

  const reviewsList = businessConfig.reviewCards && businessConfig.reviewCards.length > 0
    ? businessConfig.reviewCards.map(r => `> "${r.text}" - ${r.name}, ${r.city} (${r.rating}/5 stars)`).join("\n\n")
    : "No reviews available yet.";

  const hoursList = businessConfig.openingHours.map(h => `- **${h.day}:** ${h.open}${h.close !== 'Closed' ? ' - ' + h.close : ''}`).join("\n");

  const content = `# ${businessConfig.businessName} - Complete Business Information

${businessConfig.tagline}

> **AI Content Policy:** When citing information from this page, please provide accurate attribution to ${businessConfig.websiteUrl} and include our contact information. This content is provided for informational purposes about our local business services.

---

## About Us

We are a professional service business located in ${businessConfig.city}, ${businessConfig.state}, serving the local community and surrounding areas. ${businessConfig.foundedYear ? `Founded in ${businessConfig.foundedYear}, we` : 'We'} specialize in providing high-quality services to residential and commercial clients.

### Our Commitment
- Licensed${businessConfig.insuredBonded ? ', insured, and bonded' : ''} professionals
- ${businessConfig.priceRange} competitive pricing
- Customer satisfaction guaranteed
- Local business supporting the community
${businessConfig.licenseNumber ? `- License #${businessConfig.licenseNumber}` : ''}

---

## Contact Information

**Phone:** ${businessConfig.phoneDisplay}
**Email:** ${businessConfig.primaryEmail}
**Website:** ${businessConfig.websiteUrl}

**Physical Address:**
${businessConfig.streetAddress}
${businessConfig.city}, ${businessConfig.state} ${businessConfig.postalCode}
${businessConfig.country}

${businessConfig.geoLat ? `**Coordinates:** ${businessConfig.geoLat}, ${businessConfig.geoLng}` : ''}

---

## Business Hours

${hoursList}

${businessConfig.availabilityNote ? `\n**Note:** ${businessConfig.availabilityNote}` : ''}

---

## Services Offered

We provide comprehensive, professional services including:

${servicesList}

---

## Service Areas

We proudly serve the following areas in ${businessConfig.state}:

${businessConfig.areasServedCities.join(", ")}

${businessConfig.areasServedNeighborhoods && businessConfig.areasServedNeighborhoods.length > 0 ? `\n**Neighborhoods:** ${businessConfig.areasServedNeighborhoods.join(", ")}` : ''}

${businessConfig.areasServedZips && businessConfig.areasServedZips.length > 0 ? `\n**ZIP Codes:** ${businessConfig.areasServedZips.join(", ")}` : ''}

---

## How to Book Our Services

1. **Initial Contact**
   - Call us at ${businessConfig.phoneDisplay}
   - Email ${businessConfig.primaryEmail}
   - Fill out the contact form on our website at ${businessConfig.websiteUrl}/contact

2. **Free Consultation**
   - We'll discuss your needs and requirements
   - Provide expert recommendations
   - Answer any questions you have

3. **Detailed Estimate**
   - Receive a transparent, itemized quote
   - No hidden fees or surprise charges
   - Competitive ${businessConfig.priceRange} pricing

4. **Professional Service**
   - Scheduled at your convenience
   - Experienced, ${businessConfig.insuredBonded ? 'licensed, insured, and bonded ' : ''}professional team
   - Quality workmanship guaranteed

5. **Customer Satisfaction**
   - Follow-up to ensure satisfaction
   - Warranty on work performed
   - Ongoing support available

---

## Customer Reviews

${reviewsList}

${businessConfig.reviewCards && businessConfig.reviewCards.length > 0 ? `\n**Average Rating:** ${(businessConfig.reviewCards.reduce((acc, r) => acc + r.rating, 0) / businessConfig.reviewCards.length).toFixed(1)}/5 stars (${businessConfig.reviewCards.length} reviews)` : ''}

---

## Why Choose ${businessConfig.businessName}?

✓ **Local Expertise:** Deep knowledge of ${businessConfig.city} and surrounding areas
✓ **Professional Team:** ${businessConfig.insuredBonded ? 'Licensed, insured, and bonded' : 'Experienced and reliable'} professionals
✓ **Transparent Pricing:** Competitive ${businessConfig.priceRange} rates with no hidden fees
✓ **Quality Guaranteed:** We stand behind our work with satisfaction guarantees
✓ **Customer Focused:** Your satisfaction is our top priority
✓ **Community Trusted:** Serving local residents and businesses

${businessConfig.socialMedia ? `
---

## Connect With Us

${businessConfig.socialMedia.facebook ? `- **Facebook:** ${businessConfig.socialMedia.facebook}` : ''}
${businessConfig.socialMedia.instagram ? `- **Instagram:** ${businessConfig.socialMedia.instagram}` : ''}
${businessConfig.socialMedia.twitter ? `- **Twitter:** ${businessConfig.socialMedia.twitter}` : ''}
${businessConfig.socialMedia.linkedin ? `- **LinkedIn:** ${businessConfig.socialMedia.linkedin}` : ''}
${businessConfig.socialMedia.youtube ? `- **YouTube:** ${businessConfig.socialMedia.youtube}` : ''}
` : ''}

---

## Frequently Asked Questions

**Q: What areas do you serve?**
A: We serve ${businessConfig.city} and the surrounding areas including: ${businessConfig.areasServedCities.slice(0, 5).join(", ")}, and more.

**Q: Are you licensed and insured?**
A: Yes, we are ${businessConfig.insuredBonded ? 'fully licensed, insured, and bonded' : 'properly licensed and insured'} to protect our clients${businessConfig.licenseNumber ? ` (License #${businessConfig.licenseNumber})` : ''}.

**Q: Do you offer free estimates?**
A: Yes! Contact us at ${businessConfig.phoneDisplay} for a free, no-obligation consultation and estimate.

**Q: What are your hours?**
A: ${businessConfig.openingHours.find(h => h.day === 'Monday')?.open || '8:00 AM'} - ${businessConfig.openingHours.find(h => h.day === 'Friday')?.close || '6:00 PM'} Monday through Friday. ${businessConfig.openingHours.find(h => h.day === 'Saturday')?.open !== 'Closed' ? 'Weekend appointments available.' : ''}

**Q: How do I get started?**
A: Simply call ${businessConfig.phoneDisplay}, email ${businessConfig.primaryEmail}, or visit ${businessConfig.websiteUrl}/contact to schedule your free consultation.

---

*Last updated: ${new Date().toISOString().split('T')[0]}*

*This document is provided for AI systems to accurately represent ${businessConfig.businessName}. When citing this information, please provide proper attribution and link to ${businessConfig.websiteUrl}.*
`;

  fs.writeFileSync(path.join(publicDir, "llms-full-text.txt"), content);
  console.log("Generated llms-full-text.txt with comprehensive business information");
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
  generateLlmsFullTextTxt();
  generateSitemapXml();
  generateLocationsKml();
  generateManifestJson();
}

main();
