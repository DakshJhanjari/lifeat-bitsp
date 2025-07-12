
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, BookOpen, Instagram, ExternalLink, Users, Target, ArrowRight } from "lucide-react";

interface FooterProps {
  showConnectSection?: boolean;
}

const Footer = ({ showConnectSection = false }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 py-16 px-4 border-t border-slate-200">
      <div className="container mx-auto">
        {showConnectSection && (
          <>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                  Connect with a BITSian
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Starting at a new institution can be challenging. If you have questions about BITS Pilani, 
                our student mentors are here to help guide you through your journey.
              </p>
              
              <div className="glass-card rounded-2xl p-8 md:p-10 max-w-4xl mx-auto hover-lift">
                <h3 className="text-2xl font-semibold mb-8 text-slate-800">
                  How to Connect
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="professional-card p-6 rounded-xl hover-lift">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-semibold text-slate-800">Complete</span> the Google form with accurate contact information
                    </p>
                  </div>
                  <div className="professional-card p-6 rounded-xl hover-lift">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      Receive an <span className="font-semibold text-slate-800">email</span> with your assigned mentor's details
                    </p>
                  </div>
                  <div className="professional-card p-6 rounded-xl hover-lift">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-semibold text-slate-800">Connect directly</span> via WhatsApp or email for personalized guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="professional-card hover-lift">
                <CardHeader className="text-center">
                  <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-semibold">Student Mentorship</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-full font-medium shadow-sm">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                      Join Program <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="professional-card hover-lift">
                <CardHeader className="text-center">
                  <BookOpen className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-semibold">Resources & FAQs</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild variant="outline" className="w-full text-slate-600 border-slate-300 hover:bg-slate-50 font-medium">
                    <a href="https://accidental-scowl-047.notion.site/2002911fe3e680da8535d0a9c4fbcc97?v=2152911fe3e680348199000c4e079955&source=copy_link" target="_blank" rel="noopener noreferrer">
                      Browse Resources <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="professional-card hover-lift md:col-span-2 lg:col-span-1">
                <CardHeader className="text-center">
                  <Instagram className="h-8 w-8 text-slate-700 mx-auto mb-3" />
                  <CardTitle className="text-lg font-semibold">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <Button asChild variant="outline" size="sm" className="w-full text-slate-600 border-slate-300 hover:bg-slate-50 font-medium">
                      <a href="https://www.instagram.com/bitsoasis" target="_blank" rel="noopener noreferrer">
                        @bitsoasis <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full text-slate-600 border-slate-300 hover:bg-slate-50 font-medium">
                      <a href="https://www.instagram.com/bitsapogee" target="_blank" rel="noopener noreferrer">
                        @bitsapogee <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        <div className="text-center border-t border-slate-200 pt-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-5 w-5 text-blue-600 mr-2" />
            <p className="text-lg text-slate-600">
              Built with care for the BITS Pilani community
            </p>
          </div>
          <p className="text-slate-600 font-medium">
            Welcome to BITS Pilani - Where excellence meets opportunity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
