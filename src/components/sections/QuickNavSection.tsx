
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Utensils, GraduationCap, Users, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const QuickNavSection = () => {
  return (
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
            <CardTitle className="text-lg font-bold text-slate-800">From the Office...</CardTitle>
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
  );
};

export default QuickNavSection;
