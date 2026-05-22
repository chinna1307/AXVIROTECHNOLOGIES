import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Expertise from './pages/Expertise';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Global Footer */}
        <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-800 mt-20">
          <p>&copy; {new Date().getFullYear()} Axviro Technologies. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
