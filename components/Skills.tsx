"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Globe, Brain, Server } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const tagSkills = [
  "SuiteScript 2.x","SuiteFlow","REST APIs","NetSuite","React","Next.js","TypeScript",
  "Python","Node.js","Tailwind CSS","SQL","Supabase","Git","OpenAI API",
  "Prompt Engineering","HTML5","CSS3","JavaScript","PDF Templates","Business Automation",
];

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const skillCategories = [
    {
      title: t.skills.categories.erp,
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      glow: "rgba(16,185,129,0.15)",
      skills: [
        { name: "SuiteScript 2.x", level: 98 },
        { name: "SuiteFlow (Workflows)", level: 95 },
        { name: "Advanced PDF/HTML Templates", level: 98 },
        { name: "REST API Integrations", level: 92 },
        { name: "Saved Searches", level: 96 },
        { name: "Business Logic Automation", level: 94 },
      ],
    },
    {
      title: t.skills.categories.fullstack,
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      glow: "rgba(6,182,212,0.15)",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Python", level: 80 },
        { name: "Node.js", level: 78 },
      ],
    },
    {
      title: t.skills.categories.db,
      icon: Database,
      color: "from-violet-500 to-purple-500",
      glow: "rgba(139,92,246,0.15)",
      skills: [
        { name: "SQL", level: 85 },
        { name: "Supabase", level: 82 },
        { name: "Git Version Control", level: 90 },
      ],
    },
    {
      title: t.skills.categories.ai,
      icon: Brain,
      color: "from-rose-500 to-pink-500",
      glow: "rgba(244,63,94,0.15)",
      skills: [
        { name: "OpenAI API Integration", level: 85 },
        { name: "Prompt Engineering", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative section-padding bg-[#0d1526]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-sm font-mono text-emerald-400 tracking-widest uppercase">
            {t.skills.sectionTag}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.skills.title}{" "}
            <span className="text-gradient">{t.skills.titleAccent}</span>
          </h2>
          <p className="text-slate-500 max-w-xl">{t.skills.subtitle}</p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.12 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl bg-[#111827] border border-slate-800/60 card-glow card-glow-hover transition-all duration-400 overflow-hidden"
              >
                <div
                  className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: category.glow }}
                />
                <div className="flex items-center gap-3 mb-6 relative">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4 relative">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: catIdx * 0.12 + skillIdx * 0.08 + 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-slate-600 font-mono tracking-widest uppercase mb-4">
            {t.skills.allTech}
          </p>
          <div className="flex flex-wrap gap-2">
            {tagSkills.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-slate-800/60 transition-all duration-200 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
