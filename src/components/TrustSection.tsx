import { motion } from "framer-motion";

const partners = [
  "Goldman Sachs",
  "Vitol",
  "Trafigura",
  "Standard Chartered",
  "Maersk",
  "Glencore",
];

const TrustSection = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12"
        >
          Trusted by institutional partners
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {partners.map((name) => (
            <span
              key={name}
              className="text-lg font-medium text-muted-foreground/40 tracking-tight select-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
