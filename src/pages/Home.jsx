import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Shield, Server, Users, Code, BarChart, Eye, Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  const services = [
    { icon: Server, title: "IT Strategy Consulting", desc: "Align technology with your business goals. We digitalize core tech, craft architecture, and implement future-ready solutions." },
    { icon: Users, title: "Technology Consulting", desc: "From strategy to execution, we identify opportunities that bring disruptive changes to your processes and execution roadmap." },
    { icon: Shield, title: "IT Risk & Compliance", desc: "Align with industry standards. We audit systems for vulnerabilities and implement robust security to mitigate enterprise risks." },
    { icon: Code, title: "Digital Transformation", desc: "Assist businesses at all stages with comprehensive strategies, optimizations, and integrations across fintech, healthcare, and more." },
    { icon: BarChart, title: "Process Optimization", desc: "Define the right technology processes to optimize business operations, reduce overhead costs, and maximize overall efficiency." },
    { icon: Cloud, title: "Cloud & Migration", desc: "Seamlessly transition your legacy infrastructure to scalable, secure cloud environments on AWS, Azure, or Google Cloud." }
  ];

  const excellence = [
    { icon: Eye, title: "Keeping Transparency Paramount", desc: "Believing in an open work culture, we work alongside clients, keeping them updated about developments, ideas, and strategies." },
    { icon: Lock, title: "Enhanced Security", desc: "Our consultants specialize in identifying and mitigating security threats, implementing robust measures for continuous protection." },
    { icon: Zap, title: "Rapid Project Delivery", desc: "As leaders in software consulting, we are committed to accelerating project timelines without compromising quality." }
  ];

  return (
    <div className="pt-32 pb-10">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-[75vh]">
        <motion.div className="md:w-1/2 relative z-10" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-orange-100/50 text-orange-700 text-xs font-bold uppercase tracking-widest rounded-full border border-orange-200/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Engineering the Future Stack
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tech-font tracking-tight">
            Architecting <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Intelligent</span> Systems.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-light">
            We don't just consult; we build. From AI-driven analytics to resilient cloud architectures, Axviro Technologies delivers high-performance code for modern enterprises.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4 items-center">
            <Link to="/contact" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-xl shadow-orange-600/20 hover:-translate-y-1">
              Initialize Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Right Side: Layered Cards */}
        <motion.div className="md:w-1/2 relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-slate-100 to-white rounded-full -z-10"></div>
          <div className="grid grid-cols-1 gap-4 relative z-10 w-4/5 mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition-transform ml-8">
               <div className="p-3 bg-orange-50 rounded-lg text-orange-500"><Cloud size={24} /></div>
               <div>
                 <h3 className="font-bold text-slate-900 tech-font">Cloud Scalability</h3>
                 <p className="text-sm text-slate-500">Zero-downtime deployment metrics.</p>
               </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-800 flex items-center gap-4 hover:-translate-y-1 transition-transform -ml-8 my-4 relative z-20">
               <div className="p-3 bg-slate-800 rounded-lg text-orange-500"><Shield size={24} /></div>
               <div>
                 <h3 className="font-bold text-white tech-font">Risk Assessment</h3>
                 <p className="text-sm text-slate-400">Bank-grade security models applied.</p>
               </div>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 ml-4 opacity-50">
                <div className="h-10 w-10 bg-slate-100 rounded-lg"></div>
                <div className="space-y-2 w-full">
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  <div className="h-3 bg-slate-100 rounded w-3/4"></div>
                </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-white border-y border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div><div className="text-4xl font-extrabold text-slate-900 mb-2 tech-font">4x</div><div className="text-xs font-bold text-orange-600 uppercase">Efficiency Growth</div></div>
            <div><div className="text-4xl font-extrabold text-slate-900 mb-2 tech-font">99.9%</div><div className="text-xs font-bold text-orange-600 uppercase">Uptime SLA</div></div>
            <div><div className="text-4xl font-extrabold text-slate-900 mb-2 tech-font">250+</div><div className="text-xs font-bold text-orange-600 uppercase">Enterprise Clients</div></div>
            <div><div className="text-4xl font-extrabold text-slate-900 mb-2 tech-font">24/7</div><div className="text-xs font-bold text-orange-600 uppercase">Global Support</div></div>
        </div>
      </section>

      {/* 3. TRUSTED BY SECTION */}
      <section className="py-16 bg-slate-50 text-center border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by conglomerates, enterprises, and startups alike</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale">
            <span className="text-2xl font-bold tech-font">Google</span>
            <span className="text-2xl font-bold tech-font">KPMG</span>
            <span className="text-2xl font-bold tech-font">Domino's</span>
            <span className="text-2xl font-bold tech-font">KFC</span>
            <span className="text-2xl font-bold tech-font">BCG</span>
            <span className="text-2xl font-bold tech-font">Americana</span>
          </div>
        </div>
      </section>

      {/* 4. ADVANCED IT CONSULTATION (Services) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-slate-900 mb-6 tech-font">Additional Value with Advanced IT Consultation</motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-600 font-light">Reimagining your digital frameworks, we decode your challenges and chalk out the best possible strategy to address your pain points head-on.</motion.p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-7xl font-bold text-slate-50 opacity-50 tech-font select-none group-hover:text-orange-50 transition-colors">0{i+1}</div>
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors relative z-10">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tech-font relative z-10">{s.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. DRIVING IT EXCELLENCE (Expertise) */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16 md:w-2/3">
            <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6 tech-font">Driving IT Excellence Across Industries</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-400 font-light">As a reliable IT consultancy services company with a complete focus on innovation and adaptability, we craft the most unique IT strategies that transcend industry boundaries.</motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {excellence.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="text-orange-500 mb-6"><item.icon size={40} /></div>
                <h3 className="text-xl font-bold mb-3 tech-font">{item.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 px-6 bg-orange-600 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 tech-font">Didn't find what you're looking for?</h2>
          <p className="text-xl text-orange-100 font-light mb-10">Let us know your specific enterprise needs, and we'll tailor a strategic solution just for you.</p>
          <Link to="/contact" className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl hover:-translate-y-1">
            Schedule Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
