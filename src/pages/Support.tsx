import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail, HelpCircle, Download, Settings } from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions and we'll respond within 24 hours",
      action: "Send Email",
      available: "Response within 24h"
    }
  ];

  const helpCategories = [
    {
      icon: HelpCircle,
      title: "Getting Started",
      description: "Setup guides and basic tutorials"
    },
    {
      icon: Settings,
      title: "Troubleshooting",
      description: "Common issues and solutions"
    },
    {
      icon: Download,
      title: "Software Updates",
      description: "Latest firmware and app updates"
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
              We're Here to
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
                Help You
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Get the support you need, when you need it. Our expert team is ready to assist you with any questions or issues.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Support Method</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to get the help you need, tailored to your preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-elegant hover:shadow-premium transition-smooth">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <div className="text-sm text-primary mb-6 font-medium">{option.available}</div>
                    <Button variant="default" className="w-full">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Help Categories */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Help Topics</h2>
            <p className="text-xl text-muted-foreground">
              Quick access to the most common support topics and solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="border-0 shadow-elegant hover:shadow-premium transition-smooth cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Can't find what you're looking for? Send us a detailed message and we'll get back to you.
              </p>
            </div>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Device Model</label>
                    <Input placeholder="e.g., Ignite Pro 12" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Describe your issue or question in detail..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;