export interface ServicePricing {
  name: string;
  priceRange: string;
  includes: string[];
}

export interface ServiceStep {
  name: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  serviceBenefits: string[];
  processSteps: ServiceStep[];
  pricingTiers: ServicePricing[];
  faqs: FAQ[];
  primaryKeywords: string[];
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  city: string;
  date?: string;
}

export interface BusinessConfig {
  // Business Identity
  businessName: string;
  legalBusinessName?: string;
  tagline: string;
  primaryPhone: string;
  phoneDisplay: string;
  primaryEmail: string;
  websiteUrl: string;
  priceRange: string;
  licenseNumber?: string;
  insuredBonded: boolean;
  foundedYear?: string;

  // Address and Geo
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  geoLat?: number;
  geoLng?: number;

  // Hours
  openingHours: { day: string; open: string; close: string }[];
  availabilityNote?: string;

  // Service Areas
  areasServedCities: string[];
  areasServedNeighborhoods?: string[];
  areasServedZips?: string[];

  // Services
  services: Service[];

  // Reviews
  aggregateRatingValue?: number;
  aggregateRatingCount?: number;
  reviewCards: Review[];

  // Maps
  mapsShareUrl?: string;
  mapsQueryOverride?: string;

  // Branding
  primaryAccentColor?: string;
  secondaryAccentColor?: string;
  logoPath?: string;
  heroImagePath?: string;
  fontHeading?: string;
  fontBody?: string;

  // Integrations
  ga4MeasurementId?: string;
  formspreeEndpoint: string;
  seobotApiKey?: string;
}

export const businessConfig: BusinessConfig = {
  businessName: "Coastal Contractor Services",
  tagline: "Reliable local service, done right",
  primaryPhone: "+15555555555",
  phoneDisplay: "(555) 555-5555",
  primaryEmail: "hello@example.com",
  websiteUrl: "https://example.com",
  priceRange: "$$",
  insuredBonded: true,
  
  streetAddress: "123 Main St",
  city: "San Clemente",
  state: "CA",
  postalCode: "92672",
  country: "US",

  openingHours: [
    { day: "Monday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "4:00 PM" },
    { day: "Sunday", open: "Closed", close: "Closed" }
  ],

  areasServedCities: [
    "San Clemente",
    "Dana Point",
    "San Juan Capistrano",
    "Laguna Niguel",
    "Mission Viejo"
  ],

  services: [
    {
      name: "General Remodeling",
      slug: "general-remodeling",
      shortDescription: "Full-service home remodeling and renovations.",
      longDescription: "Transform your home with our expert remodeling services. From concept to completion, we handle every aspect of your renovation project with precision and care.",
      serviceBenefits: [
        "Increases home value",
        "Modernizes your living space",
        "Improves energy efficiency",
        "Customized to your needs"
      ],
      processSteps: [
        { name: "Consultation", description: "We meet to discuss your vision and needs." },
        { name: "Design", description: "Our team creates a detailed plan and 3D rendering." },
        { name: "Construction", description: "Our skilled craftsmen bring the design to life." },
        { name: "Walkthrough", description: "Final inspection to ensure your complete satisfaction." }
      ],
      pricingTiers: [
        { name: "Basic", priceRange: "$5k - $15k", includes: ["Minor updates", "Paint", "Flooring"] },
        { name: "Standard", priceRange: "$15k - $50k", includes: ["Kitchen/Bath remodel", "New fixtures", "Lighting"] },
        { name: "Premium", priceRange: "$50k+", includes: ["Full home renovation", "Structural changes", "High-end finishes"] }
      ],
      faqs: [
        { question: "How long does a typical remodel take?", answer: "Timeline varies by project size, but typically 4-8 weeks." },
        { question: "Do you handle permits?", answer: "Yes, we manage all necessary permits and inspections." }
      ],
      primaryKeywords: ["remodeling", "renovation", "contractor", "home improvement"]
    },
    {
      name: "Kitchen Renovation",
      slug: "kitchen-renovation",
      shortDescription: "Custom kitchen design and installation.",
      longDescription: "Create the kitchen of your dreams with our comprehensive renovation services. We specialize in custom cabinetry, countertops, and modern layouts.",
      serviceBenefits: [
        "Custom cabinetry",
        "High-end appliances",
        "Optimized layout",
        "Increased storage"
      ],
      processSteps: [
        { name: "Initial Meeting", description: "We assess your current kitchen and discuss goals." },
        { name: "Design Phase", description: "Selecting materials, layout, and finishes." },
        { name: "Demolition", description: "Removing old fixtures and preparing the space." },
        { name: "Installation", description: "Installing new cabinets, counters, and appliances." }
      ],
      pricingTiers: [
        { name: "Cosmetic", priceRange: "$10k - $20k", includes: ["Refacing", "New counters", "Backsplash"] },
        { name: "Full Remodel", priceRange: "$25k - $60k", includes: ["New layout", "Custom cabinets", "New flooring"] }
      ],
      faqs: [
        { question: "Can I stay in my home during the remodel?", answer: "Yes, though the kitchen will be unusable for a period." }
      ],
      primaryKeywords: ["kitchen remodel", "custom cabinets", "kitchen design"]
    }
  ],

  reviewCards: [
    {
      name: "John D.",
      rating: 5,
      text: "Excellent work and very professional. Finished on time and on budget.",
      city: "San Clemente"
    },
    {
      name: "Sarah M.",
      rating: 5,
      text: "Transformed our outdated kitchen into a modern masterpiece. Highly recommend!",
      city: "Dana Point"
    },
    {
      name: "Mike R.",
      rating: 4,
      text: "Great communication throughout the project. Very happy with the results.",
      city: "Mission Viejo"
    }
  ],

  formspreeEndpoint: "https://formspree.io/f/example",
  mapsShareUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53308.26188373308!2d-117.65365569502967!3d33.43387819000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce5ce56784d59%3A0x6d64921605333799!2sSan%20Clemente%2C%20CA!5e0!3m2!1sen!2sus!4v1709848245789!5m2!1sen!2sus"
};
