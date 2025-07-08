
import Navigation from "@/components/Navigation";
import HostelLife from "@/components/sections/HostelLife";
import Footer from "@/components/Footer";

const HostelLifePage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-16">
        <HostelLife />
      </div>
      <Footer />
    </div>
  );
};

export default HostelLifePage;
