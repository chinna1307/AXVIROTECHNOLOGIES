import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/85 backdrop-blur-xl shadow-lg shadow-slate-950/40 py-4 border-b border-white/10' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-lg shadow-orange-500/20 backdrop-blur-sm">
            <img src="/logo1.png" alt="Axviro Technologies" className="h-full w-full object-cover" />
          </div>
          <span className="hidden text-xl font-extrabold tracking-tight sm:block">
            <span className="text-white">AXVIRO</span>
            <span className="text-orange-400">TECHNOLOGIES</span>
          </span>
        </Link>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex">
          {[
            ['/', 'Home'],
            ['/services', 'Services'],
            ['/expertise', 'Expertise'],
            ['/technologies', 'Technologies'],
            ['/contact', 'Contact'],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-transform hover:-translate-y-0.5 hover:bg-orange-400"
        >
          Start a project
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.nav>
  );
}
