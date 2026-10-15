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
        // Keep the outside silhouette spherical; gently animate inner geometry.
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
