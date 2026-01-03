import { businessConfig } from "@/config/business";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      <div className="prose max-w-none text-gray-700">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Please read these Terms of Service carefully before using the {businessConfig.websiteUrl} website operated by {businessConfig.businessName}.
        </p>
        
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
        </p>

        <h3>2. Use of Service</h3>
        <p>
          Our website and services are intended for users who are looking for {businessConfig.businessName} services. You agree to use the site only for lawful purposes.
        </p>

        <h3>3. Intellectual Property</h3>
        <p>
          The content, features, and functionality of this website are the exclusive property of {businessConfig.businessName} and are protected by copyright, trademark, and other laws.
        </p>

        <h3>4. Limitation of Liability</h3>
        <p>
          In no event shall {businessConfig.businessName} be liable for any indirect, incidental, special, consequential or punitive damages arising out of or in connection with your use of the website or services.
        </p>

        <h3>5. Governing Law</h3>
        <p>
          These Terms shall be governed and construed in accordance with the laws of {businessConfig.state}, United States, without regard to its conflict of law provisions.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about these Terms, please contact us at: <br/>
          {businessConfig.primaryEmail}
        </p>
      </div>
    </div>
  );
}
