import { useState } from 'react';
import { 
  Calculator, 
  ArrowLeftRight, 
  FileCheck, 
  CreditCard, 
  ShieldCheck, 
  Package, 
  Receipt, 
  FileSpreadsheet, 
  Coins, 
  Layers, 
  FileText, 
  Building2,
  ChevronDown,
  CheckCircle2,
  LucideIcon
} from 'lucide-react';
import { ExpertiseItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface ExpertiseProps {
  expertise: ExpertiseItem[];
}

const iconMap: Record<string, LucideIcon> = {
  Calculator,
  ArrowLeftRight,
  FileCheck,
  CreditCard,
  ShieldCheck,
  Package,
  Receipt,
  FileSpreadsheet,
  Coins,
  Layers,
  FileText,
  Building2,
};

const defaultIconMap: Record<string, LucideIcon> = {
  'exp-1': Calculator,
  'exp-2': ArrowLeftRight,
  'exp-3': FileCheck,
  'exp-4': CreditCard,
  'exp-5': ShieldCheck,
  'exp-6': Package,
  'exp-7': Receipt,
  'exp-8': FileSpreadsheet,
  'exp-9': Coins,
  'exp-10': Layers,
  'exp-11': FileSpreadsheet,
  'exp-12': FileText,
  'exp-13': Building2,
};

const defaultDetailsMap: Record<string, string[]> = {
  'exp-1': [
    'Financial reporting',
    'Bookkeeping',
    'Journal entries',
    'Account analysis',
    'Month-end closing',
    'Accurate financial records',
  ],
  'exp-2': [
    'AP/AR transactions',
    'Customer and supplier balances',
    'Invoice processing',
    'Payment follow-up',
    'Collections',
    'Aging',
  ],
  'exp-3': [
    'SOA preparation and reconciliation',
    'Customer and supplier account reconciliation',
    'Balance verification',
    'Payment and invoice adjustments',
  ],
  'exp-4': [
    'Aging review',
    'Outstanding balance follow-up',
    'Collection coordination',
    'Credit/payment monitoring',
    'Client account follow-up',
  ],
  'exp-5': [
    'VAT reporting',
    'Monthly and quarterly VAT work',
    'Tax invoices',
    'Financial documentation',
    'ZATCA-related accounting/compliance',
  ],
  'exp-6': [
    'Inventory costing',
    'Cost analysis',
    'Purchase and sales transaction review',
    'Accounting and inventory coordination',
  ],
  'exp-7': [
    'Purchase orders',
    'GRN verification',
    'Purchase invoices',
    'Supplier payments',
    'Document matching and control',
  ],
  'exp-8': [
    'Quotations',
    'Proforma invoices',
    'Sales orders',
    'Delivery notes',
    'Sales invoices',
    'Invoice and customer balance verification',
  ],
  'exp-9': [
    'Supplier payments',
    'Client payments',
    'Petty cash',
    'Payment documentation',
    'Cash transaction control',
  ],
  'exp-10': [
    'Oracle ERP',
    'QuickBooks',
    'SMACC',
    'Delta Financial',
    'Peachtree / Sage',
  ],
  'exp-11': [
    'Financial data analysis',
    'Reconciliations',
    'Reporting',
    'Accounting schedules',
    'Spreadsheet-based financial work',
  ],
  'exp-12': [
    'Financial records',
    'Supporting documents',
    'Invoice documentation',
    'Reconciliation support',
    'Audit-related accounting documentation',
  ],
  'exp-13': [
    'Coordination between accounting, sales and warehouse',
    'Accounting document verification',
    'Client and supplier coordination',
    'Timely financial operations',
  ],
};

export function Expertise({ expertise }: ExpertiseProps) {
  // All collapsed by default
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.expertise;

  if (!expertise || expertise.length === 0) {
    return null;
  }

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const splitIndex = Math.ceil(expertise.length / 2);
  const leftColumnItems = expertise.slice(0, splitIndex);
  const rightColumnItems = expertise.slice(splitIndex);

  const renderCard = (item: ExpertiseItem, idx: number) => {
    const isExpanded = expandedId === item.id;
    const Icon = (item.iconName && iconMap[item.iconName]) || defaultIconMap[item.id] || Calculator;
    const arItem = t.items.find((x) => x.id === item.id) || t.items[idx];
    const title = isRTL && arItem ? arItem.title : item.title;
    const rawSubtitle = item.subtitle || item.description;
    const subtitle = isRTL && arItem ? arItem.subtitle : rawSubtitle;
    const rawDetails = item.details && item.details.length > 0 
      ? item.details 
      : defaultDetailsMap[item.id] || [];
    const details = isRTL && arItem ? arItem.details : rawDetails;
    const hasDetails = details.length > 0;

    return (
      <div
        key={item.id || idx}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onClick={() => toggleExpand(item.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand(item.id);
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
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-medium transition-all ${
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
            <h3 className="text-sm sm:text-base font-bold text-[#0F2747] dark:text-slate-100 group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors leading-snug">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1.5 leading-relaxed">
                {subtitle}
              </p>
            )}
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
                  {isRTL ? t.scope : 'Core Responsibilities & Scope:'}
                </span>
                <ul className="space-y-2">
                  {details.map((detail, dIdx) => (
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
  };

  return (
    <section 
      id="expertise" 
      className="relative py-16 bg-[#F4F6F8] dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 transition-colors overflow-hidden"
    >
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
            {isRTL ? t.tag : 'Core Competencies'}
          </span>
          <h2 className="mt-1 text-2xl font-bold text-[#0F2747] dark:text-white sm:text-3xl tracking-tight">
            {isRTL ? t.title : 'Core Professional Expertise'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] dark:text-slate-400">
            {isRTL ? t.subtitle : 'Click any expertise card to expand core accounting responsibilities, processes, and operational details.'}
          </p>
        </div>

        {/* Two Columns on Desktop/Tablet, One Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {leftColumnItems.map(renderCard)}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {rightColumnItems.map((item, idx) => renderCard(item, idx + splitIndex))}
          </div>
        </div>

      </div>
    </section>
  );
}
