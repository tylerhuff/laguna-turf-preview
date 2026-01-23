import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-0 shadow-lg bg-white">
        <CardContent className="pt-6 pb-6 px-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center">
              <AlertCircle className="h-8 w-8" style={{ color: 'var(--accent-color)' }} />
            </div>
          </div>

          <h1 className="text-2xl font-bold font-heading text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-gray-600 mb-6 text-sm">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>

          <Link href="/">
            <Button className="bg-[var(--accent-color)] hover:brightness-90 text-white font-bold h-11 px-6 transition-all">
              <ArrowLeft className="w-4 h-4 mr-2" /> Return Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
