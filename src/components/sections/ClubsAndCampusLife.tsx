
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Music, Code, Star, ExternalLink } from "lucide-react";

const ClubsAndCampusLife = () => {
  return (
    <section id="clubs" className="py-16 px-4 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🎭 Clubs & Campus Life</h2>
          <p className="text-xl text-purple-600 font-semibold mb-4">
            📣 BITS isn't just where you study — it's where you <em>build yourself</em>.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From dance battles to coding hackathons, policymaking to photography — student-run clubs and departments are the soul of BITS Pilani's vibrant culture. These are more than just extracurriculars.
          </p>
        </div>

        <Card className="mb-12 bg-gradient-to-r from-purple-100 to-pink-100 border-none">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-purple-800">💼 Why Should You Join a Club?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">🎯 Skill Building</h4>
                <p className="text-sm text-gray-600">Organize events, manage budgets, lead teams — learn by doing</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">🤝 Networking</h4>
                <p className="text-sm text-gray-600">Collaborate with alumni, faculty, and professionals from top industries</p>
              </div>
              <div className="text-center">
                <Trophy className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">🧠 Growth</h4>
                <p className="text-sm text-gray-600">Interdisciplinary growth - CS major learning theatre, physics student in finance</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-pink-500 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">❤️ Belonging</h4>
                <p className="text-sm text-gray-600">Community, purpose, and lifelong friendships</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-indigo-600" />
              🧩 Types of Clubs at BITS Pilani
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">Technical Clubs</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Robotics Club</li>
                  <li>• Wall Street Club</li>
                  <li>• DVM</li>
                </ul>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-bold text-pink-800 mb-2">Cultural Clubs</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Music Club</li>
                  <li>• Dance Club</li>
                  <li>• Dramatics Club</li>
                  <li>• Photography Club</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Public Policy & Debate</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Debating Society</li>
                  <li>• PPC</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-2">Social Impact</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• NSS</li>
                  <li>• Nirmaan</li>
                  <li>• PARC</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-2">Fest Organizing Teams</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Oasis (Cultural)</li>
                  <li>• BOSM (Sports)</li>
                  <li>• APOGEE (Tech)</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-bold text-indigo-800 mb-2">Special Interest</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• BITS Embryo</li>
                  <li>• TEDxBITS</li>
                  <li>• 180 Degrees Consulting</li>
                </ul>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg text-center">
                <Button asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 w-full">
                  <a href="https://www.notion.so/List-of-Clubs-and-Departments-20b2911fe3e680f1bd3dec7634d771ed" target="_blank" rel="noopener noreferrer">
                    📋 Complete Club Directory <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <Card className="bg-gradient-to-br from-red-100 to-pink-100 border-none hover-scale">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-red-800">🎭 Oasis</CardTitle>
              <CardDescription>Cultural Festival</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                Four days of music, dance, drama, and cultural extravaganza that brings the campus alive!
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="https://www.instagram.com/bitsoasis" target="_blank" rel="noopener noreferrer">
                  Follow @bitsoasis <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-none hover-scale">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-green-800">⚽ BOSM</CardTitle>
              <CardDescription>Sports Festival</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                Inter-college sports competition showcasing athletic excellence and sportsmanship spirit.
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="https://instagram.com/bosm_bits" target="_blank" rel="noopener noreferrer">
                  Follow @bosm_bits <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 border-none hover-scale">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-blue-800">🚀 Apogee</CardTitle>
              <CardDescription>Technical Festival</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                Innovation meets technology! Competitions, workshops, and exhibitions for tech enthusiasts.
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="https://www.instagram.com/bitsapogee" target="_blank" rel="noopener noreferrer">
                  Follow @bitsapogee <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClubsAndCampusLife;
