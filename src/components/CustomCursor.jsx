import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    let outlineX = 0, outlineY = 0;
    let raf;

    const moveCursor = (e) => {
      if (dot) {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
      }
      outlineX = e.clientX;
      outlineY = e.clientY;
    };

    const animateOutline = () => {
      if (outline) {
        const currentLeft = parseFloat(outline.style.left) || 0;
        const currentTop = parseFloat(outline.style.top) || 0;
        outline.style.left = currentLeft + (outlineX - currentLeft) * 0.15 + 'px';
        outline.style.top = currentTop + (outlineY - currentTop) * 0.15 + 'px';
      }
      raf = requestAnimationFrame(animateOutline);
    };

    const handleMouseOver = (e) => {
      const el = e.target.closest('a, button, [data-hover], .glow-btn, .nav-link, .project-card');
      setHovering(!!el);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    raf = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className={`cursor-outline ${hovering ? 'hovering' : ''}`} />
    </>
  );
}
