import { motion } from "framer-motion";

const standards = [
  "ISO 27001", "ISO 31000", "COSO ERM", "GDPR", "HIPAA", "SOX", "NIST CSF",
  "PCI DSS", "SOC 2", "CCPA", "DORA", "NIS2", "AI Act (EU)", "BASEL III",
  "COBIT", "ITIL", "FedRAMP", "FISMA", "GLBA", "FERPA", "ISO 22301",
  "ISO 27701", "CMMC", "CSA STAR", "CIS Controls", "MITRE ATT&CK",
];

const StandardsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs font-body font-semibold text-primary tracking-widest uppercase mb-3">Coverage</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground">50+ Risk Standards</h2>
        <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
          From financial regulation to AI governance — one terminal, complete coverage.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {standards.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            className="bg-muted border border-border rounded-md px-4 py-2 text-xs font-body text-muted-foreground hover:text-foreground hover:border-foreground/20 transition cursor-default"
          >
            {s}
          </motion.span>
        ))}
        <span className="bg-primary/10 border border-primary/20 rounded-md px-4 py-2 text-xs font-body text-primary font-semibold">
          +24 more
        </span>
      </div>
    </div>
  </section>
);

export default StandardsSection;
