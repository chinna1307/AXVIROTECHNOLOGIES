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
    <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 pb-20 pt-32 text-white">
       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-3xl">
        <div className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">Expertise</div>
        <h1 className="mb-6 text-4xl font-extrabold md:text-5xl tech-font">Our Expertise</h1>
        <p className="max-w-2xl text-lg font-light leading-8 text-slate-300">Uncovering Value with Advanced IT Consultation. We bring years of cross-industry experience to deliver solutions that work.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {points.map((p, i) => (
           <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex flex-col gap-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-8 text-white shadow-xl shadow-black/20 backdrop-blur-md transition-colors hover:bg-white/10 sm:flex-row">
             <div className="text-orange-500 shrink-0"><p.icon size={40} /></div>
             <div>
                <h3 className="mb-3 text-xl font-bold tech-font">{p.title}</h3>
                <p className="font-light leading-relaxed text-slate-300">{p.desc}</p>
             </div>
           </motion.div>
        ))}
      </div>
    </div>
  );
}
