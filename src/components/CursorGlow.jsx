import { useEffect, useRef } from 'react';
import './CursorGlow.css';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (glowRef.current) {
        glowRef.current.style.left = mouseX + 'px';
        glowRef.current.style.top = mouseY + 'px';
      }
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px';
        dotRef.current.style.top = mouseY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
