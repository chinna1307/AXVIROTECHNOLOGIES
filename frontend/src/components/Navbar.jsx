import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/expertise', 'Expertise'],
  ['/technologies', 'Technologies'],
  ['/contact', 'Contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-xl shadow-2xl shadow-slate-950/60 py-3 border-b border-white/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-orange-400/30 bg-orange-500/10 shadow-lg shadow-orange-500/20 backdrop-blur-sm transition-all group-hover:shadow-orange-500/40 group-hover:border-orange-400/60">
              <img src="/logo1.png" alt="Axviro Technologies" className="h-full w-full object-cover" />
            </div>
            <span className="hidden text-xl font-extrabold tracking-tight sm:block">
              <span className="text-white">AXVIRO</span>
              <span className="text-orange-400"> TECHNOLOGIES</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex backdrop-blur-sm">
            {navLinks.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-400/40"
            >
              Start a project
              <ArrowRight size={15} />
            </Link>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mobile-menu-overlay fixed inset-0 z-40 flex flex-col bg-slate-950/95 pt-24 px-6 md:hidden"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

            <nav className="flex flex-col gap-2">
              {navLinks.map(([to, label], i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-2xl px-5 py-4 text-lg font-semibold transition-all ${
                        isActive
                          ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white border border-transparent'
                      }`
                    }
                  >
                    <span className={`h-2 w-2 rounded-full bg-orange-400`} />
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-400"
              >
                Start a project <ArrowRight size={18} />
              </Link>
            </motion.div>

            <div className="mt-10 border-t border-white/10 pt-8 flex flex-col gap-3 text-sm text-slate-400">
              <p>hello@axvirotechnologies.com</p>
              <p>© {new Date().getFullYear()} Axviro Technologies</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
