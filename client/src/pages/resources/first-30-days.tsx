import React from 'react';
import { SEO } from '@/components/seo';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Link } from "wouter";
import { ArrowLeft } from 'lucide-react';

export default function First30DaysPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <SEO 
        title="What to Expect in the First 30 Days | TwentyOne Solutions"
        description="A transparent timeline of our onboarding, build, and launch process. From strategy to go-live in 30 days."
        canonical="/resources/first-30-days"
      />
      <Navigation />

      <div className="pt-24 pb-12 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 max-w-4xl">
           <Link href="/resources">
             <Button variant="ghost" className="mb-8 hover:bg-white/50 text-gray-600 gap-2">
               <ArrowLeft className="w-4 h-4" /> Back to Resources
             </Button>
           </Link>
           <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 leading-tight">
             What to Expect in the First 30 Days
           </h1>
           <p className="text-xl text-gray-600 mt-6 leading-relaxed">
             We move fast. Here is exactly what happens after you say "Let's do this."
           </p>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-4xl py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-[#FD9800]">
           <h3>Day 1-3: Onboarding & Strategy</h3>
           <p>
             Immediately after signing up, you’ll receive our simple onboarding form. This asks for the basics: your logo, service areas, and any photos you have. We also schedule a quick strategy call to nail down your "perfect customer" so we know who we are targeting.
           </p>

           <h3>Day 4-10: The Build</h3>
           <p>
             This is where we go to work. We write the copy, edit your images, and build the website structure. We don't just use templates; we build a site designed to convert for your specific industry.
           </p>
           <p>
             <em>Note: If you already have a domain, we handle the technical transfer during this time too.</em>
           </p>

           <h3>Day 11-14: Review & Refine</h3>
           <p>
             We send you a live preview link. You can click around on your phone and computer. You tell us what you love and what you want tweaked. We make those changes fast - usually within 48 hours.
           </p>

           <h3>Day 15: Launch 🚀</h3>
           <p>
             Once you give the thumbs up, we flip the switch. Your site goes live to the world. We ensure all forms are working and that your Google Analytics is tracking visitors.
           </p>

           <h3>Day 16-30: The Google Sync</h3>
           <p>
             The last two weeks are about data. We submit your site map to Google, set up your Google Search Console, and optimize your Google Business Profile. We make sure Google knows you exist and exactly what you do. By day 30, your foundation is solid and ready for growth.
           </p>
        </div>
      </article>

      <Footer />
    </div>
  );
}
