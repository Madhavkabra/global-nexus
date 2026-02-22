import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-4 md:py-5 max-w-7xl">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="text-foreground font-semibold text-base md:text-lg tracking-tight font-display">
            Arctura
          </span>
        </a>

        {/* Right Nav */}
        <nav className="flex items-center gap-3 md:gap-6 lg:gap-8">
          <a
            href="#ecosystem"
            className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Logistics
          </a>
          <a
            href="#ecosystem"
            className="relative text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <span>FX Engine</span>
            <span className="px-1.5 py-0.5 text-[8px] md:text-[9px] font-medium text-primary bg-primary/10 border border-primary/20 rounded-full tracking-widest uppercase pulse-glow">
              Soon
            </span>
          </a>
          <a
            href="#ecosystem"
            className="btn-gradient rounded-full px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Explore</span>
            <span className="sm:hidden">Go</span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navigation;
