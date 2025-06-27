
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import NotificationCenter from "@/components/NotificationCenter";
import HostelLife from "@/components/sections/HostelLife";
import MessAndFood from "@/components/sections/MessAndFood";
import AcademicOrientation from "@/components/sections/AcademicOrientation";
import ClubsAndCampusLife from "@/components/sections/ClubsAndCampusLife";
import HealthAndFitness from "@/components/sections/HealthAndFitness";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Inside BITS
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
              🎉 Welcome to BITS Pilani!
            </p>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8 border border-orange-200/50">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Congratulations on becoming a part of one of India's most vibrant and prestigious institutions! 🎓
              </p>
              <p className="text-base text-gray-500 mb-6">
                This page is designed to <strong>guide you through your first steps at BITS Pilani</strong> — from settling into your hostel to discovering the wide range of clubs, departments, and resources that make this campus truly special.
              </p>
              <p className="text-base text-gray-500 mb-6">
                Whether you're a student or a parent, this platform aims to answer your questions, connect you with student mentors, and ensure your onboarding experience is <strong>smooth, stress-free, and exciting</strong>.
              </p>
              <p className="text-lg font-semibold text-orange-600">
                Let this be the beginning of an incredible journey. <br />
                <span className="text-blue-600">Welcome home, future BITSian! 💙</span>
              </p>
            </div>

            {/* Notification Center */}
            <NotificationCenter />

            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover-scale mt-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                🔗 Connect with a Student Mentor 🤝
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
