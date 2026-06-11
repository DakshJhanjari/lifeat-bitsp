import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, AlertCircle, CheckCircle } from "lucide-react";

const TimetableRegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">📅 Timetable Registration</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Master the art of creating your perfect timetable at BITS Pilani
            </p>
          </div>

          <Card className="hover-scale mb-8 bg-gradient-to-r from-amber-950/25 to-orange-950/25 border border-orange-900/40 text-foreground backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <AlertCircle className="h-5 w-5 text-amber-400" />
                Important Notice for First Years
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-950/20 border border-amber-900/30 p-4 rounded-lg">
                <p className="text-amber-300 font-medium flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  💡 For the first year, you'll only have CDC (Core Disciplinary Courses), so don't worry about electives for now!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  How Registration Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-blue-950/20 border border-blue-900/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <h4 className="font-medium text-blue-300">Browse & Plan</h4>
                      </div>
                      <p className="text-sm text-slate-400">Log into ERP and browse available courses for your semester</p>
                    </div>
                    <div className="bg-blue-950/20 border border-blue-900/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <h4 className="font-medium text-blue-300">Choose Slots</h4>
                      </div>
                      <p className="text-sm text-slate-400">Select lecture, tutorial, and lab slots for each subject</p>
                    </div>
                    <div className="bg-blue-950/20 border border-blue-900/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <h4 className="font-medium text-blue-300">Avoid Clashes</h4>
                      </div>
                      <p className="text-sm text-slate-400">Ensure no time conflicts between different courses</p>
                    </div>
                    <div className="bg-blue-950/20 border border-blue-900/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                        <h4 className="font-medium text-blue-300">Submit & Download</h4>
                      </div>
                      <p className="text-sm text-slate-400">Submit your timetable and download it as PDF</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  Time Slot System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    BITS uses a unique slot-based system where each course has multiple components:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-emerald-300 mb-1">📚 Lecture Slots</h4>
                      <p className="text-sm text-slate-400">Theory classes with professors</p>
                    </div>
                    <div className="bg-amber-950/20 border border-amber-900/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-amber-300 mb-1">📝 Tutorial Slots</h4>
                      <p className="text-sm text-slate-400">Problem-solving sessions with TAs</p>
                    </div>
                    <div className="bg-purple-950/20 border border-purple-900/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-purple-300 mb-1">🔬 Practical Slots</h4>
                      <p className="text-sm text-slate-400">Lab sessions for hands-on learning</p>
                    </div>
                  </div>
                  <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-lg">
                    <p className="text-sm text-red-300">
                      <strong>Important:</strong> You must register for ALL components of a course (L+T+P)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover-scale mb-8 bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                Pro Tips for Successful Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-300 mb-3">🎯 Planning Strategy:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Create 3-4 different timetable combinations</li>
                    <li>• Priority-wise arrangement of courses</li>
                    <li>• Consider professor ratings and reviews</li>
                    <li>• Balance easy and difficult courses</li>
                    <li>• Factor in travel time between classes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-3">⚡ Registration Day Tips:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Log in 15 minutes before registration opens</li>
                    <li>• Have your combinations ready beforehand</li>
                    <li>• Register quickly - popular slots fill fast</li>
                    <li>• Keep refreshing if system is slow</li>
                    <li>• Have backup options ready</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <AlertCircle className="h-5 w-5 text-red-400" />
                Common Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-red-300 mb-2">❌ Time Clashes</h4>
                  <p className="text-sm text-slate-400">Always check for overlapping slots before submitting</p>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-red-300 mb-2">❌ Missing Components</h4>
                  <p className="text-sm text-slate-400">Don't forget to register for all L+T+P components</p>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-red-300 mb-2">❌ Last-minute Rush</h4>
                  <p className="text-sm text-slate-400">Plan your combinations well in advance</p>
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

export default TimetableRegistrationPage;
