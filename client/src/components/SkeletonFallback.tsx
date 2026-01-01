import { Navigation } from "@/components/layout";

export function SkeletonFallback() {
  return (
    <div className="min-h-screen bg-[#fdfaf5]">
      {/* Ghost Navigation - Matches exact height of real nav */}
      <div className="bg-[#FD9800] h-[34px] w-full" /> {/* Top bar */}
      <div className="h-20 border-b border-gray-100 bg-[#fdfaf5] w-full">
         <div className="container mx-auto px-6 h-full flex items-center justify-between">
            {/* Logo Ghost */}
            <div className="flex items-center gap-2">
               <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
            {/* Nav Links Ghost */}
            <div className="hidden lg:flex gap-8">
               <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
               <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
               <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
               <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
               <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
               <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
            {/* Button Ghost */}
            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse" />
         </div>
      </div>

      {/* Hero Ghost */}
      <div className="container mx-auto px-6 pt-20 md:pt-32">
        <div className="max-w-4xl">
          <div className="h-12 md:h-16 w-3/4 bg-gray-200 rounded-lg mb-6 animate-pulse" />
          <div className="h-12 md:h-16 w-1/2 bg-gray-200 rounded-lg mb-8 animate-pulse" />
          
          <div className="space-y-3 mb-10 max-w-2xl">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-40 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-12 w-40 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
