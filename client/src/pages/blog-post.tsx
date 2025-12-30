import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, Link } from "wouter";
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, Loader2 } from 'lucide-react';
import { SeobotClient } from 'seobot';

export default function BlogPost() {
  const [location] = useLocation();
  const slug = location.split('/').pop();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (!slug) return;
      
      try {
        setLoading(true);
        // Check if it's one of the mock articles first (fallback)
        const mockArticle = [
          {
            slug: '5-reasons-your-business-needs-a-website',
            title: '5 Reasons Your Service Business Needs a Professional Website in 2025',
            content: `...`, // (Mock content would be here, but we'll try to fetch first)
            // Using the existing mock data structure from blog.tsx might be cleaner but for now let's prioritize the fetch
          }
        ].find(a => a.slug === slug);

        const client = new SeobotClient("80accd1a-599c-4d93-8e68-1c6745ef48db");
        const fetchedArticle = await client.getArticle(slug);
        
        if (fetchedArticle) {
          setArticle(fetchedArticle);
        } else if (mockArticle) {
           // Fallback to mock if API fails/not found and it matches a mock slug
           // Note: The previous hardcoded page had specific content. 
           // If we are replacing it entirely with dynamic content, we assume the API has this article or similar.
           // However, for the existing "hardcoded" article in the previous file version, we should probably preserve it if the API lookup fails 
           // OR just rely on the API fully if the user intends to replace everything.
           // Given the prompt "sync my seobotai.com articles", let's assume we want to view whatever comes from the API.
        }
      } catch (error) {
        console.error("Failed to fetch article:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [slug]);

  // Fallback for the specific hardcoded article if it was the one requested and API didn't return (or while loading if we want instant show for static)
  // For this implementation, I will treat the "5-reasons" article as a special case if not found in API, 
  // essentially keeping the previous hardcoded content as a fallback or if it's a specific "static" resource.
  // BUT, to keep it simple and dynamic:
  
  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <Navigation />
        <div className="flex justify-center py-40">
          <Loader2 className="w-10 h-10 animate-spin text-[#FD9800]" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    // If not found in API, check if it is the hardcoded one we want to preserve?
    // The previous file had "5-reasons-your-business-needs-a-website".
    // Let's preserve that specific content if the API returns 404 for it, strictly for the demo experience not breaking.
    // Or simpler: Just show Not Found.
    // I will restore the hardcoded content if the slug matches, otherwise show 404.
    
    if (slug === '5-reasons-your-business-needs-a-website') {
       return <StaticBlogPost />;
    }

    return (
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <Navigation />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/resources">
            <Button>Back to Resources</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author || "TwentyOne Solutions"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TwentyOne Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://twentyonesolutions.com/wp-content/uploads/2025/12/logo.png"
      }
    },
    "datePublished": article.date,
    "description": article.description || article.excerpt
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Helmet>
        <title>{article.title} - TwentyOne Solutions</title>
        <meta name="description" content={article.description || article.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
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
                 {article.category && (
                   <span className="bg-[#FD9800]/10 text-[#FD9800] px-3 py-1 rounded-full font-bold">{article.category}</span>
                 )}
                 <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(article.date).toLocaleDateString()}</span>
                 <span className="flex items-center gap-1"><User className="w-4 h-4" /> {article.author || 'TwentyOne Solutions'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 leading-tight">
                {article.title}
              </h1>
              
              {article.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-[#FD9800] pl-6 italic">
                  {article.excerpt}
                </p>
              )}
           </div>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-4xl py-12">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-[#FD9800] prose-img:rounded-xl">
           <img 
             src={article.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"} 
             alt={article.title} 
             className="w-full h-[400px] object-cover shadow-lg mb-12"
           />

           <div dangerouslySetInnerHTML={{ __html: article.content }} />
           
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

function StaticBlogPost() {
  // Original hardcoded article for fallback
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "5 Reasons Your Service Business Needs a Professional Website in 2025",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    "author": {
      "@type": "Person",
      "name": "Tyler Huff"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TwentyOne Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://twentyonesolutions.com/wp-content/uploads/2025/12/logo.png"
      }
    },
    "datePublished": "2025-10-12",
    "description": "In today’s digital age, relying solely on word-of-mouth isn’t enough. Discover why a professional website is crucial for growth."
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Helmet>
        <title>5 Reasons Your Business Needs a Website - TwentyOne Solutions</title>
        <meta name="description" content="Discover why a professional website is crucial for growth in 2025." />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
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
