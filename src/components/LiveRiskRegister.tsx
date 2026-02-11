import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Risk {
    id: string; // Use string for key
    source: string;
    desc: string;
    severity: "high" | "medium" | "low";
    time: string;
}

const initialRisks: Risk[] = [
    { id: "1", source: "AWS Config", desc: "S3 Bucket Public Access Detected", severity: "high", time: "Just now" },
    { id: "2", source: "GitHub", desc: "Hardcoded API Key found in PR #402", severity: "high", time: "2m ago" },
    { id: "3", source: "Jira", desc: "Compliance Ticket Overdue", severity: "medium", time: "15m ago" },
];

const newRisks: Risk[] = [
    { id: "4", source: "Salesforce", desc: "Unauthorized export of customer data", severity: "high", time: "Just now" },
    { id: "5", source: "Okta", desc: "Suspicious login from new IP", severity: "medium", time: "Just now" },
    { id: "6", source: "K8s", desc: "Pod running as root", severity: "high", time: "Just now" },
    { id: "7", source: "Slack", desc: "PII shared in public channel", severity: "low", time: "Just now" },
];

const LiveRiskRegister = () => {
    const [risks, setRisks] = useState<Risk[]>(initialRisks);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index >= newRisks.length) {
                index = 0; // Loop or stop? Let's loop new risks to keep it alive
            }
            const risk = { ...newRisks[index], id: Date.now().toString() }; // Unique ID
            setRisks(prev => [risk, ...prev].slice(0, 8)); // Keep top 8
            index++;
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full flex flex-col bg-black/90 text-xs font-mono p-4 rounded-tl-lg rounded-bl-lg overflow-hidden border-r border-white/10">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <span className="text-white/60 font-semibold uppercase tracking-wider">Live Risk Feed</span>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-emerald-500">Connected</span>
                </div>
            </div>

            <div className="flex-1 overflow-hidden relative">
                <AnimatePresence initial={false}>
                    {risks.map((risk) => (
                        <motion.div
                            key={risk.id}
                            initial={{ opacity: 0, x: -20, height: 0 }}
                            animate={{ opacity: 1, x: 0, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-3 border-l-2 pl-3 py-1"
                            style={{
                                borderColor: risk.severity === 'high' ? '#EF4444' : risk.severity === 'medium' ? '#F59E0B' : '#3B82F6'
                            }}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-white/80 font-bold">{risk.source}</span>
                                <span className="text-white/40 text-[10px]">{risk.time}</span>
                            </div>
                            <p className="text-white/60 leading-tight">{risk.desc}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Update Scanner Line Effect */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

export default LiveRiskRegister;
