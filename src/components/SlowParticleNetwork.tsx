import { useEffect, useRef } from 'react';

/** Decorative overlay only. Smooth, slow-drifting square particle network with connecting lines. */
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

    // 24 particles with guaranteed non-zero velocities and depth distribution
    const particles = Array.from({ length: 24 }, (_, i) => {
      // Golden ratio angle distribution for organic multi-directional dispersion
      const angle = ((i * 137.5 + 28.5) * Math.PI) / 180;
      const depth = 0.45 + (((i * 7) % 10) / 12) * 0.65; // 0.45 to ~1.0
      // Speed in pixels per second matched to ambient slow blue dots (12 to 24 px/s)
      const speed = 12 + ((i * 3) % 9) + depth * 5;
      return {
        x: (i * 0.61803398875 + 0.13) % 1,
        y: (i * 0.41421356237 + 0.19) % 1,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        depth,
        color: colors[i % colors.length],
      };
    });

    let width = 1;
    let height = 1;
    let animationFrame = 0;
    let lastTime = performance.now();
    let isRunning = true;

    function resize() {
      if (!canvas || !context || !host) return;
      const rect = host.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    function render(time: number) {
      if (!isRunning || !context) return;
      animationFrame = window.requestAnimationFrame(render);

      // Delta time in seconds, clamped to 80ms to avoid skips on frame drops
      const dt = Math.min((time - (lastTime || time)) / 1000, 0.08);
      lastTime = time;

      // Update particle positions continuously
      for (const p of particles) {
        p.x += (p.vx / width) * dt;
        p.y += (p.vy / height) * dt;

        // Wrap around seamlessly with padding margin
        if (p.x > 1.03) p.x = -0.03;
        if (p.x < -0.03) p.x = 1.03;
        if (p.y > 1.03) p.y = -0.03;
        if (p.y < -0.03) p.y = 1.03;
      }

      context.clearRect(0, 0, width, height);

      // Draw connecting lines between moving particles within proximity
      const maxDistance = 145;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = (a.x - b.x) * width;
          const dy = (a.y - b.y) * height;
          const distance = Math.hypot(dx, dy);

          if (distance >= maxDistance) continue;

          const alpha = 0.22 * (1 - distance / maxDistance) * Math.min(a.depth, b.depth);
          context.beginPath();
          context.moveTo(a.x * width, a.y * height);
          context.lineTo(b.x * width, b.y * height);
          context.strokeStyle = `rgba(72, 171, 210, ${alpha.toFixed(3)})`;
          context.lineWidth = 0.75;
          context.stroke();
        }
      }

      // Draw glowing square particles
      for (const p of particles) {
        const x = p.x * width;
        const y = p.y * height;
        const size = 2.4 + p.depth * 2.8;
        const alpha = 0.45 + p.depth * 0.4;

        // Soft subtle glow halo
        context.globalAlpha = alpha * 0.3;
        context.fillStyle = p.color;
        context.fillRect(x - (size + 2) / 2, y - (size + 2) / 2, size + 2, size + 2);

        // Core sharp square particle
        context.globalAlpha = alpha;
        context.fillRect(x - size / 2, y - size / 2, size, size);
      }

      context.globalAlpha = 1;
    }

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    lastTime = performance.now();
    animationFrame = window.requestAnimationFrame(render);

    // Pause cleanly when page is hidden and resume with fresh timestamp
    const handleVisibility = () => {
      if (document.hidden) {
        isRunning = false;
        window.cancelAnimationFrame(animationFrame);
      } else if (!isRunning) {
        isRunning = true;
        lastTime = performance.now();
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', handleVisibility);

    return () => {
      isRunning = false;
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', handleVisibility);
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
