import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lock, Zap } from 'lucide-react';

export default function Expertise() {
  const points = [
    { icon: Target, title: "Driving IT Excellence Across Industries", desc: "As a reliable IT consultancy services company with a complete focus on innovation and adaptability, we craft the most unique IT strategies that transcend industry boundaries." },
    { icon: Eye, title: "Keeping Transparency Paramount", desc: "Believing in an open work culture, we work alongside clients, keeping them updated about developments, ideas, and strategies." },
    { icon: Lock, title: "Enhanced Security", desc: "Our consultants specialize in identifying and mitigating security threats, implementing robust measures for continuous protection." },
    { icon: Zap, title: "Rapid Project Delivery", desc: "As leaders in software consulting, we are committed to accelerating project timelines without compromising quality." }
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-screen">
       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tech-font">Our Expertise</h1>
        <p className="text-lg text-slate-600 font-light max-w-2xl">Uncovering Value with Advanced IT Consultation. We bring years of cross-industry experience to deliver solutions that work.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {points.map((p, i) => (
           <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:bg-slate-800 transition-colors">
             <div className="text-orange-500 shrink-0"><p.icon size={40} /></div>
             <div>
                <h3 className="text-xl font-bold mb-3 tech-font">{p.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{p.desc}</p>
             </div>
           </motion.div>
        ))}
      </div>
    </div>
  );
}
