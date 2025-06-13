
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Dumbbell, Activity, Users, MapPin, Phone } from "lucide-react";

const HealthAndFitness = () => {
  return (
    <section id="health" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🏥 Health & 🏃‍♂️ Sports Facilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay healthy, stay active! Comprehensive healthcare and fitness facilities for your well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                🏥 Medical and Health Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">BITS Medical Centre (BMC)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Open 24×7 for emergencies</li>
                    <li>• Staffed with doctors, nurses, and specialists</li>
                    <li>• Basic diagnostics, medications, minor procedures</li>
                    <li>• Equipped for dressing and first aid</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Additional Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ambulance services for off-campus referrals</li>
                    <li>• Mental health support through Student Welfare Division</li>
                    <li>• Certified counselors available</li>
                    <li>• Health insurance included in registration</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <p className="text-sm text-green-800"><strong>Location:</strong> Near the C'not</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-green-600" />
                🏅 Sports and Fitness Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🏟️ Student Activity Centre (SAC)</h4>
                  <p className="text-sm text-gray-600 mb-2">Central hub for indoor sports and fitness</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Badminton courts</li>
                    <li>• Table tennis rooms</li>
                    <li>• Carrom & chess rooms</li>
                    <li>• Multi-purpose gymnasium with cardio and weights</li>
                    <li>• Yoga and dance spaces</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🏃‍♂️ Outdoor Sports Grounds (GYMG)</h4>
                  <p className="text-sm text-gray-600">Extensive outdoor facilities for all sports</p>
                </div>
                <p className="text-xs text-gray-500">🕒 Open from early morning to late evening; timings vary per semester</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              🏟️ Outdoor Sports Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-green-800 mb-2">🏏 Cricket Ground</h4>
                <p className="text-sm text-gray-600">Full-sized pitch with nets and pavilion</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-blue-800 mb-2">⚽ Football Ground</h4>
                <p className="text-sm text-gray-600">Often used for BOSM and practice matches</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-purple-800 mb-2">🏃‍♂️ Athletics Track</h4>
                <p className="text-sm text-gray-600">Surrounds the main ground</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-orange-800 mb-2">🎾 Tennis Courts</h4>
                <p className="text-sm text-gray-600">Hard court surface, lighting for night play</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-red-800 mb-2">🏀 Basketball Courts</h4>
                <p className="text-sm text-gray-600">Outdoor, floodlit for evening games</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-indigo-800 mb-2">🏐 Volleyball Courts</h4>
                <p className="text-sm text-gray-600">Open courts near hostels</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-cyan-600" />
              🧘 Fitness for Everyone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">Open Gym Zones</h4>
                <p className="text-sm text-gray-600">Available in GymG grounds for outdoor workouts</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">Student-Run Teams</h4>
                <p className="text-sm text-gray-600">All teams participate in intercollegiate events like BOSM and InterBits</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-800">🏅 Want to Represent BITS in Sports?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Watch for Trials</h4>
                  <p className="text-sm text-gray-600">Team trials happen during your first few weeks</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Join Club Announcements</h4>
                  <p className="text-sm text-gray-600">Follow sports club announcements for opportunities</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Stay Active</h4>
                  <p className="text-sm text-gray-600">Regular practice and fitness for competitive sports</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HealthAndFitness;
