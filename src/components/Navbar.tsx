import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import RiskTicker from "./RiskTicker";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Platform", path: "/platform" },
  { label: "Connectors", path: "/connectors" },
  { label: "Tools", path: "/tools" },
  { label: "Blogs", path: "/blogs" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <RiskTicker />
      <nav className={`border-b border-border transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-xl shadow-sm" : "bg-background/80 backdrop-blur-xl"
        }`}>
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="EmberQuant logo"
              className="w-8 h-8 rounded-md object-cover"
            />
            <span
              className={`font-display text-lg text-foreground transition-all duration-300 overflow-hidden whitespace-nowrap ${scrolled ? "w-0 opacity-0" : "w-auto opacity-100"
                }`}
            >
              EmberQuant
            </span>
            <span
              className={`font-display text-lg text-foreground transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}
            >
              EQ
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-body transition-colors ${location.pathname === l.path ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/platform"
              className="text-sm font-body font-semibold bg-foreground text-background px-5 py-2 rounded-md hover:bg-foreground/90 transition"
            >
              Request Access
            </Link>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {
        open && (
          <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-3xl z-40 md:hidden flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-top-4 duration-300">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className="text-2xl font-display text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/platform"
              onClick={() => setOpen(false)}
              className="text-lg font-semibold bg-foreground text-background px-8 py-3 rounded-full hover:bg-foreground/90 transition shadow-lg mt-8"
            >
              Request Access
            </Link>
          </div>
        )
      }
    </header >
  );
};

export default Navbar;
