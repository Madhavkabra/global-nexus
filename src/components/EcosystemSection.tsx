import { motion } from "framer-motion";
import logisticsBg from "@/assets/logistics-bg.png";
import fxBg from "@/assets/fx-bg.png";

const EcosystemCard = ({
  image,
  label,
  title,
  description,
  comingSoon,
  delay,
}: {
  image: string;
  label: string;
  title: string;
  description: string;
  comingSoon?: boolean;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay }}
    className="group relative rounded-2xl overflow-hidden glass-card card-hover-glow"
  >
    <div className="relative h-64 md:h-80 overflow-hidden">
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.7 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-card/30" style={{
        backgroundImage: title.includes("FX") 
          ? 'radial-gradient(circle at 80% 20%, hsl(240 100% 70% / 0.08) 0%, transparent 50%)'
          : 'radial-gradient(circle at 20% 80%, hsl(270 91% 65% / 0.08) 0%, transparent 50%)'
      }} />
      {title.includes("FX") && (
        <div className="absolute inset-0 grid-pattern opacity-30" />
      )}
      {title.includes("Logistics") && (
        <div className="absolute inset-0 industrial-overlay opacity-20" />
      )}
    </div>
    <div className="relative p-8 md:p-10 -mt-16 z-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
          {label}
        </span>
        {comingSoon && (
          <span className="text-[9px] tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-0.5 pulse-glow">
            Coming Soon
          </span>
        )}
      </div>
      <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight font-display">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-base">
        {description}
      </p>
      <div className="mt-6">
        <span className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
          <span className="inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
            {comingSoon ? "Join Waitlist" : "Learn more"}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </span>
      </div>
    </div>
  </motion.div>
);

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-32 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Ecosystem
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-gradient font-display">
            Two platforms. One mission.
          </h2>
        </motion.div>

        {/* Separator glow line */}
        <div className="glow-line w-full max-w-md mx-auto mb-20" />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <EcosystemCard
            image={logisticsBg}
            label="Product A"
            title="Storage & Logistics Marketplace"
            description="Decoupling physical assets from complex trade. A marketplace connecting storage, transport, and logistics across global corridors."
            delay={0.1}
          />
          <EcosystemCard
            image={fxBg}
            label="Product B"
            title="FX Price Discovery"
            description="Real-time transparency for cross-border capital facilitation. Institutional-grade pricing where legacy markets fall short."
            comingSoon
            delay={0.25}
          />
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
