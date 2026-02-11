import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const categories = ["All", ...Array.from(new Set(blogPosts.map((b) => b.category)))];

const Blogs = () => {
  const [filter, setFilter] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = filter === "All" ? blogPosts : blogPosts.filter((b) => b.category === filter);

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 max-w-2xl mx-auto"
        >
          <p className="text-xs font-body font-semibold text-primary tracking-widest uppercase mb-3">Founder Insights</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">The EmberQuant Blog</h1>
          <p className="text-muted-foreground font-body">
            Research, frameworks, and case studies at the intersection of AI, risk, and compliance.
          </p>
        </motion.div>

        {/* Newsletter — moved to top, right below heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6 md:p-8 text-center max-w-2xl mx-auto mb-10"
        >
          <h3 className="font-display text-lg text-foreground mb-2">Stay Ahead of Risk</h3>
          <p className="text-sm text-muted-foreground font-body mb-4">
            Weekly insights on AI governance, compliance, and enterprise risk management.
          </p>
          {!subscribed ? (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-muted border border-border rounded-md px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground font-body font-semibold px-6 py-2.5 rounded-md hover:bg-primary/90 transition text-sm flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <p className="text-sm text-primary font-body font-semibold">✓ You're subscribed. Welcome aboard.</p>
          )}
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-xs font-body font-semibold px-4 py-2 rounded-full transition ${filter === c
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                to={`/blog/${b.slug}`}
                className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition group h-full"
              >
                <span className="text-[10px] font-body font-semibold text-primary tracking-widest uppercase">
                  {b.category}
                </span>
                <h3 className="font-display text-lg text-foreground mt-2 mb-2 leading-snug group-hover:text-primary transition">
                  {b.title}
                </h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed mb-3 line-clamp-2">
                  {b.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {b.readTime}</span>
                  <span>{b.date}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blogs;
