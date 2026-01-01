import React, { useEffect, useState } from 'react';
import { SEO } from '@/components/seo';
import { Link } from "wouter";
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Navigation, Footer } from '@/components/layout';
import { WaveSection } from '@/components/ui/wave-section';
import { Calendar, User, ArrowRight, Loader2, BookOpen, TrendingUp, Clock, Settings } from 'lucide-react';
import { BlogClient } from 'seobot'; 

// Mock data for display purposes
const MOCK_ARTICLES = [];

export default function BlogPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const client = new BlogClient("80accd1a-599c-4d93-8e68-1c6745ef48db");
        // Seobot client uses 0-based indexing for pages and positional arguments
        const data = await client.getArticles(0, 10);
        if (data && data.articles && data.articles.length > 0) {
          const mappedArticles = data.articles.map(a => ({
            id: a.id,
            slug: a.slug,
            title: a.headline,
            excerpt: a.metaDescription,
            image: a.image,
            date: a.createdAt,
            author: 'TwentyOne Solutions', // API doesn't provide author
            category: a.category ? a.category.title : 'General'
          }));
          setArticles(mappedArticles);
        }
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchArticles();
  }, []);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "TwentyOne Solutions Resources",
    "description": "Tips, strategies, and guides to help your service business grow online.",
    "url": "https://twentyonesolutions.com/resources",
    "publisher": {
      "@type": "Organization",
      "name": "TwentyOne Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "/assets/images/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <SEO 
        title="Digital Marketing Resources & Guides | TwentyOne Solutions"
        description="Actionable tips, strategies, and guides to help your service business grow online. Learn about SEO, web design, and Google Business Profile."
        canonical="/resources"
        image="/assets/images/portfolio-hero.webp"
        schema={blogSchema}
      />
      <Navigation />

      <WaveSection 
        className="pt-20 md:pt-40 pb-24 md:pb-48" 
        disableTopWave
        backgroundImage="/assets/images/portfolio-hero.webp"
        overlayOpacity={0.75}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6 leading-tight">
              Latest Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Tips, strategies, and guides to help your service business grow online.
            </p>
          </motion.div>
        </div>
      </WaveSection>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          
          {/* Featured Guides Grid */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-8 border-l-4 border-[#FD9800] pl-4">
              Core Guides for Business Owners
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "How Marketing Works", 
                  desc: "The simple system tailored for service businesses.", 
                  icon: TrendingUp,
                  link: "/resources/how-online-marketing-works"
                },
                { 
                  title: "Google Business Profile", 
                  desc: "Master the basics of your most important asset.", 
                  icon: BookOpen,
                  link: "/resources/google-business-profile-basics"
                },
                { 
                  title: "First 30 Days", 
                  desc: "Exactly what happens after you sign up with us.", 
                  icon: Clock,
                  link: "/resources/first-30-days"
                },
                { 
                  title: "Ongoing Monthly Work", 
                  desc: "How we protect and grow your digital presence.", 
                  icon: Settings,
                  link: "/resources/ongoing-monthly-work"
                },
              ].map((guide, i) => (
                <Link key={i} href={guide.link}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer h-full flex flex-col group">
                    <div className="w-12 h-12 rounded-full bg-[#fdfaf5] flex items-center justify-center text-[#FD9800] mb-4 group-hover:bg-[#FD9800] group-hover:text-white transition-colors">
                      <guide.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FD9800] transition-colors">{guide.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{guide.desc}</p>
                    <div className="text-xs font-bold uppercase tracking-wide text-[#FD9800] flex items-center gap-1">
                      Read Guide <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-8 border-l-4 border-[#FD9800] pl-4">
             Latest Articles
          </h2>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-[#FD9800]" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/resources/${article.slug}`}>
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-white overflow-hidden group">
                      <div className="h-48 overflow-hidden relative">
                         {article.category && (
                           <div className="absolute top-4 left-4 bg-[#FD9800] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                              {article.category}
                           </div>
                         )}
                         <img 
                           src={article.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"} 
                           alt={article.title} 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                         />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                          {article.date && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(article.date).toLocaleDateString()}
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.author || 'TwentyOne Solutions'}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold font-heading text-gray-900 leading-tight group-hover:text-[#FD9800] transition-colors">
                          {article.title}
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {article.excerpt || article.description}
                        </p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <span className="text-[#FD9800] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="mt-16 text-center">
             
          </div>
        </div>
      </section>

      {/* Form / CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />

            <div className="space-y-12 lg:pt-20">
              <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
                <iframe 
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=TwentyOne%20Solutions%20234%20Avenida%20Rosa%20San%20Clemente%20CA&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TwentyOne Solutions Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
