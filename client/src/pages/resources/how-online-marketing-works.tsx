import React from 'react';
import { SEO } from '@/components/seo';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function HowMarketingWorksPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <SEO 
        title="How Online Marketing Works for Service Businesses"
        description="A simple breakdown of how digital marketing brings in leads for contractors and service businesses."
        canonical="/resources/how-online-marketing-works"
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
             How Online Marketing Works for <span className="text-[#FD9800]">Service Businesses</span>
           </h1>
           <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
             It’s not magic. It’s a system. Here is how we turn strangers into booked jobs.
           </p>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-3xl py-16 md:py-24">
        <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-[#FD9800] prose-a:no-underline hover:prose-a:underline">
           <p className="lead text-2xl font-light text-gray-700 mb-10">
             If you've ever felt like online marketing is a black box where you put money in and hope something comes out, you aren't alone. But for local service businesses - plumbers, roofers, landscapers, consultants - the formula is actually very straightforward.
           </p>

           <h3 className="text-3xl mt-12 mb-6">The 3-Step Funnel</h3>
           <p>
             We focus on three things: <strong>Visibility, Trust, and Conversion.</strong>
           </p>
           
           <div className="my-10 bg-[#fdfaf5] border border-[#FD9800]/20 rounded-2xl p-8">
             <h4 className="text-[#FD9800] text-lg font-bold uppercase tracking-wide mb-4 mt-0">Key Takeaway</h4>
             <p className="mb-0 text-gray-800 font-medium">
               Success isn't about one viral post. It's about showing up when people search, looking professional, and making it easy to call.
             </p>
           </div>

           <h4 className="text-2xl mt-10 mb-4 flex items-center gap-3">
             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FD9800] text-white text-sm font-bold">1</span>
             Visibility: Showing Up
           </h4>
           <p>
             This is where it starts. When someone in your town needs your service, they go to Google and search "roof repair near me" or "best landscaper in San Clemente." 
           </p>
           <p>
             Our job is to make sure you show up in two places:
           </p>
           <ul className="list-none pl-0 space-y-4 my-6">
             <li className="flex items-start gap-3 pl-0">
               <CheckCircle2 className="w-6 h-6 text-[#FD9800] shrink-0 mt-1" />
               <span><strong>The Map Pack:</strong> The 3 businesses shown on the Google Map.</span>
             </li>
             <li className="flex items-start gap-3 pl-0">
               <CheckCircle2 className="w-6 h-6 text-[#FD9800] shrink-0 mt-1" />
               <span><strong>Organic Results:</strong> The list of websites below the map.</span>
             </li>
           </ul>

           <h4 className="text-2xl mt-10 mb-4 flex items-center gap-3">
             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FD9800] text-white text-sm font-bold">2</span>
             Trust: Looking the Part
           </h4>
           <p>
             Once they click on your link, they make a split-second decision: <em>Do I trust these guys?</em>
           </p>
           <p>
             This is where your website comes in. It needs to look professional, load fast, and show that you are a real, reliable business. We use photos of your actual work, testimonials, and clear language to build that confidence immediately.
           </p>

           <h4 className="text-2xl mt-10 mb-4 flex items-center gap-3">
             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FD9800] text-white text-sm font-bold">3</span>
             Conversion: Making it Easy
           </h4>
           <p>
             Now that they found you and trust you, we need them to call. We place "Call Now" buttons and simple contact forms in obvious places. We remove the friction so reaching out is the easiest thing they do all day.
           </p>

           <h3 className="text-3xl mt-16 mb-6">Why it works</h3>
           <p>
             Unlike social media ads where you are interrupting people, Search Marketing captures people <strong>at the exact moment they need you</strong>. They have a problem (a leak, a renovation project) and they are actively looking for a solution. By positioning you as that solution, the leads are higher quality and easier to close.
           </p>
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-100">
          <h3 className="text-2xl font-bold font-heading mb-6">Ready to get started?</h3>
          <div className="flex gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-12 px-8">
                Book a Strategy Call
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
