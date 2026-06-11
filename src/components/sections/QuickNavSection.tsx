import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Utensils, GraduationCap, Users, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const QuickNavSection = () => {
  return (
    <div className="mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 font-poppins text-center">
        Explore Campus Life 🏫
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-3">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 p-3 rounded-full w-fit mx-auto mb-3">
              <BookOpen className="h-6 w-6 text-blue-400" />
            </div>
            <CardTitle className="text-lg font-bold text-white">Hostel Life</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Discover the vibrant hostel culture, facilities, and community life
            </p>
            <Button asChild variant="outline" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
              <Link to="/hostel-life">Explore Hostels</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-3">
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/40 p-3 rounded-full w-fit mx-auto mb-3">
              <Utensils className="h-6 w-6 text-emerald-400" />
            </div>
            <CardTitle className="text-lg font-bold text-white">Mess & Food</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Learn about dining options, mess system, and food culture
            </p>
            <Button asChild variant="outline" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
              <Link to="/mess-and-food">Food Guide</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-3">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 p-3 rounded-full w-fit mx-auto mb-3">
              <GraduationCap className="h-6 w-6 text-purple-400" />
            </div>
            <CardTitle className="text-lg font-bold text-white">Academics</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Academic guidance, courses, and study resources
            </p>
            <Button asChild variant="outline" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
              <Link to="/academic-orientation">Study Guide</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-3">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/40 p-3 rounded-full w-fit mx-auto mb-3">
              <Users className="h-6 w-6 text-amber-400" />
            </div>
            <CardTitle className="text-lg font-bold text-white">Clubs & Life</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Join clubs, participate in fests, and build your network
            </p>
            <Button asChild variant="outline" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
              <Link to="/clubs-and-campus-life">Join Clubs</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-3">
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 p-3 rounded-full w-fit mx-auto mb-3">
              <Heart className="h-6 w-6 text-pink-400" />
            </div>
            <CardTitle className="text-lg font-bold text-white">Health & Fitness</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Stay healthy with sports, gym facilities, and wellness tips
            </p>
            <Button asChild variant="outline" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
              <Link to="/health-and-fitness">Stay Fit</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-3">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 p-3 rounded-full w-fit mx-auto mb-3">
              <Star className="h-6 w-6 text-amber-300" />
            </div>
            <CardTitle className="text-lg font-bold text-white">From the Office...</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Real experiences and advice from BITS alumni
            </p>
            <Button asChild variant="outline" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
              <Link to="/daksh-story">Read Stories</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuickNavSection;
