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
  opacity: number; leg: number; mode: number;
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
  // Deterministic destinations; some legs cross an edge and re-enter opposite.
  const padX = Math.min(130, Math.max(62, w * 0.09));
  const padY = Math.min(100, Math.max(52, h * 0.13));
  const k = (i * 29 + leg * 37) % 101;
  let x = padX + ((k * 31) % 97) / 97 * Math.max(1, w - padX * 2);
  let y = padY + ((k * 47 + i * 9) % 89) / 89 * Math.max(1, h - padY * 2);
  if (Math.abs(x - w / 2) < 170 && Math.abs(y - h / 2) < 95) {
    x = x < w / 2 ? w * 0.23 : w * 0.77;
  }
  return [x, y];
}


// Light champagne-gold outline globe. Coastlines follow the approved outline demo.
const COASTLINES: number[][][] = [
[[-168,71],[-153,69],[-140,61],[-131,56],[-124,49],[-123,41],[-117,33],[-110,31],[-106,24],[-97,16],[-90,16],[-86,21],[-82,25],[-81,30],[-74,37],[-67,45],[-61,51],[-53,55],[-58,62],[-77,64],[-92,72],[-114,73],[-135,69],[-151,72]],
[[-82,12],[-74,10],[-67,11],[-61,7],[-51,4],[-48,-1],[-43,-10],[-39,-16],[-43,-23],[-49,-29],[-53,-34],[-58,-39],[-65,-55],[-72,-50],[-74,-39],[-70,-29],[-72,-19],[-78,-5]],
[[-12,36],[-5,43],[6,45],[15,48],[28,47],[36,42],[46,40],[50,34],[44,29],[35,29],[32,22],[34,12],[42,11],[49,2],[45,-12],[39,-21],[32,-29],[20,-35],[13,-32],[10,-24],[12,-15],[8,-4],[0,5],[-9,14],[-17,22]],
[[-11,36],[-10,44],[-5,51],[4,55],[13,55],[19,60],[29,70],[42,69],[52,60],[67,57],[74,61],[85,59],[95,54],[105,56],[115,53],[126,49],[134,43],[141,45],[149,59],[161,61],[178,66],[179,54],[161,49],[148,41],[141,34],[133,33],[128,37],[122,33],[120,24],[111,18],[107,10],[102,3],[104,-6],[113,-8],[117,-4],[120,5],[124,12],[129,19],[136,25],[139,34],[126,39],[117,35],[112,23],[106,18],[99,16],[96,8],[92,15],[84,21],[78,10],[73,8],[70,22],[62,25],[55,23],[50,30],[44,37],[36,42],[29,41],[24,36],[16,39],[9,44],[1,43]],
[[113,-11],[121,-15],[130,-12],[138,-15],[144,-12],[153,-25],[151,-33],[144,-39],[135,-35],[128,-32],[120,-29],[114,-22]],
[[-53,60],[-45,60],[-40,68],[-41,78],[-48,83],[-59,81],[-61,74]],
[[47,-13],[50,-17],[49,-24],[45,-26],[43,-18]],
[[130,31],[134,34],[137,37],[140,41],[145,44],[146,35],[141,32]],
[[-9,51],[-5,55],[-6,59],[-11,55]],
[[95,20],[103,18],[108,12],[110,4],[117,-1],[118,-7],[110,-8],[106,-3],[104,6],[99,11]]
];
function OutlineGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    let raf = 0;
    const deg = Math.PI / 180;
    const project = (lon: number, lat: number, angle: number, r: number, cx: number, cy: number) => {
      const a = lon * deg + angle, b = lat * deg;
      return [cx + r * Math.cos(b) * Math.sin(a), cy - r * Math.sin(b), Math.cos(b) * Math.cos(a)];
    };
    const line = (coords: number[][], angle: number, r: number, cx: number, cy: number, color: string, width: number) => {
      ctx.beginPath(); let active = false;
      for (const [lon, lat] of coords) {
        const [x, y, z] = project(lon, lat, angle, r, cx, cy);
        if (z > 0.02) { if (!active) ctx.moveTo(x, y); else ctx.lineTo(x, y); active = true; }
        else active = false;
      }
      ctx.strokeStyle = color; ctx.lineWidth = width; ctx.stroke();
    };
    const draw = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width, h = rect.height;
      if (!w || !h) { raf = requestAnimationFrame(draw); return; }
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const r = Math.min(w * 0.405, h * 0.405);
      const angle = now * 0.00017 - 0.4;
      const halo = ctx.createRadialGradient(cx, cy, r * 0.4, cx, cy, r * 1.24);
      halo.addColorStop(0, 'rgba(236,207,149,0.035)');
      halo.addColorStop(0.85, 'rgba(241,210,153,0.055)');
      halo.addColorStop(1, 'rgba(241,210,153,0)');
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(cx, cy, r * 1.24, 0, Math.PI * 2); ctx.fill();
      const ocean = ctx.createRadialGradient(cx - r * .35, cy - r * .35, r * .06, cx, cy, r);
      ocean.addColorStop(0, '#15384a'); ocean.addColorStop(.7, '#092437'); ocean.addColorStop(1, '#061625');
      ctx.fillStyle = ocean; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(244,215,164,.38)'; ctx.lineWidth = 1.15; ctx.stroke();
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
      for (let lat = -75; lat <= 75; lat += 15) {
        const coords: number[][] = []; for (let lon = -180; lon <= 180; lon += 3) coords.push([lon, lat]);
        line(coords, angle, r, cx, cy, 'rgba(239,215,171,.12)', .7);
      }
      for (let lon = -180; lon <= 180; lon += 20) {
        const coords: number[][] = []; for (let lat = -89; lat <= 89; lat += 3) coords.push([lon, lat]);
        line(coords, angle, r, cx, cy, 'rgba(239,215,171,.12)', .7);
      }
      ctx.shadowColor = '#f1d7a6'; ctx.shadowBlur = 7;
      for (const coast of COASTLINES) line([...coast, coast[0]], angle, r, cx, cy, '#f2d8a8', 1.45);
      ctx.shadowBlur = 0;
      for (let j = 0; j < 2; j++) {
        const lon = (now * .023 * (j ? -.8 : 1) + j * 150) % 360 - 180;
        const lat = 22 * Math.sin(now * .0006 + j * 2);
        const [x, y, z] = project(lon, lat, angle, r, cx, cy);
        if (z > 0) {
          ctx.fillStyle = j ? '#a3dbef' : '#ffe6b8'; ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = 13;
          ctx.beginPath(); ctx.arc(x, y, 2.8, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
        }
      }
      ctx.restore();
      ctx.strokeStyle = 'rgba(241,210,153,.3)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.ellipse(cx, cy, r * 1.08, r * .24, -.22, 0, Math.PI * 2); ctx.stroke();
      const orb = now * .0005;
      ctx.fillStyle = '#f8dfa9'; ctx.shadowColor = '#f3d69e'; ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.arc(cx + r * 1.08 * Math.cos(orb), cy + r * .24 * Math.sin(orb) - r * .1 * Math.cos(orb), 2.8, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={canvasRef} className="hero-outline-globe" aria-hidden="true" />;
}

export function Hero(_props: HeroProps) {
  const { isRTL } = useLanguage();
  const [buttonState, setButtonState] = useState<'portfolio' | 'accountant'>('portfolio');
  const [flipping, setFlipping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const svg = svgRef.current;
    if (!stage || !svg) return;
    // Keep the approved motion active; user explicitly opted into animated Hero.
    let w = stage.clientWidth, h = stage.clientHeight;
    let raf = 0;
    const start = performance.now();
    const data: Point[] = LABELS.map((_, i) => {
      const [x, y] = destination(i, 0, w, h);
      const [toX, toY] = destination(i, 1, w, h);
      return { x, y, fromX: x, fromY: y, toX, toY,
        start: start - (i % 4) * 650, duration: 5800 + (i % 6) * 780,
        opacity: 1, leg: 1, mode: 0 };
    });
    const resize = () => {
      w = stage.clientWidth; h = stage.clientHeight;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
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
      data.forEach((p, i) => {
        {
          let progress = (now - p.start) / p.duration;
          if (progress >= 1) {
            p.leg++;
            // Every third journey exits the viewport; next leg re-enters opposite edge.
            if (p.mode === 1) {
              const [tx, ty] = destination(i, p.leg, w, h);
              p.fromX = p.toX < 0 ? w + 95 : p.toX > w ? -95 : tx;
              p.fromY = p.toY < 0 ? h + 50 : p.toY > h ? -50 : ty;
              p.toX = tx; p.toY = ty;
              p.mode = 0;
            } else {
              p.fromX = p.toX; p.fromY = p.toY;
              if (p.leg % 3 === 0) {
                const side = (i + p.leg) % 4;
                p.toX = side === 0 ? -165 : side === 1 ? w + 165 : destination(i, p.leg, w, h)[0];
                p.toY = side === 2 ? -65 : side === 3 ? h + 65 : destination(i, p.leg, w, h)[1];
                p.mode = 1;
              } else {
                [p.toX, p.toY] = destination(i, p.leg + 1, w, h);
              }
            }
            p.start = now;
            progress = 0;
          }
          const t = smooth(clamp(progress, 0, 1));
          p.x = p.fromX + (p.toX - p.fromX) * t;
          p.y = p.fromY + (p.toY - p.fromY) * t;
          const phase = ((now / 1000 + i * 1.43) % 14);
          const fade = phase < 7.5 ? 1 : phase < 9 ? 1 - (phase - 7.5) / 1.5
            : phase < 11 ? 0 : phase < 12.5 ? (phase - 11) / 1.5 : 1;
          // Fade also masks jumps from an off-screen exit to opposite-side re-entry.
          const edgeFade = p.mode === 1 && progress > 0.83 ? clamp((1 - progress) / 0.17, 0, 1)
            : p.mode === 0 && progress < 0.16 ? clamp(progress / 0.16, 0, 1) : 1;
          p.opacity = fade * edgeFade;
        }
        const el = pointsRef.current[i];
        if (el) {
          el.style.transform = `translate3d(${p.x}px,${p.y}px,0) translate(-50%,-50%) scale(${0.97 + 0.04 * Math.sin(now / 2300 + i)})`;
          el.style.opacity = String(p.opacity);
        }
      });
      lines.forEach(({ path, dot }, j) => {
        const cycle = 6000 + j * 800;
        const n = Math.floor((now - start) / cycle);
        const a = data[(n * 3 + j * 5) % data.length];
        const b = data[(n * 3 + j * 5 + 6 + j) % data.length];
        const cx = (a.x + b.x) / 2, cy = (a.y + b.y) / 2 - 40;
        path.setAttribute('d', `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`);
        const t = ((now - start) % cycle) / cycle;
        const visibility = Math.max(0, Math.min(1, t * 5, (1 - t) * 5)) * a.opacity * b.opacity;
        path.setAttribute('opacity', String(visibility * 0.33));
        dot.setAttribute('opacity', String(visibility));
        const u = 1 - t;
        dot.setAttribute('cx', String(u * u * a.x + 2 * u * t * cx + t * t * b.x));
        dot.setAttribute('cy', String(u * u * a.y + 2 * u * t * cy + t * t * b.y));
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
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
        .hero-outline-globe{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(66vw,660px);height:min(72vh,660px);z-index:1;pointer-events:none;opacity:.87}
        @media(max-width:700px){.hero-outline-globe{width:92vw;height:92vw;opacity:.75}}
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
      <div className="hero-roam-stage" ref={stageRef}>
        <OutlineGlobe />
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
      <button type="button" className={`hero-roam-center ${flipping ? 'flipping' : ''}`}
        onClick={handleClick} aria-label={buttonState === 'portfolio' ? 'Reveal Accountant' : 'View About'}>
        <strong>{buttonState === 'portfolio' ? 'PORTFOLIO' : 'ACCOUNTANT'}</strong>
        <small>{buttonState === 'portfolio' ? (isRTL ? 'انقر للاستكشاف' : 'CLICK TO REVEAL') : (isRTL ? 'عرض النبذة المهنية' : 'VIEW ABOUT PROFILE ↓')}</small>
      </button>
    </section>
  );
}

export default Hero;
