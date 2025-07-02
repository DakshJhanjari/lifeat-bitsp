
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Users, BookOpen, Star, Award, Target, Heart } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold font-poppins text-gradient-primary mb-4">
                Inside BITS
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-2">
                Welcome to BITS Pilani
              </p>
              <p className="text-lg text-slate-600">
                Your comprehensive guide to campus life and academics
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 md:p-10 mb-10 hover-lift">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
                  Congratulations, Future BITSian!
                </h2>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                You've secured admission to one of India's most <span className="font-semibold text-slate-800">prestigious</span> and <span className="font-semibold text-slate-800">innovative</span> institutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="professional-card p-6 rounded-xl hover-lift">
                  <Target className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-slate-800 text-lg mb-2">Get Oriented</h3>
                  <p className="text-slate-600 text-sm">From campus navigation to academic planning</p>
                </div>
                <div className="professional-card p-6 rounded-xl hover-lift">
                  <Users className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-slate-800 text-lg mb-2">Connect</h3>
                  <p className="text-slate-600 text-sm">Build lasting relationships and networks</p>
                </div>
                <div className="professional-card p-6 rounded-xl hover-lift">
                  <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-slate-800 text-lg mb-2">Excel</h3>
                  <p className="text-slate-600 text-sm">Discover opportunities and achieve your goals</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border border-slate-200">
                <p className="text-lg font-semibold text-slate-800 mb-2">
                  Your journey to excellence starts here
                </p>
                <p className="text-slate-600">
                  Welcome to the BITS Pilani community - where innovation meets tradition.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <NotificationCenter />
            </div>

            <div className="mb-8">
              <Card className="professional-card hover-lift">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-slate-800 font-semibold flex items-center justify-center">
                    <Star className="h-5 w-5 mr-2 text-amber-500" />
                    Student Success Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-6">
                    Read about Daksh's inspiring journey from initial uncertainty to finding his place at BITS Pilani
                  </p>
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-2 rounded-lg shadow-sm hover-lift">
                    <Link to="/daksh-story">Read Story</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-slate-800 to-blue-800 hover:from-slate-700 hover:to-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-sm hover-lift">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Connect with a Student Mentor
                </a>
              </Button>
            </div>
            
            <div className="animate-bounce">
              <ArrowDown className="mx-auto h-8 w-8 text-slate-400" />
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
