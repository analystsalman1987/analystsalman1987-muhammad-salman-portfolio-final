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

  const expandedIndex = expandedId
    ? items.findIndex((item) => item.id === expandedId)
    : -1;

  const lastRowStartIndex =
    Math.floor((items.length - 1) / 2) * 2;

  const isLastRowExpanded =
    expandedIndex >= lastRowStartIndex &&
    expandedIndex !== -1;

  return (
    <section
      id="expertise"
      className="relative py-20 scroll-mt-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      {/* SECTION BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img
          src="/images/accounting_workplace.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.20] dark:opacity-[0.14] contrast-105 select-none"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/45 to-white/85 dark:from-slate-900/85 dark:via-slate-900/50 dark:to-slate-900/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
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

        {/* EXPERTISE GRID */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start transition-[padding] duration-300 ${
            isLastRowExpanded ? 'lg:pb-[430px]' : 'lg:pb-0'
          }`}
        >
          {items.map((item, idx) => {
            const isExpanded = expandedId === item.id;

            const Icon =
              (item.iconName && iconMap[item.iconName]) ||
              defaultIconById[item.id] ||
              Calculator;

            const arItem =
              t.items.find((x) => x.id === item.id) ||
              t.items[idx];

            const title =
              isRTL && arItem ? arItem.title : item.title;

            const details =
              (isRTL && arItem ? arItem.details : item.details) || [];

            const isLeftColumn = idx % 2 === 0;

            /*
             * Uploaded image:
             * Professional & Coordination Skills only
             */
            const hasCoordinationImage = item.id === 'exp-12';

            return (
              <div
                key={item.id || idx}
                className="relative"
              >
                {/* ==================================================
                    SMALL MAIN CARD

                    IMPORTANT:
                    When expanded, the side facing the large panel
                    loses its radius + border.

                    This removes the visible JOIN completely.
                   ================================================== */}
                <div
                  className={`
                    relative z-[60]
                    border
                    transition-all duration-200

                    ${
                      isExpanded
                        ? `
                          bg-white dark:bg-slate-800/95
                          border-[#0F766E]/60 dark:border-teal-500/60
                          shadow-[0_10px_28px_rgba(15,118,110,0.14)]
                          ring-1 ring-[#0F766E]/20

                          ${
                            isLeftColumn
                              ? 'lg:rounded-l-xl lg:rounded-r-none lg:border-r-0'
                              : 'lg:rounded-r-xl lg:rounded-l-none lg:border-l-0'
                          }
                        `
                        : `
                          rounded-xl
                          bg-[#F4F6F8] dark:bg-slate-800/40
                          border-slate-200/90 dark:border-slate-800
                          shadow-sm
                          hover:border-[#0F766E]/40
                          hover:bg-slate-100/70
                          dark:hover:bg-slate-800/60
                          hover:-translate-y-[1px]
                        `
                    }

                    ${!isExpanded ? 'rounded-xl' : 'rounded-xl lg:rounded-none'}
                    ${
                      isExpanded && isLeftColumn
                        ? 'lg:rounded-l-xl'
                        : ''
                    }
                    ${
                      isExpanded && !isLeftColumn
                        ? 'lg:rounded-r-xl'
                        : ''
                    }
                  `}
                >
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`expertise-panel-${item.id}`}
                    onClick={() => toggleExpand(item.id)}
                    className={`
                      w-full
                      text-left rtl:text-right
                      p-4 sm:p-5
                      flex items-center justify-between gap-3
                      cursor-pointer select-none group
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#0F766E]/50
                      focus-visible:ring-inset
                      touch-manipulation

                      ${
                        isExpanded && isLeftColumn
                          ? 'rounded-l-xl rounded-r-none'
                          : ''
                      }

                      ${
                        isExpanded && !isLeftColumn
                          ? 'rounded-r-xl rounded-l-none'
                          : ''
                      }

                      ${!isExpanded ? 'rounded-xl' : ''}
                    `}
                  >
                    {/* ICON + TITLE */}
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`
                          w-10 h-10 rounded-lg
                          flex items-center justify-center shrink-0
                          transition-all duration-200

                          ${
                            isExpanded
                              ? 'bg-[#0F766E] text-white dark:bg-teal-500 dark:text-slate-950 shadow-sm'
                              : 'bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-300 group-hover:scale-105'
                          }
                        `}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3
                        className={`
                          text-sm sm:text-base
                          font-bold
                          transition-colors
                          leading-snug

                          ${
                            isExpanded
                              ? 'text-[#0F766E] dark:text-teal-300'
                              : 'text-[#0F2747] dark:text-slate-100 group-hover:text-[#0F766E] dark:group-hover:text-teal-400'
                          }
                        `}
                      >
                        {title}
                      </h3>
                    </div>

                    {/* DETAILS / COLLAPSE */}
                    <div
                      className={`
                        inline-flex items-center gap-1.5
                        px-2.5 py-1
                        rounded
                        text-[10px] sm:text-[11px]
                        font-medium shrink-0
                        transition-all

                        ${
                          isExpanded
                            ? 'bg-teal-600/[0.10] text-[#0F766E] dark:text-teal-300 border border-teal-500/40'
                            : 'bg-teal-500/[0.05] text-[#0F766E] dark:text-teal-300 border border-teal-500/20 group-hover:bg-teal-500/[0.10]'
                        }
                      `}
                    >
                      {/* RIGHT COLUMN */}
                      {!isLeftColumn && (
                        <span
                          className="hidden lg:inline text-[15px] leading-none font-bold"
                          aria-hidden="true"
                        >
                          ←
                        </span>
                      )}

                      <span>
                        {isExpanded
                          ? isRTL
                            ? t.collapse
                            : 'Collapse'
                          : isRTL
                            ? t.details
                            : 'Details'}
                      </span>

                      {/* LEFT COLUMN */}
                      {isLeftColumn && (
                        <span
                          className="hidden lg:inline text-[15px] leading-none font-bold"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      )}

                      {/* MOBILE */}
                      <ChevronDown
                        className={`
                          lg:hidden
                          w-3.5 h-3.5
                          transition-transform duration-300
                          ${isExpanded ? 'rotate-180' : ''}
                        `}
                      />
                    </div>
                  </button>
                </div>

                {/* ==================================================
                    MOBILE / TABLET
                   ================================================== */}
                <div
                  id={`expertise-panel-${item.id}`}
                  className={`
                    lg:hidden grid
                    transition-all duration-300 ease-in-out

                    ${
                      isExpanded
                        ? 'grid-rows-[1fr] opacity-100 mt-2'
                        : 'grid-rows-[0fr] opacity-0 mt-0'
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-xl border border-[#0F766E]/30 dark:border-teal-500/30 bg-white/95 dark:bg-slate-900/95 shadow-lg p-4 sm:p-5">
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

                {/* ==================================================
                    DESKTOP LARGE PANEL

                    KEY FIX:
                    There is NO GAP.

                    Left card:
                    panel begins exactly at 100% of card width.

                    Right card:
                    panel ends exactly at 100% of card width.

                    Inner borders/radii are removed.
                    Therefore small + large area appears as ONE piece.
                   ================================================== */}
                <div
                  className={`
                    hidden lg:block
                    absolute top-0
                    z-50
                    w-[calc(100%+1.25rem)]
                    transition-all duration-300 ease-out

                    ${
                      isLeftColumn
                        ? 'left-full'
                        : 'right-full'
                    }

                    ${
                      isExpanded
                        ? 'opacity-100 visible translate-x-0 pointer-events-auto'
                        : isLeftColumn
                          ? 'opacity-0 invisible -translate-x-2 pointer-events-none'
                          : 'opacity-0 invisible translate-x-2 pointer-events-none'
                    }
                  `}
                  aria-hidden={!isExpanded}
                >
                  <div
                    className={`
                      relative
                      min-h-[320px]
                      overflow-hidden
                      bg-white dark:bg-slate-900

                      shadow-[0_18px_45px_rgba(15,39,71,0.18)]
                      dark:shadow-[0_18px_45px_rgba(0,0,0,0.38)]

                      border-[#0F766E]/60
                      dark:border-teal-500/60

                      ${
                        isLeftColumn
                          ? `
                            rounded-r-xl
                            rounded-l-none
                            border-y border-r
                            border-l-0
                          `
                          : `
                            rounded-l-xl
                            rounded-r-none
                            border-y border-l
                            border-r-0
                          `
                      }
                    `}
                  >
                    {/* ==================================================
                        PROFESSIONAL & COORDINATION IMAGE
                       ================================================== */}
                    {hasCoordinationImage && (
                      <>
                        <div
                          className="absolute inset-y-0 right-0 w-[62%] z-0 pointer-events-none"
                          aria-hidden="true"
                        >
                          <img
                            src="/images/expertise/professional-coordination.jpg"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.96] dark:opacity-[0.68]"
                            loading="lazy"
                          />

                          {/* LEFT FADE */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent dark:from-slate-900 dark:via-slate-900/38 dark:to-transparent" />

                          {/* TOP / BOTTOM SOFT BLEND */}
                          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/10 dark:from-slate-900/10 dark:via-transparent dark:to-slate-900/15" />
                        </div>

                        {/* LONG TEXT-SIDE MERGE */}
                        <div
                          className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-white from-[0%] via-white/95 via-[38%] to-transparent to-[74%] dark:from-slate-900 dark:via-slate-900/95 dark:to-transparent"
                          aria-hidden="true"
                        />
                      </>
                    )}

                    {/* ==================================================
                        DETAILS
                       ================================================== */}
                    <div
                      className={`
                        relative z-10 p-6

                        ${
                          hasCoordinationImage
                            ? 'pr-[38%]'
                            : ''
                        }
                      `}
                    >
                      <ul className="space-y-3">
                        {details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-sm text-[#1F2937] dark:text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-teal-400 shrink-0 mt-0.5" />

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
