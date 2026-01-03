import { businessConfig } from "@/config/business";

interface BusinessMapProps {
  className?: string;
}

export function BusinessMap({ className = "w-full h-full min-h-[300px]" }: BusinessMapProps) {
  let mapSrc = businessConfig.mapsShareUrl;

  if (!mapSrc) {
    // Fallback logic for map embed URL if mapsShareUrl is not provided
    const query = businessConfig.mapsQueryOverride || 
      `${businessConfig.businessName}, ${businessConfig.streetAddress}, ${businessConfig.city}, ${businessConfig.state}`;
    
    const encodedQuery = encodeURIComponent(query);
    // Note: This is a basic search embed. For production without an API key, the share URL (iframe src) is preferred.
    // However, the spec asks to not scrape Google.
    // If we don't have a share URL, we might need to rely on a generic search embed format which sometimes requires an API key or specific mode.
    // The "maps embed api" usually requires an API key for search mode. 
    // Since we are in a template, we will prioritize the mapsShareUrl which is an iframe src.
    // If that fails, we will try a very simple query embed format that might work or show a placeholder if we strictly can't use an API key.
    // But commonly, the "place" mode with an API key is standard. 
    // Spec says: "It must not require scraping Google"
    
    // A safe fallback without API key is tricky for embeds. 
    // The spec says: "If mapsShareUrl is provided, use it... Else build an embed query".
    // We will assume for the fallback that the user might need to provide a valid embed URL if they don't want to use an API key, 
    // but we can try to construct a query based URL that might require an API key in a real deployment, 
    // or use a "maps.google.com/maps?q=...&output=embed" format which is an older, sometimes limited method but often works for simple displays.
    
    mapSrc = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }

  return (
    <div className={`overflow-hidden rounded-lg bg-gray-100 ${className}`}>
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src={mapSrc}
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        title={`${businessConfig.businessName} Location`}
        loading="lazy"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}
