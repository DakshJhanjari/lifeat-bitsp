
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, BookOpen, Instagram, ExternalLink, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-800 py-20 px-4 relative overflow-hidden border-t border-gray-200">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-sky-400/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-400/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-yellow-500 mr-3 animate-spin" style={{animationDuration: '3s'}} />
            <h2 className="text-4xl md:text-5xl font-black font-poppins text-gradient-yellow-blue drop-shadow-lg">
              🔗 Connect to a BITSian
            </h2>
            <Sparkles className="h-8 w-8 text-red-500 ml-3 animate-spin" style={{animationDuration: '4s'}} />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-inter leading-relaxed">
            New beginnings can be <span className="font-bold text-yellow-600">challenging</span> and <span className="font-bold text-sky-600">confusing</span>. 
            If you still have doubts regarding anything related to BITS, <span className="font-bold text-red-600">we've got you covered!</span>
          </p>
          
          <div className="glass-effect rounded-3xl p-8 md:p-10 max-w-4xl mx-auto hover-scale">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 font-poppins text-yellow-600 drop-shadow">
              How to connect? 🤔
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="light-card p-6 rounded-2xl border-yellow-300 hover-scale">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <span className="text-white font-black text-xl font-poppins">1</span>
                </div>
                <p className="text-gray-700 font-medium font-inter leading-relaxed">
                  <span className="font-bold text-yellow-600">Fill out</span> the Google form (ensure you enter your email correctly)
                </p>
              </div>
              <div className="light-card p-6 rounded-2xl border-sky-300 hover-scale">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <span className="text-white font-black text-xl font-poppins">2</span>
                </div>
                <p className="text-gray-700 font-medium font-inter leading-relaxed">
                  You'll receive a <span className="font-bold text-sky-600">mail from our side</span> with details of the assigned mentor
                </p>
              </div>
              <div className="light-card p-6 rounded-2xl border-red-300 hover-scale">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <span className="text-white font-black text-xl font-poppins">3</span>
                </div>
                <p className="text-gray-700 font-medium font-inter leading-relaxed">
                  <span className="font-bold text-red-600">Message them directly</span> on WhatsApp or email with your query
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="light-card text-gray-800 hover-scale">
            <CardHeader className="text-center">
              <MessageCircle className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
              <CardTitle className="text-xl font-poppins font-bold">Connect with Mentors</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 w-full font-bold shadow-xl border-0">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Join Mentor Program <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="light-card text-gray-800 hover-scale">
            <CardHeader className="text-center">
              <BookOpen className="h-10 w-10 text-sky-500 mx-auto mb-3" />
              <CardTitle className="text-xl font-poppins font-bold">FAQs & Resources</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild variant="outline" className="w-full text-gray-700 border-gray-300 hover:bg-sky-50 hover:border-sky-400 font-bold">
                <a href="https://accidental-scowl-047.notion.site/2002911fe3e680da8535d0a9c4fbcc97?v=2152911fe3e680348199000c4e079955&source=copy_link" target="_blank" rel="noopener noreferrer">
                  Browse FAQs <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="light-card text-gray-800 hover-scale md:col-span-2 lg:col-span-1">
            <CardHeader className="text-center">
              <Instagram className="h-10 w-10 text-red-500 mx-auto mb-3" />
              <CardTitle className="text-xl font-poppins font-bold">Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3">
                <Button asChild variant="outline" size="sm" className="w-full text-yellow-600 border-gray-300 hover:text-yellow-700 hover:bg-yellow-50 hover:border-yellow-400 font-bold">
                  <a href="https://www.instagram.com/bitsoasis" target="_blank" rel="noopener noreferrer">
                    @bitsoasis <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full text-sky-600 border-gray-300 hover:bg-sky-50 hover:border-sky-400 font-bold">
                  <a href="https://www.instagram.com/bitsapogee" target="_blank" rel="noopener noreferrer">
                    @bitsapogee <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center border-t border-gray-200 pt-10">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-6 w-6 text-red-500 mr-2 animate-pulse" />
            <p className="text-xl text-gray-600 font-inter">
              Made with <span className="font-bold text-red-600">love</span> for the BITS Pilani community
            </p>
            <Heart className="h-6 w-6 text-red-500 ml-2 animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 font-poppins font-bold">
            Welcome to BITS Pilani - Where <span className="text-yellow-600">dreams take flight</span> and <span className="text-sky-600">futures are built!</span> 🌟✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
