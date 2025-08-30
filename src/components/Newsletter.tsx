import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll be the first to know about our latest innovations.",
      });
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-20 gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary-glow rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stay Ahead of
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {" "}Innovation
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Be the first to experience groundbreaking technology, exclusive launches, 
              and insider updates from Ignite Mobile.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                className={`whitespace-nowrap transition-smooth ${
                  isSubmitted ? "bg-green-500 hover:bg-green-500" : ""
                }`}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Subscribed
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
          </form>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Exclusive Access</div>
              <div className="text-white/60">Early product launches and beta testing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Latest Updates</div>
              <div className="text-white/60">Technology insights and innovation news</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Special Offers</div>
              <div className="text-white/60">Subscriber-only deals and discounts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;