
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BentoGrid from "@/components/sections/BentoGrid";
import MentorConnectButton from "@/components/sections/MentorConnectButton";

const Index = () => {
  return (
    <div className="min-h-screen mesh-gradient-bg">
      <Navigation />
      <HeroSection />
      <BentoGrid />
      <div className="container mx-auto px-4 max-w-5xl">
        <MentorConnectButton />
      </div>
      <Footer showConnectSection={true} />
      {/* Spacer for mobile bottom dock */}
      <div className="h-20 md:h-0" />
    </div>
  );
};

export default Index;
