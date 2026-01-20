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
    "Mission Viejo",
    "Aliso Viejo",
    "Laguna Beach",
    "San Clemente",
    "Dana Point",
    "San Juan Capistrano"
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
    },
    {
      name: "Bathroom Remodeling",
      slug: "bathroom-remodeling",
      shortDescription: "Luxurious bathroom makeovers and upgrades.",
      longDescription: "Turn your bathroom into a spa-like retreat. We handle everything from tile work and plumbing to vanity installation and lighting, creating a space that is both functional and beautiful.",
      serviceBenefits: [
        "Spa-like atmosphere",
        "Improved water efficiency",
        "Modern fixtures",
        "Increased home value"
      ],
      processSteps: [
        { name: "Concept", description: "Discussing style, fixtures, and layout." },
        { name: "Demo", description: "Removing old tub, shower, and vanity." },
        { name: "Plumbing & Electrical", description: "Updating systems to code." },
        { name: "Finishing", description: "Tiling, painting, and fixture installation." }
      ],
      pricingTiers: [
        { name: "Update", priceRange: "$5k - $10k", includes: ["New vanity", "Toilet", "Paint"] },
        { name: "Full Remodel", priceRange: "$15k - $30k", includes: ["Tile shower", "New tub", "Flooring"] }
      ],
      faqs: [
        { question: "How long is the bathroom out of commission?", answer: "Typically 2-3 weeks for a full remodel." }
      ],
      primaryKeywords: ["bathroom remodel", "shower installation", "vanity upgrade"]
    },
    {
      name: "Outdoor Living & Decks",
      slug: "outdoor-living",
      shortDescription: "Custom decks, patios, and outdoor spaces.",
      longDescription: "Expand your living space outdoors with our custom deck and patio services. Whether you want a simple wood deck or a full outdoor kitchen, we build durable and stylish structures.",
      serviceBenefits: [
        "Expanded entertainment space",
        "Durable materials",
        "Custom design",
        "Increases property appeal"
      ],
      processSteps: [
        { name: "Site Analysis", description: "Measuring the space and checking soil/grading." },
        { name: "Design", description: "Creating a layout that fits your yard and lifestyle." },
        { name: "Build", description: "Constructing the frame and decking." },
        { name: "Finish", description: "Staining, sealing, and adding railings." }
      ],
      pricingTiers: [
        { name: "Deck", priceRange: "$10k - $25k", includes: ["Composite or wood decking", "Railings"] },
        { name: "Patio Cover", priceRange: "$5k - $15k", includes: ["Attached or freestanding structure"] }
      ],
      faqs: [
        { question: "Do I need a permit for a deck?", answer: "Most decks require a permit, which we handle." }
      ],
      primaryKeywords: ["deck builder", "patio cover", "outdoor kitchen"]
    },
    {
      name: "Flooring Installation",
      slug: "flooring-installation",
      shortDescription: "Hardwood, tile, laminate, and vinyl flooring.",
      longDescription: "Upgrade your home with beautiful new flooring. We install all types of flooring including hardwood, luxury vinyl plank, tile, and laminate, ensuring a perfect finish every time.",
      serviceBenefits: [
        "Durability",
        "Wide variety of styles",
        "Easy maintenance",
        "Professional installation"
      ],
      processSteps: [
        { name: "Selection", description: "Choosing the right material for your needs." },
        { name: "Prep", description: "Removing old flooring and leveling the subfloor." },
        { name: "Install", description: "Precision laying of the new floor." },
        { name: "Trim", description: "Installing baseboards and transitions." }
      ],
      pricingTiers: [
        { name: "Laminate/Vinyl", priceRange: "$5 - $10 /sqft", includes: ["Material and labor"] },
        { name: "Hardwood/Tile", priceRange: "$10 - $20 /sqft", includes: ["Material and labor"] }
      ],
      faqs: [
        { question: "How long does installation take?", answer: "Usually 1-3 days depending on the area size." }
      ],
      primaryKeywords: ["flooring installer", "hardwood floors", "tile installation"]
    },
    {
      name: "Painting Services",
      slug: "painting-services",
      shortDescription: "Interior and exterior residential painting.",
      longDescription: "Refresh your home with a fresh coat of paint. Our professional painters provide meticulous interior and exterior painting services, using high-quality paints for long-lasting results.",
      serviceBenefits: [
        "Clean and precise lines",
        "Surface preparation",
        "High-quality paints",
        "Protects your home"
      ],
      processSteps: [
        { name: "Prep", description: "Masking, sanding, and priming surfaces." },
        { name: "Paint", description: "Applying multiple coats for even coverage." },
        { name: "Inspect", description: "Checking for imperfections." },
        { name: "Cleanup", description: "Leaving your home spotless." }
      ],
      pricingTiers: [
        { name: "Room", priceRange: "$300 - $800", includes: ["Walls", "Trim"] },
        { name: "Exterior", priceRange: "$3k - $8k", includes: ["Full exterior prep and paint"] }
      ],
      faqs: [
        { question: "Do you use eco-friendly paint?", answer: "Yes, we offer low-VOC options upon request." }
      ],
      primaryKeywords: ["house painter", "interior painting", "exterior painting"]
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
