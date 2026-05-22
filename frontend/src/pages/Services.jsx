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
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tech-font">Enterprise IT Consulting</h1>
        <p className="text-lg text-slate-600 font-light">Reimagining your digital frameworks, we decode your challenges and chalk out the best possible strategy to address your pain points head-on.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all group">
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <s.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 tech-font">{s.title}</h3>
            <p className="text-slate-500 font-light leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
