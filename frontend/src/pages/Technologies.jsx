import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

/* Inline SVG icons for tech logos (simple shapes) */
const techCategories = [
  {
    category: 'Frontend',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-400/20',
    accent: 'text-blue-300',
    dot: 'bg-blue-400',
    techs: [
      { name: 'React', abbr: 'Re' },
      { name: 'Next.js', abbr: 'Nx' },
      { name: 'TypeScript', abbr: 'TS' },
      { name: 'Tailwind CSS', abbr: 'Tw' },
      { name: 'Flutter', abbr: 'Fl' },
      { name: 'Vue.js', abbr: 'Vu' },
    ],
  },
  {
    category: 'Backend',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-400/20',
    accent: 'text-emerald-300',
    dot: 'bg-emerald-400',
    techs: [
      { name: 'Node.js', abbr: 'No' },
      { name: 'Python', abbr: 'Py' },
      { name: 'FastAPI', abbr: 'FA' },
      { name: 'GraphQL', abbr: 'GQ' },
      { name: 'REST APIs', abbr: 'RE' },
      { name: 'Go', abbr: 'Go' },
    ],
  },
  {
    category: 'Cloud',
    color: 'from-orange-500/10 to-amber-500/10 border-orange-400/20',
    accent: 'text-orange-300',
    dot: 'bg-orange-400',
    techs: [
      { name: 'AWS', abbr: 'AW' },
      { name: 'Azure', abbr: 'Az' },
      { name: 'GCP', abbr: 'GC' },
      { name: 'Vercel', abbr: 'Ve' },
      { name: 'Netlify', abbr: 'Ne' },
      { name: 'Cloudflare', abbr: 'CF' },
    ],
  },
  {
    category: 'DevOps & Data',
    color: 'from-purple-500/10 to-violet-500/10 border-purple-400/20',
    accent: 'text-purple-300',
    dot: 'bg-purple-400',
    techs: [
      { name: 'Docker', abbr: 'Do' },
      { name: 'Kubernetes', abbr: 'K8' },
      { name: 'MongoDB', abbr: 'Mg' },
      { name: 'PostgreSQL', abbr: 'PG' },
      { name: 'Redis', abbr: 'Rd' },
      { name: 'Terraform', abbr: 'Tf' },
    ],
  },
];

const howWeWork = [
  { step: '01', title: 'Discover & Assess', desc: 'We audit your current stack, understand constraints, and identify the best tools for your goals.' },
  { step: '02', title: 'Architect & Design', desc: 'We design a scalable, future-proof architecture using proven technology combinations.' },
  { step: '03', title: 'Build & Integrate', desc: 'Our engineers implement with clean code, comprehensive tests, and tight API integration.' },
  { step: '04', title: 'Monitor & Optimize', desc: 'Post-launch, we continuously monitor performance and optimize for reliability and cost.' },
];

export default function Technologies() {
  return (
    <div className="relative z-10 min-h-screen overflow-hidden pb-24 pt-32 text-white">
      <div className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-blue-500/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-orange-500/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-20 text-center">
          <motion.div variants={fadeUp} className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
            Technologies
          </motion.div>
          <motion.h1 variants={fadeUp} className="mb-6 text-4xl font-extrabold md:text-6xl tech-font">
            The Modern Stack Behind{' '}
            <span className="gradient-text">Our Work</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg font-light leading-8 text-slate-400">
            We work with the best tools in the industry — carefully selected to deliver performance, scalability, and reliability across every layer.
          </motion.p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid gap-6 md:grid-cols-2 mb-28">
          {techCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className={`rounded-[1.75rem] border bg-gradient-to-br p-8 ${cat.color}`}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${cat.dot}`} />
                <h3 className={`text-sm font-bold uppercase tracking-[0.28em] ${cat.accent}`}>{cat.category}</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group glass-card glass-card-hover flex flex-col items-center gap-2 rounded-2xl py-4 px-3 text-center cursor-default transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-xs font-bold ${cat.accent} ring-1 ring-white/10`}>
                      {tech.abbr}
                    </div>
                    <span className="text-xs font-medium text-slate-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How We Work */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            How we work
          </motion.div>
          <motion.h2 variants={fadeUp} className="mb-14 text-center text-3xl font-bold text-white md:text-4xl tech-font">
            From stack selection to <span className="gradient-text">production.</span>
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-4">
            {howWeWork.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="relative glass-card glass-card-hover rounded-[1.5rem] p-7 text-center transition-all duration-300 hover:-translate-y-1"
              >
                {i < howWeWork.length - 1 && (
                  <div className="absolute hidden md:block top-10 -right-3 w-6 h-px bg-orange-400/30" />
                )}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/15 text-orange-300 text-lg font-bold ring-1 ring-orange-400/20 tech-font">
                  {item.step}
                </div>
                <h3 className="mb-2 text-base font-bold text-white tech-font">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-6 text-slate-400">Want to discuss the right stack for your project?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 hover:bg-orange-400"
          >
            Talk to a consultant <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
