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
  // Desktop hover opens one directional panel; touch/keyboard retain button access.
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.expertise;

  const items =
    expertise && expertise.length > 0
      ? expertise
      : DEFAULT_APP_DATA.expertise;

  const supportsDesktopHover = () =>
    window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)').matches;

  const toggleExpand = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="expertise"
      className="misty-portfolio 
        relative
        py-20
        scroll-mt-20
        bg-[#305879]
        border-b
        border-[#C5D5E2]
        transition-colors
        overflow-hidden
      "
      style={{ backgroundColor: '#305879' }}
    >
      {/* LOCAL BACKDROP */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-[#305879]/85 backdrop-blur-[2px]"
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
            opacity-[0.12]
            contrast-105
            select-none
          "
          loading="lazy"
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#305879]/95
            via-[#305879]/90
            to-[#305879]/95
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
              text-[#BE9852]
              uppercase
            "
          >
            {isRTL ? t.tag : 'Technical Capabilities'}
          </span>

          <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight text-[#F3F7FA]">
            {isRTL ? t.title : 'Core Professional Expertise'}
          </h2>

          <p className="mt-1 text-sm text-[#F3F7FA]">
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
                  <span className="w-2 h-2 rounded-full bg-[#BE9852] shadow-xs shadow-[#BE9852]/40 shrink-0" />
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#17324A] shrink-0">
                    {isRTL ? group.arTitle : group.enTitle}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#BE9852]/40 via-[#BE9852]/15 to-transparent rtl:bg-gradient-to-l" />
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
                        onPointerEnter={(event) => {
                          if (event.pointerType === 'mouse' && supportsDesktopHover()) {
                            setExpandedId(item.id);
                          }
                        }}
                        onPointerLeave={(event) => {
                          if (event.pointerType === 'mouse' && supportsDesktopHover()) {
                            setExpandedId((current) => current === item.id ? null : current);
                          }
                        }}
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
                                  bg-[#254866]
                                  border-[#BE9852]/60
                                  ring-1
                                  ring-[#BE9852]/25
                                  shadow-md

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
                                  bg-[#254866]
                                  border-[#406781]
                                  shadow-xs

                                  hover:border-[#BE9852]/60
                                  hover:bg-[#2D5574]
                                  hover:-translate-y-[1px]
                                  hover:shadow-md
                                `
                            }
                          `}
                        >
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-controls={`expertise-panel-${item.id}`}
                            onClick={(event) => {
                              if (event.detail > 0 && supportsDesktopHover()) {
                                setExpandedId(item.id);
                              } else {
                                toggleExpand(item.id);
                              }
                            }}
                            onKeyDown={(event) => {
                              if (event.key === 'Escape') setExpandedId(null);
                            }}
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
                                        bg-[#BE9852]/25
                                        text-[#BE9852]
                                        border
                                        border-[#BE9852]/40
                                        shadow-xs
                                      `
                                      : `
                                        bg-[#BE9852]/15
                                        text-[#BE9852]
                                        border
                                        border-[#BE9852]/25

                                        group-hover:scale-105
                                        group-hover:bg-[#BE9852]/20
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
                                      ? 'text-[#BE9852] font-bold'
                                      : 'text-[#E5C78E] group-hover:text-[#F1D49C]'
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

                                font-semibold
                                shrink-0

                                transition-all

                                ${
                                  isExpanded
                                    ? `
                                      bg-[#BE9852]/15
                                      text-[#BE9852]
                                      border
                                      border-[#BE9852]/40
                                    `
                                    : `
                                      bg-[#254866]
                                      text-[#E5C78E]
                                      border
                                      border-[#C5D5E2]

                                      group-hover:bg-[#2D5574]
                                      group-hover:border-[#BE9852]/50
                                      group-hover:text-[#BE9852]
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
                                border-[#C5D5E2]

                                bg-[#254866]

                                shadow-md
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

                                  <div
                                    className="
                                      absolute inset-0

                                      bg-gradient-to-b

                                      from-transparent
                                      via-[#254866]/30
                                      to-[#254866]
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

                                        text-[#F3F7FA]

                                        leading-relaxed
                                      "
                                    >
                                      <CheckCircle2
                                        className="
                                          w-3.5 h-3.5
                                          text-[#BE9852]
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

                              bg-[#254866]

                              shadow-xl

                              border-[#C5D5E2]

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

                                          opacity-[0.92]
                                        "
                                        loading="lazy"
                                      />

                                      {/* FADE TOWARD TEXT */}
                                      <div
                                        className="
                                          absolute inset-0

                                          bg-gradient-to-r

                                          from-[#254866]
                                          from-[0%]

                                          via-[#254866]/85
                                          via-[24%]

                                          to-transparent
                                          to-[65%]
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

                                        from-[#254866]
                                        from-[0%]

                                        via-[#254866]/98
                                        via-[34%]

                                        to-transparent
                                        to-[69%]
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

                                          opacity-[0.92]
                                        "
                                        loading="lazy"
                                      />

                                      {/* FADE TOWARD TEXT */}
                                      <div
                                        className="
                                          absolute inset-0

                                          bg-gradient-to-r

                                          from-[#254866]
                                          from-[0%]

                                          via-[#254866]/85
                                          via-[24%]

                                          to-transparent
                                          to-[65%]
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

                                        from-[#254866]
                                        from-[0%]

                                        via-[#254866]/98
                                        via-[34%]

                                        to-transparent
                                        to-[69%]
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
                                    to-[#254866]/10
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

                                      text-[#F3F7FA]

                                      leading-relaxed
                                    "
                                  >
                                    <CheckCircle2
                                      className="
                                        w-4 h-4

                                        text-[#BE9852]

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

                                ring-[#C5D5E2]/40
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
