import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Navigation, Footer } from '@/components/layout';
import { toast } from 'sonner';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

import { WaveSection } from '@/components/ui/wave-section';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: Replace this with your actual Formspree Form ID
  // 1. Go to https://formspree.io/
  // 2. Create a new form
  // 3. Copy the Form ID (or the full URL ending) and paste it here
  const FORMSPREE_FORM_ID = "mojqordl";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (FORMSPREE_FORM_ID === "YOUR_FORMSPREE_ID_HERE") {
      toast.error("Formspree ID missing", {
        description: "Please update the FORMSPREE_FORM_ID in contact.tsx with your actual ID.",
        duration: 5000,
      });
      setIsSubmitting(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you as soon as possible.",
          duration: 5000,
        });
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || "Form submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later or contact us directly via phone.",
        duration: 5000,
      });
      console.error("Form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "TwentyOne Solutions",
      "telephone": "+16265241059",
      "email": "contact@twentyonesolutions.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "234 Avenida Rosa A",
        "addressLocality": "San Clemente",
        "addressRegion": "CA",
        "postalCode": "92672",
        "addressCountry": "US"
      },
      "url": "https://twentyonesolutions.com/contact-us"
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <Helmet>
        <title>Contact TwentyOne Solutions - San Clemente Web Design</title>
        <meta name="description" content="Contact TwentyOne Solutions for web design and marketing services in San Clemente, CA. Call us at +1 (626) 524-1059." />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>
      <Navigation />

      {/* Hero */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-48" 
        disableTopWave
        backgroundImage="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/05/whitewater_sanclemente.webp"
        overlayOpacity={0.75}
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6"
          >
            How can we help?
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-xl text-gray-600 font-light"
          >
            Just fill out the form below or give us a call.
          </motion.p>
        </div>
      </WaveSection>

      {/* Contact Content */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Info Side */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Contact Us Today</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out for web solutions tailored to your business needs.
                </p>
                
                <div className="space-y-6 text-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#FD9800]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Call</p>
                      <a href="tel:+16265241059" className="font-bold text-gray-900 hover:text-[#FD9800] transition-colors">+1 (626) 524-1059</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#FD9800]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Email</p>
                      <a href="mailto:contact@twentyonesolutions.com" className="font-bold text-gray-900 hover:text-[#FD9800] transition-colors">contact@twentyonesolutions.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#FD9800]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Location</p>
                      <span className="font-bold text-gray-900">San Clemente, Orange County, CA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Follow Us</h3>
                <div className="flex flex-col gap-4">
                  <a href="https://www.facebook.com/twentyonewebsolutions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FD9800] transition-colors font-medium group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#1877F2] group-hover:scale-110 transition-transform">
                      <Facebook className="w-5 h-5 fill-current" />
                    </div>
                    <span>TwentyOne Solutions on Facebook</span>
                  </a>
                  <a href="https://www.google.com/maps/place/TwentyOne+Solutions/@33.4666479,-117.6517273,12z/data=!4m6!3m5!1s0x8b8c2f1bdf3b8e33:0x9ae5b755a9dbe9dc!8m2!3d33.4666479!4d-117.6517273" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FD9800] transition-colors font-medium group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#4285F4] group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81Z"/></svg>
                    </div>
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name *</Label>
                  <Input id="contact-name" name="name" className="bg-[#fdfaf5] border-gray-200 h-12" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number *</Label>
                  <Input id="contact-phone" name="phone" type="tel" className="bg-[#fdfaf5] border-gray-200 h-12" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address *</Label>
                  <Input id="contact-email" name="email" type="email" className="bg-[#fdfaf5] border-gray-200 h-12" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" name="message" className="bg-[#fdfaf5] border-gray-200 min-h-[150px]" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-14 text-lg disabled:opacity-70">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="h-[400px] w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100 grayscale hover:grayscale-0 transition-all duration-500">
            <iframe 
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=TwentyOne%20Solutions%20234%20Avenida%20Rosa%20San%20Clemente%20CA&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'sepia(100%) hue-rotate(330deg) saturate(150%)' }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="TwentyOne Solutions Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
