import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-orange-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded shadow-lg text-lg">
            AT
          </div>
          <span className="font-extrabold text-2xl tracking-tight">
            <span className="text-black">AXVIRO</span>
            <span className="text-orange-600">TECHNOLOGIES</span>
          </span>
        </Link>
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <Link to="/services" className="hover:text-orange-600">Services</Link>
          <Link to="/expertise" className="hover:text-orange-600">Expertise</Link>
          <Link to="/technologies" className="hover:text-orange-600">Technologies</Link>
          <Link to="/contact" className="hover:text-orange-600">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}
