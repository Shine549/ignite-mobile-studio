import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Users } from "lucide-react";

const Privacy = () => {
  const principles = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement industry-leading security measures to protect your personal information."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We clearly explain what data we collect, how we use it, and who we share it with."
    },
    {
      icon: Lock,
      title: "User Control",
      description: "You have full control over your data, including the ability to access, update, or delete it."
    },
    {
      icon: Users,
      title: "Minimal Collection",
      description: "We only collect data that is necessary to provide and improve our services."
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
              Privacy
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
                Policy
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Your privacy matters to us. Learn how we protect, use, and respect your personal information.
            </p>
            <div className="text-sm text-white/60">Last updated: December 15, 2024</div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do with your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-elegant">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>
                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground">
                      We collect information you provide directly to us, such as when you create an account, 
                      make a purchase, contact customer support, or participate in surveys or promotions.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Personal information (name, email address, phone number)</li>
                      <li>Account credentials and preferences</li>
                      <li>Purchase and transaction history</li>
                      <li>Device information and usage data</li>
                      <li>Communications with customer support</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">How We Use Your Information</h2>
                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground">
                      We use the information we collect to provide, maintain, and improve our services, 
                      process transactions, and communicate with you.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Provide and improve our products and services</li>
                      <li>Process orders and transactions</li>
                      <li>Send important updates and notifications</li>
                      <li>Provide customer support</li>
                      <li>Analyze usage patterns to improve user experience</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Data Security</h2>
                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational security measures to protect 
                      your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>End-to-end encryption for sensitive data</li>
                      <li>Regular security audits and assessments</li>
                      <li>Access controls and authentication systems</li>
                      <li>Secure data centers with physical security</li>
                      <li>Employee training on data protection</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Your Rights</h2>
                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground">
                      You have certain rights regarding your personal information, including:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Access to your personal data</li>
                      <li>Correction of inaccurate information</li>
                      <li>Deletion of your personal data</li>
                      <li>Data portability</li>
                      <li>Withdrawal of consent</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy or our privacy practices, 
                    please contact us at privacy@ignitemobile.com or write to us at:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <div className="font-medium">Privacy Officer</div>
                    <div className="text-muted-foreground">Ignite Mobile Inc.</div>
                    <div className="text-muted-foreground">123 Innovation Drive</div>
                    <div className="text-muted-foreground">Tech Valley, CA 94025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;