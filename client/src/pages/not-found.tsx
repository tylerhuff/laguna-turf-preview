import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] flex items-center justify-center p-4">
      <Card className="w-full max-w-sm border-0 shadow-lg bg-white">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
          </div>

          <h1 className="text-xl font-bold font-heading text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>

          <Link href="/">
            <Button 
              className="w-full font-bold h-10 transition-all bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Return Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
