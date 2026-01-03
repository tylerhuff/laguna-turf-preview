import { businessConfig } from "@/config/business";
import { useRoute } from "wouter";
import NotFound from "./not-found";
import { Button } from "@/components/ui/button";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { QuoteRequestModal } from "@/components/QuoteRequestModal";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");
  const [modalOpen, setModalOpen] = useState(false);
  
  if (!match) return <NotFound />;

  const service = businessConfig.services.find(s => s.slug === params.slug);
  
  if (!service) return <NotFound />;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.name}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                <p>{service.longDescription}</p>
              </div>
            </section>

            {/* Benefits */}
            {service.serviceBenefits && service.serviceBenefits.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.serviceBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Process */}
            {service.processSteps && service.processSteps.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="space-y-6">
                  {service.processSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{step.name}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-left font-medium text-gray-900">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in {service.name}?</h3>
              <p className="text-gray-600 mb-6">
                Contact us today for a free consultation and estimate.
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 mb-4"
                onClick={() => setModalOpen(true)}
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline"
                className="w-full border-2"
                asChild
              >
                <a href={`tel:${businessConfig.primaryPhone}`}>
                  Call {businessConfig.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <QuoteRequestModal 
        isOpen={modalOpen} 
        onOpenChange={setModalOpen}
        defaultServiceSlug={service.slug}
        title={`Get a Quote for ${service.name}`}
      />
    </div>
  );
}
