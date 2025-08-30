import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Headquarters",
      details: ["123 Innovation Drive", "Tech Valley, CA 94025", "United States"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM PST", "24/7 Emergency Support"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@ignitemobile.com", "support@ignitemobile.com", "press@ignitemobile.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
      action: "Schedule Meeting"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      country: "United States",
      address: "123 Innovation Drive, Tech Valley, CA 94025",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "London",
      country: "United Kingdom", 
      address: "456 Tech Street, London EC2A 4DP",
      phone: "+44 20 7123 4567"
    },
    {
      city: "Tokyo",
      country: "Japan",
      address: "789 Innovation Plaza, Shibuya, Tokyo 150-0002",
      phone: "+81 3-1234-5678"
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
              Get in
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
                Touch
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Have questions, feedback, or want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-elegant hover:shadow-premium transition-smooth">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                    <div className="space-y-1 mb-6">
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <Card className="border-0 shadow-elegant">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input placeholder="Enter your last name" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input type="email" placeholder="Enter your email address" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input placeholder="What is this regarding?" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea 
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Offices */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Locations</h2>
              <p className="text-muted-foreground mb-8">
                Visit us at one of our global offices or reach out to your local team.
              </p>
              
              {/* Map Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center mb-8">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <div className="font-medium">Interactive Map</div>
                  <div className="text-sm">Coming Soon</div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="border-0 shadow-elegant">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">{office.city}, {office.country}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>{office.address}</div>
                        <div>{office.phone}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;