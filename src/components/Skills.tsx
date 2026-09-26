import { 
  FileSpreadsheet, 
  Database, 
  Receipt, 
  Server, 
  Landmark, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  ArrowLeftRight, 
  FileCheck, 
  Package, 
  Calculator, 
  LucideIcon 
} from 'lucide-react';
import { SkillCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface SkillsProps {
  skills?: SkillCategory[];
}

interface PracticalSkillItem {
  name: string;
  category: string;
  icon: LucideIcon;
  badge: string;
}

const PRACTICAL_SKILLS: PracticalSkillItem[] = [
  { name: 'Advanced Microsoft Excel', category: 'Financial Modeling & Analysis', icon: FileSpreadsheet, badge: 'Tool' },
  { name: 'Oracle ERP', category: 'Enterprise ERP System', icon: Database, badge: 'ERP' },
  { name: 'QuickBooks', category: 'Accounting & Invoicing', icon: Receipt, badge: 'Software' },
  { name: 'SMACC', category: 'Cloud Accounting & ERP', icon: Server, badge: 'ERP' },
  { name: 'Delta Financial', category: 'Financial Management Software', icon: Landmark, badge: 'System' },
  { name: 'Peachtree / Sage', category: 'Accounting Software', icon: Layers, badge: 'Software' },
  { name: 'Financial Reporting', category: 'Statements & Management Reports', icon: BarChart3, badge: 'Financial' },
  { name: 'VAT / ZATCA', category: 'Saudi Tax & E-Invoicing', icon: ShieldCheck, badge: 'Compliance' },
  { name: 'AP & AR', category: 'Accounts Payable & Receivable', icon: ArrowLeftRight, badge: 'Operations' },
  { name: 'Reconciliation', category: 'Bank, Customer & Supplier SOA', icon: FileCheck, badge: 'Audit' },
  { name: 'Inventory Costing', category: 'Cost Allocation & Valuation', icon: Package, badge: 'Costing' },
  { name: 'Accounting Operations', category: 'GL, Journal Entries & Closing', icon: Calculator, badge: 'Core' },
];

export function Skills({ skills }: SkillsProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.skills;

  return (
    <section 
      id="skills" 
      className="py-16 bg-[#F4F6F8] dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
            {isRTL ? t.tag : 'Practical Competencies'}
          </span>
          <h2 className="mt-1 text-2xl font-bold text-[#0F2747] dark:text-white sm:text-3xl tracking-tight">
            {isRTL ? t.title : 'Professional Skills'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] dark:text-slate-400">
            {isRTL ? t.subtitle : 'A concise directory of practical accounting software, ERP platforms, and operational tools used in daily practice.'}
          </p>
        </div>

        {/* Compact, Scan-Friendly Grid of 12 Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {PRACTICAL_SKILLS.map((item, idx) => {
            const Icon = item.icon;
            const arItem = t.items[idx];
            const name = isRTL && arItem ? arItem.name : item.name;
            const category = isRTL && arItem ? arItem.category : item.category;
            const badge = isRTL && arItem ? arItem.badge : item.badge;

            return (
              <div
                key={item.name}
                className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-[#0F766E]/50 hover:shadow-xs transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F2747] dark:text-white truncate group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors">
                      {name}
                    </h3>
                    <p className="text-[11px] text-[#64748B] dark:text-slate-400 truncate mt-0.5">
                      {category}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[#475569] dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 shrink-0">
                  {badge}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
