
import Navigation from "@/components/Navigation";
import HealthAndFitness from "@/components/sections/HealthAndFitness";
import Footer from "@/components/Footer";

const HealthAndFitnessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-16">
        <HealthAndFitness />
      </div>
      <Footer />
    </div>
  );
};

export default HealthAndFitnessPage;
