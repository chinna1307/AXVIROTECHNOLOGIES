import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Expertise from './pages/Expertise';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { ArrowUp, Mail } from 'lucide-react';
import { COMPANY_LINKS } from './config/profile';

/* ── Scroll to top button ── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl shadow-orange-500/40 transition-all hover:-translate-y-1 hover:bg-orange-400"
          aria-label="Scroll to top"
          id="scroll-to-top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ── Footer ── */
function Footer() {
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Technologies', to: '/technologies' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  // Company social icons — only shown when real URLs are configured in COMPANY_LINKS
  const socialIcons = [
    COMPANY_LINKS.github && {
      href: COMPANY_LINKS.github,
      label: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    COMPANY_LINKS.linkedin && {
      href: COMPANY_LINKS.linkedin,
      label: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      href: `mailto:${COMPANY_LINKS.email}`,
      label: 'Email',
      icon: <Mail size={16} />,
    },
  ].filter(Boolean);

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-orange-400/30 bg-orange-500/10 shadow-lg shadow-orange-500/20">
                <img src="/logo1.png" alt="Axviro Technologies logo" className="h-full w-full object-cover" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                <span className="text-white">AXVIRO</span>
                <span className="text-orange-400"> TECHNOLOGIES</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-slate-500">
              Modern Software, Web &amp; AI Solutions
            </p>
            {/* Company social icons — only rendered when URLs are configured */}
            {socialIcons.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socialIcons.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-500 transition-all hover:border-orange-400/40 hover:text-orange-300 hover:-translate-y-0.5"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-slate-400 transition-colors hover:text-orange-300">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${COMPANY_LINKS.email}`}
                  className="text-sm text-slate-400 transition-colors hover:text-orange-300"
                >
                  {COMPANY_LINKS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Axviro Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── App ── */
export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
        {/* Background gradient */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.08),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,0.88),_rgba(2,6,23,1))]" />
        {/* Grid overlay */}
        <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:64px_64px]" />

        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}
