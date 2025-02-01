import Hero from "./Hero";
import Features from "./Features";
import Programs from "./Programs";
import Footer from "./Footer";
import Header from "./Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-warmWhite pt-16">
      <Header/>
      <Hero />
      <Features />
      <Programs />
      <Footer />
    </div>
  );
};

export default Index;