
import Navigation from "@/components/Navigation";
import MessAndFood from "@/components/sections/MessAndFood";
import Footer from "@/components/Footer";

const MessAndFoodPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-16">
        <MessAndFood />
      </div>
      <Footer />
    </div>
  );
};

export default MessAndFoodPage;
