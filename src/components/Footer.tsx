
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, BookOpen, Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-900 via-amber-900 to-blue-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">🔗 Connect to a BITSian</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            New beginnings can often be challenging and confusing. If you still have doubts regarding anything related to BITS, we've got you covered!
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto border border-orange-400/20">
            <h3 className="text-xl font-semibold mb-4">How to connect?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-orange-500/20 p-4 rounded-lg border border-orange-400/30">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-sm">Fill out the Google form (ensure you enter your email correctly)</p>
              </div>
              <div className="bg-amber-500/20 p-4 rounded-lg border border-amber-400/30">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-sm">You'll receive a mail from our side with details of the assigned mentor</p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400/30">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-sm">Message them directly on WhatsApp or email with your query</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 border-orange-400/30 text-white hover-scale">
            <CardHeader className="text-center">
              <MessageCircle className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <CardTitle className="text-lg">Connect with Mentors</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="bg-orange-600 hover:bg-orange-700 w-full">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Join Mentor Program <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-blue-400/30 text-white hover-scale">
            <CardHeader className="text-center">
              <BookOpen className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <CardTitle className="text-lg">FAQs & Resources</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild variant="outline" className="w-full text-white border-white/30 hover:bg-blue-600/20">
                <a href="https://notion.so/bits-faqs" target="_blank" rel="noopener noreferrer">
                  Browse FAQs <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-amber-400/30 text-white hover-scale">
            <CardHeader className="text-center">
              <Instagram className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <CardTitle className="text-lg">Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-2">
                <Button asChild variant="outline" size="sm" className="w-full text-orange-400 border-white/30 hover:text-orange-300 hover:bg-orange-600/20">
                  <a href="https://www.instagram.com/bitsoasis" target="_blank" rel="noopener noreferrer">
                    @bitsoasis <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full text-white border-white/30 hover:bg-blue-600/20">
                  <a href="https://www.instagram.com/bitsapogee" target="_blank" rel="noopener noreferrer">
                    @bitsapogee <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center border-t border-orange-400/30 pt-8">
          <p className="text-gray-300 mb-4">
            Made with <Heart className="inline h-4 w-4 text-red-400" /> for the BITS Pilani community
          </p>
          <p className="text-sm text-gray-400">
            Welcome to BITS Pilani - Where dreams take flight and futures are built! 🌟
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
