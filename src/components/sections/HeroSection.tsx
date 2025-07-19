
import { Sparkles, ArrowDown, Stars } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-violet-50/20" />
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-violet-400 rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse delay-700" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-full px-4 py-2 mb-8 shadow-lg shadow-black/5">
              <Stars className="h-4 w-4 text-violet-600" />
              <span className="text-sm font-medium text-slate-700">Welcome to Your Journey</span>
              <Sparkles className="h-4 w-4 text-blue-600" />
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-geist text-gradient-modern mb-6 sm:mb-8 leading-[0.9] tracking-tight">
              Inside BITS
            </h1>
            
            <div className="space-y-4 mb-8 sm:mb-12">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 text-balance">
                Welcome to BITS Pilani
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto text-balance leading-relaxed">
                Your ultimate guide to campus life, academics, and endless possibilities
              </p>
            </div>

            {/* CTA Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-accent text-white rounded-full px-6 py-3 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <span className="font-medium">Start Exploring</span>
              <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="animate-bounce pt-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg shadow-black/5 border border-slate-200/60">
              <ArrowDown className="h-5 w-5 text-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
