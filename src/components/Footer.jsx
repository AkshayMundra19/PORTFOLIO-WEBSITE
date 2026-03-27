import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(2,4,8,0.8)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-lg text-white"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #7b2ff7)' }}>
              A
            </div>
            <div>
              <p className="font-bold text-white">Akshay Mundra</p>
              <p className="text-xs text-slate-600">Python Developer · AI Enthusiast</p>
            </div>
          </div>

          {/* Credit */}
          <p className="text-slate-600 text-sm flex items-center gap-2">
            Built with <Heart size={14} className="text-pink-500 fill-pink-500" /> using React, Three.js & Framer Motion
          </p>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { href: 'https://github.com', icon: <Github size={16} />, label: 'GitHub' },
              { href: 'https://linkedin.com', icon: <Linkedin size={16} />, label: 'LinkedIn' },
              { href: 'mailto:akshaymundra07@gmail.com', icon: <Mail size={16} />, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                data-hover
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 transition-all duration-300 hover:text-cyan-400 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-xs text-slate-700"
          style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
          © {new Date().getFullYear()} Akshay Mundra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
