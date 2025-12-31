import React from 'react';
import { SEO } from '@/components/seo';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Link } from "wouter";
import { ArrowLeft, Rocket, Calendar, ClipboardCheck, BarChart3 } from 'lucide-react';

export default function First30DaysPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <SEO 
        title="What to Expect in the First 30 Days | TwentyOne Solutions"
        description="A transparent timeline of our onboarding, build, and launch process. From strategy to go-live in 30 days."
        canonical="/resources/first-30-days"
      />
      <Navigation />

      <div className="pt-32 pb-16 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 max-w-4xl">
           <Link href="/resources">
             <Button variant="ghost" className="mb-8 hover:bg-white/50 text-gray-600 gap-2 pl-0 hover:pl-2 transition-all">
               <ArrowLeft className="w-4 h-4" /> Back to Resources
             </Button>
           </Link>
           <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 leading-[1.1] mb-6">
             What to Expect in the <span className="text-[#FD9800]">First 30 Days</span>
           </h1>
           <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
             We move fast. Here is exactly what happens after you say "Let's do this."
           </p>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-3xl py-16 md:py-24">
        <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-[#FD9800] prose-a:no-underline hover:prose-a:underline">
           
           <div className="relative border-l-2 border-gray-100 pl-8 space-y-16 ml-4">
             {/* Step 1 */}
             <div className="relative">
               <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#fdfaf5] border-2 border-[#FD9800] flex items-center justify-center">
                 <ClipboardCheck className="w-4 h-4 text-[#FD9800]" />
               </div>
               <h3 className="text-3xl mt-0 mb-4">Day 1-3: Onboarding & Strategy</h3>
               <p>
                 Immediately after signing up, you’ll receive our simple onboarding form. This asks for the basics: your logo, service areas, and any photos you have. We also schedule a quick strategy call to nail down your "perfect customer" so we know who we are targeting.
               </p>
             </div>

             {/* Step 2 */}
             <div className="relative">
               <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#fdfaf5] border-2 border-[#FD9800] flex items-center justify-center">
                 <Rocket className="w-4 h-4 text-[#FD9800]" />
               </div>
               <h3 className="text-3xl mt-0 mb-4">Day 4-10: The Build</h3>
               <p>
                 This is where we go to work. We write the copy, edit your images, and build the website structure. We don't just use templates; we build a site designed to convert for your specific industry.
               </p>
               <p className="text-sm bg-gray-50 p-4 rounded-lg text-gray-500 italic border border-gray-100">
                 Note: If you already have a domain, we handle the technical transfer during this time too.
               </p>
             </div>

             {/* Step 3 */}
             <div className="relative">
               <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#fdfaf5] border-2 border-[#FD9800] flex items-center justify-center">
                 <ClipboardCheck className="w-4 h-4 text-[#FD9800]" />
               </div>
               <h3 className="text-3xl mt-0 mb-4">Day 11-14: Review & Refine</h3>
               <p>
                 We send you a live preview link. You can click around on your phone and computer. You tell us what you love and what you want tweaked. We make those changes fast - usually within 48 hours.
               </p>
             </div>

             {/* Step 4 */}
             <div className="relative">
               <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#FD9800] border-2 border-[#FD9800] flex items-center justify-center">
                 <Rocket className="w-4 h-4 text-white" />
               </div>
               <h3 className="text-3xl mt-0 mb-4 text-[#FD9800]">Day 15: Launch 🚀</h3>
               <p>
                 Once you give the thumbs up, we flip the switch. Your site goes live to the world. We ensure all forms are working and that your Google Analytics is tracking visitors.
               </p>
             </div>

             {/* Step 5 */}
             <div className="relative">
               <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#fdfaf5] border-2 border-[#FD9800] flex items-center justify-center">
                 <BarChart3 className="w-4 h-4 text-[#FD9800]" />
               </div>
               <h3 className="text-3xl mt-0 mb-4">Day 16-30: The Google Sync</h3>
               <p>
                 The last two weeks are about data. We submit your site map to Google, set up your Google Search Console, and optimize your Google Business Profile. We make sure Google knows you exist and exactly what you do. By day 30, your foundation is solid and ready for growth.
               </p>
             </div>
           </div>

        </div>

        <div className="mt-16 pt-10 border-t border-gray-100">
          <h3 className="text-2xl font-bold font-heading mb-6">Ready to start Day 1?</h3>
          <div className="flex gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-12 px-8">
                Start Your Project
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="outline" size="lg" className="border-gray-300 hover:border-[#FD9800] hover:text-[#FD9800] h-12 px-8">
                Read More Guides
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
