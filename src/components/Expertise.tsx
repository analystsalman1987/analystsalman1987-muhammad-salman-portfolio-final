import { useState, useEffect, useRef } from 'react';
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
  LucideIcon,
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
 * EXACT IMAGE PATHS FROM public/images
 */
const expertiseImages: Record<string, string> = {
  'exp-1': '/images/Accounts Receivable & Collections.png.webp',
  'exp-2': '/images/Accounts Payable & Supplier Management.png.webp',
  'exp-3': '/images/General Ledger & Reconciliation.png',
  'exp-4': '/images/Financial Reporting & Month-End Closing.png',
  'exp-5': '/images/ZATCA VAT & Tax Compliance.png',
  'exp-6': '/images/Sales & Purchase Accounting Cycle.png',
  'exp-7': '/images/warehouse inventory, stock sheets, costing documents.png',
  'exp-8': '/images/Cash & Petty Cash Management.png',
  'exp-9': '/images/ERP & Accounting Systems.png',
  'exp-10': '/images/Advanced Excel & Data Management.png',
  'exp-11': '/images/Documentation & Internal Controls.png',
  'exp-12': '/images/professional-coordination.jpg',
};

export function Expertise({ expertise }: ExpertiseProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isHoverSupported, setIsHoverSupported] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.expertise;

  const items =
    expertise && expertise.length > 0
      ? expertise
      : DEFAULT_APP_DATA.expertise;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsHoverSupported(mql.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsHoverSupported(e.matches);
    };
    mql.addEventListener?.('change', handler);
    return () => {
      mql.removeEventListener?.('change', handler);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  const handlePointerEnter = (id: string, e: React.PointerEvent) => {
    if (!isHoverSupported || e.pointerType === 'touch') return;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setExpandedId(id);
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (!isHoverSupported || e.pointerType === 'touch') return;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setExpandedId(null);
    }, 120);
  };

  const handleCardClick = (id: string, e: React.MouseEvent) => {
    // On touch/mobile devices or keyboard interaction, toggle expand
    if (!isHoverSupported || e.detail === 0) {
      toggleExpand(id);
    }
  };

  const expandedIndex = expandedId
    ? items.findIndex((x) => x.id === expandedId)
    : -1;
  const isLastRowExpanded =
    expandedIndex >= items.length - 2 && expandedIndex !== -1;
  const isSecondLastRowExpanded =
    expandedIndex >= items.length - 4 && expandedIndex < items.length - 2;

  return (
    <section
      id="expertise"
      className="
        relative
        py-20
        scroll-mt-20
        bg-white
        dark:bg-slate-900
        border-b
        border-slate-200
        dark:border-slate-800
        transition-colors
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img
          src="/images/accounting_workplace.jpg"
          alt=""
          className="
            w-full h-full
            object-cover object-center
            opacity-[0.20]
            dark:opacity-[0.14]
            contrast-105
            select-none
          "
          loading="lazy"
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-white/80
            via-white/45
            to-white/85
            dark:from-slate-900/85
            dark:via-slate-900/50
            dark:to-slate-900/85
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-start gap-1.5 max-w-3xl mb-12">
          <span
            className="
              block
              text-xs
              font-bold
              tracking-widest
              text-[#0F766E]
              dark:text-teal-400
              uppercase
            "
          >
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
              t.items.find((x) => x.id === item.id) || t.items[idx];

            const title =
              isRTL && arItem ? arItem.title : item.title;

            const details =
              (isRTL && arItem ? arItem.details : item.details) || [];

            const imagePath = expertiseImages[item.id];
            const hasImage = Boolean(imagePath);

            return (
              <div
                key={item.id || idx}
                className={`relative ${isExpanded ? 'z-[100]' : 'z-10'}`}
                onPointerEnter={(e) => handlePointerEnter(item.id, e)}
                onPointerLeave={handlePointerLeave}
              >
                {/* MAIN CARD */}
                <div
                  className={`
                    relative
                    z-[120]
                    border
                    transition-all
                    duration-300

                    ${
                      isExpanded
                        ? `
                          bg-[#F3FAF8]
                          dark:bg-[#173936]

                          border-[#A7D7CE]
                          dark:border-teal-500/45

                          shadow-[0_10px_28px_rgba(15,118,110,0.08)]

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

                          hover:border-[#A7D7CE]
                          dark:hover:border-teal-500/35

                          hover:bg-[#F8FBFA]
                          dark:hover:bg-slate-800/60

                          hover:-translate-y-[1px]
                          hover:shadow-[0_8px_22px_rgba(15,118,110,0.07)]
                        `
                    }
                  `}
                >
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`expertise-panel-${item.id}`}
                    onClick={(e) => handleCardClick(item.id, e)}
                    className={`
                      w-full
                      text-left
                      rtl:text-right

                      p-4
                      sm:p-5

                      flex
                      items-center
                      justify-between
                      gap-3

                      cursor-pointer
                      select-none
                      group

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#0F766E]/30
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

                          flex
                          items-center
                          justify-center

                          shrink-0

                          transition-all
                          duration-200

                          ${
                            isExpanded
                              ? `
                                bg-[#E7F5F1]
                                text-[#0F766E]

                                dark:bg-teal-900/40
                                dark:text-teal-300

                                shadow-sm
                              `
                              : `
                                bg-[#EAF6F3]
                                dark:bg-teal-950/60

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
                          text-sm
                          sm:text-base

                          font-bold
                          leading-snug

                          transition-colors

                          ${
                            isExpanded
                              ? `
                                text-[#24443F]
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
                        inline-flex
                        items-center
                        gap-1.5

                        px-2.5
                        py-1

                        rounded-md

                        text-[10px]
                        sm:text-[11px]

                        font-medium
                        shrink-0

                        transition-all

                        ${
                          isExpanded
                            ? `
                              bg-white/55
                              text-[#176C61]

                              dark:bg-teal-950/25
                              dark:text-teal-200

                              border
                              border-[#C1E0DA]
                              dark:border-teal-500/30
                            `
                            : `
                              bg-teal-500/[0.04]
                              text-[#0F766E]
                              dark:text-teal-300

                              border
                              border-teal-500/15

                              group-hover:bg-teal-500/[0.08]
                            `
                        }
                      `}
                    >
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
                          transition-transform
                          duration-300
                          ${isExpanded ? 'rotate-180' : ''}
                        `}
                      />
                    </div>
                  </button>
                </div>

                {/* MOBILE / TABLET DETAILS */}
                <div
                  id={`expertise-panel-${item.id}`}
                  className={`
                    lg:hidden
                    grid

                    transition-all
                    duration-300
                    ease-in-out

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
                        border-[#C1E0DA]
                        dark:border-teal-500/30

                        bg-[#F5FBF9]
                        dark:bg-[#173936]

                        shadow-[0_10px_28px_rgba(15,118,110,0.07)]
                      "
                    >
                      {hasImage && (
                        <div
                          className="relative h-44 sm:h-52 w-full overflow-hidden"
                          aria-hidden="true"
                        >
                          <img
                            src={imagePath}
                            alt=""
                            className="
                              absolute inset-0
                              w-full h-full
                              object-cover
                              object-center
                            "
                            loading="lazy"
                          />

                          <div className="absolute inset-0 bg-[#EAF6F3]/[0.03] dark:bg-teal-900/10" />

                          <div
                            className="
                              absolute inset-0

                              bg-gradient-to-b

                              from-transparent
                              via-[#F5FBF9]/5
                              to-[#F5FBF9]

                              dark:from-transparent
                              dark:via-[#173936]/20
                              dark:to-[#173936]
                            "
                          />
                        </div>
                      )}

                      <div className="relative z-10 p-4 sm:p-5">
                        <ul className="space-y-2.5">
                          {details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="
                                flex
                                items-start
                                gap-2.5

                                text-xs
                                sm:text-sm

                                text-[#294A46]
                                dark:text-slate-200

                                leading-relaxed
                              "
                            >
                              <CheckCircle2
                                className="
                                  w-3.5 h-3.5
                                  text-[#0F766E]
                                  dark:text-teal-300
                                  shrink-0
                                  mt-0.5
                                "
                              />

                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DESKTOP SIDE PANEL */}
                <div
                  className={`
                    hidden
                    lg:block

                    absolute
                    top-0

                    z-[110]

                    w-[calc(100%+1.25rem)]

                    transition-all
                    duration-300
                    ease-out

                    ${isLeftColumn ? 'left-full' : 'right-full'}

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
                  <div
                    className={`
                      relative

                      min-h-[320px]

                      overflow-hidden

                      bg-[#F5FBF9]
                      dark:bg-[#173936]

                      shadow-[0_16px_38px_rgba(15,118,110,0.09)]
                      dark:shadow-[0_18px_45px_rgba(0,0,0,0.30)]

                      border-[#A7D7CE]
                      dark:border-teal-500/40

                      ${
                        isLeftColumn
                          ? `
                            rounded-r-xl
                            rounded-l-none

                            border-y
                            border-r
                            border-l-0
                          `
                          : `
                            rounded-l-xl
                            rounded-r-none

                            border-y
                            border-l
                            border-r-0
                          `
                      }
                    `}
                  >
                    {/* IMAGE */}
                    {hasImage && (
                      <>
                        {isLeftColumn ? (
                          <>
                            {/* LEFT CARD -> IMAGE ON RIGHT */}
                            <div
                              className="
                                absolute
                                inset-y-0
                                right-0

                                w-[62%]

                                z-0
                                pointer-events-none
                                overflow-hidden
                              "
                              aria-hidden="true"
                            >
                              <img
                                src={imagePath}
                                alt=""
                                className="
                                  absolute inset-0
                                  w-full h-full
                                  object-cover
                                  object-center

                                  opacity-[0.96]
                                  dark:opacity-[0.68]
                                "
                                loading="lazy"
                              />

                              <div className="absolute inset-0 bg-[#EAF6F3]/[0.02] dark:bg-teal-900/[0.08]" />

                              {/* FADE TOWARD TEXT */}
                              <div
                                className="
                                  absolute inset-0

                                  bg-gradient-to-r

                                  from-[#F5FBF9]
                                  from-[0%]

                                  via-[#F5FBF9]/75
                                  via-[24%]

                                  to-transparent
                                  to-[65%]

                                  dark:from-[#173936]
                                  dark:via-[#173936]/80
                                  dark:to-transparent
                                "
                              />
                            </div>

                            {/* TEXT PROTECTION */}
                            <div
                              className="
                                absolute inset-0
                                z-[1]
                                pointer-events-none

                                bg-gradient-to-r

                                from-[#F5FBF9]
                                from-[0%]

                                via-[#F5FBF9]/96
                                via-[34%]

                                to-transparent
                                to-[69%]

                                dark:from-[#173936]
                                dark:via-[#173936]/95
                                dark:to-transparent
                              "
                              aria-hidden="true"
                            />
                          </>
                        ) : (
                          <>
                            {/* RIGHT CARD -> IMAGE ON RIGHT (ADJACENT TO CARD) */}
                            <div
                              className="
                                absolute
                                inset-y-0
                                right-0

                                w-[62%]

                                z-0
                                pointer-events-none
                                overflow-hidden
                              "
                              aria-hidden="true"
                            >
                              <img
                                src={imagePath}
                                alt=""
                                className="
                                  absolute inset-0
                                  w-full h-full
                                  object-cover
                                  object-center

                                  opacity-[0.96]
                                  dark:opacity-[0.68]
                                "
                                loading="lazy"
                              />

                              <div className="absolute inset-0 bg-[#EAF6F3]/[0.02] dark:bg-teal-900/[0.08]" />

                              {/* FADE TOWARD TEXT */}
                              <div
                                className="
                                  absolute inset-0

                                  bg-gradient-to-r

                                  from-[#F5FBF9]
                                  from-[0%]

                                  via-[#F5FBF9]/75
                                  via-[24%]

                                  to-transparent
                                  to-[65%]

                                  dark:from-[#173936]
                                  dark:via-[#173936]/80
                                  dark:to-transparent
                                "
                              />
                            </div>

                            {/* TEXT PROTECTION */}
                            <div
                              className="
                                absolute inset-0
                                z-[1]
                                pointer-events-none

                                bg-gradient-to-r

                                from-[#F5FBF9]
                                from-[0%]

                                via-[#F5FBF9]/96
                                via-[34%]

                                to-transparent
                                to-[69%]

                                dark:from-[#173936]
                                dark:via-[#173936]/95
                                dark:to-transparent
                              "
                              aria-hidden="true"
                            />
                          </>
                        )}

                        <div
                          className="
                            absolute inset-0
                            z-[2]
                            pointer-events-none

                            bg-gradient-to-b

                            from-white/[0.02]
                            via-transparent
                            to-[#F5FBF9]/10

                            dark:from-transparent
                            dark:via-transparent
                            dark:to-[#173936]/15
                          "
                          aria-hidden="true"
                        />
                      </>
                    )}

                    {/* DETAILS */}
                    <div
                      className={`
                        relative
                        z-10
                        p-6

                        ${
                          hasImage
                            ? 'pr-[36%]'
                            : ''
                        }
                      `}
                    >
                      <ul className="space-y-3">
                        {details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="
                              flex
                              items-start
                              gap-2.5

                              text-sm
                              font-medium

                              text-[#294A46]
                              dark:text-slate-200

                              leading-relaxed
                            "
                          >
                            <CheckCircle2
                              className="
                                w-4 h-4

                                text-[#0F766E]
                                dark:text-teal-300

                                shrink-0
                                mt-0.5
                              "
                            />

                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="
                        absolute inset-0
                        pointer-events-none

                        ring-1
                        ring-inset

                        ring-[#0F766E]/[0.04]
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

        {/* DYNAMIC DESKTOP SECTION-BOTTOM CLEARANCE (ONLY FOR LAST TWO ROWS) */}
        <div
          className={`
            hidden
            lg:block
            transition-all
            duration-300
            ease-out
            overflow-hidden
            ${
              isLastRowExpanded
                ? 'h-[320px]'
                : isSecondLastRowExpanded
                  ? 'h-[120px]'
                  : 'h-0'
            }
          `}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
