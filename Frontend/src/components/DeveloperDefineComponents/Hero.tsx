import { Button } from "../DeveloperDefineComponents/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-transparent to-white" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4 hover:bg-green-200 transition-colors">
            Welcome to Better Health
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Empower Your Health, Embrace Wellness
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community of wellness enthusiasts and transform your journey to better health with personalized guidance and support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-500 text-white w-full sm:w-auto transform hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
