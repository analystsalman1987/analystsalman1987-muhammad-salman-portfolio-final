import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  profile?: ProfileInfo;
  onOpenCV?: () => void;
  onSelectExperience?: () => void;
}

const LABELS = [
  '14+ Years Exp','ERP Software','Oracle','Qoyod','QuickBooks',
  'MS Office','Advanced Excel','Financial Reporting','Receivables',
  'VAT Reports & Submission','Reconciliations','Costing',
  'Monthly Closing','Cash Handling','Petty Cash','Payables',
  'P&L Account','Balance Sheet',
];

// 18 balanced anchor positions distributed gracefully around the center button & 3D globe
const ANCHORS: { x: number; y: number }[] = [
  { x: 0.28, y: 0.14 }, // 0: '14+ Years Exp' (upper left, framing the 3D globe)
  { x: 0.10, y: 0.40 }, // 1: 'ERP Software' (mid-left upper)
  { x: 0.23, y: 0.35 }, // 2: 'Oracle' (mid-left inner)
  { x: 0.11, y: 0.63 }, // 3: 'Qoyod' (lower-left upper)
  { x: 0.24, y: 0.72 }, // 4: 'QuickBooks' (lower-left inner)
  { x: 0.09, y: 0.86 }, // 5: 'MS Office' (bottom-left)
  { x: 0.42, y: 0.13 }, // 6: 'Advanced Excel' (top left-center)
  { x: 0.60, y: 0.14 }, // 7: 'Financial Reporting' (top right-center)
  { x: 0.77, y: 0.12 }, // 8: 'Receivables' (top right inner)
  { x: 0.90, y: 0.22 }, // 9: 'VAT Reports & Submission' (top right outer)
  { x: 0.76, y: 0.34 }, // 10: 'Reconciliations' (mid-right inner)
  { x: 0.90, y: 0.46 }, // 11: 'Costing' (mid-right outer)
  { x: 0.75, y: 0.58 }, // 12: 'Monthly Closing' (mid-right lower)
  { x: 0.89, y: 0.70 }, // 13: 'Cash Handling' (lower-right outer)
  { x: 0.75, y: 0.82 }, // 14: 'Petty Cash' (bottom-right inner)
  { x: 0.90, y: 0.89 }, // 15: 'Payables' (far bottom-right)
  { x: 0.38, y: 0.88 }, // 16: 'P&L Account' (bottom left-center)
  { x: 0.56, y: 0.86 }, // 17: 'Balance Sheet' (bottom right-center)
];

// Connecting aesthetic lines between natural neighbor pairs
const CONNECT_PAIRS = [
  [6, 7],   // Advanced Excel <-> Financial Reporting
  [1, 2],   // ERP Software <-> Oracle
  [10, 12], // Reconciliations <-> Monthly Closing
];

// Staggered timing offsets (seconds) across a 16s cycle for balanced 50% visibility across all quadrants
const FADE_OFFSETS: number[] = [
  0.0,   // 0: '14+ Years Exp' (Left)
  8.0,   // 1: 'ERP Software' (Left)
  2.7,   // 2: 'Oracle' (Left)
  10.7,  // 3: 'Qoyod' (Left)
  5.3,   // 4: 'QuickBooks' (Left)
  13.3,  // 5: 'MS Office' (Left)
  0.0,   // 6: 'Advanced Excel' (Top)
  8.0,   // 7: 'Financial Reporting' (Top)
  1.0,   // 8: 'Receivables' (Right)
  9.0,   // 9: 'VAT Reports & Submission' (Right)
  5.0,   // 10: 'Reconciliations' (Right)
  13.0,  // 11: 'Costing' (Right)
  3.0,   // 12: 'Monthly Closing' (Right)
  11.0,  // 13: 'Cash Handling' (Right)
  7.0,   // 14: 'Petty Cash' (Right)
  15.0,  // 15: 'Payables' (Right)
  2.0,   // 16: 'P&L Account' (Bottom)
  10.0,  // 17: 'Balance Sheet' (Bottom)
];

function getPointOpacity(tSec: number, offsetSec: number): number {
  const cycle = 16.0;
  const phase = ((tSec + offsetSec) % cycle + cycle) % cycle;
  // 0 to 6.0s: fully visible
  if (phase < 6.0) return 1.0;
  // 6.0 to 8.0s: smooth ease-in-out cosine fade out
  if (phase < 8.0) {
    const p = (phase - 6.0) / 2.0;
    return 0.5 * (1 + Math.cos(Math.PI * p));
  }
  // 8.0 to 14.0s: hidden
  if (phase < 14.0) return 0.0;
  // 14.0 to 16.0s: smooth ease-in-out cosine fade in
  const p = (phase - 14.0) / 2.0;
  return 0.5 * (1 - Math.cos(Math.PI * p));
}

const GOLD = '#D8B56A';
const BLUE = '#69B7E7';
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

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

interface WaveConfig {
  midY: number;
  ampA: number;
  ampB: number;
  freqA: number;
  freqB: number;
  phaseA: number;
  phaseB: number;
  speedA: number;
  speedB: number;
  gradId: string;
  glowFilter: string;
  strokeWidth: number;
  opacity: number;
}

// Exactly 20 flowing wave lines: 10 Sky Blue (#38BDF8), 5 Ice Cyan (#67E8F9), 3 Silver Blue (#8FAFC1), 2 Soft Champagne (#C4B6A0) near the middle
const WAVE_CONFIGS: WaveConfig[] = [
  { midY: 492, ampA: 15, ampB: 8, freqA: 0.0051, freqB: 0.0102, phaseA: 0.0, phaseB: 1.1, speedA: 1.12, speedB: 0.88, gradId: 'waveGradSky', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.95, opacity: 0.34 },
  { midY: 497, ampA: 17, ampB: 9, freqA: 0.0057, freqB: 0.0116, phaseA: 0.8, phaseB: 2.2, speedA: 1.25, speedB: 1.02, gradId: 'waveGradCyan', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.85, opacity: 0.36 },
  { midY: 501, ampA: 14, ampB: 7, freqA: 0.0063, freqB: 0.0124, phaseA: 1.6, phaseB: 0.6, speedA: 1.02, speedB: 1.20, gradId: 'waveGradSky', glowFilter: 'heroWaveSoftGlow', strokeWidth: 1.00, opacity: 0.32 },
  { midY: 506, ampA: 18, ampB: 10, freqA: 0.0049, freqB: 0.0097, phaseA: 2.4, phaseB: 1.7, speedA: 1.18, speedB: 0.82, gradId: 'waveGradSilver', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.85, opacity: 0.30 },
  { midY: 510, ampA: 16, ampB: 8, freqA: 0.0055, freqB: 0.0111, phaseA: 3.2, phaseB: 2.8, speedA: 0.92, speedB: 1.12, gradId: 'waveGradSky', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.95, opacity: 0.35 },
  { midY: 515, ampA: 19, ampB: 11, freqA: 0.0060, freqB: 0.0119, phaseA: 4.0, phaseB: 0.9, speedA: 1.22, speedB: 0.96, gradId: 'waveGradCyan', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.90, opacity: 0.38 },
  { midY: 519, ampA: 15, ampB: 7, freqA: 0.0052, freqB: 0.0107, phaseA: 4.8, phaseB: 2.0, speedA: 1.08, speedB: 1.26, gradId: 'waveGradSky', glowFilter: 'heroWaveSoftGlow', strokeWidth: 1.00, opacity: 0.34 },
  { midY: 524, ampA: 17, ampB: 9, freqA: 0.0065, freqB: 0.0129, phaseA: 5.6, phaseB: 3.1, speedA: 1.32, speedB: 0.92, gradId: 'waveGradCyan', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.85, opacity: 0.36 },

  // Middle accents: Silver Blue framing 2 Soft Champagne lines (#C4B6A0)
  { midY: 528, ampA: 18, ampB: 10, freqA: 0.0054, freqB: 0.0114, phaseA: 0.5, phaseB: 1.5, speedA: 1.05, speedB: 1.18, gradId: 'waveGradSilver', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.90, opacity: 0.32 },
  { midY: 533, ampA: 20, ampB: 11, freqA: 0.0059, freqB: 0.0121, phaseA: 1.4, phaseB: 2.6, speedA: 1.20, speedB: 1.00, gradId: 'waveGradChampagne', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.95, opacity: 0.35 },
  { midY: 537, ampA: 19, ampB: 10, freqA: 0.0051, freqB: 0.0109, phaseA: 2.3, phaseB: 0.7, speedA: 1.12, speedB: 1.24, gradId: 'waveGradChampagne', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.95, opacity: 0.36 },
  { midY: 542, ampA: 21, ampB: 12, freqA: 0.0062, freqB: 0.0126, phaseA: 3.1, phaseB: 1.9, speedA: 1.28, speedB: 0.95, gradId: 'waveGradSky', glowFilter: 'heroWaveSoftGlow', strokeWidth: 1.00, opacity: 0.36 },
  { midY: 546, ampA: 17, ampB: 9, freqA: 0.0056, freqB: 0.0117, phaseA: 4.0, phaseB: 3.0, speedA: 0.98, speedB: 1.15, gradId: 'waveGradCyan', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.90, opacity: 0.35 },

  // Lower group
  { midY: 551, ampA: 18, ampB: 10, freqA: 0.0050, freqB: 0.0106, phaseA: 4.9, phaseB: 1.2, speedA: 1.15, speedB: 1.28, gradId: 'waveGradSky', glowFilter: 'heroWaveSoftGlow', strokeWidth: 1.00, opacity: 0.35 },
  { midY: 555, ampA: 16, ampB: 8, freqA: 0.0064, freqB: 0.0128, phaseA: 5.7, phaseB: 2.4, speedA: 1.30, speedB: 0.94, gradId: 'waveGradSky', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.85, opacity: 0.32 },
  { midY: 560, ampA: 17, ampB: 9, freqA: 0.0053, freqB: 0.0113, phaseA: 0.6, phaseB: 0.8, speedA: 1.04, speedB: 1.16, gradId: 'waveGradSilver', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.90, opacity: 0.30 },
  { midY: 564, ampA: 15, ampB: 8, freqA: 0.0058, freqB: 0.0120, phaseA: 1.5, phaseB: 1.9, speedA: 1.22, speedB: 1.05, gradId: 'waveGradCyan', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.90, opacity: 0.34 },
  { midY: 569, ampA: 18, ampB: 10, freqA: 0.0048, freqB: 0.0101, phaseA: 2.4, phaseB: 3.1, speedA: 1.10, speedB: 1.32, gradId: 'waveGradSky', glowFilter: 'heroWaveSoftGlow', strokeWidth: 1.00, opacity: 0.35 },
  { midY: 573, ampA: 14, ampB: 7, freqA: 0.0066, freqB: 0.0131, phaseA: 3.3, phaseB: 1.4, speedA: 1.36, speedB: 0.90, gradId: 'waveGradSky', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.85, opacity: 0.30 },
  { midY: 578, ampA: 16, ampB: 9, freqA: 0.0055, freqB: 0.0115, phaseA: 4.2, phaseB: 2.5, speedA: 1.02, speedB: 1.22, gradId: 'waveGradSky', glowFilter: 'heroWaveSoftGlow', strokeWidth: 0.95, opacity: 0.32 },
];

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
  const wavePathsRef = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    const svg = svgRef.current;
    if (!stage || !svg) return;

    let stageW = stage.clientWidth || window.innerWidth;
    let stageH = stage.clientHeight || 600;
    let raf = 0;
    let isUnmounted = false;
    const start = performance.now();

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        targetMouseX = clamp(((e.clientX - rect.left) / rect.width - 0.5) * 2, -1, 1);
        targetMouseY = clamp(((e.clientY - rect.top) / rect.height - 0.5) * 2, -1, 1);
      }
    };
    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

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

    // Store calculated positions for connecting lines
    const currentPositions: { x: number; y: number; opacity: number }[] = Array.from({ length: LABELS.length }, () => ({ x: 0, y: 0, opacity: 0 }));

    const frame = (now: number) => {
      if (isUnmounted) return;
      raf = requestAnimationFrame(frame);

      try {
        const tSec = now * 0.001;

        // Smooth mouse parallax damping
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        // 1. Update the 20 Wave Lines in the bottom area of Home (movement speed reduced by 25%)
        const tWave = tSec * 0.75;
        WAVE_CONFIGS.forEach((cfg, idx) => {
          const pathEl = wavePathsRef.current[idx];
          if (pathEl) {
            const d = buildSmoothWavePath(
              tWave,
              cfg.midY,
              cfg.ampA,
              cfg.ampB,
              cfg.freqA,
              cfg.freqB,
              cfg.phaseA,
              cfg.phaseB,
              cfg.speedA,
              cfg.speedB
            );
            pathEl.setAttribute('d', d);
          }
        });

        const ampScale = Math.min(1, Math.max(0.65, stageW / 1200));

        // 2. Update Accounting Labels (Gentle independent floating around anchor positions, Mohsin Bilal style)
        LABELS.forEach((_, i) => {
          const anchor = ANCHORS[i] || { x: 0.5, y: 0.5 };
          const baseX = stageW * anchor.x;
          const baseY = stageH * anchor.y;

          // Multi-frequency Lissajous harmonic drift for smooth, organic ease-in-out movement
          const sX1 = 3400 + (i % 7) * 360;
          const sX2 = 4800 + (i % 5) * 410;
          const sY1 = 3800 + (i % 6) * 380;
          const sY2 = 5300 + (i % 4) * 450;

          const pX1 = i * 1.732;
          const pX2 = i * 2.618 + 0.9;
          const pY1 = i * 2.236 + 1.4;
          const pY2 = i * 1.414 + 2.3;

          const ampX = (13 + (i % 5) * 2.5) * ampScale; // ~13px to 23px
          const ampY = (15 + (i % 4) * 3.0) * ampScale; // ~15px to 24px

          const driftX = Math.sin(now / sX1 + pX1) * (ampX * 0.65) + Math.cos(now / sX2 + pX2) * (ampX * 0.35);
          const driftY = Math.sin(now / sY1 + pY1) * (ampY * 0.65) + Math.cos(now / sY2 + pY2) * (ampY * 0.35);

          // Subtle depth / parallax breathing
          const depthSine = Math.sin(now / 3900 + i * 1.3);
          const scale = 0.985 + 0.025 * depthSine;

          const depthFactor = 0.6 + (i % 5) * 0.2;
          const parallaxX = mouseX * 14 * depthFactor * ampScale;
          const parallaxY = mouseY * 12 * depthFactor * ampScale;

          const curX = clamp(baseX + driftX + parallaxX, 45, Math.max(45, stageW - 45));
          const curY = clamp(baseY + driftY + parallaxY, 25, Math.max(25, stageH - 25));

          // Staggered 50% visibility fade (smooth ease-in-out cosine transitions, 16s cycle)
          const op = getPointOpacity(tSec, FADE_OFFSETS[i] ?? (i * 0.9));
          currentPositions[i] = { x: curX, y: curY, opacity: op };

          const el = pointsRef.current[i];
          if (el) {
            el.style.transform = `translate3d(${curX.toFixed(1)}px,${curY.toFixed(1)}px,0) translate(-50%,-50%) scale(${scale.toFixed(3)})`;
            el.style.opacity = op.toFixed(3);
          }
        });

        // 3. Update Connecting SVG Lines between natural neighbor pairs
        lines.forEach(({ path, dot }, j) => {
          const [idxA, idxB] = CONNECT_PAIRS[j] || [0, 1];
          const a = currentPositions[idxA];
          const b = currentPositions[idxB];
          if (!a || !b || a.x === 0 || b.x === 0) return;

          const cx = (a.x + b.x) / 2;
          const cy = (a.y + b.y) / 2 - 35;
          path.setAttribute('d', `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`);

          const cycle = 7000 + j * 1500;
          const t = ((now - start) % cycle) / cycle;
          const visibility = Math.max(0, Math.min(1, t * 4, (1 - t) * 4)) * Math.min(a.opacity, b.opacity);
          path.setAttribute('opacity', String((visibility * 0.35).toFixed(3)));
          dot.setAttribute('opacity', String(visibility.toFixed(3)));

          const u = 1 - t;
          dot.setAttribute('cx', String((u * u * a.x + 2 * u * t * cx + t * t * b.x).toFixed(1)));
          dot.setAttribute('cy', String((u * u * a.y + 2 * u * t * cy + t * t * b.y).toFixed(1)));
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
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
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

      {/* 20 Flowing wave lines in the bottom area of Home */}
      <svg className="hero-flowing-waves" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          {/* Sky Blue (#38BDF8) - 10 lines */}
          <linearGradient id="waveGradSky" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="12%" stopColor="#38BDF8" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.50" />
            <stop offset="88%" stopColor="#38BDF8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>

          {/* Ice Cyan (#67E8F9) - 5 lines */}
          <linearGradient id="waveGradCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#67E8F9" stopOpacity="0" />
            <stop offset="12%" stopColor="#67E8F9" stopOpacity="0.20" />
            <stop offset="50%" stopColor="#67E8F9" stopOpacity="0.52" />
            <stop offset="88%" stopColor="#67E8F9" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#67E8F9" stopOpacity="0" />
          </linearGradient>

          {/* Silver Blue (#8FAFC1) - 3 lines */}
          <linearGradient id="waveGradSilver" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8FAFC1" stopOpacity="0" />
            <stop offset="12%" stopColor="#8FAFC1" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#8FAFC1" stopOpacity="0.44" />
            <stop offset="88%" stopColor="#8FAFC1" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#8FAFC1" stopOpacity="0" />
          </linearGradient>

          {/* Soft Champagne (#C4B6A0) - 2 middle accent lines */}
          <linearGradient id="waveGradChampagne" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C4B6A0" stopOpacity="0" />
            <stop offset="12%" stopColor="#C4B6A0" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#C4B6A0" stopOpacity="0.44" />
            <stop offset="88%" stopColor="#C4B6A0" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#C4B6A0" stopOpacity="0" />
          </linearGradient>

          {/* Unified subtle soft glow filter */}
          <filter id="heroWaveSoftGlow" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {WAVE_CONFIGS.map((cfg, idx) => (
          <path
            key={idx}
            ref={el => { wavePathsRef.current[idx] = el; }}
            fill="none"
            stroke={`url(#${cfg.gradId})`}
            strokeWidth={cfg.strokeWidth}
            opacity={cfg.opacity}
            filter={`url(#${cfg.glowFilter})`}
          />
        ))}
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
