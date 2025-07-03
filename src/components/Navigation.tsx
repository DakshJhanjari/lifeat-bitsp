
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Building, Utensils, GraduationCap, Users, Heart, User } from "lucide-react";
import NotificationCenter from "./NotificationCenter";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#hostel", label: "Hostel Life", icon: Building },
    { href: "#mess", label: "Mess & Food", icon: Utensils },
    { href: "#academic", label: "Academics", icon: GraduationCap },
    { href: "#clubs", label: "Clubs & Life", icon: Users },
    { href: "#health", label: "Health & Fitness", icon: Heart },
    { href: "/daksh-story", label: "From the Office", icon: User, isRoute: true },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b-2 border-red-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/14d131b7-3c5f-4324-b92e-245de31eb64f.png"
              alt="Student Union Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-poppins font-bold text-lg sm:text-xl bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent whitespace-nowrap">
              BITS Pilani Guide
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 rounded-lg transition-all duration-300 text-sm font-semibold shadow-sm"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
            <div className="ml-4">
              <NotificationCenter />
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden hover:bg-gradient-to-r hover:from-red-100 hover:to-blue-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-red-200 bg-gradient-to-r from-red-50 to-blue-50">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-3 w-full text-left py-3 px-4 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 transition-all duration-300 rounded-lg mx-2 font-semibold"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
            <div className="px-6 py-2">
              <NotificationCenter />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
