#!/usr/bin/env tsx
/**
 * Client Setup Script
 *
 * Run this script after updating businessConfig to regenerate all dependent files
 * Usage: npm run setup-client
 *
 * This script will:
 * 1. Regenerate all SEO files (robots.txt, sitemap.xml, llms.txt, locations.kml, manifest.json)
 * 2. Validate businessConfig for common issues
 * 3. Provide a checklist of manual tasks to complete
 */

import { businessConfig } from "../client/src/config/business";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

console.log("╔════════════════════════════════════════════════════════════════╗");
console.log("║  Local Service Business Template - Client Setup               ║");
console.log("╚════════════════════════════════════════════════════════════════╝\n");

// Step 1: Validate businessConfig
console.log("📋 Step 1: Validating businessConfig...\n");

const errors: string[] = [];
const warnings: string[] = [];

// Required fields
if (!businessConfig.businessName || businessConfig.businessName === "Orange County Website Company") {
  errors.push("businessName is not set or still has example value");
}

if (!businessConfig.websiteUrl || businessConfig.websiteUrl.includes("example.com")) {
  errors.push("websiteUrl is not set or still has example.com");
}

if (!businessConfig.primaryPhone || businessConfig.primaryPhone === "+18882934787") {
  warnings.push("primaryPhone appears to be example data");
}

if (!businessConfig.primaryEmail || businessConfig.primaryEmail.includes("example.com")) {
  warnings.push("primaryEmail appears to be example data");
}

if (!businessConfig.streetAddress || businessConfig.streetAddress.includes("Default")) {
  warnings.push("streetAddress appears to be example data");
}

if (!businessConfig.ga4MeasurementId) {
  warnings.push("ga4MeasurementId not set - Google Analytics won't work");
}

if (!businessConfig.geoLat || !businessConfig.geoLng) {
  warnings.push("geoLat/geoLng not set - geographic schema will be incomplete");
}

if (!businessConfig.services || businessConfig.services.length === 0) {
  errors.push("No services configured");
}

if (!businessConfig.areasServedCities || businessConfig.areasServedCities.length === 0) {
  warnings.push("No service areas configured");
}

// Display validation results
if (errors.length > 0) {
  console.log("❌ ERRORS - Must fix before deployment:\n");
  errors.forEach(err => console.log(`   • ${err}`));
  console.log("");
}

if (warnings.length > 0) {
  console.log("⚠️  WARNINGS - Recommended to fix:\n");
  warnings.forEach(warn => console.log(`   • ${warn}`));
  console.log("");
}

if (errors.length === 0 && warnings.length === 0) {
  console.log("✅ businessConfig validation passed!\n");
}

if (errors.length > 0) {
  console.log("Please fix errors in /client/src/config/business.ts and run again.\n");
  process.exit(1);
}

// Step 2: Regenerate SEO files
console.log("📋 Step 2: Regenerating SEO files...\n");

try {
  execSync("npm run generate-seo", { stdio: "inherit" });
  console.log("\n✅ SEO files regenerated successfully!\n");
} catch (error) {
  console.error("❌ Failed to regenerate SEO files:", error);
  process.exit(1);
}

// Step 3: Check for common issues
console.log("📋 Step 3: Checking for common issues...\n");

const publicDir = path.join(process.cwd(), "client", "public");

// Check favicon
const faviconPath = path.join(publicDir, "favicon.svg");
if (fs.existsSync(faviconPath)) {
  const faviconContent = fs.readFileSync(faviconPath, "utf8");
  if (faviconContent.includes("Example") || faviconContent.length < 100) {
    warnings.push("Favicon may still be placeholder - update /client/public/favicon.svg");
  }
}

// Check for logo
if (businessConfig.logoPath && businessConfig.logoPath.includes("placeholder")) {
  warnings.push("Logo path appears to be placeholder");
}

// Check social media
if (!businessConfig.socialMedia?.facebook && !businessConfig.socialMedia?.instagram) {
  warnings.push("No social media links configured");
}

// Step 4: Provide manual checklist
console.log("╔════════════════════════════════════════════════════════════════╗");
console.log("║  Manual Setup Checklist                                       ║");
console.log("╚════════════════════════════════════════════════════════════════╝\n");

const checklist = [
  {
    task: "Update businessConfig",
    file: "/client/src/config/business.ts",
    items: [
      "Business name, tagline, and description",
      "Contact info (phone, email, address)",
      "Geographic coordinates (geoLat, geoLng)",
      "Services and pricing",
      "Service areas (cities)",
      "Business hours",
      "Social media links",
      "Google Analytics GA4 ID",
      "Primary accent color (brand color)",
    ]
  },
  {
    task: "Replace placeholder images",
    file: "Multiple files",
    items: [
      "Favicon: /client/public/favicon.svg",
      "Logo: Update logoPath in config and add file",
      "Open Graph image: /client/public/opengraph.jpg (1200x630)",
      "Service images: Update in businessConfig.services",
      "Team photos: Update in businessConfig.teamMembers (if using)",
      "Portfolio images: /client/src/pages/portfolio.tsx (if using)",
    ]
  },
  {
    task: "Configure SEO & Analytics",
    file: "Multiple files",
    items: [
      "Google Analytics 4: Add ga4MeasurementId to config",
      "Google Search Console: Verify ownership",
      "Formspree: Add formspreeEndpoint to config for contact form",
      "SeoBot AI (optional): Add seobotApiKey to config",
      "Google Business Profile: Ensure NAP consistency",
    ]
  },
  {
    task: "Test & Deploy",
    file: "N/A",
    items: [
      "Run 'npm run build' to test build",
      "Run 'npm run preview' to test prerendered pages",
      "Check all pages load correctly",
      "Test contact form submission",
      "Verify mobile responsiveness",
      "Run Lighthouse audit (aim for 90+ scores)",
      "Test on multiple browsers",
    ]
  },
  {
    task: "Post-Deployment",
    file: "N/A",
    items: [
      "Submit sitemap to Google Search Console",
      "Submit sitemap to Bing Webmaster Tools",
      "Verify robots.txt is accessible",
      "Verify llms.txt is accessible (for AI discovery)",
      "Set up Google Business Profile",
      "Create social media business pages",
      "Request customer reviews",
    ]
  }
];

checklist.forEach((section, index) => {
  console.log(`${index + 1}. ${section.task}`);
  if (section.file !== "N/A") {
    console.log(`   File: ${section.file}`);
  }
  console.log("");
  section.items.forEach(item => {
    console.log(`   ☐ ${item}`);
  });
  console.log("");
});

// Summary
console.log("╔════════════════════════════════════════════════════════════════╗");
console.log("║  Summary                                                       ║");
console.log("╚════════════════════════════════════════════════════════════════╝\n");

console.log(`Business Name: ${businessConfig.businessName}`);
console.log(`Website URL: ${businessConfig.websiteUrl}`);
console.log(`Services: ${businessConfig.services.length} configured`);
console.log(`Service Areas: ${businessConfig.areasServedCities.length} cities`);
console.log(`Reviews: ${businessConfig.reviewCards?.length || 0} configured`);
console.log(`SEO Files Generated: ✅`);

if (warnings.length > 0) {
  console.log(`\n⚠️  ${warnings.length} warning(s) - see above for details`);
}

console.log("\n✅ Setup complete! Follow the manual checklist above to finish deployment.\n");
console.log("💡 Tip: Run this script again after updating businessConfig to regenerate all files.\n");
