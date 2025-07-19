
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, MessageCircle } from "lucide-react";

const MentorConnectButton = () => {
  return (
    <div className="flex justify-center animate-fade-up">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-shimmer bg-[length:200%_100%]" />
        
        <div className="relative bg-white rounded-2xl p-8 shadow-2xl shadow-black/10 border border-slate-200/60 backdrop-blur-xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-geist">
                Connect with a Student Mentor
              </h3>
              <p className="text-slate-600 text-lg max-w-md mx-auto leading-relaxed">
                Get personalized guidance from current BITS students who understand your journey
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>1-on-1 Chat</span>
              </div>
              <div className="w-1 h-1 bg-slate-300 rounded-full" />
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Peer Support</span>
              </div>
            </div>
            
            <Button 
              asChild 
              className="btn-primary-modern text-lg px-8 py-4 h-auto group shadow-xl shadow-slate-900/25 hover:shadow-2xl hover:shadow-slate-900/30"
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Get Connected</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorConnectButton;
