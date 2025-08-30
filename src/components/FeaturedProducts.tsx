import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Camera, Battery, Zap } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Ignite Pro 12",
      tagline: "Beyond Perfection",
      price: "$999",
      image: product1,
      features: ["108MP Triple Camera", "5000mAh Battery", "120Hz Display"],
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      name: "Ignite Elite",
      tagline: "Pure Innovation",
      price: "$799",
      image: product2,
      features: ["50MP AI Camera", "4500mAh Battery", "90Hz Display"],
      color: "from-primary to-primary-glow"
    },
    {
      id: 3,
      name: "Ignite Ultra",
      tagline: "Flagship Redefined",
      price: "$1299",
      image: product3,
      features: ["200MP Periscope", "6000mAh Battery", "144Hz Display"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Latest
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover smartphones that push the boundaries of technology, 
            designed for those who never settle for ordinary.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group relative overflow-hidden border-0 shadow-elegant hover:shadow-premium transition-smooth bg-gradient-to-br from-background to-muted/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-smooth`} />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{product.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.tagline}</p>
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

                  {/* Action Button */}
                  <Button variant="default" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center">
          <Button variant="premium" size="lg">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;