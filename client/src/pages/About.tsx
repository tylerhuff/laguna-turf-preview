import { businessConfig } from "@/config/business";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Dedicated to excellence in every project we undertake.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
             <div className="prose text-gray-600 leading-relaxed space-y-4">
               <p>
                 {businessConfig.businessName} has been serving the {businessConfig.city} area {businessConfig.foundedYear ? `since ${businessConfig.foundedYear}` : 'for years'}. 
                 We started with a simple mission: to provide reliable, high-quality service that our neighbors can trust.
               </p>
               <p>
                 Over the years, we have built a reputation for excellence, integrity, and superior craftsmanship. 
                 We take pride in our work and treat every project as if it were our own home.
               </p>
               <p>
                 Our team consists of skilled professionals who are passionate about what they do. 
                 From the initial consultation to the final walkthrough, we are with you every step of the way to ensure your complete satisfaction.
               </p>
             </div>
          </div>
          <div className="relative h-[400px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
               {/* Placeholder or real image */}
               <span className="font-semibold">Team / Work Image</span>
             </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We believe in honest communication and transparent pricing. No shortcuts, no surprises.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We use the best materials and techniques to ensure lasting results that exceed expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                We show up on time, respect your property, and finish the job on schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
