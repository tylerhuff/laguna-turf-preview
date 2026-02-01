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
  businessName: "Standard Plumbing OC",
  tagline: "Leak Detection & Repair Specialists",
  primaryPhone: "+1XXXXXXXXXX", // Need actual phone
  phoneDisplay: "(XXX) XXX-XXXX", // Need actual phone
  primaryEmail: "info@standardplumbingoc.com",
  websiteUrl: "https://standardplumbingoc.com",
  priceRange: "$$",
  insuredBonded: true,

  streetAddress: "", // Dana Point area
  city: "Dana Point",
  state: "CA",
  postalCode: "92629",
  country: "US",

  openingHours: [
    { day: "Monday", open: "7:00 AM", close: "8:00 PM" },
    { day: "Tuesday", open: "7:00 AM", close: "8:00 PM" },
    { day: "Wednesday", open: "7:00 AM", close: "8:00 PM" },
    { day: "Thursday", open: "7:00 AM", close: "8:00 PM" },
    { day: "Friday", open: "7:00 AM", close: "8:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "2:00 PM" },
    { day: "Sunday", open: "Closed", close: "Closed" }
  ],
  availabilityNote: "Emergency services available",

  areasServedCities: [
    "Dana Point",
    "Laguna Niguel",
    "Laguna Hills",
    "Laguna Beach",
    "San Juan Capistrano",
    "Mission Viejo",
    "Rancho Santa Margarita",
    "Aliso Viejo",
    "San Clemente",
    "Irvine"
  ],

  services: [
    {
      name: "Water Leak Detection & Repair",
      slug: "water-leak-detection",
      shortDescription: "State-of-the-art leak detection using modern electronic equipment.",
      longDescription: "Water leaks are serious situations that require immediate inspection and professional repair to prevent more serious damage to your home or business. We offer state of the art leak detection using the most modern electronic listening devices, thermal imaging, and electronic line tracing equipment that accurately determines the source of your leak and offers the best and most noninvasive route for repair.",
      serviceBenefits: [
        "Modern electronic listening devices",
        "Thermal imaging detection",
        "Electronic line tracing equipment",
        "Non-invasive repair solutions",
        "Same-day emergency service"
      ],
      processSteps: [
        { name: "Inspection", description: "Thorough assessment using advanced detection equipment" },
        { name: "Diagnosis", description: "Accurately determine the source and cause of the leak" },
        { name: "Repair Plan", description: "Provide options for the best and most cost-effective repair" },
        { name: "Repair", description: "Professional repair with minimal disruption to your home" }
      ],
      pricingTiers: [
        { name: "Detection Only", priceRange: "Call for quote", includes: ["Full leak detection service", "Detailed report"] },
        { name: "Detection + Repair", priceRange: "Call for quote", includes: ["Detection", "Repair", "Warranty"] }
      ],
      faqs: [
        { question: "What are signs of a potential leak?", answer: "Watch for wet spots around exterior, wall discoloration, bubbling paint, warm spots in floor, musty smell, sudden increase in water bill, or dripping sounds in walls while no water is being used." },
        { question: "Do you offer emergency leak repair?", answer: "Yes! We respond to emergency plumbing situations and can often arrive the same day." }
      ],
      primaryKeywords: ["leak detection", "water leak repair", "slab leak", "pipe leak", "plumber Orange County"]
    },
    {
      name: "Pex Repipes",
      slug: "pex-repipes",
      shortDescription: "Complete home repiping with durable Pex piping systems.",
      longDescription: "If your old copper system is getting to the point where leaks are a common occurrence then it's recommended to consider repiping the entire system. Pex piping is not only more affordable but much more durable than copper piping. The pex material isn't susceptible to Southern California's water treatments that destroy copper systems, with chloramine being the number one offender!",
      serviceBenefits: [
        "More affordable than copper",
        "More durable than copper piping",
        "Resistant to chloramine damage",
        "Long-lasting leak-free solution",
        "Professional installation"
      ],
      processSteps: [
        { name: "Assessment", description: "Evaluate your current plumbing system" },
        { name: "Planning", description: "Design the optimal piping layout" },
        { name: "Installation", description: "Replace old pipes with new Pex system" },
        { name: "Testing", description: "Pressure test and verify all connections" }
      ],
      pricingTiers: [
        { name: "Whole House Repipe", priceRange: "Call for quote", includes: ["Complete system replacement", "All fixtures connected", "Permits and inspections"] }
      ],
      faqs: [
        { question: "Why is Pex better than copper?", answer: "Pex is more resistant to the chloramine in Southern California water that corrodes copper pipes over time, making it a longer-lasting solution." },
        { question: "How long does a repipe take?", answer: "Most whole-house repipes can be completed in 1-2 days." }
      ],
      primaryKeywords: ["pex repipe", "whole house repipe", "copper pipe replacement", "repiping service"]
    },
    {
      name: "Water Heater Services",
      slug: "water-heaters",
      shortDescription: "Water heater installation, repair, and replacement.",
      longDescription: "A water heater is an essential part of your home's plumbing system. Over time water heater tanks deteriorate from the inside, which can lead to discolored water coming from sinks or showers. Eventually this deterioration will lead to a leak from your water heater tank.",
      serviceBenefits: [
        "Expert installation",
        "All major brands",
        "Tank and tankless options",
        "Energy-efficient upgrades",
        "Same-day service available"
      ],
      processSteps: [
        { name: "Diagnosis", description: "Assess your current water heater condition" },
        { name: "Recommendation", description: "Provide repair or replacement options" },
        { name: "Installation", description: "Professional installation with proper permits" },
        { name: "Testing", description: "Verify proper operation and temperature" }
      ],
      pricingTiers: [
        { name: "Repair", priceRange: "Call for quote", includes: ["Diagnosis", "Parts", "Labor"] },
        { name: "Replacement", priceRange: "Call for quote", includes: ["New water heater", "Installation", "Old unit disposal"] }
      ],
      faqs: [
        { question: "What are signs my water heater needs replacing?", answer: "Discolored or gritty water, hot water runs out quickly, doesn't get hot enough, moisture around tank, rotten egg smell, or popping/crackling sounds." },
        { question: "How long do water heaters last?", answer: "Tank water heaters typically last 8-12 years with proper maintenance." }
      ],
      primaryKeywords: ["water heater installation", "water heater repair", "tankless water heater", "hot water heater"]
    },
    {
      name: "Seismic Gas Valves",
      slug: "seismic-gas-valves",
      shortDescription: "Automatic gas shutoff valves for earthquake protection.",
      longDescription: "Automatic gas shutoff valves activate and shut off your home or business's natural gas supply in the event of a 5.4 or greater earthquake. One out of every four fires in California after an earthquake is related to a natural gas leak. Make sure your home or business is protected. In compliance with Section 19202 of the State of California.",
      serviceBenefits: [
        "Automatic earthquake shutoff",
        "Fire prevention",
        "California code compliant",
        "Peace of mind protection",
        "Professional installation"
      ],
      processSteps: [
        { name: "Assessment", description: "Evaluate your gas line setup" },
        { name: "Installation", description: "Install the seismic valve at the meter" },
        { name: "Testing", description: "Verify proper operation" },
        { name: "Documentation", description: "Provide compliance documentation" }
      ],
      pricingTiers: [
        { name: "Installation", priceRange: "Free quote", includes: ["Seismic valve", "Professional installation", "Compliance certificate"] }
      ],
      faqs: [
        { question: "Is a seismic gas valve required in California?", answer: "While not required for existing homes, it's highly recommended and required for new construction under Section 19202 of the State of California." },
        { question: "Will it shut off for small earthquakes?", answer: "The valve activates at 5.4 magnitude or greater to avoid unnecessary shutoffs." }
      ],
      primaryKeywords: ["seismic gas valve", "earthquake gas shutoff", "gas safety valve", "California gas code"]
    },
    {
      name: "Preventative Maintenance",
      slug: "preventative-maintenance",
      shortDescription: "Regular plumbing inspections to prevent costly repairs.",
      longDescription: "The plumbing in your home is a complicated network of connected pipes, valves, drains and fixtures that keep your home or business operating. In order to make sure your plumbing system operates effectively, regular system inspections are recommended. Little problems that are inexpensive to fix can lead to big problems and costly repairs if not addressed early.",
      serviceBenefits: [
        "Prevent costly emergency repairs",
        "Extend system lifespan",
        "Identify potential problems early",
        "Professional system inspection",
        "Peace of mind"
      ],
      processSteps: [
        { name: "Inspection", description: "Thorough examination of all plumbing components" },
        { name: "Testing", description: "Pressure tests and flow verification" },
        { name: "Report", description: "Detailed findings and recommendations" },
        { name: "Maintenance", description: "Address any minor issues found" }
      ],
      pricingTiers: [
        { name: "Inspection", priceRange: "Call for quote", includes: ["Full system inspection", "Detailed report", "Recommendations"] }
      ],
      faqs: [
        { question: "What do you inspect during maintenance?", answer: "We check angle stop valves, water pressure, visible pipes, water heater, fixtures, and look for signs of leaks or corrosion." },
        { question: "How often should I have my plumbing inspected?", answer: "We recommend annual inspections to catch small problems before they become expensive emergencies." }
      ],
      primaryKeywords: ["plumbing maintenance", "plumbing inspection", "preventative plumbing", "plumbing checkup"]
    },
    {
      name: "Gas Line Services",
      slug: "gas-lines",
      shortDescription: "Gas line repair, installation, and repipes.",
      longDescription: "Professional gas line services including repairs, new installations, and complete gas repipes. Safety is our top priority when working with gas lines.",
      serviceBenefits: [
        "Licensed gas line work",
        "Safety-focused approach",
        "Leak detection and repair",
        "New appliance hookups",
        "Code compliant installations"
      ],
      processSteps: [
        { name: "Safety Check", description: "Verify safe working conditions" },
        { name: "Assessment", description: "Evaluate the gas line issue or installation needs" },
        { name: "Work", description: "Perform repairs or installation" },
        { name: "Testing", description: "Pressure test and leak check all work" }
      ],
      pricingTiers: [
        { name: "Repair/Installation", priceRange: "Call for quote", includes: ["Assessment", "Materials", "Labor", "Testing"] }
      ],
      faqs: [
        { question: "Do you install gas lines for new appliances?", answer: "Yes, we can run new gas lines for ranges, dryers, outdoor grills, and other gas appliances." }
      ],
      primaryKeywords: ["gas line repair", "gas line installation", "gas repipe", "gas leak repair"]
    }
  ],

  aggregateRatingValue: 5.0,
  aggregateRatingCount: 50,
  
  reviewCards: [
    {
      name: "William S.",
      rating: 5,
      text: "Tony & Taylor performed awesome service fixing my slab leak. They were very prompt, clean and explained everything in great detail. The fee was very reasonable. For free, they fixed one of my valves that had a slow leak and performed a pressure test on my main line. I highly recommend this company.",
      city: "Laguna Hills",
      date: "5/25/2024"
    },
    {
      name: "Sydney R.",
      rating: 5,
      text: "Tony was a LIFE SAVER. We had an emergency plumbing issue and he got out of bed in the middle of the night to help us. He was at our place within 20 mins and fixed the issue quickly. He was so professional, calm, kind. For any and all plumbing issues we will be calling Tony!",
      city: "Dana Point",
      date: "8/26/2023"
    },
    {
      name: "Imad D.",
      rating: 5,
      text: "Tony is responsive, prompt, friendly, respectful, and honest. We had a slab leak, which he came out to fix the same day. He's going to be our go to plumber from now on. We highly recommend Standard Plumbing!",
      city: "Dana Point",
      date: "5/18/2023"
    },
    {
      name: "Don R.",
      rating: 5,
      text: "Tony Vinciguerra has serviced three of our families households. He has been superior in his workmanship, reliability and promptness. We have been impressed with his fair pricing. This company is one to experience for your needs.",
      city: "Laguna Niguel",
      date: "1/10/2023"
    },
    {
      name: "Brian R.",
      rating: 5,
      text: "Tony's responsiveness for a water slab leak was incredible. We had shut off the main valve due to the leak. He took our call in the evening and said he would see us in the morning. He arrived at our home in Laguna Niguel at the time committed. Within 30 minutes he had completed his testing and identified what needed to be done.",
      city: "Laguna Niguel",
      date: "12/27/2022"
    },
    {
      name: "Peyman L.",
      rating: 5,
      text: "Tony is a really nice guy and cares to do a great job. If you are looking for someone professional who knows what he is doing, call Tony!",
      city: "Orange County",
      date: "12/1/2025"
    }
  ],

  formspreeEndpoint: "https://formspree.io/f/example", // Update with actual endpoint
  seobotApiKey: "",
  mapsShareUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.35318955467!2d-117.75661897382814!3d33.48091989999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce8a2e2c82d1d%3A0x5b4e5f18b5d1d6e9!2sDana%20Point%2C%20CA!5e0!3m2!1sen!2sus",
  mapsQueryOverride: "Standard Plumbing OC Dana Point",

  // Brand colors - blue theme for plumbing
  primaryAccentColor: "#1e40af", // Professional blue
};
