import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Empowering individuals to take control of their health and wellness journey through community support and innovative technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Programs", "Community", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {["FAQ", "Privacy Policy", "Terms of Service", "Help Center"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sage-300 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Health & Community Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;