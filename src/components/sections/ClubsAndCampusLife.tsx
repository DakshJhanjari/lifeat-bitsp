
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Music, Code, Star } from "lucide-react";

const ClubsAndCampusLife = () => {
  return (
    <section id="clubs" className="py-16 px-4 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🎭 Clubs & Campus Life</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your passion, build your skills, and create lifelong memories! Join the vibrant community of BITS.
          </p>
        </div>

        <Card className="mb-12 bg-gradient-to-r from-purple-100 to-pink-100 border-none">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-purple-800">Why Join Clubs?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">Skill Development</h4>
                <p className="text-sm text-gray-600">Learn beyond academics with hands-on experience</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">Network Building</h4>
                <p className="text-sm text-gray-600">Connect with like-minded peers and seniors</p>
              </div>
              <div className="text-center">
                <Trophy className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">Sense of Belonging</h4>
                <p className="text-sm text-gray-600">Find your tribe and make BITS feel like home</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover-scale bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardHeader className="text-center">
              <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Technical Clubs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Coding & Development</li>
                <li>• Robotics & AI</li>
                <li>• Electronics & Hardware</li>
                <li>• Research Groups</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-gradient-to-br from-pink-50 to-rose-50">
            <CardHeader className="text-center">
              <Music className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Cultural Clubs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Music & Dance</li>
                <li>• Drama & Theatre</li>
                <li>• Fine Arts</li>
                <li>• Photography</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Literary & Debate</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Debating Society</li>
                <li>• Creative Writing</li>
                <li>• Quiz Club</li>
                <li>• Model UN</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-gradient-to-br from-orange-50 to-amber-50">
            <CardHeader className="text-center">
              <Trophy className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Fest Teams</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Oasis (Cultural)</li>
                <li>• BOSM (Sports)</li>
                <li>• Apogee (Technical)</li>
                <li>• Department Fests</li>
              </ul>
            </CardContent>
          </Card>
        </div>

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
                <a href="https://instagram.com/oasis_bits" target="_blank" rel="noopener noreferrer">
                  Follow @oasis_bits
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
                  Follow @bosm_bits
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
                <a href="https://instagram.com/apogee_bits" target="_blank" rel="noopener noreferrer">
                  Follow @apogee_bits
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-indigo-100 to-purple-100 border-none">
          <CardHeader className="text-center">
            <CardTitle>Explore All Clubs</CardTitle>
            <CardDescription>Discover the complete list of clubs and societies</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              <a href="https://notion.so/clubs-list" target="_blank" rel="noopener noreferrer">
                📋 Complete Club Directory
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClubsAndCampusLife;
