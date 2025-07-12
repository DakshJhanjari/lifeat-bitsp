
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CongratsCard from "@/components/sections/CongratsCard";
import OfficeStoryCard from "@/components/sections/OfficeStoryCard";
import MentorConnectButton from "@/components/sections/MentorConnectButton";
import QuickNavSection from "@/components/sections/QuickNavSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <HeroSection />
      
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-5xl mx-auto">
          <CongratsCard />
          <OfficeStoryCard />
          <MentorConnectButton />
          <QuickNavSection />
        </div>
      </div>
      
      <Footer showConnectSection={true} />
    </div>
  );
};

export default Index;
