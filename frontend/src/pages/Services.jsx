import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, Shield, Cloud, BarChart, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Services() {
  const services = [
    {
      icon: Server,
      title: 'IT Strategy Consulting',
      desc: 'Align technology with your business goals. We digitalize core tech, craft architecture, and implement future-ready solutions.',
      features: ['Technology Roadmapping', 'Architecture Reviews', 'Cost Optimization'],
    },
    {
      icon: Users,
      title: 'Technology Consulting',
      desc: 'From strategy to execution, we identify opportunities that bring disruptive changes to your processes and execution roadmap.',
      features: ['Operating Model Design', 'Vendor Selection', 'Team Augmentation'],
    },
    {
      icon: Shield,
      title: 'IT Risk & Compliance',
      desc: 'Align with industry standards. We audit systems for vulnerabilities and implement robust security to mitigate enterprise risks.',
      features: ['Security Audits', 'Compliance Frameworks', 'Incident Response'],
    },
    {
      icon: Code,
      title: 'Digital Transformation',
      desc: 'Assist businesses at all stages with comprehensive strategies, optimizations, and integrations across fintech, healthcare, and more.',
      features: ['Legacy Modernization', 'API Integration', 'UX Redesign'],
    },
    {
      icon: BarChart,
      title: 'Process Optimization',
      desc: 'Define the right technology processes to optimize business operations, reduce overhead costs, and maximize overall efficiency.',
      features: ['Workflow Automation', 'KPI Dashboards', 'Lean Methodology'],
    },
    {
      icon: Cloud,
      title: 'Cloud & Migration',
      desc: 'Seamlessly transition your legacy infrastructure to scalable, secure cloud environments on AWS, Azure, or Google Cloud.',
      features: ['Cloud Assessment', 'Data Migration', 'Infra-as-Code'],
    },
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'We dive deep into your business, goals, and pain points to understand the full picture.' },
    { step: '02', title: 'Strategy', desc: 'We craft a clear, actionable roadmap aligned with your timelines and budget.' },
    { step: '03', title: 'Build', desc: 'Our engineers execute with precision, shipping features in iterative, tested cycles.' },
    { step: '04', title: 'Deploy & Scale', desc: 'We deploy to production and provide ongoing support to help you scale confidently.' },
  ];

  const plans = [
    {
      name: 'Starter',
      price: 'Custom',
      tag: 'Small teams',
      features: ['Up to 3 services', 'Monthly strategy calls', 'Email support', 'Basic reporting'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: 'Custom',
      tag: 'Most popular',
      features: ['Full service suite', 'Dedicated consultant', 'Priority support', 'Advanced analytics', 'Quarterly business reviews'],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      tag: 'Large organizations',
      features: ['Unlimited services', 'On-site consulting', '24/7 dedicated support', 'Custom SLAs', 'Executive advisory'],
      highlight: false,
    },
  ];

  return (
    <div className="relative z-10 min-h-screen overflow-hidden pb-24 pt-32 text-white">
      {/* Background orbs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-orange-500/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div variants={fadeUp} className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
            Services
          </motion.div>
          <motion.h1 variants={fadeUp} className="mb-6 text-4xl font-extrabold md:text-6xl tech-font">
            Enterprise IT{' '}
            <span className="gradient-text">Consulting</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg font-light leading-8 text-slate-400">
            Reimagining your digital frameworks, we decode your challenges and chalk out the best possible strategy to address your pain points head-on.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-28">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass-card glass-card-hover relative overflow-hidden rounded-[1.75rem] p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300 ring-1 ring-orange-300/20 transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30">
                <s.icon size={26} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white tech-font">{s.title}</h3>
              <p className="font-light leading-relaxed text-slate-400 mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={14} className="text-orange-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-28"
        >
          <motion.div variants={fadeUp} className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            How we work
          </motion.div>
          <motion.h2 variants={fadeUp} className="mb-14 text-center text-3xl font-bold text-white md:text-4xl tech-font">
            A process built for <span className="gradient-text">results.</span>
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                variants={fadeUp}
                className="relative glass-card glass-card-hover rounded-[1.5rem] p-7 text-center transition-all duration-300 hover:-translate-y-1"
              >
                {i < process.length - 1 && (
                  <div className="absolute hidden md:block top-1/2 -right-3 w-6 h-px bg-orange-400/30" />
                )}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/15 text-orange-300 text-lg font-bold ring-1 ring-orange-400/20 tech-font">
                  {p.step}
                </div>
                <h3 className="mb-3 text-lg font-bold text-white tech-font">{p.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Pricing
          </motion.div>
          <motion.h2 variants={fadeUp} className="mb-14 text-center text-3xl font-bold text-white md:text-4xl tech-font">
            Flexible plans for every <span className="gradient-text">stage.</span>
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={`relative rounded-[1.75rem] p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? 'border border-orange-400/40 bg-gradient-to-b from-orange-500/10 to-transparent shadow-2xl shadow-orange-500/15'
                    : 'glass-card glass-card-hover shadow-xl shadow-black/20'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white shadow-lg shadow-orange-500/40">
                    Most Popular
                  </div>
                )}
                <div className="mb-2 text-sm font-medium uppercase tracking-widest text-slate-500">{plan.tag}</div>
                <div className="mb-6 text-3xl font-extrabold text-white tech-font">{plan.name}</div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 size={15} className="text-orange-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                    plan.highlight
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-400'
                      : 'border border-white/15 bg-white/5 text-white hover:border-orange-400/40 hover:bg-white/10'
                  }`}
                >
                  Get started <ArrowRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
