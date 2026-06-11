import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Linkedin, Instagram, Heart, Star, Users, BookOpen, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DakshStory = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button asChild variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-900/60 hover:text-white">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>

            {/* Profile Header */}
            <div className="glass-card rounded-2xl p-8 md:p-12 mb-10 shadow-2xl">
              {/* Profile Photo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img
                    src="/lovable-uploads/84661b34-1e9d-4a52-b470-24a5e4d8f91b.png"
                    alt="Daksh Jhanjari"
                    className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-slate-800 shadow-lg hover-lift"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-3 shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gradient-primary mb-4">
                  DAKSH JHANJARI
                </h1>
                
                <div className="space-y-3 mb-8">
                  <p className="text-xl md:text-2xl font-semibold text-slate-200">
                    Executive Committee Member Students' Union BITS PILANI
                  </p>
                  <p className="text-lg md:text-xl text-slate-400">
                    Project Lead <span className="font-semibold text-white">Inside BITS</span>
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-8">
                  <a 
                    href="https://www.linkedin.com/in/daksh-jhanjari-bb70a527a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 hover-lift shadow-lg shadow-blue-500/20"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/dakshjhanjhari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-500 transition-all duration-300 hover-lift shadow-lg shadow-pink-500/20"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="font-medium">Instagram</span>
                  </a>
                </div>

                <div className="bg-gradient-to-r from-slate-900/40 to-blue-950/20 p-6 rounded-xl border border-blue-900/40 backdrop-blur-sm">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-poppins">
                    From Reluctance to Belonging: My BITS Pilani Story
                  </h2>
                  <p className="text-lg text-slate-300 italic">
                    "No story is good enough until you hear it from the people who lived it."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* The Beginning */}
            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white font-poppins">
                  <Target className="h-6 w-6 mr-3 text-blue-400" />
                  The Beginning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  When I first got into BITS Pilani, I wasn't thrilled. Like most of us, I had spent years preparing for the IITs. Not landing there was disappointing, and it took a moment to come to terms with that. But as I read more about BITS, its culture, freedom, and alumni, it slowly sank in that I had earned a seat at <strong className="text-white">one of the most respected institutes in the country</strong>. And that was something to be proud of.
                </p>
                <p>
                  I had other options at NITs, and a COMEDK rank that could've gotten me into premier private colleges like RVCE or Ramaiah. But <strong className="text-white">BITS stood out</strong>. The <strong>student-driven environment</strong>, the <strong>culture of trust</strong>, and the <strong>sheer scale of opportunities</strong> made it feel like the right move. Looking back, I'd make the same choice again.
                </p>
              </CardContent>
            </Card>

            {/* Academic Journey */}
            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white font-poppins">
                  <BookOpen className="h-6 w-6 mr-3 text-blue-400" />
                  Academic Path
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  I'm pursuing a dual degree — MSc Chemistry and BE Civil. It sounds like an odd mix to some, but it's part of what makes BITS unique. This path has <strong className="text-white">broadened my academic experience</strong> and <strong>challenged me to think beyond rigid silos</strong>.
                </p>
                <p>
                  That said, the start wasn't easy. I was an introvert who had never lived away from home. The thought of adjusting in a completely new environment felt overwhelming. Fitting in was hard. But I met a few seniors early on who were kind and inclusive, and with time, I started building real friendships. <strong className="text-white">That made all the difference.</strong>
                </p>
              </CardContent>
            </Card>

            {/* First Week Chaos */}
            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white font-poppins">
                  <Users className="h-6 w-6 mr-3 text-blue-400" />
                  First Week & Finding My Place
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  My first week on campus was chaos — setting up my room, figuring out where things were, attending first lectures, and trying not to get lost on a campus that felt more like a small city. Making friends didn't happen overnight either. But <strong className="text-white">I kept showing up</strong> for classes, wing meets, club orientations. That helped me slowly open up.
                </p>
                <p>
                  And then came the culture shocks — no attendance policy, making your own timetable, deciding when (and if) to attend classes. At first, it was liberating, then confusing. It took a while to learn that <strong className="text-white">too much freedom with too little structure is a trap. You have to create your own systems to survive here.</strong>
                </p>
                <p>
                  Of course, there was homesickness. Everyone feels it. But soon you're up at midnight playing football, exploring the campus with your wingies, or just chilling outside, and you realize: <strong className="text-white">this place has become your second home.</strong>
                </p>
              </CardContent>
            </Card>

            {/* Leadership Journey */}
            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white font-poppins">
                  <Trophy className="h-6 w-6 mr-3 text-blue-400" />
                  Leadership & Learning from Failure
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  I started getting involved — first with the Chemistry Association, then in the Dept. of Sports Media team. Eventually, I became part of the Students' Union Executive Committee. The idea of creating something meaningful for the student body felt exciting.
                </p>
                <p>
                  Later, I contested the election for Hostel Representative of Shankar Bhawan. <strong className="text-white">I lost. And it stung.</strong> After putting in time and effort, rejection can shake your confidence. There were moments I asked myself: <em>Why am I even doing this? What's the point?</em>
                </p>
                <p>
                  But <strong className="text-white">quitting midway wasn't the answer</strong>. I realized that <strong>if the intent is right, the outcome doesn't define the value of your effort</strong>. I stayed in the game — continued working on student welfare projects, led several campus-wide initiatives with my peers, and kept showing up. <strong className="text-white">That phase taught me more about leadership than any position ever could.</strong>
                </p>
              </CardContent>
            </Card>

            {/* BITS Culture */}
            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white font-poppins">
                  <Heart className="h-6 w-6 mr-3 text-blue-400" />
                  What Makes BITS Special
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  One thing that continues to amaze me is <strong className="text-white">how much students here own the space</strong>. The fests — Oasis, Apogee, BOSM — are massive, and yet they're <strong>entirely student-run</strong>. The logistics, sponsorships, publicity, hospitality — everything is handled by us. The fact that this happens year after year, right here in a village like Pilani, still blows my mind.
                </p>
                <p>
                  BITS has shaped me in ways I didn't expect. I've learned to <strong>manage time</strong> — especially once your social circle expands and life gets chaotic. I've become more mindful of money, more <strong>confident speaking in public</strong>, and more <strong>independent when it comes to academics</strong>. And yes, I've picked up my share of clever <em>jugaads</em> to make campus life smoother.
                </p>
              </CardContent>
            </Card>

            {/* Advice Section */}
            <Card className="professional-card hover-lift shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-white text-center font-poppins">
                  Words of Wisdom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-slate-900/50 to-blue-950/20 p-6 rounded-xl border border-slate-800/80">
                  <p className="text-xl font-semibold text-white mb-4 font-poppins text-center">
                    If I could speak to my pre-BITS self, I'd say:
                  </p>
                  <p className="text-2xl font-bold text-slate-300 text-center italic">
                    "Don't be rigid. Be open to new experiences — life has more to teach you than you realize."
                  </p>
                </div>
                
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p className="text-lg font-semibold text-white">To all the freshers coming in:</p>
                  <p>
                    Yes, it's overwhelming. But <strong className="text-white">stay grounded</strong>. <strong>Balance your academics and social life</strong>. Don't get caught up in the rush to "fit in." Avoid shortcuts like substance use. <strong>Be kind</strong> — not everyone adjusts quickly, and sometimes your help can make someone feel at home.
                  </p>
                </div>

                <div className="bg-blue-950/20 p-6 rounded-xl border border-blue-900/40">
                  <p className="text-xl font-semibold text-blue-300 text-center font-poppins">
                    And why am I sharing all this?
                  </p>
                  <p className="text-2xl font-bold text-slate-300 text-center mt-4">
                    Because no story is good enough until you hear it from the people who lived it.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-10 py-4 text-lg font-semibold rounded-lg hover-lift shadow-lg shadow-purple-500/20">
                <Link to="/">
                  Continue Your BITS Journey
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DakshStory;
