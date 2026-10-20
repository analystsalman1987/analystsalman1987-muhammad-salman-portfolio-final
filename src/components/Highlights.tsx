import {
  Award, Calculator, ArrowLeftRight, FileText, ShieldCheck,
  Layers, FileSpreadsheet, Building2, BarChart3, FileCheck,
  type LucideIcon,
} from 'lucide-react';
import { HighlightItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';
import { DEFAULT_APP_DATA } from '../data/defaultData';

interface HighlightsProps { highlights?: HighlightItem[] }

const iconMap: Record<string, LucideIcon> = {
  Award, Calculator, ArrowLeftRight, FileText, ShieldCheck,
  Layers, FileSpreadsheet, Building2, BarChart3, FileCheck,
};

export function Highlights({ highlights }: HighlightsProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.highlights;
  const items = highlights && highlights.length > 0 ? highlights : DEFAULT_APP_DATA.highlights;

  return (
    <section id="highlights" className="relative isolate overflow-hidden border-y border-white/10 py-16 sm:py-20" style={{ background: '#305879' }}>
      <style>{`
        #highlights { background: #305879 !important; }
        #highlights .hl-glass-bubble {
          position: relative; display:flex; align-items:center; justify-content:center;
          width: 116px; height:116px; border-radius:50%;
          background: radial-gradient(circle at 30% 22%,rgba(255,255,255,.40) 0%,rgba(255,255,255,.13) 17%,rgba(28,64,95,.34) 50%,rgba(7,29,54,.62) 80%);
          border:1px solid rgba(232,241,252,.58);
          box-shadow: inset -10px -12px 20px rgba(3,23,43,.55),inset 5px 8px 16px rgba(255,255,255,.20),0 10px 26px rgba(4,23,42,.30),0 0 0 6px rgba(190,152,82,.08);
          transition:transform .25s ease,box-shadow .25s ease;
        }
        #highlights .hl-glass-bubble::before {
          content:'';position:absolute;inset:7px;border-radius:50%;pointer-events:none;
          border-top:2px solid rgba(255,255,255,.56);border-left:1px solid rgba(255,255,255,.23);
          transform:rotate(-25deg);
        }
        #highlights .hl-glass-bubble::after {
          content:'';position:absolute;inset:-8px;border-radius:50%;pointer-events:none;
          border:1px solid rgba(229,199,142,.52);
          box-shadow:0 0 13px rgba(229,199,142,.14);
        }
        #highlights .hl-item:hover .hl-glass-bubble,
        #highlights .hl-item:focus-within .hl-glass-bubble {
          transform:translateY(-4px) scale(1.04);
          box-shadow:inset -10px -12px 20px rgba(3,23,43,.50),inset 5px 8px 16px rgba(255,255,255,.26),0 15px 28px rgba(4,23,42,.33),0 0 22px rgba(229,199,142,.22);
        }
        #highlights .hl-description { color:#f3f7fa !important; }
        #highlights .hl-title { color:#e5c78e !important; }
        #highlights .hl-main-heading { color:#f3f7fa; -webkit-text-fill-color:#f3f7fa; }
        #highlights .hl-main-heading:hover { color:#be9852; -webkit-text-fill-color:#be9852; }
        @media (prefers-reduced-motion: reduce) {
          #highlights .hl-glass-bubble { transition:none; }
        }
      `}</style>

      {/* Static background: do not add moving effects outside Home. */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <img src="/images/accounting_workplace_optimized.webp" alt="" loading="lazy" className="h-full w-full object-cover opacity-[0.07]" />
        <div className="absolute inset-0" style={{ background:'linear-gradient(135deg,rgba(48,88,121,.94),rgba(30,58,86,.92))' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-1.5 text-center">
          <span className="block text-xs font-bold uppercase tracking-widest text-[#BE9852]">
            {isRTL ? t.tag : 'Executive Overview'}
          </span>
          <h2 className="main-heading-3d hl-main-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            {isRTL ? t.title : 'Professional Highlights'}
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-[#F3F7FA] sm:text-sm">
            {isRTL ? t.subtitle : 'A quick, high-level overview of core accounting qualifications, regional experience, and operational strengths.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => {
            const Icon = (item.iconName && iconMap[item.iconName]) || Award;
            const arItem = t.items.find((x) => x.id === item.id) || t.items[idx];
            const title = isRTL && arItem ? arItem.title : item.title;
            const subtitle = isRTL && arItem ? arItem.subtitle : item.subtitle;
            return (
              <div key={item.id || idx} className="hl-item flex min-w-0 flex-col items-center text-center">
                <div className="hl-glass-bubble mb-6 shrink-0" aria-hidden="true">
                  <Icon className="h-11 w-11 text-[#E5C78E]" strokeWidth={1.7} />
                </div>
                <div className="w-full min-w-0 rounded-2xl border border-white/15 bg-[#1E3A56]/35 px-4 pb-5 pt-4">
                  <h3 className="hl-title text-sm font-bold leading-snug sm:text-base">{title}</h3>
                  <p className="hl-description mt-2 text-xs leading-relaxed sm:text-sm">{subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
