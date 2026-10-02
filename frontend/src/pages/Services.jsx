import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Bot, Database, Cloud, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechnologyImageMarquee from '../components/TechnologyImageMarquee';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Responsive web applications, portals, and dashboards designed for performance, accessibility, and intuitive user experiences.',
    technologies: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'HTML5', 'Tailwind CSS'],
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-400/20',
    accent: 'text-blue-300',
    iconBg: 'bg-blue-500/15 text-blue-300 ring-blue-300/20 group-hover:bg-blue-500 group-hover:text-white',
  },
  {
    icon: Server,
    title: 'Backend Development',
    desc: 'Enterprise-grade backend architectures, robust REST APIs, authentication, business domain logic, and high-throughput data processing.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'PostgreSQL'],
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-400/20',
    accent: 'text-emerald-300',
    iconBg: 'bg-emerald-500/15 text-emerald-300 ring-emerald-300/20 group-hover:bg-emerald-500 group-hover:text-white',
  },
  {
    icon: Bot,
    title: 'AI Solutions & LLM Integration',
    desc: 'Practical AI implementations including Retrieval-Augmented Generation (RAG), vector embeddings, workflow automation, and custom LLM APIs.',
    technologies: ['Spring AI', 'RAG', 'Vector Databases', 'pgvector', 'LLM APIs'],
    color: 'from-orange-500/10 to-amber-500/10 border-orange-400/20',
    accent: 'text-orange-300',
    iconBg: 'bg-orange-500/15 text-orange-300 ring-orange-300/20 group-hover:bg-orange-500 group-hover:text-white',
  },
  {
    icon: Database,
    title: 'API & Database Engineering',
    desc: 'Scalable relational and NoSQL database schemas, indexing strategies, caching mechanisms, and clean microservice data layers.',
    technologies: ['REST', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    color: 'from-purple-500/10 to-violet-500/10 border-purple-400/20',
    accent: 'text-purple-300',
    iconBg: 'bg-purple-500/15 text-purple-300 ring-purple-300/20 group-hover:bg-purple-500 group-hover:text-white',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps Deployment',
    desc: 'Containerized deployment infrastructure, automated CI/CD build pipelines, and production cloud hosting for high availability.',
    technologies: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'CI/CD'],
    color: 'from-sky-500/10 to-blue-500/10 border-sky-400/20',
    accent: 'text-sky-300',
    iconBg: 'bg-sky-500/15 text-sky-300 ring-sky-300/20 group-hover:bg-sky-500 group-hover:text-white',
  },
  {
    icon: Wrench,
    title: 'IT & Technology Consulting',
    desc: 'Technical requirements analysis, system architecture design, roadmap feasibility studies, and actionable software engineering advisory.',
    technologies: ['Architecture Assessment', 'Roadmapping', 'System Integration', 'Advisory'],
    color: 'from-rose-500/10 to-pink-500/10 border-rose-400/20',
    accent: 'text-rose-300',
    iconBg: 'bg-rose-500/15 text-rose-300 ring-rose-300/20 group-hover:bg-rose-500 group-hover:text-white',
  },
];

const serviceMarqueeImages = [
  {
    src: '/images/services/cloud-infrastructure.png',
    alt: 'Cloud Computing Infrastructure and Database Systems',
    label: 'Cloud Infrastructure',
    category: 'Cloud',
  },
  {
    src: '/images/hero/hero-digital-network.jpg',
    alt: 'Digital Network Architecture and Connectivity',
    label: 'Network Architecture',
    category: 'AI & Data',
  },
  {
    src: '/images/services/software-engineering-code.jpg',
    alt: 'Software Engineering Codebase and APIs',
    label: 'Software Engineering',
    category: 'Development',
  },
  {
    src: '/images/about/technology-architecture.webp',
    alt: 'System Architecture Blueprint and System Design',
    label: 'System Blueprint',
    category: 'Architecture',
  },
  {
    src: '/images/technology/consulting-strategy-charts.webp',
    alt: 'Technology Strategy and Roadmapping Analytics',
    label: 'Strategy & Advisory',
    category: 'Consulting',
  },
  {
    src: '/images/technology/digital-transformation-planning.jpg',
    alt: 'Enterprise Systems Planning and Technical Workflow',
    label: 'Technical Planning',
    category: 'Transformation',
  },
];

const process = [
  { step: '01', title: 'Discover', desc: 'Understand requirements, technical scope, and business constraints before writing code.' },
  { step: '02', title: 'Design', desc: 'Plan the user experience, scalable system architecture, and entity data models.' },
  { step: '03', title: 'Build', desc: 'Develop, test, integrate, and iterate with transparent and continuous progress updates.' },
  { step: '04', title: 'Deploy', desc: 'Prepare the application for production — containerized, secure, and production-tested.' },
];

export default function Services() {
  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden pb-24 pt-32 text-white">
      {/* Background orbs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-orange-500/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div variants={fadeUp} className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
            Services
          </motion.div>
          <motion.h1 variants={fadeUp} className="mb-6 text-4xl font-extrabold md:text-6xl tech-font">
            Software Development &amp;{' '}
            <span className="gradient-text">IT Solutions</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg font-light leading-8 text-slate-400">
            End-to-end engineering services — from modern web frontends to high-performance backends, cloud infrastructure, and AI-enabled workflows.
          </motion.p>
        </motion.div>
      </div>

      {/* Horizontal Moving Marquee Showcase (LEFT → RIGHT) */}
      <TechnologyImageMarquee
        images={serviceMarqueeImages}
        speed={44}
        className="pb-14 pt-2"
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Clean Services Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-28">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`group relative flex flex-col rounded-[2rem] border bg-gradient-to-br p-8 shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-1.5 ${s.color}`}
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-all ${s.iconBg}`}>
                <s.icon size={26} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white tech-font">{s.title}</h3>
              <p className="font-light leading-relaxed text-slate-300 mb-6 text-sm flex-1">{s.desc}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {s.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline ${s.accent}`}
              >
                Discuss this service <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* How We Work */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-28"
        >
          <motion.div variants={fadeUp} className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Process
          </motion.div>
          <motion.h2 variants={fadeUp} className="mb-14 text-center text-3xl font-bold text-white md:text-4xl tech-font">
            From concept to <span className="gradient-text">production delivery.</span>
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                variants={fadeUp}
                className="relative glass-card glass-card-hover rounded-[1.5rem] p-7 text-center transition-all duration-300 hover:-translate-y-1"
              >
                {i < process.length - 1 && (
                  <div className="absolute hidden md:block top-10 -right-3 w-6 h-px bg-orange-400/30" />
                )}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/15 text-orange-300 text-lg font-bold ring-1 ring-orange-400/20 tech-font">
                  {p.step}
                </div>
                <h3 className="mb-2 text-base font-bold text-white tech-font">{p.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{p.desc}</p>
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
          <p className="mb-6 text-slate-400">Ready to build something? Tell us about your technical requirements.</p>
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
