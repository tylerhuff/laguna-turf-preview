import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Link } from "wouter";
import { ArrowLeft } from 'lucide-react';

export default function HowMarketingWorksPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Helmet>
        <title>How Online Marketing Works for Service Businesses - TwentyOne Solutions</title>
        <meta name="description" content="A simple breakdown of how digital marketing brings in leads for contractors and service businesses." />
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
             How Online Marketing Works for Service Businesses
           </h1>
           <p className="text-xl text-gray-600 mt-6 leading-relaxed">
             It’s not magic. It’s a system. Here is how we turn strangers into booked jobs.
           </p>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-4xl py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-[#FD9800]">
           <p>
             If you’ve ever felt like online marketing is a black box where you put money in and hope something comes out, you aren’t alone. But for local service businesses—plumbers, roofers, landscapers, consultants—the formula is actually very straightforward.
           </p>

           <h3>The 3-Step Funnel</h3>
           <p>
             We focus on three things: <strong>Visibility, Trust, and Conversion.</strong>
           </p>

           <h4>1. Visibility: Showing Up</h4>
           <p>
             This is where it starts. When someone in your town needs your service, they go to Google and search "roof repair near me" or "best landscaper in San Clemente." 
           </p>
           <p>
             Our job is to make sure you show up in two places:
           </p>
           <ul>
             <li><strong>The Map Pack:</strong> The 3 businesses shown on the Google Map.</li>
             <li><strong>Organic Results:</strong> The list of websites below the map.</li>
           </ul>

           <h4>2. Trust: Looking the Part</h4>
           <p>
             Once they click on your link, they make a split-second decision: <em>Do I trust these guys?</em>
           </p>
           <p>
             This is where your website comes in. It needs to look professional, load fast, and show that you are a real, reliable business. We use photos of your actual work, testimonials, and clear language to build that confidence immediately.
           </p>

           <h4>3. Conversion: Making it Easy</h4>
           <p>
             Now that they found you and trust you, we need them to call. We place "Call Now" buttons and simple contact forms in obvious places. We remove the friction so reaching out is the easiest thing they do all day.
           </p>

           <h3>Why it works</h3>
           <p>
             Unlike social media ads where you are interrupting people, Search Marketing captures people <strong>at the exact moment they need you</strong>. They have a problem (a leak, a renovation project) and they are actively looking for a solution. By positioning you as that solution, the leads are higher quality and easier to close.
           </p>
        </div>
      </article>

      <Footer />
    </div>
  );
}
