import { motion } from "framer-motion";

const nodes = [
    { id: "core", x: 400, y: 200, label: "Core System", type: "hub" },
    { id: "db1", x: 250, y: 150, label: "User DB", type: "node" },
    { id: "api", x: 550, y: 150, label: "API Gateway", type: "node" },
    { id: "auth", x: 400, y: 100, label: "Auth Service", type: "node" },
    { id: "analytic", x: 300, y: 300, label: "Analytics", type: "node" },
    { id: "payment", x: 500, y: 300, label: "Payment Proc", type: "node" },
];

const links = [
    { source: "core", target: "db1" },
    { source: "core", target: "api" },
    { source: "core", target: "auth" },
    { source: "core", target: "analytic" },
    { source: "core", target: "payment" },
];

const KnowledgeGraph = () => {
    return (
        <div className="w-full h-full relative bg-[#0B1221] overflow-hidden rounded-tr-lg rounded-br-lg">
            <div className="absolute top-4 right-4 z-10">
                <span className="text-xs font-mono text-primary animate-pulse">● System Topology Analysis</span>
            </div>

            <svg className="w-full h-full absolute inset-0 pointer-events-none">
                {/* Grid Background */}
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Links */}
                {links.map((link, i) => {
                    const s = nodes.find(n => n.id === link.source)!;
                    const t = nodes.find(n => n.id === link.target)!;
                    return (
                        <motion.line
                            key={i}
                            x1={s.x} y1={s.y}
                            x2={t.x} y2={t.y}
                            stroke="#2040b0"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                        />
                    );
                })}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.g
                        key={node.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                    >
                        <circle cx={node.x} cy={node.y} r={node.type === 'hub' ? 8 : 4} fill={node.type === 'hub' ? '#00A8F3' : '#2040b0'} />
                        <circle cx={node.x} cy={node.y} r={node.type === 'hub' ? 16 : 12} stroke={node.type === 'hub' ? '#00A8F3' : '#2040b0'} strokeOpacity="0.3"
                            className="animate-ping origin-center" style={{ animationDuration: '3s' }}
                        />
                        <text x={node.x} y={node.y + 20} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="monospace">
                            {node.label}
                        </text>
                    </motion.g>
                ))}

                {/* Detected Risk Node Example */}
                <motion.g
                    initial={{ opacity: 0, scale: 0, x: 600, y: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 520, y: 130 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <circle cx="0" cy="0" r="6" fill="#EF4444" />
                    <line x1="0" y1="0" x2="30" y2="20" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="10" y="-10" fill="#EF4444" fontSize="10" fontWeight="bold">Threat Detected</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default KnowledgeGraph;
