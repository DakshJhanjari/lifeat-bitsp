
import Navigation from "@/components/Navigation";
import ClubsAndCampusLife from "@/components/sections/ClubsAndCampusLife";
import Footer from "@/components/Footer";

const ClubsAndCampusLifePage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-16">
        <ClubsAndCampusLife />
      </div>
      <Footer />
    </div>
  );
};

export default ClubsAndCampusLifePage;
