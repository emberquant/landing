import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ═══════════════════════════════════════════════════════════
// ENTERPRISE RISK TERMINAL — EmberQuant v6
// Auto-demo command typing, Quantification balance sheet,
// Connector view, synced Risk Register
// ═══════════════════════════════════════════════════════════

const C = {
    bg: "#070b14", panel: "#0c1220", border: "#1a2540",
    primary: "#00A8F3", secondary: "#2040b0", accent: "#8FAADC",
    text: "#c8d6e5", muted: "#4a5568",
    critical: "#ef4444", high: "#f97316", medium: "#eab308", low: "#22c55e",
    cmd: "#ff8c00",
};

// ── Shared threat/risk data ─────────────────────────────────
interface ThreatEvent {
    id: string; source: string; desc: string; sev: string; time: string;
    riskCategory: string; riskScore: number; owner: string; status: string;
    financialImpact: number;
}

const threatPool: Omit<ThreatEvent, "id" | "time">[] = [
    { source: "AWS GuardDuty", desc: "IAM credential exfiltration", sev: "critical", riskCategory: "Data Breach", riskScore: 9.2, owner: "SecOps", status: "Open", financialImpact: 4200000 },
    { source: "CrowdStrike", desc: "Malicious PowerShell SRV-042", sev: "high", riskCategory: "Malware", riskScore: 7.8, owner: "IR Team", status: "In Progress", financialImpact: 850000 },
    { source: "Okta", desc: "Brute force from TOR node", sev: "critical", riskCategory: "Access Control", riskScore: 8.5, owner: "IAM", status: "Open", financialImpact: 1200000 },
    { source: "GitHub", desc: "AWS key leaked commit a3f82d1", sev: "high", riskCategory: "Secret Exposure", riskScore: 8.1, owner: "DevSec", status: "Mitigated", financialImpact: 620000 },
    { source: "Prisma Cloud", desc: "Root container in prod", sev: "medium", riskCategory: "Misconfiguration", riskScore: 6.3, owner: "CloudOps", status: "Open", financialImpact: 340000 },
    { source: "Wiz", desc: "CVE-2024-3094 xz-utils", sev: "critical", riskCategory: "Vulnerability", riskScore: 9.8, owner: "PatchMgmt", status: "Open", financialImpact: 8500000 },
    { source: "Splunk", desc: "5.2GB anomalous outbound", sev: "high", riskCategory: "Exfiltration", riskScore: 8.9, owner: "SOC", status: "Investigating", financialImpact: 3100000 },
    { source: "SentinelOne", desc: "Ransomware quarantined WS-117", sev: "critical", riskCategory: "Ransomware", riskScore: 9.5, owner: "IR Team", status: "Contained", financialImpact: 6200000 },
    { source: "Azure Sentinel", desc: "Impossible travel detected", sev: "high", riskCategory: "Identity Threat", riskScore: 7.2, owner: "IAM", status: "Open", financialImpact: 450000 },
    { source: "Qualys", desc: "3 critical findings vuln scan", sev: "medium", riskCategory: "Vulnerability", riskScore: 6.8, owner: "PatchMgmt", status: "In Progress", financialImpact: 280000 },
];

function useSharedThreatFeed() {
    const [events, setEvents] = useState<ThreatEvent[]>(
        threatPool.slice(0, 5).map((t, i) => ({ ...t, id: `init-${i}`, time: `${(i + 1) * 2}m` }))
    );
    useEffect(() => {
        let idx = 5;
        const interval = setInterval(() => {
            const t = threatPool[idx % threatPool.length];
            setEvents(prev => [{ ...t, id: Date.now().toString(), time: "now" }, ...prev.slice(0, 9)]);
            idx++;
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return events;
}

const fmt = (n: number) => n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : `$${(n / 1e3).toFixed(0)}K`;

// ── COMMAND BAR WITH AUTO-DEMO ──────────────────────────────
const demoSequence = [
    { cmd: "RISK", delay: 3000 },
    { cmd: "QUANT", delay: 4000 },
    { cmd: "SYNC", delay: 3500 },
    { cmd: "CTRL", delay: 3000 },
];

const CommandBar = ({ onCommand }: { onCommand: (cmd: string) => void }) => {
    const [displayText, setDisplayText] = useState("");
    const [executed, setExecuted] = useState<string | null>(null);
    const [cmdLog, setCmdLog] = useState<string[]>([]);

    // Auto-demo: type commands character by character
    useEffect(() => {
        let seqIdx = 0;
        let charIdx = 0;
        let phase: "typing" | "execute" | "pause" = "typing";
        let timer: NodeJS.Timeout;

        const tick = () => {
            const current = demoSequence[seqIdx % demoSequence.length];
            if (phase === "typing") {
                if (charIdx <= current.cmd.length) {
                    setDisplayText(current.cmd.slice(0, charIdx));
                    charIdx++;
                    timer = setTimeout(tick, 40 + Math.random() * 30);
                } else {
                    phase = "execute";
                    timer = setTimeout(tick, 200);
                }
            } else if (phase === "execute") {
                setExecuted(current.cmd);
                setCmdLog(prev => [...prev.slice(-4), `${current.cmd} <GO>`]);
                onCommand(current.cmd);
                setDisplayText("");
                phase = "pause";
                timer = setTimeout(() => {
                    setExecuted(null);
                    phase = "typing";
                    charIdx = 0;
                    seqIdx++;
                    timer = setTimeout(tick, 500);
                }, current.delay);
            }
        };

        timer = setTimeout(tick, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col shrink-0" style={{ background: "#0a0f1a", borderBottom: `1px solid ${C.border}` }}>
            {/* Command input row */}
            <div className="flex items-center gap-1 px-2 py-[3px]">
                <span className="text-[10px] font-bold shrink-0" style={{ color: C.cmd }}>EQ:&gt;</span>
                <span className="text-[9px] font-mono flex-1" style={{ color: C.cmd }}>
                    {displayText}<span className="animate-pulse">_</span>
                </span>
                {/* Quick chips */}
                <div className="flex items-center gap-1 shrink-0">
                    {["QUANT", "SYNC", "RISK", "CTRL", "AUDIT"].map(cmd => (
                        <span key={cmd} className="text-[6px] px-1 py-0.5 rounded-sm" style={{ background: `${C.cmd}10`, color: `${C.cmd}80`, border: `1px solid ${C.cmd}20` }}>
                            {cmd}
                        </span>
                    ))}
                </div>
                <AnimatePresence>
                    {executed && (
                        <motion.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-[8px] shrink-0 ml-1 px-1 py-0.5 rounded-sm" style={{ background: `${C.low}15`, color: C.low }}>
                            ✓ {executed} &lt;GO&gt;
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            {/* Command history log */}
            {cmdLog.length > 0 && (
                <div className="flex items-center gap-2 px-2 pb-[2px] text-[6px] overflow-hidden" style={{ color: `${C.cmd}50` }}>
                    <span style={{ color: C.muted }}>HISTORY:</span>
                    {cmdLog.map((c, i) => <span key={i}>{c}</span>)}
                </div>
            )}
        </div>
    );
};

// ── RISK LANDSCAPE ──────────────────────────────────────────
const RiskLandscape = () => {
    const nodes = [
        { id: "core", x: 50, y: 50, label: "Core Platform", type: "asset", size: 4 },
        { id: "r1", x: 20, y: 22, label: "Data Breach", type: "risk", size: 3.2 },
        { id: "r2", x: 80, y: 18, label: "Insider Threat", type: "risk", size: 2.5 },
        { id: "r3", x: 55, y: 78, label: "Vendor Risk", type: "risk", size: 2.8 },
        { id: "r4", x: 12, y: 65, label: "Ransomware", type: "risk", size: 3.2 },
        { id: "r5", x: 88, y: 62, label: "Compliance", type: "risk", size: 2 },
        { id: "l1", x: 38, y: 18, label: "PII Exposure", type: "liability", size: 2.5 },
        { id: "l2", x: 68, y: 42, label: "Reg. Fine", type: "liability", size: 2.8 },
        { id: "l3", x: 22, y: 45, label: "IP Theft", type: "liability", size: 2 },
        { id: "c1", x: 50, y: 32, label: "MFA", type: "control", size: 2 },
        { id: "c2", x: 35, y: 60, label: "DLP", type: "control", size: 2.5 },
        { id: "c3", x: 78, y: 38, label: "SIEM", type: "control", size: 2 },
        { id: "a2", x: 30, y: 35, label: "Customer DB", type: "asset", size: 2.5 },
        { id: "a3", x: 72, y: 72, label: "API GW", type: "asset", size: 2 },
    ];
    const edges: string[][] = [["r1", "a2"], ["r1", "l1"], ["r1", "c2"], ["r2", "core"], ["r2", "c1"], ["r2", "l3"], ["r3", "a3"], ["r3", "l2"], ["r4", "core"], ["r4", "c2"], ["r5", "l2"], ["r5", "c3"], ["core", "a2"], ["core", "a3"], ["c1", "core"], ["c3", "core"], ["l1", "l2"], ["l3", "l2"]];
    const color = (t: string) => t === "risk" ? C.critical : t === "liability" ? C.medium : t === "control" ? C.low : C.primary;
    const getN = (id: string) => nodes.find(n => n.id === id)!;

    return (
        <div className="h-full flex flex-col overflow-hidden" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <div className="px-2 py-1 flex justify-between items-center shrink-0" style={{ borderBottom: `1px solid ${C.border}` }}>
                <span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.primary }}>Risk Landscape</span>
                <div className="flex gap-2 text-[6px]" style={{ color: C.muted }}>
                    <span className="flex items-center gap-0.5"><span className="w-1 h-1 rounded-full" style={{ background: C.critical }} />Risk</span>
                    <span className="flex items-center gap-0.5"><span className="w-1 h-1 rounded-full" style={{ background: C.medium }} />Liability</span>
                    <span className="flex items-center gap-0.5"><span className="w-1 h-1 rounded-full" style={{ background: C.low }} />Control</span>
                    <span className="flex items-center gap-0.5"><span className="w-1 h-1 rounded-full" style={{ background: C.primary }} />Asset</span>
                </div>
            </div>
            <div className="flex-1 relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <defs><pattern id="g" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.2" /></pattern></defs>
                    <rect width="100" height="100" fill="url(#g)" />
                    {edges.map(([f, t], i) => { const a = getN(f), b = getN(t); return <motion.line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={C.border} strokeWidth="0.3" strokeOpacity={0.7} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: i * 0.04 }} /> })}
                    {nodes.map((n, i) => (
                        <motion.g key={n.id} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 + i * 0.05, type: "spring", stiffness: 200 }}>
                            <circle cx={n.x} cy={n.y} r={n.size + 1.5} fill={color(n.type)} opacity={0.08} />
                            <circle cx={n.x} cy={n.y} r={n.size} fill={color(n.type)} opacity={0.85} />
                            <text x={n.x} y={n.y + n.size + 3} textAnchor="middle" fontSize="2.2" fontFamily="monospace" fill={C.text} opacity={0.65}>{n.label}</text>
                        </motion.g>
                    ))}
                    <circle cx={50} cy={50} r={6} fill="none" stroke={C.primary} strokeWidth="0.3" opacity={0.3}>
                        <animate attributeName="r" from="5" to="12" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.3" to="0" dur="3s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>
        </div>
    );
};

// ── THREAT MONITOR ──────────────────────────────────────────
const ThreatMonitor = ({ events }: { events: ThreatEvent[] }) => {
    const sevColor = (s: string) => s === "critical" ? C.critical : s === "high" ? C.high : C.medium;
    return (
        <div className="h-full flex flex-col overflow-hidden" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <div className="px-2 py-1 flex justify-between items-center shrink-0" style={{ borderBottom: `1px solid ${C.border}` }}>
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.critical }} /><span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.critical }}>Threats</span></div>
                <span className="text-[7px] font-mono px-1 rounded-sm" style={{ background: `${C.critical}15`, color: C.critical }}>LIVE</span>
            </div>
            <div className="flex-1 overflow-hidden p-1.5 space-y-1">
                <AnimatePresence initial={false}>
                    {events.slice(0, 5).map(t => (
                        <motion.div key={t.id} initial={{ opacity: 0, y: -6, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="rounded-sm p-1 pl-2" style={{ borderLeft: `2px solid ${sevColor(t.sev)}`, background: `${sevColor(t.sev)}06` }}>
                            <div className="flex justify-between items-center"><span className="text-[7px] font-bold" style={{ color: C.text }}>{t.source}</span><span className="text-[6px]" style={{ color: C.muted }}>{t.time}</span></div>
                            <p className="text-[6px] truncate" style={{ color: C.muted }}>{t.desc}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

// ── RISK MATRIX ─────────────────────────────────────────────
const RiskMatrix = () => {
    const m = [[0, 0, 1, 0, 0], [1, 2, 1, 0, 0], [0, 3, 4, 2, 1], [0, 1, 2, 3, 1], [0, 0, 1, 2, 1]];
    const cc = (l: number, i: number) => { const s = l + i; return s >= 7 ? "bg-red-600/80" : s >= 5 ? "bg-orange-500/60" : s >= 3 ? "bg-yellow-500/40" : "bg-emerald-600/30"; };
    return (
        <div className="h-full flex flex-col" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <div className="px-2 py-1 shrink-0" style={{ borderBottom: `1px solid ${C.border}` }}><span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.high }}>Risk Matrix</span></div>
            <div className="flex-1 flex items-center justify-center p-1.5">
                <div className="grid grid-cols-5 grid-rows-5 gap-[1px] w-full h-full">
                    {[...m].reverse().map((r, ri) => r.map((c, ci) => (
                        <div key={`${ri}-${ci}`} className={`flex items-center justify-center text-[7px] font-mono font-bold rounded-[1px] text-white/80 ${cc(4 - ri, ci)}`}>{c > 0 ? c : ""}</div>
                    )))}
                </div>
            </div>
        </div>
    );
};

// ── RISK REGISTER SPREADSHEET ───────────────────────────────
const RiskRegisterSheet = ({ events }: { events: ThreatEvent[] }) => {
    const sevColor = (s: string) => s === "critical" ? C.critical : s === "high" ? C.high : C.medium;
    const statusColor = (s: string) => s === "Open" ? C.critical : s.includes("Progress") || s === "Investigating" ? C.medium : C.low;
    const extras: ThreatEvent[] = [
        { id: "s1", riskCategory: "Third Party", source: "Vendor Mgmt", sev: "high", riskScore: 7.5, owner: "Procurement", status: "Open", desc: "Unreviewed vendor API", time: "1h", financialImpact: 520000 },
        { id: "s2", riskCategory: "Data Residency", source: "Legal", sev: "medium", riskScore: 6.1, owner: "Legal Ops", status: "In Progress", desc: "EU data in US-EAST", time: "2h", financialImpact: 180000 },
        { id: "s3", riskCategory: "Key Rotation", source: "KMS", sev: "medium", riskScore: 5.8, owner: "SecOps", status: "Scheduled", desc: "90-day rotation overdue", time: "4h", financialImpact: 95000 },
        { id: "s4", riskCategory: "Shadow IT", source: "CASB", sev: "high", riskScore: 7.0, owner: "IT Sec", status: "Open", desc: "Unauthorized SaaS", time: "6h", financialImpact: 410000 },
    ];
    const all = [...events, ...extras];
    return (
        <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <div className="px-2 py-1 flex justify-between items-center shrink-0" style={{ borderBottom: `1px solid ${C.border}` }}>
                <span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.high }}>Risk Register</span>
                <span className="text-[7px]" style={{ color: C.muted }}>{all.length} entries</span>
            </div>
            <div className="flex-1 overflow-y-auto overflow-x-auto">
                <table className="w-full text-[7px] border-collapse">
                    <thead className="sticky top-0 z-10" style={{ background: C.bg }}>
                        <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                            {["#", "RISK", "SOURCE", "DESC", "SEV", "SCORE", "OWNER", "STATUS", "IMPACT"].map(h => (
                                <th key={h} className="text-left px-1.5 py-1 font-medium" style={{ color: C.muted }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence initial={false}>
                            {all.map((r, i) => (
                                <motion.tr key={r.id} initial={r.time === "now" ? { opacity: 0, backgroundColor: "rgba(0,168,243,0.1)" } : { opacity: 1 }} animate={{ opacity: 1, backgroundColor: "rgba(0,0,0,0)" }} transition={{ duration: 0.8 }} className="hover:bg-white/5" style={{ borderBottom: `1px solid ${C.border}10` }}>
                                    <td className="px-1.5 py-[2px] font-mono" style={{ color: C.muted }}>{String(i + 1).padStart(3, "0")}</td>
                                    <td className="px-1.5 py-[2px] font-medium" style={{ color: C.text }}>{r.riskCategory}</td>
                                    <td className="px-1.5 py-[2px]" style={{ color: C.accent }}>{r.source}</td>
                                    <td className="px-1.5 py-[2px] truncate max-w-[100px]" style={{ color: C.muted }}>{r.desc}</td>
                                    <td className="px-1.5 py-[2px]"><span className="px-1 py-0.5 rounded-sm text-[6px] font-bold uppercase" style={{ background: `${sevColor(r.sev)}15`, color: sevColor(r.sev) }}>{r.sev.slice(0, 4)}</span></td>
                                    <td className="px-1.5 py-[2px] text-right font-mono font-bold" style={{ color: r.riskScore >= 9 ? C.critical : r.riskScore >= 7 ? C.high : C.medium }}>{r.riskScore}</td>
                                    <td className="px-1.5 py-[2px]" style={{ color: C.text }}>{r.owner}</td>
                                    <td className="px-1.5 py-[2px]"><span className="text-[6px] font-bold" style={{ color: statusColor(r.status) }}>{r.status}</span></td>
                                    <td className="px-1.5 py-[2px] text-right font-mono" style={{ color: C.high }}>{fmt(r.financialImpact)}</td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// ── QUANTIFICATION: BALANCE SHEET IMPACT ────────────────────
const QuantificationView = ({ events }: { events: ThreatEvent[] }) => {
    const totalExposure = events.reduce((s, e) => s + e.financialImpact, 0);
    const criticalExposure = events.filter(e => e.sev === "critical").reduce((s, e) => s + e.financialImpact, 0);
    const highExposure = events.filter(e => e.sev === "high").reduce((s, e) => s + e.financialImpact, 0);
    const medExposure = events.filter(e => e.sev === "medium").reduce((s, e) => s + e.financialImpact, 0);

    // Balance sheet lines with risk impact
    const balanceSheet = {
        assets: [
            { line: "Cash & Equivalents", value: 45200000, atRisk: criticalExposure * 0.15 },
            { line: "Accounts Receivable", value: 12800000, atRisk: highExposure * 0.08 },
            { line: "Intellectual Property", value: 28500000, atRisk: events.find(e => e.riskCategory === "Secret Exposure")?.financialImpact || 0 },
            { line: "Technology Assets", value: 18900000, atRisk: events.filter(e => ["Ransomware", "Malware"].includes(e.riskCategory)).reduce((s, e) => s + e.financialImpact * 0.3, 0) },
            { line: "Goodwill", value: 35000000, atRisk: criticalExposure * 0.05 },
        ],
        liabilities: [
            { line: "Regulatory Penalties", value: 0, atRisk: events.filter(e => ["Data Breach", "Access Control"].includes(e.riskCategory)).reduce((s, e) => s + e.financialImpact * 0.4, 0) },
            { line: "Litigation Reserve", value: 2500000, atRisk: totalExposure * 0.08 },
            { line: "Cyber Insurance Deductible", value: 1000000, atRisk: criticalExposure > 5000000 ? 1000000 : 0 },
            { line: "Remediation Costs", value: 0, atRisk: totalExposure * 0.12 },
            { line: "Customer Notification", value: 0, atRisk: events.filter(e => e.riskCategory === "Data Breach").length * 250000 },
        ],
        equity: [
            { line: "Revenue Impact", value: 125000000, atRisk: totalExposure * 0.03 },
            { line: "Brand Value", value: 50000000, atRisk: criticalExposure * 0.1 },
        ],
    };

    const totalAssets = balanceSheet.assets.reduce((s, a) => s + a.value, 0);
    const totalAssetsRisk = balanceSheet.assets.reduce((s, a) => s + a.atRisk, 0);

    return (
        <div className="w-full h-full grid grid-cols-3 gap-[2px] min-h-0 overflow-hidden">
            {/* Left: Balance Sheet */}
            <div className="col-span-2 flex flex-col overflow-hidden" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <div className="px-2 py-1 flex justify-between items-center shrink-0" style={{ borderBottom: `1px solid ${C.border}` }}>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.primary }}>Risk Quantification Engine</span>
                        <span className="text-[6px] px-1 py-0.5 rounded-sm animate-pulse" style={{ background: `${C.primary}15`, color: C.primary }}>CONNECTED TO RISK REGISTER</span>
                    </div>
                    <span className="text-[8px] font-mono" style={{ color: C.critical }}>Exposure: {fmt(totalExposure)}</span>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-3">
                    {/* Assets Section */}
                    <div>
                        <div className="flex justify-between items-center mb-1 pb-0.5" style={{ borderBottom: `1px solid ${C.border}` }}>
                            <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color: C.primary }}>Assets</span>
                            <div className="flex gap-4 text-[7px] font-mono">
                                <span style={{ color: C.muted }}>BOOK VALUE</span>
                                <span style={{ color: C.critical }}>AT RISK</span>
                                <span style={{ color: C.medium }}>NET EXPOSURE</span>
                            </div>
                        </div>
                        {balanceSheet.assets.map(a => (
                            <div key={a.line} className="flex items-center justify-between py-[3px] px-1 hover:bg-white/5 rounded-sm">
                                <span className="text-[8px] flex-1" style={{ color: C.text }}>{a.line}</span>
                                <div className="flex gap-4 text-[8px] font-mono">
                                    <span className="w-16 text-right" style={{ color: C.text }}>{fmt(a.value)}</span>
                                    <span className="w-14 text-right" style={{ color: a.atRisk > 0 ? C.critical : C.muted }}>
                                        {a.atRisk > 0 ? `-${fmt(a.atRisk)}` : "—"}
                                    </span>
                                    <span className="w-14 text-right" style={{ color: C.medium }}>{fmt(a.value - a.atRisk)}</span>
                                </div>
                                {/* Impact bar */}
                                {a.atRisk > 0 && (
                                    <div className="w-12 h-1.5 rounded-full ml-2 overflow-hidden" style={{ background: C.border }}>
                                        <motion.div className="h-full rounded-full" style={{ background: C.critical }} initial={{ width: 0 }} animate={{ width: `${Math.min((a.atRisk / a.value) * 100, 100)}%` }} transition={{ duration: 1, delay: 0.3 }} />
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex justify-between mt-1 pt-1 px-1 text-[8px] font-bold" style={{ borderTop: `1px solid ${C.border}` }}>
                            <span style={{ color: C.text }}>Total Assets</span>
                            <div className="flex gap-4 font-mono">
                                <span className="w-16 text-right" style={{ color: C.text }}>{fmt(totalAssets)}</span>
                                <span className="w-14 text-right" style={{ color: C.critical }}>-{fmt(totalAssetsRisk)}</span>
                                <span className="w-14 text-right" style={{ color: C.medium }}>{fmt(totalAssets - totalAssetsRisk)}</span>
                            </div>
                            <div className="w-12" />
                        </div>
                    </div>

                    {/* Liabilities Section */}
                    <div>
                        <div className="flex justify-between items-center mb-1 pb-0.5" style={{ borderBottom: `1px solid ${C.border}` }}>
                            <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color: C.high }}>Potential Liabilities from Risk Events</span>
                        </div>
                        {balanceSheet.liabilities.map(l => (
                            <div key={l.line} className="flex items-center justify-between py-[3px] px-1 hover:bg-white/5 rounded-sm">
                                <span className="text-[8px] flex-1" style={{ color: C.text }}>{l.line}</span>
                                <div className="flex gap-4 text-[8px] font-mono">
                                    <span className="w-16 text-right" style={{ color: C.muted }}>{fmt(l.value)}</span>
                                    <span className="w-14 text-right" style={{ color: l.atRisk > 0 ? C.high : C.muted }}>
                                        {l.atRisk > 0 ? `+${fmt(l.atRisk)}` : "—"}
                                    </span>
                                    <span className="w-14 text-right" style={{ color: C.medium }}>{fmt(l.value + l.atRisk)}</span>
                                </div>
                                {l.atRisk > 0 && (
                                    <div className="w-12 h-1.5 rounded-full ml-2 overflow-hidden" style={{ background: C.border }}>
                                        <motion.div className="h-full rounded-full" style={{ background: C.high }} initial={{ width: 0 }} animate={{ width: `${Math.min((l.atRisk / Math.max(l.value, l.atRisk)) * 100, 100)}%` }} transition={{ duration: 1, delay: 0.5 }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Equity Impact */}
                    <div>
                        <div className="mb-1 pb-0.5" style={{ borderBottom: `1px solid ${C.border}` }}>
                            <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color: C.medium }}>Equity & Revenue Impact</span>
                        </div>
                        {balanceSheet.equity.map(e => (
                            <div key={e.line} className="flex items-center justify-between py-[3px] px-1 hover:bg-white/5 rounded-sm">
                                <span className="text-[8px] flex-1" style={{ color: C.text }}>{e.line}</span>
                                <div className="flex gap-4 text-[8px] font-mono">
                                    <span className="w-16 text-right" style={{ color: C.text }}>{fmt(e.value)}</span>
                                    <span className="w-14 text-right" style={{ color: C.critical }}>-{fmt(e.atRisk)}</span>
                                    <span className="w-14 text-right" style={{ color: C.medium }}>{fmt(e.value - e.atRisk)}</span>
                                </div>
                                <div className="w-12 h-1.5 rounded-full ml-2 overflow-hidden" style={{ background: C.border }}>
                                    <motion.div className="h-full rounded-full" style={{ background: C.medium }} initial={{ width: 0 }} animate={{ width: `${(e.atRisk / e.value) * 100}%` }} transition={{ duration: 1, delay: 0.7 }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right: Summary metrics */}
            <div className="col-span-1 flex flex-col gap-[2px] overflow-hidden">
                {/* VaR Summary */}
                <div className="flex-1 flex flex-col" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                    <div className="px-2 py-1 shrink-0" style={{ borderBottom: `1px solid ${C.border}` }}>
                        <span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.accent }}>Value at Risk</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-1 p-2">
                        <span className="text-2xl font-bold font-mono" style={{ color: C.critical }}>{fmt(totalExposure)}</span>
                        <span className="text-[7px] uppercase" style={{ color: C.muted }}>Total Exposure (95% CI)</span>
                        <div className="w-full mt-2 space-y-1">
                            {[{ label: "Critical", val: criticalExposure, color: C.critical }, { label: "High", val: highExposure, color: C.high }, { label: "Medium", val: medExposure, color: C.medium }].map(b => (
                                <div key={b.label} className="flex items-center gap-1">
                                    <span className="text-[7px] w-10" style={{ color: C.muted }}>{b.label}</span>
                                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: C.border }}>
                                        <motion.div className="h-full rounded-full" style={{ background: b.color }} initial={{ width: 0 }} animate={{ width: `${totalExposure > 0 ? (b.val / totalExposure) * 100 : 0}%` }} transition={{ duration: 1 }} />
                                    </div>
                                    <span className="text-[7px] font-mono w-10 text-right" style={{ color: b.color }}>{fmt(b.val)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Connector Status */}
                <div className="shrink-0" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                    <div className="px-2 py-1" style={{ borderBottom: `1px solid ${C.border}` }}>
                        <span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.low }}>Data Sources</span>
                    </div>
                    <div className="p-1.5 space-y-1 text-[7px]">
                        {[
                            { name: "Risk Register", status: "active" },
                            { name: "Financial System", status: "active" },
                            { name: "Insurance Model", status: "active" },
                            { name: "Monte Carlo Sim", status: "running" },
                        ].map(c => (
                            <div key={c.name} className="flex items-center justify-between px-1">
                                <span style={{ color: C.text }}>{c.name}</span>
                                <span className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.status === "running" ? C.primary : C.low, animation: c.status === "running" ? "pulse 1s infinite" : "none" }} />
                                    <span style={{ color: c.status === "running" ? C.primary : C.low }}>{c.status}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ── PROCESS FLOWCHART ───────────────────────────────────────
const ProcessFlowchart = () => {
    const nodes = [
        { id: "req", x: 8, y: 45, label: "Purchase\nRequest", shape: "rect" },
        { id: "validate", x: 22, y: 25, label: "Auto\nValidation", shape: "diamond" },
        { id: "reject", x: 22, y: 75, label: "Rejected", shape: "reject" },
        { id: "approve", x: 38, y: 25, label: "Manager\nApproval", shape: "rect" },
        { id: "budget", x: 38, y: 55, label: "Budget\nCheck", shape: "diamond" },
        { id: "po", x: 54, y: 40, label: "Purchase\nOrder", shape: "rect" },
        { id: "receive", x: 68, y: 22, label: "Goods\nReceipt", shape: "rect" },
        { id: "invoice", x: 68, y: 60, label: "Invoice\nReconcile", shape: "rect" },
        { id: "match", x: 80, y: 40, label: "3-Way\nMatch", shape: "diamond" },
        { id: "exception", x: 80, y: 75, label: "Exception\nQueue", shape: "reject" },
        { id: "payment", x: 93, y: 40, label: "Payment", shape: "rect" },
    ];
    const arrows = [
        { from: "req", to: "validate", pct: "100%" }, { from: "validate", to: "approve", pct: "92%" },
        { from: "validate", to: "reject", pct: "8%", dim: true }, { from: "approve", to: "budget", pct: "96%" },
        { from: "budget", to: "po", pct: "89%" }, { from: "budget", to: "reject", pct: "11%", dim: true },
        { from: "po", to: "receive", pct: "99%" }, { from: "po", to: "invoice", pct: "99%" },
        { from: "receive", to: "match", pct: "95%" }, { from: "invoice", to: "match", pct: "93%" },
        { from: "match", to: "payment", pct: "87%" }, { from: "match", to: "exception", pct: "13%", dim: true },
    ];
    const getS = (id: string) => nodes.find(s => s.id === id)!;
    return (
        <div className="h-full flex flex-col overflow-hidden" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <div className="px-2 py-1 flex justify-between items-center shrink-0" style={{ borderBottom: `1px solid ${C.border}` }}>
                <span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.accent }}>Process: Procure to Pay</span>
                <span className="text-[7px]" style={{ color: C.low }}>11 NODES · 12 PATHS</span>
            </div>
            <div className="flex-1 relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <marker id="aa" markerWidth="4" markerHeight="3" refX="4" refY="1.5" orient="auto"><polygon points="0 0,4 1.5,0 3" fill={C.accent} opacity="0.8" /></marker>
                        <marker id="ad" markerWidth="4" markerHeight="3" refX="4" refY="1.5" orient="auto"><polygon points="0 0,4 1.5,0 3" fill={C.critical} opacity="0.5" /></marker>
                    </defs>
                    {arrows.map((a, i) => {
                        const f = getS(a.from), t = getS(a.to); const mx = (f.x + t.x) / 2, my = (f.y + t.y) / 2; return (
                            <g key={i}><motion.line x1={f.x} y1={f.y} x2={t.x} y2={t.y} stroke={a.dim ? C.critical : C.accent} strokeWidth="0.35" strokeOpacity={a.dim ? 0.4 : 0.7} strokeDasharray={a.dim ? "1 1" : "none"} markerEnd={a.dim ? "url(#ad)" : "url(#aa)"} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: i * 0.1 }} /><rect x={mx - 4} y={my - 2} width="8" height="3.5" rx="0.5" fill={C.bg} opacity={0.9} /><text x={mx} y={my + 0.5} textAnchor="middle" fontSize="2.2" fontFamily="monospace" fill={a.dim ? C.critical : C.accent} fontWeight="bold">{a.pct}</text></g>
                        );
                    })}
                    {nodes.map((n, i) => (
                        <motion.g key={n.id} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.05 + i * 0.07, type: "spring" }}>
                            {n.shape === "diamond" ? (
                                <rect x={n.x - 5} y={n.y - 5} width="10" height="10" rx="1" fill={C.panel} stroke={C.medium} strokeWidth="0.4" transform={`rotate(45 ${n.x} ${n.y})`} />
                            ) : n.shape === "reject" ? (
                                <rect x={n.x - 6} y={n.y - 5} width="12" height="10" rx="1.5" fill={C.panel} stroke={C.critical} strokeWidth="0.4" strokeDasharray="1 0.5" />
                            ) : (
                                <rect x={n.x - 6} y={n.y - 5} width="12" height="10" rx="1.5" fill={C.panel} stroke={C.primary} strokeWidth="0.4" />
                            )}
                            {n.label.split("\n").map((l, li) => (
                                <text key={li} x={n.x} y={n.y - 1 + li * 3} textAnchor="middle" fontSize="2" fontFamily="monospace" fill={n.shape === "reject" ? C.critical : C.text} opacity={0.8}>{l}</text>
                            ))}
                        </motion.g>
                    ))}
                </svg>
            </div>
        </div>
    );
};

// ── ANALYTICS ───────────────────────────────────────────────
const AnalyticsPanel = () => {
    const sparkData = [3, 5, 4, 7, 6, 8, 5, 9, 7, 6, 4, 5, 8, 7, 9, 6];
    return (
        <div className="h-full flex flex-col" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <div className="px-2 py-1 shrink-0" style={{ borderBottom: `1px solid ${C.border}` }}><span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.primary }}>Analytics</span></div>
            <div className="flex-1 grid grid-rows-2 gap-1 p-1.5">
                <div className="grid grid-cols-4 gap-1">
                    {[{ l: "MTTR", v: "4.2h", d: "-12%", g: true }, { l: "Open", v: "24", d: "+3", g: false }, { l: "Coverage", v: "91%", d: "+2%", g: true }, { l: "SLA", v: "96%", d: "+1%", g: true }].map(m => (
                        <div key={m.l} className="rounded-sm flex flex-col items-center justify-center p-0.5" style={{ background: `${C.border}25` }}>
                            <span className="text-[5px] uppercase" style={{ color: C.muted }}>{m.l}</span>
                            <span className="text-[10px] font-bold font-mono leading-none" style={{ color: C.text }}>{m.v}</span>
                            <span className="text-[5px] font-mono" style={{ color: m.g ? C.low : C.critical }}>{m.d}</span>
                        </div>
                    ))}
                </div>
                <div className="rounded-sm flex items-end gap-[2px] p-1.5 pt-1" style={{ background: `${C.border}15` }}>
                    {sparkData.map((v, i) => (<motion.div key={i} className="flex-1 rounded-t-sm" style={{ background: v > 7 ? C.critical : v > 5 ? C.medium : C.primary, opacity: 0.7 }} initial={{ height: 0 }} animate={{ height: `${(v / 10) * 100}%` }} transition={{ delay: i * 0.05, duration: 0.3 }} />))}
                </div>
            </div>
        </div>
    );
};

// ── CONNECTOR TABLE ─────────────────────────────────────────
const ConnectorTable = () => {
    const connectors = [{ name: "AWS", status: "active", findings: 12 }, { name: "Azure AD", status: "active", findings: 3 }, { name: "GitHub", status: "active", findings: 8 }, { name: "Okta", status: "active", findings: 5 }, { name: "Jira", status: "syncing", findings: 0 }, { name: "K8s", status: "active", findings: 14 }];
    return (
        <div className="h-full flex flex-col overflow-hidden" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
            <div className="px-2 py-1 flex justify-between items-center shrink-0" style={{ borderBottom: `1px solid ${C.border}` }}>
                <span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.secondary }}>Connectors</span><span className="text-[7px] font-mono" style={{ color: C.low }}>5/6</span>
            </div>
            <div className="flex-1 overflow-y-auto">
                <table className="w-full text-[7px]"><tbody>
                    {connectors.map(c => (<tr key={c.name} style={{ borderBottom: `1px solid ${C.border}15` }}>
                        <td className="px-1.5 py-[2px]" style={{ color: C.text }}>{c.name}</td>
                        <td className="px-1 py-[2px] text-center"><span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: c.status === "active" ? C.low : C.primary }} /></td>
                        <td className="px-1.5 py-[2px] text-right font-mono" style={{ color: c.findings > 10 ? C.high : C.text }}>{c.findings}</td>
                    </tr>))}
                </tbody></table>
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════════════════
// TAB VIEWS
// ═══════════════════════════════════════════════════════════

const Tab1 = ({ events }: { events: ThreatEvent[] }) => (
    <div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-[2px] min-h-0 overflow-hidden">
        <div className="col-span-2 row-span-2"><RiskLandscape /></div>
        <div className="col-span-1 row-span-1"><ThreatMonitor events={events} /></div>
        <div className="col-span-1 row-span-1"><RiskMatrix /></div>
        <div className="col-span-1 row-span-1"><ConnectorTable /></div>
        <div className="col-span-1 row-span-1"><AnalyticsPanel /></div>
    </div>
);

const Tab2 = () => (
    <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-[2px] min-h-0 overflow-hidden">
        <div className="col-span-2 row-span-2"><ProcessFlowchart /></div>
        <div className="col-span-1 row-span-1"><AnalyticsPanel /></div>
        <div className="col-span-1 row-span-1">
            <div className="h-full flex flex-col" style={{ background: C.panel, border: `1px solid ${C.border}` }}>
                <div className="px-2 py-1 shrink-0" style={{ borderBottom: `1px solid ${C.border}` }}><span className="font-bold text-[9px] uppercase tracking-widest" style={{ color: C.low }}>Compliance</span></div>
                <div className="flex-1 grid grid-cols-2 gap-1 p-1.5">
                    {[{ n: "SOC 2", s: 94 }, { n: "ISO", s: 89 }, { n: "NIST", s: 91 }, { n: "GDPR", s: 97 }].map(f => (
                        <div key={f.n} className="rounded-sm flex flex-col items-center justify-center" style={{ background: `${C.border}30` }}>
                            <span className="text-[6px] uppercase" style={{ color: C.muted }}>{f.n}</span>
                            <span className="text-sm font-bold font-mono leading-none" style={{ color: f.s >= 90 ? C.low : C.medium }}>{f.s}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Tab3 = ({ events }: { events: ThreatEvent[] }) => (
    <div className="w-full h-full"><RiskRegisterSheet events={events} /></div>
);

const Tab4 = ({ events }: { events: ThreatEvent[] }) => (
    <div className="w-full h-full"><QuantificationView events={events} /></div>
);

// ═══════════════════════════════════════════════════════════
// MAIN TERMINAL
// ═══════════════════════════════════════════════════════════

const tabDefs = [
    { label: "Risk Overview", shortcut: "RISK" },
    { label: "Process Mgmt", shortcut: "CTRL" },
    { label: "Risk Register", shortcut: "AUDIT" },
    { label: "Quantification", shortcut: "QUANT" },
];

const cmdToTab: Record<string, number> = {
    RISK: 0, GRAPH: 0, CTRL: 1, COMPLY: 1, AUDIT: 2, SCAN: 2, QUANT: 3, SYNC: 3,
};

const EnterpriseDashboard = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [clock, setClock] = useState(new Date().toLocaleTimeString());
    const [cycleKey, setCycleKey] = useState(0);
    const events = useSharedThreatFeed();

    useEffect(() => {
        const t = setInterval(() => setClock(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(t);
    }, []);

    const switchTab = (idx: number) => {
        setActiveTab(idx);
        setCycleKey(k => k + 1);
    };

    const handleCommand = (cmd: string) => {
        const tab = cmdToTab[cmd];
        if (tab !== undefined) switchTab(tab);
    };

    return (
        <div className="w-full h-full flex flex-col font-mono overflow-hidden" style={{ background: C.bg, color: C.text }}>
            <CommandBar onCommand={handleCommand} />

            <header className="flex items-center justify-between px-2 py-[2px] shrink-0" style={{ background: C.panel, borderBottom: `1px solid ${C.border}` }}>
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 shrink-0" style={{ background: C.primary }} />
                    <span className="text-[8px] font-bold tracking-[0.15em] shrink-0" style={{ color: C.primary }}>EQ</span>
                    <span className="mx-1 text-[6px]" style={{ color: C.border }}>|</span>
                    {tabDefs.map((tab, i) => (
                        <button key={tab.label} onClick={() => switchTab(i)} className="text-[7px] px-1.5 py-0.5 transition-all relative rounded-sm" style={{ color: activeTab === i ? C.primary : C.muted, background: activeTab === i ? `${C.primary}10` : "transparent" }}>
                            {tab.label}
                            {activeTab === i && <motion.div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: C.primary, transformOrigin: "left" }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 4, ease: "linear" }} key={`p-${cycleKey}`} />}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-[7px]" style={{ color: C.muted }}>
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full" style={{ background: C.low }} /><span style={{ color: C.low }}>ONLINE</span></span>
                    <span className="font-mono tabular-nums">{clock}</span>
                </div>
            </header>

            <div className="flex-1 p-[2px] min-h-0 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -3 }} transition={{ duration: 0.25 }} className="w-full h-full">
                        {activeTab === 0 && <Tab1 events={events} />}
                        {activeTab === 1 && <Tab2 />}
                        {activeTab === 2 && <Tab3 events={events} />}
                        {activeTab === 3 && <Tab4 events={events} />}
                    </motion.div>
                </AnimatePresence>
            </div>

            <footer className="flex items-center justify-between px-2 shrink-0 text-[6px]" style={{ background: C.panel, borderTop: `1px solid ${C.border}`, color: C.muted, height: '14px' }}>
                <span>ADMIN@PROD</span>
                <div className="flex gap-3">
                    <span>RISKS: {events.length}</span>
                    <span>CTRLS: 134/148</span>
                    <span style={{ color: C.low }}>AES-256</span>
                </div>
            </footer>
        </div>
    );
};

export default EnterpriseDashboard;
