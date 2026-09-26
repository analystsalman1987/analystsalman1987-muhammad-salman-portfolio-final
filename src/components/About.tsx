import { useState } from 'react';
import { 
  Calculator, 
  ShieldCheck, 
  Layers, 
  ArrowLeftRight, 
  Receipt, 
  CheckCircle2, 
  ChevronDown 
} from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface AboutProps {
  profile: ProfileInfo;
}

interface ProfessionalArea {
  id: string;
  title: string;
  icon: typeof Calculator;
  details: string[];
}

const PROFESSIONAL_AREAS: ProfessionalArea[] = [
  {
    id: 'area-1',
    title: 'Financial Accounting & Reporting',
    icon: Calculator,
    details: [
      'Financial reporting',
      'Bookkeeping',
      'Account analysis',
      'Journal entries',
      'Month-end closing',
    ],
  },
  {
    id: 'area-2',
    title: 'AP, AR & Reconciliations',
    icon: ArrowLeftRight,
    details: [
      'Accounts payable and receivable',
      'Customer and supplier balances',
      'SOA and aging',
      'Collections and payment follow-up',
      'Account adjustments',
    ],
  },
  {
    id: 'area-3',
    title: 'VAT & ZATCA Compliance',
    icon: ShieldCheck,
    details: [
      'VAT reporting',
      'Tax invoices',
      'Financial documentation',
      'ZATCA-related accounting and compliance',
    ],
  },
  {
    id: 'area-4',
    title: 'ERP & Accounting Systems',
    icon: Layers,
    details: [
      'Oracle ERP',
      'QuickBooks',
      'SMACC',
      'Delta Financial',
      'Peachtree/Sage',
      'Advanced Microsoft Excel',
    ],
  },
  {
    id: 'area-5',
    title: 'Inventory & Financial Operations',
    icon: Receipt,
    details: [
      'Inventory costing',
      'Purchase-to-payment process',
      'Sales documentation',
      'Petty cash',
      'Supplier and client payment management',
      'Financial document control',
    ],
  },
];

export function About({ profile }: AboutProps) {
  const [expandedAreaId, setExpandedAreaId] = useState<string | null>(null);
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.about;

  const toggleArea = (id: string) => {
    setExpandedAreaId((prev) => (prev === id ? null : id));
  };

  const introText = isRTL
    ? t.summary
    : profile.summary ||
      'Accounting professional with 14+ years of experience across Saudi Arabia and Pakistan, specializing in financial accounting, reporting, AP & AR, reconciliations, month-end closing, inventory costing, VAT/ZATCA compliance, and ERP-based accounting operations.';

  return (
    <section 
      id="about" 
      className="relative py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      {/* Subtle Professional Accounting & Finance Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img 
          src="/images/about_accounting_background.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.32] dark:opacity-[0.24] filter contrast-105 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-slate-900/75 dark:via-slate-900/40 dark:to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
            {isRTL ? t.tag : 'Profile Overview'}
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-[#0F2747] dark:text-white sm:text-4xl tracking-tight">
            {isRTL ? t.title : 'About Muhammad Salman'}
          </h2>
        </div>

        {/* Detailed Professional Introduction Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#F4F6F8] dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 shadow-xs">
          <p className="text-base sm:text-lg text-[#1F2937] dark:text-slate-200 leading-relaxed font-medium">
            {introText}
          </p>
          
          <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[#64748B] dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0F766E] shrink-0" />
              <span>{isRTL ? t.complianceNote : 'Operating with full compliance in Dammam, Kingdom of Saudi Arabia'}</span>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-300 font-bold border border-[#0F766E]/20">
              {isRTL ? t.drivingLicense : 'Valid Saudi Driving License'}
            </span>
          </div>
        </div>

        {/* Below this introduction: Keep the existing expandable About points/details as previously configured */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 5 Expandable Professional Areas */}
          <div className="lg:col-span-7 space-y-3">
            <div className="mb-1">
              <h3 className="text-xs font-bold tracking-wider text-[#64748B] dark:text-slate-400 uppercase">
                {isRTL ? t.breakdownTitle : 'Core Competency Breakdown (Click to Expand)'}
              </h3>
            </div>

            {PROFESSIONAL_AREAS.map((area) => {
              const Icon = area.icon;
              const isExpanded = expandedAreaId === area.id;
              const arArea = t.areas.find((a) => a.id === area.id);
              const title = isRTL && arArea ? arArea.title : area.title;
              const details = isRTL && arArea ? arArea.details : area.details;

              return (
                <div
                  key={area.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden bg-white dark:bg-slate-850 ${
                    isExpanded
                      ? 'border-[#0F766E]/60 dark:border-teal-500/60 shadow-md ring-1 ring-[#0F766E]/20'
                      : 'border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-[#0F766E]/40 dark:hover:border-teal-500/40'
                  }`}
                >
                  {/* Clickable Header */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onClick={() => toggleArea(area.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleArea(area.id);
                      }
                    }}
                    className="p-4 sm:p-4.5 flex items-center justify-between gap-3 cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#0F2747] dark:text-slate-100 group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors">
                        {title}
                      </h4>
                    </div>

                    <div 
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-medium shrink-0 transition-all ${
                        isExpanded
                          ? 'bg-[#0F766E] text-white shadow-2xs'
                          : 'bg-teal-500/[0.06] text-[#0F766E] dark:text-teal-300 border border-teal-500/20 group-hover:bg-teal-500/[0.12]'
                      }`}
                    >
                      <span>{isExpanded ? (isRTL ? t.hide : 'Hide') : (isRTL ? t.view : 'View')}</span>
                      <ChevronDown 
                        className={`w-3 h-3 transition-transform duration-300 ease-out ${
                          isExpanded ? 'rotate-180 text-white' : 'text-[#0F766E] dark:text-teal-400'
                        }`} 
                      />
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded
                        ? 'grid-rows-[1fr] opacity-100 border-t border-slate-100 dark:border-slate-800 bg-[#F9FBFA] dark:bg-slate-900/50'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 sm:p-5 pt-3">
                        <ul className="space-y-2">
                          {details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#1F2937] dark:text-slate-300">
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

          {/* Key Stats & Workplace Image (Right Column) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-2xs text-center">
                <span className="block text-2xl font-extrabold text-[#0F766E] dark:text-teal-400">14+</span>
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{isRTL ? t.yearsExpLabel : 'Years Exp'}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-2xs text-center">
                <span className="block text-2xl font-extrabold text-[#0F2747] dark:text-slate-100">MBA</span>
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{isRTL ? t.mbaFinanceLabel : 'Finance'}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-2xs text-center">
                <span className="block text-2xl font-extrabold text-[#0F766E] dark:text-teal-400">ZATCA</span>
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{isRTL ? t.zatcaVatLabel : 'VAT & Tax'}</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group">
              <img
                src="/images/accounting_workplace.jpg"
                alt="Corporate Accounting and Financial Governance Workplace"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/95 via-[#0F2747]/40 to-transparent flex items-end p-4 sm:p-5">
                <div className="text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300 bg-[#0F2747]/80 px-2.5 py-0.5 rounded backdrop-blur-xs border border-teal-500/30">
                    {isRTL ? t.governanceBadge : 'Executive Governance'}
                  </span>
                  <p className="text-xs font-semibold text-slate-100 mt-1.5">
                    {isRTL ? t.governanceDesc : 'Financial Reporting, Reconciliation & ZATCA Statutory Compliance'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
