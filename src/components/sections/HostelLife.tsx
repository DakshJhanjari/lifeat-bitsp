
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Wifi, Users, Video } from "lucide-react";

const HostelLife = () => {
  const boysHostels = [
    "Shankar Bhawan", "Gandhi Bhawan", "Budh Bhawan", "Vyas Bhawan", 
    "Krishna Bhawan", "Ram Bhawan", "Meera Bhawan", "Malviya Bhawan"
  ];

  const girlsHostels = [
    "Saraswati Bhawan", "Laxmi Bhawan", "Ganga Bhawan", "Yamuna Bhawan"
  ];

  return (
    <section id="hostel" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🏠 Hostel Life</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your home away from home! Discover comfortable accommodations and vibrant community living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" />
                Room Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Single/Double occupancy rooms</li>
                <li>• Study table and chair</li>
                <li>• Bed with mattress</li>
                <li>• Wardrobe and storage</li>
                <li>• 24/7 Wi-Fi connectivity</li>
                <li>• Water cooler on each floor</li>
                <li>• Common room with TV</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-purple-600" />
                Virtual Tours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full">
                  <a href="https://youtube.com/watch?v=hostel-tour-1" target="_blank" rel="noopener noreferrer">
                    📹 Boys Hostel Tour
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://youtube.com/watch?v=hostel-tour-2" target="_blank" rel="noopener noreferrer">
                    📹 Girls Hostel Tour
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://youtube.com/watch?v=hostel-tour-3" target="_blank" rel="noopener noreferrer">
                    📹 Common Areas Tour
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="boys" className="w-full">
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              Important Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Hostel Wardens</h4>
                <p className="text-sm text-gray-600">Contact details will be provided during orientation</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Student Union Representatives</h4>
                <p className="text-sm text-gray-600">Your go-to people for hostel-related queries</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HostelLife;
