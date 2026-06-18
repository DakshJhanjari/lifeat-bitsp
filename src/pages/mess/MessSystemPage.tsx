import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Clock, Users, ExternalLink } from "lucide-react";

const MessSystemPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">🍽️ Mess System</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Understanding the dining system at BITS Pilani - from allocation to meal timings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Users className="h-5 w-5 text-blue-400" />
                  Mess Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Students are automatically allocated to mess facilities based on their hostel assignment.
                  </p>
                  <div className="bg-blue-950/20 border border-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2">How It Works:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Each hostel has its designated mess</li>
                      <li>• No need to choose - allocation is automatic</li>
                      <li>• Mess fees are included in hostel charges</li>
                      <li>• Student ID card serves as mess card</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  Meal Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-amber-950/20 border border-amber-900/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-amber-300">🌅 Breakfast</h4>
                      <p className="text-sm text-slate-400">7:30 AM - 9:30 AM</p>
                    </div>
                    <div className="bg-amber-950/20 border border-amber-900/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-amber-300">🌞 Lunch</h4>
                      <p className="text-sm text-slate-400">12:00 PM - 2:00 PM</p>
                    </div>
                    <div className="bg-orange-950/20 border border-orange-900/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-orange-300">☕ Evening Tea & Snacks</h4>
                      <p className="text-sm text-slate-400">5:00 PM - 6:00 PM</p>
                    </div>
                    <div className="bg-purple-950/20 border border-purple-900/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-purple-300">🌙 Dinner</h4>
                      <p className="text-sm text-slate-400">7:30 PM - 9:30 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover-scale mb-8 bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Utensils className="h-5 w-5 text-red-400" />
                Mess Features & Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-300 mb-3">🍳 Food Quality & Variety:</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li>• Nutritious and balanced meals</li>
                    <li>• Both North Indian and South Indian options</li>
                    <li>• Vegetarian and non-vegetarian meals</li>
                    <li>• Special meals during festivals</li>
                    <li>• Regular menu rotation to avoid monotony</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300 mb-3">🏢 Mess Management:</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li>• Professional catering services</li>
                    <li>• Regular quality checks and inspections</li>
                    <li>• Student feedback system</li>
                    <li>• Hygiene and cleanliness standards</li>
                    <li>• Mess committee with student representatives</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button asChild className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-pink-500 text-white font-medium shadow-sm">
                  <a href="https://www.ssms-pilani.in/" target="_blank" rel="noopener noreferrer">
                    📋 View Current Mess Menu <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MessSystemPage;
