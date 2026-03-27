import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, GitFork, Star } from 'lucide-react';

const languages = [
  { name: 'Python', percent: 45, color: '#3b82f6' },
  { name: 'JavaScript', percent: 25, color: '#f59e0b' },
  { name: 'TypeScript', percent: 12, color: '#00d4ff' },
  { name: 'Java', percent: 10, color: '#ef4444' },
  { name: 'Other', percent: 8, color: '#7b2ff7' },
];

const stats = [
  { label: 'Public Repos', value: '12+', icon: <GitFork size={20} />, color: '#00d4ff' },
  { label: 'Total Stars', value: '8+', icon: <Star size={20} />, color: '#f59e0b' },
  { label: 'Contributions', value: '200+', icon: <BarChart3 size={20} />, color: '#7b2ff7' },
];

function ContributionGrid() {
  const weeks = 20;
  const days = 7;
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const rand = Math.random();
    const level = rand > 0.75 ? 4 : rand > 0.55 ? 3 : rand > 0.35 ? 2 : rand > 0.2 ? 1 : 0;
    return level;
  });

  const colors = ['rgba(255,255,255,0.05)', 'rgba(0,212,255,0.2)', 'rgba(0,212,255,0.4)', 'rgba(0,212,255,0.65)', '#00d4ff'];

  return (
    <div className="flex gap-1 overflow-x-auto pb-2">
      {Array.from({ length: weeks }, (_, w) => (
        <div key={w} className="flex flex-col gap-1">
          {Array.from({ length: days }, (_, d) => {
            const idx = w * days + d;
            return (
              <div
                key={d}
                className="w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125"
                style={{
                  background: colors[cells[idx] || 0],
                  boxShadow: cells[idx] >= 3 ? '0 0 6px rgba(0,212,255,0.5)' : 'none',
                }}
                title={`Level ${cells[idx]}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function GitHubStats() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="github-stats" className="section relative overflow-hidden"
      style={{ background: 'rgba(5,11,18,0.5)' }} ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Open Source</p>
          <h2 className="section-title gradient-text">GitHub Stats</h2>
          <div className="neon-line mx-auto" />
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card p-5 text-center hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-3" style={{ color: s.color }}>{s.icon}</div>
              <div className="text-3xl font-black" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h3 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
            <BarChart3 size={16} className="text-cyan-400" />
            Contribution Activity
          </h3>
          <ContributionGrid />
          <div className="flex items-center justify-end gap-2 mt-3">
            <span className="text-xs text-slate-600">Less</span>
            {['rgba(255,255,255,0.05)', 'rgba(0,212,255,0.2)', 'rgba(0,212,255,0.4)', 'rgba(0,212,255,0.65)', '#00d4ff'].map((c, i) => (
              <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
            ))}
            <span className="text-xs text-slate-600">More</span>
          </div>
        </motion.div>

        {/* Top languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6"
        >
          <h3 className="text-white font-bold text-sm mb-5">Top Languages</h3>
          {/* Bar */}
          <div className="flex h-3 rounded-full overflow-hidden mb-5">
            {languages.map((lang) => (
              <motion.div
                key={lang.name}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ width: `${lang.percent}%`, background: lang.color, transformOrigin: 'left' }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-3 h-3 rounded-sm" style={{ background: lang.color }} />
                <span>{lang.name}</span>
                <span className="text-slate-600 font-mono text-xs">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
