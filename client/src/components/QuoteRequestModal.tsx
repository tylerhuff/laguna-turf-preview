import { useState } from 'react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { businessConfig } from '@/config/business';
import { useLocation } from 'wouter';

interface QuoteRequestModalProps {
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultServiceSlug?: string;
}

export function QuoteRequestModal({ 
  trigger, 
  title = "Get a Quote", 
  description = "Tell us about your project and we'll get back to you with an estimate.",
  isOpen: controlledOpen,
  onOpenChange: setControlledOpen,
  defaultServiceSlug
}: QuoteRequestModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [location] = useLocation();

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? setControlledOpen : setInternalOpen;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add hidden fields
    formData.append('leadSource', 'Website Quote Modal');
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
        toast.success("Request received!", {
          description: "We'll be in touch shortly.",
          duration: 5000,
        });
        if (setOpen) setOpen(false);
        form.reset();
        
        // Navigate to Thank You page
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
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && (
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[500px] bg-white text-gray-900" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{title}</DialogTitle>
          <DialogDescription className="text-gray-600">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" name="name" required placeholder="John Doe" className="bg-gray-50 border-gray-200" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" className="bg-gray-50 border-gray-200" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service">Service Needed *</Label>
            <Select name="service" defaultValue={defaultServiceSlug}>
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
            <Label htmlFor="scheduling">Scheduling Preference</Label>
            <Select name="scheduling" defaultValue="flexible">
              <SelectTrigger className="bg-gray-50 border-gray-200">
                <SelectValue placeholder="Select preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As soon as possible</SelectItem>
                <SelectItem value="this_week">This week</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description *</Label>
            <Textarea 
              id="description" 
              name="description" 
              required
              placeholder="Tell us about what you need done..."
              className="bg-gray-50 border-gray-200 min-h-[100px]" 
            />
          </div>

          {/* Photo upload would go here if backend supported multipart/form-data handling easily or a storage bucket */}

          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Submit Request'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
