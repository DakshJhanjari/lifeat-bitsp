
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Building, Utensils, GraduationCap, Users, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import NotificationCenter from "@/components/NotificationCenter";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/hostel-life", label: "Hostel Life", icon: Building },
  { href: "/mess-and-food", label: "Mess & Food", icon: Utensils },
  { href: "/academic-orientation", label: "Academics", icon: GraduationCap },
  { href: "/clubs-and-campus-life", label: "Clubs & Life", icon: Users },
  { href: "/health-and-fitness", label: "Health", icon: Heart },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Top Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 glass-nav ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={handleNavClick} className="flex items-center gap-2">
              <img
                src="/lovable-uploads/14d131b7-3c5f-4324-b92e-245de31eb64f.png"
                alt="Student Union Logo"
                className={`object-contain transition-all duration-300 ${scrolled ? "h-7 w-7" : "h-9 w-9"}`}
              />
              <span className="font-jakarta font-bold text-base text-shimmer">
                InsideBits
              </span>
            </Link>

            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="ml-2">
                <NotificationCenter />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar (minimal) */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden glass-nav py-2 px-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-2">
            <img
              src="/lovable-uploads/14d131b7-3c5f-4324-b92e-245de31eb64f.png"
              alt="Logo"
              className="h-7 w-7 object-contain"
            />
            <span className="font-jakarta font-bold text-sm text-shimmer">InsideBits</span>
          </Link>
          <div className="flex items-center gap-2">
            <NotificationCenter />
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="pt-3 pb-2 space-y-1 border-t border-border mt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.href)
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile Bottom Dock */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="mx-3 mb-3 glass-card rounded-2xl px-2 py-2 flex items-center justify-around">
          {navItems.slice(0, 5).map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={handleNavClick}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all duration-200 ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <item.icon className={`h-5 w-5 ${active ? "drop-shadow-[0_0_6px_hsl(262,83%,58%)]" : ""}`} />
                <span className="text-[10px] font-medium">{item.label.split(" ")[0]}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
