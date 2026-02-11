import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface DotMatrixProps {
    rows?: number;
    cols?: number;
    highlightProbability?: number;
}

const DotMatrix = ({
    rows = 15,
    cols = 25,
    highlightProbability = 0.05
}: DotMatrixProps) => {
    const [actualCols, setActualCols] = useState(cols);
    const [highlights, setHighlights] = useState<number[]>([]);

    // Responsive columns
    useEffect(() => {
        const handleResize = () => {
            setActualCols(window.innerWidth < 768 ? Math.min(cols, 12) : cols);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [cols]);

    const totalDots = rows * actualCols;

    // Randomly select dots to highlight
    useEffect(() => {
        const interval = setInterval(() => {
            const newHighlights = [];
            for (let i = 0; i < totalDots; i++) {
                if (Math.random() < highlightProbability) {
                    newHighlights.push(i);
                }
            }
            setHighlights(newHighlights);
        }, 2000);

        return () => clearInterval(interval);
    }, [totalDots, highlightProbability]);

    return (
        <div
            className="grid gap-[4px] md:gap-3 p-4 bg-black/5 rounded-xl border border-border/40 w-fit mx-auto"
            style={{ gridTemplateColumns: `repeat(${actualCols}, minmax(0, 1fr))` }}
        >
            {[...Array(totalDots)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-500`}
                    style={{
                        backgroundColor: highlights.includes(i) ? "#EF4444" : "#CBD5E1"
                    }}
                    animate={highlights.includes(i) ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    } : {
                        scale: 1,
                        opacity: 0.3
                    }}
                    transition={{ duration: 0.5 }}
                />
            ))}
        </div>
    );
};

export default DotMatrix;
