
import { Sparkles, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 sm:pt-24 pb-8 sm:pb-16 px-3 sm:px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 sm:mb-8 bounce-gentle">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-poppins text-gradient-primary mb-4 sm:mb-6 leading-tight">
              Inside BITS
            </h1>
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 flex-wrap">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 flex-shrink-0" />
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 text-center">
                Welcome to BITS Pilani
              </p>
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-teal-500 flex-shrink-0" />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium px-2">
              Your ultimate guide to campus life, academics, and endless possibilities! 🎓
            </p>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="mx-auto h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
