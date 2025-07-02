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
  return <div className="min-h-screen bg-gradient-dynamic">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse-slow" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-800/8 rounded-full blur-3xl animate-pulse-slow" style={{
          animationDelay: '2s'
        }}></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6 animate-bounce-in">
              <Sparkles className="h-8 w-8 text-blue-600 mr-3 animate-spin" style={{
              animationDuration: '3s'
            }} />
              <h1 className="text-6xl md:text-8xl font-black font-poppins text-blue-900 drop-shadow-2xl">
                Inside BITS
              </h1>
              <Sparkles className="h-8 w-8 text-blue-800 ml-3 animate-spin" style={{
              animationDuration: '4s'
            }} />
            </div>
            
            <div className="flex items-center justify-center mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <Star className="h-6 w-6 text-blue-600 mr-2" />
              <p className="text-2xl md:text-4xl font-bold font-inter text-blue-800 drop-shadow-lg">
                🎉 Welcome to BITS Pilani! 🎉
              </p>
              <Star className="h-6 w-6 text-blue-800 ml-2" />
            </div>

            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl mb-10 hover-scale animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <div className="flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-blue-600 mr-3 animate-pulse" />
                <p className="text-2xl md:text-3xl font-bold text-blue-900 font-poppins">
                  Congratulations Future BITSian!
                </p>
                <Heart className="h-8 w-8 text-blue-800 ml-3 animate-pulse" />
              </div>
              
              <p className="text-lg md:text-xl text-blue-800 leading-relaxed mb-6 font-inter">
                You've just stepped into one of India's most <span className="font-bold text-blue-900">vibrant</span> and <span className="font-bold text-blue-900">prestigious</span> institutions! 🎓
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="light-card p-6 rounded-2xl border-blue-800/30 hover-scale">
                  <h3 className="font-bold text-blue-800 text-lg mb-2 font-poppins">🏠 Settle In</h3>
                  <p className="text-blue-700 text-sm font-inter">From hostel life to campus navigation</p>
                </div>
                <div className="light-card p-6 rounded-2xl border-blue-800/40 hover-scale">
                  <h3 className="font-bold text-blue-800 text-lg mb-2 font-poppins">🎯 Discover</h3>
                  <p className="text-blue-700 text-sm font-inter">Clubs, departments, and opportunities</p>
                </div>
                <div className="light-card p-6 rounded-2xl border-blue-900/50 hover-scale">
                  <h3 className="font-bold text-blue-900 text-lg mb-2 font-poppins">🤝 Connect</h3>
                  <p className="text-blue-700 text-sm font-inter">Student mentors and community</p>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-blue-800 mb-6 font-inter leading-relaxed">
                This platform is designed to make your onboarding experience <span className="font-bold text-blue-900">smooth</span>, <span className="font-bold text-blue-900">stress-free</span>, and <span className="font-bold text-blue-900">exciting</span>!
              </p>
              
              <div className="bg-gradient-to-r from-blue-900/20 via-white/20 to-blue-900/20 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-blue-800/30">
                <p className="text-xl md:text-2xl font-bold text-blue-900 drop-shadow-lg font-poppins mb-2">
                  🚀 Let this be the beginning of an incredible journey!
                </p>
                <p className="text-lg font-semibold text-blue-800 drop-shadow font-inter">
                  Welcome home, future BITSian! 💙✨
                </p>
              </div>
            </div>

            {/* Notification Center */}
            <div className="animate-fade-in" style={{
            animationDelay: '0.9s'
          }}>
              <NotificationCenter />
            </div>

            {/* Featured Student Story */}
            <div className="animate-fade-in mb-8" style={{
            animationDelay: '1.0s'
          }}>
              <Card className="glass-effect shadow-2xl border-2 border-blue-900/30 hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900 font-poppins flex items-center justify-center">
                    <Heart className="h-6 w-6 mr-3 text-red-500" />
                    Real Student Story
                    <Heart className="h-6 w-6 ml-3 text-red-500" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-blue-800 mb-6 font-inter">
                    Read Daksh's inspiring journey from initial reluctance to finding his true home at BITS Pilani
                  </p>
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white hover:from-blue-700 hover:via-blue-500 hover:to-blue-700 px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover-scale border border-blue-700/30 font-poppins">
                    <Link to="/daksh-story">📖 From the ✨</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in" style={{
            animationDelay: '1.2s'
          }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white hover:from-blue-800 hover:via-blue-600 hover:to-blue-800 px-10 py-6 text-xl font-bold rounded-full shadow-2xl hover-scale border border-blue-800/30 font-poppins">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  ✨ Connect with a Student Mentor 🤝
                </a>
              </Button>
            </div>
            
            <div className="mt-16 animate-bounce">
              <ArrowDown className="mx-auto h-10 w-10 text-blue-800 drop-shadow-lg" />
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
    </div>;
};
export default Index;