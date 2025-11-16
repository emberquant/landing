import { ImageWithFallback } from './figma/ImageWithFallback';

export function Founder() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Photo */}
            <div className="md:col-span-2">
              <ImageWithFallback
                src="/mrudul.png"
                alt="Mrudul Mamtani, Founder of EmberQuant"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-8 md:py-12 flex flex-col justify-center">
              <div className="mb-4 text-gray-500 tracking-wide uppercase">
                From the Founder
              </div>
              
              <blockquote className="space-y-6">
                <p className="font-serif text-gray-900">
                  "We built EmberQuant to give startups the same financial superpowers as large enterprises, letting founders focus on growth, not spreadsheets."
                </p>
                
                <footer className="space-y-1">
                  <div className="text-gray-900">
                    Mrudul Mamtani
                  </div>
                  <div className="text-gray-600">
                    Founder, EmberQuant
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
