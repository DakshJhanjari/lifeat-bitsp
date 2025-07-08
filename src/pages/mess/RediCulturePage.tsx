
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">☕ Redi Culture</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The heart of BITS social life - where friendships brew over tea and snacks
            </p>
          </div>

          <Card className="hover-scale mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                What is Redi Culture?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg">
                  "Redi" refers to the small tea and snack stalls scattered across the BITS campus. 
                  These humble establishments are the social hubs where students gather to unwind, 
                  discuss everything from academics to life, and form lasting bonds.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Why Redi Culture Matters:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
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
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Redi Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800">🌅 Early Morning</h4>
                    <p className="text-sm text-gray-600">6:00 AM - 8:00 AM</p>
                    <p className="text-xs text-gray-500">Perfect for early risers and morning joggers</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800">🌞 Peak Hours</h4>
                    <p className="text-sm text-gray-600">4:00 PM - 7:00 PM</p>
                    <p className="text-xs text-gray-500">Busiest time - post-class hangouts</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-800">🌙 Night Owl Hours</h4>
                    <p className="text-sm text-gray-600">9:00 PM - 11:00 PM</p>
                    <p className="text-xs text-gray-500">Study break and late-night discussions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-orange-600" />
                  Popular Redi Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">☕ Beverages:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Chai (Tea) - The undisputed king</li>
                      <li>• Coffee - For the caffeine enthusiasts</li>
                      <li>• Cold drinks and juices</li>
                      <li>• Lassi and milkshakes</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">🍪 Snacks:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
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

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                Redi Etiquette & Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">🤝 Social Etiquette:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Always make room for others to sit</li>
                    <li>• Share your table during busy hours</li>
                    <li>• Be patient during peak times</li>
                    <li>• Respect the redi owner's rules</li>
                    <li>• Clean up after yourself</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">💰 Money-Saving Tips:</h4>
                  <ul className="space-y-2 text-gray-600">
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
