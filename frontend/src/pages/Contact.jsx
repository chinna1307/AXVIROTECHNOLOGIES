import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import { COMPANY_LINKS } from '../config/profile';

const fadeLeft = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeRight = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Please provide your name.';
  if (!data.email.trim()) {
    errors.email = 'Please provide your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }
  if (!data.message.trim()) errors.message = 'Please provide a message or describe your project.';
  return errors;
}

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  // status: 'idle' | 'submitting' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [serverError, setServerError] = useState('');

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear field error on change
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('submitting');
    setServerError('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Server error (${res.status})`);
      }

      setStatus('success');
      setFormData(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setServerError(
        err.message || 'Something went wrong. Please try again or email us directly.'
      );
    }
  };

  const inputBase =
    'w-full rounded-xl border bg-slate-900/50 px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-500/30 hover:border-slate-600';

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: COMPANY_LINKS.email,
      href: `mailto:${COMPANY_LINKS.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      href: null,
    },
  ];

  // Company social links — only shown when real company URLs are configured
  const socialLinks = [
    COMPANY_LINKS.github && {
      label: 'GitHub',
      href: COMPANY_LINKS.github,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    COMPANY_LINKS.linkedin && {
      label: 'LinkedIn',
      href: COMPANY_LINKS.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ].filter(Boolean);


  return (
    <div className="relative z-10 min-h-screen overflow-hidden pb-24 pt-32 text-white">
      {/* Subtle ambient technology background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.035] mix-blend-screen"
        style={{ backgroundImage: `url('/images/technology/digital-transformation-planning.jpg')` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />

      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-orange-500/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-blue-500/12 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
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
          <h1 className="tech-font mb-4 text-4xl font-extrabold md:text-6xl">
            Let's <span className="gradient-text">Build Something</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg font-light leading-8 text-slate-400">
            Have a project in mind? Tell us about it and we'll get back to you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          {/* Left Column — Contact Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="glass-card flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:border-orange-400/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 ring-1 ring-orange-400/20">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-medium text-white transition-colors hover:text-orange-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links — only rendered if company URLs are configured */}
            {socialLinks.length > 0 && (
              <div className="glass-card rounded-2xl p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Connect
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-200 hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300 hover:-translate-y-0.5"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Response Time Card */}
            <div className="rounded-2xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6 backdrop-blur-md">
              <h4 className="tech-font mb-2 text-base font-bold text-white">Direct Communication</h4>
              <p className="text-sm leading-relaxed text-slate-400">
                You communicate directly with the engineer working on your project. No layers of account managers, no communication overhead.
              </p>
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="glass-card rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/40"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-400/30">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="tech-font mb-3 text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="mx-auto max-w-sm text-sm leading-relaxed text-slate-400 mb-8">
                    Thank you for reaching out to Axviro Technologies. We've received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} noValidate className="space-y-6">
                  {serverError && (
                    <div className="flex items-center gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-300">
                      <AlertCircle size={18} className="shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Name <span className="text-orange-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange('name')}
                      className={`${inputBase} ${errors.name ? 'border-rose-500/60 focus:ring-rose-500/30' : 'border-white/10'}`}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email <span className="text-orange-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange('email')}
                      className={`${inputBase} ${errors.email ? 'border-rose-500/60 focus:ring-rose-500/30' : 'border-white/10'}`}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
                  </div>

                  {/* Company & Project Type (2 columns) */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleChange('company')}
                        className={`${inputBase} border-white/10`}
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={handleChange('projectType')}
                        className={`${inputBase} border-white/10 text-slate-300`}
                      >
                        <option value="" className="bg-slate-900">Select project type</option>
                        <option value="Web Development" className="bg-slate-900">Web Development</option>
                        <option value="Backend Development" className="bg-slate-900">Backend Development</option>
                        <option value="AI Solution" className="bg-slate-900">AI Solution / RAG</option>
                        <option value="API & Database" className="bg-slate-900">API &amp; Database</option>
                        <option value="Cloud / Deployment" className="bg-slate-900">Cloud / Deployment</option>
                        <option value="Custom Software" className="bg-slate-900">Custom Software</option>
                        <option value="Other" className="bg-slate-900">Other / Discussion</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Project Details <span className="text-orange-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about the project — goals, timeline, technical requirements, or any specific challenges..."
                      value={formData.message}
                      onChange={handleChange('message')}
                      className={`${inputBase} resize-none ${errors.message ? 'border-rose-500/60 focus:ring-rose-500/30' : 'border-white/10'}`}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:bg-orange-400 hover:shadow-orange-400/40 disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
