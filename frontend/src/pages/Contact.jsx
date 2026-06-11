import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Twitter, Github, CheckCircle, Send } from 'lucide-react';

const fadeLeft = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeRight = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

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
    { icon: Mail, label: 'Email Us', value: 'hello@axvirotechnologies.com', href: 'mailto:hello@axvirotechnologies.com' },
    { icon: Phone, label: 'Call Us', value: '+1 (000) 123-4567', href: 'tel:+10001234567' },
    { icon: MapPin, label: 'Location', value: 'Global Operations HQ', href: '#' },
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:border-blue-400/50 hover:text-blue-300' },
    { icon: Twitter, label: 'Twitter / X', href: '#', color: 'hover:border-sky-400/50 hover:text-sky-300' },
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:border-white/40 hover:text-white' },
  ];

  return (
    <div className="relative z-10 min-h-screen overflow-hidden pb-24 pt-32 text-white">
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-orange-500/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
            Contact
          </div>
          <h1 className="mb-4 text-4xl font-extrabold md:text-6xl tech-font">
            Partner <span className="gradient-text">With Us</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg font-light leading-8 text-slate-400">
            Let us know your specific enterprise needs, and we'll tailor a strategic technology solution just for you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          {/* Left: Info + Socials */}
          <motion.div initial="hidden" animate="visible" variants={fadeLeft}>
            {/* Contact Cards */}
            <div className="space-y-4 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group glass-card glass-card-hover flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300 transition-all group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">{label}</div>
                    <div className="font-semibold text-white text-sm">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Follow Us</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 ${color}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative availability card */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-300">Currently accepting projects</span>
              </div>
              <p className="text-sm leading-6 text-slate-400">
                Our team is currently open for new client engagements. Typical response time is under 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial="hidden" animate="visible" variants={fadeRight}>
            <div className="glass-card rounded-[1.75rem] p-8 md:p-10 shadow-2xl shadow-black/30">
              <h2 className="mb-2 text-2xl font-bold text-white tech-font">Schedule a Call</h2>
              <p className="mb-8 text-sm text-slate-500">Fill out the form and we'll reach back within 24 hours.</p>

              <form onSubmit={submitContact} noValidate className="space-y-5">
                {/* Name + Company row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-400">
                      Full Name <span className="text-orange-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      className={`w-full rounded-xl border bg-slate-900/80 px-4 py-3 text-white placeholder-slate-600 outline-none transition-all focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 ${errors.name ? 'border-red-500/60' : 'border-slate-700/60'}`}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-400">Company</label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full rounded-xl border border-slate-700/60 bg-slate-900/80 px-4 py-3 text-white placeholder-slate-600 outline-none transition-all focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-400">
                    Email Address <span className="text-orange-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@company.com"
                    className={`w-full rounded-xl border bg-slate-900/80 px-4 py-3 text-white placeholder-slate-600 outline-none transition-all focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 ${errors.email ? 'border-red-500/60' : 'border-slate-700/60'}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-400">
                    Message <span className="text-orange-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={`w-full rounded-xl border bg-slate-900/80 px-4 py-3 text-white placeholder-slate-600 outline-none transition-all focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 resize-none ${errors.message ? 'border-red-500/60' : 'border-slate-700/60'}`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-4 font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-slate-900/95 px-6 py-4 shadow-2xl backdrop-blur-md"
          >
            <CheckCircle size={20} className="text-emerald-400 shrink-0" />
            <div>
              <div className="font-semibold text-white text-sm">Message sent!</div>
              <div className="text-xs text-slate-400">We'll get back to you within 24 hours.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
