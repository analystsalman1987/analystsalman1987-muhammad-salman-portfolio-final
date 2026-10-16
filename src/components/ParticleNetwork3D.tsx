import { useEffect, useRef } from 'react';

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  projX: number;
  projY: number;
  scale: number;
  alpha: number;
}

export function ParticleNetwork3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    updateSize();

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = mediaQuery.matches;
    const onMotionChange = (e: MediaQueryListEvent) => {
      reducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', onMotionChange);

    // Particle parameters based on screen size
    const isMobile = width < 768;
    const particleCount = isMobile ? 48 : 88;
    const maxDist3D = isMobile ? 125 : 155;
    const fov = 480;
    const depth = 380;

    const COLORS = [
      { core: '#38bdf8', glow: 'rgba(56, 189, 248, 0.35)' }, // Sky cyan
      { core: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.35)' }, // Vivid cyan
      { core: '#22d3ee', glow: 'rgba(34, 211, 238, 0.35)' }, // Bright cyan
      { core: '#67e8f9', glow: 'rgba(103, 232, 249, 0.35)' }, // Electric ice cyan
      { core: '#60a5fa', glow: 'rgba(96, 165, 250, 0.30)' }, // Soft sapphire blue
      { core: '#d8b56a', glow: 'rgba(216, 181, 106, 0.25)' }, // Delicate champagne gold accent
    ];

    const particles: Particle3D[] = [];
    const halfW = width * 0.65;
    const halfH = height * 0.65;

    for (let i = 0; i < particleCount; i++) {
      // 90% cyan/blue, 10% delicate gold accent
      const colorScheme = i % 10 === 0 ? COLORS[5] : COLORS[i % 5];
      const speedMult = isMobile ? 0.22 : 0.35;
      particles.push({
        x: (Math.random() * 2 - 1) * halfW,
        y: (Math.random() * 2 - 1) * halfH,
        z: (Math.random() * 2 - 1) * depth,
        vx: (Math.random() * 2 - 1) * speedMult,
        vy: (Math.random() * 2 - 1) * speedMult,
        vz: (Math.random() * 2 - 1) * (speedMult * 0.8),
        baseRadius: 1.3 + Math.random() * 1.5,
        color: colorScheme.core,
        glowColor: colorScheme.glow,
        projX: 0,
        projY: 0,
        scale: 1,
        alpha: 1,
      });
    }

    // Interactive mouse tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseActive = false;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let ambientAngleX = 0;
    let ambientAngleY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      mouseX = clientX;
      mouseY = clientY;
      mouseActive = true;

      // Subtle mouse-responsive 3D rotation angle
      const normX = (clientX - width / 2) / (width / 2);
      const normY = (clientY - height / 2) / (height / 2);
      targetRotY = normX * 0.38; // Max ~22deg yaw
      targetRotX = -normY * 0.26; // Max ~15deg pitch
    };

    const handlePointerLeave = () => {
      mouseActive = false;
      targetRotX = 0;
      targetRotY = 0;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchstart', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave, { passive: true });

    const handleResize = () => {
      updateSize();
    };
    window.addEventListener('resize', handleResize);

    // Animation loop with tab visibility optimization
    let animationFrameId = 0;
    let lastTime = performance.now();
    let isTabVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isTabVisible) return;

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Clear previous frame
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // Continuous ambient rotation & smooth mouse damping
      if (!reducedMotion) {
        ambientAngleY += dt * 0.045; // Gentle continuous orbit
        ambientAngleX += dt * 0.02;
        currentRotX += (targetRotX - currentRotX) * 0.06;
        currentRotY += (targetRotY - currentRotY) * 0.06;
      }

      const totalRotX = currentRotX + ambientAngleX;
      const totalRotY = currentRotY + ambientAngleY;

      const cosY = Math.cos(totalRotY);
      const sinY = Math.sin(totalRotY);
      const cosX = Math.cos(totalRotX);
      const sinX = Math.sin(totalRotX);

      const centerX = width / 2;
      const centerY = height / 2;
      const curHalfW = width * 0.65;
      const curHalfH = height * 0.65;

      // Update positions & project into 3D camera view
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;

          // Boundary wrapping in 3D
          if (p.x < -curHalfW) p.x = curHalfW;
          else if (p.x > curHalfW) p.x = -curHalfW;
          if (p.y < -curHalfH) p.y = curHalfH;
          else if (p.y > curHalfH) p.y = -curHalfH;
          if (p.z < -depth) p.z = depth;
          else if (p.z > depth) p.z = -depth;
        }

        // 3D Rotation
        // 1. Yaw around Y axis
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // 2. Pitch around X axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection
        const depthDist = fov + z2;
        if (depthDist <= 10) {
          p.scale = 0;
          p.alpha = 0;
          continue;
        }

        const scale = fov / depthDist;
        p.scale = scale;
        p.projX = centerX + x1 * scale;
        p.projY = centerY + y2 * scale;

        // Alpha based on depth perspective
        const rawAlpha = (scale - 0.45) * 1.35;
        p.alpha = Math.max(0.12, Math.min(0.85, rawAlpha));
      }

      // Draw connecting lines between close particles in 3D
      ctx.lineWidth = 0.75;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        if (a.alpha <= 0.05) continue;

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          if (b.alpha <= 0.05) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dz = a.z - b.z;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDist3D * maxDist3D) {
            const dist = Math.sqrt(distSq);
            const lineFactor = (1 - dist / maxDist3D);
            const lineAlpha = lineFactor * 0.24 * Math.min(a.alpha, b.alpha);

            if (lineAlpha > 0.015) {
              ctx.beginPath();
              ctx.moveTo(a.projX, a.projY);
              ctx.lineTo(b.projX, b.projY);
              ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha.toFixed(3)})`;
              ctx.stroke();
            }
          }
        }

        // Mouse interactive proximity connection
        if (mouseActive) {
          const mdx = a.projX - mouseX;
          const mdy = a.projY - mouseY;
          const mDist = Math.hypot(mdx, mdy);
          if (mDist < 135) {
            const mAlpha = (1 - mDist / 135) * 0.32 * a.alpha;
            if (mAlpha > 0.02) {
              ctx.beginPath();
              ctx.moveTo(a.projX, a.projY);
              ctx.lineTo(mouseX, mouseY);
              ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha.toFixed(3)})`;
              ctx.stroke();
            }
          }
        }
      }

      // Draw glowing 3D dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.alpha <= 0.05) continue;

        const radius = Math.max(0.8, p.baseRadius * p.scale);

        // Soft outer glow halo for particles in foreground/midground
        if (p.scale > 0.8) {
          ctx.beginPath();
          ctx.arc(p.projX, p.projY, radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = p.glowColor;
          ctx.globalAlpha = p.alpha * 0.45;
          ctx.fill();
        }

        // Crisp central dot
        ctx.beginPath();
        ctx.arc(p.projX, p.projY, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchstart', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      mediaQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
}

export default ParticleNetwork3D;
