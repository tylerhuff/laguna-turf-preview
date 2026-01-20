import { businessConfig } from "@/config/business";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceAreas() {
  // Deduplicate cities if any and sort them
  const uniqueCities = Array.from(new Set(businessConfig.areasServedCities)).sort();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Areas We Serve</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Providing top-quality services to {businessConfig.city} and the surrounding communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueCities.map((city) => (
              <Link key={city} href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="group block bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{city}</h3>
                  <p className="text-gray-600 mb-6">
                    Expert residential and commercial services available in {city}.
                  </p>
                  <span className="text-primary font-bold text-sm uppercase tracking-wide group-hover:underline decoration-2 underline-offset-4">
                    View Service Area
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 bg-gray-900 text-white p-8 md:p-16 rounded-3xl text-center relative overflow-hidden">
            <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't see your city listed?</h2>
               <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                 We frequently travel outside our primary service area for larger projects. Contact us to check if we can help you with your next project.
               </p>
               <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold h-14 px-8 text-lg" asChild>
                 <Link href="/contact">Contact Us Today</Link>
               </Button>
            </div>
            
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
