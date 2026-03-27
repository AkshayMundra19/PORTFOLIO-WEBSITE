import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Cpu, Map } from 'lucide-react';

const projects = [
  {
    id: 'edubridge',
    title: 'EduBridge',
    subtitle: 'AI-Powered Learning Platform',
    desc: 'An intelligent offline learning platform designed to empower rural students with personalized AI-driven education. Features modular UI, adaptive content, and real-time performance tracking.',
    tech: ['React', 'TypeScript', 'Vite', 'AI APIs', 'Tailwind CSS'],
    icon: <Cpu size={24} />,
    color: '#00d4ff',
    gradient: 'from-cyan-500/20 to-blue-600/10',
    features: ['Personalized AI Learning', 'Offline-First Architecture', 'Responsive Modular UI', 'Student Progress Tracking'],
    github: 'https://github.com',
    demo: '#',
    badge: '🏆 Hackathon Project',
  },
  {
    id: 'blocktrip',
    title: 'BlockTrip',
    subtitle: 'Smart Tourist Safety Monitor',
    desc: 'A real-time tourist safety monitoring system that leverages Python and Google Maps API to provide live location tracking, intelligent safety insights, and dynamic route visualization.',
    tech: ['Python', 'Google Maps API', 'Real-time Data', 'Route Viz'],
    icon: <Map size={24} />,
    color: '#7b2ff7',
    gradient: 'from-purple-600/20 to-pink-600/10',
    features: ['Real-time GPS Tracking', 'Safety Alerts & Insights', 'Route Visualization', 'Traveler Dashboard'],
    github: 'https://github.com',
    demo: '#',
    badge: '🗺️ Safety Tech',
  },
];

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
      data-hover
      className="project-card glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-500"
      style={{ cursor: 'none', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      {/* Top gradient bar */}
      <div className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44)` }} />

      {/* Card header */}
      <div className={`p-8 pb-0 bg-gradient-to-br ${project.gradient}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${project.color}22`, color: project.color, border: `1px solid ${project.color}33` }}>
              {project.icon}
            </div>
            <div>
              <span className="text-xs font-mono px-2 py-1 rounded-full mb-1 inline-block"
                style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}22` }}>
                {project.badge}
              </span>
              <h3 className="text-2xl font-black text-white">{project.title}</h3>
              <p className="text-sm" style={{ color: project.color }}>{project.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-8 pt-5">
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: project.color }} />
              {f}
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t}
              className="text-xs px-3 py-1.5 rounded-full font-mono transition-all duration-200 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8',
              }}>
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            id={`${project.id}-github`}
            data-hover
            className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#94a3b8',
            }}
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={project.demo}
            id={`${project.id}-demo`}
            data-hover
            className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${project.color}, ${project.color}88)`,
              boxShadow: `0 0 0 rgba(${project.color}, 0)`,
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 20px ${project.color}44`}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="section relative overflow-hidden" ref={ref}
      style={{ background: 'rgba(5,11,18,0.6)' }}>
      <div className="glow-orb w-[500px] h-[500px] right-0 top-1/3 opacity-10"
        style={{ background: 'radial-gradient(circle, #7b2ff7, transparent)' }} />
      <div className="glow-orb w-80 h-80 left-1/4 bottom-0 opacity-8"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <div className="neon-line mx-auto" />
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Real-world applications built with modern tech stacks, focused on impact and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
