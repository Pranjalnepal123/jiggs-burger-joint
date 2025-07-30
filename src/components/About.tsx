import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4 bg-burger-gold text-burger-brown">
              Our Story
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Passion for <span className="text-burger-red">Perfect Burgers</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in 2020 by Chef Marcus Jiggs, our cafe started with a simple mission: 
              create the perfect burger using only the finest ingredients. What began as a 
              small family dream has grown into the neighborhood's favorite burger destination.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-burger-red/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-burger-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Made with Love</h3>
                  <p className="text-muted-foreground">Every burger is handcrafted with care and attention to detail</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-burger-gold/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-burger-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Premium Ingredients</h3>
                  <p className="text-muted-foreground">Locally sourced, fresh ingredients and grass-fed beef</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-burger-red mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burger-red mb-2">4.8</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burger-red mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Serving</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-burger-red/5 to-burger-red/10 border-burger-red/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-burger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-burger-red" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Fast Service</h3>
                <p className="text-sm text-muted-foreground">Quick preparation without compromising quality</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-burger-gold/10 to-burger-gold/20 border-burger-gold/30">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-burger-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-burger-gold" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Family Friendly</h3>
                <p className="text-sm text-muted-foreground">Welcoming atmosphere for all ages</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/20 border-accent/30">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Award Winning</h3>
                <p className="text-sm text-muted-foreground">Best Burger 2023 - Local Food Awards</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/20 to-secondary/30 border-secondary/40">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Local Favorite</h3>
                <p className="text-sm text-muted-foreground">Proudly serving our community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;