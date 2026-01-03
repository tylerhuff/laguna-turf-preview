import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { Link, useLocation } from 'wouter';
import { businessConfig } from '@/config/business';

interface ContactFormProps {
  title?: string;
  description?: string;
}

export function ContactForm({ 
  title = "Get In Touch", 
  description = "Fill out the form below and we'll get back to you as soon as possible."
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [location] = useLocation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    formData.append('leadSource', 'Contact Page Form');
    formData.append('currentPage', location);

    try {
      const response = await fetch(businessConfig.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Message sent!", {
          description: "We'll get back to you shortly.",
          duration: 5000,
        });
        setIsSuccess(true);
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
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 mt-2">{description}</p>
      </div>
      
      <Card className="border-0 shadow-lg bg-white overflow-hidden">
        <CardContent className="p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
              <p className="text-gray-600 max-w-md">
                Thanks for reaching out. We'll be in touch shortly.
              </p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setIsSuccess(false)}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name *</Label>
                  <Input id="contact-name" name="name" className="bg-gray-50 border-gray-200" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone *</Label>
                  <Input id="contact-phone" name="phone" type="tel" className="bg-gray-50 border-gray-200" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email *</Label>
                <Input id="contact-email" name="email" type="email" className="bg-gray-50 border-gray-200" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-service">Service Interested In (Optional)</Label>
                <Select name="service">
                  <SelectTrigger className="bg-gray-50 border-gray-200">
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
                <Label htmlFor="contact-message">Message *</Label>
                <Textarea id="contact-message" name="message" className="bg-gray-50 border-gray-200 min-h-[120px]" required />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-lg mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
              <p className="text-xs text-center text-gray-500">
                By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link>.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
