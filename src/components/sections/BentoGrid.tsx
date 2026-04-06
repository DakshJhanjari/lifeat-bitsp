
import { motion } from "framer-motion";
import { Building, Utensils, GraduationCap, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const bentoItems = [
  {
    to: "/hostel-life",
    label: "Hostel Life",
    description: "Room allocation, facilities, bhawan culture & everything about your home away from home.",
    icon: Building,
    className: "col-span-2 row-span-2 sm:col-span-1 sm:row-span-2",
    iconColor: "from-blue-400 to-cyan-400",
  },
  {
    to: "/mess-and-food",
    label: "Mess & Food",
    description: "Mess system, Redi culture, campus eateries & late-night food runs.",
    icon: Utensils,
    className: "col-span-1 row-span-1",
    iconColor: "from-green-400 to-emerald-400",
  },
  {
    to: "/academic-orientation",
    label: "Academics",
    description: "ERP, course registration, timetable & academic resources.",
    icon: GraduationCap,
    className: "col-span-1 row-span-1",
    iconColor: "from-purple-400 to-pink-400",
  },
  {
    to: "/clubs-and-campus-life",
    label: "Clubs & Campus",
    description: "Departments, fests, clubs & the vibrant campus culture that defines BITS.",
    icon: Users,
    className: "col-span-1 row-span-1 sm:col-span-1",
    iconColor: "from-orange-400 to-red-400",
  },
  {
    to: "/health-and-fitness",
    label: "Health & Fitness",
    description: "Medical services, sports facilities & staying fit on campus.",
    icon: Heart,
    className: "col-span-1 row-span-1 sm:col-span-1",
    iconColor: "from-pink-400 to-rose-400",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const BentoGrid = () => {
  return (
    <section className="px-4 pb-8 sm:pb-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[160px]"
        >
          {bentoItems.map((b) => (
            <motion.div key={b.to} variants={item} className={b.className}>
              <Link
                to={b.to}
                className="glass-card glow-border rounded-2xl h-full w-full flex flex-col justify-between p-5 sm:p-6 group relative overflow-hidden"
              >
                <div>
                  <div className={`bg-gradient-to-br ${b.iconColor} p-2.5 rounded-xl w-fit mb-3`}>
                    <b.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-jakarta mb-1">
                    {b.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {b.description}
                  </p>
                </div>
                <div className="flex items-center text-xs text-muted-foreground mt-2 group-hover:text-primary transition-colors">
                  <span>Explore →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
