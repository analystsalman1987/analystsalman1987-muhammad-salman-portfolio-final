import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  profile?: ProfileInfo;
  onOpenCV?: () => void;
  onSelectExperience?: () => void;
}

type Point = {
  x: number; y: number; fromX: number; fromY: number;
  toX: number; toY: number; start: number; duration: number;
  opacity: number; leg: number;
  renderX?: number; renderY?: number;
};

const LABELS = [
  '14+ Years Exp','ERP Software','Oracle','Qoyod','QuickBooks',
  'MS Office','Advanced Excel','Financial Reporting','Receivables',
  'VAT Reports & Submission','Reconciliations','Costing',
  'Monthly Closing','Cash Handling','Petty Cash','Payables',
  'P&L Account','Balance Sheet',
];

const GOLD = '#D8B56A';
const BLUE = '#69B7E7';
const smooth = (t: number) => t * t * (3 - 2 * t);
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

function destination(i: number, leg: number, w: number, h: number): [number, number] {
  const safeW = Math.max(360, w || 1000);
  const safeH = Math.max(480, h || 600);
  const padX = Math.min(130, Math.max(62, safeW * 0.09));
  const padY = Math.min(100, Math.max(52, safeH * 0.13));
  const k = (i * 29 + leg * 37) % 101;
  let x = padX + ((k * 31) % 97) / 97 * Math.max(1, safeW - padX * 2);
  let y = padY + ((k * 47 + i * 9) % 89) / 89 * Math.max(1, safeH - padY * 2);
  if (Math.abs(x - safeW / 2) < 170 && Math.abs(y - safeH / 2) < 95) {
    x = x < safeW / 2 ? safeW * 0.23 : safeW * 0.77;
  }
  return [x, y];
}

function buildSmoothWavePath(
  t: number,
  midY: number,
  ampA: number,
  ampB: number,
  freqA: number,
  freqB: number,
  phaseA: number,
  phaseB: number,
  speedA: number,
  speedB: number
): string {
  const W = 1440;
  const step = 24;
  const points: [number, number][] = [];
  for (let x = -step; x <= W + step; x += step) {
    const y = midY +
      Math.sin(x * freqA + t * speedA + phaseA) * ampA +
      Math.sin(x * freqB - t * speedB + phaseB) * ampB;
    points.push([x, y]);
  }
  let d = `M ${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`;
  for (let i = 1; i < points.length - 1; i++) {
    const xc = (points[i][0] + points[i + 1][0]) / 2;
    const yc = (points[i][1] + points[i + 1][1]) / 2;
    d += ` Q ${points[i][0].toFixed(1)} ${points[i][1].toFixed(1)}, ${xc.toFixed(1)} ${yc.toFixed(1)}`;
  }
  return d;
}

function MeshGlobe() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const count = 108;
    const nodes = Array.from({ length: count }, (_, i) => {
      const y = 1 - 2 * (i + .5) / count;
      const r = Math.sqrt(1 - y * y);
      const a = i * Math.PI * (3 - Math.sqrt(5));
      return { x: Math.cos(a) * r, y, z: Math.sin(a) * r };
    });
    const edges: [number, number][] = [];
    nodes.forEach((a, i) => {
      nodes.map((b, j) => ({ j, d: (a.x-b.x)**2+(a.y-b.y)**2+(a.z-b.z)**2 }))
        .filter(v => v.j !== i).sort((a,b) => a.d-b.d).slice(0, 5)
        .forEach(v => { if (i < v.j) edges.push([i, v.j]); });
    });
    let raf = 0;
    const render = (ms: number) => {
      const size = canvas.clientWidth;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const px = Math.round(size * dpr);
      if (canvas.width !== px || canvas.height !== px) {
        canvas.width = px; canvas.height = px;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);
      const t = ms / 1000, c = size / 2, radius = size * .415;
      const yaw = t * .23, pitch = Math.sin(t * .19) * .17;
      const projected = nodes.map((p, i) => {
        const deformation = 1 + .012 * Math.sin(t * 1.1 + i * .35);
        const x = p.x * deformation, y = p.y * deformation, z = p.z * deformation;
        const rx = x*Math.cos(yaw)+z*Math.sin(yaw);
        const rz = -x*Math.sin(yaw)+z*Math.cos(yaw);
        const ry = y*Math.cos(pitch)-rz*Math.sin(pitch);
        const depth = y*Math.sin(pitch)+rz*Math.cos(pitch);
        const perspective = 2.9/(2.9-depth*.2);
        return { x:c+rx*radius*perspective, y:c+ry*radius*perspective, z:depth };
      });
      const halo = ctx.createRadialGradient(c,c,radius*.15,c,c,radius*1.2);
      halo.addColorStop(0,'rgba(0,124,245,.10)');
      halo.addColorStop(.7,'rgba(10,148,244,.09)');
      halo.addColorStop(1,'rgba(0,90,200,0)');
      ctx.fillStyle=halo;ctx.fillRect(0,0,size,size);
      ctx.save();
      ctx.beginPath();ctx.arc(c,c,radius*1.025,0,Math.PI*2);ctx.clip();
      edges.forEach(([i,j]) => {
        const a=projected[i],b=projected[j];
        const front=Math.max(0,Math.min(1,((a.z+b.z)/2+1)/2));
        ctx.strokeStyle=`rgba(47,177,252,${.12+front*.5})`;
        ctx.lineWidth=.65+front*.7;
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      });
      projected.forEach((p,i) => {
        const front=Math.max(0,(p.z+1)/2);
        ctx.beginPath();ctx.arc(p.x,p.y,1+front*1.5,0,Math.PI*2);
        ctx.fillStyle=`rgba(91,204,255,${.2+front*.8})`;
        ctx.shadowColor='#24b7ff';ctx.shadowBlur=front*7;
        ctx.fill();
        if(i%9===0 && front>.45){
          ctx.beginPath();ctx.arc(p.x,p.y,4+2*Math.sin(t*1.5+i),0,Math.PI*2);
          ctx.fillStyle='rgba(25,165,255,.10)';ctx.fill();
        }
      });
      ctx.shadowBlur=0;ctx.restore();
      ctx.beginPath();ctx.arc(c,c,radius,0,Math.PI*2);
      ctx.strokeStyle='rgba(40,177,249,.30)';ctx.lineWidth=1;ctx.stroke();
      raf=requestAnimationFrame(render);
    };
    raf=requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="hero-mesh-globe" aria-hidden="true" />;
}

export function Hero(_props: HeroProps) {
  const { isRTL } = useLanguage();
  const [buttonState, setButtonState] = useState<'portfolio' | 'accountant'>('portfolio');
  const [flipping, setFlipping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const wavePath1Ref = useRef<SVGPathElement>(null);
  const wavePath2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const svg = svgRef.current;
    if (!stage || !svg) return;

    let stageW = stage.clientWidth || window.innerWidth;
    let stageH = stage.clientHeight || 600;
    let raf = 0;
    let isUnmounted = false;
    const start = performance.now();

    // Slower movement by ~35-40%: journey duration lengthened from 5.8s-9.7s to 9.5s-15.7s
    const data: Point[] = LABELS.map((_, i) => {
      const [x, y] = destination(i, 0, stageW, stageH);
      const [toX, toY] = destination(i, 1, stageW, stageH);
      return {
        x, y, fromX: x, fromY: y, toX, toY,
        start: start - (i % 5) * 1800,
        duration: 9500 + (i % 6) * 1250,
        opacity: 1, leg: 1,
      };
    });

    const resize = () => {
      stageW = stage.clientWidth || window.innerWidth;
      stageH = stage.clientHeight || 600;
      svg.setAttribute('viewBox', `0 0 ${stageW} ${stageH}`);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(stage);

    const lines = Array.from({ length: 3 }, (_, j) => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', j % 2 ? BLUE : GOLD);
      path.setAttribute('stroke-width', '1.3');
      dot.setAttribute('r', '3.5');
      dot.setAttribute('fill', j % 2 ? BLUE : GOLD);
      svg.append(path, dot);
      return { path, dot };
    });

    const frame = (now: number) => {
      if (isUnmounted) return;
      raf = requestAnimationFrame(frame);

      try {
        const tSec = now * 0.001;

        // 1. Update the Two Blue/Cyan Wave Lines (Geometry updated smoothly on SVG path)
        if (wavePath1Ref.current) {
          const d1 = buildSmoothWavePath(tSec, 295, 26, 14, 0.0055, 0.011, 0, 1.0, 1.25, 0.95);
          wavePath1Ref.current.setAttribute('d', d1);
        }
        if (wavePath2Ref.current) {
          const d2 = buildSmoothWavePath(tSec, 312, 22, 12, 0.0068, 0.013, 2.4, 0.5, 1.05, 1.35);
          wavePath2Ref.current.setAttribute('d', d2);
        }

        // 2. Update Accounting Points (Continuous gentle roam, 35-40% slower, unfreezable)
        data.forEach((p, i) => {
          let progress = (now - p.start) / p.duration;
          if (progress >= 1) {
            p.leg++;
            p.fromX = p.toX;
            p.fromY = p.toY;
            const [nextX, nextY] = destination(i, p.leg, stageW, stageH);
            p.toX = nextX;
            p.toY = nextY;
            p.start = now;
            p.duration = 9500 + ((i + p.leg) % 6) * 1250;
            progress = 0;
          }

          const t = smooth(clamp(progress, 0, 1));
          p.x = p.fromX + (p.toX - p.fromX) * t;
          p.y = p.fromY + (p.toY - p.fromY) * t;

          // Opacity fade cycle: ~11-14 points remain visible, rotating continuously
          const phase = ((now / 1000 + i * 1.55) % 18);
          const fade = phase < 11.5 ? 1
            : phase < 13.5 ? 1 - (phase - 11.5) / 2
            : phase < 15.5 ? 0
            : phase < 17.5 ? (phase - 15.5) / 2
            : 1;
          p.opacity = clamp(fade, 0, 1);

          // Subtle floating motion enhancement (35-40% slower, gentle 5-10px V / 3-6px H)
          const phaseShiftX = i * 1.73 + (i % 5) * 0.8;
          const phaseShiftY = i * 2.39 + (i % 4) * 1.1;
          const speedX = 3500 + (i % 6) * 320;
          const speedY = 4400 + (i % 5) * 350;
          const floatX = Math.sin(now / speedX + phaseShiftX) * (3.5 + (i % 3) * 0.6);
          const floatY = Math.cos(now / speedY + phaseShiftY) * (6.0 + (i % 4) * 0.8);
          const curX = clamp(p.x + floatX, 20, Math.max(20, stageW - 20));
          const curY = clamp(p.y + floatY, 20, Math.max(20, stageH - 20));
          p.renderX = curX;
          p.renderY = curY;

          const el = pointsRef.current[i];
          if (el) {
            el.style.transform = `translate3d(${curX.toFixed(1)}px,${curY.toFixed(1)}px,0) translate(-50%,-50%) scale(${(0.97 + 0.04 * Math.sin(now / 3200 + i)).toFixed(3)})`;
            el.style.opacity = p.opacity.toFixed(3);
          }
        });

        // 3. Update Connecting SVG Lines
        lines.forEach(({ path, dot }, j) => {
          const cycle = 8500 + j * 1200;
          const n = Math.floor((now - start) / cycle);
          const a = data[(n * 3 + j * 5) % data.length];
          const b = data[(n * 3 + j * 5 + 6 + j) % data.length];
          const ax = a.renderX ?? a.x;
          const ay = a.renderY ?? a.y;
          const bx = b.renderX ?? b.x;
          const by = b.renderY ?? b.y;
          const cx = (ax + bx) / 2, cy = (ay + by) / 2 - 40;
          path.setAttribute('d', `M ${ax.toFixed(1)} ${ay.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${bx.toFixed(1)} ${by.toFixed(1)}`);
          const t = ((now - start) % cycle) / cycle;
          const visibility = Math.max(0, Math.min(1, t * 5, (1 - t) * 5)) * a.opacity * b.opacity;
          path.setAttribute('opacity', String((visibility * 0.33).toFixed(3)));
          dot.setAttribute('opacity', String(visibility.toFixed(3)));
          const u = 1 - t;
          dot.setAttribute('cx', String((u * u * ax + 2 * u * t * cx + t * t * bx).toFixed(1)));
          dot.setAttribute('cy', String((u * u * ay + 2 * u * t * cy + t * t * by).toFixed(1)));
        });
      } catch (err) {
        // Guard against any transient error breaking the animation loop
      }
    };

    raf = requestAnimationFrame(frame);

    const handleVisibility = () => {
      if (!document.hidden && !isUnmounted) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', handleVisibility);

    return () => {
      isUnmounted = true;
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', handleVisibility);
      observer.disconnect();
      lines.forEach(({ path, dot }) => { path.remove(); dot.remove(); });
    };
  }, []);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const handleClick = () => {
    if (buttonState === 'portfolio') {
      setFlipping(true);
      timer.current = setTimeout(() => { setButtonState('accountant'); setFlipping(false); }, 260);
    } else {
      const about = document.getElementById('about');
      if (about) {
        window.scrollTo({ top: about.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
        window.history.replaceState(null, '', '#about');
      }
    }
  };

  return (
    <section id="home" dir={isRTL ? 'rtl' : 'ltr'} className="hero-free-roam" aria-label="Portfolio Home">
      <style>{`
        .hero-free-roam{position:relative;height:calc(100svh - 5rem);min-height:540px;overflow:hidden;isolation:isolate;background:radial-gradient(ellipse at 35% 36%,#13374b 0%,#081e30 55%,#061522 100%);color:#f8fafc}
        .hero-free-roam:after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 40%,rgba(0,0,0,.2));z-index:0}
        .hero-mesh-globe{position:absolute;top:3%;left:3%;width:clamp(175px,24vw,330px);height:auto;aspect-ratio:1;z-index:1;pointer-events:none;filter:drop-shadow(0 0 12px rgba(30,160,245,.22))}
        .hero-flowing-waves{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1}
        .hero-roam-stage{position:absolute;inset:0;overflow:hidden}
        .hero-roam-lines{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1}
        .hero-roam-point{position:absolute;left:0;top:0;z-index:2;white-space:nowrap;pointer-events:none;will-change:transform,opacity}
        .hero-roam-pill{position:relative;display:block;overflow:hidden;border:1.5px solid var(--point-color);border-radius:99px;padding:9px 14px;background:rgba(5,20,33,.93);font-size:12px;font-weight:750;color:#f7f9fb;box-shadow:0 0 15px var(--point-glow),inset 0 0 8px rgba(255,255,255,.03)}
        .hero-roam-pill:before{content:"";display:inline-block;width:7px;height:7px;margin-right:8px;border-radius:50%;vertical-align:1px;background:var(--point-color);box-shadow:0 0 8px var(--point-color)}
        .hero-roam-pill:after{content:"";position:absolute;top:-25%;left:-65%;width:22%;height:150%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.42),transparent);transform:skewX(-24deg);animation:heroRoamShine 14s ease-in-out infinite;animation-delay:var(--shine-delay)}
        .hero-roam-pill.primary{font-size:13px;padding:10px 16px;font-weight:800}
        .hero-roam-pill.flagship{font-size:14px;padding:11px 19px;font-weight:850}
        @keyframes heroRoamShine{0%,22%,100%{left:-65%}34%{left:145%}}
        .hero-roam-center{position:absolute;z-index:8;left:50%;top:50%;transform:translate(-50%,-50%);width:245px;min-height:86px;border:1.5px solid #d8b56a;border-radius:28px;background:linear-gradient(145deg,#15374b,#071827);color:#f8e0a4;box-shadow:0 14px 35px rgba(0,0,0,.5),0 0 22px rgba(216,181,106,.17);cursor:pointer;transition:filter .3s,box-shadow .3s}
        .hero-roam-center:hover{filter:brightness(1.15);box-shadow:0 16px 40px rgba(0,0,0,.5),0 0 25px rgba(216,181,106,.28)}
        .hero-roam-center strong{display:block;font-size:23px;letter-spacing:.19em}
        .hero-roam-center small{display:block;margin-top:7px;font-size:10px;color:#cbd5e1;letter-spacing:.07em}
        .hero-roam-center.flipping strong{opacity:.3}
        @media(max-width:700px){.hero-free-roam{min-height:480px}.hero-roam-pill{font-size:9px;padding:7px 9px}.hero-roam-pill.primary,.hero-roam-pill.flagship{font-size:10px;padding:8px 10px}.hero-roam-center{width:194px;min-height:74px}.hero-roam-center strong{font-size:17px}}
        @media(prefers-reduced-motion:reduce){.hero-roam-pill:after{animation:none}}
      `}</style>

      {/* 3D Wireframe Globe */}
      <MeshGlobe />

      {/* Two flowing blue/cyan wave lines with smooth SVG path geometry propagation */}
      <svg className="hero-flowing-waves" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="heroWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="12%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.8" />
            <stop offset="88%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="15%" stopColor="#60a5fa" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#60a5fa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
          <filter id="heroWaveGlow1" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="heroWaveGlow2" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path ref={wavePath1Ref} fill="none" stroke="url(#heroWaveGrad1)" strokeWidth="1.6" filter="url(#heroWaveGlow1)" />
        <path ref={wavePath2Ref} fill="none" stroke="url(#heroWaveGrad2)" strokeWidth="1.3" filter="url(#heroWaveGlow2)" />
      </svg>

      {/* Floating Accounting Points & Connecting lines stage */}
      <div className="hero-roam-stage" ref={stageRef}>
        <svg className="hero-roam-lines" ref={svgRef} aria-hidden="true" />
        {LABELS.map((label, i) => {
          const color = i % 2 === 0 ? GOLD : BLUE;
          const tier = label === 'Financial Reporting' ? 'flagship' :
            ['Receivables','VAT Reports & Submission','Reconciliations','Monthly Closing','Payables','P&L Account','Balance Sheet'].includes(label) ? 'primary' : '';
          return (
            <div key={label} className="hero-roam-point"
              ref={el => { pointsRef.current[i] = el; }}
              style={{ opacity: 0, transform: 'translate3d(-300px,-300px,0)' }}>
              <span className={`hero-roam-pill ${tier}`}
                style={{ '--point-color': color, '--point-glow': i % 2 === 0 ? '#d8b56a55' : '#69b7e755', '--shine-delay': `${-(i * 2.3) % 14}s` } as CSSProperties}>
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Center PORTFOLIO / ACCOUNTANT reveal button */}
      <button type="button" className={`hero-roam-center ${flipping ? 'flipping' : ''}`}
        onClick={handleClick} aria-label={buttonState === 'portfolio' ? 'Reveal Accountant' : 'View About'}>
        <strong>{buttonState === 'portfolio' ? 'PORTFOLIO' : 'ACCOUNTANT'}</strong>
        <small>{buttonState === 'portfolio' ? (isRTL ? 'انقر للاستكشاف' : 'CLICK TO REVEAL') : (isRTL ? 'عرض النبذة المهنية' : 'VIEW ABOUT PROFILE ↓')}</small>
      </button>
    </section>
  );
}

export default Hero;
