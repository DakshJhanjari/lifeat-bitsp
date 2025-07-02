
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#hostel", label: "Hostel Life" },
    { href: "#mess", label: "Mess & Food" },
    { href: "#academic", label: "Academics" },
    { href: "#clubs", label: "Clubs & Life" },
    { href: "#health", label: "Health & Fitness" },
    { href: "/daksh-story", label: "Student Story", isRoute: true },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // It's a route, let the browser handle it
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
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl z-50 border-b border-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/14d131b7-3c5f-4324-b92e-245de31eb64f.png"
              alt="Student Union Logo"
              className="h-9 w-9 md:h-10 md:w-10 object-contain hover-scale"
              style={{minWidth: "2.25rem"}}
            />
            <span className="font-poppins font-bold text-xl text-blue-900 drop-shadow-lg">
              BITS Pilani Guide
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-blue-800 font-medium font-inter hover:text-blue-900 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-blue-800 hover:text-blue-900 hover:bg-blue-100 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-blue-900/20 bg-white/98 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-4 text-blue-800 font-medium font-inter hover:text-blue-900 hover:bg-blue-100 transition-all duration-300 hover:translate-x-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
