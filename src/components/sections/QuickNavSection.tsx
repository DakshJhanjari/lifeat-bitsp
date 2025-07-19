
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Home, 
  Users, 
  Utensils, 
  Heart, 
  ArrowRight,
  BookOpen,
  Calendar,
  MapPin
} from "lucide-react";

const QuickNavSection = () => {
  const navItems = [
    {
      title: "Academic Orientation",
      description: "Course selection, ERP system, and academic guidance",
      icon: GraduationCap,
      link: "/academic-orientation",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100/50"
    },
    {
      title: "Hostel Life",
      description: "Room allocation, facilities, and hostel culture",
      icon: Home,
      link: "/hostel-life", 
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100/50"
    },
    {
      title: "Clubs & Campus Life",
      description: "Student organizations, events, and extracurriculars",
      icon: Users,
      link: "/clubs-and-campus-life",
      color: "from-purple-500 to-purple-600", 
      bgColor: "from-purple-50 to-purple-100/50"
    },
    {
      title: "Mess & Food",
      description: "Dining options, mess system, and food culture",
      icon: Utensils,
      link: "/mess-and-food",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100/50"
    },
    {
      title: "Health & Fitness", 
      description: "Medical facilities, sports, and wellness resources",
      icon: Heart,
      link: "/health-and-fitness",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100/50"
    }
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="text-center mb-12 sm:mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg">
          <MapPin className="h-4 w-4" />
          Quick Navigation
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 font-geist text-balance">
          Everything You Need to Know
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
          Explore essential aspects of BITS life with our comprehensive guides
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link key={item.title} to={item.link} className="group block">
              <Card className={`card-modern hover-lift-modern border-0 h-full bg-gradient-to-br ${item.bgColor} backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:text-slate-600 group-hover:translate-x-1" />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-slate-900 font-geist group-hover:text-slate-800 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {item.description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-slate-600 transition-colors">
                    <BookOpen className="h-4 w-4" />
                    <span>Learn More</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
      
      {/* Bottom CTA */}
      <div className="text-center mt-16 sm:mt-20">
        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-full px-6 py-3 shadow-lg shadow-black/5">
          <Calendar className="h-5 w-5 text-slate-600" />
          <span className="text-slate-700 font-medium">Need help planning your first week?</span>
          <Link to="/academic-orientation" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            Start Here →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickNavSection;
