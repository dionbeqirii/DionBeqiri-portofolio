"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  codeUrl: string;
  featured?: boolean;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "AI Teacher Assistant",
    description:
      "A secure, intelligent web platform designed to automate complex teacher evaluations, administrative tasks, and grading workflows using large language models. Built for speed and precision in academic environments.",
    tags: ["Next.js", "Supabase", "OpenAI API"],
    image: "/ai-teacher.jpg",
    liveUrl: "https://ai-teacher-assistant-db.vercel.app/dashboard",
    codeUrl: "https://github.com/dionbeqirii",
    featured: true,
    gradient: "from-emerald-900/60 via-teal-900/40 to-[#111827]",
  },
  {
    title: "Glow By Diellza Studio",
    description:
      "A specialized boutique application tailored for a skincare studio. Features separate customer experiences and secure administrator dashboards to manage services and online scheduling.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/glow-studio.jpg",
    liveUrl: "https://glowbydiellza.vercel.app/",
    codeUrl: "https://github.com/dionbeqirii",
    featured: true,
    gradient: "from-rose-900/50 via-pink-900/30 to-[#111827]",
  },
  {
    title: "VibeMenu-Digital",
    description:
      "A sleek, dynamic digital menu platform built to elevate the hospitality guest experience. Focuses heavily on high-performance rendering and seamless mobile UI for modern restaurants and cafés.",
    tags: ["React", "UI/UX", "Web Engineering"],
    image: "/vibemenu.jpg",
    codeUrl: "https://github.com/dionbeqirii/VibeMenu-Digital",
    gradient: "from-violet-900/50 via-purple-900/30 to-[#111827]",
  },
  {
    title: "Mechanic-Flow",
    description:
      "An internal automation management tool optimized for automotive workshops to coordinate service scheduling, repair workflows, and customer profiles with a clean operational dashboard.",
    tags: ["Python", "Node.js", "Business Automation"],
    image: "/mechanic-flow.jpg",
    codeUrl: "https://github.com/dionbeqirii/Mechanic-Flow",
    gradient: "from-cyan-900/50 via-blue-900/30 to-[#111827]",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-[#111827] border border-slate-800/60 overflow-hidden card-glow card-glow-hover transition-all duration-500 flex flex-col"
    >
      {/* Image / Preview area */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}
      >
        {/* Decorative grid inside card */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Animated corner accents */}
        <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-emerald-500/30 rounded-tl-lg" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-emerald-500/30 rounded-br-lg" />

        {/* Project title large bg text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-black text-white/5 select-none tracking-tighter">
            {project.title.split(" ")[0]}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            Featured
          </div>
        )}

        {/* Hover overlay with links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-400 transition-colors shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} />
            Code
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-slate-600 group-hover:text-emerald-400 flex-shrink-0 mt-0.5 transition-colors duration-300"
          />
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900/80 border border-slate-800 text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors"
          >
            <Github size={13} />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding">
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
            03 / Projects
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
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-500 max-w-xl">
            A curated selection of projects that showcase the breadth of my
            technical capabilities — from AI-powered platforms to ERP automation
            tools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/dionbeqirii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 bg-slate-900/40 hover:bg-slate-800/40 transition-all duration-300 text-sm font-medium"
            >
              <Github size={18} />
              View all projects on GitHub
              <ArrowUpRight size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
