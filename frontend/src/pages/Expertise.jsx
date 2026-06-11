import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Lock, Zap, TrendingUp, HeartPulse, ShoppingBag, Building2, Landmark, Plane } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* Animated Progress Bar */
function ProgressBar({ label, value, color = 'bg-orange-500' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-5">
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-slate-300">{label}</span>
        <span className="font-bold text-orange-300">{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <div
          className={`h-2 rounded-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: inView ? `${value}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Expertise() {
  const points = [
    {
      icon: Target,
      title: 'Driving IT Excellence Across Industries',
      desc: 'As a reliable IT consultancy with a complete focus on innovation and adaptability, we craft unique IT strategies that transcend industry boundaries — from fintech to manufacturing.',
    },
    {
      icon: Eye,
      title: 'Keeping Transparency Paramount',
      desc: 'Believing in an open work culture, we work alongside clients, keeping them updated about every development, idea, and strategy shift throughout the engagement.',
    },
    {
      icon: Lock,
      title: 'Enhanced Security',
      desc: 'Our consultants specialize in identifying and mitigating security threats, implementing robust measures for continuous protection across every layer of your stack.',
    },
    {
      icon: Zap,
      title: 'Rapid Project Delivery',
      desc: 'As leaders in software consulting, we are committed to accelerating project timelines through disciplined agile delivery — without ever compromising on quality.',
    },
  ];

  const skills = [
    { label: 'Cloud Architecture', value: 96 },
    { label: 'AI & Machine Learning', value: 88 },
    { label: 'Digital Transformation', value: 93 },
    { label: 'Cybersecurity & Compliance', value: 91 },
    { label: 'DevOps & CI/CD', value: 89 },
    { label: 'Product Strategy', value: 85 },
  ];

  const industries = [
    { icon: Landmark, label: 'Fintech' },
    { icon: HeartPulse, label: 'Healthcare' },
    { icon: ShoppingBag, label: 'E-Commerce' },
    { icon: Building2, label: 'Real Estate' },
    { icon: TrendingUp, label: 'Investments' },
    { icon: Plane, label: 'Travel & Logistics' },
  ];

  return (
    <div className="relative z-10 min-h-screen overflow-hidden pb-24 pt-32 text-white">
      <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-orange-500/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-20 max-w-3xl">
          <motion.div variants={fadeUp} className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
            Expertise
          </motion.div>
          <motion.h1 variants={fadeUp} className="mb-6 text-4xl font-extrabold md:text-6xl tech-font">
            Our{' '}
            <span className="gradient-text">Expertise</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg font-light leading-8 text-slate-400">
            Uncovering value with advanced IT consultation. We bring years of cross-industry experience to deliver solutions that truly work — on time and on budget.
          </motion.p>
        </motion.div>

        {/* Core Points Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-28">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card glass-card-hover flex flex-col gap-6 rounded-[1.75rem] p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 sm:flex-row"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300 ring-1 ring-orange-300/20 transition-all group-hover:bg-orange-500 group-hover:text-white">
                <p.icon size={28} />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold tech-font">{p.title}</h3>
                <p className="font-light leading-relaxed text-slate-400">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills + Industries */}
        <div className="grid gap-12 lg:grid-cols-2 mb-28">
          {/* Skill Bars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
              Competency
            </motion.div>
            <motion.h2 variants={fadeUp} className="mb-8 text-3xl font-bold text-white tech-font">
              Deep expertise, <span className="gradient-text">proven results.</span>
            </motion.h2>
            <div>
              {skills.map((skill) => (
                <ProgressBar key={skill.label} label={skill.label} value={skill.value} />
              ))}
            </div>
          </motion.div>

          {/* Industries */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
              Industries
            </motion.div>
            <motion.h2 variants={fadeUp} className="mb-8 text-3xl font-bold text-white tech-font">
              Sectors we <span className="gradient-text">serve.</span>
            </motion.h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.label}
                  variants={fadeUp}
                  className="group glass-card glass-card-hover flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300 transition-all group-hover:bg-orange-500 group-hover:text-white">
                    <ind.icon size={22} />
                  </div>
                  <span className="text-sm font-semibold text-slate-300">{ind.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-4"
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '12+', label: 'Industry Verticals' },
            { value: '5+', label: 'Years of Expertise' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass-card glass-card-hover rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="tech-font text-4xl font-extrabold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
