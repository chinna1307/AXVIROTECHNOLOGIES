import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Code2, Server, Bot, Database,
  Cloud, Wrench, Zap, Shield, Layers, ChevronRight, Cpu, Network
} from 'lucide-react';
import TechnologyImageMarquee from '../components/TechnologyImageMarquee';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function FloatingOrb({ className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-60 ${className}`}
    />
  );
}

// Marquee 1: Technology & Cloud Infrastructure (Prioritizing non-human technology imagery)
const technologyMarqueeImages = [
  {
    src: '/images/hero/hero-digital-network.jpg',
    alt: 'Digital Network Architecture and Cloud Ecosystem',
    label: 'Digital Network Architecture',
    category: 'Cloud & AI',
  },
  {
    src: '/images/services/cloud-infrastructure.png',
    alt: 'Cloud Infrastructure and Database Systems',
    label: 'Cloud Infrastructure & DB',
    category: 'Cloud',
  },
  {
    src: '/images/about/technology-architecture.webp',
    alt: 'System Architecture Blueprint and System Design',
    label: 'System Design Blueprint',
    category: 'Architecture',
  },
  {
    src: '/images/technology/consulting-strategy-charts.webp',
    alt: 'Technical Data Analytics and Infrastructure Roadmapping',
    label: 'Analytics & Roadmapping',
    category: 'Strategy',
  },
  {
    src: '/images/technology/digital-transformation-planning.jpg',
    alt: 'Enterprise Systems Planning and Technical Blueprint',
    label: 'Enterprise Systems Planning',
    category: 'Engineering',
  },
  {
    src: '/images/services/software-engineering-code.jpg',
    alt: 'Software Engineering Codebase and APIs',
    label: 'Full-Stack Software Dev',
    category: 'Engineering',
  },
];

// Marquee 2: IT Consulting & Digital Transformation
const consultingMarqueeImages = [
  {
    src: '/images/consulting/it-consulting-executive.jpg',
    alt: 'Strategic Technology Advisory and Business Consultation',
    label: 'Strategic Advisory Session',
    category: 'Consulting',
  },
  {
    src: '/images/technology/digital-transformation-planning.jpg',
    alt: 'Technical Architecture Planning and Strategy',
    label: 'Architecture Planning',
    category: 'Transformation',
  },
  {
    src: '/images/about/technology-architecture.webp',
    alt: 'Enterprise Systems Blueprint and Technology Roadmap',
    label: 'Enterprise Systems Blueprint',
    category: 'Architecture',
  },
  {
    src: '/images/technology/consulting-strategy-charts.webp',
    alt: 'Data Analytics and Performance Roadmapping',
    label: 'Analytics & Strategy',
    category: 'Advisory',
  },
  {
    src: '/images/services/tech-team-analytics.jpg',
    alt: 'Collaborative Technology Engineering Team',
    label: 'Digital Product Delivery',
    category: 'Delivery',
  },
  {
    src: '/images/hero/hero-digital-network.jpg',
    alt: 'Connected Enterprise Technology Ecosystem',
    label: 'Connected Ecosystem',
    category: 'Enterprise',
  },
];

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      desc: 'Responsive web applications, dashboards, and enterprise platforms built for performance, usability, and scale using modern frameworks.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      icon: Server,
      title: 'Backend Development',
      desc: 'Secure backend systems, transactional REST APIs, authentication, robust business logic, and database integration with Java and Spring Boot.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'JWT'],
    },
    {
      icon: Bot,
      title: 'AI Solutions & Workflows',
      desc: 'Applied AI solutions including RAG systems, document processing, semantic search, and customized LLM API integrations.',
      technologies: ['Spring AI', 'RAG', 'Vector DBs', 'LLM APIs'],
    },
    {
      icon: Database,
      title: 'API & Database Engineering',
      desc: 'Reliable APIs and structured database architectures built around PostgreSQL, MySQL, MongoDB, and Redis caching layers.',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
      icon: Cloud,
      title: 'Cloud & Deployment',
      desc: 'Containerized deployment infrastructure, automated CI/CD pipelines, and cloud hosting with Docker, AWS, and modern DevOps tools.',
      technologies: ['Docker', 'AWS', 'Vercel', 'CI/CD'],
    },
    {
      icon: Wrench,
      title: 'IT & Technology Consulting',
      desc: 'Strategic technology planning, architecture reviews, legacy system modernization, and technical advisory aligned with business goals.',
      technologies: ['Architecture', 'Modernization', 'Advisory'],
    },
  ];

  const consultingPoints = [
    'Technology Planning & Architecture Design',
    'Cloud Migration & Infrastructure Modernization',
    'Custom Enterprise Software Implementation',
    'Practical Engineering Aligned with Business ROI',
  ];

  const whyAxviro = [
    {
      number: '01',
      title: 'Practical Engineering',
      desc: 'We focus on building working software around real requirements — no over-engineering, no filler.',
    },
    {
      number: '02',
      title: 'Modern Technology',
      desc: 'We use modern frameworks, APIs, databases, cloud platforms, and AI technologies that are production-proven.',
    },
    {
      number: '03',
      title: 'Scalable Architecture',
      desc: 'Applications are designed with maintainability and future growth in mind from the first line of code.',
    },
    {
      number: '04',
      title: 'Transparent Collaboration',
      desc: 'Clear communication, milestones, and visible technical progress throughout every phase of the project.',
    },
  ];

  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden text-white">
      {/* Background orbs */}
      <FloatingOrb className="w-[600px] h-[600px] -top-32 -left-32 bg-orange-500/10" />
      <FloatingOrb className="w-[400px] h-[400px] top-1/3 -right-32 bg-blue-500/8" />
      <FloatingOrb className="w-[500px] h-[500px] top-2/3 -left-20 bg-orange-500/5" />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-36 lg:pt-44">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200"
          >
            <Zap size={13} className="animate-pulse" />
            Software Development &amp; IT Solutions Studio
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="tech-font mb-6 text-4xl font-extrabold leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building Modern Digital Products{' '}
            <span className="gradient-text">with Software &amp; AI</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mb-10 max-w-2xl text-lg font-light leading-8 text-slate-300 sm:text-xl"
          >
            Axviro Technologies builds modern websites, scalable web applications, backend
            systems, and AI-powered solutions that turn complex technical requirements into
            reliable, production-grade products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 hover:bg-orange-400 hover:shadow-orange-400/40"
            >
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-orange-400/50 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Tech marquee strip (Keywords) */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee gap-6 whitespace-nowrap">
            {[
              'React', 'TypeScript', 'Java', 'Spring Boot', 'Spring AI', 'PostgreSQL',
              'pgvector', 'Redis', 'Docker', 'AWS', 'REST APIs', 'Next.js', 'MongoDB',
              'RAG', 'LLM APIs', 'CI/CD', 'Vercel', 'Node.js',
              // duplicate for seamless loop
              'React', 'TypeScript', 'Java', 'Spring Boot', 'Spring AI', 'PostgreSQL',
              'pgvector', 'Redis', 'Docker', 'AWS', 'REST APIs', 'Next.js', 'MongoDB',
              'RAG', 'LLM APIs', 'CI/CD', 'Vercel', 'Node.js',
            ].map((tech, i) => (
              <span
                key={i}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-400 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES INTRODUCTION & MARQUEE 1: TECHNOLOGY ── */}
      <section className="relative w-full pb-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
            Technology in Motion
          </div>
          <h2 className="tech-font text-3xl font-bold text-white md:text-5xl">
            Engineering the <span className="gradient-text">Digital Future</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400 text-sm md:text-base">
            Continuous delivery across modern web systems, cloud architectures, and intelligent digital infrastructure.
          </p>
        </div>

        {/* Continuous Horizontal Image Marquee (LEFT → RIGHT) */}
        <TechnologyImageMarquee
          images={technologyMarqueeImages}
          speed={42}
          className="pt-6 pb-2"
        />
      </section>

      {/* ── 3. SERVICES CARDS (CLEAN GLASS CARDS) ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="mb-14 text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Capabilities
          </div>
          <h2 className="tech-font text-3xl font-bold text-white md:text-5xl">
            End-to-End <span className="gradient-text">Software &amp; IT Solutions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            From frontend interfaces to backend systems, database performance to cloud deployment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className="group glass-card glass-card-hover relative flex flex-col rounded-[1.75rem] p-8 shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-400/30"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300 ring-1 ring-orange-300/20 transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30">
                <service.icon size={26} />
              </div>
              <h3 className="tech-font mb-3 text-xl font-bold text-white">{service.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">{service.desc}</p>

              {/* Technologies */}
              <div className="mb-6 flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition-colors group-hover:text-orange-300"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── 4. IT CONSULTING & DIGITAL TRANSFORMATION ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
              IT Consulting &amp; Advisory
            </div>
            <h2 className="tech-font mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
              Technology Solutions{' '}
              <span className="gradient-text">Built Around Your Business</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-slate-300 md:text-lg">
              From technology planning to software implementation, we help businesses turn technical
              requirements into practical digital solutions.
            </p>

            {/* Checklist */}
            <div className="mb-10 grid gap-3 sm:grid-cols-2 text-left">
              {consultingPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-slate-200">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                    <CheckCircle2 size={13} />
                  </div>
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 hover:bg-orange-400 hover:shadow-orange-400/40"
            >
              Schedule a Consultation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. MARQUEE 2: IT CONSULTING & TRANSFORMATION IN MOTION ── */}
      <section className="relative w-full pb-16">
        <TechnologyImageMarquee
          images={consultingMarqueeImages}
          label="Digital Transformation"
          title="Strategic Technology in Motion"
          subtitle="Collaborative advisory, cloud architectures, and enterprise engineering workflows."
          speed={48}
        />
      </section>

      {/* ── 6. WHY AXVIRO ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
        <div className="mb-14 text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Why Axviro
          </div>
          <h2 className="tech-font text-4xl font-bold text-white md:text-5xl">
            Engineering-first,{' '}
            <span className="gradient-text">results-driven.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {whyAxviro.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="group glass-card glass-card-hover flex gap-6 rounded-[1.75rem] p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="tech-font shrink-0 text-3xl font-extrabold text-orange-400/40 group-hover:text-orange-400/70 transition-colors">
                {item.number}
              </div>
              <div>
                <h3 className="tech-font mb-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 7. FEATURED PROJECTS (COMING SOON) ── */}
      <FeaturedProjects />

      {/* ── 8. CTA BANNER ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl shadow-orange-500/10">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-blue-500/10 rounded-[2rem]" />
          <FloatingOrb className="w-80 h-80 -top-20 -right-20 bg-orange-500/15" />
          <div className="relative px-8 py-14 text-center md:px-14">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
                <CheckCircle2 size={13} /> Ready to start?
              </div>
              <h2 className="tech-font text-4xl font-bold text-white md:text-5xl">
                Let's turn your idea into a{' '}
                <span className="gradient-text">working product.</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Tell us about your project requirements and we'll help design and build the solution.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Featured Projects sub-section ── */
function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
      <div className="mb-14 flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div>
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Projects
          </div>
          <h2 className="tech-font text-4xl font-bold text-white md:text-5xl">
            Our <span className="gradient-text">Work.</span>
          </h2>
        </div>
        <div className="mt-6 sm:mt-0">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-orange-400/50 hover:bg-white/10"
          >
            View Projects <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Project showcase being prepared */}
      <div className="flex flex-col items-center justify-center gap-6 rounded-[2rem] border border-dashed border-white/10 py-20 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-500">
          <Layers size={28} />
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-300">Project showcase being prepared</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            We are currently preparing our project portfolio. Check back soon.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-400"
        >
          Start a Project <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
