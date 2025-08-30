import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Camera, Battery, Wifi, Shield, Zap } from "lucide-react";

const Innovation = () => {
  const innovations = [
    {
      icon: Cpu,
      title: "Next-Gen Processor",
      description: "Revolutionary 3nm chip architecture delivering unprecedented performance and efficiency.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Camera,
      title: "AI Photography",
      description: "Computational photography that captures every moment with professional-grade quality.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Battery,
      title: "All-Day Power",
      description: "Advanced battery technology with ultra-fast charging and power optimization.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Wifi,
      title: "5G+ Connectivity",
      description: "Lightning-fast connectivity with next-generation wireless technology.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Advanced encryption and biometric security for complete peace of mind.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Instant Performance",
      description: "Zero lag, instant response with optimized software and hardware integration.",
      color: "from-primary to-primary-glow"
    }
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Innovation
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}That Matters
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature is thoughtfully designed to enhance your daily experience,
            pushing the boundaries of what's possible in mobile technology.
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => {
            const IconComponent = innovation.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 bg-background/60 backdrop-blur-sm hover:shadow-elegant transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${innovation.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {innovation.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {innovation.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-smooth" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Innovation;