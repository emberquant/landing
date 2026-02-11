import { motion } from "framer-motion";
import { Link2, FileSearch, AlertTriangle, BarChart3, Layers, Brain, Network, GitBranch, Database, Shield, Eye, Workflow, Gauge, FileText, Fingerprint, Lock, Zap, Radar, Globe, Settings, BookOpen, Target, Lightbulb } from "lucide-react";

const connectors = [
  { icon: FileSearch, name: "SoP to Risks", desc: "Extracts risk signals from Standard Operating Procedures automatically." },
  { icon: AlertTriangle, name: "Risk Generation", desc: "AI-generated risk scenarios based on your enterprise context and industry." },
  { icon: BarChart3, name: "Risk Assessment", desc: "Quantitative and qualitative risk scoring using multi-factor models." },
  { icon: Layers, name: "Risk Classification", desc: "Auto-classify risks into taxonomies aligned to COSO, ISO 31000, and custom frameworks." },
  { icon: Brain, name: "Knowledge Graph", desc: "Visualize your entire risk landscape as an interconnected knowledge graph." },
  { icon: Network, name: "Control Mapping", desc: "Map risks to existing controls and identify gaps in real time." },
  { icon: GitBranch, name: "Process Mining", desc: "Analyze business process logs to uncover hidden operational risks." },
  { icon: Database, name: "ERP Integration", desc: "Direct connectors to SAP, Oracle, and Microsoft Dynamics for risk data extraction." },
  { icon: Shield, name: "Compliance Checker", desc: "Continuous compliance verification against 50+ regulatory frameworks." },
  { icon: Eye, name: "Monitoring Agent", desc: "24/7 autonomous monitoring of risk indicators across your tech stack." },
  { icon: Workflow, name: "Workflow Orchestrator", desc: "Automate risk remediation workflows with approval chains and escalations." },
  { icon: Gauge, name: "Risk Scoring Engine", desc: "Dynamic risk scoring that adapts to changing threat landscapes." },
  { icon: FileText, name: "Document Analyzer", desc: "NLP-powered analysis of contracts, policies, and regulatory documents." },
  { icon: Fingerprint, name: "Identity Risk", desc: "Assess identity and access management risks across your organization." },
  { icon: Lock, name: "Data Privacy", desc: "Automated data flow mapping and privacy impact assessments." },
  { icon: Zap, name: "Incident Connector", desc: "Links incident management systems to update risk registers in real time." },
  { icon: Radar, name: "Threat Intelligence", desc: "Integrates external threat feeds to contextualize enterprise risks." },
  { icon: Globe, name: "Geopolitical Risk", desc: "Monitor geopolitical events and their potential impact on operations." },
  { icon: Settings, name: "Config Auditor", desc: "Scan infrastructure configurations for security and compliance deviations." },
  { icon: BookOpen, name: "Regulatory Feed", desc: "Real-time regulatory change tracking across 100+ jurisdictions." },
  { icon: Target, name: "Risk Appetite", desc: "Define and monitor risk appetite thresholds with automated alerts." },
  { icon: Lightbulb, name: "Emerging Tech Risk", desc: "Identify risks from AI, quantum computing, blockchain, and IoT deployments." },
  { icon: Link2, name: "Third-Party Risk", desc: "Continuous vendor and supply chain risk assessment and scoring." },
];

const Connectors = () => (
  <main className="min-h-screen pt-32 pb-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <p className="text-xs font-body font-semibold text-primary tracking-widest uppercase mb-3">Connectors</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">23 Connectors. One Risk Terminal.</h1>
        <p className="text-muted-foreground font-body leading-relaxed">
          Each connector is purpose-built to ingest, analyze, and classify risks from your enterprise ecosystem — producing a living risk register.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {connectors.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <c.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-base text-foreground mb-2">{c.name}</h3>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default Connectors;
