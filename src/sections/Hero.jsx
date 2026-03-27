import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.7 + 0.1,
      color: Math.random() > 0.5 ? '0, 212, 255' : '123, 47, 247',
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      // Draw light connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(123,47,247,0.12) 0%, rgba(0,212,255,0.06) 40%, #020408 70%)' }}
    >
      <ParticleBackground />

      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 top-1/4 left-1/4 opacity-20"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
      <div className="glow-orb w-80 h-80 bottom-1/4 right-1/4 opacity-15"
        style={{ background: 'radial-gradient(circle, #7b2ff7, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-cyan-400" />
              <span className="text-sm font-mono tracking-widest text-cyan-400 uppercase">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Hi, I'm{' '}
              <span className="gradient-text block mt-1">Akshay Mundra</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: '#94a3b8' }}
            >
              <TypeAnimation
                sequence={[
                  'Python Developer', 2000,
                  'AI Enthusiast', 2000,
                  'Creative Technologist', 2000,
                  'Problem Solver', 2000,
                  'Full Stack Builder', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-cyan-400"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-base md:text-lg mb-10 max-w-lg leading-relaxed"
              style={{ color: '#64748b' }}
            >
              Building smart solutions with{' '}
              <span className="text-cyan-400">code</span>,{' '}
              <span className="text-purple-400">creativity</span> &{' '}
              <span className="text-pink-400">AI</span>.
              Passionate about crafting impactful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="glow-btn glow-btn-primary"
                data-hover
                id="hero-view-projects"
              >
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="glow-btn glow-btn-outline"
                data-hover
                id="hero-contact-btn"
              >
                <span>Contact Me</span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="glow-btn"
                style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: '#94a3b8' }}
                data-hover
                id="hero-download-resume"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="flex items-center gap-5"
            >
              <span className="text-xs text-slate-600 font-mono tracking-wider">FIND ME ON</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-link"
                  data-hover
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-slate-400 hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-link"
                  data-hover
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-slate-400 hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href="mailto:akshaymundra07@gmail.com"
                  id="hero-email-link"
                  data-hover
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  aria-label="Email"
                >
                  <Mail size={18} className="text-slate-400 hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:flex items-center justify-center relative"
            style={{ height: '500px' }}
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(0,212,255,0.08), transparent 70%)',
                filter: 'blur(30px)'
              }} />
            <ThreeScene />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-xs text-slate-600 font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
