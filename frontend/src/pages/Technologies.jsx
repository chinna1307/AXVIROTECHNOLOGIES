import React from 'react';
import { motion } from 'framer-motion';

export default function Technologies() {
  const techStack = [
    "React", "Next.js", "Node.js", "Python", "AWS", "Azure", "Flutter", "Tailwind CSS", "MongoDB", "PostgreSQL", "Docker", "Kubernetes"
  ];

  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 pb-20 pt-32 text-center text-white">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">Technologies</div>
        <h1 className="mb-6 text-4xl font-extrabold md:text-5xl tech-font">Core Technologies</h1>
        <p className="mx-auto mb-16 max-w-2xl text-lg font-light leading-8 text-slate-300">The modern stack powering our enterprise solutions. We utilize industry-leading tools to build resilient architecture.</p>
      </motion.div>
      <motion.div 
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }}
      >
        {techStack.map((tech, i) => (
          <motion.div 
            key={i} 
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.05 }}
            className="cursor-default rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-orange-400/30 hover:text-orange-300 tech-font"
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
