import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] flex items-center justify-center p-6">
      <Card className="w-full max-w-md border-0 shadow-lg bg-white">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="h-10 w-10 text-red-500" />
            </div>
          </div>

          <h1 className="text-3xl font-bold font-heading text-gray-900 mb-3">Page Not Found</h1>
          <p className="text-gray-600 mb-8 max-w-sm mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>

          <Link href="/">
            <Button className="bg-[var(--accent-color)] hover:bg-[#e08600] text-white font-bold h-12 px-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Return Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
