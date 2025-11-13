import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const metrics = [
  { label: 'Revenue', value: 847392, trend: 23.5, color: 'text-[#FF4500]' },
  { label: 'Burn Rate', value: 124500, trend: -8.2, color: 'text-green-500' },
  { label: 'Runway', value: 18.4, trend: 2.1, color: 'text-[#FF4500]', suffix: 'months' },
];

// Chart data
const revenueData = [
  { month: 'Jan', revenue: 400, expenses: 240 },
  { month: 'Feb', revenue: 520, expenses: 280 },
  { month: 'Mar', revenue: 680, expenses: 320 },
  { month: 'Apr', revenue: 890, expenses: 350 },
  { month: 'May', revenue: 1200, expenses: 400 },
  { month: 'Jun', revenue: 1450, expenses: 420 },
];

const cashFlowData = [
  { category: 'Operating', value: 234, color: '#FF4500' },
  { category: 'Investing', value: 89, color: '#8B6914' },
  { category: 'Financing', value: 500, color: '#1DB854' },
];

const burnRateData = [
  { week: 'W1', burn: 35, budget: 40 },
  { week: 'W2', burn: 38, budget: 40 },
  { week: 'W3', burn: 32, budget: 40 },
  { week: 'W4', burn: 28, budget: 40 },
  { week: 'W5', burn: 30, budget: 40 },
];

const forecastData = [
  { month: 'Current', actual: 400 },
  { month: 'Month 1', forecast: 520 },
  { month: 'Month 2', forecast: 680 },
  { month: 'Month 3', forecast: 890 },
  { month: 'Month 4', forecast: 1100 },
  { month: 'Month 5', forecast: 1350 },
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

              {/* Charts Grid - Top Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Revenue vs Expenses Chart */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800 hover:border-[#FF4500]/30 transition-all">
                  <h3 className="text-white text-sm font-semibold mb-4">Revenue vs Expenses</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="month" stroke="#666" tick={{ fontSize: 12 }} />
                      <YAxis stroke="#666" tick={{ fontSize: 12 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #FF4500' }} labelStyle={{ color: '#fff' }} />
                      <Legend />
                      <Bar dataKey="revenue" fill="#FF4500" />
                      <Bar dataKey="expenses" fill="#8B6914" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Cash Flow Breakdown */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800 hover:border-[#FF4500]/30 transition-all">
                  <h3 className="text-white text-sm font-semibold mb-4">Cash Flow Breakdown</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={cashFlowData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {cashFlowData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #FF4500' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Charts Grid - Middle Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Burn Rate Tracking */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800 hover:border-[#FF4500]/30 transition-all">
                  <h3 className="text-white text-sm font-semibold mb-4">Burn Rate vs Budget</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={burnRateData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="week" stroke="#666" tick={{ fontSize: 12 }} />
                      <YAxis stroke="#666" tick={{ fontSize: 12 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #FF4500' }} />
                      <Legend />
                      <Line type="monotone" dataKey="burn" stroke="#FF4500" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="budget" stroke="#1DB854" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Revenue Forecast */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800 hover:border-[#FF4500]/30 transition-all">
                  <h3 className="text-white text-sm font-semibold mb-4">Revenue Forecast</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={forecastData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="month" stroke="#666" tick={{ fontSize: 12 }} />
                      <YAxis stroke="#666" tick={{ fontSize: 12 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #FF4500' }} />
                      <Area type="monotone" dataKey="actual" stackId="1" stroke="#FF4500" fill="#FF4500" opacity={0.8} />
                      <Area type="monotone" dataKey="forecast" stackId="1" stroke="#8B6914" fill="#8B6914" opacity={0.5} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
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
                    <span>Analyze dashboard metrics and trends</span>
                    <span className="w-2 h-4 bg-[#FF4500] inline-block animate-pulse"></span>
                  </div>
                  <div className="text-white pl-4 animate-typing">Processing financial data...</div>
                  <div className="text-gray-400 pl-4 flex items-center gap-2">
                    <span className="text-green-400">✓</span> Revenue trend: +23.5% growth
                  </div>
                  <div className="text-gray-400 pl-4 flex items-center gap-2">
                    <span className="text-green-400">✓</span> Burn rate optimized: -8.2%
                  </div>
                  <div className="text-gray-400 pl-4 flex items-center gap-2">
                    <span className="text-green-400">✓</span> Runway extended to 18.4 months
                  </div>
                  <div className="text-[#FF4500] pl-4 mt-2">
                    → All metrics green. Strong financial health confirmed.
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
