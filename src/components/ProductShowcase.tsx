import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const metrics = [
  { label: 'Revenue', value: 847392, trend: 23.5, color: 'text-[#FF4500]' },
  { label: 'Burn Rate', value: 124500, trend: -8.2, color: 'text-green-500' },
  { label: 'Runway', value: 18.4, trend: 2.1, color: 'text-[#FF4500]', suffix: 'months' },
];

export function ProductShowcase() {
  const [animatedValues, setAnimatedValues] = useState(metrics.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('product-showcase');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      metrics.forEach((metric, index) => {
        let start = 0;
        const end = metric.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = start;
            return newValues;
          });
        }, 16);
      });
    }
  }, [isVisible]);

  return (
    <section id="product-showcase" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif tracking-tight mb-4">
            The Command Center for Your Finances
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A powerful, intuitive interface designed for speed and precision. Your entire financial operation in one elegant dashboard.
          </p>
        </div>

        {/* Main Product Screenshot - 3D Effect Browser Frame */}
        <div className="max-w-6xl mx-auto perspective-1000">
          <div className="rounded-2xl overflow-hidden border-2 border-gray-300 shadow-2xl transform hover:rotate-y-2 transition-transform duration-500 hover:shadow-[#FF4500]/20">
            {/* Browser Header */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-3 border-b border-gray-300 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
              </div>
              <div className="ml-4 bg-white px-6 py-1.5 rounded-lg text-gray-600 flex-1 flex items-center gap-2">
                <div className="w-4 h-4 text-green-500">🔒</div>
                <span className="font-mono text-sm">app.emberquant.com/dashboard</span>
              </div>
              <div className="text-gray-400">⋮</div>
            </div>

            {/* Product UI - Dark Mode Dashboard */}
            <div className="bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a] p-8">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-200 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="font-serif">EQ</span>
                  </div>
                  <span className="text-white">Dashboard</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[#FF4500] px-4 py-2 bg-[#FF4500]/10 rounded-lg font-mono border border-[#FF4500]/30 hover:bg-[#FF4500]/20 transition-colors cursor-pointer">
                    Q4 2024
                  </div>
                </div>
              </div>

              {/* Animated Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800 hover:border-[#FF4500]/50 transition-all group cursor-pointer hover:scale-105"
                  >
                    <div className="text-gray-400 mb-2 text-sm">{metric.label}</div>
                    <div className="text-white mb-2 text-2xl font-mono">
                      {metric.suffix === 'months' 
                        ? animatedValues[index].toFixed(1)
                        : `$${Math.floor(animatedValues[index]).toLocaleString()}`
                      }
                      {metric.suffix && <span className="text-sm text-gray-400"> {metric.suffix}</span>}
                    </div>
                    <div className={`flex items-center gap-1 ${metric.color}`}>
                      {metric.trend > 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="text-sm font-mono">
                        {metric.trend > 0 ? '+' : ''}{metric.trend}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Terminal Section */}
              <div className="bg-black rounded-xl border border-[#FF4500]/30 p-6 hover:border-[#FF4500]/60 transition-all shadow-lg shadow-[#FF4500]/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse"></div>
                  <div className="text-gray-400 font-mono text-sm">Jared AI - Active</div>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-[#FF4500] flex items-center gap-2">
                    <span className="text-gray-600">{'>'}</span>
                    <span>Show me cash flow breakdown for Q3</span>
                    <span className="w-2 h-4 bg-[#FF4500] inline-block animate-pulse"></span>
                  </div>
                  <div className="text-white pl-4 animate-typing">Analyzing financial data...</div>
                  <div className="text-gray-400 pl-4 flex items-center gap-2">
                    <span className="text-green-400">✓</span> Operating: $234K outflow
                  </div>
                  <div className="text-gray-400 pl-4 flex items-center gap-2">
                    <span className="text-green-400">✓</span> Investing: $89K outflow
                  </div>
                  <div className="text-gray-400 pl-4 flex items-center gap-2">
                    <span className="text-green-400">✓</span> Financing: $500K inflow
                  </div>
                  <div className="text-[#FF4500] pl-4 mt-2">
                    → Net positive: $177K. Strong quarter.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating feature badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {['Real-time Updates', 'AI-Powered', 'VC-Ready Reports', 'Zero Manual Entry'].map((badge, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full hover:border-[#FF4500] hover:shadow-lg transition-all cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .hover\\:rotate-y-2:hover {
          transform: rotateY(2deg);
        }
        @keyframes typing {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-typing {
          animation: typing 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
