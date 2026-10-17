import { useEffect, useRef } from 'react';

/** Decorative overlay only. Does not intercept clicks or change the Hero layout. */
export default function SlowParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    const host = canvas.parentElement;
    if (!host) return;

    const colors = ['#36c8ee', '#d5ae57', '#21c4a5', '#c6e4ef'];
    const particles = Array.from({ length: 24 }, (_, i) => ({
      x: (i * 0.61803398875 + 0.13) % 1,
      y: (i * 0.41421356237 + 0.19) % 1,
      vx: (((i * 17) % 13) - 6) * 0.0000050,
      vy: (((i * 23) % 11) - 5) * 0.0000054,
      depth: 0.4 + (((i * 7) % 10) / 12),
      color: colors[i % colors.length],
    }));

    let width = 1;
    let height = 1;
    let animationFrame = 0;
    let lastTime = 0;
    let previousDraw = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function resize() {
      if (!canvas || !context || !host) return;
      const rect = host.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    function draw(time: number) {
      if (!context) return;
      animationFrame = window.requestAnimationFrame(draw);
      if (time - previousDraw < 40) return; // At most ~25 FPS.

      const delta = Math.min(time - (lastTime || time), 60);
      lastTime = time;
      previousDraw = time;
      context.clearRect(0, 0, width, height);

      if (!reducedMotion.matches) {
        for (const p of particles) {
          p.x += p.vx * delta;
          p.y += p.vy * delta;
          if (p.x > 1.03) p.x = -0.03;
          if (p.x < -0.03) p.x = 1.03;
          if (p.y > 1.03) p.y = -0.03;
          if (p.y < -0.03) p.y = 1.03;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = (a.x - b.x) * width;
          const dy = (a.y - b.y) * height;
          const distance = Math.hypot(dx, dy);
          const maxDistance = 145;
          if (distance >= maxDistance) continue;
          context.beginPath();
          context.moveTo(a.x * width, a.y * height);
          context.lineTo(b.x * width, b.y * height);
          context.strokeStyle = `rgba(72, 171, 210, ${0.18 * (1 - distance / maxDistance)})`;
          context.lineWidth = 0.75;
          context.stroke();
        }
      }

      for (const p of particles) {
        const x = p.x * width;
        const y = p.y * height;
        const size = 2 + p.depth * 3.3;
        context.globalAlpha = 0.5 + p.depth * 0.35;
        context.fillStyle = p.color;
        context.fillRect(x - size / 2, y - size / 2, size, size);
      }
      context.globalAlpha = 1;
    }

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-[1] h-full w-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
