
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Coffee, ShoppingCart, Clock, ExternalLink, Store } from "lucide-react";

const MessAndFood = () => {
  return (
    <section id="mess" className="py-16 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🍽️ Mess & Food</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From hearty meals to late-night snacks, discover all the delicious options on campus!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-orange-600" />
                Mess System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-orange-800">Mess Allocation</h4>
                  <p className="text-sm text-gray-600">Each hostel is attached to a mess block; you'll be assigned one</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Meal Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Food options with decent variety</li>
                    <li>• Jain options available daily</li>
                    <li>• Fixed timings for all meals</li>
                    <li>• Night canteens open later</li>
                  </ul>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://www.ssms-pilani.in/" target="_blank" rel="noopener noreferrer">
                    📋 Mess Menus & Timings <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="h-5 w-5 text-purple-600" />
                Redi Culture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 mb-3">Each hostel has a "Redi" - small food kiosks that are part of campus life!</p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🕘 Timings</h4>
                  <p className="text-sm text-gray-600">Daily: 9:00 AM to 6:00 PM</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What they serve:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hot Maggi & noodles</li>
                    <li>• Grilled sandwiches & toasties</li>
                    <li>• Fresh juices, shakes & soft drinks</li>
                    <li>• Tea, coffee, and snacks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5 text-green-600" />
                BITS Co-op Store
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-800">Your Campus Store</h4>
                  <p className="text-sm text-gray-600">Run by Rajasthan Government - fair pricing & easy access</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What You'll Find:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 📚 Textbooks & reference books</li>
                    <li>• ✏️ Stationery & lab equipment</li>
                    <li>• 💻 Basic electronics & chargers</li>
                    <li>• 🧼 Daily essentials & toiletries</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-500">💳 Pay via cash, UPI, or student ID card</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-blue-600" />
              C'not (Connaught Place) - The Heart of Student Life
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-4">
                  Affectionately called <strong>C'not</strong>, this is the central commercial hub inside BITS Pilani's campus — think of it as the student marketplace meets food court meets hangout zone.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">🛍️ What You'll Find:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Stationery shops for academic needs</li>
                    <li>• General stores, SIM cards, snacks</li>
                    <li>• Laundry services, photocopies, tailors</li>
                    <li>• Eateries & cafes including Maggi joints</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-6 rounded-xl text-center">
                  <h4 className="font-bold text-blue-800 text-lg mb-2">🌇 Evening Vibes</h4>
                  <p className="text-sm text-gray-600">
                    In the evenings, C'not comes alive with students from every corner of campus — chatting, eating, debating, or just chilling after classes.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-indigo-600" />
              Campus Eateries - ANC, Looters, TOTT, and DCC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 p-4 bg-indigo-50 rounded-lg">
              <p className="text-indigo-800 font-medium">
                🕔 Operating Hours: 5:00 PM to 2:00 AM (with short break during dinner hours)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Perfect for evening hangouts, late-night cravings, or grabbing a quick bite after classes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl">
                  <h4 className="font-bold text-orange-800 text-lg mb-2">ANC</h4>
                  <p className="text-sm text-gray-600">All Night Canteen - Your 24/7 food companion</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
                  <h4 className="font-bold text-purple-800 text-lg mb-2">TOTT</h4>
                  <p className="text-sm text-gray-600">Top of the Tower - Scenic dining experience</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-xl">
                  <h4 className="font-bold text-blue-800 text-lg mb-2">Looters</h4>
                  <p className="text-sm text-gray-600">Budget-friendly quick bites</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl">
                  <h4 className="font-bold text-green-800 text-lg mb-2">DCC</h4>
                  <p className="text-sm text-gray-600">Diverse food options</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-orange-800">🧼 Laundry & Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">💰 Paid Services:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dhobi services (₹10 per item for washing + ironing)</li>
                  <li>• Campus laundromat (paid basis)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">🚿 DIY Options:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Handwash clothes in designated wash areas</li>
                  <li>• Bring extension cords (only 2 plug points per room)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MessAndFood;
