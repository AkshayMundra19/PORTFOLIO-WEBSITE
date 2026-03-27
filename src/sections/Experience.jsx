import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Renao Robotics Pvt. Ltd.',
    role: 'Python Developer Intern',
    period: '2024',
    location: 'India',
    type: 'Internship',
    color: '#00d4ff',
    highlights: [
      'Built Python-based automation and data processing solutions',
      'Developed a Multiple ID Generator project for streamlined operations',
      'Applied strong problem-solving skills and efficient coding practices',
      'Collaborated with a team in a fast-paced startup environment',
    ],
    tech: ['Python', 'Automation', 'Data Processing', 'ID Systems'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="experience" className="section relative overflow-hidden" ref={ref}>
      <div className="glow-orb w-80 h-80 left-0 bottom-0 opacity-10"
        style={{ background: 'radial-gradient(circle, #7b2ff7, transparent)' }} />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Work history</p>
          <h2 className="section-title gradient-text">Experience</h2>
          <div className="neon-line mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, #00d4ff, #7b2ff7, transparent)' }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
              className="relative flex gap-8 mb-12 ml-0"
            >
              {/* Timeline dot */}
              <div className="flex-shrink-0 relative z-10 w-16 flex items-start justify-center pt-1">
                <div className="timeline-dot" />
              </div>

              {/* Card */}
              <div className="flex-1 glass-card p-8 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 group">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono px-3 py-1 rounded-full text-cyan-400"
                        style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase size={14} className="text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-400 text-sm justify-end">
                      <Calendar size={13} />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm justify-end">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + j * 0.1 }}
                      className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                    >
                      <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t}
                      className="text-xs px-3 py-1 rounded-full font-mono text-purple-300"
                      style={{ background: 'rgba(123,47,247,0.15)', border: '1px solid rgba(123,47,247,0.25)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Open to work badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mt-4"
          >
            <div className="glass-card px-8 py-4 flex items-center gap-4 border-green-500/30"
              style={{ borderColor: 'rgba(34,197,94,0.3)' }}>
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 font-semibold">Open to new opportunities</span>
              <span className="text-slate-500 text-sm">— Available for internships & full-time roles</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
