import { businessConfig } from "@/config/business";
import { Link } from "wouter";

export default function Resources() {
  // In a real implementation, this would fetch from a blog source or API
  // For now, we will use a placeholder list
  const posts = [
    {
      title: "5 Tips for a Successful Home Remodel",
      slug: "5-tips-successful-home-remodel",
      excerpt: "Planning a renovation? Read our top tips to ensure your project goes smoothly from start to finish.",
      date: "October 15, 2023"
    },
    {
      title: "How to Choose the Right Contractor",
      slug: "how-to-choose-right-contractor",
      excerpt: "Don't hire just anyone. Learn what to look for when selecting a professional for your home improvement needs.",
      date: "November 02, 2023"
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resources & Guides</h1>
          <p className="text-xl text-gray-600">
            Helpful articles and advice for homeowners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <p className="text-sm text-primary font-bold mb-2">{post.date}</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors">
                  <Link href={`/resources/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-6">
                  {post.excerpt}
                </p>
                <Link href={`/resources/${post.slug}`} className="text-primary font-bold hover:underline">
                  Read Article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
