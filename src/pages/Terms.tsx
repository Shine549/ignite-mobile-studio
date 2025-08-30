import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
                Service
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Please read these terms carefully before using our products and services.
            </p>
            <div className="text-sm text-white/60">Last updated: December 15, 2024</div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground mb-8">
                    By accessing and using Ignite Mobile products and services, you accept and agree to be bound 
                    by the terms and provision of this agreement. If you do not agree to abide by the above, 
                    please do not use this service.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">2. Use License</h2>
                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground">
                      Permission is granted to temporarily download one copy of Ignite Mobile software and 
                      documentation for personal, non-commercial transitory viewing only.
                    </p>
                    <p className="text-muted-foreground">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>modify or copy the materials</li>
                      <li>use the materials for any commercial purpose or for any public display</li>
                      <li>attempt to reverse engineer any software contained in the products</li>
                      <li>remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">3. Product Warranty</h2>
                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground">
                      Ignite Mobile warrants that its products will be free from defects in materials and 
                      workmanship under normal use for a period of one (1) year from the date of purchase.
                    </p>
                    <p className="text-muted-foreground">
                      This warranty does not cover damage caused by accident, misuse, normal wear and tear, 
                      or unauthorized modifications.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">4. User Accounts</h2>
                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground">
                      When you create an account with us, you must provide information that is accurate, 
                      complete, and current at all times.
                    </p>
                    <p className="text-muted-foreground">
                      You are responsible for safeguarding the password and for all activities that occur 
                      under your account.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">5. Privacy Policy</h2>
                  <p className="text-muted-foreground mb-8">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs 
                    your use of our services, to understand our practices.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">6. Prohibited Uses</h2>
                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground">You may not use our products or services:</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                      <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                      <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                      <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                      <li>To submit false or misleading information</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground mb-8">
                    In no event shall Ignite Mobile or its suppliers be liable for any damages (including, 
                    without limitation, damages for loss of data or profit, or due to business interruption) 
                    arising out of the use or inability to use the materials, even if Ignite Mobile or an 
                    authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">8. Governing Law</h2>
                  <p className="text-muted-foreground mb-8">
                    These terms and conditions are governed by and construed in accordance with the laws of 
                    California and you irrevocably submit to the exclusive jurisdiction of the courts in that 
                    state or location.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">9. Changes to Terms</h2>
                  <p className="text-muted-foreground mb-8">
                    Ignite Mobile reserves the right, at our sole discretion, to modify or replace these Terms 
                    at any time. If a revision is material, we will try to provide at least 30 days notice 
                    prior to any new terms taking effect.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">10. Contact Information</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <div className="font-medium">Legal Department</div>
                    <div className="text-muted-foreground">Ignite Mobile Inc.</div>
                    <div className="text-muted-foreground">123 Innovation Drive</div>
                    <div className="text-muted-foreground">Tech Valley, CA 94025</div>
                    <div className="text-muted-foreground">Email: legal@ignitemobile.com</div>
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

export default Terms;