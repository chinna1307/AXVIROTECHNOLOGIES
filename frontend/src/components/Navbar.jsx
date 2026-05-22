import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-xl tech-font shadow-lg shadow-orange-500/30">
            AT
          </div>
          {/* UPDATED LOGO TEXT HERE */}
          <span className="font-extrabold text-2xl tracking-tight tech-font text-black">
            AXVIRO<span className="text-orange-600 font-extrabold">TECHNOLOGIES</span>
          </span>
        </Link>
        <div className="hidden md:flex gap-8 font-medium text-sm text-slate-600">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`hover:text-orange-600 transition-colors ${location.pathname === link.path ? 'text-orange-600 font-bold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link to="/contact" className="hidden md:inline-block bg-slate-900 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-md">
          Partner With Us
        </Link>
      </div>
    </motion.nav>
  );
}
