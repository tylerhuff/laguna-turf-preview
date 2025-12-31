import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation, Footer } from '@/components/layout';
import { WaveSection } from '@/components/ui/wave-section';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] font-sans text-gray-800">
      <Helmet>
        <title>Terms of Service - TwentyOne Solutions</title>
        <meta name="description" content="Terms of Service for TwentyOne Solutions website design and marketing services." />
      </Helmet>
      
      <Navigation />
      
      <WaveSection 
        className="pt-32 pb-20" 
        disableTopWave 
        overlayOpacity={0.8}
        bottomWaveColor="#fdfaf5"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">Terms of Service</h1>
        </div>
      </WaveSection>

      <section className="py-20 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 max-w-3xl prose prose-lg text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
          <p className="mb-8">
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and TwentyOne Solutions ("Company," “we," “us," or “our”), concerning your access to and use of the twentyonesolutions.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-8">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Representations</h2>
          <p className="mb-4">By using the Site, you represent and warrant that:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You are not a minor in the jurisdiction in which you reside.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prohibited Activities</h2>
          <p className="mb-8">
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Site Management</h2>
          <p className="mb-8">
            We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Service; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service; and (3) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Term and Termination</h2>
          <p className="mb-8">
            These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications and Interruptions</h2>
          <p className="mb-8">
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
          <p className="mb-8">
            These Terms shall be governed by and defined following the laws of the State of California. TwentyOne Solutions and yourself irrevocably consent that the courts of California shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
          <p className="mb-4">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:contact@twentyonesolutions.com" className="text-[#FD9800] hover:underline">contact@twentyonesolutions.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:6265241059" className="text-[#FD9800] hover:underline">626 524 1059</a></li>
          </ul>
        </div>
      </section>

      {/* Form / CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold font-heading text-gray-900">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600">See what your custom website could look like in 24 hours.</p>
              
              <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input id="contact-name" className="bg-[#fdfaf5] border-gray-200" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone *</Label>
                        <Input id="contact-phone" className="bg-[#fdfaf5] border-gray-200" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input id="contact-email" type="email" className="bg-[#fdfaf5] border-gray-200" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-business">Business Name *</Label>
                      <Input id="contact-business" className="bg-[#fdfaf5] border-gray-200" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-desc">What does your business do? *</Label>
                      <Input id="contact-desc" className="bg-[#fdfaf5] border-gray-200" required />
                    </div>

                    <Button className="w-full bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-14 text-lg mt-4">
                      Submit
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                      I agree to privacy policy & terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-12 lg:pt-20">
              <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
                <iframe 
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=TwentyOne%20Solutions%20234%20Avenida%20Rosa%20San%20Clemente%20CA&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TwentyOne Solutions Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
