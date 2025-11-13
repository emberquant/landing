import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    quote:
      "EmberQuant reduced manual review time by over 60%. The AI-powered insights have transformed how we approach financial planning.",
    author: 'Rahul Jaiswal',
    title: 'COO @ Easlearn AI',
  },
  {
    quote:
      "Having Jared as our AI accountant is like having a CFO on demand. The QuantEdge Ledger has eliminated hours of data entry every week.",
    author: 'Priya Sharma',
    title: 'Founder @ TechVenture',
  },
  {
    quote:
      "The automated process mining caught discrepancies we would have missed. EmberQuant pays for itself in the first month.",
    author: 'Michael Chen',
    title: 'CEO @ ScaleUp Labs',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif tracking-tight">
            EQ in Action
          </h2>
        </div>

        <div className="relative">
          <div className="bg-white p-12 rounded-lg border border-gray-200 shadow-sm">
            <blockquote className="space-y-6">
              <p className="font-serif text-gray-900">
                "{testimonials[currentIndex].quote}"
              </p>
              <footer className="space-y-1">
                <div className="text-gray-900">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].title}
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
