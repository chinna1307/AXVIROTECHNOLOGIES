import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Star,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';

/* ---------- Animated Counter ---------- */
function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const isFloat = target.toString().includes('.');
    const numeric = parseFloat(target);
    const duration = 1800;
    const steps = 60;
    const increment = numeric / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setCount(numeric);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ---------- Floating Orb ---------- */
function FloatingOrb({ className }) {
  return (
    <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />
  );
}

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const services = [
    { icon: BrainCircuit, title: 'AI Strategy Consulting', desc: 'Align emerging technology with business goals through practical roadmaps, prototypes, and measurable delivery milestones.' },
    { icon: Users, title: 'Technology Consulting', desc: 'Turn complexity into clarity with operating models that support product, engineering, and leadership teams.' },
    { icon: ShieldCheck, title: 'IT Risk & Compliance', desc: 'Reduce exposure with security reviews, governance controls, and resilient implementation practices.' },
    { icon: Code2, title: 'Digital Transformation', desc: 'Modernize customer and internal experiences with scalable software, automation, and integrated workflows.' },
    { icon: BarChart3, title: 'Process Optimization', desc: 'Streamline operations, reduce waste, and surface the metrics that matter across the business.' },
    { icon: Cloud, title: 'Cloud & Migration', desc: 'Move legacy systems into secure cloud foundations with the right balance of speed, control, and cost.' },
  ];

  const excellence = [
    { icon: Workflow, title: 'Clear Delivery Flow', desc: 'Every project runs with visible checkpoints so stakeholders always know what is happening and why.' },
    { icon: ShieldCheck, title: 'Security-First', desc: 'Security is part of the architecture, not an afterthought or a final review step.' },
    { icon: Rocket, title: 'Fast Iteration', desc: 'We move quickly without losing the engineering discipline that keeps teams stable long-term.' },
  ];

  const metrics = [
    { value: '12', suffix: '+', label: 'Delivery Lanes Covered' },
    { value: '99.9', suffix: '%', label: 'Uptime-Focused Thinking' },
    { value: '24', suffix: '/7', label: 'Support Mindset' },
  ];

  const clientLogos = [
    'React', 'Next.js', 'Node.js', 'AWS', 'Azure', 'MongoDB',
    'PostgreSQL', 'Docker', 'Kubernetes', 'Python', 'Flutter', 'TypeScript',
    'React', 'Next.js', 'Node.js', 'AWS', 'Azure', 'MongoDB',
    'PostgreSQL', 'Docker', 'Kubernetes', 'Python', 'Flutter', 'TypeScript',
  ];

  const testimonials = [
    { name: 'Sarah Mitchell', role: 'CTO, FinEdge Inc.', text: 'Axviro transformed our legacy system into a cloud-native platform in record time. The team is exceptional — communicative, thorough, and deeply skilled.', rating: 5 },
    { name: 'James Okonkwo', role: 'VP Engineering, MedCore', text: 'Their AI strategy consulting aligned our tech roadmap with our 5-year business goals. The impact was immediate and measurable.', rating: 5 },
    { name: 'Priya Sharma', role: 'CEO, RetailLogic', text: 'From discovery to deployment, Axviro delivered on every promise. The quality of engineering and design is second to none.', rating: 5 },
  ];

  return (
    <div className="pb-10 pt-28 overflow-hidden">
      {/* --- HERO --- */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 lg:pb-24 lg:pt-16">
        <FloatingOrb className="w-[600px] h-[600px] -top-40 -left-40 bg-orange-500/8" />
        <FloatingOrb className="w-[400px] h-[400px] top-1/2 -right-20 bg-blue-500/8 animate-float-delayed" />

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div className="relative z-10" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse-glow shadow-[0_0_16px_rgba(251,146,60,0.95)]" />
              Innovate. Integrate. Excel.
            </motion.div>

            <motion.h1 variants={fadeUp} className="max-w-3xl text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
              <span className="gradient-text">Building modern</span>{' '}
              <span className="text-white">technology that feels</span>{' '}
              <span className="text-orange-400">premium.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Axviro Technologies designs software systems, digital products, and cloud foundations that help teams ship with confidence. Strategy, engineering, and polished experience design — all under one roof.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 hover:bg-orange-400 hover:shadow-orange-400/40">
                Start a project
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-orange-400/50 hover:bg-white/10 hover:-translate-y-1">
                Explore services
              </Link>
            </motion.div>

            {/* Animated metrics */}
            <motion.div variants={fadeUp} className="mt-12 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="glass-card glass-card-hover rounded-2xl p-5 transition-all duration-300">
                  <div className="tech-font text-3xl font-extrabold text-white">
                    <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-slate-400">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-orange-500/15 blur-3xl animate-float" />
            <div className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 backdrop-blur-md">
              Photo-led brand presence
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-4 shadow-2xl shadow-black/40 backdrop-blur-md">
              <img src={heroImage} alt="Axviro Technologies hero" className="h-[480px] w-full rounded-[1.5rem] object-cover object-center" />
              <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Sparkles, label: 'Launch-ready', desc: 'High-impact product & brand.' },
                  { icon: LineChart, label: 'Measurable', desc: 'Tied to business outcomes.' },
                  { icon: Cloud, label: 'Scalable', desc: 'Cloud & API-first delivery.' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-white backdrop-blur-md transition-all hover:border-orange-400/30">
                    <div className="flex items-center gap-2 text-orange-300 text-sm font-semibold"><Icon size={15} /> {label}</div>
                    <div className="mt-1.5 text-xs text-slate-400">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Design / Build / Scale strip --- */}
      <section className="border-y border-white/10 bg-white/[0.03] py-10 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[
            ['Design', 'Sharper interfaces that make the product feel credible on day one.', '01'],
            ['Build', 'Engineering delivery that balances speed, maintainability, and security.', '02'],
            ['Scale', 'Cloud-ready foundations that support growth without rework.', '03'],
          ].map(([title, text, num]) => (
            <motion.div
              key={title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover group rounded-3xl p-7 shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">{title}</div>
                <div className="text-xs text-slate-600 font-mono">{num}</div>
              </div>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Tech / Logo Marquee --- */}
      <section className="py-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Technologies We Work With</p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent" />
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {clientLogos.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-400 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400/60" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">What we do</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white md:text-5xl">
            Enterprise-grade solutions for{' '}
            <span className="gradient-text">ambitious teams.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-slate-400">
            From strategy to delivery, we bring the tools, team, and expertise to make your technology work harder for your business.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-400/30 hover:shadow-orange-500/10"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300 ring-1 ring-orange-300/20 transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30">
                <service.icon size={26} />
              </div>
              <h3 className="tech-font mt-6 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{service.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-orange-400 opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* --- Excellence / Delivery Style --- */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Delivery style</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white md:text-5xl">
              Built to feel <span className="gradient-text">premium</span>, not generic.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
              We combine strong engineering discipline with design that actually elevates the brand — every layer of the stack reflects care and intent.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link to="/expertise" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition-all hover:gap-3">
                See our expertise <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {excellence.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                className="group glass-card glass-card-hover rounded-[1.5rem] p-6 shadow-xl shadow-black/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300 transition-all group-hover:bg-orange-500 group-hover:text-white">
                  <item.icon size={24} />
                </div>
                <h3 className="tech-font mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-14 text-center"
        >
          <motion.div variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Client stories</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white md:text-5xl">
            Trusted by teams that <span className="gradient-text">ship.</span>
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover group rounded-[1.75rem] p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote size={28} className="text-orange-400 mb-4" />
              <p className="leading-7 text-slate-300 italic">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-sm font-bold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={13} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA Banner --- */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-[1px] shadow-2xl shadow-orange-500/10">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-blue-500/10 rounded-[2rem]" />
          <FloatingOrb className="w-80 h-80 -top-20 -right-20 bg-orange-500/15" />
          <div className="relative rounded-[2rem] px-8 py-14 text-center md:px-14">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
                <CheckCircle2 size={13} /> Ready to start?
              </div>
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Let's build something{' '}
                <span className="gradient-text">extraordinary together.</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Tell us about your project and we'll craft a tailored technology strategy that drives real outcomes.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 hover:bg-orange-400">
                  Talk to us <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-orange-400/50 hover:bg-white/10">
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
