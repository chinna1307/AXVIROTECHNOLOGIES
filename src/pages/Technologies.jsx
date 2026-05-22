import React from 'react';
import { motion } from 'framer-motion';

export default function Technologies() {
  const techStack = [
    "React", "Next.js", "Node.js", "Python", "AWS", "Azure", "Flutter", "Tailwind CSS", "MongoDB", "PostgreSQL", "Docker", "Kubernetes"
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tech-font">Core Technologies</h1>
        <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto mb-16">The modern stack powering our enterprise solutions. We utilize industry-leading tools to build resilient architecture.</p>
      </motion.div>
      <motion.div 
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }}
      >
        {techStack.map((tech, i) => (
          <motion.div 
            key={i} 
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.05 }}
            className="px-6 py-4 bg-white rounded-xl shadow-sm border border-slate-100 text-lg font-bold text-slate-800 tech-font hover:border-orange-500 hover:text-orange-600 transition-colors cursor-default"
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
