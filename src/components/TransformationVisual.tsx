import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const logoImage = '/landing/src/public/logo.png';

type Stage = 'excel' | 'flow' | 'dashboard' | 'logo';

const excelData = [
  ['Invoice #', 'Date', 'Amount', 'Status'],
  ['INV-001', '01/11/24', '$2,450', 'Paid'],
  ['INV-002', '03/11/24', '$3,200', 'Pending'],
  ['INV-003', '05/11/24', '$1,875', 'Paid'],
  ['INV-004', '08/11/24', '$4,100', 'Pending'],
];

// Chart data
const monthlyTrendData = [
  { month: 'Jan', revenue: 2400, expenses: 1400 },
  { month: 'Feb', revenue: 3210, expenses: 1800 },
  { month: 'Mar', revenue: 2290, expenses: 1200 },
  { month: 'Apr', revenue: 4390, expenses: 2200 },
  { month: 'May', revenue: 5200, expenses: 2800 },
  { month: 'Jun', revenue: 6100, expenses: 3200 },
];

const statusBreakdown = [
  { name: 'Paid', value: 4325, color: '#22c55e' },
  { name: 'Pending', value: 7300, color: '#eab308' },
  { name: 'Overdue', value: 2100, color: '#ef4444' },
];

export function TransformationVisual() {
  const [stage, setStage] = useState<Stage>('excel');
  const [highlightedCells, setHighlightedCells] = useState<number[]>([]);
  const [highlightedFlow, setHighlightedFlow] = useState<number[]>([]);

  useEffect(() => {
    // Excel stage - highlight cells sequentially
    if (stage === 'excel') {
      const timer1 = setTimeout(() => setHighlightedCells([1]), 500);
      const timer2 = setTimeout(() => setHighlightedCells([1, 2]), 1000);
      const timer3 = setTimeout(() => setHighlightedCells([1, 2, 3]), 1500);
      const timer4 = setTimeout(() => setHighlightedCells([1, 2, 3, 4]), 2000);
      const timer5 = setTimeout(() => setStage('flow'), 2800);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    }

    // Flow stage - highlight flow edges
    if (stage === 'flow') {
      const timer1 = setTimeout(() => setHighlightedFlow([0]), 300);
      const timer2 = setTimeout(() => setHighlightedFlow([0, 1]), 700);
      const timer3 = setTimeout(() => setHighlightedFlow([0, 1, 2]), 1100);
      const timer4 = setTimeout(() => setStage('dashboard'), 1800);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }

    // Dashboard stage
    if (stage === 'dashboard') {
      const timer = setTimeout(() => setStage('logo'), 2000);
      return () => clearTimeout(timer);
    }

    // Logo stage - restart after delay
    if (stage === 'logo') {
      const timer = setTimeout(() => {
        setStage('excel');
        setHighlightedCells([]);
        setHighlightedFlow([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-[#FF4500]/40 shadow-2xl">
      {/* Excel Stage */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          stage === 'excel' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-8 h-full flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-gray-300">
            {/* Excel Header */}
            <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-sm text-gray-700 font-mono">invoices.xlsx</span>
            </div>

            {/* Excel Grid */}
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr>
                    {excelData[0].map((header, idx) => (
                      <th
                        key={idx}
                        className="px-4 py-2 bg-gray-200 border border-gray-300 text-sm text-gray-800 font-mono"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {excelData.slice(1).map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className={`px-4 py-2 border border-gray-300 text-sm font-mono transition-all duration-500 ${
                            highlightedCells.includes(rowIdx + 1)
                              ? 'bg-[#FF4500] text-white animate-pulse'
                              : 'bg-white text-gray-800'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Flow Diagram Stage */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          stage === 'flow' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-8 h-full flex items-center justify-center">
          <div className="relative">
            {/* Flow nodes */}
            <div className="flex items-center gap-8">
              {/* Node 1: Data Collection */}
              <div className={`transition-all duration-500 ${highlightedFlow.includes(0) ? 'scale-110' : ''}`}>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-300 shadow-lg">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="font-mono text-sm text-gray-800">Data</div>
                  <div className="font-mono text-sm text-gray-800">Collection</div>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className={`transition-all duration-500 ${highlightedFlow.includes(0) ? 'text-[#FF4500]' : 'text-gray-400'}`}>
                <ArrowRight className="w-12 h-12" strokeWidth={3} />
              </div>

              {/* Node 2: AI Processing */}
              <div className={`transition-all duration-500 ${highlightedFlow.includes(1) ? 'scale-110' : ''}`}>
                <div className={`rounded-xl p-6 border-2 shadow-lg transition-colors ${
                  highlightedFlow.includes(1) 
                    ? 'bg-[#FF4500] border-[#FF4500]' 
                    : 'bg-white border-gray-300'
                }`}>
                  <div className="text-3xl mb-2">🤖</div>
                  <div className={`font-mono text-sm ${highlightedFlow.includes(1) ? 'text-white' : 'text-gray-800'}`}>AI</div>
                  <div className={`font-mono text-sm ${highlightedFlow.includes(1) ? 'text-white' : 'text-gray-800'}`}>Processing</div>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className={`transition-all duration-500 ${highlightedFlow.includes(1) ? 'text-[#FF4500]' : 'text-gray-400'}`}>
                <ArrowRight className="w-12 h-12" strokeWidth={3} />
              </div>

              {/* Node 3: Output */}
              <div className={`transition-all duration-500 ${highlightedFlow.includes(2) ? 'scale-110' : ''}`}>
                <div className={`rounded-xl p-6 border-2 shadow-lg transition-colors ${
                  highlightedFlow.includes(2) 
                    ? 'bg-[#FF4500] border-[#FF4500]' 
                    : 'bg-white border-gray-300'
                }`}>
                  <div className="text-3xl mb-2">📈</div>
                  <div className={`font-mono text-sm ${highlightedFlow.includes(2) ? 'text-white' : 'text-gray-800'}`}>Insights</div>
                  <div className={`font-mono text-sm ${highlightedFlow.includes(2) ? 'text-white' : 'text-gray-800'}`}>Generated</div>
                </div>
              </div>
            </div>

            {/* Processing indicator */}
            {highlightedFlow.length > 0 && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#FF4500] font-mono text-sm animate-pulse">
                Processing...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dashboard Stage */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          stage === 'dashboard' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-8 h-full overflow-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl h-full p-6 shadow-2xl border-2 border-[#FF4500]/30 animate-slideIn">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
              <h3 className="text-white font-mono">Financial Dashboard</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-400 text-xs font-mono">LIVE</span>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-black/40 rounded-lg p-4 border border-[#FF4500]/30 animate-fadeIn">
                <div className="text-gray-400 text-xs font-mono mb-1">Total Revenue</div>
                <div className="text-[#FF4500] font-mono text-2xl">$11,625</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4 border border-[#FF4500]/30 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <div className="text-gray-400 text-xs font-mono mb-1">Pending</div>
                <div className="text-yellow-400 font-mono text-2xl">$7,300</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4 border border-[#FF4500]/30 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <div className="text-gray-400 text-xs font-mono mb-1">Paid</div>
                <div className="text-green-400 font-mono text-2xl">$4,325</div>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Revenue Trend Chart */}
              <div className="bg-black/40 rounded-lg p-4 border border-[#FF4500]/30 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="text-gray-400 text-xs font-mono mb-3">Revenue vs Expenses</div>
                <ResponsiveContainer width="100%" height={120}>
                  <AreaChart data={monthlyTrendData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF4500" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FF4500" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#666" tick={{ fontSize: 10 }} />
                    <YAxis stroke="#666" tick={{ fontSize: 10 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #FF4500' }} />
                    <Area type="monotone" dataKey="revenue" stroke="#FF4500" fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Status Breakdown Pie Chart */}
              <div className="bg-black/40 rounded-lg p-4 border border-[#FF4500]/30 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <div className="text-gray-400 text-xs font-mono mb-3">Invoice Status</div>
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={statusBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={55}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {statusBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #FF4500' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Stage */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          stage === 'logo' ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FF4500] to-orange-600 p-8">
          <div className="animate-zoomIn">
            <img 
              src={logoImage} 
              alt="EmberQuant Logo" 
              className="h-32 w-auto mb-6"
            />
            <div className="text-center">
              <div className="font-serif text-white text-4xl mb-2">EmberQuant</div>
              <div className="text-white/80 font-mono text-sm tracking-wider mb-6">ACCOUNTING TERMINAL</div>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-mono hover:scale-105 transition-transform shadow-2xl">
                Try EQ Now →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stage indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {(['excel', 'flow', 'dashboard', 'logo'] as Stage[]).map((s) => (
          <div
            key={s}
            className={`w-2 h-2 rounded-full transition-all ${
              stage === s ? 'bg-[#FF4500] w-6' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes growUp {
          from {
            height: 0;
          }
          to {
            height: var(--final-height);
          }
        }
        .animate-growUp {
          animation: growUp 0.6s ease-out forwards;
          --final-height: 100%;
        }
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-zoomIn {
          animation: zoomIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
