import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Dumbbell, Activity, Users, MapPin } from "lucide-react";

const HealthAndFitness = () => {
  return (
    <section id="health" className="py-16 px-4 bg-transparent text-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">🏥 Health & 🏃‍♂️ Sports Facilities</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Stay healthy, stay active! Comprehensive healthcare and fitness facilities for your well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Heart className="h-5 w-5 text-rose-500" />
                🏥 Medical and Health Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-300 mb-2">BITS Medical Centre (BMC)</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Open 24×7 for emergencies</li>
                    <li>• Staffed with doctors, nurses, and specialists</li>
                    <li>• Basic diagnostics, medications, minor procedures</li>
                    <li>• Equipped for dressing and first aid</li>
                  </ul>
                </div>
                <div className="bg-blue-950/20 border border-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">Additional Services</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Ambulance services for off-campus referrals</li>
                    <li>• Mental health support through Student Welfare Division</li>
                    <li>• Certified counselors available</li>
                    <li>• Health insurance included in registration</li>
                  </ul>
                </div>
                <div className="bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-lg flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <p className="text-sm text-emerald-300"><strong>Location:</strong> Near the C'not</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Dumbbell className="h-5 w-5 text-emerald-400" />
                🏅 Sports and Fitness Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-300 mb-2">🏟️ Student Activity Centre (SAC)</h4>
                  <p className="text-sm text-slate-400 mb-2">Central hub for indoor sports and fitness</p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Badminton courts</li>
                    <li>• Table tennis rooms</li>
                    <li>• Carrom & chess rooms</li>
                    <li>• Multi-purpose gymnasium with cardio and weights</li>
                    <li>• Yoga and dance spaces</li>
                  </ul>
                </div>
                <div className="bg-purple-950/20 border border-purple-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-300 mb-2">🏃‍♂️ Outdoor Sports Grounds (GYMG)</h4>
                  <p className="text-sm text-slate-400">Extensive outdoor facilities for all sports</p>
                </div>
                <p className="text-xs text-slate-500">🕒 Open from early morning to late evening; timings vary per semester</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Activity className="h-5 w-5 text-blue-400" />
              🏟️ Outdoor Sports Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-emerald-950/35 to-emerald-900/20 border border-emerald-900/30 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-emerald-300 mb-2">🏏 Cricket Ground</h4>
                <p className="text-sm text-slate-400">Full-sized pitch with nets and pavilion</p>
              </div>
              <div className="bg-gradient-to-br from-blue-950/35 to-blue-900/20 border border-blue-900/30 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-blue-300 mb-2">⚽ Football Ground</h4>
                <p className="text-sm text-slate-400">Often used for BOSM and practice matches</p>
              </div>
              <div className="bg-gradient-to-br from-purple-950/35 to-purple-900/20 border border-purple-900/30 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-purple-300 mb-2">🏃‍♂️ Athletics Track</h4>
                <p className="text-sm text-slate-400">Surrounds the main ground</p>
              </div>
              <div className="bg-gradient-to-br from-amber-950/35 to-amber-900/20 border border-amber-900/30 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-amber-300 mb-2">🎾 Tennis Courts</h4>
                <p className="text-sm text-slate-400">Hard court surface, lighting for night play</p>
              </div>
              <div className="bg-gradient-to-br from-red-950/35 to-red-900/20 border border-red-900/30 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-red-300 mb-2">🏀 Basketball Courts</h4>
                <p className="text-sm text-slate-400">Outdoor, floodlit for evening games</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-950/35 to-indigo-900/20 border border-indigo-900/30 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-indigo-300 mb-2">🏐 Volleyball Courts</h4>
                <p className="text-sm text-slate-400">Open courts near hostels</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Users className="h-5 w-5 text-cyan-400" />
              🧘 Fitness for Everyone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-950/20 border border-cyan-900/30 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-300 mb-2">Open Gym Zones</h4>
                <p className="text-sm text-slate-400">Available in GymG grounds for outdoor workouts</p>
              </div>
              <div className="bg-cyan-950/20 border border-cyan-900/30 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-300 mb-2">Student-Run Teams</h4>
                <p className="text-sm text-slate-400">All teams participate in intercollegiate events like BOSM and InterBits</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-amber-950/25 to-orange-950/25 border border-orange-900/40 text-foreground backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-amber-300">🏅 Want to Represent BITS in Sports?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-orange-950/40 border border-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-400 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Watch for Trials</h4>
                  <p className="text-sm text-slate-400">Team trials happen during your first few weeks</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-950/40 border border-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-emerald-400 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Join Club Announcements</h4>
                  <p className="text-sm text-slate-400">Follow sports club announcements for opportunities</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-950/40 border border-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-400 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Stay Active</h4>
                  <p className="text-sm text-slate-400">Regular practice and fitness for competitive sports</p>
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
