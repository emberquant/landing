import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Share2, Linkedin, Twitter } from "lucide-react";
import { getPostBySlug, blogPosts, BlogSection } from "../data/blogData";

// ── SVG DIAGRAM COMPONENTS ──────────────────────────────────

const DiagramWrapper = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="my-8 rounded-xl border border-border bg-card p-6">
        <p className="text-[10px] font-body font-semibold text-primary tracking-widest uppercase mb-4">{title}</p>
        {children}
    </div>
);

const RiskMaturityDiagram = () => (
    <DiagramWrapper title="AI Governance Maturity Model">
        <svg viewBox="0 0 680 200" className="w-full" style={{ maxHeight: 220 }}>
            {/* Three tiers */}
            {[
                { x: 20, w: 200, label: "Level 1: Reactive", color: "#ef4444", items: ["Ad-hoc reviews", "No model registry", "Incident-triggered"], opacity: 0.15 },
                { x: 240, w: 200, label: "Level 2: Structured", color: "#eab308", items: ["Formal policies", "MRM team", "Bias testing in CI/CD"], opacity: 0.15 },
                { x: 460, w: 200, label: "Level 3: Embedded", color: "#22c55e", items: ["Platform-layer governance", "Automated enforcement", "Real-time monitoring"], opacity: 0.15 },
            ].map((tier, i) => (
                <g key={i}>
                    <rect x={tier.x} y={20} width={tier.w} height={160} rx={8} fill={tier.color} opacity={tier.opacity} stroke={tier.color} strokeWidth={1.5} strokeOpacity={0.4} />
                    <text x={tier.x + tier.w / 2} y={46} textAnchor="middle" fontSize={12} fontWeight={700} fill={tier.color} fontFamily="system-ui">{tier.label}</text>
                    {tier.items.map((item, j) => (
                        <text key={j} x={tier.x + tier.w / 2} y={76 + j * 24} textAnchor="middle" fontSize={10} fill="#94a3b8" fontFamily="system-ui">{item}</text>
                    ))}
                    {i < 2 && (
                        <g>
                            <line x1={tier.x + tier.w + 4} y1={100} x2={tier.x + tier.w + 36} y2={100} stroke="#4a5568" strokeWidth={1.5} markerEnd="url(#arrowBlog)" />
                        </g>
                    )}
                </g>
            ))}
            <defs><marker id="arrowBlog" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#4a5568" /></marker></defs>
            {/* Progress bar */}
            <text x={340} y={195} textAnchor="middle" fontSize={9} fill="#64748b" fontFamily="system-ui">Most enterprises ← — — — → Competitive moat</text>
        </svg>
    </DiagramWrapper>
);

const AIGovernanceLayersDiagram = () => (
    <DiagramWrapper title="AI Governance Architecture">
        <svg viewBox="0 0 600 240" className="w-full" style={{ maxHeight: 260 }}>
            {[
                { y: 10, label: "Board & Executive Oversight", color: "#00A8F3", desc: "Risk appetite • AI policy • Accountability" },
                { y: 65, label: "Governance Framework", color: "#8FAADC", desc: "Model inventory • Classification • Review workflows" },
                { y: 120, label: "Policy Enforcement Layer", color: "#2040b0", desc: "Automated gates • Bias checks • Compliance validation" },
                { y: 175, label: "Platform & Infrastructure", color: "#1a2540", desc: "Monitoring • Drift detection • Audit logging • CI/CD integration" },
            ].map((layer, i) => (
                <g key={i}>
                    <rect x={30} y={layer.y} width={540} height={45} rx={6} fill={layer.color} opacity={0.12} stroke={layer.color} strokeWidth={1.2} strokeOpacity={0.5} />
                    <text x={50} y={layer.y + 20} fontSize={11} fontWeight={700} fill={layer.color} fontFamily="system-ui">{layer.label}</text>
                    <text x={50} y={layer.y + 36} fontSize={9} fill="#94a3b8" fontFamily="system-ui">{layer.desc}</text>
                </g>
            ))}
            {[55, 110, 165].map((y, i) => (
                <line key={i} x1={300} y1={y} x2={300} y2={y + 10} stroke="#4a5568" strokeWidth={1} strokeDasharray="3 2" />
            ))}
        </svg>
    </DiagramWrapper>
);

const RiskRegisterEvolutionDiagram = () => (
    <DiagramWrapper title="Evolution: From Static Registers to Risk Intelligence">
        <svg viewBox="0 0 700 180" className="w-full" style={{ maxHeight: 200 }}>
            {[
                { x: 20, label: "Static Register", items: ["Quarterly updates", "Spreadsheet-based", "Siloed risks", "Subjective scores"], color: "#ef4444" },
                { x: 190, label: "Managed Register", items: ["Monthly updates", "GRC platform", "Some linkages", "Calibrated scores"], color: "#f97316" },
                { x: 360, label: "Dynamic Register", items: ["Weekly updates", "Integrated data", "Risk graph", "Quantitative models"], color: "#eab308" },
                { x: 530, label: "Risk Intelligence", items: ["Continuous", "AI-powered", "Predictive", "Prescriptive"], color: "#22c55e" },
            ].map((stage, i) => (
                <g key={i}>
                    <rect x={stage.x} y={15} width={150} height={140} rx={6} fill={stage.color} opacity={0.1} stroke={stage.color} strokeWidth={1} strokeOpacity={0.4} />
                    <text x={stage.x + 75} y={38} textAnchor="middle" fontSize={11} fontWeight={700} fill={stage.color} fontFamily="system-ui">{stage.label}</text>
                    {stage.items.map((item, j) => (
                        <text key={j} x={stage.x + 75} y={62 + j * 22} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui">{item}</text>
                    ))}
                    {i < 3 && <line x1={stage.x + 155} y1={85} x2={stage.x + 185} y2={85} stroke="#4a5568" strokeWidth={1.5} markerEnd="url(#arrowBlog)" />}
                </g>
            ))}
        </svg>
    </DiagramWrapper>
);

const EUAIActTimelineDiagram = () => (
    <DiagramWrapper title="EU AI Act Risk Classification Tiers">
        <svg viewBox="0 0 600 220" className="w-full" style={{ maxHeight: 240 }}>
            {/* Pyramid */}
            {[
                { y: 10, w: 140, label: "Unacceptable", sub: "Prohibited", color: "#ef4444" },
                { y: 60, w: 260, label: "High Risk", sub: "Full compliance required", color: "#f97316" },
                { y: 110, w: 380, label: "Limited Risk", sub: "Transparency obligations", color: "#eab308" },
                { y: 160, w: 500, label: "Minimal Risk", sub: "No specific obligations", color: "#22c55e" },
            ].map((tier, i) => (
                <g key={i}>
                    <rect x={(600 - tier.w) / 2} y={tier.y} width={tier.w} height={40} rx={4} fill={tier.color} opacity={0.12} stroke={tier.color} strokeWidth={1.2} strokeOpacity={0.5} />
                    <text x={300} y={tier.y + 18} textAnchor="middle" fontSize={11} fontWeight={700} fill={tier.color} fontFamily="system-ui">{tier.label}</text>
                    <text x={300} y={tier.y + 33} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui">{tier.sub}</text>
                </g>
            ))}
            <text x={300} y={215} textAnchor="middle" fontSize={9} fill="#64748b" fontFamily="system-ui">Penalties: up to €35M / 7% global turnover → €15M / 3% → €7.5M / 1.5%</text>
        </svg>
    </DiagramWrapper>
);

const COSOERMCubeDiagram = () => (
    <DiagramWrapper title="COSO ERM Framework — ML Extensions">
        <svg viewBox="0 0 650 220" className="w-full" style={{ maxHeight: 240 }}>
            {[
                { x: 10, label: "Governance\n& Culture", ext: "+ ML roles\n+ AI ethics", color: "#00A8F3" },
                { x: 140, label: "Strategy &\nObjectives", ext: "+ ML risk\nappetite", color: "#8FAADC" },
                { x: 270, label: "Performance", ext: "+ Fairness\n+ Drift metrics", color: "#2040b0" },
                { x: 400, label: "Review &\nRevision", ext: "+ Continuous\nmonitoring", color: "#f97316" },
                { x: 530, label: "Information\n& Reporting", ext: "+ ML dashboards\n+ Board AI risk", color: "#eab308" },
            ].map((c, i) => (
                <g key={i}>
                    <rect x={c.x} y={15} width={115} height={80} rx={6} fill={c.color} opacity={0.12} stroke={c.color} strokeWidth={1.2} strokeOpacity={0.5} />
                    {c.label.split("\n").map((l, j) => (
                        <text key={j} x={c.x + 57} y={40 + j * 14} textAnchor="middle" fontSize={10} fontWeight={700} fill={c.color} fontFamily="system-ui">{l}</text>
                    ))}
                    <rect x={c.x} y={105} width={115} height={55} rx={6} fill="#22c55e" opacity={0.08} stroke="#22c55e" strokeWidth={1} strokeOpacity={0.3} />
                    {c.ext.split("\n").map((l, j) => (
                        <text key={j} x={c.x + 57} y={126 + j * 14} textAnchor="middle" fontSize={9} fill="#22c55e" fontFamily="system-ui">{l}</text>
                    ))}
                    <line x1={c.x + 57} y1={95} x2={c.x + 57} y2={105} stroke="#4a5568" strokeWidth={1} strokeDasharray="3 2" />
                </g>
            ))}
            <text x={325} y={180} textAnchor="middle" fontSize={9} fill="#22c55e" fontFamily="system-ui" fontWeight={600}>▲ ML-SPECIFIC EXTENSIONS</text>
            <text x={325} y={200} textAnchor="middle" fontSize={9} fill="#64748b" fontFamily="system-ui">Original COSO ERM (top) + Machine Learning adaptations (bottom)</text>
        </svg>
    </DiagramWrapper>
);

const LLMRiskTaxonomyDiagram = () => (
    <DiagramWrapper title="LLM Operational Risk Taxonomy">
        <svg viewBox="0 0 660 230" className="w-full" style={{ maxHeight: 250 }}>
            {/* Center node */}
            <circle cx={330} cy={115} r={35} fill="#00A8F3" opacity={0.15} stroke="#00A8F3" strokeWidth={1.5} />
            <text x={330} y={112} textAnchor="middle" fontSize={10} fontWeight={700} fill="#00A8F3" fontFamily="system-ui">LLM</text>
            <text x={330} y={125} textAnchor="middle" fontSize={8} fill="#94a3b8" fontFamily="system-ui">Operations</text>
            {/* Risk nodes */}
            {[
                { x: 110, y: 40, label: "Hallucination", color: "#ef4444" },
                { x: 110, y: 115, label: "Data Leakage", color: "#f97316" },
                { x: 110, y: 190, label: "Prompt Injection", color: "#eab308" },
                { x: 550, y: 40, label: "Emergent Behavior", color: "#ef4444" },
                { x: 550, y: 115, label: "Dependency Risk", color: "#f97316" },
                { x: 550, y: 190, label: "Compliance Drift", color: "#eab308" },
            ].map((n, i) => (
                <g key={i}>
                    <rect x={n.x - 60} y={n.y - 16} width={120} height={32} rx={4} fill={n.color} opacity={0.1} stroke={n.color} strokeWidth={1} strokeOpacity={0.4} />
                    <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={10} fontWeight={600} fill={n.color} fontFamily="system-ui">{n.label}</text>
                    <line x1={i < 3 ? n.x + 60 : n.x - 60} y1={n.y} x2={i < 3 ? 295 : 365} y2={115} stroke={n.color} strokeWidth={0.8} strokeOpacity={0.3} />
                </g>
            ))}
        </svg>
    </DiagramWrapper>
);

const HIPAAAutomationDiagram = () => (
    <DiagramWrapper title="HIPAA Compliance Automation Architecture">
        <svg viewBox="0 0 700 200" className="w-full" style={{ maxHeight: 220 }}>
            {[
                { x: 20, y: 80, label: "Data Sources", items: ["EHR", "IAM", "Cloud", "Devices"], color: "#8FAADC" },
                { x: 180, y: 80, label: "API\nConnectors", items: [], color: "#00A8F3" },
                { x: 310, y: 80, label: "Evidence\nCollection", items: [], color: "#2040b0" },
                { x: 440, y: 80, label: "Control\nTesting", items: ["240/300 auto"], color: "#eab308" },
                { x: 570, y: 80, label: "Gap Analysis\n& Reporting", items: [], color: "#22c55e" },
            ].map((s, i) => (
                <g key={i}>
                    <rect x={s.x} y={s.y - 30} width={120} height={60} rx={6} fill={s.color} opacity={0.12} stroke={s.color} strokeWidth={1} strokeOpacity={0.4} />
                    {s.label.split("\n").map((l, j) => (
                        <text key={j} x={s.x + 60} y={s.y - 8 + j * 14} textAnchor="middle" fontSize={10} fontWeight={700} fill={s.color} fontFamily="system-ui">{l}</text>
                    ))}
                    {s.items.map((item, j) => (
                        <text key={j} x={s.x + 60} y={s.y + 15 + j * 12} textAnchor="middle" fontSize={8} fill="#94a3b8" fontFamily="system-ui">{item}</text>
                    ))}
                    {i < 4 && <line x1={s.x + 124} y1={s.y} x2={[180, 310, 440, 570][i] - 4} y2={s.y} stroke="#4a5568" strokeWidth={1.5} markerEnd="url(#arrowBlog)" />}
                </g>
            ))}
            {/* Results bars */}
            <text x={350} y={160} textAnchor="middle" fontSize={9} fill="#64748b" fontFamily="system-ui">14 weeks → 3 weeks | 6,400 hrs → 1,800 hrs | 65% → 92% coverage</text>
            <rect x={150} y={170} width={400} height={8} rx={4} fill="#1a2540" />
            <rect x={150} y={170} width={312} height={8} rx={4} fill="#22c55e" opacity={0.6} />
            <text x={350} y={192} textAnchor="middle" fontSize={8} fill="#22c55e" fontFamily="system-ui">78% reduction in assessment cycle time</text>
        </svg>
    </DiagramWrapper>
);

const ShadowAIFlowDiagram = () => (
    <DiagramWrapper title="Shadow AI Entry Points in the Enterprise">
        <svg viewBox="0 0 680 200" className="w-full" style={{ maxHeight: 220 }}>
            {/* Entry points */}
            {[
                { x: 40, y: 50, label: "Individual", sub: "ChatGPT, Copilot", color: "#ef4444" },
                { x: 40, y: 110, label: "Team SaaS", sub: "AI-powered tools", color: "#f97316" },
                { x: 40, y: 170, label: "API Integration", sub: "Dev-initiated", color: "#eab308" },
            ].map((e, i) => (
                <g key={i}>
                    <rect x={e.x} y={e.y - 18} width={130} height={36} rx={4} fill={e.color} opacity={0.12} stroke={e.color} strokeWidth={1} strokeOpacity={0.4} />
                    <text x={e.x + 65} y={e.y - 2} textAnchor="middle" fontSize={10} fontWeight={600} fill={e.color} fontFamily="system-ui">{e.label}</text>
                    <text x={e.x + 65} y={e.y + 12} textAnchor="middle" fontSize={8} fill="#94a3b8" fontFamily="system-ui">{e.sub}</text>
                    <line x1={175} y1={e.y} x2={230} y2={110} stroke={e.color} strokeWidth={0.8} strokeOpacity={0.4} />
                </g>
            ))}
            {/* Center: bypass */}
            <rect x={230} y={85} width={100} height={50} rx={6} fill="#ef4444" opacity={0.08} stroke="#ef4444" strokeWidth={1.5} strokeDasharray="4 2" />
            <text x={280} y={107} textAnchor="middle" fontSize={10} fontWeight={700} fill="#ef4444" fontFamily="system-ui">Bypasses</text>
            <text x={280} y={122} textAnchor="middle" fontSize={8} fill="#94a3b8" fontFamily="system-ui">Security Review</text>
            {/* Risks */}
            <line x1={334} y1={110} x2={390} y2={110} stroke="#ef4444" strokeWidth={1.5} markerEnd="url(#arrowBlog)" />
            {[
                { y: 40, label: "Data Exfiltration" },
                { y: 80, label: "Compliance Violations" },
                { y: 120, label: "IP Exposure" },
                { y: 160, label: "Unvalidated Outputs" },
            ].map((r, i) => (
                <g key={i}>
                    <rect x={390} y={r.y - 14} width={140} height={28} rx={4} fill="#ef4444" opacity={0.08} stroke="#ef4444" strokeWidth={0.8} strokeOpacity={0.3} />
                    <text x={460} y={r.y + 4} textAnchor="middle" fontSize={9} fill="#ef4444" fontFamily="system-ui">{r.label}</text>
                </g>
            ))}
            {/* Solution */}
            <line x1={534} y1={110} x2={560} y2={110} stroke="#22c55e" strokeWidth={1.5} markerEnd="url(#arrowBlog)" />
            <rect x={560} y={72} width={100} height={76} rx={6} fill="#22c55e" opacity={0.1} stroke="#22c55e" strokeWidth={1} strokeOpacity={0.4} />
            <text x={610} y={95} textAnchor="middle" fontSize={9} fontWeight={700} fill="#22c55e" fontFamily="system-ui">Shadow AI</text>
            <text x={610} y={108} textAnchor="middle" fontSize={9} fontWeight={700} fill="#22c55e" fontFamily="system-ui">Program</text>
            <text x={610} y={125} textAnchor="middle" fontSize={8} fill="#94a3b8" fontFamily="system-ui">Discover</text>
            <text x={610} y={137} textAnchor="middle" fontSize={8} fill="#94a3b8" fontFamily="system-ui">Assess • Govern</text>
        </svg>
    </DiagramWrapper>
);

const LivingRegisterDiagram = () => (
    <DiagramWrapper title="Living Risk Register Architecture">
        <svg viewBox="0 0 700 220" className="w-full" style={{ maxHeight: 240 }}>
            {/* Agent layer - top */}
            {[
                { x: 50, label: "Discovery\nAgent", color: "#00A8F3" },
                { x: 210, label: "Assessment\nAgent", color: "#8FAADC" },
                { x: 370, label: "Correlation\nAgent", color: "#2040b0" },
                { x: 530, label: "Recommendation\nAgent", color: "#22c55e" },
            ].map((a, i) => (
                <g key={i}>
                    <rect x={a.x} y={10} width={120} height={50} rx={6} fill={a.color} opacity={0.12} stroke={a.color} strokeWidth={1} strokeOpacity={0.4} />
                    {a.label.split("\n").map((l, j) => (
                        <text key={j} x={a.x + 60} y={30 + j * 14} textAnchor="middle" fontSize={10} fontWeight={600} fill={a.color} fontFamily="system-ui">{l}</text>
                    ))}
                    <line x1={a.x + 60} y1={60} x2={a.x + 60} y2={80} stroke="#4a5568" strokeWidth={1} strokeDasharray="3 2" />
                </g>
            ))}
            {/* Central graph database */}
            <rect x={150} y={80} width={400} height={50} rx={8} fill="#00A8F3" opacity={0.08} stroke="#00A8F3" strokeWidth={1.5} />
            <text x={350} y={105} textAnchor="middle" fontSize={12} fontWeight={700} fill="#00A8F3" fontFamily="system-ui">Knowledge Graph Database</text>
            <text x={350} y={120} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui">Risks • Controls • Assets • Regulations • Relationships</text>
            {/* Data sources - bottom */}
            {[
                { x: 50, label: "SIEM" }, { x: 170, label: "Vuln Scanner" }, { x: 290, label: "Compliance" },
                { x: 410, label: "Vendor Risk" }, { x: 530, label: "Reg. Updates" },
            ].map((s, i) => (
                <g key={i}>
                    <rect x={s.x} y={165} width={100} height={32} rx={4} fill="#1a2540" stroke="#1a2540" strokeWidth={1} />
                    <text x={s.x + 50} y={185} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui">{s.label}</text>
                    <line x1={s.x + 50} y1={165} x2={s.x + 50} y2={130} stroke="#4a5568" strokeWidth={1} markerEnd="url(#arrowBlog)" />
                </g>
            ))}
        </svg>
    </DiagramWrapper>
);

const TPRMAPIDiagram = () => (
    <DiagramWrapper title="API-Era Third-Party Risk Management">
        <svg viewBox="0 0 660 200" className="w-full" style={{ maxHeight: 220 }}>
            {/* Enterprise */}
            <rect x={20} y={60} width={140} height={80} rx={8} fill="#00A8F3" opacity={0.1} stroke="#00A8F3" strokeWidth={1.5} />
            <text x={90} y={90} textAnchor="middle" fontSize={11} fontWeight={700} fill="#00A8F3" fontFamily="system-ui">Enterprise</text>
            <text x={90} y={108} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui">350+ API</text>
            <text x={90} y={120} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui">integrations</text>
            {/* API Gateway */}
            <rect x={210} y={70} width={100} height={60} rx={6} fill="#eab308" opacity={0.12} stroke="#eab308" strokeWidth={1} />
            <text x={260} y={96} textAnchor="middle" fontSize={10} fontWeight={700} fill="#eab308" fontFamily="system-ui">API Gateway</text>
            <text x={260} y={112} textAnchor="middle" fontSize={8} fill="#94a3b8" fontFamily="system-ui">Monitoring layer</text>
            <line x1={164} y1={100} x2={206} y2={100} stroke="#4a5568" strokeWidth={1.5} markerEnd="url(#arrowBlog)" />
            {/* Third parties */}
            {[
                { y: 30, label: "SaaS Provider" },
                { y: 80, label: "Cloud APIs" },
                { y: 130, label: "Data Vendors" },
                { y: 170, label: "Their deps..." },
            ].map((t, i) => (
                <g key={i}>
                    <rect x={370} y={t.y} width={110} height={28} rx={4} fill={i === 3 ? "#ef4444" : "#f97316"} opacity={0.1} stroke={i === 3 ? "#ef4444" : "#f97316"} strokeWidth={0.8} />
                    <text x={425} y={t.y + 18} textAnchor="middle" fontSize={9} fill={i === 3 ? "#ef4444" : "#f97316"} fontFamily="system-ui">{t.label}</text>
                    <line x1={314} y1={100} x2={366} y2={t.y + 14} stroke="#4a5568" strokeWidth={0.8} strokeOpacity={0.4} />
                </g>
            ))}
            {/* New TPRM */}
            <rect x={530} y={50} width={110} height={100} rx={6} fill="#22c55e" opacity={0.1} stroke="#22c55e" strokeWidth={1} />
            <text x={585} y={75} textAnchor="middle" fontSize={10} fontWeight={700} fill="#22c55e" fontFamily="system-ui">Modern TPRM</text>
            {["Continuous monitoring", "Runtime classification", "Dependency mapping", "Auto compliance"].map((l, i) => (
                <text key={i} x={585} y={92 + i * 12} textAnchor="middle" fontSize={7.5} fill="#94a3b8" fontFamily="system-ui">{l}</text>
            ))}
        </svg>
    </DiagramWrapper>
);

const ISO42001PDCADiagram = () => (
    <DiagramWrapper title="ISO 42001 Plan-Do-Check-Act Cycle">
        <svg viewBox="0 0 500 300" className="w-full" style={{ maxHeight: 320 }}>
            {/* Four quadrants */}
            {[
                { x: 70, y: 50, label: "PLAN", items: ["AI impact assessment", "Risk & opportunity ID", "Set objectives"], color: "#00A8F3" },
                { x: 280, y: 50, label: "DO", items: ["Lifecycle processes", "Data management", "Model development"], color: "#22c55e" },
                { x: 280, y: 180, label: "CHECK", items: ["Monitor & measure", "Internal audits", "Management review"], color: "#eab308" },
                { x: 70, y: 180, label: "ACT", items: ["Corrective actions", "Continual improvement", "Update AIMS"], color: "#f97316" },
            ].map((q, i) => (
                <g key={i}>
                    <rect x={q.x} y={q.y} width={150} height={100} rx={8} fill={q.color} opacity={0.1} stroke={q.color} strokeWidth={1.2} />
                    <text x={q.x + 75} y={q.y + 22} textAnchor="middle" fontSize={13} fontWeight={700} fill={q.color} fontFamily="system-ui">{q.label}</text>
                    {q.items.map((item, j) => (
                        <text key={j} x={q.x + 75} y={q.y + 42 + j * 16} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui">{item}</text>
                    ))}
                </g>
            ))}
            {/* Arrows */}
            <line x1={224} y1={80} x2={276} y2={80} stroke="#4a5568" strokeWidth={1.5} markerEnd="url(#arrowBlog)" />
            <line x1={355} y1={154} x2={355} y2={176} stroke="#4a5568" strokeWidth={1.5} markerEnd="url(#arrowBlog)" />
            <line x1={276} y1={230} x2={224} y2={230} stroke="#4a5568" strokeWidth={1.5} markerEnd="url(#arrowBlog)" />
            <line x1={145} y1={176} x2={145} y2={154} stroke="#4a5568" strokeWidth={1.5} markerEnd="url(#arrowBlog)" />
        </svg>
    </DiagramWrapper>
);

const DOROPillarsDiagram = () => (
    <DiagramWrapper title="DORA: Five Pillars of Digital Operational Resilience">
        <svg viewBox="0 0 700 180" className="w-full" style={{ maxHeight: 200 }}>
            {[
                { x: 15, label: "ICT Risk\nManagement", color: "#00A8F3" },
                { x: 155, label: "Incident\nReporting", color: "#ef4444" },
                { x: 295, label: "Resilience\nTesting", color: "#eab308" },
                { x: 435, label: "Third-Party\nRisk Mgmt", color: "#f97316" },
                { x: 575, label: "Information\nSharing", color: "#22c55e" },
            ].map((p, i) => (
                <g key={i}>
                    <rect x={p.x} y={20} width={120} height={70} rx={8} fill={p.color} opacity={0.12} stroke={p.color} strokeWidth={1.2} strokeOpacity={0.5} />
                    {p.label.split("\n").map((l, j) => (
                        <text key={j} x={p.x + 60} y={50 + j * 15} textAnchor="middle" fontSize={11} fontWeight={700} fill={p.color} fontFamily="system-ui">{l}</text>
                    ))}
                    <text x={p.x + 60} y={110} textAnchor="middle" fontSize={12} fontWeight={700} fill={p.color} fontFamily="system-ui">Pillar {i + 1}</text>
                </g>
            ))}
            {/* Base bar */}
            <rect x={15} y={130} width={680} height={30} rx={6} fill="#1a2540" />
            <text x={350} y={150} textAnchor="middle" fontSize={10} fill="#94a3b8" fontFamily="system-ui">Applies to: Banks · Insurance · Investment Firms · Crypto Providers · ICT Third-Party Providers</text>
        </svg>
    </DiagramWrapper>
);

const PIILifecycleDiagram = () => (
    <DiagramWrapper title="PII in LLMs: Challenge vs. Mitigation Strategy">
        <svg viewBox="0 0 700 180" className="w-full" style={{ maxHeight: 200 }}>
            {/* Two rows */}
            <text x={15} y={18} fontSize={9} fontWeight={700} fill="#ef4444" fontFamily="system-ui">CHALLENGES</text>
            <text x={15} y={118} fontSize={9} fontWeight={700} fill="#22c55e" fontFamily="system-ui">MITIGATIONS</text>
            {[
                { x: 15, labels: ["Detection", "Isolation", "Deletion"], colors: "#ef4444" },
            ].map((row) => row.labels.map((l, i) => (
                <g key={l}>
                    <rect x={row.x + i * 230} y={28} width={210} height={35} rx={4} fill={row.colors} opacity={0.1} stroke={row.colors} strokeWidth={1} />
                    <text x={row.x + i * 230 + 105} y={50} textAnchor="middle" fontSize={10} fontWeight={600} fill={row.colors} fontFamily="system-ui">{l}</text>
                </g>
            )))}
            {[
                { x: 15, labels: ["Pre-training PII scrubbing", "Output filtering", "RAG architecture"], colors: "#22c55e" },
            ].map((row) => row.labels.map((l, i) => (
                <g key={l}>
                    <rect x={row.x + i * 230} y={128} width={210} height={35} rx={4} fill={row.colors} opacity={0.1} stroke={row.colors} strokeWidth={1} />
                    <text x={row.x + i * 230 + 105} y={150} textAnchor="middle" fontSize={10} fontWeight={600} fill={row.colors} fontFamily="system-ui">{l}</text>
                </g>
            )))}
            {/* Arrows connecting */}
            {[0, 1, 2].map(i => (
                <line key={i} x1={15 + i * 230 + 105} y1={63} x2={15 + i * 230 + 105} y2={128} stroke="#4a5568" strokeWidth={1} strokeDasharray="3 2" />
            ))}
        </svg>
    </DiagramWrapper>
);

const BankClassificationDiagram = () => (
    <DiagramWrapper title="Four-Tier AI Risk Classification Framework">
        <svg viewBox="0 0 660 200" className="w-full" style={{ maxHeight: 220 }}>
            {[
                { x: 10, label: "Tier 1: Critical", sub: "Credit, Fraud, Trading", review: "Full validation + annual", color: "#ef4444", time: "6 months" },
                { x: 175, label: "Tier 2: High", sub: "Segmentation, Forecasting", review: "Focused + semi-annual", color: "#f97316", time: "3 months" },
                { x: 340, label: "Tier 3: Moderate", sub: "Doc classification, Search", review: "Streamlined + annual", color: "#eab308", time: "6 weeks" },
                { x: 505, label: "Tier 4: Low", sub: "IT chatbots, Scheduling", review: "Automated + self-attest", color: "#22c55e", time: "2 weeks" },
            ].map((t, i) => (
                <g key={i}>
                    <rect x={t.x} y={15} width={150} height={130} rx={6} fill={t.color} opacity={0.1} stroke={t.color} strokeWidth={1.2} />
                    <text x={t.x + 75} y={38} textAnchor="middle" fontSize={10} fontWeight={700} fill={t.color} fontFamily="system-ui">{t.label}</text>
                    <text x={t.x + 75} y={56} textAnchor="middle" fontSize={8} fill="#94a3b8" fontFamily="system-ui">{t.sub}</text>
                    <line x1={t.x + 10} y1={68} x2={t.x + 140} y2={68} stroke={t.color} strokeWidth={0.5} strokeOpacity={0.3} />
                    <text x={t.x + 75} y={86} textAnchor="middle" fontSize={8} fill="#94a3b8" fontFamily="system-ui">{t.review}</text>
                    <text x={t.x + 75} y={115} textAnchor="middle" fontSize={14} fontWeight={700} fill={t.color} fontFamily="system-ui">{t.time}</text>
                    <text x={t.x + 75} y={132} textAnchor="middle" fontSize={7} fill="#94a3b8" fontFamily="system-ui">avg review time</text>
                </g>
            ))}
            <text x={330} y={168} textAnchor="middle" fontSize={9} fill="#64748b" fontFamily="system-ui">Overall result: 9 months → 3.6 months average (60% reduction)</text>
            <rect x={130} y={176} width={400} height={6} rx={3} fill="#1a2540" />
            <rect x={130} y={176} width={160} height={6} rx={3} fill="#22c55e" opacity={0.6} />
        </svg>
    </DiagramWrapper>
);

const QuantQualCompareDiagram = () => (
    <DiagramWrapper title="Quantitative vs. Qualitative Risk Assessment">
        <svg viewBox="0 0 660 220" className="w-full" style={{ maxHeight: 240 }}>
            {/* Two columns */}
            <rect x={20} y={10} width={290} height={190} rx={8} fill="#8FAADC" opacity={0.06} stroke="#8FAADC" strokeWidth={1} />
            <text x={165} y={35} textAnchor="middle" fontSize={12} fontWeight={700} fill="#8FAADC" fontFamily="system-ui">Qualitative</text>
            <rect x={350} y={10} width={290} height={190} rx={8} fill="#00A8F3" opacity={0.06} stroke="#00A8F3" strokeWidth={1} />
            <text x={495} y={35} textAnchor="middle" fontSize={12} fontWeight={700} fill="#00A8F3" fontFamily="system-ui">Quantitative</text>
            {/* Comparison rows */}
            {[
                { q: "Categorical scales", qt: "Financial units ($)" },
                { q: "Fast execution", qt: "Data-intensive" },
                { q: "Subject matter expertise", qt: "Statistical models" },
                { q: "Risk triage & screening", qt: "Investment decisions" },
                { q: "No historical data needed", qt: "Requires loss history" },
            ].map((row, i) => (
                <g key={i}>
                    <text x={165} y={60 + i * 28} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui">{row.q}</text>
                    <text x={495} y={60 + i * 28} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui">{row.qt}</text>
                    <line x1={315} y1={52 + i * 28} x2={345} y2={52 + i * 28} stroke="#4a5568" strokeWidth={0.8} strokeOpacity={0.4} />
                </g>
            ))}
            {/* Bottom recommendation */}
            <text x={330} y={215} textAnchor="middle" fontSize={9} fill="#22c55e" fontWeight={600} fontFamily="system-ui">Best practice: Use both — qualitative for breadth, quantitative for depth on material risks</text>
        </svg>
    </DiagramWrapper>
);

// ── DIAGRAM RENDERER ────────────────────────────────────────

const diagramComponents: Record<string, React.FC> = {
    "risk-maturity": RiskMaturityDiagram,
    "ai-governance-layers": AIGovernanceLayersDiagram,
    "risk-register-evolution": RiskRegisterEvolutionDiagram,
    "eu-ai-act-timeline": EUAIActTimelineDiagram,
    "coso-erm-cube": COSOERMCubeDiagram,
    "llm-risk-taxonomy": LLMRiskTaxonomyDiagram,
    "hipaa-automation": HIPAAAutomationDiagram,
    "shadow-ai-flow": ShadowAIFlowDiagram,
    "living-register": LivingRegisterDiagram,
    "tprm-api": TPRMAPIDiagram,
    "iso42001-pdca": ISO42001PDCADiagram,
    "dora-pillars": DOROPillarsDiagram,
    "pii-lifecycle": PIILifecycleDiagram,
    "bank-classification": BankClassificationDiagram,
    "quant-qual-compare": QuantQualCompareDiagram,
};

// ── SECTION RENDERER ────────────────────────────────────────

const renderBody = (text: string) => {
    // Split by double newlines to get paragraphs
    const paragraphs = text.split("\n\n");
    return paragraphs.map((p, i) => {
        // Check for numbered list items
        if (/^\d+\.\s/.test(p.trim())) {
            const items = p.split(/\n/).filter(Boolean);
            return (
                <ol key={i} className="list-decimal list-outside ml-6 space-y-2 my-4 text-muted-foreground font-body leading-relaxed text-[15px]">
                    {items.map((item, j) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item.replace(/^\d+\.\s*/, "")) }} />
                    ))}
                </ol>
            );
        }
        // Check for bold-prefixed list items (like **Label.** content)
        if (p.includes("\n**") || p.startsWith("**")) {
            const items = p.split("\n").filter(Boolean);
            return (
                <div key={i} className="space-y-3 my-4">
                    {items.map((item, j) => (
                        <p key={j} className="text-muted-foreground font-body leading-relaxed text-[15px] pl-4 border-l-2 border-border" dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                    ))}
                </div>
            );
        }
        // Check for bullet items starting with -
        if (p.includes("\n- ") || p.startsWith("- ")) {
            const items = p.split("\n").filter(l => l.startsWith("- "));
            return (
                <ul key={i} className="list-disc list-outside ml-6 space-y-1 my-4 text-muted-foreground font-body leading-relaxed text-[15px]">
                    {items.map((item, j) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item.replace(/^-\s*/, "")) }} />
                    ))}
                </ul>
            );
        }
        return (
            <p key={i} className="text-muted-foreground font-body leading-relaxed text-[15px] my-4" dangerouslySetInnerHTML={{ __html: formatInline(p) }} />
        );
    });
};

const formatInline = (text: string): string => {
    return text
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\"(.+?)\"/g, '&ldquo;$1&rdquo;');
};

const SectionBlock = ({ section, index }: { section: BlogSection; index: number }) => {
    const DiagramComponent = section.diagram ? diagramComponents[section.diagram] : null;
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
        >
            {section.heading && (
                <h2 className="font-display text-2xl text-foreground mt-12 mb-4">{section.heading}</h2>
            )}
            {renderBody(section.body)}
            {DiagramComponent && <DiagramComponent />}
        </motion.div>
    );
};

// ── BLOG POST PAGE ──────────────────────────────────────────

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPostBySlug(slug) : undefined;

    if (!post) {
        return (
            <main className="min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-display text-3xl text-foreground mb-4">Article Not Found</h1>
                    <p className="text-muted-foreground font-body mb-8">The requested article could not be found.</p>
                    <Link to="/blogs" className="text-primary font-body font-semibold hover:underline">← Back to Blog</Link>
                </div>
            </main>
        );
    }

    const relatedPosts = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);
    if (relatedPosts.length < 3) {
        const more = blogPosts.filter(p => p.slug !== post.slug && p.category !== post.category).slice(0, 3 - relatedPosts.length);
        relatedPosts.push(...more);
    }

    return (
        <main className="min-h-screen pt-28 pb-20">
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
                style={{ background: "hsl(var(--primary))" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 60, ease: "linear" }}
            />

            <article className="container mx-auto px-4 max-w-3xl">
                {/* Back link */}
                <Link to="/blogs" className="inline-flex items-center gap-1.5 text-muted-foreground font-body text-sm mb-8 hover:text-primary transition">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>

                {/* Header */}
                <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
                    <span className="text-[10px] font-body font-semibold text-primary tracking-widest uppercase">{post.category}</span>
                    <h1 className="font-display text-3xl md:text-4xl lg:text-[42px] text-foreground leading-tight mt-3 mb-5">{post.title}</h1>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">{post.excerpt}</p>

                    {/* Meta bar */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-body pb-6 border-b border-border">
                        <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                        <span className="text-border">|</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                        <span className="text-border">|</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime} read</span>
                        <div className="flex-1" />
                        <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded-md hover:bg-card transition" title="Share">
                                <Share2 className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded-md hover:bg-card transition" title="LinkedIn">
                                <Linkedin className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded-md hover:bg-card transition" title="Twitter">
                                <Twitter className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.header>

                {/* Content */}
                <div className="prose-container">
                    {post.sections.map((section, i) => (
                        <SectionBlock key={i} section={section} index={i} />
                    ))}
                </div>

                {/* Author box */}
                <div className="mt-16 p-6 rounded-xl bg-card border border-border flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <p className="font-display text-foreground text-lg">{post.author}</p>
                        <p className="text-muted-foreground font-body text-sm">{post.role}</p>
                        <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">
                            Writing about enterprise risk management, AI governance, and the intersection of technology and compliance.
                        </p>
                    </div>
                </div>

                {/* Related posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-16">
                        <h3 className="font-display text-xl text-foreground mb-6">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {relatedPosts.map(rp => (
                                <Link key={rp.slug} to={`/blog/${rp.slug}`} className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition group">
                                    <span className="text-[9px] font-body font-semibold text-primary tracking-widest uppercase">{rp.category}</span>
                                    <h4 className="font-display text-sm text-foreground mt-1.5 leading-snug group-hover:text-primary transition">{rp.title}</h4>
                                    <p className="text-xs text-muted-foreground font-body mt-2">{rp.readTime} · {rp.date}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>
        </main>
    );
};

export default BlogPost;
