import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-background border-t border-background/10">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="EmberQuant" className="w-8 h-8 rounded-md object-cover" />
            <span className="font-display text-lg text-background">EmberQuant</span>
          </div>
          <p className="text-sm text-background/60 leading-relaxed">
            The AI-powered enterprise risk terminal. Operationalizing compliance at scale.
          </p>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-background mb-4 tracking-wide uppercase">Product</h4>
          <div className="space-y-2">
            <Link to="/platform" className="block text-sm text-background/60 hover:text-background transition">Platform</Link>
            <Link to="/connectors" className="block text-sm text-background/60 hover:text-background transition">Connectors</Link>
            <Link to="/tools" className="block text-sm text-background/60 hover:text-background transition">Tools</Link>
            <Link to="/blogs" className="block text-sm text-background/60 hover:text-background transition">Blog</Link>
          </div>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-background mb-4 tracking-wide uppercase">Contact</h4>
          <div className="space-y-2 text-sm text-background/60">
            <p>General: <a href="mailto:info@emberquant.com" className="text-primary hover:underline">info@emberquant.com</a></p>
            <p>Sales: <a href="mailto:sales@emberquant.com" className="text-primary hover:underline">sales@emberquant.com</a></p>
          </div>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-background mb-4 tracking-wide uppercase">Office</h4>
          <p className="text-sm text-background/60 leading-relaxed">
            Building B16<br />
            Dubai Digital Park<br />
            Dubai, UAE
          </p>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-background/40">© {new Date().getFullYear()} EmberQuant. All rights reserved.</p>
        <div className="flex items-center gap-6 text-xs text-background/40">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
