import { businessConfig } from "@/config/business";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  // Placeholder portfolio data - in production this would likely be in business config
  const portfolioItems = [
    {
      title: "Modern Kitchen Remodel",
      category: "Renovation",
      description: "Complete overhaul of a 1980s kitchen into a modern chef's paradise.",
      image: null // Placeholder
    },
    {
      title: "Bathroom Renovation",
      category: "Bath",
      description: "Spa-like master bathroom transformation with custom tiling.",
      image: null
    },
    {
      title: "Outdoor Living Space",
      category: "Exterior",
      description: "Custom deck and patio design for year-round entertainment.",
      image: null
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Work</h1>
          <p className="text-xl text-gray-600">
            A showcase of our recent projects and transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                {/* Image Placeholder */}
                <span>Project Image</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to start your own project?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss how we can bring your vision to life.
          </p>
          <div className="flex justify-center gap-4">
             <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90">
               Get a Quote
             </Link>
             <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
               View Services
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
