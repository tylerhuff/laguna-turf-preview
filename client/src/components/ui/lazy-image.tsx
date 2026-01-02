import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  mobileSrc?: string;
  rootMargin?: string;
  priority?: boolean;
}

export function LazyImage({ 
  src, 
  mobileSrc, 
  rootMargin = '200px', 
  priority = false,
  className, 
  alt, 
  ...props 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority, rootMargin]);

  const handleLoad = () => setIsLoaded(true);

  if (mobileSrc) {
    return (
      <picture className="w-full h-full block">
        <source 
          media="(max-width: 640px)" 
          srcSet={isInView ? mobileSrc : ''} 
        />
        <img
          ref={imgRef}
          src={isInView ? src : ''}
          alt={alt || ''}
          onLoad={handleLoad}
          className={cn(
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          {...props}
        />
      </picture>
    );
  }

  return (
    <img
      ref={imgRef}
      src={isInView ? src : ''}
      alt={alt || ''}
      onLoad={handleLoad}
      className={cn(
        "transition-opacity duration-500",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    />
  );
}
