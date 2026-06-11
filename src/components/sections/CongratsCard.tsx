import { Award, Target, Users, GraduationCap } from "lucide-react";

const CongratsCard = () => {
  return (
    <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 mb-6 sm:mb-10 hover-lift shadow-2xl">
      <div className="flex items-center justify-center mb-4 sm:mb-6 flex-wrap gap-2">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 sm:p-3 rounded-full flex-shrink-0">
          <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-poppins text-center">
          Congratulations, Future BITSian! 🎉
        </h2>
      </div>
      
      <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 font-medium px-2 text-center">
        You've secured admission to one of India's most <span className="text-gradient-secondary font-bold">prestigious</span> and <span className="text-gradient-secondary font-bold">innovative</span> institutions. 
        Get ready for an incredible journey! ✨
      </p>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="glass-card bg-slate-900/50 border border-slate-800/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover-lift">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 p-2 sm:p-3 rounded-full w-fit mb-3 sm:mb-4 mx-auto sm:mx-0">
            <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
          </div>
          <h3 className="font-bold text-white text-lg sm:text-xl mb-2 sm:mb-3 font-poppins text-center sm:text-left">Get Oriented</h3>
          <p className="text-slate-400 text-sm font-medium text-center sm:text-left leading-relaxed">From campus navigation to academic planning - we've got you covered!</p>
        </div>
        <div className="glass-card bg-slate-900/50 border border-slate-800/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover-lift">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 p-2 sm:p-3 rounded-full w-fit mb-3 sm:mb-4 mx-auto sm:mx-0">
            <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
          </div>
          <h3 className="font-bold text-white text-lg sm:text-xl mb-2 sm:mb-3 font-poppins text-center sm:text-left">Connect</h3>
          <p className="text-slate-400 text-sm font-medium text-center sm:text-left leading-relaxed">Build lasting friendships and professional networks that'll last a lifetime!</p>
        </div>
        <div className="glass-card bg-slate-900/50 border border-slate-800/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover-lift sm:col-span-2 md:col-span-1">
          <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/40 p-2 sm:p-3 rounded-full w-fit mb-3 sm:mb-4 mx-auto sm:mx-0">
            <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-teal-400" />
          </div>
          <h3 className="font-bold text-white text-lg sm:text-xl mb-2 sm:mb-3 font-poppins text-center sm:text-left">Excel</h3>
          <p className="text-slate-400 text-sm font-medium text-center sm:text-left leading-relaxed">Discover amazing opportunities and achieve your wildest dreams!</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-950/30 via-purple-950/30 to-teal-950/30 p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-purple-900/50">
        <p className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-poppins text-center">
          🚀 Your journey to excellence starts here!
        </p>
        <p className="text-slate-300 font-medium text-base sm:text-lg text-center leading-relaxed">
          Welcome to the BITS Pilani community - where innovation meets tradition and dreams become reality! 🌟
        </p>
      </div>
    </div>
  );
};

export default CongratsCard;
