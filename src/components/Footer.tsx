
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, BookOpen, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your BITS Journey? 🚀</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with mentors, access resources, and join the amazing BITS community!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 border-white/20 text-white hover-scale">
            <CardHeader className="text-center">
              <MessageCircle className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <CardTitle className="text-lg">Connect with Mentors</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
                <a href="https://forms.google.com/mentor-connect" target="_blank" rel="noopener noreferrer">
                  Join Mentor Program
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover-scale">
            <CardHeader className="text-center">
              <BookOpen className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <CardTitle className="text-lg">FAQs & Resources</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild variant="outline" className="w-full text-white border-white/30">
                <a href="https://notion.so/bits-faqs" target="_blank" rel="noopener noreferrer">
                  Browse FAQs
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover-scale">
            <CardHeader className="text-center">
              <BookOpen className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <CardTitle className="text-lg">Class Notes</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild variant="outline" className="w-full text-white border-white/30">
                <a href="https://notion.so/class-notes" target="_blank" rel="noopener noreferrer">
                  Access Notes
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover-scale">
            <CardHeader className="text-center">
              <Instagram className="h-8 w-8 text-pink-400 mx-auto mb-2" />
              <CardTitle className="text-lg">Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-2">
                <Button asChild variant="outline" size="sm" className="w-full text-white border-white/30">
                  <a href="https://instagram.com/oasis_bits" target="_blank" rel="noopener noreferrer">
                    @oasis_bits
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full text-white border-white/30">
                  <a href="https://instagram.com/apogee_bits" target="_blank" rel="noopener noreferrer">
                    @apogee_bits
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center border-t border-white/20 pt-8">
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
