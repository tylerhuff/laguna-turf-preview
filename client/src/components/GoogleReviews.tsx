import { useEffect, useState, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Star, User, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { businessConfig } from '@/config/business';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface GoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GoogleReviewsProps {
  placeId?: string; // Optional: can override config
  apiKey?: string; // Optional: can override config
}

export function GoogleReviews({ placeId, apiKey }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);

  // Use config values if props not provided
  // Note: In a real app, these should be in your business config or env vars
  const GOOGLE_API_KEY = apiKey || "YOUR_GOOGLE_API_KEY_HERE"; 
  const PLACE_ID = placeId || "ChIJN1t_tDeuEmsRUsoyG83frY4"; // Default example ID (Googleplex)

  useEffect(() => {
    if (GOOGLE_API_KEY === "YOUR_GOOGLE_API_KEY_HERE") {
      setLoading(false);
      return; // Don't try to fetch without a key
    }

    const loader = new Loader({
      apiKey: GOOGLE_API_KEY,
      version: "weekly",
      libraries: ["places"]
    });

    loader.importLibrary("places").then(() => {
      if (!mapDivRef.current) return;

      const service = new google.maps.places.PlacesService(mapDivRef.current);
      
      service.getDetails(
        {
          placeId: PLACE_ID,
          fields: ['reviews']
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
            setReviews(place.reviews as GoogleReview[]);
          } else {
            setError("Could not load reviews. Please check your API key and Place ID.");
            console.error("Google Places API Error:", status);
          }
          setLoading(false);
        }
      );
    }).catch(err => {
      console.error("Failed to load Google Maps API", err);
      // Fallback to load() if importLibrary fails (older versions)
      loader.load().then(() => {
        if (!mapDivRef.current) return;
        const service = new google.maps.places.PlacesService(mapDivRef.current);
         service.getDetails(
          { placeId: PLACE_ID, fields: ['reviews'] },
          (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
              setReviews(place.reviews as GoogleReview[]);
            }
             setLoading(false);
          }
        );
      }).catch(e => {
         setError("Failed to load Google Maps API");
         setLoading(false);
      });
    });
  }, [GOOGLE_API_KEY, PLACE_ID]);

  // Fallback to static reviews if no API key is set or error occurs
  const displayReviews = (reviews.length > 0) ? reviews : null;

  if (!displayReviews && loading) {
     return (
        <div className="grid md:grid-cols-3 gap-6">
           {[1, 2, 3].map(i => (
              <Card key={i} className="h-full border-0 shadow-md bg-white">
                 <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                       <Skeleton className="h-12 w-12 rounded-full" />
                       <div className="space-y-2">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-3 w-20" />
                       </div>
                    </div>
                    <Skeleton className="h-20 w-full" />
                 </CardContent>
              </Card>
           ))}
        </div>
     );
  }

  // If no API key or error, we show nothing (or could show a message)
  // But for the user's "template" request, let's show the placeholder UI 
  // that informs them to add the key.
  if (!displayReviews && !loading) {
    return (
       <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Google Reviews Integration</h3>
          <p className="text-blue-700 mb-4">
             To display real Google Reviews, you need to add your <strong>Google Maps API Key</strong> and <strong>Place ID</strong>.
          </p>
          <div className="text-sm text-blue-600 bg-white p-4 rounded-lg inline-block text-left mx-auto max-w-lg">
             <p className="mb-2"><strong>1. Get API Key:</strong> Go to Google Cloud Console → Enable "Places API" & "Maps JS API".</p>
             <p className="mb-2"><strong>2. Get Place ID:</strong> Search your business on the Google Place ID Finder.</p>
             <p><strong>3. Update Code:</strong> Pass these to the <code>GoogleReviews</code> component.</p>
          </div>
          {/* Hidden div for Places Service */}
          <div ref={mapDivRef} style={{ display: 'none' }}></div>
       </div>
    );
  }

  return (
    <div className="w-full relative">
      <div ref={mapDivRef} style={{ display: 'none' }}></div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {displayReviews?.map((review, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <Card className="h-full border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      {review.profile_photo_url ? (
                         <img 
                           src={review.profile_photo_url} 
                           alt={review.author_name} 
                           className="w-10 h-10 rounded-full object-cover"
                         />
                      ) : (
                         <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                         </div>
                      )}
                      <div>
                        <p className="font-bold text-sm text-gray-900 line-clamp-1">{review.author_name}</p>
                        <p className="text-xs text-gray-500">{review.relative_time_description}</p>
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
