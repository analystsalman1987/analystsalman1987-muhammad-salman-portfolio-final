import React, { useEffect, useRef, useState } from 'react';

interface SoftwareItem {
  name: string;
  logo: string;
  fallback: string;
  glow: string;
  whiteBackground?: boolean;
}

const softwareItems: SoftwareItem[] = [
  { name: 'OFIS (Powered by Oracle)', logo: '/images/software/oracle-logo.svg', fallback: 'ORACLE', glow: '255,65,65' },
  { name: 'QuickBooks', logo: '/images/software/quickbooks-logo.svg', fallback: 'QuickBooks', glow: '35,235,65' },
  { name: 'Arqami', logo: '/images/software/Arqami Logo.png', fallback: 'ARQAMI', glow: '65,135,255', whiteBackground: true },
  { name: 'Delta Financial', logo: '/images/software/delta-logo.svg', fallback: 'DELTA', glow: '255,195,30' },
  { name: 'SMACC', logo: '/images/software/smacc-logo.png', fallback: 'SMACC', glow: '35,145,255' },
  { name: 'Daftra', logo: '/images/software/Daftra logo.png', fallback: 'DAFTRA', glow: '55,155,255', whiteBackground: true },
  { name: 'Qoyod', logo: '/images/software/Qoyod logo.png', fallback: 'QOYOD', glow: '55,130,255' },
  { name: 'Peachtree', logo: '/images/software/Peachtree logo.png', fallback: 'PEACHTREE', glow: '255,190,45', whiteBackground: true },
  { name: 'Tally', logo: '/images/software/Tally logo.png', fallback: 'TALLY', glow: '255,75,100', whiteBackground: true },
  { name: 'Odoo', logo: '/images/software/odoo-logo.png', fallback: 'odoo', glow: '175,95,175' },
  { name: 'Zoho Books', logo: '/images/software/zoho-books-logo.png', fallback: 'Zoho Books', glow: '45,155,255' },
  { name: 'Wafeq', logo: '/images/software/wafeq-logo.png', fallback: 'wafeq', glow: '110,95,255' },
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

// Remove near-white pixels from opaque logo assets at runtime.
// Original files remain untouched. For pixel-perfect results, use transparent PNGs.
function removeWhiteBackground(image: HTMLImageElement): string {
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return image.src;
  ctx.drawImage(image, 0, 0);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = pixels.data;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    // Only neutral, very light colors: keep colored and dark logo artwork.
    if (min > 235 && max - min < 20) {
      data[i + 3] = Math.round(data[i + 3] * Math.max(0, (255 - min) / 20));
    }
  }
  ctx.putImageData(pixels, 0, 0);
  return canvas.toDataURL('image/png');
}

function SoftwareLogo({ item }: { item: SoftwareItem }) {
  const [logoError, setLogoError] = useState(false);
  const [processedLogo, setProcessedLogo] = useState<string | null>(null);
  return (
    <div
      className="software-logo-item group relative flex h-[88px] w-full items-center justify-center sm:h-[95px]"
      style={{
        '--logo-glow': `rgba(${item.glow},0.46)`,
        '--logo-soft-glow': `rgba(${item.glow},0.20)`,
      } as React.CSSProperties}
    >
      <div className="software-light" aria-hidden="true" />
      <div className="software-logo-inner">
        {logoError ? (
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
            className="software-logo-image"
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
          width: 62%; height: 48%; left: 19%; top: 26%;
          border-radius: 50%;
          background: var(--logo-glow);
          filter: blur(25px);
          opacity: 0.50;
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
          width: 75%; max-width: 131px; height: 49px;
          object-fit: contain;
          filter: drop-shadow(0 0 5px var(--logo-glow))
                  drop-shadow(0 0 10px var(--logo-soft-glow))
                  drop-shadow(0 5px 3px rgba(0,0,0,.35))
                  drop-shadow(0 9px 7px rgba(0,0,0,.20));
          transition: filter 380ms ease;
        }
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
          #software .software-logo-image { width: 75%; max-width: 109px; height: 42px; }
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
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
        <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-5">
          {softwareItems.map((item) => (
            <SoftwareLogo key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
