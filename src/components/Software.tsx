import React, { useEffect, useRef, useState } from 'react';

interface SoftwareItem {
  name: string;
  logo: string;
  fallback: string;
  glow: string;
  whiteBackground?: boolean;
  brandMark?: 'odoo' | 'zoho' | 'wafeq';
  size?: number;
}

const softwareItems: SoftwareItem[] = [
  { name: 'OFIS (Powered by Oracle)', logo: '/images/software/oracle-logo.svg', fallback: 'ORACLE', glow: '255,65,65' },
  { name: 'QuickBooks', logo: '/images/software/quickbooks-logo.svg', fallback: 'QuickBooks', glow: '35,235,65' },
  { name: 'Arqami', logo: '/images/software/Arqami Logo.png', fallback: 'ARQAMI', glow: '65,135,255', whiteBackground: true, size: 1.02 },
  { name: 'Delta Financial', logo: '/images/software/delta-logo.svg', fallback: 'DELTA', glow: '255,195,30' },
  { name: 'SMACC', logo: '/images/software/smacc-logo.png', fallback: 'SMACC', glow: '35,145,255' },
  { name: 'Daftra', logo: '/images/software/Daftra logo.png', fallback: 'DAFTRA', glow: '55,155,255', whiteBackground: true, size: 1.10 },
  { name: 'Qoyod', logo: '/images/software/Qoyod logo.png', fallback: 'QOYOD', glow: '55,130,255' },
  { name: 'Peachtree', logo: '/images/software/Peachtree logo.png', fallback: 'PEACHTREE', glow: '255,190,45', whiteBackground: true, size: 1.18 },
  { name: 'Tally', logo: '/images/software/Tally logo.png', fallback: 'TALLY', glow: '255,75,100', whiteBackground: true, size: 1.10 },
  { name: 'Odoo', logo: '', fallback: 'odoo', glow: '175,95,175', brandMark: 'odoo' },
  { name: 'Zoho Books', logo: '', fallback: 'Zoho Books', glow: '45,155,255', brandMark: 'zoho' },
  { name: 'Wafeq', logo: '', fallback: 'wafeq', glow: '110,95,255', brandMark: 'wafeq' },
  { name: 'Advanced Microsoft Excel', logo: '/images/software/excel-logo.svg', fallback: 'EXCEL', glow: '25,230,110' },
  { name: 'Microsoft Office', logo: '/images/software/office-logo.svg', fallback: 'OFFICE', glow: '255,95,35' },
];

/**
 * Decorative, pointer-transparent side network. Used inside Software.
 * Draws slowly drifting dots and fine connecting lines in the side gutters.
 * Honors reduced-motion and does not change card/hover functionality.
 */
function SoftwareSideNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Decorative motion runs continuously while this section is mounted.
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastTime = 0;
    type Dot = { x: number; y: number; vx: number; vy: number; r: number; depth: number; side: number };
    let dots: Dot[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const nextWidth = rect.width;
      const nextHeight = rect.height;
      if (Math.abs(nextWidth - width) < 1 && Math.abs(nextHeight - height) < 1 && dots.length) return;

      const oldWidth = width;
      const oldHeight = height;
      width = nextWidth;
      height = nextHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      // IMPORTANT: keep existing particle positions when section height changes.
      // Recreating dots on every section resize made the entire network jump.
      if (dots.length) {
        for (const dot of dots) {
          dot.y = Math.max(0, Math.min(height, dot.y));
          const oldSideStart = dot.side === 0 ? 0 : oldWidth * 0.81;
          const oldSideSize = oldWidth * 0.19;
          const fraction = oldSideSize > 0 ? (dot.x - oldSideStart) / oldSideSize : 0.5;
          dot.x = (dot.side === 0 ? 0 : width * 0.81) + fraction * width * 0.19;
        }
        return;
      }

      const count = 80;
      dots = Array.from({ length: count }, (_, i) => {
        const side = i % 2 === 0;
        return {
          x: side ? Math.random() * width * 0.19 : width * (0.81 + Math.random() * 0.19),
          y: Math.random() * height,
          vx: (Math.random() < 0.5 ? -1 : 1) * (0.45 + Math.random() * 0.45),
          vy: (Math.random() < 0.5 ? -1 : 1) * (0.45 + Math.random() * 0.45),
          r: 1.3 + Math.random() * 1.4,
          depth: 0.65 + Math.random() * 0.6,
          side: side ? 0 : 1,
        };
      });
    };

    const draw = (time: number) => {
      const delta = Math.min(2, Math.max(0, (time - (lastTime || time)) / 16.67));
      lastTime = time;
      context.clearRect(0, 0, width, height);
      if (width < 700) {
        frame = window.requestAnimationFrame(draw);
        return; // keep mobile content completely clear
      }

      for (const dot of dots) {
        {
          dot.x += dot.vx * delta;
          dot.y += dot.vy * delta;
          if (dot.y < 0 || dot.y > height) dot.vy *= -1;
          const minX = dot.side === 0 ? 0 : width * 0.81;
          const maxX = dot.side === 0 ? width * 0.19 : width;
          if (dot.x < minX || dot.x > maxX) {
            dot.vx *= -1;
            dot.x = Math.max(minX, Math.min(maxX, dot.x));
          }
        }
      }

      dots.forEach((a, i) => {
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > 125) continue;
          context.beginPath();
          context.strokeStyle = `rgba(220,231,240,${(1 - distance / 125) * 0.46})`;
          context.lineWidth = 0.7;
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
        context.beginPath();
        context.arc(a.x, a.y, a.r * a.depth * 2.4, 0, Math.PI * 2);
        context.fillStyle = 'rgba(190,152,82,0.065)';
        context.fill();
        context.beginPath();
        context.arc(a.x, a.y, a.r * a.depth, 0, Math.PI * 2);
        context.fillStyle = 'rgba(229,199,142,0.98)';
        context.fill();
      });
      frame = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    frame = window.requestAnimationFrame(draw);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-20 h-full w-full pointer-events-none"
      style={{
        maskImage: 'linear-gradient(to right, black 0%, black 14%, transparent 27%, transparent 73%, black 86%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to right, black 0%, black 14%, transparent 27%, transparent 73%, black 86%, black 100%)',
      }}
    />
  );
}

// Remove only the light background connected to image edges.
// Unlike a global white-color filter, this preserves isolated white logo letters.
function removeWhiteBackground(image: HTMLImageElement): string {
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return image.src;
  ctx.drawImage(image, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const w = canvas.width, h = canvas.height;
  const visited = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let head = 0, tail = 0;
  const isLight = (index: number) => {
    const k = index * 4;
    return data[k] > 225 && data[k + 1] > 225 && data[k + 2] > 225 &&
      Math.max(data[k], data[k + 1], data[k + 2]) - Math.min(data[k], data[k + 1], data[k + 2]) < 28;
  };
  const push = (index: number) => {
    if (!visited[index] && isLight(index)) {
      visited[index] = 1;
      queue[tail++] = index;
    }
  };
  for (let x = 0; x < w; x++) { push(x); push((h - 1) * w + x); }
  for (let y = 0; y < h; y++) { push(y * w); push(y * w + w - 1); }
  while (head < tail) {
    const i = queue[head++];
    const x = i % w, y = Math.floor(i / w);
    data[i * 4 + 3] = 0;
    if (x > 0) push(i - 1);
    if (x + 1 < w) push(i + 1);
    if (y > 0) push(i - w);
    if (y + 1 < h) push(i + w);
  }
  // Soft antialiasing at the cutout edge, without recoloring the logo itself.
  for (let i = 0; i < w * h; i++) {
    if (visited[i]) continue;
    const k = i * 4;
    const min = Math.min(data[k], data[k + 1], data[k + 2]);
    if (min > 235 && (i % w === 0 || i % w === w - 1)) data[k + 3] = 0;
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL('image/png');
}

// Embedded transparent vector marks: no missing-image text fallbacks.
// These are brand-inspired presentations; official assets can replace them later.
function BuiltInBrandLogo({ brand }: { brand: 'odoo' | 'zoho' | 'wafeq' }) {
  if (brand === 'odoo') return (
    <svg className="software-logo-image" viewBox="0 0 240 75" role="img" aria-label="Odoo">
      <text x="120" y="54" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="66" letterSpacing="-5">
        <tspan fill="#D66BCB">o</tspan><tspan fill="#B8B7C5">doo</tspan>
      </text>
    </svg>
  );
  if (brand === 'zoho') return (
    <svg className="software-logo-image" viewBox="0 0 260 82" role="img" aria-label="Zoho Books">
      <g transform="translate(5,12)" fill="none" stroke="#25B8F5" strokeWidth="5" strokeLinejoin="round">
        <rect x="0" y="0" width="54" height="54" rx="9" />
        <path d="M13 12h23c11 0 11 15 0 15H13m0 0h25c11 0 11 15 0 15H13z" />
      </g>
      <text x="73" y="34" fill="#F6FAFF" fontSize="25" fontFamily="Arial,sans-serif" fontWeight="700">Zoho</text>
      <text x="73" y="62" fill="#F6FAFF" fontSize="29" fontFamily="Arial,sans-serif" fontWeight="800">Books</text>
    </svg>
  );
  return (
    <svg className="software-logo-image" viewBox="0 0 250 80" role="img" aria-label="Wafeq">
      <defs><linearGradient id="wafeqMarkGradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#A76BFF"/><stop offset="1" stopColor="#507DF9"/></linearGradient></defs>
      <path d="M7 20 L25 58 L41 29 L57 58 L76 20" fill="none" stroke="url(#wafeqMarkGradient)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <text x="92" y="56" fill="#F0F2FF" fontSize="46" fontWeight="750" fontFamily="Arial,sans-serif">wafeq</text>
    </svg>
  );
}

function SoftwareLogo({ item }: { item: SoftwareItem }) {
  const [logoError, setLogoError] = useState(false);
  const [processedLogo, setProcessedLogo] = useState<string | null>(null);
  return (
    <div
      className="software-logo-item group relative flex h-[82px] w-full items-center justify-center sm:h-[87px]"
      style={{
        '--logo-glow': `rgba(${item.glow},0.46)`,
        '--logo-soft-glow': `rgba(${item.glow},0.20)`,
      } as React.CSSProperties}
    >
      <div className="software-light" aria-hidden="true" />
      <div className="software-logo-inner">
        {item.brandMark ? (
          <BuiltInBrandLogo brand={item.brandMark} />
        ) : logoError ? (
          <span className="software-fallback">{item.fallback}</span>
        ) : (
          <img
            src={processedLogo || item.logo}
            alt={`${item.name} logo`}
            loading="lazy"
            onLoad={(event) => {
              if (!item.whiteBackground || processedLogo) return;
              try {
                setProcessedLogo(removeWhiteBackground(event.currentTarget));
              } catch {
                // Keep original image if canvas processing is unavailable.
              }
            }}
            onError={() => setLogoError(true)}
            className={`software-logo-image software-logo-${item.name.toLowerCase().replace(/[^a-z]/g, '')}`}
            style={{ transform: `scale(${item.size || 1})` }}
          />
        )}
      </div>
    </div>
  );
}

interface SoftwareProps { software?: unknown; }

export function Software(_props?: SoftwareProps) {
  return (
    <section
      id="software"
      className="misty-portfolio relative overflow-hidden border-b border-[#C5D5E2] bg-[#305879] py-16 transition-colors duration-300 sm:py-20"
      style={{ backgroundColor: '#305879', backgroundImage: 'none' }}
    >
      <style>{`
        #software { background: #305879 !important; background-image: none !important; }
        #software .main-heading-3d { color: #F3F7FA; }
        #software .main-heading-3d:hover { color: #BE9852; }
        @media (min-width: 1024px) {
          #software .software-logo-item:nth-last-child(2) { grid-column: 2; }
        }
        #software .software-logo-item {
          isolation: isolate;
          perspective: 900px;
          background: transparent;
          border: none;
          box-shadow: none;
          cursor: default;
        }
        #software .software-light {
          position: absolute;
          width: 54%; height: 42%; left: 23%; top: 29%;
          border-radius: 50%;
          background: var(--logo-glow);
          filter: blur(25px);
          opacity: 0.36;
          transform: scale(1);
          transition: opacity 350ms ease, transform 350ms ease;
          pointer-events: none;
          z-index: 0;
        }
        #software .software-logo-inner {
          position: relative;
          z-index: 1;
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          transform: perspective(900px) translateY(0) rotateX(0deg) scale(1);
          transition: transform 380ms cubic-bezier(.2,.8,.2,1);
        }
        #software .software-logo-image {
          display: block;
          width: 79%; max-width: 156px; height: 58px;
          object-fit: contain;
          filter: drop-shadow(0 0 5px var(--logo-glow))
                  drop-shadow(0 0 10px var(--logo-soft-glow))
                  drop-shadow(0 5px 3px rgba(0,0,0,.35))
                  drop-shadow(0 9px 7px rgba(0,0,0,.20));
          transition: filter 380ms ease;
        }
        #software .software-logo-arqami { filter: brightness(1.65) drop-shadow(0 0 6px var(--logo-glow)); }
        #software .software-logo-qoyod { filter: brightness(1.65) drop-shadow(0 0 6px var(--logo-glow)); }
        #software .software-logo-daftra { filter: brightness(1.30) drop-shadow(0 0 6px var(--logo-glow)); }
        #software .software-fallback {
          font-size: 15px; font-weight: 800; letter-spacing: 1px;
          color: #F3F7FA; text-align: center;
          text-shadow: 0 0 8px var(--logo-glow), 0 4px 4px rgba(0,0,0,.3);
        }
        #software .software-logo-item:hover .software-logo-inner {
          transform: perspective(900px) translateY(-7px) rotateX(7deg) scale(1.08);
        }
        #software .software-logo-item:hover .software-logo-image {
          filter: drop-shadow(0 0 8px var(--logo-glow))
                  drop-shadow(0 0 16px var(--logo-glow))
                  drop-shadow(0 9px 5px rgba(0,0,0,.38))
                  drop-shadow(0 15px 12px rgba(0,0,0,.24));
        }
        #software .software-logo-item:hover .software-light {
          opacity: 0.78; transform: scale(1.15);
        }
        @media (max-width: 640px) {
          #software .software-logo-image { width: 85%; max-width: 126px; height: 49px; }
          #software .software-light { width: 72%; left: 14%; }
        }
        @media (prefers-reduced-motion: reduce) {
          #software .software-logo-inner,
          #software .software-logo-image,
          #software .software-light { transition: none; }
          #software .software-logo-item:hover .software-logo-inner { transform: none; }
        }
      `}</style>

      {/* Original Expertise network, unchanged speed, count, colors, side positioning */}
      <SoftwareSideNetwork />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex max-w-3xl flex-col items-start gap-1.5">
            <span className="block text-xs font-bold uppercase tracking-widest text-[#BE9852]">
              ERP &amp; SOFTWARE
            </span>
            <div>
              <h2 className="main-heading-3d text-3xl font-extrabold tracking-tight text-[#17324A] sm:text-4xl">
                ERP Systems &amp; Accounting Software
              </h2>
            </div>
            <p className="mt-1 text-sm text-[#F3F7FA]">
              Tools and systems I have worked with for accounting, reporting,
              inventory, AP/AR and financial management.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-2">
          {softwareItems.map((item) => (
            <SoftwareLogo key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
