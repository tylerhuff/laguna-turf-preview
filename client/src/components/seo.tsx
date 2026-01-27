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

  // Base Schema for LocalBusiness with enhanced SEO data
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
    })),
    // Add aggregate rating if reviews exist
    ...(businessConfig.reviewCards && businessConfig.reviewCards.length > 0 && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": (businessConfig.reviewCards.reduce((acc, r) => acc + r.rating, 0) / businessConfig.reviewCards.length).toFixed(1),
        "reviewCount": businessConfig.reviewCards.length,
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
    // Add reviews
    ...(businessConfig.reviewCards && businessConfig.reviewCards.length > 0 && {
      "review": businessConfig.reviewCards.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": review.text,
        "datePublished": review.date || new Date().toISOString()
      }))
    }),
    // Add service areas
    "areaServed": businessConfig.areasServedCities.map(city => ({
      "@type": "City",
      "name": city,
      "addressRegion": businessConfig.state,
      "addressCountry": businessConfig.country
    }))
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* AI Discovery & Indexing - Allow all AI bots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Additional metadata for AI comprehension */}
      <meta name="author" content={businessConfig.businessName} />
      <meta name="geo.region" content={`${businessConfig.country}-${businessConfig.state}`} />
      <meta name="geo.placename" content={businessConfig.city} />
      {businessConfig.geoLat && businessConfig.geoLng && (
        <meta name="geo.position" content={`${businessConfig.geoLat};${businessConfig.geoLng}`} />
      )}
      <meta name="ICBM" content={businessConfig.geoLat && businessConfig.geoLng ? `${businessConfig.geoLat}, ${businessConfig.geoLng}` : undefined} />

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
