import { motion } from "framer-motion";
import { Zap, Building2, Coins } from "lucide-react";

const verticals = [
  {
    icon: Zap,
    title: "Energy",
    description: "Digital infrastructure for energy trading, storage hedging, and cross-border power flows.",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description: "Capital coordination for ports, terminals, and transport networks across emerging markets.",
  },
  {
    icon: Coins,
    title: "Digital Assets",
    description: "Bridging traditional finance and digital settlement layers for institutional participants.",
  },
];

const VerticalsSection = () => {
  return (
    <section className="py-32 md:py-40 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Verticals
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-gradient">
            Built to scale across markets
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {verticals.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group rounded-2xl border border-border bg-card p-8 md:p-10 hover:border-primary/20 transition-all duration-500"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {v.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalsSection;
