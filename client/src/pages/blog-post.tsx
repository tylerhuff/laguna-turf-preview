import React, { useEffect, useState } from 'react';
import { SEO } from '@/components/seo';
import { useLocation, Link } from "wouter";
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, Loader2 } from 'lucide-react';
import { BlogClient } from 'seobot';

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

        const client = new BlogClient("80accd1a-599c-4d93-8e68-1c6745ef48db");
        
        // Fetch list to get metadata (image, description) which might be missing in single article response
        const listData = await client.getArticles(0, 100); 
        const metadata = listData.articles.find(a => a.slug === slug);
        
        const fetchedArticle = await client.getArticle(slug);
        
        if (fetchedArticle) {
          setArticle({
             ...fetchedArticle,
             title: fetchedArticle.headline,
             description: metadata?.metaDescription || fetchedArticle.metaDescription,
             image: metadata?.image || fetchedArticle.image, // Prioritize metadata image
             date: fetchedArticle.createdAt,
             category: metadata?.category ? metadata.category.title : (fetchedArticle.category?.title || 'General'),
             content: fetchedArticle.html
          });
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

        <div className="flex justify-center py-40">
          <Loader2 className="w-10 h-10 animate-spin text-[#FD9800]" />
        </div>

      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white text-gray-800 font-sans">

        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/resources">
            <Button>Back to Resources</Button>
          </Link>
        </div>

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
        "url": "/assets/images/logo.png"
      }
    },
    "datePublished": article.date,
    "description": article.description || article.excerpt
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <SEO 
        title={`${article.title}`}
        description={article.description || article.excerpt || "Article by TwentyOne Solutions"}
        image={article.image}
        type="article"
        schema={articleSchema}
      />

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

           <div 
             className="
               prose-h2:text-3xl prose-h2:font-bold prose-h2:font-heading prose-h2:text-gray-900 prose-h2:mt-16 prose-h2:mb-6
               prose-h3:text-2xl prose-h3:font-bold prose-h3:font-heading prose-h3:text-gray-800 prose-h3:mt-12 prose-h3:mb-4
               prose-p:text-gray-600 prose-p:leading-loose prose-p:mb-8 prose-p:text-lg
               prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:text-gray-600 prose-li:mb-2
               prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:text-gray-600
               prose-strong:text-gray-900 prose-strong:font-bold
               prose-a:text-[#FD9800] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
               prose-blockquote:border-l-4 prose-blockquote:border-[#FD9800] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg prose-blockquote:my-8
               prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:w-full
               [&>*:first-child]:mt-0
             "
             dangerouslySetInnerHTML={{ __html: article.content }} 
           />
           
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

    </div>
  );
}

