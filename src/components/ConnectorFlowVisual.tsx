import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";

const sources = [
  "SOPs", "ERPs", "AI Models", "Cloud Infra", "HR Policies",
  "Data Pipelines", "Vendor Contracts", "APIs", "IoT Devices",
];

const outputs = [
  "Risk Register", "Control Matrix", "Compliance Reports",
  "Audit Trails", "Risk Heatmaps",
];

const ConnectorFlowVisual = () => (
  <div className="relative py-12">
    <div className="grid grid-cols-3 gap-4 items-center max-w-5xl mx-auto">
      {/* Sources */}
      <div className="space-y-3">
        {sources.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-muted border border-border rounded-md px-4 py-2 text-xs text-muted-foreground font-body"
          >
            {s}
          </motion.div>
        ))}
      </div>

      {/* Center - EmberQuant Engine */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="bg-foreground/5 border-2 border-foreground/20 rounded-xl p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center overflow-hidden">
            <img src={logo} alt="EQ" className="w-12 h-12 object-cover" />
          </div>
          <p className="font-display text-sm text-foreground">23 Connectors</p>
          <p className="text-xs text-muted-foreground mt-1">Risk Terminal Engine</p>
        </div>
        <div className="absolute top-1/2 -left-4 w-4 h-px bg-foreground/20" />
        <div className="absolute top-1/2 -right-4 w-4 h-px bg-foreground/20" />
      </motion.div>

      {/* Outputs */}
      <div className="space-y-3">
        {outputs.map((o, i) => (
          <motion.div
            key={o}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-foreground text-background rounded-md px-4 py-2 text-xs font-body font-semibold"
          >
            {o}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default ConnectorFlowVisual;
