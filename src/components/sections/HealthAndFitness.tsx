
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Dumbbell, Activity, Users } from "lucide-react";

const HealthAndFitness = () => {
  return (
    <section id="health" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">💪 Health & Fitness</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay healthy, stay active! Comprehensive healthcare and fitness facilities for your well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                Medical Centre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">24/7 Healthcare</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Emergency medical care</li>
                    <li>• General consultation</li>
                    <li>• Basic diagnostic facilities</li>
                    <li>• Pharmacy on campus</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Mental Health Support</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Counseling services</li>
                    <li>• Stress management workshops</li>
                    <li>• Peer support groups</li>
                    <li>• Confidential consultations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-green-600" />
                Fitness Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">SAC (Student Activity Centre)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-purpose sports hall</li>
                    <li>• Indoor badminton courts</li>
                    <li>• Table tennis facilities</li>
                    <li>• Squash courts</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">GymG (Gymnasium)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Modern equipment</li>
                    <li>• Cardio machines</li>
                    <li>• Weight training</li>
                    <li>• Professional trainers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Outdoor Sports Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-green-800 mb-2">Cricket Ground</h4>
                <p className="text-sm text-gray-600">Full-size cricket field with pavilion</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-blue-800 mb-2">Football Field</h4>
                <p className="text-sm text-gray-600">FIFA standard football ground</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-orange-800 mb-2">Basketball Courts</h4>
                <p className="text-sm text-gray-600">Multiple outdoor courts</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-purple-800 mb-2">Tennis Courts</h4>
                <p className="text-sm text-gray-600">Professional tennis facilities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-cyan-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-cyan-600" />
              How to Get Started
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-cyan-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Join Sports Teams</h4>
                  <p className="text-sm text-gray-600">Participate in trials and inter-hostel competitions</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Use Facilities</h4>
                  <p className="text-sm text-gray-600">Get membership for gym and sports equipment</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Stay Active</h4>
                  <p className="text-sm text-gray-600">Regular exercise for physical and mental well-being</p>
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
