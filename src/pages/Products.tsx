import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Battery, Smartphone, Zap } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Ignite Pro 12",
      tagline: "Beyond Perfection",
      price: "$999",
      originalPrice: "$1199",
      image: "/api/placeholder/400/500",
      badge: "Flagship",
      features: ["108MP Triple Camera", "5000mAh Battery", "120Hz Display", "8GB RAM"],
      colors: ["Midnight Black", "Electric Blue", "Pristine White"]
    },
    {
      id: 2,
      name: "Ignite Elite",
      tagline: "Pure Innovation", 
      price: "$799",
      originalPrice: "$899",
      image: "/api/placeholder/400/500",
      badge: "Popular",
      features: ["50MP AI Camera", "4500mAh Battery", "90Hz Display", "6GB RAM"],
      colors: ["Space Gray", "Ocean Blue", "Rose Gold"]
    },
    {
      id: 3,
      name: "Ignite Ultra",
      tagline: "Flagship Redefined",
      price: "$1299",
      originalPrice: "$1499",
      image: "/api/placeholder/400/500", 
      badge: "Premium",
      features: ["200MP Periscope", "6000mAh Battery", "144Hz Display", "12GB RAM"],
      colors: ["Titanium Black", "Platinum Silver", "Galaxy Purple"]
    },
    {
      id: 4,
      name: "Ignite Lite",
      tagline: "Essential Excellence",
      price: "$499",
      originalPrice: "$599",
      image: "/api/placeholder/400/500",
      badge: "Best Value",
      features: ["32MP Main Camera", "4000mAh Battery", "60Hz Display", "4GB RAM"],
      colors: ["Classic Black", "Sky Blue", "Coral Pink"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Complete
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
                Product Lineup
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              From flagship to essential, find the perfect smartphone that matches your lifestyle and ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-premium transition-smooth">
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative">
                    <div className="aspect-[4/5] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <Smartphone className="h-32 w-32 text-muted-foreground/20" />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {product.badge}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.tagline}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">{product.originalPrice}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Colors */}
                    <div className="mb-6">
                      <p className="text-xs text-muted-foreground mb-2">Available Colors:</p>
                      <div className="flex gap-2">
                        {product.colors.map((color, idx) => (
                          <div key={idx} className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 border border-border" />
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button variant="default" className="w-full">
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;