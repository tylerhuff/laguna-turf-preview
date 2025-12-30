import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Link } from "wouter";
import { ArrowLeft } from 'lucide-react';

export default function OngoingWorkPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Helmet>
        <title>What Ongoing Monthly Work Looks Like - TwentyOne Solutions</title>
        <meta name="description" content="We don't just build it and leave. Here is how we keep your business growing month after month." />
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
             What Ongoing Monthly Work Looks Like
           </h1>
           <p className="text-xl text-gray-600 mt-6 leading-relaxed">
             SEO is not a one-time event; it's a habit. Here is what we do every month to keep you climbing.
           </p>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-4xl py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-[#FD9800]">
           <p>
             Many agencies build a site and disappear. We act as your digital partner. Our monthly maintenance and marketing plans are designed to do two things: <strong>Protect your asset</strong> and <strong>Grow your leads</strong>.
           </p>

           <h3>1. Technical Maintenance (The Shield)</h3>
           <p>
             Think of this like servicing your truck. You need to do it to keep running.
           </p>
           <ul>
             <li><strong>Security Updates:</strong> We patch software to prevent hacks.</li>
             <li><strong>Backups:</strong> We take daily backups so your site is never lost.</li>
             <li><strong>Speed Optimization:</strong> We monitor load times to ensure you stay fast.</li>
             <li><strong>Unlimited Edits:</strong> Need to change a photo? Update a price? Add a testimonial? Just email us. We handle it for you, usually same-day.</li>
           </ul>

           <h3>2. Growth & SEO (The Engine)</h3>
           <p>
             This is how we get you more calls over time.
           </p>
           <ul>
             <li><strong>Content Creation:</strong> We write new blog posts or service pages to target more keywords (e.g., "Emergency plumber in Dana Point").</li>
             <li><strong>Google Business Posts:</strong> We post weekly updates to your map profile to keep engagement high.</li>
             <li><strong>Citation Building:</strong> We manually build listings on other directories (Yelp, YellowPages, Bing) to build authority.</li>
             <li><strong>Reporting:</strong> Every month, you get a simple video report. We show you how many people visited, how many called, and what we are doing next month. No jargon, just results.</li>
           </ul>
        </div>
      </article>

      <Footer />
    </div>
  );
}
