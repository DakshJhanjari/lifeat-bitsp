import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Wifi, Users, Video, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HostelLife = () => {
  const boysHostels = [
    "Vishwakarma Bhawan", 
    "Krishna Bhawan", 
    "Budh Bhawan", 
    "Rana Pratap Bhawan", 
    "Gandhi Bhawan", 
    "Ashok Bhawan", 
    "Ram Bhawan", 
    "Bhagirath Bhawan", 
    "Shankar Bhawan", 
    "Vyas Bhawan",
    "Malviya Bhawan",
    "Srinivasa Ramanujan Bhawan (SR)"
  ];
  const girlsHostels = ["Meera Bhawan"];

  return (
    <section id="hostel" className="py-16 px-4 bg-transparent text-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">🛏️ Hostel Life and Tours</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Welcome to your home for the next few years! Hostels at BITS Pilani are more than just places to stay - they're where friendships start, midnight discussions happen, and lifelong memories are made.
          </p>
        </div>

        {/* Quick Links to Sub-pages */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Home className="h-5 w-5 text-blue-400" />
                Hostel Allocation Guide
              </CardTitle>
              <CardDescription className="text-slate-400">Learn how room allocation works and what to expect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 mb-4">
                Detailed information about hostel assignment, room sharing, and the allocation process.
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-500">
                <Link to="/hostel-allocation">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Wifi className="h-5 w-5 text-emerald-400" />
                Hostel Facilities
              </CardTitle>
              <CardDescription className="text-slate-400">Complete overview of amenities and services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 mb-4">
                Comprehensive guide to room amenities, common facilities, and services available.
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-500">
                <Link to="/hostel-facilities">
                  Explore Facilities <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Home className="h-5 w-5 text-blue-400" />
                Hostel Allocation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-300">
                <li>• First-year students are assigned hostels randomly, usually grouped with fellow freshers</li>
                <li>• Boys and girls have separate hostels</li>
                <li>• Room sharing (double occupancy) is common in the first and second year</li>
                <li>• Single rooms are allotted third year onwards</li>
                <li>• Your room number and hostel details will be shared during registration</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-950/20 border border-blue-900/30 text-blue-200 rounded-lg">
                <p className="text-sm text-blue-300">
                  💡 <strong>Note:</strong> Room allocation is automatic - no need to worry about choosing!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Video className="h-5 w-5 text-purple-400" />
                Campus & Hostel Tours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
                  <a href="https://youtu.be/bkmKuEguTH8" target="_blank" rel="noopener noreferrer">
                    📹 Campus Tour Video <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>

                <div className="mt-4 p-3 bg-purple-950/20 border border-purple-900/30 text-purple-200 rounded-lg">
                  <p className="text-sm text-purple-300">
                    💡 Watch these tours to get familiar with your future home!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Home className="h-5 w-5 text-emerald-400" />
              Facilities Provided
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-300 mb-3">Room Amenities:</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Bed, table, chair, cupboard</li>
                  <li>• 24x7 water and electricity (backup available)</li>
                  <li>• Common bathrooms</li>
                  <li>• Wi-Fi access in all hostels</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-300 mb-3">Common Facilities:</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Water coolers and purifiers on every floor</li>
                  <li>• Common rooms with TVs</li>
                  <li>• Table tennis facilities</li>
                  <li>• Indoor games and magazines</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="boys" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 bg-slate-900/80 border border-slate-800 p-1 rounded-xl">
            <TabsTrigger value="boys" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-white">Boys Hostels</TabsTrigger>
            <TabsTrigger value="girls" className="rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-white">Girls Hostels</TabsTrigger>
          </TabsList>
          
          <TabsContent value="boys">
            <Card className="bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Boys Hostels</CardTitle>
                <CardDescription className="text-slate-400">Choose from these comfortable accommodations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {boysHostels.map((hostel) => (
                    <div key={hostel} className="bg-blue-950/20 border border-blue-900/30 p-3 rounded-lg text-center">
                      <p className="font-medium text-blue-300">{hostel}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="girls">
            <Card className="bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Girls Hostels</CardTitle>
                <CardDescription className="text-slate-400">Safe and comfortable living spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {girlsHostels.map((hostel) => (
                    <div key={hostel} className="bg-pink-950/20 border border-pink-900/30 p-3 rounded-lg text-center">
                      <p className="font-medium text-pink-300">{hostel}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <ExternalLink className="h-5 w-5 text-indigo-400" />
                Additional Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
                  <a href="https://swd.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                    🏢 Student Welfare Division <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
                  <a href="https://drive.google.com/file/d/1cLDohBn6nDlqhnZRRwpm-x1m-swHYFLS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    📐 Hostel Layouts <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-red-400" />
                Important Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-300 mb-2">🛠️ Hostel Warden</h4>
                  <p className="text-sm text-slate-400">For admin/maintenance issues</p>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-300 mb-2">👥 SU Representative</h4>
                  <p className="text-sm text-slate-400">For Wi-Fi, hostel issues, or escalation</p>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-300 mb-2">🔧 Maintenance Staff</h4>
                  <p className="text-sm text-slate-400">Available during daytime</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-amber-950/25 to-orange-950/25 border border-orange-900/40 text-foreground backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-amber-300">🚫 Important Rules & Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-amber-300 mb-3">Freedom & Flexibility:</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• No hostel in-time or curfew for students</li>
                  <li>• You won't be allowed to leave campus after 9 PM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-300 mb-3">Strict Prohibitions:</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Smoking, alcohol, and substance use strictly prohibited</li>
                  <li>• Maintain discipline and respect for others</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HostelLife;
