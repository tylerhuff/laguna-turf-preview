import React from 'react';
import { SEO } from '@/components/seo';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Link } from "wouter";
import { ArrowLeft, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function OngoingWorkPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <SEO 
        title="What Ongoing Monthly Work Looks Like | TwentyOne Solutions"
        description="We don't just build it and leave. Learn how our monthly maintenance and SEO plans keep your business growing."
        canonical="/resources/ongoing-monthly-work"
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
             What Ongoing Monthly <span className="text-[#FD9800]">Work Looks Like</span>
           </h1>
           <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
             SEO is not a one-time event; it's a habit. Here is what we do every month to keep you climbing.
           </p>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-3xl py-16 md:py-24">
        <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-[#FD9800] prose-a:no-underline hover:prose-a:underline">
           <p className="lead text-2xl font-light text-gray-700 mb-10">
             Many agencies build a site and disappear. We act as your digital partner. Our monthly maintenance and marketing plans are designed to do two things: <strong>Protect your asset</strong> and <strong>Grow your leads</strong>.
           </p>

           <div className="grid md:grid-cols-2 gap-8 my-12">
             <div className="bg-[#fdfaf5] p-8 rounded-2xl border border-gray-100">
               <div className="w-12 h-12 bg-[#FD9800]/10 rounded-full flex items-center justify-center text-[#FD9800] mb-6">
                 <Shield className="w-6 h-6" />
               </div>
               <h3 className="text-2xl mt-0 mb-4">1. Technical Maintenance (The Shield)</h3>
               <p className="text-base">
                 Think of this like servicing your truck. You need to do it to keep running.
               </p>
               <ul className="list-none pl-0 space-y-3 mt-4 text-base">
                 <li className="flex items-start gap-2 pl-0">
                   <CheckCircle2 className="w-4 h-4 text-[#FD9800] mt-1 shrink-0" />
                   <span><strong>Security Updates:</strong> We patch software to prevent hacks.</span>
                 </li>
                 <li className="flex items-start gap-2 pl-0">
                   <CheckCircle2 className="w-4 h-4 text-[#FD9800] mt-1 shrink-0" />
                   <span><strong>Backups:</strong> We take daily backups so your site is never lost.</span>
                 </li>
                 <li className="flex items-start gap-2 pl-0">
                   <CheckCircle2 className="w-4 h-4 text-[#FD9800] mt-1 shrink-0" />
                   <span><strong>Speed Optimization:</strong> We monitor load times.</span>
                 </li>
                 <li className="flex items-start gap-2 pl-0">
                   <CheckCircle2 className="w-4 h-4 text-[#FD9800] mt-1 shrink-0" />
                   <span><strong>Unlimited Edits:</strong> Need to change a photo? Update a price? We handle it.</span>
                 </li>
               </ul>
             </div>

             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
               <div className="w-12 h-12 bg-[#FD9800] rounded-full flex items-center justify-center text-white mb-6">
                 <TrendingUp className="w-6 h-6" />
               </div>
               <h3 className="text-2xl mt-0 mb-4">2. Growth & SEO (The Engine)</h3>
               <p className="text-base">
                 This is how we get you more calls over time.
               </p>
               <ul className="list-none pl-0 space-y-3 mt-4 text-base">
                 <li className="flex items-start gap-2 pl-0">
                   <CheckCircle2 className="w-4 h-4 text-[#FD9800] mt-1 shrink-0" />
                   <span><strong>Content Creation:</strong> We write new blog posts or service pages.</span>
                 </li>
                 <li className="flex items-start gap-2 pl-0">
                   <CheckCircle2 className="w-4 h-4 text-[#FD9800] mt-1 shrink-0" />
                   <span><strong>Google Business Posts:</strong> Weekly updates to keep engagement high.</span>
                 </li>
                 <li className="flex items-start gap-2 pl-0">
                   <CheckCircle2 className="w-4 h-4 text-[#FD9800] mt-1 shrink-0" />
                   <span><strong>Citation Building:</strong> We build authority on Yelp, Bing, etc.</span>
                 </li>
                 <li className="flex items-start gap-2 pl-0">
                   <CheckCircle2 className="w-4 h-4 text-[#FD9800] mt-1 shrink-0" />
                   <span><strong>Reporting:</strong> Monthly video reports. No jargon, just results.</span>
                 </li>
               </ul>
             </div>
           </div>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100">
          <h3 className="text-2xl font-bold font-heading mb-6">Let's grow your business</h3>
          <div className="flex gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-12 px-8">
                Get a Proposal
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
