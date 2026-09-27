import { 
  Award, 
  Calculator, 
  ArrowLeftRight, 
  FileText, 
  ShieldCheck, 
  Layers, 
  FileSpreadsheet, 
  Building2,
  BarChart3,
  FileCheck,
  LucideIcon
} from 'lucide-react';
import { HighlightItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';
import { DEFAULT_APP_DATA } from '../data/defaultData';

interface HighlightsProps {
  highlights?: HighlightItem[];
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  Calculator,
  ArrowLeftRight,
  FileText,
  ShieldCheck,
  Layers,
  FileSpreadsheet,
  Building2,
  BarChart3,
  FileCheck,
};

export function Highlights({ highlights }: HighlightsProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.highlights;

  const items = (highlights && highlights.length > 0) ? highlights : DEFAULT_APP_DATA.highlights;

  return (
    <section className="relative py-16 bg-[#F4F6F8] dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 transition-colors overflow-hidden">
      {/* Subtle Professional Accounting & Spreadsheet Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img 
          src="/images/accounting_workplace.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.25] dark:opacity-[0.18] filter contrast-105 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F6F8]/75 via-[#F4F6F8]/40 to-[#F4F6F8]/80 dark:from-slate-900/80 dark:via-slate-900/45 dark:to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
            {isRTL ? t.tag : 'Executive Overview'}
          </span>
          <h2 className="company-3d-text mt-1 text-2xl font-bold text-[#0F2747] dark:text-white sm:text-3xl tracking-tight">
            {isRTL ? t.title : 'Professional Highlights'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] dark:text-slate-400">
            {isRTL ? t.subtitle : 'A quick, high-level overview of core accounting qualifications, regional experience, and operational strengths.'}
          </p>
        </div>

        {/* 8 Concise Highlight Cards Grid (Easy for recruiters to scan) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((item, idx) => {
            const Icon = (item.iconName && iconMap[item.iconName]) || Award;
            const arItem = t.items.find((x) => x.id === item.id) || t.items[idx];
            const title = isRTL && arItem ? arItem.title : item.title;
            const subtitle = isRTL && arItem ? arItem.subtitle : item.subtitle;

            return (
              <div
                key={item.id || idx}
                className="group rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs hover:border-[#0F766E]/50 dark:hover:border-teal-500/50 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#E6F4F1] dark:bg-teal-950/60 text-[#0F766E] dark:text-teal-300 flex items-center justify-center shrink-0 mb-3.5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-[#0F2747] dark:text-slate-100 group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs text-[#64748B] dark:text-slate-400 mt-2 leading-relaxed">
                    {subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
