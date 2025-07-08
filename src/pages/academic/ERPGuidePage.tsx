
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Computer, GraduationCap, Calendar, CreditCard, ExternalLink } from "lucide-react";

const ERPGuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">🖥️ ERP Portal Guide</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your complete guide to navigating the BITS ERP system
            </p>
          </div>

          <Card className="hover-scale mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Computer className="h-5 w-5 text-blue-600" />
                What is ERP?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg">
                  The ERP (Enterprise Resource Planning) Portal is your academic control center at BITS Pilani. 
                  It's where you'll manage your entire academic journey - from course registration to grade tracking.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">🎯 Primary Functions:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Course registration and timetable creation</li>
                      <li>• Academic records and grade tracking</li>
                      <li>• Fee payment and financial transactions</li>
                      <li>• Personal information management</li>
                    </ul>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">⚡ Key Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 24/7 access to academic information</li>
                      <li>• Real-time updates on grades and attendance</li>
                      <li>• Streamlined administrative processes</li>
                      <li>• Digital document management</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <a href="http://erp.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                      🚀 Access ERP Portal <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Academic Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">📚 Course Management:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Browse available courses by semester</li>
                      <li>• View course details, prerequisites, and instructors</li>
                      <li>• Register for courses and create timetables</li>
                      <li>• Add/drop courses during registration periods</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">📊 Academic Tracking:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• View real-time grades and CGPA</li>
                      <li>• Track attendance for all courses</li>
                      <li>• Access academic transcripts</li>
                      <li>• Monitor degree completion progress</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                  Administrative Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">💳 Financial Management:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• View fee structure and payment deadlines</li>
                      <li>• Make online fee payments</li>
                      <li>• Download fee receipts and invoices</li>
                      <li>• Track payment history</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">👤 Personal Information:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Update contact information</li>
                      <li>• Manage emergency contacts</li>
                      <li>• Upload required documents</li>
                      <li>• Access student ID details</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-red-600" />
                ERP Best Practices & Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 p-4 rounded-lg mb-3">
                    <Calendar className="h-8 w-8 text-red-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-red-800 mb-2">⏰ Timing is Key</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Log in early during registration</li>
                    <li>• Have backup course combinations ready</li>
                    <li>• Check deadlines regularly</li>
                    <li>• Pay fees before due dates</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 p-4 rounded-lg mb-3">
                    <Computer className="h-8 w-8 text-yellow-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-yellow-800 mb-2">🔒 Security Tips</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Never share your login credentials</li>
                    <li>• Always log out after use</li>
                    <li>• Use secure internet connections</li>
                    <li>• Change password periodically</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg mb-3">
                    <GraduationCap className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-green-800 mb-2">📱 Stay Updated</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Check for system notifications</li>
                    <li>• Bookmark important pages</li>
                    <li>• Keep contact info updated</li>
                    <li>• Download important documents</li>
                  </ul>
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

export default ERPGuidePage;
