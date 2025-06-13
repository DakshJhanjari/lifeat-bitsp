
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Coffee, ShoppingCart, Clock } from "lucide-react";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <p className="text-sm text-gray-600">Based on your hostel assignment</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Meal Variety:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• North & South Indian cuisine</li>
                    <li>• Special meals on festivals</li>
                    <li>• Healthy options available</li>
                    <li>• Jain food arrangements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                Night Canteens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 mb-3">Open late for those midnight cravings!</p>
                <div className="space-y-2">
                  <div className="bg-purple-50 p-2 rounded">
                    <p className="font-medium text-purple-800">Redi Stalls</p>
                    <p className="text-xs text-gray-600">Quick snacks & beverages</p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded">
                    <p className="font-medium text-purple-800">Campus Eateries</p>
                    <p className="text-xs text-gray-600">ANC, TOTT, Looters</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-green-600" />
                Shopping & Essentials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-800">C'not (C'not)</h4>
                  <p className="text-sm text-gray-600">Your campus convenience store</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Co-op</h4>
                  <p className="text-sm text-gray-600">Books, stationery & essentials</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-brown-600" />
              Popular Campus Eateries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
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
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MessAndFood;
