import { 
  Award, 
  Calculator, 
  ArrowLeftRight, 
  FileText, 
  ShieldCheck, 
  Layers, 
  FileSpreadsheet, 
  Building2,
  BarChart3,
  FileCheck,
  LucideIcon
} from 'lucide-react';
import { HighlightItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';
import { DEFAULT_APP_DATA } from '../data/defaultData';

interface HighlightsProps {
  highlights?: HighlightItem[];
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  Calculator,
  ArrowLeftRight,
  FileText,
  ShieldCheck,
  Layers,
  FileSpreadsheet,
  Building2,
  BarChart3,
  FileCheck,
};

export function Highlights({ highlights }: HighlightsProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.highlights;

  const items = (highlights && highlights.length > 0) ? highlights : DEFAULT_APP_DATA.highlights;

  return (
    <section id="highlights" className="misty-portfolio relative py-16 sm:py-20 bg-[#A7C6E1] border-y border-[#C5D5E2] transition-colors overflow-hidden" style={{ backgroundColor: '#A7C6E1' }}>
      {/* Subtle Professional Accounting & Spreadsheet Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img 
          src="/images/accounting_workplace_optimized.webp"
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.16] filter contrast-105 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#A7C6E1]/85 via-[#A7C6E1]/70 to-[#A7C6E1]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Vertical Stack (Label above Heading) */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 gap-1.5">
          <span className="block text-xs font-bold tracking-widest text-[#BE9852] uppercase">
            {isRTL ? t.tag : 'Executive Overview'}
          </span>
          <div>
            <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight text-[#17324A]">
              {isRTL ? t.title : 'Professional Highlights'}
            </h2>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-[#52677A]">
            {isRTL ? t.subtitle : 'A quick, high-level overview of core accounting qualifications, regional experience, and operational strengths.'}
          </p>
        </div>

        {/* 8 Concise Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((item, idx) => {
            const Icon = (item.iconName && iconMap[item.iconName]) || Award;
            const arItem = t.items.find((x) => x.id === item.id) || t.items[idx];
            const title = isRTL && arItem ? arItem.title : item.title;
            const subtitle = isRTL && arItem ? arItem.subtitle : item.subtitle;

            return (
              <div
                key={item.id || idx}
                className="group rounded-xl bg-[#F3F7FA] border border-[#C5D5E2] p-5 shadow-xs hover:border-[#BE9852]/60 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#BE9852]/15 text-[#BE9852] border border-[#BE9852]/25 flex items-center justify-center shrink-0 mb-3.5 group-hover:scale-105 group-hover:bg-[#BE9852]/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-[#17324A] group-hover:text-[#BE9852] transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs text-[#52677A] mt-2 leading-relaxed">
                    {subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
