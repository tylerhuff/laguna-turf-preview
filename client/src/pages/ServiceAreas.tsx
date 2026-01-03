import { businessConfig } from "@/config/business";
import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { BusinessMap } from "@/components/BusinessMap";

export default function ServiceAreas() {
  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Areas We Serve</h1>
          <p className="text-xl text-gray-600">
            Providing top-quality {businessConfig.businessName} services to {businessConfig.city} and surrounding communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
           {/* Cities List */}
           <div>
             <div className="bg-white rounded-xl shadow-md p-8 mb-8">
               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                 <MapPin className="text-primary w-6 h-6" />
                 Cities Served
               </h2>
               <ul className="grid sm:grid-cols-2 gap-4">
                 {businessConfig.areasServedCities.map((city) => (
                   <li key={city}>
                     <Link 
                       href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
                       className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium p-2 hover:bg-gray-50 rounded-lg"
                     >
                       <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                       {city}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>

             {businessConfig.areasServedNeighborhoods && businessConfig.areasServedNeighborhoods.length > 0 && (
               <div className="bg-white rounded-xl shadow-md p-8">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Neighborhoods</h2>
                 <div className="flex flex-wrap gap-2">
                   {businessConfig.areasServedNeighborhoods.map((hood) => (
                     <span key={hood} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                       {hood}
                     </span>
                   ))}
                 </div>
               </div>
             )}
           </div>

           {/* Map */}
           <div className="lg:h-[600px] h-[400px] sticky top-24">
             <BusinessMap className="w-full h-full shadow-lg rounded-xl border border-gray-200" />
           </div>
        </div>
      </div>
    </div>
  );
}
