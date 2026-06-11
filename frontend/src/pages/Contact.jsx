import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const submitContact = (e) => {
    e.preventDefault();
    alert("Message sent successfully. We will get back to you soon!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 pb-20 pt-32 text-white">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <div className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">Contact</div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl tech-font">Partner With Us</h1>
          <p className="mb-8 text-lg font-light leading-8 text-slate-300">Didn't find what you're looking for? Let us know your specific enterprise needs, and we'll tailor a strategic solution just for you.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-orange-200 transition-colors">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center shrink-0"><Mail /></div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Email Us</div>
                <div className="font-bold text-slate-900">hello@axvirotechnologies.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-orange-200 transition-colors">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center shrink-0"><MapPin /></div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Location</div>
                <div className="font-bold text-slate-900">Global Operations HQ</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-orange-200 transition-colors">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center shrink-0"><Phone /></div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Call Us</div>
                <div className="font-bold text-slate-900">+1 (000) 123-4567</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-6 tech-font">Schedule a Call</h2>
          <form onSubmit={submitContact} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
              <input required type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea required rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-lg transition-colors mt-4 shadow-lg shadow-orange-600/20">
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
