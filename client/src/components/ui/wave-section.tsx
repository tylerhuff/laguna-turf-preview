import React from 'react';
import { cn } from '@/lib/utils';

interface WaveSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function WaveSection({ children, className, ...props }: WaveSectionProps) {
  return (
    <section className={cn("relative bg-white", className)} {...props}>
      {/* Top Wave: The White Hero section cutting UP into the Beige Header */}
      {/* Visual effect: Concave White shape at the top */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Fill with Beige to match the header above */}
          <path 
            fill="#fdfaf5" 
            fillOpacity="1" 
            d="M0,0 L1440,0 L1440,100 Q720,20 0,100 Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-0">
        {children}
      </div>

      {/* Bottom Wave: The White Hero section cutting DOWN into the Beige Next Section */}
      {/* Visual effect: Concave White shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Fill with Beige to match the section below */}
          <path 
            fill="#fdfaf5" 
            fillOpacity="1" 
            d="M0,100 L1440,100 L1440,0 Q720,80 0,0 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
