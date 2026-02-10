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
  imagePath?: string;
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
  brandColors?: {
    primary?: string;      // Main brand color (green for landscaping)
    cta?: string;          // Call-to-action buttons (orange)
    accent?: string;       // Secondary accent (brown/wood)
    navBg?: string;        // Navigation background
    topBar?: string;       // Top bar background
  };

  // Integrations
  ga4MeasurementId?: string;
  formspreeEndpoint: string;
  seobotApiKey?: string;
}

export const businessConfig: BusinessConfig = {
  businessName: "Laguna Turf",
  tagline: "Professional Artificial Grass Installation & Sales",
  primaryPhone: "+1-888-356-9192",
  phoneDisplay: "(888) 356-9192",
  primaryEmail: "info@lagunaturf.com",
  websiteUrl: "https://lagunaturf.com",
  priceRange: "$$",
  insuredBonded: true,
  foundedYear: "2010",
  licenseNumber: "SGW Landscape Authorized Dealer",

  streetAddress: "", // Orange County area
  city: "Orange County",
  state: "CA",
  postalCode: "92677",
  country: "US",

  openingHours: [
    { day: "Monday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Sunday", open: "By Appointment", close: "By Appointment" }
  ],
  availabilityNote: "Free in-home estimates available - Call 888-356-9192",

  areasServedCities: [
    "Laguna Niguel",
    "Laguna Hills", 
    "Laguna Beach",
    "Newport Beach",
    "Mission Viejo",
    "Lake Forest",
    "Irvine",
    "Costa Mesa",
    "Huntington Beach",
    "San Juan Capistrano",
    "Ladera Ranch",
    "Coto de Caza",
    "Rancho Santa Margarita",
    "Dana Point",
    "San Clemente",
    "Aliso Viejo",
    "Tustin",
    "Orange"
  ],

  services: [
    {
      name: "Residential Artificial Grass",
      slug: "residential-artificial-grass",
      imagePath: "/service-residential.jpg",
      shortDescription: "Premium artificial turf installation for front and back yards.",
      longDescription: "Transform your residential landscape with our high-quality artificial grass. No more mowing, no more watering, no more dead spots and no more dormant seasons. With Laguna Turf your yards will have that perfectly manicured look all year round! We offer an array of products for your front and back yards with a full range of colors and densities to fit your needs.",
      serviceBenefits: [
        "No more mowing or watering",
        "Year-round green appearance",
        "Eliminates dead spots",
        "Water conservation",
        "Low maintenance solution",
        "Professional installation"
      ],
      processSteps: [
        { name: "Free Consultation", description: "In-home estimate and product selection" },
        { name: "Site Preparation", description: "Remove existing grass and prepare base" },
        { name: "Installation", description: "Professional laying of your new artificial grass" },
        { name: "Completion", description: "Final inspection and clean-up" }
      ],
      pricingTiers: [
        { name: "Standard Installation", priceRange: "Free estimate", includes: ["Site preparation", "Premium artificial grass", "Professional installation", "Clean-up"] },
        { name: "Premium Package", priceRange: "Free estimate", includes: ["Enhanced base preparation", "Top-tier grass products", "Drainage system", "Extended warranty"] }
      ],
      faqs: [
        { question: "How long does artificial grass last?", answer: "Our high-quality artificial grass can last 15-20 years with proper installation and minimal maintenance." },
        { question: "Is artificial grass safe for children?", answer: "Yes! Our artificial grass is 100% safe for children and pets, with non-toxic materials and proper drainage." }
      ],
      primaryKeywords: ["artificial grass", "synthetic turf", "lawn replacement", "artificial turf Orange County"]
    },
    {
      name: "Pet System Installation",
      slug: "pet-artificial-grass",
      imagePath: "/service-pet.jpg",
      shortDescription: "Specialized artificial grass systems designed for pets.",
      longDescription: "At Laguna Turf we love our animals too. That's why it was so important for us to come up with a product system rather than just an artificial grass product. Our pet system is 100% pet safe and durable enough for large animals. The pet system starts at the base and is apparent through every layer of the installation process, ensuring proper drainage and odor control.",
      serviceBenefits: [
        "100% pet safe materials",
        "Durable for large animals",
        "Superior drainage system",
        "Odor control technology",
        "Easy to clean and maintain",
        "Non-toxic and antimicrobial"
      ],
      processSteps: [
        { name: "Pet Assessment", description: "Evaluate your pets' needs and usage patterns" },
        { name: "Custom Base", description: "Install specialized drainage base for pets" },
        { name: "Pet Turf Installation", description: "Install pet-specific artificial grass system" },
        { name: "Final Setup", description: "Training on maintenance and care" }
      ],
      pricingTiers: [
        { name: "Pet System", priceRange: "Free estimate", includes: ["Pet-safe artificial grass", "Enhanced drainage base", "Antimicrobial infill", "Professional installation"] }
      ],
      faqs: [
        { question: "How do I clean pet waste from artificial grass?", answer: "Simply remove solid waste and rinse the area with water. Our drainage system handles liquids naturally." },
        { question: "Will the artificial grass get hot for my pets?", answer: "We offer heat-resistant options and can recommend cooling infills for areas with direct sun exposure." }
      ],
      primaryKeywords: ["pet artificial grass", "dog turf", "pet-safe synthetic grass", "artificial grass for pets"]
    },
    {
      name: "Custom Putting Greens",
      slug: "putting-greens",
      imagePath: "/service-putting.jpg",
      shortDescription: "Professional artificial putting greens for your backyard.",
      longDescription: "Laguna Turf golf greens come in three different performance levels: Fun, Intermediate and Pro! No matter what you are looking for in an artificial putting green, we are the caddy you have been looking for. All of our products have been highly tested and made to get as close to the real thing as possible, bringing the golf course experience to your home.",
      serviceBenefits: [
        "Three performance levels available",
        "Realistic golf course experience",
        "Custom design and installation",
        "All-weather playability",
        "Low maintenance",
        "Professional installation"
      ],
      processSteps: [
        { name: "Design Consultation", description: "Assess space and discuss your putting green goals" },
        { name: "Custom Design", description: "Create a putting green layout tailored to your space" },
        { name: "Installation", description: "Professional installation with proper base and drainage" },
        { name: "Setup", description: "Final adjustments and instruction on use" }
      ],
      pricingTiers: [
        { name: "Fun Level", priceRange: "Free estimate", includes: ["Basic putting surface", "Standard installation", "Simple design"] },
        { name: "Intermediate Level", priceRange: "Free estimate", includes: ["Enhanced putting surface", "Custom contours", "Professional installation"] },
        { name: "Pro Level", priceRange: "Free estimate", includes: ["Tournament-grade surface", "Complex design features", "Premium installation"] }
      ],
      faqs: [
        { question: "What's the difference between the performance levels?", answer: "Fun level is great for casual putting, Intermediate offers more realistic ball roll, and Pro level provides tournament-quality performance." },
        { question: "Can you install putting greens on slopes?", answer: "Yes! We can design custom putting greens to work with your existing landscape contours." }
      ],
      primaryKeywords: ["putting green", "artificial putting green", "backyard putting green", "golf green installation"]
    },
    {
      name: "Commercial Artificial Turf",
      slug: "commercial-turf",
      imagePath: "/service-commercial.jpg",
      shortDescription: "Professional artificial grass solutions for businesses.",
      longDescription: "Laguna Turf knows the costs associated with keeping your commercial grounds looking professional and clean. Artificial grass offers a solution for your business on multiple levels: cut watering and maintenance costs to zero, maintain that professional landscape look your clients expect, and be part of the growing majority of businesses doing their part to help the environment.",
      serviceBenefits: [
        "Zero watering and maintenance costs",
        "Professional appearance year-round",
        "Environmentally responsible choice",
        "Durable for high traffic areas",
        "Cost-effective long-term solution",
        "Custom commercial installation"
      ],
      processSteps: [
        { name: "Site Assessment", description: "Evaluate commercial property needs and traffic patterns" },
        { name: "Product Selection", description: "Choose appropriate commercial-grade turf" },
        { name: "Installation", description: "Professional commercial installation with minimal disruption" },
        { name: "Maintenance Plan", description: "Provide ongoing maintenance recommendations" }
      ],
      pricingTiers: [
        { name: "Commercial Installation", priceRange: "Free estimate", includes: ["Commercial-grade turf", "Professional installation", "Warranty", "Maintenance plan"] }
      ],
      faqs: [
        { question: "Is artificial grass suitable for high-traffic commercial areas?", answer: "Yes! Our commercial-grade artificial grass is specifically designed to handle heavy foot traffic and maintain its appearance." },
        { question: "How much can we save on maintenance costs?", answer: "Most businesses save 70-90% on landscape maintenance costs by switching to artificial grass." }
      ],
      primaryKeywords: ["commercial artificial grass", "business turf", "commercial landscaping", "artificial grass installation"]
    },
    {
      name: "Free Consultation & Estimates",
      slug: "consultation",
      shortDescription: "Comprehensive in-home consultation and free estimates.",
      longDescription: "Laguna Turf prides itself on its ability to ensure our clients are happy. We proudly offer FREE in-home estimates to anyone looking to make the jump to artificial grass. We understand how difficult it can be to understand the products and how appealing the savings are. We are here to take all the guesswork out of your decision and help you understand each of our artificial grass products so you can make an informed decision.",
      serviceBenefits: [
        "Completely free consultation",
        "No-obligation estimates",
        "Product education and selection",
        "Area measurements included",
        "Design recommendations",
        "Professional guidance"
      ],
      processSteps: [
        { name: "Schedule", description: "Book your free in-home consultation" },
        { name: "Assessment", description: "Evaluate your space and discuss needs" },
        { name: "Education", description: "Learn about different artificial grass options" },
        { name: "Estimate", description: "Receive detailed pricing and timeline" }
      ],
      pricingTiers: [
        { name: "Free Consultation", priceRange: "No cost", includes: ["In-home visit", "Product samples", "Detailed estimate", "Design consultation"] }
      ],
      faqs: [
        { question: "Is the consultation really free?", answer: "Yes! We provide free in-home consultations with no obligation to purchase." },
        { question: "What should I prepare for the consultation?", answer: "Just have an idea of your goals and any questions about artificial grass. We'll handle the rest!" }
      ],
      primaryKeywords: ["free estimate", "artificial grass consultation", "in-home estimate", "turf consultation"]
    }
  ],

  aggregateRatingValue: 5.0,
  aggregateRatingCount: 50,
  
  reviewCards: [
    {
      name: "Jennifer M.",
      rating: 5,
      text: "Laguna Turf transformed our backyard completely! The artificial grass looks so realistic that our neighbors thought it was real. The installation team was professional, clean, and finished on schedule. No more watering bills and it looks perfect year-round.",
      city: "Laguna Niguel",
      date: "10/15/2024"
    },
    {
      name: "Michael K.",
      rating: 5,
      text: "We installed artificial grass for our two large dogs and it's been amazing. Easy to clean, drains perfectly, and the dogs love it. The Laguna Turf team really knew what they were doing with the pet system. Highly recommend!",
      city: "Newport Beach",
      date: "9/22/2024"
    },
    {
      name: "Sarah L.",
      rating: 5,
      text: "The putting green they installed in our backyard is incredible. My husband practices every day and says it feels just like a real course. The quality and attention to detail was outstanding. Worth every penny!",
      city: "Mission Viejo",
      date: "8/30/2024"
    },
    {
      name: "David R.",
      rating: 5,
      text: "From consultation to completion, Laguna Turf was professional and reliable. They explained everything clearly, showed up on time, and left our property spotless. The artificial grass has saved us so much time and water. Excellent service!",
      city: "Lake Forest",
      date: "7/18/2024"
    },
    {
      name: "Tiffany & Donna S.",
      rating: 5,
      text: "Exceptional Work, Couldn't Have Imagined A More Perfect Backyard For Our Little Girl!!! Thank You Laguna Turf",
      city: "Rancho Santa Margarita",
      date: "6/25/2024"
    },
    {
      name: "Robert T.",
      rating: 5,
      text: "Outstanding work on our commercial property. The artificial grass has maintained its appearance despite heavy foot traffic and has significantly reduced our maintenance costs. Professional installation and great customer service.",
      city: "Costa Mesa",
      date: "5/12/2024"
    }
  ],

  formspreeEndpoint: "https://formspree.io/f/lagunaturf", // Update with actual endpoint
  seobotApiKey: "",
  mapsShareUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106473.8142432059!2d-117.68284232890625!3d33.61226559999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd86b8ff34f9%3A0x3d9f4b6c8e2e5f1e!2sLaguna%20Niguel%2C%20CA!5e0!3m2!1sen!2sus",
  mapsQueryOverride: "Laguna Turf Laguna Niguel Orange County",

  // Brand colors - matching lagunaturf.com (green grass + orange accents)
  primaryAccentColor: "#166534", // Forest green (primary brand)
  secondaryAccentColor: "#ea580c", // Orange (CTA/accent - matches their site)
  
  // Full brand color scheme
  brandColors: {
    primary: "#166534",    // Forest green (grass)
    cta: "#ea580c",        // Orange (buttons, links)
    accent: "#8B4513",     // Saddle brown (wood/fence)
    navBg: "#166534",      // Green nav bar
    topBar: "#5D4037",     // Dark brown top bar
  },
  
  // Logo & Images
  logoPath: "/logo.png",
  heroImagePath: "/hero.jpg",
};
