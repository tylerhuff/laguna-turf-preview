import { Star, User } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { businessConfig } from '@/config/business';
import { Card, CardContent } from "@/components/ui/card";

export function GoogleReviews() {
  const reviews = businessConfig.reviewCards;

  return (
    <div className="w-full relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <Card className="h-full border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      {/* Using User icon as generic profile since we don't have real URLs in config */}
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-gray-900 line-clamp-1">{review.name}</p>
                        <p className="text-xs text-gray-500">2 weeks ago</p>
                      </div>
                      <div className="ml-auto">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 italic relative">
                       {review.text}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
           <CarouselPrevious className="static translate-y-0 translate-x-0" />
           <CarouselNext className="static translate-y-0 translate-x-0" />
        </div>
      </Carousel>
    </div>
  );
}
