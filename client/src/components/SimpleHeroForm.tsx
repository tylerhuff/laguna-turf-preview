import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { businessConfig } from '@/config/business';

export function SimpleHeroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    formData.append('leadSource', 'Home Page Hero Form');

    try {
      const response = await fetch(businessConfig.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Request received!", {
          description: "We'll be in touch shortly.",
          duration: 5000,
        });
        form.reset();
        window.location.href = '/thank-you';
      } else {
        const data = await response.json();
        throw new Error(data.error || "Form submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
      console.error("Form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-xl border-0">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-center text-gray-900">
          Get a Free Estimate
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input 
              name="name" 
              placeholder="Your Name" 
              required 
              className="h-11 bg-gray-50"
            />
          </div>
          <div>
            <Input 
              name="phone" 
              type="tel" 
              placeholder="Phone Number" 
              required 
              className="h-11 bg-gray-50"
            />
          </div>
          <div>
            <Input 
              name="email" 
              type="email" 
              placeholder="Email Address" 
              required 
              className="h-11 bg-gray-50"
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Get Quote'
            )}
          </Button>
          <p className="text-xs text-center text-gray-500">
            Fast, free, and no obligation.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
