import { useState } from 'react';
import { 
  Award, 
  Calculator, 
  ArrowLeftRight, 
  FileText, 
  ShieldCheck, 
  Layers, 
  FileSpreadsheet, 
  Building2,
  ChevronDown,
  CheckCircle2,
  LucideIcon
} from 'lucide-react';
import { HighlightItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface HighlightsProps {
  highlights: HighlightItem[];
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  Calculator,
  ArrowLeftRight,
  FileText,
  ShieldCheck,
  Layers,
  Sheet: FileSpreadsheet,
  FileSpreadsheet,
  Building2,
};

export function Highlights({ highlights }: HighlightsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.highlights;

  if (!highlights || highlights.length === 0) {
    return (
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          {isRTL ? 'سيتم إضافة المعلومات قريباً.' : 'Information will be added soon.'}
        </div>
      </section>
    );
  }

  const toggleHighlight = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
            {isRTL ? t.tag : 'Executive Competencies'}
          </span>
          <h2 className="mt-1 text-2xl font-bold text-[#0F2747] dark:text-white sm:text-3xl tracking-tight">
            {isRTL ? t.title : 'Professional Highlights'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] dark:text-slate-400">
            {isRTL ? t.subtitle : 'Click any competency card to expand core accounting responsibilities and experience details.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
          {highlights.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Calculator;
            const isExpanded = expandedId === item.id;
            const arItem = t.items.find((x) => x.id === item.id) || t.items[idx];
            const title = isRTL && arItem ? arItem.title : item.title;
            const subtitle = isRTL && arItem ? arItem.subtitle : item.subtitle;
            const details = isRTL && arItem ? arItem.details : item.details;
            const hasDetails = Boolean(details && details.length > 0);

            return (
              <div
                key={item.id || idx}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onClick={() => toggleHighlight(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleHighlight(item.id);
                  }
                }}
                className={`group rounded-xl bg-white dark:bg-slate-900 border transition-all duration-200 cursor-pointer select-none overflow-hidden ${
                  isExpanded
                    ? 'border-[#0F766E]/60 dark:border-teal-500/60 shadow-md ring-1 ring-[#0F766E]/20'
                    : 'border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#0F766E]/50 dark:hover:border-teal-500/50'
                }`}
              >
                {/* Card Top / Header Area */}
                <div className="p-5 sm:p-5.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E6F4F1] dark:bg-teal-950/60 text-[#0F766E] dark:text-teal-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Small Expand/Collapse Indicator */}
                    <div 
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                        isExpanded
                          ? 'bg-[#0F766E] text-white shadow-2xs'
                          : 'bg-teal-500/[0.06] text-[#0F766E] dark:text-teal-300 border border-teal-500/20 group-hover:bg-teal-500/[0.12]'
                      }`}
                    >
                      <span>{isExpanded ? (isRTL ? t.collapse : 'Collapse') : (isRTL ? t.details : 'Details')}</span>
                      <ChevronDown 
                        className={`w-3 h-3 transition-transform duration-300 ease-out ${
                          isExpanded ? 'rotate-180 text-white' : 'text-[#0F766E] dark:text-teal-400'
                        }`} 
                      />
                    </div>
                  </div>

                  <div className="mt-3.5">
                    <h3 className="text-sm font-bold text-[#0F2747] dark:text-slate-100 group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1.5 leading-relaxed">
                      {subtitle}
                    </p>
                  </div>
                </div>

                {/* Expandable Detailed Responsibilities */}
                {hasDetails && (
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded 
                        ? 'grid-rows-[1fr] opacity-100 border-t border-slate-100 dark:border-slate-800 bg-[#F9FBFA] dark:bg-slate-900/60' 
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 sm:p-5 pt-3.5 space-y-2.5">
                        <span className="text-[11px] font-bold text-[#0F766E] dark:text-teal-400 tracking-wider uppercase block">
                          {isRTL ? t.scope : 'Key Responsibilities & Scope:'}
                        </span>
                        <ul className="space-y-2">
                          {details?.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-[#1F2937] dark:text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] dark:text-teal-400 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
