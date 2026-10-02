import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Globe, Share2, ExternalLink, CheckCircle, Send, Zap } from 'lucide-react';

const fadeLeft = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeRight = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email address';
    if (!formData.message.trim()) e.message = 'Message is required';
    return e;
  };

  const submitContact = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email Us', value: 'careers@axvirotechnologies.com', href: 'mailto:careers@axvirotechnologies.com' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana', href: '#' },
  ];

  const socials = [
    { icon: Globe, label: 'LinkedIn', href: '#', color: 'hover:border-blue-400/50 hover:text-blue-300' },
    { icon: Share2, label: 'Twitter / X', href: '#', color: 'hover:border-sky-400/50 hover:text-sky-300' },
    { icon: ExternalLink, label: 'GitHub', href: '#', color: 'hover:border-white/40 hover:text-white' },
  ];

  return (
    <div className="relative z-10 min-h-screen overflow-hidden pb-24 pt-32 text-white">
      {/* Enhanced Background Effects */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-orange-500/12 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-blue-500/12 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-purple-500/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200"
          >
            <Zap size={14} className="animate-pulse" />
            Get In Touch
          </motion.div>
          <h1 className="mb-4 text-4xl font-extrabold md:text-6xl tech-font">
            Let's <span className="gradient-text">Build Something</span> Amazing
          </h1>
          <p className="mx-auto max-w-xl text-lg font-light leading-8 text-slate-400">
            Have a project in mind? We'd love to hear about it. Get in touch and let's transform your vision into reality.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          {/* Left: Info + Socials */}
          <motion.div initial="hidden" animate="visible" variants={fadeLeft}>
            {/* Contact Cards - Enhanced */}
            <div className="space-y-5 mb-12">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative glass-card glass-card-hover flex items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 text-orange-300 transition-all group-hover:from-orange-500/30 group-hover:to-orange-500/10 group-hover:text-orange-200 ring-1 ring-orange-400/20">
                    <Icon size={22} />
                  </div>
                  <div className="relative">
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</div>
                    <div className="font-semibold text-white text-base group-hover:text-orange-300 transition-colors">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links - Enhanced */}
            <div className="mb-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Connect With Us</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href, color }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:border-orange-400/50 ${color}`}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enhanced Availability Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-transparent"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                <span className="text-sm font-semibold text-emerald-300">Currently Accepting Projects</span>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                Our team is actively looking for exciting new challenges. Expect a response within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form - Enhanced */}
          <motion.div initial="hidden" animate="visible" variants={fadeRight}>
            <div className="glass-card rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/40 border border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-950/60">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="mb-2 text-3xl font-bold text-white tech-font">Let's Connect</h2>
                <p className="mb-8 text-sm text-slate-400">Share your project details and we'll craft a tailored solution for you.</p>
              </motion.div>

              <form onSubmit={submitContact} noValidate className="space-y-6">
                {/* Name + Company row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      Full Name <span className="text-orange-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      className={`w-full rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 hover:border-slate-600 ${errors.name ? 'border-red-500/50' : ''}`}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <p className="mt-2 text-xs text-red-400 font-medium">{errors.name}</p>}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                  >
                    <label className="mb-2 block text-sm font-semibold text-slate-300">Company</label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 hover:border-slate-600"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Email Address <span className="text-orange-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@company.com"
                    className={`w-full rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 hover:border-slate-600 ${errors.email ? 'border-red-500/50' : ''}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-400 font-medium">{errors.email}</p>}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Message <span className="text-orange-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your project, goals, and challenges..."
                    className={`w-full rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 hover:border-slate-600 resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <p className="mt-2 text-xs text-red-400 font-medium">{errors.message}</p>}
                </motion.div>

                <motion.button
                  id="contact-submit"
                  type="submit"
                  disabled={submitting}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-4 font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:shadow-orange-500/40 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Toast - Enhanced */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, type: 'spring' }}
            className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 rounded-2xl border border-emerald-400/50 bg-gradient-to-r from-slate-900/98 to-slate-950/98 px-6 py-4 shadow-2xl backdrop-blur-xl"
          >
            <CheckCircle size={22} className="text-emerald-400 shrink-0 animate-bounce" />
            <div>
              <div className="font-semibold text-white text-sm">Message sent successfully!</div>
              <div className="text-xs text-slate-400">We'll get back to you within 24 hours.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
