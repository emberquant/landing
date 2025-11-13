import { Check } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    name: 'Starter',
    price: 10,
    description: 'Perfect for early-stage startups',
    features: [
      'Basic AI accounting assistance',
      'Up to 100 transactions/month',
      'Standard reports',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: 20,
    description: 'For growing startups',
    features: [
      'Full AI accounting suite',
      'Unlimited transactions',
      'VC-ready financial reports',
      'Auto process mining',
      'Priority support',
      'Custom integrations',
    ],
    cta: 'Book a Demo',
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'For scaling companies',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom AI training',
      'Advanced compliance tools',
      'API access',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-white border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your startup's needs. All plans include core AI features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 border-2 transition-all hover:shadow-xl relative ${
                plan.recommended
                  ? 'border-black shadow-lg scale-105'
                  : 'border-gray-200'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-1.5 rounded-full font-mono text-sm">
                  Recommended
                </div>
              )}

              {/* Corner accent for recommended */}
              {plan.recommended && (
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#FF4500] -z-10 rounded-tr-xl"></div>
              )}

              <div className="mb-6">
                <h3 className="mb-2">{plan.name}</h3>
                <div className="mb-2">
                  {plan.price ? (
                    <div>
                      <span className="font-serif">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600">/mo</span>
                    </div>
                  ) : (
                    <span className="font-serif">
                      Custom
                    </span>
                  )}
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Check className="w-5 h-5 text-black shrink-0" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full transition-all ${
                  plan.recommended
                    ? 'bg-black hover:bg-[#FF4500] text-white'
                    : 'bg-white hover:bg-black text-black hover:text-white border-2 border-black'
                }`}
              >
                <a
                  href="https://calendly.com/request-emberquant/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
