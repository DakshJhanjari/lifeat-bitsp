import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Droplets, Zap, Users, ShoppingBag } from "lucide-react";

const HostelFacilitiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">🏢 Hostel Facilities</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive facilities provided in every hostel at BITS Pilani
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Zap className="h-5 w-5 text-amber-400" />
                  Room Amenities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li>• Bed, table, chair, and cupboard for each student</li>
                  <li>• 24x7 water supply with backup systems</li>
                  <li>• Uninterrupted electricity with backup generators</li>
                  <li>• Common bathrooms with hot water facilities</li>
                  <li>• Adequate lighting and ventilation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Wifi className="h-5 w-5 text-blue-400" />
                  Connectivity & Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li>• High-speed Wi-Fi access in all hostels</li>
                  <li>• Ethernet ports in most rooms</li>
                  <li>• Computer centers with internet access</li>
                  <li>• TV rooms with cable connections</li>
                  <li>• Telephone facilities for emergencies</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="hover-scale mb-8 bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-emerald-400" />
                Common Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-emerald-950/40 border border-emerald-900/50 p-4 rounded-lg mb-3">
                    <Droplets className="h-8 w-8 text-emerald-400 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-emerald-300 mb-2">Water & Hygiene</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Water coolers on every floor</li>
                    <li>• Water purifiers with RO systems</li>
                    <li>• Regular cleaning services</li>
                    <li>• Waste management systems</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-blue-950/40 border border-blue-900/50 p-4 rounded-lg mb-3">
                    <Users className="h-8 w-8 text-blue-400 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-blue-300 mb-2">Recreation</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Common rooms with TVs</li>
                    <li>• Table tennis facilities</li>
                    <li>• Indoor games equipment</li>
                    <li>• Reading rooms and study areas</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-purple-950/40 border border-purple-900/50 p-4 rounded-lg mb-3">
                    <Zap className="h-8 w-8 text-purple-400 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-purple-300 mb-2">Services</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Laundry facilities</li>
                    <li>• Medical first aid</li>
                    <li>• Security systems</li>
                    <li>• Maintenance support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale mb-8 bg-gradient-to-r from-blue-950/20 to-indigo-950/20 border border-blue-900/40 text-foreground backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <ShoppingBag className="h-5 w-5 text-indigo-400" />
                🧳 Packing Guide & Things to Bring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-slate-300">
                <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                  <h4 className="font-semibold text-indigo-300 mb-3">🔌 Electronics & Utilities:</h4>
                  <ul className="text-sm text-slate-400 space-y-2">
                    <li>• <strong>Extension Board / Power Strip:</strong> Highly critical as rooms only have 2 sockets!</li>
                    <li>• Laptop, chargers, and academic accessories</li>
                    <li>• LAN Cable (Ethernet ports are available in rooms)</li>
                    <li>• LED table lamp for late-night study sessions</li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                  <h4 className="font-semibold text-indigo-300 mb-3">🛏️ Bedding & Everyday Essentials:</h4>
                  <ul className="text-sm text-slate-400 space-y-2">
                    <li>• Mattress, bedsheets, pillows (can also buy at Co-op / C'not)</li>
                    <li>• Bucket, mug, and toiletries (available on campus)</li>
                    <li>• Laundry bag, hangers, and clothes clips</li>
                    <li>• Warm clothes (Pilani winters get quite cold!)</li>
                    <li>• Umbrella or raincoat (for monsoon season)</li>
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
