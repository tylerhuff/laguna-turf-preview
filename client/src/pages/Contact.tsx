import { businessConfig } from "@/config/business";
import { ContactForm } from "@/components/ContactForm";
import { BusinessMap } from "@/components/BusinessMap";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
       {/* Hero */}
       <section className="bg-gray-900 text-white py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get in touch with {businessConfig.businessName} today. We're here to help!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Phone</p>
                    <a href={`tel:${businessConfig.primaryPhone}`} className="text-gray-600 hover:text-primary transition-colors text-lg">
                      {businessConfig.phoneDisplay}
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      {businessConfig.availabilityNote || "Call us for a free estimate."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <a href={`mailto:${businessConfig.primaryEmail}`} className="text-gray-600 hover:text-primary transition-colors">
                      {businessConfig.primaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      {businessConfig.streetAddress}<br />
                      {businessConfig.city}, {businessConfig.state} {businessConfig.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Hours</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {businessConfig.openingHours.map((h, i) => (
                        <li key={i} className="flex justify-between w-40">
                          <span>{h.day}:</span>
                          <span>{h.open} - {h.close}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
