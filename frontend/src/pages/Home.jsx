import React from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
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
    { icon: Workflow, title: 'Clear delivery flow', desc: 'Every project runs with visible checkpoints so stakeholders know what is happening and why.' },
    { icon: ShieldCheck, title: 'Security-first execution', desc: 'Security is part of the architecture, not a final review step.' },
    { icon: Rocket, title: 'Fast iteration', desc: 'We move quickly without losing the engineering discipline that keeps teams stable later.' },
  ];

  const metrics = [
    { value: '12+', label: 'delivery lanes covered' },
    { value: '99.9%', label: 'uptime-focused thinking' },
    { value: '24/7', label: 'support mindset' },
  ];

  return (
    <div className="pb-10 pt-28">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div className="relative z-10" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_16px_rgba(251,146,60,0.95)]" />
              Innovate. Integrate. Excel.
            </motion.div>
            <motion.h1 variants={fadeUp} className="max-w-3xl text-5xl font-extrabold leading-none tracking-tight text-white md:text-7xl">
              Building modern technology that feels premium, fast, and dependable.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Axviro Technologies designs software systems, digital products, and cloud foundations that help teams ship with confidence. We combine strategy, engineering, and polished experience design.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition-transform hover:-translate-y-0.5 hover:bg-orange-400">
                Start a project
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:border-orange-400/50 hover:bg-white/10">
                Explore services
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="tech-font text-3xl font-extrabold text-white">{metric.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="relative">
            <div className="absolute -inset-10 rounded-full bg-orange-500/15 blur-3xl" />
            <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300 backdrop-blur-md">
              Photo-led brand presence
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-4 shadow-2xl shadow-black/40 backdrop-blur-md">
              <img src={heroImage} alt="Axviro Technologies hero illustration" className="h-[480px] w-full rounded-[1.5rem] object-cover object-center" />
              <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2 text-orange-300"><Sparkles size={16} /> Launch-ready</div>
                  <div className="mt-2 text-sm text-slate-300">High-impact product and brand experiences.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2 text-orange-300"><LineChart size={16} /> Measurable</div>
                  <div className="mt-2 text-sm text-slate-300">Every engagement is tied to clear business outcomes.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2 text-orange-300"><Cloud size={16} /> Scalable</div>
                  <div className="mt-2 text-sm text-slate-300">Built for modern cloud and API-first delivery.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-10 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[
            ['Design', 'Sharper interfaces that make the product feel credible on day one.'],
            ['Build', 'Engineering delivery that balances speed, maintainability, and security.'],
            ['Scale', 'Cloud-ready foundations that support growth without rework.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-black/20">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">{title}</div>
              <p className="mt-3 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }} variants={staggerContainer} className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">What we do</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white md:text-5xl">
            A sharper digital presence needs more than a nice homepage.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-slate-300">
            The layout now mixes motion, imagery, and stronger content hierarchy so visitors immediately understand the brand and the value behind it.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/20 backdrop-blur-md transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300 ring-1 ring-orange-300/20 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <service.icon size={26} />
              </div>
              <h3 className="tech-font mt-6 text-2xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:pb-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
              Delivery style
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white md:text-5xl">
              Built to feel premium, not generic.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              The layout uses layered cards, glowing gradients, and image-led storytelling so the page looks more like a polished product launch than a plain brochure site.
            </motion.p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {excellence.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/25"
              >
                <div className="text-orange-300"><item.icon size={34} /></div>
                <h3 className="tech-font mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-orange-400/20 bg-gradient-to-r from-orange-500 via-orange-500 to-amber-400 p-[1px] shadow-2xl shadow-orange-500/20">
          <div className="rounded-[2rem] bg-slate-950/95 px-8 py-10 text-center md:px-14 md:py-14">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-4xl font-bold text-white md:text-5xl">Want this same treatment across the rest of the site?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                I can carry the same motion system, image treatment, and elevated spacing into Services, Expertise, Technologies, and Contact next.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition-transform hover:-translate-y-0.5">
                Talk to us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
