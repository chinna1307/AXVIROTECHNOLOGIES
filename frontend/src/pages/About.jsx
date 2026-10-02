import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Cpu, Code2, Server } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const process = [
  { step: '01', title: 'Discover', desc: 'Understand requirements, technical scope, and project goals.' },
  { step: '02', title: 'Design', desc: 'Plan the user experience, database models, and cloud architecture.' },
  { step: '03', title: 'Build', desc: 'Develop, test, integrate, and iterate with transparent progress.' },
  { step: '04', title: 'Deploy', desc: 'Prepare the software for production — containerized and monitored.' },
];

const values = [
  {
    title: 'Practical Engineering',
    desc: 'We prioritize clean, maintainable code and production readiness over unnecessary complexity.',
  },
  {
    title: 'Scalable Architecture',
    desc: 'Systems designed from day one to handle growth, transactional loads, and future integrations.',
  },
  {
    title: 'Modern Technology',
    desc: 'Leveraging battle-tested stacks across Java, Spring Boot, React, modern databases, and AI.',
  },
];

export default function About() {
  return (
    <div className="relative z-10 min-h-screen overflow-hidden pb-24 pt-32 text-white">
      {/* Background orbs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-orange-500/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header & Split Section */}
        <div className="mb-28 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Architecture & Tech Visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-900 shadow-2xl shadow-black/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[1/1] lg:aspect-[4/5]">
                <img
                  src="/images/about/technology-architecture.webp"
                  alt="Axviro Technology Architecture and Systems Blueprint"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Architecture &amp; Strategy</h4>
                      <p className="text-xs text-slate-400">Enterprise Digital Infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: About Company Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
              About Axviro
            </motion.div>
            <motion.h1 variants={fadeUp} className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl tech-font leading-tight">
              Engineering Practical{' '}
              <span className="gradient-text">Software &amp; AI Solutions</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg font-light leading-8 text-slate-300">
              Axviro Technologies is a technology-focused development studio building modern websites,
              web applications, backend systems, and AI-powered solutions.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-base font-light leading-7 text-slate-400">
              We focus on practical engineering, clean user experiences, scalable architecture, and
              modern technologies that help turn technical ideas into reliable, production-grade digital products.
            </motion.p>

            {/* Core Values / Strengths */}
            <motion.div variants={fadeUp} className="mt-8 space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3.5">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 ring-1 ring-orange-400/30">
                    <CheckCircle2 size={13} />
                  </div>
                  <div>
                    <span className="font-semibold text-white text-sm">{v.title}: </span>
                    <span className="text-sm text-slate-400">{v.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Our Capabilities <ArrowRight size={17} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:border-orange-400/50 hover:bg-white/10"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* How We Work Process */}
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
            How We <span className="gradient-text">Work</span>
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
          <p className="mb-6 text-slate-400">Have a project in mind? Let's discuss your technical goals.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 hover:bg-orange-400"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
