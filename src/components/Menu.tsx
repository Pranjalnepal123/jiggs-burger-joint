import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Jiggs Classic",
    description: "Our signature beef patty with lettuce, tomato, onion, and special sauce",
    price: 12.99,
    category: "Burgers",
    rating: 4.8,
    popular: true,
    image: "🍔"
  },
  {
    id: 2,
    name: "BBQ Bacon Deluxe", 
    description: "Smoky BBQ sauce, crispy bacon, cheddar cheese, and onion rings",
    price: 15.99,
    category: "Burgers",
    rating: 4.9,
    popular: true,
    image: "🥓"
  },
  {
    id: 3,
    name: "Mushroom Swiss",
    description: "Sautéed mushrooms, swiss cheese, and garlic aioli",
    price: 14.99,
    category: "Burgers", 
    rating: 4.7,
    image: "🍄"
  },
  {
    id: 4,
    name: "Spicy Jalapeño",
    description: "Jalapeños, pepper jack cheese, spicy mayo, and crispy onions",
    price: 13.99,
    category: "Burgers",
    rating: 4.6,
    image: "🌶️"
  },
  {
    id: 5,
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese, bacon bits, and green onions",
    price: 8.99,
    category: "Sides",
    rating: 4.5,
    image: "🍟"
  },
  {
    id: 6,
    name: "Onion Rings",
    description: "Beer-battered golden onion rings with ranch dip",
    price: 6.99,
    category: "Sides",
    rating: 4.4,
    image: "🧅"
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-burger-gold text-burger-brown">
            Our Menu
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Delicious <span className="text-burger-red">Creations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every burger is crafted with premium ingredients and grilled to perfection
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white rounded-full p-2 shadow-lg">
            <Button variant="menu" size="sm" className="rounded-full">
              All Items
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              Burgers
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              Sides
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              Drinks
            </Button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
              <CardContent className="p-6">
                {/* Item Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <div className="flex items-center space-x-2">
                    {item.popular && (
                      <Badge variant="secondary" className="bg-burger-red text-white">
                        Popular
                      </Badge>
                    )}
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-burger-gold text-burger-gold" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Item Details */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-burger-red">
                    ${item.price}
                  </span>
                  <Button variant="order" size="sm" className="group-hover:scale-110 transition-transform">
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-12">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;