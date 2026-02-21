import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

// ── Palette ─────────────────────────────────────────────────
const P = {
  bg: "#0c1a2a",
  surface: "#0f1520",
  border: "#1c2438",
  primary: "#5b8def",
  accent: "#8FAADC",
  text: "#c8d4e4",
  muted: "#4e5a72",
  white: "#e8ecf2",
  ok: "#3d8b5f",
};

// ── Command Typing ──────────────────────────────────────────
const cmds = [
  "RISK LANDSCAPE --live",
  "QUANT EXPOSURE --95ci",
  "SYNC CONNECTORS --all",
  "SCAN COMPLIANCE --soc2",
];

const TypingCommand = () => {
  const [cmdIdx, setCmdIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "clear">("typing");
  const charRef = useRef(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const cmd = cmds[cmdIdx % cmds.length];
      if (phase === "typing") {
        if (charRef.current <= cmd.length) {
          setDisplayed(cmd.slice(0, charRef.current));
          charRef.current++;
          t = setTimeout(tick, 55 + Math.random() * 35);
        } else { setPhase("pause"); t = setTimeout(tick, 2200); }
      } else if (phase === "pause") {
        setPhase("clear"); t = setTimeout(tick, 300);
      } else {
        setDisplayed(""); charRef.current = 0;
        setCmdIdx((p) => p + 1); setPhase("typing");
        t = setTimeout(tick, 700);
      }
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, [cmdIdx, phase]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded px-3.5 py-1.5 font-mono text-[11px] border"
      style={{ background: P.surface, borderColor: P.border, color: P.muted }}
    >
      <span style={{ color: P.primary }} className="font-semibold text-[10px]">EQ:&gt;</span>
      <span className="min-w-[170px] text-left" style={{ color: P.text }}>
        {displayed}<span className="animate-pulse" style={{ color: P.muted }}>_</span>
      </span>
      <AnimatePresence>
        {phase === "pause" && (
          <motion.span
            initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
            className="text-[9px] px-1.5 py-0.5 rounded-sm font-mono"
            style={{ background: `${P.ok}15`, color: P.ok }}
          >✓</motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ── Stats ───────────────────────────────────────────────────
const stats = [
  { label: "RISKS COMPUTED", value: "2,847", color: P.text },
  { label: "CONTROLS", value: "134/148", color: P.ok },
  { label: "EXPOSURE", value: "$24.7M", color: "#d4903a" },
  { label: "CONNECTORS", value: "23", color: P.primary },
];

const LiveStats = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.6, duration: 0.5 }}
    className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-8"
  >
    {stats.map((s, i) => (
      <div key={s.label} className="flex items-center gap-2 font-mono text-[10px]">
        <span style={{ color: P.muted, fontSize: "9px", letterSpacing: "0.08em" }} className="uppercase tracking-wider">{s.label}</span>
        <span className="font-semibold tabular-nums" style={{ color: s.color }}>{s.value}</span>
        {i < stats.length - 1 && <span className="hidden md:inline ml-2" style={{ color: P.border }}>|</span>}
      </div>
    ))}
  </motion.div>
);

// ═══════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: P.bg }}>

    {/* ── Clean background — noise texture only ─────── */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px",
      }}
    />

    {/* ── Content ──────────────────────────────────────── */}
    <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center" style={{ marginTop: "10px" }}>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6"
        style={{ borderColor: `${P.border}80`, background: `${P.surface}90`, backdropFilter: "blur(8px)" }}
      >
        <img src={logo} alt="EQ" className="h-4 w-auto rounded-sm opacity-80" />
        <span className="text-[10px] font-body font-medium tracking-[0.15em] uppercase" style={{ color: P.muted }}>Enterprise Risk Intelligence</span>
      </motion.div>

      {/* Kicker */}
      <motion.p
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
        className="text-sm md:text-base mb-5 tracking-wide max-w-xl mx-auto font-light"
        style={{ color: P.muted, fontFamily: "'Google Sans', 'Product Sans', 'Inter', system-ui, sans-serif" }}
      >
        Risk is not guessed. It is computed.
      </motion.p>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
        className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-3 max-w-4xl"
        style={{ color: P.white }}
      >
        The AI for <br className="hidden sm:block" />
        <span style={{ color: P.white }}>risk takers.</span>
      </motion.h1>

      {/* Underline */}
      <motion.div
        className="mx-auto mb-7"
        style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${P.primary}35, ${P.primary}50, ${P.primary}35, transparent)` }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 200, opacity: 1 }}
        transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
      />

      {/* Sub-line */}
      <motion.p
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
        className="font-body text-base md:text-lg mb-7 leading-relaxed max-w-xl mx-auto"
        style={{ color: P.muted }}
      >
        See your risk landscape in real-time.
      </motion.p>

      <TypingCommand />

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
      >
        <Link
          to="/platform"
          className="group inline-flex items-center gap-2 font-body font-semibold px-7 py-3 rounded transition-all text-sm w-full sm:w-auto justify-center"
          style={{ background: P.primary, color: "#fff" }}
        >
          Request Access <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link
          to="/connectors"
          className="inline-flex items-center gap-2 border font-body font-medium px-7 py-3 rounded transition-all text-sm w-full sm:w-auto justify-center hover:bg-white/[0.03]"
          style={{ borderColor: `${P.border}80`, color: P.muted }}
        >
          Explore Demo
        </Link>
      </motion.div>

      <LiveStats />
    </div>
  </section>
);

export default HeroSection;
