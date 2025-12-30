import React from 'react';
import { useLocation, Link } from "wouter";
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function BlogPost() {
  const [location] = useLocation();
  const slug = location.split('/').pop();

  // In a real implementation, you would fetch the specific article by slug here
  // const { data: article } = useQuery(['article', slug], () => client.getArticle(slug));

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navigation />

      <div className="pt-24 pb-12 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 max-w-4xl">
           <Link href="/resources">
             <Button variant="ghost" className="mb-8 hover:bg-white/50 text-gray-600 gap-2">
               <ArrowLeft className="w-4 h-4" /> Back to Resources
             </Button>
           </Link>
           
           <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                 <span className="bg-[#FD9800]/10 text-[#FD9800] px-3 py-1 rounded-full font-bold">Business Growth</span>
                 <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Oct 12, 2025</span>
                 <span className="flex items-center gap-1"><User className="w-4 h-4" /> Tyler Huff</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 leading-tight">
                5 Reasons Your Service Business Needs a Professional Website in 2025
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-[#FD9800] pl-6 italic">
                In today’s digital age, relying solely on word-of-mouth isn’t enough. Discover why a professional website is crucial for growth.
              </p>
           </div>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-4xl py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-[#FD9800] prose-img:rounded-xl">
           <img 
             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
             alt="Analytics Dashboard" 
             className="w-full h-[400px] object-cover shadow-lg mb-12"
           />

           <p>
             If you're running a service business—whether you're a contractor, landscaper, consultant, or cleaner—you might think a Facebook page or word-of-mouth is enough. But in 2025, the landscape has changed. Customers expect more.
           </p>
           
           <h3>1. Credibility and Trust</h3>
           <p>
             84% of consumers think a business with a website is more credible than one with only a social media page. Your website is your digital storefront. It tells customers you are legitimate, professional, and here to stay.
           </p>

           <h3>2. 24/7 Availability</h3>
           <p>
             You can't answer the phone at 2 AM, but your website can. It allows potential customers to learn about your services, see your work, and even book appointments or request quotes while you sleep.
           </p>

           <h3>3. Control Your Narrative</h3>
           <p>
             Social media platforms change their algorithms constantly. You don't own your followers. With a website, you have complete control over the content, the branding, and the customer journey.
           </p>
           
           <blockquote>
             "A website turns visitors into customers. Marketing gets visitors to your website."
           </blockquote>

           <h3>4. Showcasing Your Work</h3>
           <p>
             A portfolio page on your website is the best way to show off your capabilities. High-quality photos of your past projects can be the deciding factor for a hesitant client.
           </p>

           <h3>5. Local SEO Dominance</h3>
           <p>
             When someone searches "plumber near me," you want to show up. A well-optimized website (which we specialize in!) helps you rank in local search results, driving free, high-quality traffic to your business.
           </p>

           <hr className="my-12" />
           
           <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 not-prose">
              <h4 className="text-xl font-bold font-heading mb-4">Ready to upgrade your online presence?</h4>
              <p className="mb-6 text-gray-600">
                We can build you a stunning, high-performance website just like this one in as little as 24 hours.
              </p>
              <Button className="bg-[#FD9800] hover:bg-[#e08600] text-white font-bold">
                Get Your Free Preview
              </Button>
           </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
           <div className="font-bold text-gray-900">Share this article:</div>
           <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full hover:text-blue-600 hover:border-blue-600">
                 <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:text-sky-500 hover:border-sky-500">
                 <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:text-blue-700 hover:border-blue-700">
                 <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                 <Share2 className="w-4 h-4" />
              </Button>
           </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
