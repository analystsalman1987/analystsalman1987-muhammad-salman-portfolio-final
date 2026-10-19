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
  LucideIcon,
} from 'lucide-react';

import { ExpertiseItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';
import { DEFAULT_APP_DATA } from '../data/defaultData';

interface ExpertiseProps {
  expertise?: ExpertiseItem[];
}

interface ExpertiseGroup {
  id: string;
  enTitle: string;
  arTitle: string;
  itemIds: string[];
}

const GROUPS: ExpertiseGroup[] = [
  {
    id: 'accounting-reporting',
    enTitle: 'Accounting & Reporting',
    arTitle: 'المحاسبة والتقارير المالية',
    itemIds: ['exp-1', 'exp-2', 'exp-3', 'exp-4'],
  },
  {
    id: 'trade-compliance',
    enTitle: 'Trade & Compliance',
    arTitle: 'التجارة والامتثال الضريبي',
    itemIds: ['exp-lc', 'exp-5', 'exp-6', 'exp-7'],
  },
  {
    id: 'systems-controls',
    enTitle: 'Systems & Controls',
    arTitle: 'الأنظمة والرقابة الداخلية',
    itemIds: ['exp-8', 'exp-9', 'exp-10', 'exp-11'],
  },
];

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
  'exp-lc': FileText,
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
  'exp-lc': '/images/professional-coordination.jpg',
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
  // All categories collapsed initially; only one open at a time
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
      className="
        relative
        py-20
        scroll-mt-20
        bg-white
        dark:bg-[#061522]
        border-b
        border-slate-200
        dark:border-slate-800
        transition-colors
        overflow-hidden
      "
    >
      {/* LOCAL BACKDROP: Reduces visibility of decorative particles/lines strictly behind this section */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-white/95 dark:bg-[#061522]/95 backdrop-blur-[2px]"
        aria-hidden="true"
      />

      {/* BACKGROUND IMAGE ACCENT */}
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
            opacity-[0.14]
            dark:opacity-[0.07]
            contrast-105
            select-none
          "
          loading="lazy"
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-white/90
            via-white/70
            to-white/90
            dark:from-[#061522]/90
            dark:via-[#061522]/75
            dark:to-[#061522]/90
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER (Main section title preserved) */}
        <div className="flex flex-col items-start gap-1.5 max-w-3xl mb-12">
          <span
            className="
              block
              text-xs
              font-bold
              tracking-widest
              text-[#D8B56A]
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

        {/* 3 GROUPED CATEGORIES */}
        <div className="space-y-10 sm:space-y-12">
          {GROUPS.map((group) => {
            const groupItems = group.itemIds
              .map((id) => items.find((x) => x.id === id))
              .filter((x): x is ExpertiseItem => Boolean(x));

            const expandedInGroupIdx = groupItems.findIndex((x) => x.id === expandedId);
            const hasExpanded = expandedInGroupIdx !== -1;
            const isRow2Expanded = expandedInGroupIdx >= 2;

            return (
              <div
                key={group.id}
                className={`transition-all duration-300 ${
                  isRow2Expanded
                    ? 'lg:pb-[260px]'
                    : hasExpanded
                      ? 'lg:pb-[140px]'
                      : ''
                }`}
              >
                {/* SUBTLE MUTED-GOLD GROUP LABEL */}
                <div className="flex items-center gap-2.5 mb-4 pt-1">
                  <span className="w-2 h-2 rounded-full bg-[#D8B56A] shadow-xs shadow-[#D8B56A]/40 shrink-0" />
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D8B56A] shrink-0">
                    {isRTL ? group.arTitle : group.enTitle}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#D8B56A]/35 via-[#D8B56A]/15 to-transparent rtl:bg-gradient-to-l" />
                </div>

                {/* 2-COLUMN GRID ON DESKTOP, 1-COLUMN ON MOBILE (4 cards per group) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
                  {groupItems.map((item, idx) => {
                    const isExpanded = expandedId === item.id;
                    const isLeftColumn = idx % 2 === 0;
                    const Icon =
                      (item.iconName && iconMap[item.iconName]) ||
                      defaultIconById[item.id] ||
                      Calculator;

                    const arItem = t.items.find((x) => x.id === item.id);
                    const title = isRTL && arItem ? arItem.title : item.title;
                    const details = (isRTL && arItem ? arItem.details : item.details) || [];
                    const imagePath = expertiseImages[item.id];
                    const hasImage = Boolean(imagePath);

                    return (
                      <div
                        key={item.id}
                        className={`relative ${isExpanded ? 'z-[100]' : 'z-10'}`}
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
                                  bg-[#F8FBFA]
                                  dark:bg-[#071927]

                                  border-[#D8B56A]/60
                                  dark:border-[#D8B56A]/50
                                  ring-1
                                  ring-[#D8B56A]/20
                                  dark:ring-[#D8B56A]/25

                                  shadow-[0_10px_28px_rgba(216,181,106,0.12)]
                                  dark:shadow-[0_12px_32px_rgba(0,0,0,0.45)]

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
                                  dark:bg-[#071724]/95

                                  border-slate-200/90
                                  dark:border-slate-800/80

                                  shadow-sm

                                  hover:border-[#D8B56A]/40
                                  dark:hover:border-[#D8B56A]/40

                                  hover:bg-[#F8FBFA]
                                  dark:hover:bg-[#0A2033]

                                  hover:-translate-y-[1px]
                                  hover:shadow-[0_8px_22px_rgba(216,181,106,0.07)]
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
                              focus-visible:ring-[#D8B56A]/40
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
                                        bg-[#D8B56A]/20
                                        text-[#D8B56A]

                                        dark:bg-[#D8B56A]/25
                                        dark:text-[#F3DB96]

                                        shadow-sm
                                      `
                                      : `
                                        bg-[#D8B56A]/10
                                        dark:bg-[#132E43]

                                        text-[#D8B56A]
                                        dark:text-[#D8B56A]

                                        group-hover:scale-105
                                        group-hover:bg-[#D8B56A]/15
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

                                  font-semibold
                                  leading-snug

                                  transition-colors

                                  ${
                                    isExpanded
                                      ? `
                                        text-[#C2933A]
                                        dark:text-[#E8CA83]
                                      `
                                      : `
                                        text-[#0F2747]
                                        dark:text-[#DCE4EB]

                                        group-hover:text-[#D8B56A]
                                        dark:group-hover:text-[#F3DB96]
                                      `
                                  }
                                `}
                              >
                                {title}
                              </h3>
                            </div>

                            {/* DETAILS / COLLAPSE BUTTON */}
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
                                      bg-white/70
                                      text-[#0F766E]

                                      dark:bg-teal-950/40
                                      dark:text-teal-200

                                      border
                                      border-[#A7D7CE]
                                      dark:border-teal-500/40
                                    `
                                    : `
                                      bg-teal-500/[0.05]
                                      text-[#0F766E]
                                      dark:text-teal-300

                                      border
                                      border-teal-500/20

                                      group-hover:bg-teal-500/[0.1]
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
                                : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
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
                                border-[#D8B56A]/40
                                dark:border-[#D8B56A]/40

                                bg-[#F5FBF9]
                                dark:bg-[#071927]

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
                                      dark:via-[#071927]/20
                                      dark:to-[#071927]
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
                                          text-[#D8B56A]
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
                              dark:bg-[#071927]

                              shadow-[0_16px_38px_rgba(15,118,110,0.09)]
                              dark:shadow-[0_18px_45px_rgba(0,0,0,0.35)]

                              border-[#D8B56A]/50
                              dark:border-[#D8B56A]/40

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

                                          dark:from-[#071927]
                                          dark:via-[#071927]/80
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

                                        dark:from-[#071927]
                                        dark:via-[#071927]/95
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

                                          dark:from-[#071927]
                                          dark:via-[#071927]/80
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

                                        dark:from-[#071927]
                                        dark:via-[#071927]/95
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
                                    dark:to-[#071927]/15
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

                                ${hasImage ? 'pr-[36%]' : ''}
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

                                        text-[#D8B56A]

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

                                ring-[#0F766E]/[0.06]
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
