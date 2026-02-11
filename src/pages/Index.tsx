import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";
import FunnelChart from "@/components/FunnelChart";
import HeroSection from "@/components/HeroSection";
import StatsHighlights from "@/components/StatsHighlights";
import StandardsSection from "@/components/StandardsSection";
import ValueProps from "@/components/ValueProps";

const caseStudies = [
  {
    img: caseStudy1,
    tag: "Financial Services",
    title: "How a Tier-1 Bank Reduced Operational Risk by 40%",
    desc: "EmberQuant's risk terminal identified 2,300+ control gaps across 14 business units, enabling the bank to remediate critical risks 3x faster than manual processes.",
  },
  {
    img: caseStudy2,
    tag: "Healthcare",
    title: "HIPAA Compliance Automation for a Hospital Network",
    desc: "A 50-hospital network achieved continuous HIPAA compliance monitoring, reducing audit preparation time from 6 months to 3 weeks.",
  },
  {
    img: caseStudy3,
    tag: "Technology",
    title: "AI Governance Framework for a Fortune 500 Tech Firm",
    desc: "Deployed EmberQuant's OSINT tools to classify AI models across 200+ deployments, establishing the first enterprise-wide AI risk register.",
  },
];

const Index = () => (
  <main>
    <HeroSection />


    <StatsHighlights />
    <StandardsSection />

    {/* Connector Flow */}
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-body font-semibold text-primary tracking-widest uppercase mb-3">Architecture</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">From Processes to Risk Register</h2>
          <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
            23 connectors ingest enterprise procedures, identify risks across ERPs and emerging tech, and produce a comprehensive risk database.
          </p>
        </div>
        <FunnelChart />
      </div>
    </section>

    <ValueProps />

    {/* Case Studies */}
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs font-body font-semibold text-primary tracking-widest uppercase mb-3">Case Studies</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Proven at Enterprise Scale</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition"
            >
              <div className="h-48 overflow-hidden">
                <img src={cs.img} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-body font-semibold text-primary tracking-widest uppercase">{cs.tag}</span>
                <h3 className="font-display text-lg text-foreground mt-2 mb-3 leading-snug">{cs.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{cs.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-body font-semibold hover:underline">
                  Read More <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 md:py-24 bg-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-background mb-4">Ready to Operationalize Risk?</h2>
        <p className="text-background/60 font-body max-w-lg mx-auto mb-8">
          Join leading enterprises using EmberQuant to transform compliance from a cost center into a strategic advantage.
        </p>
        <Link
          to="/platform"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-md hover:bg-primary/90 transition text-sm"
        >
          Request Access <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </main>
);

export default Index;
