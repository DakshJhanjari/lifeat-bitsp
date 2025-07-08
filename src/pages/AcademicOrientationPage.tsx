
import Navigation from "@/components/Navigation";
import AcademicOrientation from "@/components/sections/AcademicOrientation";
import Footer from "@/components/Footer";

const AcademicOrientationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-16">
        <AcademicOrientation />
      </div>
      <Footer />
    </div>
  );
};

export default AcademicOrientationPage;
