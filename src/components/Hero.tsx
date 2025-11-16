import { Button } from './ui/button';

import { Sparkles } from 'lucide-react';
import { TransformationVisual } from './TransformationVisual';
const logoImage = "/logo.png";
const floatingMetrics = [
  { label: 'ARR', value: '$2.4M', x: '5%', y: '15%' },
  { label: 'MRR', value: '$200K', x: '8%', y: '75%' },
  { label: 'Burn', value: '-$124K', x: '3%', y: '45%' },
  { label: 'Runway', value: '18mo', x: '6%', y: '60%' },
];

export function Hero() {
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

      {/* Floating Metrics - Only on Left */}
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

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
        {/* Split Layout: Left Content + Right Visual */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start min-h-[85vh]">
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

          {/* Right: Transformation Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-[#FF4500]/10 border border-[#FF4500]/30 backdrop-blur-sm rounded-full px-6 py-2 mb-2">
                <div className="w-2 h-2 bg-[#FF4500] rounded-full animate-pulse"></div>
                <span className="text-[#FF4500] font-mono text-sm">LIVE PREVIEW</span>
              </div>
              <h2 className="text-white font-serif text-2xl mb-1">
                Watch Your Workflow Transform
              </h2>
              <p className="text-gray-400 text-sm">From chat to VC-ready deliverables in seconds</p>
            </div>

            <TransformationVisual />
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
