import { motion } from "framer-motion";
import { Shield, Globe2, Clock, TrendingUp, Award, Users } from "lucide-react";

const stats = [
  { value: "$2.4B+", label: "Trade Volume Facilitated", icon: TrendingUp },
  { value: "30+", label: "Countries Connected", icon: Globe2 },
  { value: "99.97%", label: "Platform Uptime", icon: Clock },
  { value: "150+", label: "Institutional Partners", icon: Users },
];

const certifications = [
  { icon: Shield, label: "SOC 2 Type II Certified" },
  { icon: Award, label: "ISO 27001 Compliant" },
  { icon: Globe2, label: "Multi-Jurisdiction Licensed" },
];

const partners = [
  "Goldman Sachs", "Vitol", "Trafigura", "Standard Chartered",
  "Maersk", "Glencore", "HSBC", "Cargill", "Shell Trading", "BNP Paribas",
];

const TrustSection = () => {
  return (
    <section className="py-32 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Trust & Scale
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-gradient font-display">
            Infrastructure you can depend on
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center rounded-2xl glass-card p-6 md:p-8 card-hover-glow"
            >
              <div className="mb-4 mx-auto inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-1 font-display">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-24"
        >
          {certifications.map((cert) => (
            <div key={cert.label} className="flex items-center gap-3 text-muted-foreground">
              <cert.icon className="w-4 h-4 text-primary/60" />
              <span className="text-sm font-medium">{cert.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10">
            Trusted by leading institutions
          </p>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="overflow-hidden">
              <div className="marquee-track">
                {[...partners, ...partners].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="flex-shrink-0 px-10 text-lg font-medium text-muted-foreground/30 tracking-tight select-none whitespace-nowrap"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
