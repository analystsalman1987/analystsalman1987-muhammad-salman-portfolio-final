import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface AboutProps {
  profile: ProfileInfo;
}

export function About({ profile: _profile }: AboutProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.about;

  return (
    <section 
      id="about" 
      className="relative py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      {/* Light, Faded Professional Accounting & Finance Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img 
          src="/images/about_accounting_background.jpg" 
          alt="" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-[0.14] dark:opacity-[0.08] filter contrast-105 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/94 via-white/84 to-white/94 dark:from-slate-900/94 dark:via-slate-900/84 dark:to-slate-900/94" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header: Vertical Stack (Label above Heading) */}
        <div className="flex flex-col items-start gap-1.5 max-w-3xl">
          <span className="block text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
            {isRTL ? t.tag : 'Profile Overview'}
          </span>
          <div>
            <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight">
              {isRTL ? t.title : 'About Muhammad Salman'}
            </h2>
          </div>
        </div>

        {/* Upper Part: 50/50 Layout (Direct About Me Text on Left, Executive Governance Picture on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT SIDE: About Me Text (NO CARD / NO WHITE BOX / DIRECTLY ON BACKGROUND) */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div className="space-y-5 text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-relaxed font-normal">
              <p>
                {isRTL
                  ? (t.summaryP1 || 'مع أكثر من 14 عاماً من الخبرة في المحاسبة والمالية، عملت عبر بيئات أعمال متنوعة في المملكة العربية السعودية وباكستان، دعماً للعمليات المحاسبية اليومية، والتقارير المالية، والتسويات، وحسابات الذمم الدائنة والمدينة، وأنشطة الإقفال الشهري.')
                  : 'With more than 14 years of accounting and finance experience, I have worked across diverse business environments in Saudi Arabia and Pakistan, supporting day-to-day accounting operations, financial reporting, reconciliations, accounts payable and receivable, and month-end activities.'
                }
              </p>
              <p>
                {isRTL
                  ? (t.summaryP2 || 'تشمل خبرتي المهنية الامتثال لضريبة القيمة المضافة لهيئة الزكاة والضريبة والجمارك (ZATCA)، وتكاليف المخزون، وإدارة النقدية والعهدة النثرية، وتسويات حسابات العملاء والموردين، والتحصيلات، والعمليات المحاسبية القائمة على أنظمة تخطيط موارد المؤسسات (ERP). أركز على الحفاظ على سجلات مالية دقيقة، وضوابط داخلية فعالة، وتوفير معلومات مالية دقيقة وفي الوقت المناسب لدعم العمليات التشغيلية للأعمال.')
                  : 'My professional experience includes ZATCA VAT compliance, inventory and costing, cash and petty cash management, customer and supplier account reconciliation, collections, and ERP-based accounting processes. I focus on maintaining accurate financial records, effective internal controls, and timely financial information to support business operations.'
                }
              </p>
            </div>
            
            <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#0F766E] shrink-0" />
                <span>{isRTL ? t.complianceNote : 'Operating with full compliance in Dammam, Kingdom of Saudi Arabia'}</span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-300 font-bold border border-[#0F766E]/20">
                {isRTL ? t.drivingLicense : 'Valid Saudi Driving License'}
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Existing Executive Governance Picture */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group h-full min-h-[280px] sm:min-h-[340px] flex">
              <img
                src="/images/accounting_workplace.jpg"
                alt="Corporate Accounting and Financial Governance Workplace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/95 via-[#0F2747]/40 to-transparent flex items-end p-5 sm:p-6">
                <div className="text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300 bg-[#0F2747]/80 px-2.5 py-1 rounded backdrop-blur-xs border border-teal-500/30">
                    {isRTL ? t.governanceBadge : 'Executive Governance'}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-2">
                    {isRTL ? t.governanceDesc : 'Financial Reporting, Reconciliation & ZATCA Statutory Compliance'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Existing Bottom Information Cards & Corporate Financial Governance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* 3 Metric Cards (Left) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 gap-3 h-full">
              <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 shadow-2xs text-center flex flex-col justify-center items-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0F766E] dark:text-teal-400">14+</span>
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                  {isRTL ? t.yearsExpLabel : 'Years Experience'}
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 shadow-2xs text-center flex flex-col justify-center items-center">
                <span className="block text-lg sm:text-2xl font-extrabold text-[#0F2747] dark:text-slate-100 whitespace-nowrap leading-tight">
                  {isRTL ? t.mbaFinance : 'MBA / BBA'}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 dark:text-slate-300 leading-tight mt-1 whitespace-nowrap">
                  {isRTL ? t.mbaFinanceLabel : 'Accounting & Finance'}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 shadow-2xs text-center flex flex-col justify-center items-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0F766E] dark:text-teal-400">ZATCA</span>
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                  {isRTL ? t.zatcaVatLabel : 'VAT Reporting & Submission'}
                </span>
              </div>
            </div>
          </div>

          {/* Corporate Financial Governance Card (Right) */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-6 rounded-xl bg-white/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2 flex flex-col justify-center h-full">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E] dark:text-teal-400 block">
                {isRTL ? t.governanceBadge : 'Corporate Financial Governance'}
              </span>
              <p className="text-xs sm:text-sm text-[#1F2937] dark:text-slate-300 leading-relaxed font-medium">
                {isRTL ? t.governanceDesc : 'Dedicated to accurate ledger maintenance, audit-ready financial schedules, balance confirmations, and ZATCA statutory tax compliance across enterprise operations.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
