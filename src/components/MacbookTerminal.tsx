import { ReactNode } from "react";

interface MacbookTerminalProps {
    children?: ReactNode;
}

const MacbookTerminal = ({ children }: MacbookTerminalProps) => {
    return (
        <div className="relative mx-auto w-full max-w-5xl perspective-1000 group">

            {/* Screen Assembly */}
            <div className="relative origin-bottom transition-transform duration-700 hover:scale-[1.01]">

                {/* Lid (Screen Bezel) */}
                <div className="relative bg-[#0d0d0d] rounded-t-[1.5rem] p-[10px] md:p-[14px] shadow-2xl border-[1px] border-[#333] border-b-0 rings-1 ring-white/5">

                    {/* Camera Notch Area */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#0d0d0d] rounded-b-lg flex justify-center items-center z-30">
                        <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full border border-gray-800" />
                        <div className="w-1 h-1 bg-blue-900/30 rounded-full ml-2" />
                    </div>

                    {/* Screen Content Container */}
                    <div className="bg-[#0B1221] w-full aspect-[16/10] rounded-t-lg overflow-hidden relative border border-white/5 shadow-inner">
                        {children}

                        {/* Screen Glare/Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-20 mix-blend-overlay" />
                    </div>

                </div>

                {/* Hinge Mechanism */}
                <div className="absolute -bottom-2 left-0 right-0 h-4 bg-[#1a1a1a] flex justify-center items-end z-10">
                    <div className="w-[80%] h-full bg-gradient-to-b from-[#2a2a2a] to-[#0d0d0d] rounded-b-lg shadow-lg border-x border-[#333]" />
                </div>
            </div>

            {/* Base (Bottom Chassis) */}
            <div className="relative mt-0.5">
                {/* Top Surface of Base (visible edge) */}
                <div className="h-3 md:h-4 w-[100.5%] -ml-[0.25%] bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] rounded-b-[1rem] shadow-xl border-t border-[#333] flex justify-center">
                    {/* Trackpad Indent Hint */}
                    <div className="w-1/3 h-1 bg-[#111] rounded-b opacity-50 mt-0.5" />
                </div>

                {/* Shadow/Reflection beneath laptop */}
                <div className="absolute top-full left-[5%] right-[5%] h-12 bg-black/40 blur-2xl rounded-[100%]" />
            </div>

        </div>
    );
};

export default MacbookTerminal;
