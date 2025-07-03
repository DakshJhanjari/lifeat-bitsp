
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Users, BookOpen, Star, Award, Target, Heart, Sparkles, GraduationCap } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <Navigation />
      
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 bounce-gentle">
              <h1 className="text-6xl md:text-8xl font-bold font-poppins text-gradient-primary mb-6">
                Inside BITS
              </h1>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-red-500" />
                <p className="text-2xl md:text-3xl font-bold text-slate-700">
                  Welcome to BITS Pilani
                </p>
                <Sparkles className="h-6 w-6 text-blue-500" />
              </div>
              <p className="text-lg md:text-xl text-slate-600 font-medium">
                Your ultimate guide to campus life, academics, and endless possibilities! 🎓
              </p>
            </div>
            
            <div className="student-card rounded-3xl p-8 md:p-12 mb-10 hover-lift">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-vibrant p-3 rounded-full mr-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-poppins">
                  Congratulations, Future BITSian! 🎉
                </h2>
              </div>
              
              <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">
                You've secured admission to one of India's most <span className="text-gradient-secondary font-bold">prestigious</span> and <span className="text-gradient-secondary font-bold">innovative</span> institutions. 
                Get ready for an incredible journey! ✨
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="patriotic-card p-6 rounded-2xl hover-lift">
                  <div className="bg-gradient-to-r from-red-500 to-blue-500 p-3 rounded-full w-fit mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-xl mb-3 font-poppins">Get Oriented</h3>
                  <p className="text-slate-600 text-sm font-medium">From campus navigation to academic planning - we've got you covered!</p>
                </div>
                <div className="patriotic-card p-6 rounded-2xl hover-lift">
                  <div className="bg-gradient-to-r from-blue-500 to-red-500 p-3 rounded-full w-fit mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-xl mb-3 font-poppins">Connect</h3>
                  <p className="text-slate-600 text-sm font-medium">Build lasting friendships and professional networks that'll last a lifetime!</p>
                </div>
                <div className="patriotic-card p-6 rounded-2xl hover-lift">
                  <div className="bg-gradient-to-r from-red-500 via-white to-blue-500 p-3 rounded-full w-fit mb-4">
                    <GraduationCap className="h-8 w-8 text-slate-800" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-xl mb-3 font-poppins">Excel</h3>
                  <p className="text-slate-600 text-sm font-medium">Discover amazing opportunities and achieve your wildest dreams!</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-8 rounded-2xl border-2 border-red-200">
                <p className="text-xl font-bold text-slate-800 mb-3 font-poppins">
                  🚀 Your journey to excellence starts here!
                </p>
                <p className="text-slate-700 font-medium text-lg">
                  Welcome to the BITS Pilani community - where innovation meets tradition and dreams become reality! 🌟
                </p>
              </div>
            </div>

            <div className="mb-8">
              <Card className="student-card hover-lift border-2 border-red-200">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-slate-800 font-bold flex items-center justify-center font-poppins">
                    <div className="bg-gradient-to-r from-red-500 to-blue-500 p-2 rounded-full mr-3">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    From the Office...
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-6 text-lg font-medium">
                    Experience and advice from the seniors - Real stories, real insights! 💡
                  </p>
                  <Button asChild className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover-lift text-lg">
                    <Link to="/daksh-story">Read Story 📖</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <Button asChild size="lg" className="bg-gradient-vibrant hover:from-red-600 hover:via-blue-600 hover:to-red-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover-lift text-xl">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Connect with a Student Mentor 🤝
                </a>
              </Button>
            </div>
            
            <div className="animate-bounce">
              <ArrowDown className="mx-auto h-10 w-10 text-red-500" />
            </div>
          </div>
        </div>
      </section>

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
