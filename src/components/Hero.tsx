import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBurger} 
          alt="Jiggs Burger Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burger-brown/80 via-burger-brown/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-1 bg-burger-gold text-burger-brown px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>4.8 Rating</span>
            <span className="text-burger-brown/70">• 500+ Reviews</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Taste the
            <span className="block text-burger-gold">Perfect Burger</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Handcrafted burgers made with premium ingredients, served with love since 2020. 
            Experience the ultimate comfort food at Jiggs Burger.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Order Online
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-burger-brown">
              View Menu
            </Button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-6 h-6 text-burger-gold" />
              <div>
                <p className="font-semibold">Open Daily</p>
                <p className="text-sm text-white/70">11AM - 10PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="w-6 h-6 text-burger-gold" />
              <div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-sm text-white/70">Downtown Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;