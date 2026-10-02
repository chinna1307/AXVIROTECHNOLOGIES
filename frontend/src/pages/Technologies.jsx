import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const techCategories = [
  {
    category: 'Frontend',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-400/20',
    accent: 'text-blue-300',
    dot: 'bg-blue-400',
    techs: [
      { name: 'React', abbr: 'Re' },
      { name: 'TypeScript', abbr: 'TS' },
      { name: 'JavaScript', abbr: 'JS' },
      { name: 'Next.js', abbr: 'Nx' },
      { name: 'HTML5', abbr: 'HT' },
      { name: 'CSS3', abbr: 'CS' },
    ],
  },
  {
    category: 'Backend',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-400/20',
    accent: 'text-emerald-300',
    dot: 'bg-emerald-400',
    techs: [
      { name: 'Java', abbr: 'Jv' },
      { name: 'Spring Boot', abbr: 'SB' },
      { name: 'Node.js', abbr: 'No' },
      { name: 'REST APIs', abbr: 'RE' },
    ],
  },
  {
    category: 'Database',
    color: 'from-purple-500/10 to-violet-500/10 border-purple-400/20',
    accent: 'text-purple-300',
    dot: 'bg-purple-400',
    techs: [
      { name: 'PostgreSQL', abbr: 'PG' },
      { name: 'MySQL', abbr: 'My' },
      { name: 'MongoDB', abbr: 'Mg' },
      { name: 'Redis', abbr: 'Rd' },
    ],
  },
  {
    category: 'AI & Data',
    color: 'from-orange-500/10 to-amber-500/10 border-orange-400/20',
    accent: 'text-orange-300',
    dot: 'bg-orange-400',
    techs: [
      { name: 'Spring AI', abbr: 'SA' },
      { name: 'RAG', abbr: 'RG' },
      { name: 'Vector DBs', abbr: 'VD' },
      { name: 'LLM APIs', abbr: 'LM' },
    ],
  },
  {
    category: 'DevOps / Cloud',
    color: 'from-sky-500/10 to-blue-500/10 border-sky-400/20',
    accent: 'text-sky-300',
    dot: 'bg-sky-400',
    techs: [
      { name: 'Docker', abbr: 'Do' },
      { name: 'AWS', abbr: 'AW' },
      { name: 'Vercel', abbr: 'Ve' },
      { name: 'Git', abbr: 'Gt' },
      { name: 'GitHub', abbr: 'GH' },
      { name: 'CI/CD', abbr: 'CD' },
    ],
  },
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
            We use production-proven technologies — carefully selected to deliver performance, scalability, and reliability across every layer of the stack.
          </motion.p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-28">
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
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
