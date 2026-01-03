import React from 'react';
import { Helmet } from 'react-helmet';
import { businessConfig } from '@/config/business';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
  schema?: Record<string, any>;
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  image,
  type = "website",
  schema 
}: Partial<SEOProps>) {
  const siteUrl = businessConfig.websiteUrl;
  
  // Default values from config
  const defaultTitle = `${businessConfig.businessName} | ${businessConfig.tagline}`;
  const defaultDescription = `${businessConfig.businessName} provides professional services in ${businessConfig.city}, ${businessConfig.state}. Call ${businessConfig.phoneDisplay} for a free estimate.`;
  const defaultImage = businessConfig.logoPath || `${siteUrl}/opengraph.jpg`;

  const fullCanonical = canonical 
    ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`)
    : siteUrl;

  // Ensure title has branding if not present
  const fullTitle = title 
    ? (title.includes(businessConfig.businessName) ? title : `${title} | ${businessConfig.businessName}`)
    : defaultTitle;

  const finalDescription = description || defaultDescription;
  
  const fullImage = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
    : defaultImage;

  // Base Schema for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessConfig.businessName,
    "image": fullImage,
    "telephone": businessConfig.primaryPhone,
    "email": businessConfig.primaryEmail,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessConfig.streetAddress,
      "addressLocality": businessConfig.city,
      "addressRegion": businessConfig.state,
      "postalCode": businessConfig.postalCode,
      "addressCountry": businessConfig.country
    },
    "geo": businessConfig.geoLat ? {
      "@type": "GeoCoordinates",
      "latitude": businessConfig.geoLat,
      "longitude": businessConfig.geoLng
    } : undefined,
    "url": siteUrl,
    "priceRange": businessConfig.priceRange,
    "openingHoursSpecification": businessConfig.openingHours.map(h => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": h.day,
      "opens": h.open,
      "closes": h.close
    }))
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={businessConfig.businessName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema ? [localBusinessSchema, schema] : localBusinessSchema)}
      </script>
    </Helmet>
  );
}
