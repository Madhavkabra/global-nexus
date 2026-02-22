import { motion } from "framer-motion";
import { Zap, Building2, Coins, Droplets, Cpu, Landmark } from "lucide-react";

const verticals = [
  {
    icon: Zap,
    title: "Energy",
    description: "Digital infrastructure for energy trading, storage hedging, and cross-border power flows.",
    status: "active" as const,
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description: "Capital coordination for ports, terminals, and transport networks across emerging markets.",
    status: "active" as const,
  },
  {
    icon: Coins,
    title: "Digital Assets",
    description: "Bridging traditional finance and digital settlement layers for institutional participants.",
    status: "active" as const,
  },
  {
    icon: Droplets,
    title: "Commodities",
    description: "End-to-end trade facilitation for agricultural and soft commodities across frontier markets.",
    status: "upcoming" as const,
  },
  {
    icon: Cpu,
    title: "Data & Analytics",
    description: "Institutional-grade market intelligence and pricing data across all verticals.",
    status: "upcoming" as const,
  },
  {
    icon: Landmark,
    title: "Structured Finance",
    description: "Bespoke capital structuring for large-scale cross-border projects and trade finance.",
    status: "upcoming" as const,
  },
];

const VerticalsSection = () => {
  return (
    <section id="verticals" className="py-32 md:py-40 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Verticals
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-gradient mb-4">
            Built to scale across markets
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A modular platform architecture designed to expand into new sectors without rebuilding from scratch.
          </p>
        </motion.div>

        {/* Active + Upcoming grid */}
        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {verticals.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative rounded-2xl border p-8 md:p-9 transition-all duration-500 card-glow ${
                v.status === "active"
                  ? "border-border bg-card hover:border-primary/25"
                  : "border-dashed border-border/60 bg-card/40 hover:border-border"
              }`}
            >
              {v.status === "upcoming" && (
                <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase text-muted-foreground border border-border rounded-full px-3 py-0.5">
                  Upcoming
                </span>
              )}
              <div className={`mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl ${
                v.status === "active" ? "bg-secondary" : "bg-secondary/50"
              }`}>
                <v.icon className={`w-5 h-5 ${
                  v.status === "active" ? "text-primary" : "text-muted-foreground"
                }`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {v.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {v.description}
              </p>
              {v.status === "active" && (
                <div className="mt-5">
                  <span className="text-xs text-primary font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                    Explore
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Scale CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Have a sector in mind?
          </p>
          <a
            href="#"
            className="btn-gradient-outline inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-foreground transition-all duration-300"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VerticalsSection;
