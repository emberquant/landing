import { Button } from './ui/button';

export function FinalCTA() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif tracking-tight text-white mb-8">
          Ready to Quantify Your Excellence?
        </h2>
        
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Join the startups transforming their financial operations with AI-powered accounting. Get VC-ready financials without the enterprise price tag.
        </p>
        
        <Button 
          asChild
          className="bg-[#FF4500] hover:bg-[#E03E00] text-white px-12 py-6"
        >
          <a 
            href="https://calendly.com/request-emberquant/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </a>
        </Button>
      </div>
    </section>
  );
}
