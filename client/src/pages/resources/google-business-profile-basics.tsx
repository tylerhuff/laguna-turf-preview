import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Link } from "wouter";
import { ArrowLeft } from 'lucide-react';

export default function GoogleBusinessProfilePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Helmet>
        <title>Google Business Profile Basics - TwentyOne Solutions</title>
        <meta name="description" content="Everything service businesses need to know about their most important digital asset: The Google Business Profile." />
      </Helmet>
      <Navigation />

      <div className="pt-24 pb-12 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 max-w-4xl">
           <Link href="/resources">
             <Button variant="ghost" className="mb-8 hover:bg-white/50 text-gray-600 gap-2">
               <ArrowLeft className="w-4 h-4" /> Back to Resources
             </Button>
           </Link>
           <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 leading-tight">
             Google Business Profile Basics for Service Businesses
           </h1>
           <p className="text-xl text-gray-600 mt-6 leading-relaxed">
             Your most valuable digital asset isn't your website—it’s your Google Business Profile. Here is why.
           </p>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-4xl py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-[#FD9800]">
           <p>
             If you are a local service business, your Google Business Profile (formerly Google My Business) is your lifeline. It is what populates the "Map Pack"—those three local results that appear at the very top of Google searches.
           </p>

           <h3>What it is</h3>
           <p>
             It’s a free listing from Google that displays your business name, address, phone number, hours, and reviews. It appears on Google Search and Google Maps.
           </p>

           <h3>Why it matters</h3>
           <p>
             <strong>46% of all Google searches are seeking local information.</strong> And for mobile users, the Map Pack is often the <em>only</em> thing they look at. If you aren't there, you are invisible to nearly half of your potential customers.
           </p>

           <h3>The Basics of Optimization</h3>
           <p>
             Creating the profile is step one. Optimizing it is how you rank.
           </p>
           <ul>
             <li><strong>Complete Info:</strong> Fill out every single field. Hours, services, areas served.</li>
             <li><strong>Photos:</strong> Upload real photos of your team, your trucks, and your work. Businesses with photos get 42% more requests for directions.</li>
             <li><strong>Reviews:</strong> This is the big one. You need a steady stream of 5-star reviews. Reply to every single one of them.</li>
             <li><strong>Updates:</strong> Post weekly updates (like social media posts) to show Google you are active.</li>
           </ul>

           <h3>How we help</h3>
           <p>
             As part of our marketing service, we manage this completely. We post updates, help you generate review links to send to customers, and fight spam listings that might be stealing your spot. We turn your profile into a lead-generating machine.
           </p>
        </div>
      </article>

      <Footer />
    </div>
  );
}
