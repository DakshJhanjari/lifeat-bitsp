
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HostelLife from "@/components/sections/HostelLife";
import MessAndFood from "@/components/sections/MessAndFood";
import AcademicOrientation from "@/components/sections/AcademicOrientation";
import ClubsAndCampusLife from "@/components/sections/ClubsAndCampusLife";
import HealthAndFitness from "@/components/sections/HealthAndFitness";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Inside BITS Pilani
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
              Welcome to your new home, freshers and families! 🎉
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Step into a world of endless possibilities at BITS Pilani - where academic excellence meets 
                vibrant campus life, where freedom to explore meets a supportive community, and where your 
                journey of growth and discovery begins!
              </p>
              <p className="text-base text-gray-500 mb-6">
                From choosing your courses to finding your tribe in clubs, from savoring diverse cuisines 
                to building lifelong friendships - we've got you covered with everything you need to know 
                about life at BITS.
              </p>
            </div>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover-scale"
            >
              <a href="https://forms.google.com/your-mentor-form" target="_blank" rel="noopener noreferrer">
                Connect with a Student Mentor 🤝
              </a>
            </Button>
            <div className="mt-12 animate-bounce">
              <ArrowDown className="mx-auto h-8 w-8 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <HostelLife />
      <MessAndFood />
      <AcademicOrientation />
      <ClubsAndCampusLife />
      <HealthAndFitness />
      
      <Footer />
    </div>
  );
};

export default Index;
