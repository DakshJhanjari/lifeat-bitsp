
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, User, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const OfficeStoryCard = () => {
  return (
    <div className="animate-scale-in">
      <Card className="card-modern hover-lift-modern border-0 bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 backdrop-blur-xl">
        <CardHeader className="text-center pb-6 sm:pb-8 relative">
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center">
            <User className="h-8 w-8 text-orange-600" />
          </div>
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg">
              <BookOpen className="h-4 w-4" />
              Student Stories
            </div>
            
            <CardTitle className="text-3xl sm:text-4xl text-slate-900 font-bold font-geist leading-tight">
              Real Stories from
              <span className="block text-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Real Students</span>
            </CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="text-center px-6 sm:px-8 pb-8 sm:pb-10">
          <div className="space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Learn from those who've walked this path before you. Get insights, tips, and honest experiences 
              from current students and alumni who know what it's really like.
            </p>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 text-left max-w-lg mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Daksh Jhanjari</div>
                  <div className="text-sm text-slate-600 mb-2">Executive Committee Member, Students' Union</div>
                  <div className="text-sm text-slate-700 italic">"From reluctance to belonging - my BITS journey"</div>
                </div>
              </div>
            </div>
            
            <Button asChild className="btn-primary-modern group">
              <Link to="/daksh-story">
                <span>Read His Story</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfficeStoryCard;
