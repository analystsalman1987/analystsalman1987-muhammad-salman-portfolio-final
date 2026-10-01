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
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.expertise;

  const items =
    expertise && expertise.length > 0
      ? expertise
      : DEFAULT_APP_DATA.expertise;

  const toggleExpand = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="expertise"
      className="relative py-20 scroll-mt-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      {/* Existing Expertise background */}
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
        <div className="flex flex-col items-start gap-1.5 max-w-3xl mb-12">
          <span className="block text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
            {isRTL ? t.tag : 'Technical Capabilities'}
          </span>

          <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight">
            {isRTL ? t.title : 'Core Professional Expertise'}
          </h2>

          <p className="mt-1 text-sm text-[#64748B] dark:text-slate-400">
            {isRTL
              ? t.subtitle
              : 'Comprehensive operational workflows, accounting controls, and technical proficiencies across 12 core domains. Click any category to view details.'}
          </p>
        </div>

        {/* Expertise cards */}
        <div className="space-y-4 sm:space-y-5">
          {Array.from({ length: Math.ceil(items.length / 2) }).map(
            (_, rowIndex) => {
              const leftIndex = rowIndex * 2;
              const rightIndex = leftIndex + 1;

              const leftItem = items[leftIndex];
              const rightItem = items[rightIndex];

              const rowItems = [leftItem, rightItem].filter(
                Boolean
              ) as ExpertiseItem[];

              const expandedItem = rowItems.find(
                (item) => item.id === expandedId
              );

              const expandedIndex = expandedItem
                ? items.findIndex((item) => item.id === expandedItem.id)
                : -1;

              const expandedIsLeft =
                expandedIndex >= 0 && expandedIndex % 2 === 0;

              const expandedArItem = expandedItem
                ? t.items.find((x) => x.id === expandedItem.id) ||
                  t.items[expandedIndex]
                : undefined;

              const expandedTitle = expandedItem
                ? isRTL && expandedArItem
                  ? expandedArItem.title
                  : expandedItem.title
                : '';

              const expandedDetails =
                expandedItem
                  ? (isRTL && expandedArItem
                      ? expandedArItem.details
                      : expandedItem.details) || []
                  : [];

              const ExpandedIcon = expandedItem
                ? (expandedItem.iconName &&
                    iconMap[expandedItem.iconName]) ||
                  defaultIconById[expandedItem.id] ||
                  Calculator
                : Calculator;

              const hasCoordinationImage =
                expandedItem?.id === 'exp-12';

              return (
                <div key={rowIndex} className="relative">

                  {/* =====================================================
                      TWO CARD ROW
                     ===================================================== */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
                    {rowItems.map((item) => {
                      const idx = items.findIndex(
                        (current) => current.id === item.id
                      );

                      const isExpanded = expandedId === item.id;

                      const Icon =
                        (item.iconName && iconMap[item.iconName]) ||
                        defaultIconById[item.id] ||
                        Calculator;

                      const arItem =
                        t.items.find((x) => x.id === item.id) ||
                        t.items[idx];

                      const title =
                        isRTL && arItem
                          ? arItem.title
                          : item.title;

                      const details =
                        (isRTL && arItem
                          ? arItem.details
                          : item.details) || [];

                      return (
                        <div key={item.id || idx}>
                          {/* Main Card */}
                          <div
                            className={`relative rounded-xl border transition-all duration-200 ${
                              isExpanded
                                ? 'bg-white dark:bg-slate-800/95 border-[#0F766E]/60 dark:border-teal-500/60 shadow-[0_12px_32px_rgba(15,118,110,0.14)] ring-1 ring-[#0F766E]/20 -translate-y-[1px]'
                                : 'bg-[#F4F6F8] dark:bg-slate-800/40 border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-[#0F766E]/40 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 hover:-translate-y-[1px]'
                            }`}
                          >
                            <button
                              type="button"
                              aria-expanded={isExpanded}
                              aria-controls={`expertise-panel-${item.id}`}
                              onClick={() => toggleExpand(item.id)}
                              className="w-full text-left rtl:text-right p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]/50 focus-visible:ring-inset rounded-xl touch-manipulation"
                            >
                              <div className="flex items-center gap-3.5 min-w-0">
                                <div
                                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                                    isExpanded
                                      ? 'bg-[#0F766E] text-white dark:bg-teal-500 dark:text-slate-950 shadow-sm'
                                      : 'bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-300 group-hover:scale-105'
                                  }`}
                                >
                                  <Icon className="w-5 h-5" />
                                </div>

                                <h3
                                  className={`text-sm sm:text-base font-bold transition-colors leading-snug ${
                                    isExpanded
                                      ? 'text-[#0F766E] dark:text-teal-300'
                                      : 'text-[#0F2747] dark:text-slate-100 group-hover:text-[#0F766E] dark:group-hover:text-teal-400'
                                  }`}
                                >
                                  {title}
                                </h3>
                              </div>

                              <div
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-medium shrink-0 transition-all ${
                                  isExpanded
                                    ? 'bg-teal-600/[0.10] text-[#0F766E] dark:text-teal-300 border border-teal-500/40'
                                    : 'bg-teal-500/[0.05] text-[#0F766E] dark:text-teal-300 border border-teal-500/20 group-hover:bg-teal-500/[0.10]'
                                }`}
                              >
                                <span>
                                  {isExpanded
                                    ? isRTL
                                      ? t.collapse
                                      : 'Collapse'
                                    : isRTL
                                      ? t.details
                                      : 'Details'}
                                </span>

                                <ChevronDown
                                  className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                                    isExpanded
                                      ? 'rotate-180 text-[#0F766E] dark:text-teal-300'
                                      : 'text-[#0F766E] dark:text-teal-400'
                                  }`}
                                />
                              </div>
                            </button>
                          </div>

                          {/* =============================================
                              MOBILE DETAIL
                              Mobile stays below its own card.
                             ============================================= */}
                          <div
                            id={`expertise-panel-${item.id}`}
                            className={`lg:hidden grid transition-all duration-300 ease-in-out ${
                              isExpanded
                                ? 'grid-rows-[1fr] opacity-100 mt-2'
                                : 'grid-rows-[0fr] opacity-0 mt-0'
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="rounded-xl border border-[#0F766E]/25 dark:border-teal-500/30 bg-white/95 dark:bg-slate-900/95 shadow-lg p-4 sm:p-5">
                                <ul className="space-y-2.5">
                                  {details.map((detail, dIdx) => (
                                    <li
                                      key={dIdx}
                                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2937] dark:text-slate-300 leading-relaxed"
                                    >
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

                  {/* =====================================================
                      DESKTOP EXPANDED DETAIL

                      IMPORTANT:
                      This panel is NOT absolute.

                      Therefore its actual height becomes part of the
                      Expertise section and pushes the following rows /
                      Work Experience downward.

                      This permanently fixes the overlap problem.
                     ===================================================== */}
                  <div
                    className={`hidden lg:grid transition-all duration-300 ease-in-out ${
                      expandedItem
                        ? 'grid-rows-[1fr] opacity-100 mt-4'
                        : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      {expandedItem && (
                        <div
                          className={`grid grid-cols-2 gap-5 ${
                            expandedIsLeft
                              ? ''
                              : ''
                          }`}
                        >
                          {/* LEFT CARD SELECTED:
                              Keep blank alignment on left and panel right */}
                          {expandedIsLeft && (
                            <div aria-hidden="true" />
                          )}

                          {/* DETAIL PANEL */}
                          <div
                            className={`relative min-h-[250px] overflow-hidden rounded-xl border border-[#0F766E]/35 dark:border-teal-500/35 bg-white dark:bg-slate-900 shadow-[0_18px_45px_rgba(15,39,71,0.14)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.30)] ${
                              expandedIsLeft
                                ? 'col-start-2'
                                : 'col-start-1'
                            }`}
                          >
                            {/* =================================================
                                TEST IMAGE ONLY:
                                Professional & Coordination Skills

                                Image is strongest on RIGHT.
                                It gradually fades toward the LEFT/text.
                               ================================================= */}
                            {hasCoordinationImage && (
                              <>
                                <div
                                  className="absolute inset-y-0 right-0 w-[48%] pointer-events-none z-0"
                                  aria-hidden="true"
                                >
                                  <img
                                    src="/images/expertise/professional-coordination.jpg"
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.82] dark:opacity-[0.48]"
                                    loading="lazy"
                                  />

                                  {/* Image fades toward text */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent dark:from-slate-900 dark:via-slate-900/60 dark:to-transparent" />

                                  {/* Soft top/bottom integration */}
                                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/15 dark:from-slate-900/15 dark:via-transparent dark:to-slate-900/20" />
                                </div>

                                {/* Main text-side fade */}
                                <div
                                  className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-white via-white/85 to-transparent dark:from-slate-900 dark:via-slate-900/88 dark:to-transparent"
                                  aria-hidden="true"
                                />
                              </>
                            )}

                            {/* PANEL CONTENT */}
                            <div
                              className={`relative z-10 p-5 ${
                                hasCoordinationImage
                                  ? 'pr-[34%]'
                                  : ''
                              }`}
                            >
                              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-700/70">
                                <div className="w-9 h-9 rounded-lg bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-300 flex items-center justify-center shrink-0">
                                  <ExpandedIcon className="w-[18px] h-[18px]" />
                                </div>

                                <h4 className="text-sm font-extrabold text-[#0F2747] dark:text-slate-100 leading-snug">
                                  {expandedTitle}
                                </h4>
                              </div>

                              <ul className="space-y-2.5">
                                {expandedDetails.map(
                                  (detail, dIdx) => (
                                    <li
                                      key={dIdx}
                                      className="flex items-start gap-2.5 text-sm text-[#1F2937] dark:text-slate-300 leading-relaxed"
                                    >
                                      <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-teal-400 shrink-0 mt-0.5" />

                                      <span>{detail}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            {/* Subtle accent line */}
                            <div
                              className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-[#0F766E]/60 dark:bg-teal-400/50"
                              aria-hidden="true"
                            />
                          </div>

                          {/* RIGHT CARD SELECTED:
                              panel is on left, blank alignment on right */}
                          {!expandedIsLeft && (
                            <div aria-hidden="true" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
