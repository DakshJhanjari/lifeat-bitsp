
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CongratsCard from "@/components/sections/CongratsCard";
import OfficeStoryCard from "@/components/sections/OfficeStoryCard";
import MentorConnectButton from "@/components/sections/MentorConnectButton";
import QuickNavSection from "@/components/sections/QuickNavSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-modern">
      <Navigation />
      
      <HeroSection />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
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
