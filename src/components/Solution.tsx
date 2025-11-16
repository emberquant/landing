import { useState } from 'react';
import { MessageSquare, Database, Search, Zap, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: "Jared: Your AI Accountant",
    description:
      "Natural language interface for all your accounting needs. Ask questions, get insights, generate reports—all in plain English.",
    features: ['24/7 availability', 'Learns your business', 'Strategic insights'],
    visual: (
      <div className="bg-black rounded-lg p-4 font-mono text-xs">
        <div className="text-[#FF4500] mb-1">{'>'} What's my burn rate?</div>
        <div className="text-white">$124,500/month, down 8.2% from last month</div>
      </div>
    ),
  },
  {
    icon: Database,
    title: 'QuantEdge Ledger',
    description:
      'Conversational general ledger. Update your books by talking to it. No manual data entry, no complex interfaces.',
    features: ['Voice commands', 'Auto-categorization', 'Real-time sync'],
    visual: (
      <div className="bg-black rounded-lg p-4 font-mono text-xs">
        <div className="text-[#FF4500] mb-1">{'>'} Record $5K marketing expense</div>
        <div className="text-green-400">✓ Recorded under Marketing/Q4</div>
      </div>
    ),
  },
  {
    icon: Search,
    title: 'Auto Process Mining',
    description:
      'Connect to your billing systems, Tally, and more. AI automatically audits and validates every transaction.',
    features: ['CCTV integration', 'Anomaly detection', 'Compliance checks'],
    visual: (
      <div className="bg-black rounded-lg p-4 font-mono text-xs">
        <div className="text-[#FF4500] mb-1">{'>'} Scanning 2,847 transactions...</div>
        <div className="text-yellow-400">⚠ 2 discrepancies found</div>
      </div>
    ),
  },
  {
    icon: Zap,
    title: 'Real-Time Intelligence',
    description:
      'Your data updates live as your business moves. No waiting for month-end. Instant financial visibility.',
    features: ['Live dashboards', 'Instant alerts', 'Predictive analytics'],
    visual: (
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-black p-2 rounded text-center">
          <div className="text-[#FF4500] text-lg font-mono">$847K</div>
          <div className="text-gray-400 text-xs">Revenue</div>
        </div>
        <div className="bg-black p-2 rounded text-center">
          <div className="text-green-400 text-lg font-mono">18mo</div>
          <div className="text-gray-400 text-xs">Runway</div>
        </div>
      </div>
    ),
  },
  {
    icon: Shield,
    title: 'Compliance Autopilot',
    description:
      'Stay compliant effortlessly. Automated tax calculations, regulatory updates, and complete audit trails.',
    features: ['GST/Tax automation', 'Audit-ready logs', 'Regulatory alerts'],
    visual: (
      <div className="bg-black rounded-lg p-4 font-mono text-xs">
        <div className="text-green-400">✓ Q4 GST Filing Ready</div>
        <div className="text-gray-400">All 847 invoices verified</div>
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: 'VC-Ready Reports',
    description:
      'Generate investor-grade financial reports in seconds. P&L, cash flow, metrics—everything your board needs.',
    features: ['One-click reports', 'Custom templates', 'Export to any format'],
    visual: (
      <div className="bg-black rounded-lg p-4 font-mono text-xs">
        <div className="text-[#FF4500] mb-1">{'>'} Generate investor deck</div>
        <div className="text-white">📊 P&L | 💰 Cash Flow | 📈 KPIs</div>
      </div>
    ),
  },
];

export function Solution() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif tracking-tight mb-4">
            Your Complete Accounting Toolkit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to run world-class financial operations—powered by AI
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              className={`group relative bg-white p-8 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                activeFeature === index
                  ? 'border-black shadow-2xl scale-105 z-10'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    activeFeature === index
                      ? 'bg-[#FF4500]'
                      : 'bg-black'
                  }`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2 mb-4">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Visual demo */}
                {activeFeature === index && (
                  <div className="mt-4 animate-slideUp">
                    {feature.visual}
                  </div>
                )}
              </div>

              {/* Corner accent */}
              {activeFeature === index && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF4500] -z-10 rounded-tr-xl"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <p className="text-gray-600 mb-6">
              All features work together seamlessly. Your entire financial operation, automated.
            </p>
            <a
              href="https://calendly.com/request-emberquant/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-[#FF4500] text-white rounded-lg transition-all hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              <span>See It in Action</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
