import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Journalist",
      avatar: "SC",
      rating: 5,
      content: "The camera quality is absolutely stunning. I've never seen such crisp, vibrant photos from a smartphone before. This has completely changed my mobile photography game.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      avatar: "MR",
      rating: 5,
      content: "Performance is incredible. No lag, instant app switching, and the battery lasts all day even with heavy usage. This is exactly what I needed for my demanding workflow.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Emily Johnson",
      role: "Business Executive",
      avatar: "EJ",
      rating: 5,
      content: "The build quality and design are premium. It feels luxurious in hand and the attention to detail is remarkable. Definitely worth the investment.",
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Users Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from real users who chose to never settle for ordinary.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-elegant hover:shadow-premium transition-smooth bg-gradient-to-br from-background to-muted/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-semibold mr-4`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-smooth" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;