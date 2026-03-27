import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Zap, Target } from 'lucide-react';

const traits = [
  {
    icon: <Code2 size={22} />,
    title: 'Passionate Coder',
    desc: 'Love turning complex problems into elegant, efficient code solutions.',
    color: '#00d4ff',
  },
  {
    icon: <Palette size={22} />,
    title: 'Creative Designer',
    desc: 'Skilled in video editing and Canva design — merging art with technology.',
    color: '#7b2ff7',
  },
  {
    icon: <Zap size={22} />,
    title: 'Quick Learner',
    desc: 'Rapidly adapts to new technologies and environments with ease.',
    color: '#f72fbf',
  },
  {
    icon: <Target size={22} />,
    title: 'Impact-Driven',
    desc: 'Focused on building real-world solutions that create tangible change.',
    color: '#00d4ff',
  },
];

const stats = [
  { value: '2+', label: 'Years Coding' },
  { value: '5+', label: 'Projects Built' },
  { value: '3+', label: 'Languages' },
  { value: '2', label: 'Hackathons' },
];

function useAnim() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  return { ref, inView };
}

export default function About() {
  const { ref, inView } = useAnim();

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="glow-orb w-[500px] h-[500px] -left-48 top-1/4 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7b2ff7, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="neon-line mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Avatar placeholder with animated border */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full animate-spin"
                style={{
                  background: 'conic-gradient(from 0deg, #00d4ff, #7b2ff7, #f72fbf, #00d4ff)',
                  animationDuration: '8s',
                  padding: '3px',
                  borderRadius: '50%',
                }} />
              <div className="absolute inset-[3px] rounded-full overflow-hidden"
                style={{ background: '#050b12' }}>
                <div className="w-full h-full rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(123,47,247,0.1))' }}>
                  <span className="text-9xl select-none">👨‍💻</span>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card px-3 py-2 text-xs font-semibold text-cyan-400 whitespace-nowrap"
              >
                🐍 Python Dev
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 text-xs font-semibold text-purple-400 whitespace-nowrap"
              >
                🤖 AI Enthusiast
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg leading-relaxed mb-6"
              style={{ color: '#94a3b8' }}
            >
              I'm a{' '}
              <span className="text-cyan-400 font-semibold">Python Developer</span> and{' '}
              <span className="text-purple-400 font-semibold">AI Enthusiast</span> with
              a passion for building solutions that bridge the gap between technology
              and real-world impact. From crafting intelligent systems to designing
              engaging visuals, I bring a creative edge to every project.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: '#64748b' }}
            >
              With experience in Python, React, Flutter, and AI APIs, I thrive
              on solving complex problems with clean, efficient code. I'm a quick
              learner who adapts fast and loves turning ideas into impactful products.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-4 gap-4 mb-10"
            >
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="text-2xl font-black gradient-text">{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: '#64748b' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Trait cards */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  data-hover
                  className="glass-card p-4 group hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
                  style={{ cursor: 'none' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${trait.color}20`, color: trait.color }}>
                      {trait.icon}
                    </div>
                    <h4 className="font-semibold text-sm text-white">{trait.title}</h4>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{trait.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
