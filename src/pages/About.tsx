import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Never Settle",
      description: "We believe in pushing boundaries and never compromising on quality or innovation."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every decision we make is guided by our users' needs and experiences."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every detail, from design to performance."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making cutting-edge technology accessible to users worldwide."
    }
  ];

  const stats = [
    { number: "50M+", label: "Global Users" },
    { number: "100+", label: "Countries" },
    { number: "15+", label: "Awards Won" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Redefining
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
                Mobile Innovation
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Founded on the principle of never settling, we create smartphones that push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ignite Mobile was born from a simple belief: smartphones should inspire, not compromise. 
                  Founded in 2015 by a team of passionate engineers and designers, we set out to create 
                  devices that would redefine the mobile experience.
                </p>
                <p>
                  From our first breakthrough device to our latest flagship models, every Ignite phone 
                  embodies our commitment to innovation, quality, and user experience. We don't just 
                  follow trends – we set them.
                </p>
                <p>
                  Today, with over 50 million users worldwide, we continue to push boundaries and 
                  challenge conventions, always guided by our founding principle: Never Settle.
                </p>
              </div>
              <Button variant="hero" size="lg" className="mt-8">
                Join Our Journey
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">2015</div>
                  <div className="text-xl text-muted-foreground">Founded with a vision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and inspire every innovation we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-elegant">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that showcase our global reach and user satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;