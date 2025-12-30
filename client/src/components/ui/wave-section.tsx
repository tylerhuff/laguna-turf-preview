import React from 'react';
import { cn } from '@/lib/utils';

interface WaveSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function WaveSection({ children, className, ...props }: WaveSectionProps) {
  return (
    <section className={cn("relative bg-white", className)} {...props}>
      {/* Top Wave: Beige Header extending DOWN into the White Hero */}
      {/* Visual effect: Convex Beige shape at the top */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            fill="#fdfaf5" 
            fillOpacity="1" 
            d="M0,0 L1440,0 L1440,20 Q720,100 0,20 Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-0">
        {children}
      </div>

      {/* Bottom Wave: Beige Next Section rising UP into the White Hero */}
      {/* Visual effect: Convex Beige shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            fill="#fdfaf5" 
            fillOpacity="1" 
            d="M0,100 L1440,100 L1440,80 Q720,0 0,80 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
