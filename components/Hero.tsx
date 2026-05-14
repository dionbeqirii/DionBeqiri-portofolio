"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20"
    >
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-emerald-500/5 absolute animate-pulse-slow" />
        <div className="w-[800px] h-[800px] rounded-full border border-emerald-500/5 absolute" />
        <div className="w-[1000px] h-[1000px] rounded-full border border-slate-700/20 absolute" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-emerald-400/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
        >
          <Sparkles size={14} />
          <span>Available for new opportunities</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="relative">
            <span className="text-gradient">Dion Beqiri</span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            />
          </span>
          <span className="text-emerald-400">.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-lg sm:text-xl lg:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed mb-4"
        >
          NetSuite Technical Consultant &amp; Full-Stack Developer.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Bridging the gap between enterprise ERP architecture and modern,
          user-focused web applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => handleScroll("projects")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-base shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
          >
            View My Work
            <ArrowDown
              size={18}
              className="group-hover:translate-y-1 transition-transform"
            />
          </motion.button>

          <motion.button
            onClick={() => handleScroll("footer")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 rounded-xl border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-white font-semibold text-base bg-slate-900/50 hover:bg-slate-800/50 backdrop-blur-sm transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com/dionbeqirii"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-800/60 text-slate-400 hover:text-emerald-400 transition-all duration-300"
          >
            <Github size={20} />
            <span className="text-sm font-medium hidden sm:block">GitHub</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/dion-beqiri-6207a6199/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-800/60 text-slate-400 hover:text-emerald-400 transition-all duration-300"
          >
            <Linkedin size={20} />
            <span className="text-sm font-medium hidden sm:block">LinkedIn</span>
          </motion.a>

          <div className="h-px w-8 bg-slate-700" />

          <span className="text-xs text-slate-600 font-mono">
            Based in Kosovo
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-slate-600 cursor-pointer"
            onClick={() => handleScroll("about")}
          >
            <span className="text-xs font-mono tracking-widest uppercase">
              Scroll
            </span>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
