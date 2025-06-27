
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Sparkles, Heart, Star } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-dynamic animate-gradient-x">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-300/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6 animate-bounce-in">
              <Sparkles className="h-8 w-8 text-yellow-500 mr-3 animate-spin" style={{animationDuration: '3s'}} />
              <h1 className="text-6xl md:text-8xl font-black font-poppins text-gradient-yellow-blue drop-shadow-2xl">
                Inside BITS
              </h1>
              <Sparkles className="h-8 w-8 text-red-500 ml-3 animate-spin" style={{animationDuration: '4s'}} />
            </div>
            
            <div className="flex items-center justify-center mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <p className="text-2xl md:text-4xl font-bold font-inter text-white drop-shadow-lg">
                🎉 Welcome to BITS Pilani! 🎉
              </p>
              <Star className="h-6 w-6 text-red-500 ml-2" />
            </div>

            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl mb-10 border-2 border-white/30 hover-scale animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-red-500 mr-3 animate-pulse" />
                <p className="text-2xl md:text-3xl font-bold text-gradient-red-yellow font-poppins">
                  Congratulations Future BITSian!
                </p>
                <Heart className="h-8 w-8 text-red-500 ml-3 animate-pulse" />
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-inter">
                You've just stepped into one of India's most <span className="font-bold text-yellow-600">vibrant</span> and <span className="font-bold text-sky-600">prestigious</span> institutions! 🎓
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-2xl border-2 border-yellow-300 hover-scale">
                  <h3 className="font-bold text-yellow-800 text-lg mb-2 font-poppins">🏠 Settle In</h3>
                  <p className="text-yellow-700 text-sm font-inter">From hostel life to campus navigation</p>
                </div>
                <div className="bg-gradient-to-br from-sky-100 to-sky-200 p-6 rounded-2xl border-2 border-sky-300 hover-scale">
                  <h3 className="font-bold text-sky-800 text-lg mb-2 font-poppins">🎯 Discover</h3>
                  <p className="text-sky-700 text-sm font-inter">Clubs, departments, and opportunities</p>
                </div>
                <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-2xl border-2 border-red-300 hover-scale">
                  <h3 className="font-bold text-red-800 text-lg mb-2 font-poppins">🤝 Connect</h3>
                  <p className="text-red-700 text-sm font-inter">Student mentors and community</p>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-gray-600 mb-6 font-inter leading-relaxed">
                This platform is designed to make your onboarding experience <span className="font-bold text-yellow-600">smooth</span>, <span className="font-bold text-sky-600">stress-free</span>, and <span className="font-bold text-red-600">exciting</span>!
              </p>
              
              <div className="bg-gradient-to-r from-yellow-400 via-sky-400 to-red-400 p-6 rounded-2xl shadow-xl">
                <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg font-poppins mb-2">
                  🚀 Let this be the beginning of an incredible journey!
                </p>
                <p className="text-lg font-semibold text-white drop-shadow font-inter">
                  Welcome home, future BITSian! 💙✨
                </p>
              </div>
            </div>

            {/* Notification Center */}
            <div className="animate-fade-in" style={{animationDelay: '0.9s'}}>
              <NotificationCenter />
            </div>

            <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
              <Button asChild size="lg" className="bg-gradient-to-r from-red-500 via-yellow-500 to-sky-500 hover:from-red-600 hover:via-yellow-600 hover:to-sky-600 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl hover-scale border-2 border-white/30 font-poppins">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  ✨ Connect with a Student Mentor 🤝
                </a>
              </Button>
            </div>
            
            <div className="mt-16 animate-bounce">
              <ArrowDown className="mx-auto h-10 w-10 text-white drop-shadow-lg" />
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
