import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'wouter';

interface ContactFormProps {
  title?: string;
  description?: string;
  formId?: string; // Optional custom form ID, defaults to the main one
}

export function ContactForm({ 
  title = "Ready to Get Started?", 
  description = "See what your custom website could look like in 24 hours.",
  formId = "mojqordl" 
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add a hidden field to identify the form type/source
    formData.append('_subject', 'New Contact Form Submission');

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Request received!", {
          description: "We'll start building your preview and email you shortly.",
          duration: 5000,
        });
        setIsSuccess(true);
        form.reset();
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
      <h2 className="text-4xl font-bold font-heading text-gray-900">{title}</h2>
      <p className="text-xl text-gray-600">{description}</p>
      
      <Card className="border-0 shadow-2xl bg-white overflow-hidden">
        <CardContent className="p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900">Request Received!</h3>
              <p className="text-gray-600 max-w-md">
                Thanks for reaching out. We'll start building your preview and get back to you shortly.
              </p>
              <Button 
                variant="outline" 
                className="mt-6 border-[#FD9800] text-[#FD9800] hover:bg-[#FD9800] hover:text-white"
                onClick={() => setIsSuccess(false)}
              >
                Send Another Request
              </Button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name *</Label>
                  <Input id="contact-name" name="name" className="bg-[#fdfaf5] border-gray-200" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone *</Label>
                  <Input id="contact-phone" name="phone" type="tel" className="bg-[#fdfaf5] border-gray-200" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email *</Label>
                <Input id="contact-email" name="email" type="email" className="bg-[#fdfaf5] border-gray-200" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-business">Business Name *</Label>
                <Input id="contact-business" name="business" className="bg-[#fdfaf5] border-gray-200" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-desc">What does your business do? *</Label>
                <Input id="contact-desc" name="message" className="bg-[#fdfaf5] border-gray-200" required />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-14 text-lg mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
              <p className="text-xs text-center text-gray-500">
                By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-[#FD9800]">Privacy Policy</Link> and <Link href="/terms-of-service" className="underline hover:text-[#FD9800]">Terms of Service</Link>.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
