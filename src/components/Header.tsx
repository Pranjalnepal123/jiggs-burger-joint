import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-burger-red to-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Jiggs <span className="text-burger-red">Burger</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-burger-red transition-colors">
              Home
            </a>
            <a href="#menu" className="text-foreground hover:text-burger-red transition-colors">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-burger-red transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-burger-red transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(555) 123-BURGER</span>
            </div>
            <Button variant="order" size="sm">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;