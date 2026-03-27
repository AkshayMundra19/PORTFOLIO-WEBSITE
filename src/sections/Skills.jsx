import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    label: 'Programming',
    color: '#00d4ff',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'SQL', level: 80 },
      { name: 'Flutter / Kotlin', level: 65 },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    color: '#7b2ff7',
    skills: [
      { name: 'React', level: 82 },
      { name: 'TypeScript', level: 72 },
      { name: 'Pandas & NumPy', level: 88 },
      { name: 'Matplotlib', level: 80 },
    ],
  },
  {
    label: 'Tools & Platforms',
    color: '#f72fbf',
    skills: [
      { name: 'GitHub', level: 88 },
      { name: 'VS Code', level: 95 },
      { name: 'Android Studio', level: 70 },
      { name: 'MySQL', level: 78 },
    ],
  },
];

const techIcons = [
  { name: 'Python', emoji: '🐍' },
  { name: 'React', emoji: '⚛️' },
  { name: 'AI / ML', emoji: '🤖' },
  { name: 'Java', emoji: '☕' },
  { name: 'Flutter', emoji: '💙' },
  { name: 'Git', emoji: '🌿' },
  { name: 'SQL', emoji: '🗃️' },
  { name: 'TypeScript', emoji: '📘' },
];

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-5"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 10px ${color}66`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section relative overflow-hidden" ref={ref}
      style={{ background: 'rgba(5,11,18,0.5)' }}>
      <div className="glow-orb w-[400px] h-[400px] -right-32 top-1/2 opacity-10"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">What I know</p>
          <h2 className="section-title gradient-text">Skills & Tech Stack</h2>
          <div className="neon-line mx-auto" />
        </motion.div>

        {/* Floating tech icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.1, y: -4 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 2.5 + i * 0.3, ease: 'easeInOut', delay: i * 0.2 },
              }}
              data-hover
              className="glass-card px-5 py-3 flex items-center gap-2 hover:border-cyan-400/40 transition-all duration-300"
              style={{ cursor: 'none' }}
            >
              <span className="text-xl">{tech.emoji}</span>
              <span className="text-sm font-medium text-slate-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill bars by category */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + ci * 0.15 }}
              className="glass-card p-6 hover:border-cyan-400/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                <h3 className="font-bold text-white">{cat.label}</h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={cat.color}
                  inView={inView}
                  delay={0.4 + ci * 0.15 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
