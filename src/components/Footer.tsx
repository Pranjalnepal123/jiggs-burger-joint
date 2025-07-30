import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-burger-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-burger-red to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <h3 className="text-2xl font-bold">
                Jiggs <span className="text-burger-gold">Burger</span>
              </h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Serving the community with delicious, handcrafted burgers made from premium ingredients. 
              Come taste the difference quality makes.
            </p>
            <div className="flex items-center space-x-2 text-burger-gold">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with love since 2020</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-burger-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/80 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-burger-gold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-burger-gold" />
                <span className="text-white/80 text-sm">123 Main Street, Downtown</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-burger-gold" />
                <span className="text-white/80 text-sm">(555) 123-BURGER</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-burger-gold" />
                <span className="text-white/80 text-sm">hello@jiggsburger.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm">
            © 2024 Jiggs Burger. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;