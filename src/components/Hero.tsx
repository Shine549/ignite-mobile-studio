import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroPhoneImage from "@/assets/hero-phone.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-glow rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Never
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
                Settle
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-lg">
              Experience the future of mobile technology with cutting-edge innovation, 
              premium design, and uncompromising performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="tech" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Innovation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 lg:mt-16">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">50M+</div>
                <div className="text-sm text-white/60">Users Worldwide</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">99%</div>
                <div className="text-sm text-white/60">Satisfaction Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-white/60">Global Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-3xl blur-3xl opacity-30 animate-glow-pulse" />
              <img
                src={heroPhoneImage}
                alt="Premium Smartphone"
                className="relative z-10 max-w-sm lg:max-w-md xl:max-w-lg animate-float shadow-premium rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;