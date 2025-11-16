import { TransformationVisual } from './TransformationVisual';

export function Problem() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4500]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif tracking-tight text-black mb-6">
            Watch the Magic Happen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            From multiple data sources to AI-powered insights in seconds
          </p>
        </div>

        {/* Main Visual */}
        <div className="max-w-6xl mx-auto mb-16">
          <TransformationVisual />
        </div>

        {/* Explanation Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF4500] to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="mb-3 text-sm">
                Multi-Source Scan
              </h3>
              <p className="text-gray-600 text-sm">
                Automatically processes invoices, expenses, and payroll from all your systems
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF4500] to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="mb-3 text-sm">
                Build Relationships
              </h3>
              <p className="text-gray-600 text-sm">
                AI creates intelligent process flows and relationship maps across your data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF4500] to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="mb-3 text-sm">
                Live Dashboard
              </h3>
              <p className="text-gray-600 text-sm">
                Real-time metrics, charts, and insights updated automatically as data flows in
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF4500] to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="mb-3 text-sm">
                Ready to Scale
              </h3>
              <p className="text-gray-600 text-sm">
                From startup to enterprise, EmberQuant grows with your business
              </p>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#FF4500] transition-all hover:scale-105 shadow-lg">
            <div className="text-4xl font-mono bg-gradient-to-r from-[#FF4500] to-orange-600 bg-clip-text text-transparent mb-2">60%</div>
            <div className="text-gray-600">Less Time</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#FF4500] transition-all hover:scale-105 shadow-lg">
            <div className="text-4xl font-mono bg-gradient-to-r from-[#FF4500] to-orange-600 bg-clip-text text-transparent mb-2">$50K+</div>
            <div className="text-gray-600">Saved/Year</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#FF4500] transition-all hover:scale-105 shadow-lg">
            <div className="text-4xl font-mono bg-gradient-to-r from-[#FF4500] to-orange-600 bg-clip-text text-transparent mb-2">99.9%</div>
            <div className="text-gray-600">Accuracy</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#FF4500] transition-all hover:scale-105 shadow-lg">
            <div className="text-4xl font-mono bg-gradient-to-r from-[#FF4500] to-orange-600 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-gray-600">Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
