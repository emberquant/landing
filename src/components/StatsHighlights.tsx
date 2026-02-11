import { motion } from "framer-motion";

const stats = [
  { value: "3x", desc: "Objectives operationalized into your risk registers" },
  { value: "1.4x", desc: "More likely to achieve objectives with dynamic risk toolkits" },
  { value: "47%", desc: "Compliance standards subject to change in the next 3 years" },
];

const StatsHighlights = () => (
  <section className="py-20 bg-ember-light">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs font-body font-semibold text-primary tracking-widest uppercase mb-3">Industry Diagnostics</p>
        <h2 className="font-display text-2xl md:text-3xl text-foreground max-w-2xl mx-auto leading-snug">
          Your Board doesn't want a longer list of risks; they want a shorter list of worries.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6"
          >
            <p className="font-display text-5xl md:text-6xl text-foreground mb-3">{s.value}</p>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsHighlights;
