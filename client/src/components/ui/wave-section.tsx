import React from 'react';
import { cn } from '@/lib/utils';

interface WaveSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function WaveSection({ children, className, ...props }: WaveSectionProps) {
  return (
    <section className={cn("relative bg-white", className)} {...props}>
      {/* Top Wave: Transition from Beige (above) to White (this section) */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none" 
          className="w-full h-full"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path 
            fill="#fdfaf5" 
            fillOpacity="1" 
            d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,112C840,96,960,96,1080,112C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-0">
        {children}
      </div>

      {/* Bottom Wave: Transition from White (this section) to Beige (below) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            fill="#fdfaf5" 
            fillOpacity="1" 
            d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,112C840,96,960,96,1080,112C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
