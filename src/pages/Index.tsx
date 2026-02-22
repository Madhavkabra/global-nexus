import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import VerticalsSection from "@/components/VerticalsSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EcosystemSection />
        <VerticalsSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
