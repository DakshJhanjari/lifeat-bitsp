
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, GraduationCap, Users, ExternalLink, AlertCircle } from "lucide-react";

const AcademicOrientation = () => {
  return (
    <section id="academic" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">📚 Academic Orientation</h2>
          <p className="text-xl text-blue-600 font-semibold mb-4">
            🎉 Yes, you read that right — at BITS Pilani, you create your <em>own</em> timetable!
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At BITS, there's no fixed class section—you customize your academic schedule by picking your preferred courses, timings, and even professors. This freedom can be exciting but also a little intimidating at first.
          </p>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              🖥️ ERP – Your Academic Control Center
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-4">
                  The <strong>ERP Portal</strong> is where your academic journey begins—get familiar with it early!
                </p>
                <div>
                  <h4 className="font-medium mb-2">What you can do:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• View course offerings and time slots</li>
                    <li>• Register for subjects</li>
                    <li>• Track attendance and grades</li>
                    <li>• Pay fees</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="http://erp.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                    🚀 Access ERP Portal <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-600" />
              📊 Portals You'll Use Frequently
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 mb-2">ERP</h4>
                <p className="text-sm text-gray-600 mb-3">Registration, grades, attendance and fee payment</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="http://erp.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                    Visit ERP <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-green-800 mb-2">Nalanda LMS</h4>
                <p className="text-sm text-gray-600 mb-3">Notes, assignments, online quizzes</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://nalanda-aws.bits-pilani.ac.in/login/index.php" target="_blank" rel="noopener noreferrer">
                    Visit LMS <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-purple-800 mb-2">AUGSD</h4>
                <p className="text-sm text-gray-600 mb-3">Academic handouts, applying for leaves</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://academic.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                    Visit AUGSD <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              🧭 Course Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 p-4 bg-orange-50 rounded-lg">
              <p className="text-orange-800 font-medium flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                💡 For the first year you'll only have CDC so don't worry about the electives as of now.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 mb-2">CDC</h4>
                <p className="text-sm text-gray-600">Core Disciplinary Courses</p>
                <p className="text-xs text-gray-500 mt-2">Mandatory courses for your branch</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-green-800 mb-2">DEL</h4>
                <p className="text-sm text-gray-600">Discipline Electives</p>
                <p className="text-xs text-gray-500 mt-2">Optional courses within your branch</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-purple-800 mb-2">OPEL</h4>
                <p className="text-sm text-gray-600">Open Electives</p>
                <p className="text-xs text-gray-500 mt-2">From any department—explore beyond your field!</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-orange-800 mb-2">HEL</h4>
                <p className="text-sm text-gray-600">Humanities Electives</p>
                <p className="text-xs text-gray-500 mt-2">Psychology, economics, sociology, etc.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-600" />
              🗓️ How Timetable Registration Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="space-y-3">
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <p className="font-medium text-indigo-800">1. Browse & Plan</p>
                    <p className="text-sm text-gray-600">Log into ERP and browse available courses</p>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <p className="font-medium text-indigo-800">2. Choose Slots</p>
                    <p className="text-sm text-gray-600">Choose lecture + tutorial + lab slots for each subject</p>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <p className="font-medium text-indigo-800">3. Avoid Clashes</p>
                    <p className="text-sm text-gray-600">Plan multiple backup combinations</p>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <p className="font-medium text-indigo-800">4. Submit</p>
                    <p className="text-sm text-gray-600">Submit your timetable and download it as PDF</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl">
                <h4 className="font-bold text-orange-800 text-lg mb-2">💡 Pro Tips</h4>
                <ul className="text-sm text-gray-600 space-y-2">
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
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                📘 AUGSD: Your Academic Support Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                <strong>AUGSD</strong> (Academic Undergraduate Studies Division) oversees:
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Curriculum structure and degree planning</li>
                <li>• Academic queries, branch changes, overload approvals</li>
                <li>• CGPA calculations and academic notices</li>
                <li>• Guidance on double degrees, dual minors, and PS</li>
              </ul>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>📌 Pro Tip:</strong> Bookmark the AUGSD page on the ERP dashboard for official academic circulars!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-red-600" />
                🧠 Need Help? You've Got Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-1">Academic Advisors</h4>
                  <p className="text-sm text-gray-600">Assigned to you for academic guidance</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-1">TAs (Teaching Assistants)</h4>
                  <p className="text-sm text-gray-600">Senior students who clarify course content</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-1">Study Groups</h4>
                  <p className="text-sm text-gray-600">Collaborative learning with peers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
          <CardHeader>
            <CardTitle className="text-cyan-800">📕 Books and Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Suggested reading lists will be given on handout</li>
                  <li>• Buy/sell books through senior batches or online groups</li>
                  <li>• LMS is your main portal for class materials</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="text-yellow-800 font-medium">💡 Money-Saving Tip:</p>
                <p className="text-sm text-gray-600 mt-1">
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
