import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Award } from 'lucide-react';

const achievements = [
  {
    id: 'ai-eduthon',
    icon: <Trophy size={28} />,
    title: 'AI Eduthon Finalist',
    org: 'IIT Bombay',
    year: '2024',
    desc: 'Reached the finals of the prestigious AI Eduthon hackathon hosted by IIT Bombay, presenting EduBridge — an AI-powered learning platform for rural students.',
    color: '#f59e0b',
    badge: '🏆 Finalist',
  },
  {
    id: 'sih-2025',
    icon: <Star size={28} />,
    title: 'Smart India Hackathon Nominee',
    org: 'Government of India',
    year: '2025',
    desc: 'Nominated to represent in Smart India Hackathon 2025, one of the largest hackathons in the world organized by the Government of India.',
    color: '#00d4ff',
    badge: '⭐ Nominee',
  },
];

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="achievements" className="section relative overflow-hidden" ref={ref}>
      <div className="glow-orb w-96 h-96 -right-24 top-1/2 opacity-10"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="section-title gradient-text">Achievements</h2>
          <div className="neon-line mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              data-hover
              className="glass-card p-8 badge-glow hover:-translate-y-2 transition-all duration-400 group"
              style={{
                cursor: 'none',
                borderColor: `${ach.color}33`,
              }}
            >
              {/* Top bar */}
              <div className="h-0.5 w-full mb-8 rounded-full"
                style={{ background: `linear-gradient(90deg, ${ach.color}, transparent)` }} />

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${ach.color}20`,
                    color: ach.color,
                    border: `1px solid ${ach.color}33`,
                    boxShadow: `0 0 20px ${ach.color}22`,
                  }}>
                  {ach.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: `${ach.color}15`, color: ach.color }}>
                      {ach.badge}
                    </span>
                    <span className="text-xs text-slate-600 font-mono">{ach.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mt-2">{ach.title}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: ach.color }}>{ach.org}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{ach.desc}</p>
                </div>
              </div>

              {/* Animated corner decoration */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Award size={40} style={{ color: ach.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom motivational banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 glass-card p-6 text-center"
          style={{ borderColor: 'rgba(0,212,255,0.15)' }}
        >
          <p className="text-slate-400 text-sm">
            <span className="gradient-text font-bold text-base">Driven by challenges</span>
            {' '}— Always seeking opportunities to compete, collaborate, and innovate at the highest level.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
