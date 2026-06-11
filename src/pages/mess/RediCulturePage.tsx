import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Clock, Heart, Users } from "lucide-react";

const RediCulturePage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">☕ Redi Culture</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The heart of BITS social life - where friendships brew over tea and snacks
            </p>
          </div>

          <Card className="hover-scale mb-8 bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Heart className="h-5 w-5 text-rose-500" />
                What is Redi Culture?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-300 text-lg">
                  "Redi" refers to the small tea and snack stalls scattered across the BITS campus. 
                  These humble establishments are the social hubs where students gather to unwind, 
                  discuss everything from academics to life, and form lasting bonds.
                </p>
                <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-300 mb-2">Why Redi Culture Matters:</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• 🤝 Social networking happens naturally over chai</li>
                    <li>• 💡 Ideas and projects are born during redi conversations</li>
                    <li>• 🎓 Senior-junior interactions and mentorship</li>
                    <li>• 🌙 Late-night study break destinations</li>
                    <li>• 🎉 Celebration spots for small victories</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Clock className="h-5 w-5 text-blue-400" />
                  Redi Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-blue-950/20 border border-blue-900/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-300">🌅 Early Morning</h4>
                    <p className="text-sm text-slate-400">6:00 AM - 8:00 AM</p>
                    <p className="text-xs text-slate-500">Perfect for early risers and morning joggers</p>
                  </div>
                  <div className="bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-emerald-300">🌞 Peak Hours</h4>
                    <p className="text-sm text-slate-400">4:00 PM - 7:00 PM</p>
                    <p className="text-xs text-slate-500">Busiest time - post-class hangouts</p>
                  </div>
                  <div className="bg-purple-950/20 border border-purple-900/30 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-300">🌙 Night Owl Hours</h4>
                    <p className="text-sm text-slate-400">9:00 PM - 11:00 PM</p>
                    <p className="text-xs text-slate-500">Study break and late-night discussions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Coffee className="h-5 w-5 text-orange-400" />
                  Popular Redi Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-amber-950/20 border border-amber-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-300 mb-2">☕ Beverages:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Chai (Tea) - The undisputed king</li>
                      <li>• Coffee - For the caffeine enthusiasts</li>
                      <li>• Cold drinks and juices</li>
                      <li>• Lassi and milkshakes</li>
                    </ul>
                  </div>
                  <div className="bg-amber-950/20 border border-amber-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-300 mb-2">Maggi & Snacks:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Maggi noodles - Late-night favorite</li>
                      <li>• Samosas and pakoras</li>
                      <li>• Biscuits and cookies</li>
                      <li>• Sandwiches and toasts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-emerald-400" />
                Redi Etiquette & Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-emerald-300 mb-3">🤝 Social Etiquette:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Always make room for others to sit</li>
                    <li>• Share your table during busy hours</li>
                    <li>• Be patient during peak times</li>
                    <li>• Respect the redi owner's rules</li>
                    <li>• Clean up after yourself</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-300 mb-3">💰 Money-Saving Tips:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Many redis offer credit systems</li>
                    <li>• Group orders often get discounts</li>
                    <li>• Regular customers get better prices</li>
                    <li>• End-of-day deals on leftover items</li>
                    <li>• Festival specials and combo offers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RediCulturePage;
