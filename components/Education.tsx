"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";

const educationItems = [
  {
    type: "degree",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.12)",
    badge: "Currently Enrolled",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Bachelor of Science",
    subtitle: "Computer Science & Engineering",
    institution: "University of Mitrovica",
    year: "2021 – Present",
    description:
      "Comprehensive study of software engineering principles, algorithms, data structures, computer architecture, and modern programming paradigms. Applying academic knowledge directly to real-world consulting projects.",
    tags: ["Algorithms", "Software Engineering", "Data Structures", "Networking", "Databases"],
  },
  {
    type: "cert",
    icon: Award,
    color: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.12)",
    badge: "Oracle Certified",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    title: "AI Foundations Associate",
    subtitle: "Certificate",
    institution: "Oracle NetSuite",
    year: "2024",
    description:
      "Official Oracle certification validating expertise in AI foundations within the NetSuite ecosystem. Covers machine learning fundamentals, AI integration patterns, and intelligent automation in enterprise ERP environments.",
    tags: ["NetSuite", "AI Foundations", "Machine Learning", "Oracle", "ERP Automation"],
    link: "#",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="education" className="relative section-padding">
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
            05 / Education
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
            Education &{" "}
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-500 max-w-xl">
            Academic foundation combined with industry-recognized certifications
            that back every technical decision.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {educationItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-2xl bg-[#111827] border border-slate-800/60 card-glow card-glow-hover transition-all duration-500 overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: item.glow }}
                />

                {/* Icon + Badge row */}
                <div className="flex items-start justify-between gap-3 mb-6 relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <span
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title block */}
                <div className="mb-4 relative">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-0.5">
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  <a
                    href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=B960B7A8378CB47AEA85A3B497A8D2161C8EF83D686653558C06802BB4235BA9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-slate-700 text-slate-500 hover:text-slate-300 hover:border-slate-600 transition-colors flex-shrink-0"
                  >
                    <ExternalLink size={14} />
                  </a>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <BookOpen size={13} className="text-slate-600" />
                    <span className="text-sm text-slate-500">
                      {item.institution}
                    </span>
                    <span className="text-slate-700">·</span>
                    <span className="text-xs font-mono text-slate-600">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-slate-800/60 mb-4" />

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-5 relative">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900/60 border border-slate-800 text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
