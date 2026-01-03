import { businessConfig } from "@/config/business";
import { Link, useRoute } from "wouter";
import NotFound from "./not-found";
import { Button } from "@/components/ui/button";
import { QuoteRequestModal } from "@/components/QuoteRequestModal";
import { useState } from "react";
import { CheckCircle2, MapPin } from "lucide-react";
import { BusinessMap } from "@/components/BusinessMap";

export default function Location() {
  const [match, params] = useRoute("/locations/:city/:service?");
  const [modalOpen, setModalOpen] = useState(false);

  if (!match) return <NotFound />;

  // Normalize city param for comparison
  const cityParam = params.city.replace(/-/g, ' ');
  // Case insensitive match
  const city = businessConfig.areasServedCities.find(c => c.toLowerCase() === cityParam.toLowerCase());

  if (!city) return <NotFound />;

  const serviceSlug = params.service;
  const service = serviceSlug ? businessConfig.services.find(s => s.slug === serviceSlug) : null;
  
  // If service param exists but not found, 404
  if (serviceSlug && !service) return <NotFound />;

  const pageTitle = service 
    ? `${service.name} in ${city}, ${businessConfig.state}`
    : `${businessConfig.businessName} in ${city}, ${businessConfig.state}`;

  const description = service
    ? `Professional ${service.name.toLowerCase()} services in ${city}. ${service.shortDescription}`
    : `Your trusted local contractor in ${city}, ${businessConfig.state}. Offering a wide range of services including ${businessConfig.services.slice(0, 3).map(s => s.name).join(', ')}.`;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
            {pageTitle}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            {description}
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 px-8"
            onClick={() => setModalOpen(true)}
          >
            Get a Quote in {city}
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Serving {city} and Surrounding Areas
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {businessConfig.businessName} is proud to serve the {city} community. We are dedicated to providing high-quality workmanship and exceptional customer service on every project.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us in {city}?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                   <CheckCircle2 className="w-5 h-5 text-primary" />
                   <span className="text-gray-700">Local expertise and knowledge</span>
                </li>
                <li className="flex items-center gap-3">
                   <CheckCircle2 className="w-5 h-5 text-primary" />
                   <span className="text-gray-700">Timely and reliable service</span>
                </li>
                <li className="flex items-center gap-3">
                   <CheckCircle2 className="w-5 h-5 text-primary" />
                   <span className="text-gray-700">Fully licensed and insured</span>
                </li>
              </ul>
            </div>

            {service ? (
               <div className="prose max-w-none text-gray-600">
                  <p>{service.longDescription}</p>
               </div>
            ) : (
               <div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Services in {city}</h3>
                 <ul className="grid sm:grid-cols-2 gap-4">
                   {businessConfig.services.map(s => (
                     <li key={s.slug}>
                       <Link 
                         href={`/locations/${params.city}/${s.slug}`}
                         className="flex items-center p-4 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow border border-gray-100 hover:border-primary/50"
                       >
                         <span className="font-semibold text-gray-800">{s.name}</span>
                       </Link>
                     </li>
                   ))}
                 </ul>
               </div>
            )}
          </div>

          <div className="space-y-8">
            <BusinessMap className="w-full h-[400px] shadow-lg rounded-xl" />
            
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-xl">
               <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                 <MapPin className="text-primary w-5 h-5" />
                 Local Service Area
               </h3>
               <p className="text-gray-600">
                 We are located in {businessConfig.city}, {businessConfig.state} and have been serving {city} for years. Contact us for local references!
               </p>
            </div>
          </div>
        </div>
      </div>

      <QuoteRequestModal 
        isOpen={modalOpen} 
        onOpenChange={setModalOpen}
        defaultServiceSlug={service?.slug}
        title={`Get a Quote in ${city}`}
      />
    </div>
  );
}
