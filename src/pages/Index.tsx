import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Users, BookOpen, Star, Award, Target, Heart, Sparkles, GraduationCap, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import NotificationCenter from "@/components/NotificationCenter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <section id="home" className="pt-20 sm:pt-24 pb-8 sm:pb-16 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 sm:mb-8 bounce-gentle">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-poppins text-gradient-primary mb-4 sm:mb-6 leading-tight">
                Inside BITS
              </h1>
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 flex-wrap">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 flex-shrink-0" />
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 text-center">
                  Welcome to BITS Pilani
                </p>
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-teal-500 flex-shrink-0" />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium px-2">
                Your ultimate guide to campus life, academics, and endless possibilities! 🎓
              </p>
            </div>
            
            <div className="student-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 mb-6 sm:mb-10 hover-lift">
              <div className="flex items-center justify-center mb-4 sm:mb-6 flex-wrap gap-2">
                <div className="bg-gradient-vibrant p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 font-poppins text-center">
                  Congratulations, Future BITSian! 🎉
                </h2>
              </div>
              
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 font-medium px-2">
                You've secured admission to one of India's most <span className="text-gradient-secondary font-bold">prestigious</span> and <span className="text-gradient-secondary font-bold">innovative</span> institutions. 
                Get ready for an incredible journey! ✨
              </p>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="vibrant-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover-lift">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 sm:p-3 rounded-full w-fit mb-3 sm:mb-4 mx-auto sm:mx-0">
                    <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg sm:text-xl mb-2 sm:mb-3 font-poppins text-center sm:text-left">Get Oriented</h3>
                  <p className="text-slate-600 text-sm font-medium text-center sm:text-left leading-relaxed">From campus navigation to academic planning - we've got you covered!</p>
                </div>
                <div className="vibrant-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover-lift">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 sm:p-3 rounded-full w-fit mb-3 sm:mb-4 mx-auto sm:mx-0">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg sm:text-xl mb-2 sm:mb-3 font-poppins text-center sm:text-left">Connect</h3>
                  <p className="text-slate-600 text-sm font-medium text-center sm:text-left leading-relaxed">Build lasting friendships and professional networks that'll last a lifetime!</p>
                </div>
                <div className="vibrant-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover-lift sm:col-span-2 md:col-span-1">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-2 sm:p-3 rounded-full w-fit mb-3 sm:mb-4 mx-auto sm:mx-0">
                    <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg sm:text-xl mb-2 sm:mb-3 font-poppins text-center sm:text-left">Excel</h3>
                  <p className="text-slate-600 text-sm font-medium text-center sm:text-left leading-relaxed">Discover amazing opportunities and achieve your wildest dreams!</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-teal-100 p-4 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-purple-200">
                <p className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 font-poppins text-center">
                  🚀 Your journey to excellence starts here!
                </p>
                <p className="text-slate-700 font-medium text-base sm:text-lg text-center leading-relaxed">
                  Welcome to the BITS Pilani community - where innovation meets tradition and dreams become reality! 🌟
                </p>
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <NotificationCenter />
            </div>

            <div className="mb-6 sm:mb-8">
              <Card className="student-card hover-lift border-2 border-orange-200">
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <CardTitle className="text-xl sm:text-2xl text-slate-800 font-bold flex items-center justify-center font-poppins flex-wrap gap-2">
                    <div className="bg-gradient-warm p-2 rounded-full flex-shrink-0">
                      <Star className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <span>From the Office...</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <p className="text-slate-600 mb-4 sm:mb-6 text-base sm:text-lg font-medium leading-relaxed">
                    Experience and advice from the seniors - Real stories, real insights! 💡
                  </p>
                  <Button asChild className="bg-gradient-warm hover:from-orange-500 hover:to-pink-500 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover-lift text-base sm:text-lg">
                    <Link to="/daksh-story">Read Story 📖</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8 sm:mb-12">
              <Button asChild size="lg" className="bg-gradient-vibrant hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-xl shadow-lg hover-lift text-base sm:text-xl">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Connect with a Student Mentor 🤝
                </a>
              </Button>
            </div>

            {/* Quick Navigation Section */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8 font-poppins text-center">
                Explore Campus Life 🏫
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card className="student-card hover-lift border-2 border-blue-200">
                  <CardHeader className="text-center pb-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full w-fit mx-auto mb-3">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-800">Hostel Life</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      Discover the vibrant hostel culture, facilities, and community life
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/hostel-life">Explore Hostels</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="student-card hover-lift border-2 border-green-200">
                  <CardHeader className="text-center pb-3">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full w-fit mx-auto mb-3">
                      <Utensils className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-800">Mess & Food</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      Learn about dining options, mess system, and food culture
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/mess-and-food">Food Guide</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="student-card hover-lift border-2 border-purple-200">
                  <CardHeader className="text-center pb-3">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full w-fit mx-auto mb-3">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-800">Academics</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      Academic guidance, courses, and study resources
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/academic-orientation">Study Guide</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="student-card hover-lift border-2 border-orange-200">
                  <CardHeader className="text-center pb-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full w-fit mx-auto mb-3">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-800">Clubs & Life</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      Join clubs, participate in fests, and build your network
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/clubs-and-campus-life">Join Clubs</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="student-card hover-lift border-2 border-pink-200">
                  <CardHeader className="text-center pb-3">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full w-fit mx-auto mb-3">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-800">Health & Fitness</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      Stay healthy with sports, gym facilities, and wellness tips
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/health-and-fitness">Stay Fit</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="student-card hover-lift border-2 border-yellow-200">
                  <CardHeader className="text-center pb-3">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full w-fit mx-auto mb-3">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-800">Senior Stories</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      Real experiences and advice from BITS alumni
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/daksh-story">Read Stories</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="animate-bounce">
              <ArrowDown className="mx-auto h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
