import { businessConfig } from "@/config/business";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose max-w-none text-gray-700">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          At {businessConfig.businessName}, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>
        
        <h3>Information We Collect</h3>
        <p>
          We may collect personal information such as your name, email address, phone number, and project details when you fill out forms on our website.
        </p>

        <h3>How We Use Your Information</h3>
        <p>
          We use the information we collect to:
          <ul>
            <li>Provide and improve our services</li>
            <li>Communicate with you about your projects or inquiries</li>
            <li>Send you updates or promotional materials (you can opt-out at any time)</li>
          </ul>
        </p>

        <h3>Information Sharing</h3>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, as long as they agree to keep this information confidential.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: <br/>
          {businessConfig.primaryEmail}
        </p>
      </div>
    </div>
  );
}
