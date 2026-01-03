import { businessConfig } from "@/config/business";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4 py-12 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
        <CheckCircle2 className="w-10 h-10 text-green-600" />
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
      <p className="text-xl text-gray-600 max-w-md mb-8">
        Your request has been received. One of our team members will contact you shortly to discuss your project.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          asChild
        >
          <Link href="/">Return Home</Link>
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-white"
          asChild
        >
           <a href={`tel:${businessConfig.primaryPhone}`}>
             Call Us Now: {businessConfig.phoneDisplay}
           </a>
        </Button>
      </div>
    </div>
  );
}
