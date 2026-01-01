import React from 'react';
import { SEO } from '@/components/seo';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Star } from 'lucide-react';

export default function GoogleBusinessProfilePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <SEO 
        title="Google Business Profile Basics for Service Businesses"
        description="Everything service businesses need to know about their most important digital asset: The Google Business Profile."
        canonical="/resources/google-business-profile-basics"
      />
      <Navigation />

      <div className="pt-20 md:pt-32 pb-16 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 max-w-4xl">
           <Link href="/resources">
             <Button variant="ghost" className="mb-8 hover:bg-white/50 text-gray-600 gap-2 pl-0 hover:pl-2 transition-all">
               <ArrowLeft className="w-4 h-4" /> Back to Resources
             </Button>
           </Link>
           <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 leading-[1.1] mb-6">
             Google Business Profile Basics for <span className="text-[#FD9800]">Service Businesses</span>
           </h1>
           <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
             Your most valuable digital asset isn't your website - it's your Google Business Profile. Here is why.
           </p>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-3xl py-16 md:py-24">
        <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-[#FD9800] prose-a:no-underline hover:prose-a:underline">
           <p className="lead text-2xl font-light text-gray-700 mb-10">
             If you are a local service business, your Google Business Profile (formerly Google My Business) is your lifeline. It is what populates the "Map Pack" - those three local results that appear at the very top of Google searches.
           </p>

           <h3 className="text-3xl mt-12 mb-6">What it is</h3>
           <p>
             It’s a free listing from Google that displays your business name, address, phone number, hours, and reviews. It appears on Google Search and Google Maps.
           </p>

           <div className="my-10 bg-[#fdfaf5] border border-[#FD9800]/20 rounded-2xl p-8">
             <h4 className="text-[#FD9800] text-lg font-bold uppercase tracking-wide mb-4 mt-0">Did you know?</h4>
             <p className="mb-0 text-gray-800 font-medium">
               Businesses with photos on their profiles receive 42% more requests for driving directions and 35% more clicks through to their websites.
             </p>
           </div>

           <h3 className="text-3xl mt-12 mb-6">Why it matters</h3>
           <p>
             <strong>46% of all Google searches are seeking local information.</strong> And for mobile users, the Map Pack is often the <em>only</em> thing they look at. If you aren't there, you are invisible to nearly half of your potential customers.
           </p>

           <h3 className="text-3xl mt-12 mb-6">The Basics of Optimization</h3>
           <p>
             Creating the profile is step one. Optimizing it is how you rank.
           </p>
           <ul className="list-none pl-0 space-y-4 my-6">
             <li className="flex items-start gap-3 pl-0">
               <CheckCircle2 className="w-6 h-6 text-[#FD9800] shrink-0 mt-1" />
               <span><strong>Complete Info:</strong> Fill out every single field. Hours, services, areas served.</span>
             </li>
             <li className="flex items-start gap-3 pl-0">
               <CheckCircle2 className="w-6 h-6 text-[#FD9800] shrink-0 mt-1" />
               <span><strong>Photos:</strong> Upload real photos of your team, your trucks, and your work.</span>
             </li>
             <li className="flex items-start gap-3 pl-0">
               <div className="relative">
                 <CheckCircle2 className="w-6 h-6 text-[#FD9800] shrink-0 mt-1" />
                 <Star className="w-3 h-3 text-white absolute top-2.5 left-1.5" />
               </div>
               <span><strong>Reviews:</strong> This is the big one. You need a steady stream of 5-star reviews. Reply to every single one of them.</span>
             </li>
             <li className="flex items-start gap-3 pl-0">
               <CheckCircle2 className="w-6 h-6 text-[#FD9800] shrink-0 mt-1" />
               <span><strong>Updates:</strong> Post weekly updates (like social media posts) to show Google you are active.</span>
             </li>
           </ul>

           <h3 className="text-3xl mt-12 mb-6">How we help</h3>
           <p>
             As part of our marketing service, we manage this completely. We post updates, help you generate review links to send to customers, and fight spam listings that might be stealing your spot. We turn your profile into a lead-generating machine.
           </p>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100">
          <h3 className="text-2xl font-bold font-heading mb-6">Need help optimizing your profile?</h3>
          <div className="flex gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-12 px-8">
                Get a Free Audit
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
