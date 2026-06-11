import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users } from "lucide-react";

const HostelAllocationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">🏠 Hostel Allocation</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Everything you need to know about hostel allocation at BITS Pilani
            </p>
          </div>

          <Card className="hover-scale mb-8 bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Home className="h-5 w-5 text-blue-400" />
                How Hostel Allocation Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-300">
                <li>• First-year students are assigned hostels randomly, usually grouped with fellow freshers</li>
                <li>• Boys and girls have separate hostels</li>
                <li>• Room sharing (double occupancy) is common in the first and second year</li>
                <li>• Single rooms are allotted third year onwards</li>
                <li>• Your room number and hostel details will be shared during registration</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-950/20 border border-blue-900/30 text-blue-200 rounded-lg">
                <p className="text-sm text-blue-300">
                  💡 <strong>Note:</strong> Room allocation is automatic - no need to worry about choosing!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-emerald-400" />
                Hostel Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Hostels at BITS are more than just accommodation - they're communities where lifelong friendships are formed.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-300 mb-2">Social Activities</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Inter-hostel competitions</li>
                      <li>• Cultural events and festivals</li>
                      <li>• Sports tournaments</li>
                      <li>• Movie nights and group activities</li>
                    </ul>
                  </div>
                  <div className="bg-blue-950/20 border border-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2">Support System</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Senior mentorship programs</li>
                      <li>• Study groups and academic help</li>
                      <li>• Peer support networks</li>
                      <li>• 24/7 security and safety</li>
                    </ul>
                  </div>
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

export default HostelAllocationPage;
