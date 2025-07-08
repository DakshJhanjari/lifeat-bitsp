import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Wifi, Users, Video, ExternalLink, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HostelLife = () => {
  const boysHostels = ["Vishwakarma Bhawan", "Krishna Bhawan", "Budh Bhawan", "Rana Pratap Bhawan", "SR Bhawan", "Gandhi Bhawan", "Ashok Bhawan", "Ram Bhawan", "Bhagirath Bhawan", "Shankar Bhawan", "Vyas Bhawan"];
  const girlsHostels = ["Meera Bhawan"];

  return (
    <section id="hostel" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🛏️ Hostel Life and Tours</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to your home for the next few years! Hostels at BITS Pilani are more than just places to stay - they're where friendships start, midnight discussions happen, and lifelong memories are made.
          </p>
        </div>

        {/* Quick Links to Sub-pages */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover-scale border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" />
                Hostel Allocation Guide
              </CardTitle>
              <CardDescription>Learn how room allocation works and what to expect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Detailed information about hostel assignment, room sharing, and the allocation process.
              </p>
              <Button asChild className="w-full">
                <Link to="/hostel-allocation">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale border-2 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-green-600" />
                Hostel Facilities
              </CardTitle>
              <CardDescription>Complete overview of amenities and services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to room amenities, common facilities, and services available.
              </p>
              <Button asChild className="w-full">
                <Link to="/hostel-facilities">
                  Explore Facilities <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" />
                Hostel Allocation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li>• First-year students are assigned hostels randomly, usually grouped with fellow freshers</li>
                <li>• Boys and girls have separate hostels</li>
                <li>• Room sharing (double occupancy) is common in the first and second year</li>
                <li>• Single rooms are allotted third year onwards</li>
                <li>• Your room number and hostel details will be shared during registration</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 <strong>Note:</strong> Room allocation is automatic - no need to worry about choosing!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-purple-600" />
                Campus & Hostel Tours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full">
                  <a href="https://youtu.be/bkmKuEguTH8" target="_blank" rel="noopener noreferrer">
                    📹 Campus Tour Video <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.youtube.com/watch?v=OHN-gBhy2hg" target="_blank" rel="noopener noreferrer">
                    📹 SR Bhawan Hostel Tour <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-800">
                    💡 Watch these tours to get familiar with your future home!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5 text-green-600" />
              Facilities Provided
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Room Amenities:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bed, table, chair, cupboard</li>
                  <li>• 24x7 water and electricity (backup available)</li>
                  <li>• Common bathrooms</li>
                  <li>• Wi-Fi access in all hostels</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Common Facilities:</h4>
                <ul className="space-y-2 text-gray-600">
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
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="boys">Boys Hostels</TabsTrigger>
            <TabsTrigger value="girls">Girls Hostels</TabsTrigger>
          </TabsList>
          
          <TabsContent value="boys">
            <Card>
              <CardHeader>
                <CardTitle>Boys Hostels</CardTitle>
                <CardDescription>Choose from these comfortable accommodations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {boysHostels.map((hostel) => (
                    <div key={hostel} className="bg-blue-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-blue-800">{hostel}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="girls">
            <Card>
              <CardHeader>
                <CardTitle>Girls Hostels</CardTitle>
                <CardDescription>Safe and comfortable living spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {girlsHostels.map((hostel) => (
                    <div key={hostel} className="bg-pink-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-pink-800">{hostel}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-indigo-600" />
                Additional Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full">
                  <a href="https://swd.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                    🏢 Student Welfare Division <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://drive.google.com/file/d/1cLDohBn6nDlqhnZRRwpm-x1m-swHYFLS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    📐 Hostel Layouts <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-red-600" />
                Important Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">🛠️ Hostel Warden</h4>
                  <p className="text-sm text-gray-600">For admin/maintenance issues</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">👥 SU Representative</h4>
                  <p className="text-sm text-gray-600">For Wi-Fi, hostel issues, or escalation</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">🔧 Maintenance Staff</h4>
                  <p className="text-sm text-gray-600">Available during daytime</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-800">🚫 Important Rules & Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Freedom & Flexibility:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• No hostel in-time or curfew for students</li>
                  <li>• You won't be allowed to leave campus after 9 PM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Strict Prohibitions:</h4>
                <ul className="space-y-2 text-gray-600">
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
