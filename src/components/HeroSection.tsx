import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";
import MacbookTerminal from "./MacbookTerminal";
import EnterpriseDashboard from "./EnterpriseDashboard";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />

    <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left z-20"
        >
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8 bg-background/50 backdrop-blur-sm">
            <img src={logo} alt="EQ" className="h-6 w-auto rounded-sm" />
            <span className="text-xs font-body text-muted-foreground font-semibold tracking-wide uppercase">Enterprise Risk Terminal</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[1.05] mb-6">
            The AI for <br />
            <span className="text-gradient">risk takers.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Compliance cannot be automated, it must be operationalized. See your risk landscape in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 bg-foreground text-background font-body font-semibold px-8 py-3.5 rounded-md hover:bg-foreground/90 transition text-sm w-full sm:w-auto justify-center"
            >
              Request Access <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/connectors"
              className="inline-flex items-center gap-2 border border-border text-foreground font-body font-semibold px-8 py-3.5 rounded-md hover:bg-muted transition text-sm w-full sm:w-auto justify-center"
            >
              Explore Demo
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Terminal Demo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-2xl mx-auto lg:max-w-none perspective-1000"
        >
          <MacbookTerminal>
            <div className="w-full h-full text-xs overscroll-contain">
              <EnterpriseDashboard />
            </div>
          </MacbookTerminal>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
