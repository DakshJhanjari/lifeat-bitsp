
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-24 sm:pt-32 pb-6 sm:pb-10 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-jakarta text-shimmer mb-4 leading-[0.95] tracking-tight">
            Inside BITS
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-md mx-auto">
            Your command center for campus life, academics, and everything BITS Pilani. 🎓
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
