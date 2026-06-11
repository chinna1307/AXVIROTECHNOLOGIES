import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Expertise from './pages/Expertise';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,0.88),_rgba(2,6,23,1))]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:64px_64px]" />
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

        <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400 backdrop-blur">
          <p>&copy; {new Date().getFullYear()} Axviro Technologies. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
