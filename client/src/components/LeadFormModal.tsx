import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface LeadFormModalProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  type: 'preview' | 'strategy';
  formId?: string; // Optional custom form ID, defaults to the main one
}

export function LeadFormModal({ trigger, title, description, type, formId = "mojqordl" }: LeadFormModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add a hidden field to identify the form type/source
    formData.append('_subject', `New ${type === 'preview' ? 'Site Preview Request' : 'Strategy Call Request'}`);

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
          description: type === 'preview' 
            ? "We'll start building your preview and email you shortly." 
            : "We'll be in touch to schedule your strategy call.",
          duration: 5000,
        });
        setOpen(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white text-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-[#FD9800]">{title}</DialogTitle>
          <DialogDescription className="text-gray-600">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" required placeholder="John Doe" className="bg-gray-50 border-gray-200" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-gray-50 border-gray-200" />
            </div>

            {type === 'strategy' && (
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" className="bg-gray-50 border-gray-200" />
              </div>
            )}

            {type === 'preview' && (
              <div className="space-y-2">
                <Label htmlFor="website">Current Website (Optional)</Label>
                <Input id="website" name="website" type="url" placeholder="https://..." className="bg-gray-50 border-gray-200" />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">
                {type === 'preview' ? 'Notes / Special Requests' : 'What are you looking to achieve?'}
              </Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder={type === 'preview' ? "I'd like to see..." : "I need help with..."}
                className="bg-gray-50 border-gray-200 min-h-[100px]" 
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-12 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              type === 'preview' ? 'Get My Free Preview' : 'Request Strategy Call'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
