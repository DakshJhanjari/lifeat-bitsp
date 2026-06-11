import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, GraduationCap, Users, ExternalLink, AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AcademicOrientation = () => {
  return (
    <section id="academic" className="py-16 px-4 bg-transparent text-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">📚 Academic Orientation</h2>
          <p className="text-xl text-blue-400 font-semibold mb-4">
            🎉 Yes, you read that right — at BITS Pilani, you create your <em>own</em> timetable!
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            At BITS, there's no fixed class section—you customize your academic schedule by picking your preferred courses, timings, and even professors. This freedom can be exciting but also a little intimidating at first.
          </p>
        </div>

        {/* Quick Links to Sub-pages */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover-scale border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <GraduationCap className="h-5 w-5 text-blue-400" />
                ERP Portal Guide
              </CardTitle>
              <CardDescription className="text-slate-400">Master your academic control center</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 mb-4">
                Complete guide to navigating the ERP system for course registration, grades, and more.
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-500">
                <Link to="/erp-guide">
                  Learn ERP <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Calendar className="h-5 w-5 text-emerald-400" />
                Timetable Registration
              </CardTitle>
              <CardDescription className="text-slate-400">Step-by-step registration process</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 mb-4">
                Detailed walkthrough of creating your perfect timetable and avoiding common mistakes.
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-500">
                <Link to="/timetable-registration">
                  Registration Guide <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-blue-950/20 to-purple-950/20 border border-blue-900/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <GraduationCap className="h-5 w-5 text-blue-400" />
              🖥️ ERP – Your Academic Control Center
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-300 mb-4">
                  The <strong>ERP Portal</strong> is where your academic journey begins—get familiar with it early!
                </p>
                <div>
                  <h4 className="font-medium mb-2 text-white">What you can do:</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• View course offerings and time slots</li>
                    <li>• Register for subjects</li>
                    <li>• Track attendance and grades</li>
                    <li>• Pay fees</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white">
                  <a href="http://erp.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                    🚀 Access ERP Portal <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-slate-900/40 border border-slate-800 backdrop-blur-sm text-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <BookOpen className="h-5 w-5 text-purple-400" />
              📊 Portals You'll Use Frequently
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-950/20 border border-blue-900/30 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-300 mb-2">ERP</h4>
                <p className="text-sm text-slate-400 mb-3">Registration, grades, attendance and fee payment</p>
                <Button asChild variant="outline" size="sm" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
                  <a href="http://erp.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                    Visit ERP <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
              <div className="bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-lg text-center">
                <h4 className="font-bold text-emerald-300 mb-2">Nalanda LMS</h4>
                <p className="text-sm text-slate-400 mb-3">Notes, assignments, online quizzes</p>
                <Button asChild variant="outline" size="sm" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
                  <a href="https://nalanda.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                    Visit LMS <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
              <div className="bg-purple-950/20 border border-purple-900/30 p-4 rounded-lg text-center">
                <h4 className="font-bold text-purple-300 mb-2">AUGSD</h4>
                <p className="text-sm text-slate-400 mb-3">Academic handouts, applying for leaves</p>
                <Button asChild variant="outline" size="sm" className="w-full text-slate-300 border-slate-800 hover:bg-slate-900/60 hover:text-white">
                  <a href="https://academic.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                    Visit AUGSD <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-slate-900/40 border border-slate-800 backdrop-blur-sm text-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Calendar className="h-5 w-5 text-amber-400" />
              🧭 Course Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 p-4 bg-amber-950/20 border border-amber-900/40 rounded-lg">
              <p className="text-amber-300 font-medium flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                💡 For the first year you'll only have CDC so don't worry about the electives as of now.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-950/35 to-blue-900/20 border border-blue-900/30 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-300 mb-2">CDC</h4>
                <p className="text-sm text-slate-300">Core Disciplinary Courses</p>
                <p className="text-xs text-slate-400 mt-2">Mandatory courses for your branch</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-950/35 to-emerald-900/20 border border-emerald-900/30 p-4 rounded-lg text-center">
                <h4 className="font-bold text-emerald-300 mb-2">DEL</h4>
                <p className="text-sm text-slate-300">Discipline Electives</p>
                <p className="text-xs text-slate-400 mt-2">Optional courses within your branch</p>
              </div>
              <div className="bg-gradient-to-br from-purple-950/35 to-purple-900/20 border border-purple-900/30 p-4 rounded-lg text-center">
                <h4 className="font-bold text-purple-300 mb-2">OPEL</h4>
                <p className="text-sm text-slate-300">Open Electives</p>
                <p className="text-xs text-slate-400 mt-2">From any department—explore beyond your field!</p>
              </div>
              <div className="bg-gradient-to-br from-amber-950/35 to-amber-900/20 border border-amber-900/30 p-4 rounded-lg text-center">
                <h4 className="font-bold text-amber-300 mb-2">HEL</h4>
                <p className="text-sm text-slate-300">Humanities Electives</p>
                <p className="text-xs text-slate-400 mt-2">Psychology, economics, sociology, etc.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-slate-900/40 border border-slate-800 backdrop-blur-sm text-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Calendar className="h-5 w-5 text-indigo-400" />
              🗓️ How Timetable Registration Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="space-y-3">
                  <div className="bg-indigo-950/20 border border-indigo-900/30 p-3 rounded-lg">
                    <p className="font-medium text-indigo-300">1. Browse & Plan</p>
                    <p className="text-sm text-slate-400">Log into ERP and browse available courses</p>
                  </div>
                  <div className="bg-indigo-950/20 border border-indigo-900/30 p-3 rounded-lg">
                    <p className="font-medium text-indigo-300">2. Choose Slots</p>
                    <p className="text-sm text-slate-400">Choose lecture + tutorial + lab slots for each subject</p>
                  </div>
                  <div className="bg-indigo-950/20 border border-indigo-900/30 p-3 rounded-lg">
                    <p className="font-medium text-indigo-300">3. Avoid Clashes</p>
                    <p className="text-sm text-slate-400">Plan multiple backup combinations</p>
                  </div>
                  <div className="bg-indigo-950/20 border border-indigo-900/30 p-3 rounded-lg">
                    <p className="font-medium text-indigo-300">4. Submit</p>
                    <p className="text-sm text-slate-400">Submit your timetable and download it as PDF</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-950/20 to-orange-950/25 border border-amber-900/40 p-6 rounded-xl">
                <h4 className="font-bold text-amber-300 text-lg mb-2">💡 Pro Tips</h4>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Use slot maps or tools like Study Deck to help plan</li>
                  <li>• A detailed guide will be shared - don't worry!</li>
                  <li>• Plan your timetable early and have backups</li>
                  <li>• Join batch groups for live support during registration</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <BookOpen className="h-5 w-5 text-emerald-400" />
                📘 AUGSD: Your Academic Support Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">
                <strong>AUGSD</strong> (Academic Undergraduate Studies Division) oversees:
              </p>
              <ul className="text-sm text-slate-400 space-y-2 mb-4">
                <li>• Curriculum structure and degree planning</li>
                <li>• Academic queries, branch changes, overload approvals</li>
                <li>• CGPA calculations and academic notices</li>
                <li>• Guidance on double degrees, dual minors, and PS</li>
              </ul>
              <div className="bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-lg">
                <p className="text-sm text-emerald-300">
                  <strong>📌 Pro Tip:</strong> Bookmark the AUGSD page on the ERP dashboard for official academic circulars!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-red-400" />
                🧠 Need Help? You've Got Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-300 mb-1">Academic Advisors</h4>
                  <p className="text-sm text-slate-400">Assigned to you for academic guidance</p>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-300 mb-1">TAs (Teaching Assistants)</h4>
                  <p className="text-sm text-slate-400">Senior students who clarify course content</p>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-300 mb-1">Study Groups</h4>
                  <p className="text-sm text-slate-400">Collaborative learning with peers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-cyan-950/25 to-blue-950/20 border border-cyan-900/40 text-foreground backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-cyan-300">📕 Books and Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-2 text-slate-400">
                  <li>• Suggested reading lists will be given on handout</li>
                  <li>• Buy/sell books through senior batches or online groups</li>
                  <li>• LMS is your main portal for class materials</li>
                </ul>
              </div>
              <div className="bg-amber-950/25 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-amber-300 font-medium">💡 Money-Saving Tip:</p>
                <p className="text-sm text-slate-300 mt-1">
                  When buying books from seniors, they may charge more initially - always remember to bargain!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AcademicOrientation;
