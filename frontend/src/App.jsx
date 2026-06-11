import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Expertise from './pages/Expertise';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import { ArrowUp, Mail, Linkedin, Twitter, Github } from 'lucide-react';

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

function Footer() {
  const footerLinks = {
    Company: [
      { label: 'Home', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Expertise', to: '/expertise' },
      { label: 'Technologies', to: '/technologies' },
      { label: 'Contact', to: '/contact' },
    ],
    Services: [
      { label: 'AI Strategy', to: '/services' },
      { label: 'Cloud & Migration', to: '/services' },
      { label: 'Digital Transformation', to: '/services' },
      { label: 'IT Risk & Compliance', to: '/services' },
      { label: 'Process Optimization', to: '/services' },
    ],
  };

  const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@axvirotechnologies.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-orange-400/30 bg-orange-500/10 shadow-lg shadow-orange-500/20">
                <img src="/logo1.png" alt="Axviro Technologies" className="h-full w-full object-cover" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                <span className="text-white">AXVIRO</span>
                <span className="text-orange-400"> TECHNOLOGIES</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-slate-500">
              We design software systems, digital products, and cloud foundations that help teams ship with confidence.
            </p>
            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-500 transition-all hover:border-orange-400/40 hover:text-orange-300 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">{section}</p>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-slate-400 transition-colors hover:text-orange-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Axviro Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}
