
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Building, Utensils, GraduationCap, Users, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import NotificationCenter from "@/components/NotificationCenter";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/hostel-life", label: "Hostel Life", icon: Building },
    { href: "/mess-and-food", label: "Mess & Food", icon: Utensils },
    { href: "/academic-orientation", label: "Academics", icon: GraduationCap },
    { href: "/clubs-and-campus-life", label: "Clubs & Life", icon: Users },
    { href: "/health-and-fitness", label: "Health & Fitness", icon: Heart },
    { href: "/daksh-story", label: "From the Office", icon: User },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b-2 border-gradient-to-r from-blue-200 to-purple-200">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex items-center space-x-1 sm:space-x-2 min-w-0 flex-shrink-0 max-w-[40%] sm:max-w-none">
            <img
              src="/lovable-uploads/14d131b7-3c5f-4324-b92e-245de31eb64f.png"
              alt="Student Union Logo"
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain flex-shrink-0"
            />
            <span className="font-poppins font-bold text-sm sm:text-base md:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent truncate leading-tight">
              BITS Pilani Guide
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-1 lg:space-x-2 flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center space-x-1 lg:space-x-2 px-2 lg:px-3 py-2 rounded-lg transition-all duration-300 text-xs lg:text-sm font-semibold shadow-sm whitespace-nowrap ${
                  isActive(item.href)
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-500"
                    : "text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
                }`}
              >
                <item.icon className="h-3 w-3 lg:h-4 lg:w-4" />
                <span className="hidden lg:inline">{item.label}</span>
                <span className="lg:hidden text-xs">{item.label.split(' ')[0]}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <NotificationCenter />
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 flex-shrink-0 h-8 w-8 p-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-3 border-t border-purple-200 bg-gradient-to-r from-blue-50 to-purple-50 -mx-3 sm:-mx-4 px-3 sm:px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 w-full text-left py-2.5 px-3 transition-all duration-300 rounded-lg mx-1 font-semibold text-sm ${
                  isActive(item.href)
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-500"
                    : "text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
                }`}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
