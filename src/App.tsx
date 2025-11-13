import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { ProductShowcase } from './components/ProductShowcase';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Founder } from './components/Founder';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustedBy />
      <Problem />
      <Solution />
      <Pricing />
      <ProductShowcase />   
      <Testimonials />
      <Founder />
      <FinalCTA />
    </div>
  );
}
