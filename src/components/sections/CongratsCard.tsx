
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Trophy, ChevronRight } from "lucide-react";

const CongratsCard = () => {
  return (
    <div className="animate-fade-in-delay">
      <Card className="card-modern hover-lift-modern border-0 bg-gradient-to-br from-white via-blue-50/30 to-violet-50/30 backdrop-blur-xl">
        <CardHeader className="text-center pb-6 sm:pb-8 relative">
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-2xl flex items-center justify-center">
            <Trophy className="h-8 w-8 text-blue-600" />
          </div>
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg">
              <Sparkles className="h-4 w-4" />
              Congratulations
            </div>
            
            <CardTitle className="text-3xl sm:text-4xl text-slate-900 font-bold font-geist leading-tight">
              You're Part of Something
              <span className="block text-gradient-accent">Extraordinary</span>
            </CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="text-center px-6 sm:px-8 pb-8 sm:pb-10">
          <div className="space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Getting into BITS Pilani is no small feat. You've earned your place among India's brightest minds. 
              Now, let's make the most of this incredible journey ahead.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                <div className="text-2xl font-bold text-slate-900">50k+</div>
                <div className="text-sm text-slate-600 font-medium">Alumni Network</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                <div className="text-2xl font-bold text-slate-900">100+</div>
                <div className="text-sm text-slate-600 font-medium">Student Clubs</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                <div className="text-2xl font-bold text-slate-900">4</div>
                <div className="text-sm text-slate-600 font-medium">Campuses</div>
              </div>
            </div>
            
            <Button className="btn-primary-modern group">
              <span>Explore Your Campus</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CongratsCard;
