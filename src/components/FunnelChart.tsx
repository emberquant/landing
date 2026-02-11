import { motion } from "framer-motion";

const FunnelChart = () => {
    return (
        <div className="w-full h-48 md:h-80 relative flex items-center justify-center">
            <svg
                viewBox="0 0 800 400"
                className="w-full h-full max-w-4xl overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="funnelGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#2040b0" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#2040b0" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00A8F3" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <path
                    d="M 50 50 L 750 180 L 750 220 L 50 350 Z"
                    fill="url(#funnelGradient)"
                    stroke="#2040b0"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                />

                <line x1="300" y1="100" x2="300" y2="300" stroke="white" strokeOpacity="0.2" strokeDasharray="5 5" />
                <line x1="550" y1="145" x2="550" y2="255" stroke="white" strokeOpacity="0.2" strokeDasharray="5 5" />

                <text x="175" y="40" textAnchor="middle" fill="#2040b0" className="text-sm font-display font-semibold uppercase tracking-wider hidden md:block">Ingest</text>
                <text x="425" y="90" textAnchor="middle" fill="#2040b0" className="text-sm font-display font-semibold uppercase tracking-wider hidden md:block">Analyze</text>
                <text x="650" y="130" textAnchor="middle" fill="#00A8F3" className="text-sm font-display font-semibold uppercase tracking-wider hidden md:block">Resolve</text>

                {[...Array(12)].map((_, i) => (
                    <motion.circle
                        key={i}
                        r="4"
                        fill="#00A8F3"
                        filter="url(#glow)"
                        initial={{ x: 50, y: 50 + Math.random() * 300, opacity: 0 }}
                        animate={{
                            x: [50, 750],
                            y: [
                                50 + Math.random() * 300, // random start Y within wide mouth
                                200 + (Math.random() * 40 - 20) // converge to narrow exit (center ~200)
                            ],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 2.5 + Math.random() * 1.5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 2
                        }}
                    />
                ))}

                <circle cx="750" cy="200" r="8" fill="#00A8F3" filter="url(#glow)" />
                <motion.circle
                    cx="750"
                    cy="200"
                    r="12"
                    stroke="#00A8F3"
                    strokeWidth="1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 1, 0], scale: 1.5 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />

                <text x="770" y="205" fill="#111D35" className="text-xs font-bold font-body hidden md:block">Risk Register</text>

            </svg>
        </div>
    );
};

export default FunnelChart;
