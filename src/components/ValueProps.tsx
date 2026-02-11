import { motion } from "framer-motion";
import { Shield, Zap, Database } from "lucide-react";

const props = [
  { icon: Shield, title: "Operationalized Compliance", desc: "Move beyond checkbox compliance. EmberQuant embeds risk controls into your operational workflows." },
  { icon: Zap, title: "Agentic Risk Discovery", desc: "AI agents continuously scan your enterprise for emerging risks across all technology layers." },
  { icon: Database, title: "Living Risk Register", desc: "A dynamic, always-current database of risks — auto-classified, scored, and linked to controls." },
];

const ValueProps = () => (
  <section className="py-24 bg-ember-light">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {props.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background border border-border rounded-xl p-8"
          >
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-5">
              <p.icon className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
