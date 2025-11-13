import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

const logoImage = '/landing/src/public/logo.png';

const terminalCommands = [
  { text: '> Initializing SANE Terminal...', delay: 0 },
  { text: '> Connecting to financial data streams...', delay: 800 },
  { text: '> Processing Q3 Invoices...', delay: 1600 },
  { text: '> Analyzing 2,847 transactions...', delay: 2400 },
  { text: '> AI Model: Risk detection enabled', delay: 3200 },
  { text: '> 7 Critical Risks Identified & Mitigated', delay: 4000 },
  { text: '> Financial Deliverables: [Generated]', delay: 4800 },
  { text: '> Compliance Status: [100%]', delay: 5600 },
  { text: '> VC Presentation Package: [Ready]', delay: 6400 },
];

const floatingMetrics = [
  { label: 'ARR', value: '$2.4M', x: '10%', y: '20%' },
  { label: 'MRR', value: '$200K', x: '85%', y: '30%' },
  { label: 'Burn', value: '-$124K', x: '15%', y: '70%' },
  { label: 'Runway', value: '18mo', x: '80%', y: '75%' },
];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [userInput, setUserInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    terminalCommands.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
    });

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#FF4500 1px, transparent 1px), linear-gradient(90deg, #FF4500 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4500] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Floating Metrics */}
      {floatingMetrics.map((metric, index) => (
        <div
          key={index}
          className="absolute hidden lg:block animate-float opacity-0"
          style={{
            left: metric.x,
            top: metric.y,
            animationDelay: `${index * 0.5}s`,
            animationFillMode: 'forwards',
          }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-[#FF4500]/40 rounded-xl px-5 py-3 shadow-xl">
            <div className="text-gray-400 text-xs font-mono">{metric.label}</div>
            <div className="text-[#FF4500] font-mono">{metric.value}</div>
          </div>
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-10">
            {/* Logo - Much Larger */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border-2 border-[#FF4500]/30 rounded-2xl p-6 hover:border-[#FF4500] transition-all group">
                <img 
                  src={logoImage} 
                  alt="EmberQuant Logo" 
                  className="h-20 w-auto group-hover:scale-110 transition-transform"
                />
                <div>
                  <div className="font-serif tracking-tight text-white group-hover:text-[#FF4500] transition-colors" style={{ fontSize: '2.5rem', lineHeight: '1' }}>
                    EmberQuant
                  </div>
                  <div className="text-sm text-gray-400 font-mono tracking-wider mt-1">QUANTIFY EXCELLENCE</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#FF4500]">
                <Sparkles className="w-5 h-5" />
                <span className="font-mono text-sm">AI-Powered Financial Intelligence</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="font-serif tracking-tight text-white leading-none">
                <span className="block text-6xl lg:text-7xl mb-3">Financial</span>
                <span className="block text-6xl lg:text-7xl mb-3">Control,</span>
                <span className="block text-6xl lg:text-7xl bg-gradient-to-r from-[#FF4500] to-orange-600 bg-clip-text text-transparent">Simplified.</span>
              </h1>
              
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#FF4500] to-orange-600 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 max-w-xl text-xl leading-relaxed">
              Stop drowning in spreadsheets. EmberQuant's AI automates your entire accounting workflow—from data entry to VC-ready reports. Talk to <span className="text-[#FF4500] font-mono font-semibold">Jared</span>, your 24/7 AI accountant.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#FF4500]/50 transition-all hover:scale-105">
                <div className="text-[#FF4500] font-mono text-2xl">60%</div>
                <div className="text-gray-400 text-sm mt-1">Time Saved</div>
              </div>
              <div className="text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#FF4500]/50 transition-all hover:scale-105">
                <div className="text-[#FF4500] font-mono text-2xl">100%</div>
                <div className="text-gray-400 text-sm mt-1">Accurate</div>
              </div>
              <div className="text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#FF4500]/50 transition-all hover:scale-105">
                <div className="text-[#FF4500] font-mono text-2xl">24/7</div>
                <div className="text-gray-400 text-sm mt-1">AI Active</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button 
                asChild
                className="bg-gradient-to-r from-[#FF4500] to-orange-600 hover:from-[#E03E00] hover:to-orange-700 text-white px-10 py-7 shadow-2xl shadow-[#FF4500]/30 transition-all hover:scale-105 hover:shadow-[#FF4500]/50"
              >
                <a 
                  href="https://calendly.com/request-emberquant/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo →
                </a>
              </Button>
              
              
            </div>
          </div>

          {/* Right: Interactive Terminal */}
          <div className="relative">
            <div className="bg-black rounded-2xl overflow-hidden border-2 border-[#FF4500]/40 shadow-2xl shadow-[#FF4500]/20 hover:shadow-[#FF4500]/30 transition-shadow">
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 px-6 py-4 border-b-2 border-[#FF4500]/30 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#FF4500] animate-pulse"></div>
                <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                <span className="ml-4 text-[#FF4500] font-mono">SANE Terminal v2.0</span>
                <span className="ml-auto text-gray-500 text-xs font-mono border border-gray-700 px-3 py-1 rounded-full">LIVE</span>
              </div>

              {/* Terminal Body */}
              <div className="p-8 space-y-3 min-h-[450px] font-mono text-sm bg-gradient-to-b from-black via-gray-950 to-black">
                {terminalCommands.map((line, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      visibleLines.includes(index) 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <span className="text-gray-600 mr-3">{'>'}</span>
                    <span className="text-[#FF4500]">{line.text}</span>
                  </div>
                ))}
                
                {visibleLines.length === terminalCommands.length && (
                  <div className="pt-6 animate-fadeIn border-t border-gray-800 mt-6">
                    <div className="text-gray-500 mb-3 text-xs uppercase tracking-wider">{'>'} Interactive Mode</div>
                    <div className="flex items-center bg-gray-900/50 rounded-lg px-4 py-3 border border-gray-800">
                      <span className="text-gray-600 mr-3">{'>'}</span>
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Ask Jared anything..."
                        className="bg-transparent text-[#FF4500] outline-none flex-1 placeholder:text-gray-700"
                      />
                      {showCursor && (
                        <span className="w-2 h-5 bg-[#FF4500] inline-block ml-1"></span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF4500]/20 to-orange-600/20 rounded-3xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0; }
          50% { transform: translateY(-10px); opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
