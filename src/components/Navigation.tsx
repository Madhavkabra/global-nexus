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
          ? "glass-surface shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-5 max-w-7xl">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="text-foreground font-semibold text-lg tracking-tight">
            Arctura
          </span>
        </a>

        {/* Right Nav */}
        <nav className="flex items-center gap-8">
          <a
            href="#ecosystem"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Logistics
          </a>
          <div className="relative flex items-center gap-1.5">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-medium text-primary tracking-widest uppercase">
              Soon
            </span>
            <a
              href="#ecosystem"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FX Engine
            </a>
          </div>
          <a
            href="#ecosystem"
            className="btn-gradient ml-2 rounded-full px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <span>Explore</span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navigation;
