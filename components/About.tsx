"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "3+", icon: Briefcase },
  { label: "Projects Shipped", value: "10+", icon: User },
  { label: "ERP Customizations", value: "50+", icon: GraduationCap },
  { label: "Location", value: "Kosovo", icon: MapPin },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [imgError, setImgError] = useState(false);

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
            01 / About
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
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-20 blur-md group-hover:opacity-35 transition-opacity duration-500" />

              {/* Image container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/40">
                {/* Fallback — shown only when image fails or while loading */}
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

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-5 -right-5 bg-[#111827] border border-slate-700/60 rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white">
                    Open to work
                  </span>
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
              A Developer Who{" "}
              <span className="text-gradient">Thinks in Systems</span>
            </h2>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed mb-8">
              <p>
                I am a full-stack Software Developer with over{" "}
                <span className="text-emerald-400 font-medium">
                  3 years of specialized experience
                </span>{" "}
                in NetSuite technical consulting. Currently completing my
                Bachelor&apos;s degree in Computer Science and Engineering at
                the University of Mitrovica, I thrive on solving complex
                technical and business logic challenges.
              </p>
              <p>
                Whether architecting advanced NetSuite workflows, customizing
                mission-critical business templates, or engineering modern web
                platforms with{" "}
                <span className="text-slate-300 font-medium">
                  React and Python
                </span>
                , my focus is always on speed, performance, and delivering real
                value.
              </p>
              <p>
                I specialize in NetSuite&apos;s full development ecosystem and
                integrating external platforms seamlessly via{" "}
                <span className="text-emerald-400 font-medium">
                  secure REST APIs
                </span>
                .
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="group p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-emerald-500/30 hover:bg-slate-800/40 transition-all duration-300 card-glow"
                >
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
