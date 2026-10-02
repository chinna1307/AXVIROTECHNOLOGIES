import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Layers } from 'lucide-react';
import { projects } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const statusConfig = {
  active: { label: 'Active', color: 'bg-emerald-400', text: 'text-emerald-300' },
  'in-progress': { label: 'In Progress', color: 'bg-orange-400', text: 'text-orange-300' },
  archived: { label: 'Archived', color: 'bg-slate-500', text: 'text-slate-400' },
};

function ProjectCard({ project, index }) {
  const status = statusConfig[project.status] || statusConfig['active'];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group glass-card glass-card-hover relative flex flex-col overflow-hidden rounded-[1.75rem] p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* Hover glow */}
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-orange-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Status badge */}
      <div className="mb-6 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${status.color} animate-pulse`} />
        <span className={`text-xs font-medium uppercase tracking-widest ${status.text}`}>{status.label}</span>
      </div>

      {/* Title */}
      <h3 className="tech-font mb-3 text-2xl font-bold text-white leading-tight">{project.title}</h3>

      {/* Description */}
      <p className="mb-6 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div className="mb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Key Features</p>
          <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        {project.liveDemo ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-400"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        ) : null}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        ) : (
          <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-600 cursor-default select-none">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Private
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <div className="relative z-10 min-h-screen overflow-hidden pb-24 pt-32 text-white">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-orange-500/8 blur-3xl" />
      <div className="pointer-events-none absolute top-2/3 -right-20 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div variants={fadeUp} className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
            Projects
          </motion.div>
          <motion.h1 variants={fadeUp} className="mb-6 text-4xl font-extrabold md:text-6xl tech-font">
            Featured{' '}
            <span className="gradient-text">Work</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg font-light leading-8 text-slate-400">
            Real projects — built with modern technologies, designed for production.
          </motion.p>
        </motion.div>

        {/* Projects List */}
        {projects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-6 rounded-[2rem] border border-dashed border-white/10 py-24 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-500">
              <Layers size={28} />
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-400">Projects coming soon</p>
              <p className="mt-2 text-sm text-slate-600">Check back for project showcases.</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="tech-font mb-3 text-2xl font-bold text-white">Have a project idea?</h3>
          <p className="mb-6 text-slate-400">We'd love to hear about it.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 hover:bg-orange-400"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
