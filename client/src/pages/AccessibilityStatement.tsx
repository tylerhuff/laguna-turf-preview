import { businessConfig } from "@/config/business";

export default function AccessibilityStatement() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
      <div className="prose max-w-none text-gray-700">
        <p>
          {businessConfig.businessName} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
        </p>
        
        <h3>Conformance Status</h3>
        <p>
          The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. {businessConfig.businessName} strives to conform to WCAG 2.1 Level AA.
        </p>

        <h3>Feedback</h3>
        <p>
          We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
          <br/>
          E-mail: {businessConfig.primaryEmail}
          <br/>
          Phone: {businessConfig.phoneDisplay}
        </p>
      </div>
    </div>
  );
}
