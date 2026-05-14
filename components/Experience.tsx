"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle2, Calendar, TrendingUp } from "lucide-react";

const highlights = [
  {
    text: "Deliver expert-level Technical Consulting for custom configurations, ensuring deep alignment with clients' overarching financial and logistical goals.",
  },
  {
    text: "Architect and write clean, optimized SuiteScripts (UserEvent, Client, Map/Reduce) alongside sophisticated SuiteFlow triggers for complex business automation.",
  },
  {
    text: "Specialized expert in developing and styling high-fidelity Advanced PDF/HTML Templates for complex localized documents at enterprise scale.",
  },
  {
    text: "Build robust, production-grade custom integrations connecting NetSuite to external systems via secure REST APIs and bi-directional data synchronization.",
  },
];

const techUsed = [
  "SuiteScript 2.x",
  "SuiteFlow",
  "Advanced PDF/HTML",
  "REST APIs",
  "Saved Searches",
  "JavaScript",
  "SQL",
  "NetSuite ERP",
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      className="relative section-padding bg-[#0d1526]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-sm font-mono text-emerald-400 tracking-widest uppercase">
            04 / Experience
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-500 max-w-xl">
            Building enterprise-grade solutions at the intersection of ERP
            systems and software engineering.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent hidden md:block" />

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:pl-20 relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-3.5 top-7 w-5 h-5 rounded-full bg-emerald-500 border-4 border-[#0d1526] shadow-lg shadow-emerald-500/40 hidden md:block" />

            {/* Main card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111827] border border-slate-800/60 card-glow group hover:border-emerald-500/20 transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                {/* Role info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={22} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      NetSuite Technical Consultant
                    </h3>
                    <p className="text-emerald-400 text-sm font-medium">
                      Oracle NetSuite Ecosystem
                    </p>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 self-start flex-shrink-0">
                  <Calendar size={14} />
                  <span className="text-sm font-semibold">3+ Years</span>
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-slate-800/60 mb-6" />

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Tech used */}
              <div className="pt-5 border-t border-slate-800/60">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={14} className="text-emerald-400" />
                  <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">
                    Technologies
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techUsed.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08, y: -1 }}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-400 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
