import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { businessConfig } from '@/config/business';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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
    <Card className="w-full max-w-lg mx-auto bg-white shadow-xl border-0">
      <CardHeader className="pb-4 pt-6">
        <CardTitle className="text-2xl font-bold text-center text-gray-900">
          Get a Free Estimate
        </CardTitle>
        <p className="text-center text-gray-500 text-sm mt-1">
          Tell us about your project and we'll get back to you.
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hero-name" className="text-gray-700">Name</Label>
              <Input 
                id="hero-name"
                name="name" 
                placeholder="John Doe" 
                required 
                className="h-11 bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-phone" className="text-gray-700">Phone</Label>
              <Input 
                id="hero-phone"
                name="phone" 
                type="tel" 
                placeholder="(555) 123-4567" 
                required 
                className="h-11 bg-gray-50"
              />
            </div>
          </div>
          
          <div className="space-y-2">
             <Label htmlFor="hero-service" className="text-gray-700">Service Needed</Label>
             <Select name="service">
              <SelectTrigger className="h-11 bg-gray-50">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {businessConfig.services.map(service => (
                  <SelectItem key={service.slug} value={service.slug}>
                    {service.name}
                  </SelectItem>
                ))}
                <SelectItem value="other">Other / Not Listed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="hero-description" className="text-gray-700">Project Details</Label>
            <Textarea 
              id="hero-description"
              name="description" 
              placeholder="Briefly describe what you need done..." 
              required 
              className="min-h-[80px] bg-gray-50 resize-none"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Get Free Quote'
            )}
          </Button>
          <p className="text-xs text-center text-gray-400 mt-2">
            Your information is secure. No spam, ever.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
