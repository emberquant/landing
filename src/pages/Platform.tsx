import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";

const Platform = () => {
  const [inviteCode, setInviteCode] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-6 flex items-center justify-center">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl text-foreground mb-3">Access the Terminal</h1>
          <p className="text-muted-foreground font-body">
            EmberQuant is currently available by invite only. Enter your invite code or request access below.
          </p>
        </motion.div>

        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-8 space-y-5"
          >
            <div>
              <label className="text-xs font-body font-semibold text-muted-foreground tracking-wide uppercase block mb-2">
                Invite Code
              </label>
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="EQ-XXXX-XXXX"
                className="w-full bg-muted border border-border rounded-md px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="relative flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground font-body">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div>
              <label className="text-xs font-body font-semibold text-muted-foreground tracking-wide uppercase block mb-2">
                Work Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-muted border border-border rounded-md px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-semibold py-3.5 rounded-md hover:bg-primary/90 transition text-sm flex items-center justify-center gap-2"
            >
              {inviteCode ? "Enter Terminal" : "Request Access"} <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-primary/20 rounded-xl p-8 text-center"
          >
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">Request Received</h3>
            <p className="text-sm text-muted-foreground font-body">
              Our team will review your request and reach out within 24 hours.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Platform;
