import { useState } from 'react';
import { 
  ArrowLeftRight, 
  Receipt, 
  Calculator, 
  BarChart3, 
  ShieldCheck, 
  TrendingUp, 
  Package, 
  Coins, 
  Layers, 
  FileSpreadsheet, 
  FileText, 
  Building2,
  ChevronDown,
  CheckCircle2,
  Briefcase,
  LucideIcon
} from 'lucide-react';
import { ExpertiseItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';
import { DEFAULT_APP_DATA } from '../data/defaultData';

interface ExpertiseProps {
  expertise?: ExpertiseItem[];
}

const iconMap: Record<string, LucideIcon> = {
  ArrowLeftRight,
  Receipt,
  Calculator,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Package,
  Coins,
  Layers,
  FileSpreadsheet,
  FileText,
  Building2,
};

const defaultIconById: Record<string, LucideIcon> = {
  'exp-1': ArrowLeftRight,
  'exp-2': Receipt,
  'exp-3': Calculator,
  'exp-4': BarChart3,
  'exp-5': ShieldCheck,
  'exp-6': TrendingUp,
  'exp-7': Package,
  'exp-8': Coins,
  'exp-9': Layers,
  'exp-10': FileSpreadsheet,
  'exp-11': FileText,
  'exp-12': Building2,
};

export function Expertise({ expertise }: ExpertiseProps) {
  // All cards collapsed by default
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.expertise;

  const items = (expertise && expertise.length > 0) ? expertise : DEFAULT_APP_DATA.expertise;

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allExpanded = items.length > 0 && expandedIds.size === items.length;

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(items.map((item) => item.id)));
    }
  };

  return (
    <section 
      id="expertise" 
      className="relative py-20 scroll-mt-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      {/* Subtle Professional Accounting & Operations Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img 
          src="/images/accounting_workplace.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.20] dark:opacity-[0.14] filter contrast-105 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/45 to-white/85 dark:from-slate-900/85 dark:via-slate-900/50 dark:to-slate-900/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col items-start gap-1.5 max-w-3xl">
            <span className="block text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
              {isRTL ? t.tag : 'Technical Capabilities'}
            </span>
            <div>
              <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight">
                {isRTL ? t.title : 'Core Professional Expertise'}
              </h2>
            </div>
            <p className="mt-1 text-sm text-[#64748B] dark:text-slate-400">
              {isRTL ? t.subtitle : 'Comprehensive operational workflows, accounting controls, and technical proficiencies across 12 core domains. Click any category to expand details.'}
            </p>
          </div>

          {/* Quick Expand / Collapse All Toggle Button */}
          <button
            type="button"
            onClick={toggleAll}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#1F2937] dark:text-slate-300 bg-[#F4F6F8] hover:bg-[#E6F4F1] dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer select-none shrink-0"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#0F766E] dark:text-teal-400" />
            <span>{allExpanded ? (isRTL ? t.collapseAll : 'Collapse All') : (isRTL ? t.expandAll : 'Expand All')}</span>
          </button>
        </div>

        {/* 12 Expandable Categories in 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
          {items.map((item, idx) => {
            const isExpanded = expandedIds.has(item.id);
            const Icon = (item.iconName && iconMap[item.iconName]) || defaultIconById[item.id] || Calculator;
            const arItem = t.items.find((x) => x.id === item.id) || t.items[idx];
            const title = isRTL && arItem ? arItem.title : item.title;
            const details = (isRTL && arItem ? arItem.details : item.details) || [];

            return (
              <div
                key={item.id || idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-white dark:bg-slate-800/80 border-[#0F766E]/50 dark:border-teal-500/50 shadow-sm ring-1 ring-[#0F766E]/20'
                    : 'bg-[#F4F6F8] dark:bg-slate-800/40 border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-[#0F766E]/40 hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                {/* Clickable Header Button / Summary Area */}
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left rtl:text-right p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none group focus:outline-hidden touch-manipulation"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0F2747] dark:text-slate-100 group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors leading-snug">
                      {title}
                    </h3>
                  </div>

                  {/* Expand / Collapse Chevron Indicator */}
                  <div 
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-medium shrink-0 transition-all ${
                      isExpanded
                        ? 'bg-teal-600/[0.08] text-[#0F766E] dark:text-teal-300 border border-teal-500/30'
                        : 'bg-teal-500/[0.05] text-[#0F766E] dark:text-teal-300 border border-teal-500/20 group-hover:bg-teal-500/[0.10]'
                    }`}
                  >
                    <span>{isExpanded ? (isRTL ? t.collapse : 'Collapse') : (isRTL ? t.details : 'Details')}</span>
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                        isExpanded ? 'rotate-180 text-[#0F766E] dark:text-teal-300' : 'text-[#0F766E] dark:text-teal-400'
                      }`} 
                    />
                  </div>
                </button>

                {/* Expandable Detailed Capabilities Content */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded 
                      ? 'grid-rows-[1fr] opacity-100 border-t border-slate-200/80 dark:border-slate-700/60 bg-white dark:bg-slate-900/50' 
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-4 sm:p-5 pt-3.5 space-y-2.5">
                      <ul className="space-y-2">
                        {details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2937] dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] dark:text-teal-400 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
