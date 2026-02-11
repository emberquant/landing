import { motion } from "framer-motion";
import { Scan, Brain, Trash2, ShieldCheck, Search, FileWarning } from "lucide-react";

const tools = [
  {
    icon: Scan,
    name: "AI Governance Classifier",
    desc: "Classify AI models across your enterprise by risk level, regulatory exposure, and governance maturity. Maps to EU AI Act tiers and NIST AI RMF categories.",
    tags: ["EU AI Act", "NIST AI RMF", "Model Registry"],
  },
  {
    icon: Brain,
    name: "Agentic Risk Discovery",
    desc: "Deploy autonomous AI agents that continuously probe your enterprise for emerging risks — from shadow IT to unmonitored API endpoints to unregistered AI deployments.",
    tags: ["Autonomous", "Continuous", "Shadow IT"],
  },
  {
    icon: Trash2,
    name: "LLM PII Scrubber",
    desc: "Detect and delete personally identifiable information from LLM training datasets, fine-tuned models, and inference logs. Ensures GDPR Right to Erasure compliance.",
    tags: ["GDPR", "PII Detection", "Model Hygiene"],
  },
  {
    icon: ShieldCheck,
    name: "Algorithmic Audit Engine",
    desc: "Perform bias audits, fairness assessments, and explainability analysis on AI/ML models. Generate audit reports aligned to NYC Local Law 144 and ISO/IEC 42001.",
    tags: ["Bias Audit", "Explainability", "ISO 42001"],
  },
  {
    icon: Search,
    name: "Open Source Intelligence Scanner",
    desc: "Scan public repositories, dark web mentions, leaked credentials, and exposed APIs to assess your organization's external threat surface. Powered by real-time OSINT feeds.",
    tags: ["Dark Web", "Threat Surface", "OSINT"],
  },
  {
    icon: FileWarning,
    name: "Regulatory Impact Analyzer",
    desc: "Simulate the impact of proposed regulations on your operations before they take effect. Model scenarios across GDPR, DORA, NIS2, and sector-specific mandates.",
    tags: ["Scenario Modeling", "Regulatory Change", "Impact Analysis"],
  },
];

const Tools = () => (
  <main className="min-h-screen pt-32 pb-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <p className="text-xs font-body font-semibold text-primary tracking-widest uppercase mb-3">OSINT & AI Tools</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">6 Tools for the New Risk Landscape</h1>
        <p className="text-muted-foreground font-body leading-relaxed">
          Purpose-built intelligence tools for AI governance, compliance automation, and proactive risk discovery.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <t.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-3">{t.name}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{t.desc}</p>
            <div className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-body font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default Tools;
