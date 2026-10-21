import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import SlowParticleNetwork from './SlowParticleNetwork';
import { Download, Mail, Linkedin } from 'lucide-react';

interface HeroProps {
  profile?: ProfileInfo;
  onOpenCV?: () => void;
  onSelectExperience?: () => void;
}

const LABELS = [
  '14+ Years Exp',
  'ERP Software',
  'Financial Reporting',
  'Receivables',
  'VAT Reports & Submission',
  'Reconciliations',
  'Costing',
  'Monthly Closing',
  'Payables',
  'P&L Account',
  'Balance Sheet',
  'Aging Report',
  'Accrual Accounting',
  'LC Documentation',
];

// 14 balanced anchor positions distributed naturally across left, center, and right below the repositioned ACCOUNTANT subtitle
const ANCHORS: { x: number; y: number }[] = [
  { x: 0.14, y: 0.55 }, // 0: '14+ Years Exp' (Left Upper Tier below ACCOUNTANT)
  { x: 0.28, y: 0.66 }, // 1: 'ERP Software' (Mid-Left Middle Tier)
  { x: 0.50, y: 0.67 }, // 2: 'Financial Reporting' (Center Middle Tier)
  { x: 0.86, y: 0.55 }, // 3: 'Receivables' (Right Upper Tier below ACCOUNTANT)
  { x: 0.10, y: 0.78 }, // 4: 'VAT Reports & Submission' (Far-Left Lower Tier)
  { x: 0.72, y: 0.57 }, // 5: 'Reconciliations' (Mid-Right Upper Tier)
  { x: 0.22, y: 0.88 }, // 6: 'Costing' (Left Bottom Tier)
  { x: 0.62, y: 0.79 }, // 7: 'Monthly Closing' (Center-Right Lower Tier)
  { x: 0.90, y: 0.78 }, // 8: 'Payables' (Far-Right Lower Tier)
  { x: 0.38, y: 0.54 }, // 9: 'P&L Account' (Center-Left Upper Tier)
  { x: 0.62, y: 0.54 }, // 10: 'Balance Sheet' (Center-Right Upper Tier)
  { x: 0.42, y: 0.88 }, // 11: 'Aging Report' (Center-Left Bottom Tier)
  { x: 0.80, y: 0.88 }, // 12: 'Accrual Accounting' (Right Bottom Tier)
  { x: 0.74, y: 0.68 }, // 13: 'LC Documentation' (Mid-Right Middle Tier)
];

// Connecting aesthetic lines between natural neighbor accounting pairs
const CONNECT_PAIRS = [
  [9, 10], // P&L Account <-> Balance Sheet
  [3, 8],  // Receivables <-> Payables
  [5, 7],  // Reconciliations <-> Monthly Closing
];

// Staggered timing offsets (seconds) across a 16s cycle for balanced ~50% visibility across the lower area
const FADE_OFFSETS: number[] = [
  0.0,   // 0: '14+ Years Exp' (Left)
  7.4,   // 1: 'ERP Software' (Mid-Left)
  2.5,   // 2: 'Financial Reporting' (Center)
  9.8,   // 3: 'Receivables' (Right)
  4.9,   // 4: 'VAT Reports & Submission' (Far-Left)
  12.3,  // 5: 'Reconciliations' (Mid-Right)
  1.2,   // 6: 'Costing' (Bottom-Left)
  8.6,   // 7: 'Monthly Closing' (Bottom-Center-Right)
  3.7,   // 8: 'Payables' (Far-Right)
  11.1,  // 9: 'P&L Account' (Center-Left)
  6.2,   // 10: 'Balance Sheet' (Center-Right)
  13.5,  // 11: 'Aging Report' (Bottom-Center-Left)
  14.8,  // 12: 'Accrual Accounting' (Right)
  5.8,   // 13: 'LC Documentation' (Mid-Right)
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
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const TAU = Math.PI * 2;
    const cyan: [number, number, number] = [48, 222, 250];
    const gold: [number, number, number] = [244, 198, 116];
    const rgba = (rgb: number[], a: number) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;
    let raf = 0;
    let yaw = .35, pitch = -.22, time = 0;
    let dragging = false, lastX = 0, lastY = 0;
    let lastFrame = 0;
    let size = 0, radius = 0;
    const nodes = Array.from({ length: 48 }, (_, i) => {
      const y = 1 - 2 * (i + .5) / 48;
      const angle = i * Math.PI * (3 - Math.sqrt(5));
      const r = Math.sqrt(1 - y * y);
      return [r * Math.cos(angle), y, r * Math.sin(angle)];
    });
    const edges: [number, number][] = [];
    nodes.forEach((p, i) => {
      const nearest = nodes.map((q, j) => ({ j, d: (p[0]-q[0])**2 + (p[1]-q[1])**2 + (p[2]-q[2])**2 }))
        .filter(v => v.j !== i).sort((a, b) => a.d - b.d).slice(0, 3);
      nearest.forEach(v => { if (i < v.j) edges.push([i, v.j]); });
    });
    const rotate = (p: number[]) => {
      const cy = Math.cos(yaw), sy = Math.sin(yaw);
      const x = p[0] * cy + p[2] * sy;
      const z = -p[0] * sy + p[2] * cy;
      const cp = Math.cos(pitch), sp = Math.sin(pitch);
      return [x, p[1] * cp - z * sp, p[1] * sp + z * cp];
    };
    const project = (p: number[]) => {
      const v = rotate(p);
      const perspective = 3.7 / (3.7 - v[2] * .3);
      return [size / 2 + v[0] * radius * perspective, size / 2 + v[1] * radius * perspective, v[2], perspective];
    };
    const line = (a: number[], b: number[], color: number[], alpha: number, width: number) => {
      const p = project(a), q = project(b);
      const depth = Math.max(-1, Math.min(1, (p[2] + q[2]) / 2));
      ctx.strokeStyle = rgba(color, alpha * (.32 + .68 * (depth + 1) / 2));
      ctx.lineWidth = width;
      ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); ctx.stroke();
    };
    const dot = (p: number[], color: number[], r: number, alpha: number) => {
      const v = project(p);
      const a = alpha * (.38 + .62 * (Math.max(-1, Math.min(1, v[2])) + 1) / 2);
      const glow = ctx.createRadialGradient(v[0], v[1], 0, v[0], v[1], r * 4);
      glow.addColorStop(0, rgba(color, a));
      glow.addColorStop(.25, rgba(color, a * .42));
      glow.addColorStop(1, rgba(color, 0));
      ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(v[0], v[1], r * 4, 0, TAU); ctx.fill();
      ctx.fillStyle = rgba(color, Math.min(1, a + .15));
      ctx.beginPath(); ctx.arc(v[0], v[1], r * .65, 0, TAU); ctx.fill();
    };
    const sphere = (lat: number, lon: number, r = 1) => [r * Math.cos(lat) * Math.cos(lon), r * Math.sin(lat), r * Math.cos(lat) * Math.sin(lon)];
    const orbit = (tilt: number, angle: number, r: number) => [r * Math.cos(angle), r * Math.sin(angle) * Math.cos(tilt), r * Math.sin(angle) * Math.sin(tilt)];
    const render = (ms: number) => {
      const dt = lastFrame ? Math.min((ms - lastFrame) / 1000, .05) : 0;
      lastFrame = ms;
      // Continuous visible auto-rotation, pausing only while the user drags.
      // This must not depend on OS reduced-motion settings for this requested animation.
      time += dt;
      if (!dragging) yaw += dt * .24;
      size = canvas.clientWidth;
      if (!size) { raf = requestAnimationFrame(render); return; }
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const px = Math.round(size * dpr);
      if (canvas.width !== px || canvas.height !== px) { canvas.width = px; canvas.height = px; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);
      // Slightly smaller than the original globe; extra margin protects the outer orbits.
      radius = size * .315;
      const c = size / 2;
      const halo = ctx.createRadialGradient(c, c, radius * .15, c, c, radius * 1.55);
      halo.addColorStop(0, 'rgba(22,170,207,.13)');
      halo.addColorStop(.55, 'rgba(16,110,155,.07)');
      halo.addColorStop(1, 'rgba(10,60,100,0)');
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(c, c, radius * 1.55, 0, TAU); ctx.fill();
      for (let lat = -75; lat <= 75; lat += 15) {
        const phi = lat * Math.PI / 180;
        for (let j = 0; j < 64; j++) line(sphere(phi, j * TAU / 64), sphere(phi, (j + 1) * TAU / 64), cyan, .34, .72);
      }
      for (let j = 0; j < 16; j++) {
        const lon = j * TAU / 16;
        for (let k = 0; k < 48; k++) line(sphere(-Math.PI / 2 + k * Math.PI / 48, lon), sphere(-Math.PI / 2 + (k + 1) * Math.PI / 48, lon), cyan, .25, .68);
      }
      edges.forEach(([i, j]) => line(nodes[i].map(x => x * 1.008), nodes[j].map(x => x * 1.008), gold, .24, .65));
      nodes.forEach((p, i) => dot(p.map(x => x * 1.012), i % 5 === 0 ? gold : cyan, i % 5 === 0 ? 2 : 1.6, .79));
      for (let j = 0; j < 5; j++) dot(sphere((j - 2) * .42, time * (.18 + j * .04) + j * 1.7, 1.018), gold, 2.4, .88);
      for (let o = 0; o < 2; o++) {
        const tilt = o === 0 ? .28 : -.45;
        const r = o === 0 ? 1.26 : 1.41;
        for (let k = 0; k < 120; k++) line(orbit(tilt, k * TAU / 120 + o * .9, r), orbit(tilt, (k + 1) * TAU / 120 + o * .9, r), gold, o === 0 ? .32 : .17, o === 0 ? .9 : .7);
        for (let j = 0; j < 3; j++) dot(orbit(tilt, time * (o === 0 ? .28 : -.18) + j * TAU / 3 + o * .9, r), gold, j === 0 ? 2.7 : 1.9, .84);
      }
      raf = requestAnimationFrame(render);
    };
    // Natural/direct drag: mouse right => globe right; mouse down => globe down.
    const down = (e: PointerEvent) => {
      dragging = true; lastX = e.clientX; lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      yaw += (e.clientX - lastX) * .006;
      pitch += (e.clientY - lastY) * .006;
      pitch = Math.max(-1.35, Math.min(1.35, pitch));
      lastX = e.clientX; lastY = e.clientY;
    };
    const up = () => { dragging = false; };
    canvas.addEventListener('pointerdown', down);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener('pointerdown', down);
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerup', up);
      canvas.removeEventListener('pointercancel', up);
    };
  }, []);
  return <canvas ref={ref} className="hero-mesh-globe" aria-label="Interactive rotating financial data globe" />;
}

export function Hero(_props: HeroProps) {
  const { isRTL } = useLanguage();
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

    // Random positions are assigned only while labels are completely invisible.
    const roamingPositions = ANCHORS.map(a => ({ ...a }));
    const previousPhases = LABELS.map((_, i) => ((FADE_OFFSETS[i] ?? i * 0.9) % 16));
    const avoidVectors = LABELS.map(() => ({ x: 0, y: 0 }));

    // Drive only the underline from each point's actual visibility lifecycle.
    const trailStarts: (number | null)[] = LABELS.map(() => null);
    const trailElements = pointsRef.current.map(el => el?.querySelector<HTMLElement>('.hero-roam-line'));

    // Measure actual rendered text width and height of each heading
    const getRenderedSizes = () => LABELS.map((_, i) => {
      const el = pointsRef.current[i];
      const heading = el?.querySelector<HTMLElement>('.hero-roam-heading') || el?.firstElementChild as HTMLElement | null;
      return {
        w: heading && heading.offsetWidth > 0 ? heading.offsetWidth : 140,
        h: heading && heading.offsetHeight > 0 ? heading.offsetHeight : 26,
      };
    });

    // Dynamic central title bottom clearance (strictly below MUHAMMAD SALMAN and ACCOUNTANT)
    const getLowerMinY = () => {
      const center = stage.querySelector('.hero-roam-center') as HTMLElement | null;
      if (!center) return stageH * 0.44;
      const cRect = center.getBoundingClientRect();
      const sRect = stage.getBoundingClientRect();
      return Math.max((cRect.bottom - sRect.top) + 22, stageH * 0.44);
    };

    const chooseNewPosition = (index: number) => {
      const sizes = getRenderedSizes();
      const own = sizes[index];
      const last = roamingPositions[index];
      const marginX = own.w / 2 + 16;
      const marginY = own.h / 2 + 12;
      const maxX = Math.max(marginX, stageW - marginX);
      const lowerMinY = getLowerMinY();
      const minY = lowerMinY + marginY;
      const maxY = Math.max(minY, stageH - marginY);

      const collides = (x: number, y: number) => {
        if (y < lowerMinY + own.h / 2) return true;
        return roamingPositions.some((other, j) => {
          if (j === index) return false;
          const phase = ((performance.now() * 0.001 + (FADE_OFFSETS[j] ?? j * 0.9)) % 16 + 16) % 16;
          // Ignore items that are completely invisible
          if (phase >= 8 && phase < 14) return false;
          // Maintain at least 20px spacing
          const reqX = (own.w + sizes[j].w) / 2 + 20;
          const reqY = (own.h + sizes[j].h) / 2 + 20;
          return Math.abs(x - other.x * stageW) < reqX && Math.abs(y - other.y * stageH) < reqY;
        });
      };

      // Candidates across lower zone
      const candidates = [...ANCHORS].sort(() => Math.random() - 0.5);
      for (const anchor of candidates) {
        for (let attempt = 0; attempt < 8; attempt++) {
          const x = clamp(anchor.x * stageW + (Math.random() - 0.5) * 45, marginX, maxX);
          const y = clamp(anchor.y * stageH + (Math.random() - 0.5) * 35, minY, maxY);
          if (Math.hypot(x - last.x * stageW, y - last.y * stageH) < Math.min(80, stageW * 0.12)) continue;
          if (!collides(x, y)) {
            roamingPositions[index] = { x: x / stageW, y: y / stageH };
            return;
          }
        }
      }
    };

    // Store calculated positions for connecting lines
    const currentPositions: { x: number; y: number; opacity: number }[] = Array.from({ length: LABELS.length }, () => ({ x: 0, y: 0, opacity: 0 }));

    const frame = (now: number) => {
      if (isUnmounted) return;
      raf = requestAnimationFrame(frame);

      try {
        const tSec = now * 0.001;
        const isMobile = stageW < 680;
        const lowerMinY = getLowerMinY();
        const sizes = getRenderedSizes();

        // Smooth mouse parallax damping
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        // 1. Update the 20 Wave Lines in the bottom area of Home
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

        // 2. Base Coordinates & Opacity Computation
        const baseCoords: { x: number; y: number; scale: number }[] = [];
        const rawOpacities: number[] = [];

        LABELS.forEach((_, i) => {
          const phase = ((tSec + (FADE_OFFSETS[i] ?? i * 0.9)) % 16 + 16) % 16;
          // Reposition while invisible (phase >= 14, opacity 0)
          if (previousPhases[i] < 14 && phase >= 14) {
            chooseNewPosition(i);
          }
          previousPhases[i] = phase;

          const anchor = roamingPositions[i] || { x: 0.5, y: 0.75 };
          const baseX = stageW * anchor.x;
          const baseY = stageH * anchor.y;

          // Multi-frequency Lissajous harmonic drift for smooth, organic floating
          const sX1 = 3400 + (i % 7) * 360;
          const sX2 = 4800 + (i % 5) * 410;
          const sY1 = 3800 + (i % 6) * 380;
          const sY2 = 5300 + (i % 4) * 450;

          const pX1 = i * 1.732;
          const pX2 = i * 2.618 + 0.9;
          const pY1 = i * 2.236 + 1.4;
          const pY2 = i * 1.414 + 2.3;

          const ampX = (11 + (i % 5) * 2.0) * ampScale;
          const ampY = (12 + (i % 4) * 2.5) * ampScale;

          const driftX = Math.sin(now / sX1 + pX1) * (ampX * 0.65) + Math.cos(now / sX2 + pX2) * (ampX * 0.35);
          const driftY = Math.sin(now / sY1 + pY1) * (ampY * 0.65) + Math.cos(now / sY2 + pY2) * (ampY * 0.35);

          // Subtle depth / parallax breathing
          const depthSine = Math.sin(now / 3900 + i * 1.3);
          const scale = 0.985 + 0.025 * depthSine;

          const depthFactor = 0.6 + (i % 5) * 0.2;
          const parallaxX = mouseX * 12 * depthFactor * ampScale;
          const parallaxY = mouseY * 10 * depthFactor * ampScale;

          baseCoords.push({
            x: baseX + driftX + parallaxX,
            y: baseY + driftY + parallaxY,
            scale,
          });

          rawOpacities.push(getPointOpacity(tSec, FADE_OFFSETS[i] ?? (i * 0.9)));
        });

        // Mobile Screen Overlap Prevention: Delay appearance of headings if lower area space is crowded
        const effectiveOpacities = [...rawOpacities];
        if (isMobile) {
          let visibleCount = 0;
          LABELS.forEach((_, i) => {
            if (rawOpacities[i] > 0.05) {
              // On mobile, keep max 3 visible simultaneously and verify collision clearance
              if (visibleCount >= 3) {
                effectiveOpacities[i] = 0;
                return;
              }
              // Check collision with already visible items
              const collidesWithVisible = LABELS.some((_, j) => {
                if (j === i || effectiveOpacities[j] <= 0.05) return false;
                const reqX = (sizes[i].w + sizes[j].w) / 2 + 20;
                const reqY = (sizes[i].h + sizes[j].h) / 2 + 20;
                return Math.abs(baseCoords[i].x - baseCoords[j].x) < reqX &&
                       Math.abs(baseCoords[i].y - baseCoords[j].y) < reqY;
              });

              if (collidesWithVisible) {
                effectiveOpacities[i] = 0;
              } else {
                visibleCount++;
              }
            }
          });
        }

        // 3. Collision Avoidance Physics with 20px Min Spacing (no jumps, smooth relaxation)
        const targetPushX = new Float32Array(LABELS.length);
        const targetPushY = new Float32Array(LABELS.length);

        // Run 3 iterative relaxation passes between all visible headings
        for (let iter = 0; iter < 3; iter++) {
          for (let i = 0; i < LABELS.length; i++) {
            if (effectiveOpacities[i] <= 0.02) continue;
            for (let j = i + 1; j < LABELS.length; j++) {
              if (effectiveOpacities[j] <= 0.02) continue;

              const xi = baseCoords[i].x + targetPushX[i];
              const yi = baseCoords[i].y + targetPushY[i];
              const xj = baseCoords[j].x + targetPushX[j];
              const yj = baseCoords[j].y + targetPushY[j];

              // Required center-to-center distance with at least 20px spacing
              const reqW = (sizes[i].w + sizes[j].w) / 2 + 20;
              const reqH = (sizes[i].h + sizes[j].h) / 2 + 20;

              const dx = xi - xj;
              const dy = yi - yj;
              const absDx = Math.abs(dx);
              const absDy = Math.abs(dy);

              if (absDx < reqW && absDy < reqH) {
                const ovX = reqW - absDx;
                const ovY = reqH - absDy;

                // Push apart along the axis of least penetration
                if (ovX / reqW < ovY / reqH) {
                  const push = (ovX + 1) * 0.5;
                  const s = dx >= 0 ? 1 : -1;
                  targetPushX[i] += s * push;
                  targetPushX[j] -= s * push;
                } else {
                  const push = (ovY + 1) * 0.5;
                  const s = dy >= 0 ? 1 : -1;
                  targetPushY[i] += s * push;
                  targetPushY[j] -= s * push;
                }
              }
            }
          }
        }

        // Apply smooth exponential damping to avoid sudden jumps, shaking, or flickering
        LABELS.forEach((_, i) => {
          avoidVectors[i].x += (targetPushX[i] - avoidVectors[i].x) * 0.16;
          avoidVectors[i].y += (targetPushY[i] - avoidVectors[i].y) * 0.16;

          const ownW = sizes[i].w;
          const ownH = sizes[i].h;
          const minX = ownW * 0.625 + 16;
          const maxX = Math.max(minX, stageW - ownW * 0.625 - 16);
          const minY = lowerMinY + ownH / 2;
          const maxY = Math.max(minY, stageH - ownH / 2 - 26);

          const finalX = clamp(baseCoords[i].x + avoidVectors[i].x, minX, maxX);
          const finalY = clamp(baseCoords[i].y + avoidVectors[i].y, minY, maxY);

          currentPositions[i] = { x: finalX, y: finalY, opacity: effectiveOpacities[i] };

          const el = pointsRef.current[i];
          if (el) {
            el.style.transform = `translate3d(${finalX.toFixed(1)}px,${finalY.toFixed(1)}px,0) translate(-50%,-50%) scale(${baseCoords[i].scale.toFixed(3)})`;
            el.style.opacity = effectiveOpacities[i].toFixed(3);
            const trail = trailElements[i];
            if (trail) {
              const opacity = effectiveOpacities[i];
              if (opacity <= 0.02) trailStarts[i] = null;
              if (opacity >= 0.85 && trailStarts[i] === null) trailStarts[i] = now;

              let expansion = 0;
              let visibility = 0;
              if (trailStarts[i] !== null) {
                const phase = ((now - trailStarts[i]!) % 6000) / 6000;
                const ease = (value: number) => 0.5 - 0.5 * Math.cos(Math.PI * clamp(value, 0, 1));
                expansion = ease(phase / 0.60);
                visibility = phase <= 0.65 ? 0.8
                  : 0.8 * (1 - ease((phase - 0.65) / 0.25));
              }
              trail.style.width = `${(100 * expansion).toFixed(3)}%`;
              trail.style.opacity = visibility.toFixed(3);
            }
          }
        });

        // 4. Update Connecting SVG Lines between natural neighbor pairs
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
        // Guard against transient error breaking animation loop
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

  const handleButtonClick = () => {
    const about = document.getElementById('about');
    if (about) {
      window.scrollTo({ top: about.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      window.history.replaceState(null, '', '#about');
    }
  };

  return (
    <section id="home" dir={isRTL ? 'rtl' : 'ltr'} className="hero-free-roam" aria-label="Portfolio Home">
      <style>{`
        .hero-free-roam{position:relative;height:calc(100svh - 5rem);min-height:540px;overflow:hidden;isolation:isolate;background:radial-gradient(ellipse at 35% 36%,#13374b 0%,#081e30 55%,#061522 100%);color:#f8fafc}
        .hero-free-roam:after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 40%,rgba(0,0,0,.2));z-index:0}
        .hero-mesh-globe{position:absolute;top:3%;left:3%;width:clamp(155px,21vw,285px);height:auto;aspect-ratio:1;z-index:1;pointer-events:auto;touch-action:none;cursor:grab;filter:drop-shadow(0 0 12px rgba(30,160,245,.22))}
        .hero-flowing-waves{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1}
        .hero-roam-stage{position:absolute;inset:0;overflow:hidden}
        .hero-roam-lines{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1}
        .hero-roam-point{position:absolute;left:0;top:0;z-index:2;white-space:nowrap;pointer-events:none;will-change:transform,opacity}

        /* Clean floating headings: completely pill-free, border-free, background-free, and dot-free */
        .hero-roam-heading{position:relative;display:inline-flex;flex-direction:column;align-items:center;background:transparent;border:none;border-radius:0;padding:0;margin:0;box-shadow:none;outline:none;font-size:15px;font-weight:700;letter-spacing:.025em;line-height:1.2;white-space:nowrap;pointer-events:none;user-select:none;filter:drop-shadow(0 0 8px var(--point-glow)) drop-shadow(0 2px 4px rgba(4,16,32,.9));text-shadow:0 0 10px var(--point-glow)}
        .hero-roam-heading:before{content:none;display:none}

        /* Clean text with subtle dark golden/deep blue light sweep strictly INSIDE letters from LEFT to RIGHT */
        .hero-roam-text{position:relative;display:inline-block;color:var(--point-color);background-image:linear-gradient(90deg,var(--point-color) 0%,var(--point-color) 38%,var(--sweep-color) 50%,var(--point-color) 62%,var(--point-color) 100%);background-size:250% 100%;background-position:140% 0;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:heroTextSweep 12s cubic-bezier(0.25,1,0.5,1) infinite;animation-delay:var(--heading-delay,0s);will-change:background-position}
        @keyframes heroTextSweep{0%{background-position:140% 0}26%{background-position:-40% 0}100%{background-position:-40% 0}}
        @supports not (-webkit-background-clip:text){.hero-roam-text{background-image:none;-webkit-text-fill-color:var(--point-color);color:var(--point-color)}}

        /* Center-out underline: its local transform never replaces the roaming wrapper transform. */
        .hero-roam-line{position:absolute;display:block;left:50%;top:calc(100% + 8px);width:0;max-width:100%;height:2px;border-radius:999px;background:linear-gradient(90deg,transparent 0%,var(--point-color) 30%,var(--point-color) 50%,var(--point-color) 70%,transparent 100%);transform:translateX(-50%);opacity:0;filter:drop-shadow(0 0 2px var(--line-glow));pointer-events:none;will-change:width,opacity}

        /* Center "Muhammad Salman" heading: shifted upward by its rendered text height, so bottom edge sits where top was */
        .hero-roam-center{position:absolute;z-index:8;left:50%;top:calc(50% - clamp(65px, 6.5vw + 25px, 115px));transform:translate(-50%,-50%);width:max-content;max-width:calc(100% - 24px);min-height:0;padding:12px 20px;display:flex;flex-direction:column;gap:7px;align-items:center;justify-content:center;text-align:center;border:0;border-radius:0;background:transparent;backdrop-filter:none;-webkit-backdrop-filter:none;box-shadow:none;appearance:none;cursor:pointer;color:#f8e4b2;transition:transform .35s ease,filter .35s ease}
        .hero-roam-center:hover,.hero-roam-center:focus-visible{transform:translate(-50%,-50%) translateY(-3px) scale(1.055);filter:drop-shadow(0 7px 2px rgba(0,0,0,.75)) drop-shadow(0 -2px 2px rgba(255,239,189,.5));outline:none}
        .hero-roam-center strong{display:block;white-space:nowrap;font-size:clamp(23.5px,4.6vw,73px);font-weight:800;letter-spacing:.075em;color:#D8B56A;background-image:none;-webkit-background-clip:initial;background-clip:initial;-webkit-text-fill-color:#D8B56A;text-shadow:none;filter:drop-shadow(0 2px 3px rgba(4,16,32,.85)) drop-shadow(0 0 10px rgba(216,181,106,.20));line-height:1.2;transition:text-shadow .35s ease}
        .hero-roam-center .hero-roam-subtitle{display:block;font-size:clamp(12px,1.35vw,19px);font-weight:700;letter-spacing:.36em;color:#d8b56a;text-shadow:0 2px 6px rgba(0,0,0,.7);transition:letter-spacing .35s ease,text-shadow .35s ease}
        .hero-roam-center:hover .hero-roam-subtitle,.hero-roam-center:focus-visible .hero-roam-subtitle{letter-spacing:.42em;text-shadow:0 2px 10px rgba(216,181,106,.55)}
        .hero-roam-center:hover strong,.hero-roam-center:focus-visible strong{text-shadow:none;filter:drop-shadow(0 3px 2px rgba(0,0,0,.6)) drop-shadow(0 0 10px rgba(216,181,106,.35))}
        /* Only the new hero actions; all existing hero rules remain untouched. */
        .hero-actions{position:absolute;z-index:10;left:50%;top:calc(50% + clamp(12px,2.8vw,42px));transform:translateX(-50%);display:flex;align-items:center;justify-content:center;gap:12px;white-space:nowrap;max-width:calc(100% - 24px)}
        .hero-action{display:inline-flex;align-items:center;justify-content:center;gap:9px;border-radius:11px;padding:11px 18px;font-size:13px;font-weight:700;line-height:1.25;text-decoration:none;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease;touch-action:manipulation}
        .hero-action:hover{transform:translateY(-3px)}
        .hero-action-primary{color:#fff;background:linear-gradient(110deg,#BE9852,#A8823C);border:1px solid #BE9852;box-shadow:0 4px 18px rgba(190,152,82,.18)}
        .hero-action-primary:hover{box-shadow:0 7px 24px rgba(190,152,82,.32)}
        .hero-action-outline{color:#F3F7FA;background:rgba(8,30,48,.34);border:1px solid rgba(197,213,226,.65)}
        .hero-action-outline:hover{border-color:#D8B56A}
        .hero-action-linkedin{color:#69B7E7;background:transparent;border:0;padding:10px}
        .hero-action-linkedin:hover{color:#A2E2FF}
        @media(max-width:700px){.hero-actions{gap:6px;top:calc(50% + 32px)}.hero-action{font-size:11px;padding:9px 10px;gap:5px}.hero-action-linkedin{padding:8px}}
        @media(max-width:700px){.hero-free-roam{min-height:480px}.hero-roam-heading{font-size:12px;font-weight:700}.hero-roam-center{width:auto;min-height:0;border-radius:0;padding:10px 12px}.hero-roam-center strong{font-size:clamp(20px,6.16vw,42.5px);letter-spacing:.025em}.hero-roam-center .hero-roam-subtitle{font-size:12px;letter-spacing:.25em}}
        @media(prefers-reduced-motion:reduce){.hero-roam-text{animation:none;background-position:140% 0}.hero-roam-line{will-change:auto}}
      `}</style>

      {/* Slow square particles and connecting lines — decorative overlay only */}
      <SlowParticleNetwork />

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

      {/* Floating Accounting Headings & Connecting lines stage */}
      <div className="hero-roam-stage" ref={stageRef}>
        <svg className="hero-roam-lines" ref={svgRef} aria-hidden="true" />
        {LABELS.map((label, i) => {
          const isGold = i % 2 === 0;
          const color = isGold ? GOLD : BLUE;
          return (
            <div
              key={label}
              className="hero-roam-point"
              ref={el => { pointsRef.current[i] = el; }}
              style={{ opacity: 0, transform: 'translate3d(-300px,-300px,0)' }}
            >
              <span
                className="hero-roam-heading"
                style={{
                  '--point-color': color,
                  '--sweep-color': isGold ? '#F3DB96' : '#A2E2FF',
                  '--line-track': isGold 
                    ? 'linear-gradient(90deg, transparent 0%, rgba(216, 181, 106, 0.28) 12%, rgba(216, 181, 106, 0.38) 50%, rgba(216, 181, 106, 0.28) 88%, transparent 100%)' 
                    : 'linear-gradient(90deg, transparent 0%, rgba(105, 183, 231, 0.28) 12%, rgba(105, 183, 231, 0.38) 50%, rgba(105, 183, 231, 0.28) 88%, transparent 100%)',
                  '--line-highlight': isGold ? '#FFF4D0' : '#E0F7FF',
                  '--line-glow': isGold ? 'rgba(248, 227, 168, 0.65)' : 'rgba(162, 226, 255, 0.65)',
                  '--point-glow': isGold ? 'rgba(216,181,106,0.45)' : 'rgba(105,183,231,0.45)',
                  '--heading-delay': `${(i * 0.85).toFixed(2)}s`,
                } as CSSProperties}
              >
                <span className="hero-roam-text">{label}</span>
                <span className="hero-roam-line" aria-hidden="true" />
              </span>
            </div>
          );
        })}
      </div>

      {/* Center "Muhammad Salman" button */}
      <button
        type="button"
        className="hero-roam-center"
        onClick={handleButtonClick}
        aria-label={isRTL ? 'محمد سلمان - عرض النبذة المهنية' : 'Muhammad Salman - View About Profile'}
      >
        <strong>{isRTL ? 'محمد سلمان' : 'MUHAMMAD SALMAN'}</strong>
        <span className="hero-roam-subtitle">{isRTL ? 'محاسب' : 'ACCOUNTANT'}</span>
      </button>

      {/* New controls only — original center heading, labels, globe and waves unchanged. */}
      <div className="hero-actions" dir={isRTL ? 'rtl' : 'ltr'}>
        <button type="button" className="hero-action hero-action-primary" onClick={_props.onOpenCV}>
          <Download size={17} aria-hidden="true" />
          <span>{isRTL ? 'تحميل السيرة الذاتية' : 'Download CV'}</span>
        </button>
        <a className="hero-action hero-action-outline" href="#contact" onClick={(event) => {
          const target = document.getElementById('contact');
          if (!target) return;
          event.preventDefault();
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
          window.history.replaceState(null, '', '#contact');
        }}>
          <Mail size={17} aria-hidden="true" />
          <span>{isRTL ? 'تواصل معي' : 'Contact Me'}</span>
        </a>
        <a className="hero-action hero-action-linkedin" href="https://www.linkedin.com/in/muhammad-salman-mba-finance-cpa-finalist-66908767/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
          <Linkedin size={27} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
