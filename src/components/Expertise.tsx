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

/*
 * EXPERTISE IMAGES
 *
 * exp-1  = Accounts Receivable & Collections
 * exp-2  = Accounts Payable & Supplier Management
 * exp-12 = Professional & Coordination Skills
 */
const expertiseImages: Record<string, string> = {
  'exp-1': '/images/accounts-receivable.webp',
  'exp-2': '/images/accounts-payable.webp',
  'exp-12': '/images/professional-coordination.jpg',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
          {items.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            const isLeftColumn = idx % 2 === 0;

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

            const imagePath = expertiseImages[item.id];
            const hasImage = Boolean(imagePath);

            return (
              <div
                key={item.id || idx}
                className={`relative ${
                  isExpanded ? 'z-[100]' : 'z-10'
                }`}
              >
                {/* ==================================================
                    MAIN CARD
                    OPEN = FULL LIGHT GREEN / TEAL THEME
                   ================================================== */}
                <div
                  className={`
                    relative z-[120]
                    border
                    transition-all duration-300

                    ${
                      isExpanded
                        ? `
                          bg-[#E6F4F1]
                          dark:bg-[#123D3A]

                          border-[#0F766E]
                          dark:border-teal-400/70

                          shadow-[0_12px_30px_rgba(15,118,110,0.20)]
                          ring-1 ring-[#0F766E]/20

                          ${
                            isLeftColumn
                              ? `
                                lg:rounded-l-xl
                                lg:rounded-r-none
                                lg:border-r-0
                              `
                              : `
                                lg:rounded-r-xl
                                lg:rounded-l-none
                                lg:border-l-0
                              `
                          }
                        `
                        : `
                          rounded-xl
                          bg-[#F4F6F8]
                          dark:bg-slate-800/40

                          border-slate-200/90
                          dark:border-slate-800

                          shadow-sm

                          hover:border-[#0F766E]/40
                          hover:bg-slate-100/70
                          dark:hover:bg-slate-800/60
                          hover:-translate-y-[1px]
                        `
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
                      cursor-pointer
                      select-none
                      group
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#0F766E]/50
                      focus-visible:ring-inset
                      touch-manipulation

                      ${
                        isExpanded && isLeftColumn
                          ? 'lg:rounded-l-xl lg:rounded-r-none'
                          : ''
                      }

                      ${
                        isExpanded && !isLeftColumn
                          ? 'lg:rounded-r-xl lg:rounded-l-none'
                          : ''
                      }

                      ${!isExpanded ? 'rounded-xl' : ''}
                    `}
                  >
                    {/* ICON + TITLE */}
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`
                          w-10 h-10
                          rounded-lg
                          flex items-center justify-center
                          shrink-0
                          transition-all duration-200

                          ${
                            isExpanded
                              ? `
                                bg-[#0F766E]
                                text-white
                                dark:bg-teal-400
                                dark:text-[#073B36]
                                shadow-[0_4px_12px_rgba(15,118,110,0.25)]
                              `
                              : `
                                bg-[#E6F4F1]
                                dark:bg-teal-950/70
                                text-[#0F766E]
                                dark:text-teal-300
                                group-hover:scale-105
                              `
                          }
                        `}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3
                        className={`
                          text-sm sm:text-base
                          font-extrabold
                          leading-snug
                          transition-colors

                          ${
                            isExpanded
                              ? `
                                text-[#075E54]
                                dark:text-teal-100
                              `
                              : `
                                text-[#0F2747]
                                dark:text-slate-100
                                group-hover:text-[#0F766E]
                                dark:group-hover:text-teal-400
                              `
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
                        rounded-md
                        text-[10px] sm:text-[11px]
                        font-bold
                        shrink-0
                        transition-all

                        ${
                          isExpanded
                            ? `
                              bg-[#0F766E]/10
                              text-[#075E54]
                              dark:bg-teal-300/10
                              dark:text-teal-100
                              border border-[#0F766E]/35
                              dark:border-teal-300/30
                            `
                            : `
                              bg-teal-500/[0.05]
                              text-[#0F766E]
                              dark:text-teal-300
                              border border-teal-500/20
                              group-hover:bg-teal-500/[0.10]
                            `
                        }
                      `}
                    >
                      {/* RIGHT COLUMN -> PANEL LEFT */}
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

                      {/* LEFT COLUMN -> PANEL RIGHT */}
                      {isLeftColumn && (
                        <span
                          className="hidden lg:inline text-[15px] leading-none font-bold"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      )}

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
                    MOBILE / TABLET DETAILS
                   ================================================== */}
                <div
                  id={`expertise-panel-${item.id}`}
                  className={`
                    lg:hidden
                    grid
                    transition-all duration-300 ease-in-out

                    ${
                      isExpanded
                        ? 'grid-rows-[1fr] opacity-100 mt-2'
                        : 'grid-rows-[0fr] opacity-0 mt-0'
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-xl

                        border
                        border-[#0F766E]/60
                        dark:border-teal-400/50

                        bg-[#EAF7F4]
                        dark:bg-[#123D3A]

                        shadow-[0_12px_30px_rgba(15,118,110,0.16)]
                      "
                    >
                      {hasImage && (
                        <div
                          className="relative h-36 w-full overflow-hidden"
                          aria-hidden="true"
                        >
                          <img
                            src={imagePath}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            loading="lazy"
                          />

                          {/* GREEN IMAGE TINT */}
                          <div className="absolute inset-0 bg-[#0F766E]/10 mix-blend-multiply dark:bg-teal-500/10" />

                          {/* IMAGE -> GREEN PANEL MERGE */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#EAF7F4]/25 to-[#EAF7F4] dark:from-transparent dark:via-[#123D3A]/30 dark:to-[#123D3A]" />
                        </div>
                      )}

                      <div className="relative z-10 p-4 sm:p-5">
                        <ul className="space-y-2.5">
                          {details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="
                                flex items-start gap-2.5
                                text-xs sm:text-sm
                                text-[#163D38]
                                dark:text-teal-50/90
                                leading-relaxed
                              "
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] dark:text-teal-300 shrink-0 mt-0.5" />

                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    DESKTOP EXPANDED PANEL

                    SAME LEVEL AS HEADING
                    FLOATS ABOVE OTHER CARDS
                    ZERO GAP / SEAMLESS JOIN
                   ================================================== */}
                <div
                  className={`
                    hidden lg:block
                    absolute top-0
                    z-[110]
                    w-[calc(100%+1.25rem)]
                    transition-all duration-300 ease-out

                    ${
                      isLeftColumn
                        ? 'left-full'
                        : 'right-full'
                    }

                    ${
                      isExpanded
                        ? `
                          opacity-100
                          visible
                          translate-x-0
                          pointer-events-auto
                        `
                        : isLeftColumn
                          ? `
                            opacity-0
                            invisible
                            -translate-x-2
                            pointer-events-none
                          `
                          : `
                            opacity-0
                            invisible
                            translate-x-2
                            pointer-events-none
                          `
                    }
                  `}
                  aria-hidden={!isExpanded}
                >
                  {/* LARGE GREEN DETAIL PANEL */}
                  <div
                    className={`
                      relative
                      min-h-[320px]
                      overflow-hidden

                      bg-[#EAF7F4]
                      dark:bg-[#123D3A]

                      shadow-[0_18px_45px_rgba(15,118,110,0.22)]
                      dark:shadow-[0_18px_45px_rgba(0,0,0,0.38)]

                      border-[#0F766E]
                      dark:border-teal-400/70

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
                        IMAGE AREA
                       ================================================== */}
                    {hasImage && (
                      <>
                        {isLeftColumn ? (
                          <>
                            {/* LEFT CARD -> IMAGE ON FAR RIGHT */}
                            <div
                              className="
                                absolute
                                inset-y-0 right-0
                                w-[58%]
                                z-0
                                pointer-events-none
                              "
                              aria-hidden="true"
                            >
                              <img
                                src={imagePath}
                                alt=""
                                className="
                                  absolute inset-0
                                  w-full h-full
                                  object-cover object-center
                                  opacity-[0.94]
                                  dark:opacity-[0.65]
                                "
                                loading="lazy"
                              />

                              {/* TEAL COLOR TINT */}
                              <div className="absolute inset-0 bg-[#0F766E]/10 mix-blend-multiply dark:bg-teal-500/10" />

                              {/* IMAGE FADES TOWARD TEXT */}
                              <div
                                className="
                                  absolute inset-0
                                  bg-gradient-to-r

                                  from-[#EAF7F4]
                                  via-[#EAF7F4]/55
                                  to-transparent

                                  dark:from-[#123D3A]
                                  dark:via-[#123D3A]/55
                                  dark:to-transparent
                                "
                              />
                            </div>

                            {/* STRONG TEXT-SIDE GREEN MERGE */}
                            <div
                              className="
                                absolute inset-0 z-[1]
                                pointer-events-none

                                bg-gradient-to-r

                                from-[#EAF7F4]
                                from-[0%]

                                via-[#EAF7F4]/95
                                via-[40%]

                                to-transparent
                                to-[74%]

                                dark:from-[#123D3A]
                                dark:via-[#123D3A]/95
                                dark:to-transparent
                              "
                              aria-hidden="true"
                            />
                          </>
                        ) : (
                          <>
                            {/* RIGHT CARD -> IMAGE ON FAR LEFT */}
                            <div
                              className="
                                absolute
                                inset-y-0 left-0
                                w-[58%]
                                z-0
                                pointer-events-none
                              "
                              aria-hidden="true"
                            >
                              <img
                                src={imagePath}
                                alt=""
                                className="
                                  absolute inset-0
                                  w-full h-full
                                  object-cover object-center
                                  opacity-[0.94]
                                  dark:opacity-[0.65]
                                "
                                loading="lazy"
                              />

                              {/* TEAL COLOR TINT */}
                              <div className="absolute inset-0 bg-[#0F766E]/10 mix-blend-multiply dark:bg-teal-500/10" />

                              {/* IMAGE FADES TOWARD TEXT */}
                              <div
                                className="
                                  absolute inset-0
                                  bg-gradient-to-l

                                  from-[#EAF7F4]
                                  via-[#EAF7F4]/55
                                  to-transparent

                                  dark:from-[#123D3A]
                                  dark:via-[#123D3A]/55
                                  dark:to-transparent
                                "
                              />
                            </div>

                            {/* STRONG TEXT-SIDE GREEN MERGE */}
                            <div
                              className="
                                absolute inset-0 z-[1]
                                pointer-events-none

                                bg-gradient-to-l

                                from-[#EAF7F4]
                                from-[0%]

                                via-[#EAF7F4]/95
                                via-[40%]

                                to-transparent
                                to-[74%]

                                dark:from-[#123D3A]
                                dark:via-[#123D3A]/95
                                dark:to-transparent
                              "
                              aria-hidden="true"
                            />
                          </>
                        )}

                        {/* TOP / BOTTOM SOFT GREEN INTEGRATION */}
                        <div
                          className="
                            absolute inset-0 z-[2]
                            pointer-events-none

                            bg-gradient-to-b

                            from-[#EAF7F4]/10
                            via-transparent
                            to-[#EAF7F4]/20

                            dark:from-[#123D3A]/10
                            dark:via-transparent
                            dark:to-[#123D3A]/20
                          "
                          aria-hidden="true"
                        />
                      </>
                    )}

                    {/* ==================================================
                        DETAILS CONTENT
                       ================================================== */}
                    <div
                      className={`
                        relative z-10
                        p-6

                        ${
                          hasImage && isLeftColumn
                            ? 'pr-[36%]'
                            : ''
                        }

                        ${
                          hasImage && !isLeftColumn
                            ? 'pl-[36%]'
                            : ''
                        }
                      `}
                    >
                      <ul className="space-y-3">
                        {details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="
                              flex items-start gap-2.5
                              text-sm
                              font-medium
                              text-[#163D38]
                              dark:text-teal-50/90
                              leading-relaxed
                            "
                          >
                            <CheckCircle2
                              className="
                                w-4 h-4
                                text-[#0F766E]
                                dark:text-teal-300
                                shrink-0 mt-0.5
                              "
                            />

                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* VERY SUBTLE GREEN GLOW */}
                    <div
                      className="
                        absolute inset-0
                        pointer-events-none
                        ring-1
                        ring-inset
                        ring-[#0F766E]/10
                        dark:ring-teal-300/10
                      "
                      aria-hidden="true"
                    />
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
