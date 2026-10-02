import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Bot, Wrench, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const capabilities = [
  {
    icon: Monitor,
    category: 'Web Applications',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-400/20',
    accent: 'text-blue-300',
    dot: 'bg-blue-400',
    iconBg: 'bg-blue-500/15 text-blue-300',
    items: [
      'Business websites',
      'Dashboards',
      'Full-stack applications',
      'Responsive interfaces',
    ],
  },
  {
    icon: Server,
    category: 'Backend Systems',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-400/20',
    accent: 'text-emerald-300',
    dot: 'bg-emerald-400',
    iconBg: 'bg-emerald-500/15 text-emerald-300',
    items: [
      'REST APIs',
      'Authentication & JWT',
      'Business logic',
      'Database integration',
    ],
  },
  {
    icon: Bot,
    category: 'AI Applications',
    color: 'from-orange-500/10 to-amber-500/10 border-orange-400/20',
    accent: 'text-orange-300',
    dot: 'bg-orange-400',
    iconBg: 'bg-orange-500/15 text-orange-300',
    items: [
      'RAG systems',
      'Document & data analysis',
      'LLM integrations',
      'AI-powered workflows',
    ],
  },
  {
    icon: Wrench,
    category: 'Custom Software & Tools',
    color: 'from-purple-500/10 to-violet-500/10 border-purple-400/20',
    accent: 'text-purple-300',
    dot: 'bg-purple-400',
    iconBg: 'bg-purple-500/15 text-purple-300',
    items: [
      'Workflow automation',
      'Integration utilities',
      'Enterprise web platforms',
      'Business productivity tools',
    ],
  },
  {
    icon: Cloud,
    category: 'Cloud & Infrastructure',
    color: 'from-sky-500/10 to-blue-500/10 border-sky-400/20',
    accent: 'text-sky-300',
    dot: 'bg-sky-400',
    iconBg: 'bg-sky-500/15 text-sky-300',
    items: [
      'Docker containerization',
      'AWS deployment',
      'CI/CD pipelines',
      'Production readiness',
    ],
  },
];

const howWeWork = [
  { step: '01', title: 'Discover', desc: 'Understand requirements and goals — what is the product, who uses it, what does it need to do.' },
  { step: '02', title: 'Design', desc: 'Plan the user experience and technical architecture before writing code.' },
  { step: '03', title: 'Build', desc: 'Develop, test, integrate, and iterate — with clear, visible progress.' },
  { step: '04', title: 'Deploy', desc: 'Prepare the product for real-world usage — containerized, monitored, and production-ready.' },
];

export default function Expertise() {
  return (
    <div className="relative z-10 min-h-screen overflow-hidden pb-24 pt-32 text-white">
      <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-orange-500/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-20 max-w-3xl">
          <motion.div variants={fadeUp} className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
            Capabilities
          </motion.div>
          <motion.h1 variants={fadeUp} className="mb-6 text-4xl font-extrabold md:text-6xl tech-font">
            What We{' '}
            <span className="gradient-text">Build</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg font-light leading-8 text-slate-400">
            A focused set of capabilities around modern software development — web applications, backend systems, AI integrations, and cloud deployment.
          </motion.p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-28">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-[1.75rem] border bg-gradient-to-br p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 ${cap.color}`}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${cap.iconBg} transition-all group-hover:scale-110`}>
                  <cap.icon size={22} />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${cap.dot}`} />
                  <h3 className={`text-sm font-bold uppercase tracking-[0.2em] ${cap.accent}`}>{cap.category}</h3>
                </div>
              </div>
              <ul className="space-y-2.5">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={14} className={`shrink-0 ${cap.accent}`} />
                    {item}
                  </li>
                ))}
              </ul>
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
            How We Work
          </motion.div>
          <motion.h2 variants={fadeUp} className="mb-14 text-center text-3xl font-bold text-white md:text-4xl tech-font">
            From idea to <span className="gradient-text">production.</span>
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
          <p className="mb-6 text-slate-400">Ready to build something? Let's talk about your project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 hover:bg-orange-400"
            >
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-orange-400/50 hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
