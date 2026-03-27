import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'akshaymundra07@gmail.com',
    href: 'mailto:akshaymundra07@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 9166678361',
    href: 'tel:+919166678361',
    color: '#7b2ff7',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'India 🇮🇳',
    href: null,
    color: '#f72fbf',
  },
];

const socials = [
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com',
    color: '#e2e8f0',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: '#0a66c2',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <section id="contact" className="section relative overflow-hidden" ref={ref}
      style={{ background: 'rgba(5,11,18,0.7)' }}>
      <div className="glow-orb w-[400px] h-[400px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-8"
        style={{ background: 'radial-gradient(circle, #7b2ff7, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Get in touch</p>
          <h2 className="section-title gradient-text">Contact Me</h2>
          <div className="neon-line mx-auto" />
          <p className="text-slate-500 mt-4 max-w-md mx-auto">
            Have a project in mind or want to collaborate? Let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-white font-bold mb-5">Let's Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, color: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} data-hover
                          className="text-sm text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-slate-300 font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-bold mb-5">Social Links</h3>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`contact-${s.label.toLowerCase()}`}
                    data-hover
                    className="flex items-center gap-3 flex-1 px-4 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#94a3b8',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color + '44'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  >
                    {s.icon}
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability indicator */}
            <div className="glass-card p-5 flex items-center gap-4"
              style={{ borderColor: 'rgba(34,197,94,0.25)' }}>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-50" />
              </div>
              <div>
                <p className="text-green-400 font-semibold text-sm">Available for Work</p>
                <p className="text-slate-500 text-xs">Response within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '2px solid rgba(0,212,255,0.3)' }}>
                    <CheckCircle2 size={40} className="text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Message Sent! 🎉</h3>
                  <p className="text-slate-400 mb-6">Thanks for reaching out! I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="glow-btn glow-btn-outline text-sm"
                    id="send-another-btn"
                  >
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate id="contact-form">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs text-slate-500 mb-2 font-medium" htmlFor="contact-name">Your Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Akshay Mundra"
                        value={form.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-2 font-medium" htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs text-slate-500 mb-2 font-medium" htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="Project collaboration / Job opportunity..."
                      value={form.subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs text-slate-500 mb-2 font-medium" htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={loading}
                    data-hover
                    className="glow-btn glow-btn-primary w-full justify-center text-base py-3.5 disabled:opacity-70"
                    style={{ cursor: loading ? 'wait' : 'none' }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
