"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [imgError, setImgError] = useState(false);

  const stats = [
    { label: t.about.stats.experience, value: "3+" },
    { label: t.about.stats.projects, value: "10+" },
    { label: t.about.stats.erp, value: "50+" },
    { label: t.about.stats.location, value: "Kosovo" },
  ];

  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-sm font-mono text-emerald-400 tracking-widest uppercase">
            {t.about.sectionTag}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-20 blur-md group-hover:opacity-35 transition-opacity duration-500" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/40">
                {imgError && (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-[#0a0f1e] flex items-center justify-center z-0">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/20 flex items-center justify-center mx-auto mb-3 border border-emerald-500/20">
                        <User size={40} className="text-emerald-400/60" />
                      </div>
                      <p className="text-slate-500 text-xs font-mono">profile.jpg</p>
                    </div>
                  </div>
                )}
                <Image
                  src="/profile.jpg"
                  alt="Dion Beqiri"
                  fill
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover object-top z-10"
                  priority
                  onError={() => setImgError(true)}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-5 -right-5 bg-[#111827] border border-slate-700/60 rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white">{t.about.openToWork}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t.about.title}{" "}
              <span className="text-gradient">{t.about.titleAccent}</span>
            </h2>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed mb-8">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-emerald-500/30 hover:bg-slate-800/40 transition-all duration-300 card-glow"
                >
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
