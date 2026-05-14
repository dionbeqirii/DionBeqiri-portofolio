"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* CTA Band */}
      <div className="relative py-24 bg-gradient-to-b from-[#0a0f1e] to-[#0d1526]">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Together.</span>
            </h2>

            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you need a NetSuite expert or a full-stack engineer, feel
              free to reach out. I&apos;m always open to discussing new
              opportunities and interesting projects.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="mailto:dbeqiri688@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-base shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
              >
                <Mail size={18} />
                Get in Touch
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/dion-beqiri-6207a6199/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 py-4 rounded-xl border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/50 font-semibold text-base transition-all duration-300"
              >
                <Linkedin size={18} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="bg-[#080c18] border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Dion Beqiri</div>
                <div className="text-slate-600 text-xs">
                  NetSuite Consultant & Full-Stack Developer
                </div>
              </div>
            </motion.div>

            {/* Nav links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-slate-600 hover:text-slate-300 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Socials + Scroll top */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/dionbeqirii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="p-2.5 rounded-lg border border-slate-800 text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200"
                >
                  <Github size={18} />
                </motion.div>
              </a>
              <a
                href="https://www.linkedin.com/in/dion-beqiri-6207a6199/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="p-2.5 rounded-lg border border-slate-800 text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200"
                >
                  <Linkedin size={18} />
                </motion.div>
              </a>

              <div className="w-px h-6 bg-slate-800 mx-1" />

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-lg border border-slate-800 text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-700">
              © {new Date().getFullYear()} Dion Beqiri. All rights reserved.
            </p>
            <p className="text-xs text-slate-700 flex items-center gap-1.5">
              Built with Next.js, Tailwind CSS & Framer Motion
              <Heart size={11} className="text-rose-600" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
