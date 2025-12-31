import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation, Footer } from '@/components/layout';
import { WaveSection } from '@/components/ui/wave-section';
import { ContactForm } from '@/components/ContactForm';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] font-sans text-gray-800">
      <Helmet>
        <title>Privacy Policy - TwentyOne Solutions</title>
        <meta name="description" content="Privacy Policy for TwentyOne Solutions. How we collect, use, and protect your data." />
      </Helmet>
      
      <Navigation />
      
      <WaveSection 
        className="pt-32 pb-20" 
        disableTopWave 
        overlayOpacity={0.8}
        bottomWaveColor="#fdfaf5"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">Privacy Policy</h1>
        </div>
      </WaveSection>

      <section className="py-20 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 max-w-3xl prose prose-lg text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="mb-8">
            TwentyOne Solutions (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website twentyonesolutions.com
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Personal Information:</strong> Includes your name, email address, phone number, and any other information you provide through our contact forms.</li>
            <li><strong>Non-Personal Information:</strong> Such as browser type, operating system, and browsing behavior collected through cookies and similar technologies.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Collect Information</h2>
          <p className="mb-4">We collect information through:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Direct Interaction:</strong> When you fill out contact forms or communicate with us.</li>
            <li><strong>Automated Technologies:</strong> Including cookies that collect data on your browsing actions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Use of Your Information</h2>
          <p className="mb-4">We use your information for purposes including:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Providing Services:</strong> To respond to inquiries and provide requested services.</li>
            <li><strong>Marketing:</strong> With your consent, to send promotional materials.</li>
            <li><strong>Improving Our Website:</strong> To analyze usage and enhance user experience.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sharing Your Information</h2>
          <p className="mb-4">We do not sell or rent your personal information. We may share information with:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our website and conducting our business, provided they agree to keep this information confidential.</li>
            <li><strong>Legal Obligations:</strong> When required by law to disclose information.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
          <p className="mb-8">
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
          <p className="mb-4">Depending on your jurisdiction, you may have rights such as:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information.</li>
            <li><strong>Opt-Out:</strong> Withdraw consent to receive marketing communications.</li>
          </ul>
          <p className="mb-8">
            To exercise these rights, contact us at <a href="mailto:contact@twentyonesolutions.com" className="text-[#FD9800] hover:underline">contact@twentyonesolutions.com</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
          <p className="mb-8">
            We use cookies to enhance user experience. You can set your browser to refuse cookies, but some parts of our website may not function properly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
          <p className="mb-8">
            Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites and encourage you to read their privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children’s Privacy</h2>
          <p className="mb-8">
            Our services are not directed to individuals under 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
          <p className="mb-8">
            We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
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
            <ContactForm />

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
