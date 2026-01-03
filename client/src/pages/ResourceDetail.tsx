import { businessConfig } from "@/config/business";
import { useRoute, Link } from "wouter";
import NotFound from "./not-found";
import { Button } from "@/components/ui/button";

export default function ResourceDetail() {
  const [match, params] = useRoute("/resources/:slug");
  
  if (!match) return <NotFound />;

  // Placeholder logic for blog posts
  // In a real app, you'd fetch the post content based on the slug
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/resources" className="text-primary font-medium hover:underline mb-8 inline-block">
          &larr; Back to Resources
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
           Article Title: {params.slug.replace(/-/g, ' ')}
        </h1>
        
        <div className="prose max-w-none text-gray-600 text-lg leading-relaxed">
           <p className="font-bold">
             Note: This is a template for a blog post detail page. In a production environment, this content would be dynamically loaded from a CMS or local markdown files.
           </p>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
           <h2>Subheading Example</h2>
           <p>
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
           <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to start your project?</h3>
           <p className="text-gray-600 mb-6">Contact us today for a free consultation.</p>
           <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8" asChild>
             <Link href="/contact">Get in Touch</Link>
           </Button>
        </div>
      </div>
    </div>
  );
}
