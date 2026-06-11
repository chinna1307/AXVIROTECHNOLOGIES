import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, Shield, Cloud, BarChart, Users } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Server, title: "IT Strategy Consulting", desc: "Align technology with your business goals. We digitalize core tech, craft architecture, and implement future-ready solutions." },
    { icon: Users, title: "Technology Consulting", desc: "From strategy to execution, we identify opportunities that bring disruptive changes to your processes and execution roadmap." },
    { icon: Shield, title: "IT Risk & Compliance", desc: "Align with industry standards. We audit systems for vulnerabilities and implement robust security to mitigate enterprise risks." },
    { icon: Code, title: "Digital Transformation", desc: "Assist businesses at all stages with comprehensive strategies, optimizations, and integrations across fintech, healthcare, and more." },
    { icon: BarChart, title: "Process Optimization", desc: "Define the right technology processes to optimize business operations, reduce overhead costs, and maximize overall efficiency." },
    { icon: Cloud, title: "Cloud & Migration", desc: "Seamlessly transition your legacy infrastructure to scalable, secure cloud environments on AWS, Azure, or Google Cloud." }
  ];

  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 pb-20 pt-32 text-white">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-16 max-w-3xl text-center">
        <div className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">Services</div>
        <h1 className="mb-6 text-4xl font-extrabold md:text-5xl tech-font">Enterprise IT Consulting</h1>
        <p className="text-lg font-light leading-8 text-slate-300">Reimagining your digital frameworks, we decode your challenges and chalk out the best possible strategy to address your pain points head-on.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur-md transition-transform hover:-translate-y-1">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300 ring-1 ring-orange-300/20 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <s.icon size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tech-font">{s.title}</h3>
            <p className="font-light leading-relaxed text-slate-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
