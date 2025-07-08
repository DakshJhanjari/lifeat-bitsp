
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Droplets, Zap, Users } from "lucide-react";

const HostelFacilitiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">🏢 Hostel Facilities</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive facilities provided in every hostel at BITS Pilani
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  Room Amenities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• Bed, table, chair, and cupboard for each student</li>
                  <li>• 24x7 water supply with backup systems</li>
                  <li>• Uninterrupted electricity with backup generators</li>
                  <li>• Common bathrooms with hot water facilities</li>
                  <li>• Adequate lighting and ventilation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-blue-600" />
                  Connectivity & Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• High-speed Wi-Fi access in all hostels</li>
                  <li>• Ethernet ports in most rooms</li>
                  <li>• Computer centers with internet access</li>
                  <li>• TV rooms with cable connections</li>
                  <li>• Telephone facilities for emergencies</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="hover-scale mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                Common Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg mb-3">
                    <Droplets className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-green-800 mb-2">Water & Hygiene</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Water coolers on every floor</li>
                    <li>• Water purifiers with RO systems</li>
                    <li>• Regular cleaning services</li>
                    <li>• Waste management systems</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-lg mb-3">
                    <Users className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Recreation</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Common rooms with TVs</li>
                    <li>• Table tennis facilities</li>
                    <li>• Indoor games equipment</li>
                    <li>• Reading rooms and study areas</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-4 rounded-lg mb-3">
                    <Zap className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Laundry facilities</li>
                    <li>• Medical first aid</li>
                    <li>• Security systems</li>
                    <li>• Maintenance support</li>
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

export default HostelFacilitiesPage;
