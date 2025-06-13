
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, GraduationCap, Users } from "lucide-react";

const AcademicOrientation = () => {
  return (
    <section id="academic" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">📚 Academic Orientation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate your academic journey with confidence! Everything you need to know about courses, registration, and resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                ERP System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">Your one-stop portal for all academic needs:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Course registration & timetable</li>
                  <li>• Grade reports & transcripts</li>
                  <li>• Fee payment & receipts</li>
                  <li>• Academic calendar & notices</li>
                  <li>• Hostel & mess registration</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://erp.bits-pilani.ac.in" target="_blank" rel="noopener noreferrer">
                    Access ERP Portal
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Course Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">Step-by-step registration process:</p>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-medium text-purple-800">1. Login to ERP</p>
                    <p className="text-sm text-gray-600">Use your student credentials</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-medium text-purple-800">2. Course Selection</p>
                    <p className="text-sm text-gray-600">Choose based on your degree requirements</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-medium text-purple-800">3. Timetable Check</p>
                    <p className="text-sm text-gray-600">Ensure no clashes in timing</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-600" />
              Course Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 mb-2">CDC</h4>
                <p className="text-sm text-gray-600">Compulsory Discipline Courses</p>
                <p className="text-xs text-gray-500 mt-2">Core subjects for your major</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-green-800 mb-2">DEL</h4>
                <p className="text-sm text-gray-600">Discipline Electives</p>
                <p className="text-xs text-gray-500 mt-2">Choose from your department</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-purple-800 mb-2">OPEL</h4>
                <p className="text-sm text-gray-600">Open Electives</p>
                <p className="text-xs text-gray-500 mt-2">Explore other departments</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-orange-800 mb-2">HEL</h4>
                <p className="text-sm text-gray-600">Humanities Electives</p>
                <p className="text-xs text-gray-500 mt-2">Literature, philosophy, arts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                Learning Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full">
                  <a href="https://lms.bits-pilani.ac.in" target="_blank" rel="noopener noreferrer">
                    📖 LMS Portal
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://augsd.bits-pilani.ac.in" target="_blank" rel="noopener noreferrer">
                    🎓 AUGSD Resources
                  </a>
                </Button>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-1">Books & Notes</h4>
                  <p className="text-sm text-gray-600">Available at Co-op and online resources</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-red-600" />
                Academic Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-1">Teaching Assistants (TAs)</h4>
                  <p className="text-sm text-gray-600">Senior students who help with coursework</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-1">Faculty Advisors</h4>
                  <p className="text-sm text-gray-600">Guidance for course selection & career planning</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-1">Study Groups</h4>
                  <p className="text-sm text-gray-600">Collaborative learning with peers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AcademicOrientation;
