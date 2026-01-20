import { businessConfig } from "@/config/business";
import { Link } from "wouter";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { QuoteRequestModal } from "@/components/QuoteRequestModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-32 overflow-hidden">
        {businessConfig.heroImagePath && (
          <div className="absolute inset-0 z-0">
             <img src={businessConfig.heroImagePath} alt="Hero" className="w-full h-full object-cover opacity-40" />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {businessConfig.tagline}
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Professional, reliable, and experienced. We provide top-quality services for residential and commercial clients in {businessConfig.city} and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 px-8"
                onClick={() => setModalOpen(true)}
              >
                Get a Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg h-14 px-8"
                asChild
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start text-sm font-medium">
              {businessConfig.insuredBonded && (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Licensed, Insured & Bonded</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              We offer a wide range of services to meet your needs. Quality workmanship is our promise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessConfig.services.slice(0, 6).map((service, index) => (
              <div key={index} className="group bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.shortDescription}
                </p>
                <Link href={`/services/${service.slug}`} className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="border-2">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About / Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose {businessConfig.businessName}?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Experience & Expertise</h3>
                    <p className="text-gray-600">Years of industry experience delivering top-notch results for our clients.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-600">We stand behind our work with a satisfaction guarantee on every project.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden fees or surprises. You'll know exactly what to expect.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center">
               {/* Placeholder if no image, or the actual image */}
               <span className="sr-only">About Us Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {businessConfig.reviewCards.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteRequestModal isOpen={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
