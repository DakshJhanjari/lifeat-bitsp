
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BentoGrid from "@/components/sections/BentoGrid";
import MentorConnectButton from "@/components/sections/MentorConnectButton";
import CongratsCard from "@/components/sections/CongratsCard";
import OfficeStoryCard from "@/components/sections/OfficeStoryCard";

const Index = () => {
  return (
    <div className="min-h-screen mesh-gradient-bg">
      <Navigation />
      <HeroSection />
      
      <div className="container mx-auto px-4 max-w-5xl">
        <CongratsCard />
      </div>

      <BentoGrid />

      <div className="container mx-auto px-4 max-w-5xl space-y-6 sm:space-y-10">
        <OfficeStoryCard />
        <MentorConnectButton />
      </div>

      <Footer showConnectSection={true} />
      {/* Spacer for mobile bottom dock */}
      <div className="h-20 md:h-0" />
    </div>
  );
};

export default Index;
