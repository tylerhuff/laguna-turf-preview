import { businessConfig } from "@/config/business";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            Professional solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessConfig.services.map((service) => (
            <div key={service.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="p-8 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h2>
                <p className="text-gray-600 mb-6 flex-1">
                  {service.shortDescription}
                </p>
                
                {service.serviceBenefits && service.serviceBenefits.length > 0 && (
                   <ul className="mb-6 space-y-2">
                     {service.serviceBenefits.slice(0, 3).map((benefit, idx) => (
                       <li key={idx} className="flex items-start text-sm text-gray-500">
                         <span className="mr-2 text-primary">•</span> {benefit}
                       </li>
                     ))}
                   </ul>
                )}

                <Link href={`/services/${service.slug}`} className="inline-flex items-center justify-center w-full py-3 bg-gray-50 hover:bg-primary hover:text-white text-gray-800 font-semibold rounded-lg transition-colors border border-gray-200 hover:border-primary">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
