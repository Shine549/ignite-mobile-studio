import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Mobile Photography: AI-Powered Cameras",
      excerpt: "Discover how artificial intelligence is revolutionizing smartphone photography and what it means for content creators.",
      category: "Technology",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "5G and Beyond: The Next Generation of Connectivity",
      excerpt: "Exploring the impact of 5G technology on mobile experiences and what lies ahead in wireless innovation.",
      category: "Innovation",
      author: "Marcus Rodriguez",
      date: "Dec 12, 2024", 
      readTime: "4 min read",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "Sustainable Technology: Our Commitment to the Environment",
      excerpt: "Learn about our eco-friendly initiatives and how we're making smartphones more sustainable.",
      category: "Sustainability",
      author: "Emily Johnson",
      date: "Dec 10, 2024",
      readTime: "6 min read", 
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Behind the Design: Creating the Perfect User Experience",
      excerpt: "A deep dive into our design philosophy and the process behind creating intuitive mobile interfaces.",
      category: "Design",
      author: "David Park",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "Security First: Protecting Your Digital Life",
      excerpt: "Understanding the advanced security features that keep your personal data safe and secure.",
      category: "Security",
      author: "Lisa Wang",
      date: "Dec 5, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Performance Unleashed: The Power of Our Latest Processor",
      excerpt: "Technical insights into our newest chip architecture and how it delivers unprecedented performance.",
      category: "Technology",
      author: "Alex Thompson",
      date: "Dec 3, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const categories = ["All", "Technology", "Innovation", "Design", "Sustainability", "Security"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovation
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
                Insights
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Stay updated with the latest in mobile technology, design insights, and innovation stories from Ignite Mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden border-0 shadow-elegant hover:shadow-premium transition-smooth mb-16">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-lg font-medium">Featured Article</div>
                    <div className="text-sm">Image Placeholder</div>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-primary text-white">{post.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="hero" className="w-fit group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-premium transition-smooth">
                <CardContent className="p-0">
                  {/* Post Image */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-sm">Article Image</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-xs text-muted-foreground mb-4">
                      <User className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <Button variant="premium" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;