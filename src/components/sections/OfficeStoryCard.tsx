import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const OfficeStoryCard = () => {
  return (
    <div className="mb-6 sm:mb-8">
      <Card className="glass-card hover-lift border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center pb-3 sm:pb-4">
          <CardTitle className="text-xl sm:text-2xl text-white font-bold flex items-center justify-center font-poppins flex-wrap gap-2">
            <div className="bg-amber-950/40 border border-amber-900/50 p-2 rounded-full flex-shrink-0">
              <Star className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
            </div>
            <span>From the Office...</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center px-4 sm:px-6">
          <p className="text-slate-400 mb-4 sm:mb-6 text-base sm:text-lg font-medium leading-relaxed">
            Experience and advice from the seniors - Real stories, real insights! 💡
          </p>
          <Button asChild className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-pink-500 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover-lift text-base sm:text-lg">
            <Link to="/daksh-story">Read Story 📖</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfficeStoryCard;
