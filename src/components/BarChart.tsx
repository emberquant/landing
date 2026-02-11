import { motion } from "framer-motion";

const data = [
    { label: "Manual Reviews", efficiency: 30, riskCoverage: 45 },
    { label: "EmberQuant", efficiency: 95, riskCoverage: 99 },
];

const BarChart = () => {
    return (
        <div className="w-full max-w-md mx-auto aspect-square md:aspect-auto md:h-96 bg-card/50 rounded-xl p-6 border border-border flex flex-col justify-between">
            <h3 className="text-sm font-semibold mb-6 text-center text-muted-foreground uppercase tracking-widest">Performance Benchmark</h3>

            <div className="flex items-end justify-center gap-8 md:gap-16 flex-1 pb-4">
                {data.map((item, i) => (
                    <div key={item.label} className="flex flex-col items-center gap-3 group w-24">
                        <div className="relative w-full h-full flex items-end justify-center">
                            {/* Efficiency Bar */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${item.efficiency}%` }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className={`w-8 md:w-12 rounded-t-sm ${i === 1 ? 'bg-primary' : 'bg-muted-foreground/30'} relative`}
                            >
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold">{item.efficiency}%</span>
                            </motion.div>
                        </div>
                        <p className={`text-xs text-center font-medium ${i === 1 ? 'text-primary' : 'text-muted-foreground'}`}>{item.label}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-6 mt-2 text-[10px] text-muted-foreground border-t border-border/30 pt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-muted-foreground/30 rounded-sm"></div> Industry Avg
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-sm"></div> EmberQuant
                </div>
            </div>
        </div>
    );
};

export default BarChart;
