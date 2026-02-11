import { useState, useEffect } from "react";
import { AlertTriangle, ShieldAlert, Bug, Lock, Eye } from "lucide-react";

const riskItems = [
  { icon: AlertTriangle, text: "Supply Chain Vulnerability Detected — Tier 2 Vendor", severity: "HIGH" },
  { icon: ShieldAlert, text: "GDPR Article 35 DPIA Required — New Data Flow", severity: "MEDIUM" },
  { icon: Bug, text: "AI Model Bias Drift — Lending Algorithm v3.2", severity: "CRITICAL" },
  { icon: Lock, text: "ISO 27001 A.12.4 — Logging Gap Identified", severity: "HIGH" },
  { icon: Eye, text: "PII Exposure Risk — LLM Training Dataset", severity: "CRITICAL" },
  { icon: AlertTriangle, text: "COSO ERM Deviation — Operational Risk Tolerance Breach", severity: "MEDIUM" },
  { icon: ShieldAlert, text: "HIPAA §164.312 — Access Control Misconfiguration", severity: "HIGH" },
  { icon: Bug, text: "Emerging Tech Risk — Quantum Encryption Readiness", severity: "LOW" },
  { icon: Lock, text: "SOX Compliance — Financial Reporting Control Gap", severity: "HIGH" },
  { icon: Eye, text: "Third-Party API — Data Residency Violation", severity: "CRITICAL" },
];

const severityColor: Record<string, string> = {
  CRITICAL: "text-red-500",
  HIGH: "text-amber-600",
  MEDIUM: "text-primary",
  LOW: "text-muted-foreground",
};

const RiskTicker = () => {
  const [count, setCount] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-foreground text-background overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-primary px-4 py-1.5 flex items-center gap-2 z-10">
          <span className="w-2 h-2 rounded-full bg-background animate-pulse-glow" />
          <span className="text-xs font-body font-semibold text-background tracking-wide">
            {count.toLocaleString()} RISKS IDENTIFIED
          </span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="animate-ticker flex whitespace-nowrap">
            {[...riskItems, ...riskItems].map((item, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-6 py-1.5">
                <item.icon className={`w-3 h-3 ${severityColor[item.severity]}`} />
                <span className="text-xs text-background/70">{item.text}</span>
                <span className={`text-[10px] font-semibold ${severityColor[item.severity]}`}>
                  {item.severity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskTicker;
