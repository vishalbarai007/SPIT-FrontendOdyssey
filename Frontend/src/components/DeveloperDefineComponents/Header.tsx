import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../DeveloperDefineComponents/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-soft-gray bg-white lg:bg-off-white/80 lg:backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">FitSync</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-green-600" />
            ) : (
              <Menu className="h-6 w-6 text-green-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          {/* <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link to="/features" className="text-gray-800 hover:text-green-600 transition-colors">
              Features
            </Link>
            <Link to="/programs" className="text-gray-800 hover:text-green-600 transition-colors">
              Programs
            </Link>
            <Link to="/community" className="text-gray-800 hover:text-green-600 transition-colors">
              Community
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav> */}

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-500" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-400 text-white" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-soft-gray shadow-lg animate-fade-down">
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-800 hover:text-green-600 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-800 hover:text-green-600 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  to="/features"
                  className="text-gray-800 hover:text-green-600 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Features
                </Link>
                <Link
                  to="/programs"
                  className="text-gray-800 hover:text-green-600 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Programs
                </Link>
                <Link
                  to="/community"
                  className="text-gray-800 hover:text-green-600 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Community
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-800 hover:text-green-600 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-500" asChild onClick={toggleMenu}>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="bg-orange-500 hover:bg-orange-400 text-white" asChild onClick={toggleMenu}>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
