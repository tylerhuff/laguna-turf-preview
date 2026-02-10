import { businessConfig } from "@/config/business";
import { Link } from "wouter";
import { CheckCircle2, Star, ArrowRight, ShieldCheck, Quote, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { QuoteRequestModal } from "@/components/QuoteRequestModal";
import { SimpleHeroForm } from "@/components/SimpleHeroForm";
import { GoogleReviews } from "@/components/GoogleReviews";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 lg:py-32 overflow-hidden">
        {businessConfig.heroImagePath && (
          <div className="absolute inset-0 z-0">
             <img src={businessConfig.heroImagePath} alt="Hero" className="w-full h-full object-cover opacity-40" />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="w-full lg:w-3/5 text-center lg:text-left space-y-8">
              {/* Social Proof Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-2">
                 <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                   ))}
                 </div>
                 <span className="text-sm font-medium text-gray-200">Top Rated Service in {businessConfig.city}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                {businessConfig.tagline}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Professional, reliable, and experienced. We provide top-quality services for residential and commercial clients in {businessConfig.city} and surrounding areas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  size="lg" 
                  style={{ backgroundColor: 'var(--brand-cta)', boxShadow: '0 10px 15px -3px var(--brand-cta)' }} className="hover:opacity-90 text-white font-bold text-lg h-16 px-10 lg:hidden"
                  onClick={() => setModalOpen(true)}
                >
                  Get a Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/5 border-2 border-white/20 text-white hover:bg-white hover:text-gray-900 text-lg h-16 px-10 backdrop-blur-sm transition-all"
                  asChild
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
                <Button 
                   size="lg"
                   variant="ghost"
                   className="text-white hover:text-primary hover:bg-white/10 text-lg h-16 px-8"
                   asChild
                >
                   <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              
              <div className="pt-8 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start text-base font-medium text-gray-300">
                {businessConfig.insuredBonded && (
                  <div className="flex items-center gap-3">
                    <ShieldCheck style={{ color: 'var(--brand-cta)' }} className="w-6 h-6" />
                    <span>Licensed, Insured & Bonded</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span>100% Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex w-full lg:w-2/5 justify-end pl-8">
              <div className="w-full max-w-lg transform hover:-translate-y-1 transition-transform duration-300">
                <SimpleHeroForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section (Moved Up) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-block p-3 rounded-full bg-primary/10 mb-6">
                <Quote className="w-8 h-8 text-primary" />
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
             <p className="text-xl text-gray-600">Don't just take our word for it. See what our neighbors in {businessConfig.city} are saying.</p>
          </div>
          
          <div className="mb-12">
            <GoogleReviews />
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center max-w-4xl mx-auto">
             <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 rounded-full p-2">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold">Excellent</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                <p className="text-gray-600 max-w-sm text-left">
                  Based on <strong>{businessConfig.aggregateRatingCount || '50+'} reviews</strong>. We're proud of our reputation in {businessConfig.city}.
                </p>
                <Button asChild variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold">
                   <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessConfig.businessName + ' ' + businessConfig.city)}`} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      Read All Reviews <ExternalLink className="w-4 h-4" />
                   </a>
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Committed to Excellence Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
                 Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Committed to Excellence in Every Detail</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Star className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Experience & Expertise</h3>
                    <p className="text-gray-600 text-lg">Years of industry experience delivering top-notch results for our clients.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-600 text-lg">We stand behind our work with a satisfaction guarantee on every project.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600 text-lg">No hidden fees or surprises. You'll know exactly what to expect.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                 <Button size="lg" className="h-14 px-8 text-lg" onClick={() => setModalOpen(true)}>
                    Work With Us
                 </Button>
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center group">
               {businessConfig.heroImagePath ? (
                 <img src={businessConfig.heroImagePath} alt="About Us" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               ) : (
                 <span className="sr-only">About Us Image</span>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24" style={{ backgroundColor: '#D7CCC8' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Premium artificial grass solutions for residential and commercial properties. Quality installation is our promise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessConfig.services.slice(0, 6).map((service, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 flex flex-col">
                {service.imagePath && (
                  <div className="h-48 overflow-hidden">
                    <img src={service.imagePath} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {service.shortDescription}
                  </p>
                  <Link href={`/services/${service.slug}`} style={{ color: 'var(--brand-cta)' }} className="inline-flex items-center font-bold hover:gap-2 transition-all mt-auto pt-4">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild style={{ backgroundColor: 'var(--brand-cta)' }} className="hover:opacity-90 text-white border-0 px-10 h-14 text-lg font-bold">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Real Results, Real Satisfaction</h2>
                 <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our goal is to build long-lasting relationships with our clients through trust, reliability, and superior craftsmanship. Here is what some of our recent clients have to say about their experience working with us.
                 </p>
                 <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                       <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 italic text-sm mb-4">"Absolutely transformed our home. The team was professional, clean, and finished ahead of schedule."</p>
                       <p className="font-bold text-gray-900">- Jennifer T.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                       <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                       </div>
                       <p className="text-gray-600 italic text-sm mb-4">"Best contractor we've ever hired. Transparent pricing and no surprises. Highly recommended!"</p>
                       <p className="font-bold text-gray-900">- Mark S.</p>
                    </div>
                 </div>
              </div>
              <div className="bg-primary rounded-2xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
                 <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-primary-foreground mb-4">Ready to start your project?</h3>
                    <p className="text-primary-foreground/90 mb-8 max-w-md mx-auto">
                       Contact us today for a free estimate. Let's make your vision a reality.
                    </p>
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold h-14 px-8 w-full sm:w-auto" onClick={() => setModalOpen(true)}>
                       Get Your Free Quote
                    </Button>
                 </div>
                 {/* Decorative circles */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Areas We Serve</h2>
              <p className="text-gray-600 text-lg max-w-xl">
                We are proud to serve homeowners and businesses throughout {businessConfig.city} and the surrounding region.
              </p>
            </div>
            <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 h-12 px-8" asChild>
              <Link href="/service-areas">View All Locations</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array.from(new Set(businessConfig.areasServedCities)).slice(0, 5).map((city) => (
              <Link key={city} href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="bg-gray-50 border border-gray-100 hover:bg-white hover:border-primary/50 hover:shadow-lg p-6 rounded-xl transition-all duration-300 cursor-pointer text-center group h-full flex flex-col items-center justify-center">
                   <MapPin className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                   <h3 className="font-bold text-lg text-gray-900">{city}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteRequestModal isOpen={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
