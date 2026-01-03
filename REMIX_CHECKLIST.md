# Remix Checklist for New Client

When cloning this repo for a new client, update the following files and values:

## 1. Business Configuration (`client/src/config/business.ts`)

This is the single source of truth. Update every field here to match the new client.

- **Business Identity**: `businessName`, `primaryPhone`, `primaryEmail`, `websiteUrl`
- **Address**: `streetAddress`, `city`, `state`, `postalCode`
- **Hours**: Update `openingHours` array
- **Service Areas**: Update `areasServedCities` (critical for location page generation)
- **Services**: Update `services` array (critical for service page generation)
- **Integrations**:
  - `formspreeEndpoint`: Create a new form at Formspree and paste the URL here.
  - `ga4MeasurementId`: Add Google Analytics ID if available.
  - `mapsShareUrl`: Go to Google Maps -> Share -> Embed a map -> Copy HTML -> Extract the `src` URL.

## 2. Branding

- **Colors**: Update `primaryAccentColor` and `secondaryAccentColor` in `businessConfig` (if implemented to override Tailwind) or update `client/src/index.css` / `tailwind.config.ts`.
- **Logo**: Replace `client/public/assets/images/logo.png` (or update path in config).
- **Hero Image**: Replace `client/public/assets/images/hero.jpg` (or update path in config).

## 3. SEO & Content

- **Static Generation**: Run `npx tsx scripts/generate-static.ts` to regenerate `sitemap.xml`, `robots.txt`, and `llms.txt` after updating the config.
- **Blog**: If using SeoBot, add the API key to `businessConfig` (or environment variables) and ensure the fetch script is active.

## 4. Verification

- Click all navigation links.
- Test "Get a Quote" form submission (check Formspree email).
- specific location pages (e.g., `/locations/san-clemente`).
- Verify Google Map shows correct location.
- Check footer links.

## 5. Deployment

- Build command: `npm run build`
- Ensure `dist` folder contains all assets.
