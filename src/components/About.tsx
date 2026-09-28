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

        {/* Detailed Professional Introduction Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#F4F6F8] dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="space-y-4 text-base sm:text-lg text-[#1F2937] dark:text-slate-200 leading-relaxed font-normal">
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

        {/* Executive Highlights & Workplace Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Key Metrics & Professional Governance (Left) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#F4F6F8] dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-2xs text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0F766E] dark:text-teal-400">14+</span>
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{isRTL ? t.yearsExpLabel : 'Years Exp'}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F4F6F8] dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-2xs text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0F2747] dark:text-slate-100">MBA</span>
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{isRTL ? t.mbaFinanceLabel : 'Finance'}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F4F6F8] dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-2xs text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0F766E] dark:text-teal-400">ZATCA</span>
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{isRTL ? t.zatcaVatLabel : 'VAT & Tax'}</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#F4F6F8] dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E] dark:text-teal-400 block">
                {isRTL ? t.governanceBadge : 'Corporate Financial Governance'}
              </span>
              <p className="text-xs sm:text-sm text-[#1F2937] dark:text-slate-300 leading-relaxed font-medium">
                {isRTL ? t.governanceDesc : 'Dedicated to accurate ledger maintenance, audit-ready financial schedules, balance confirmations, and ZATCA statutory tax compliance across enterprise operations.'}
              </p>
            </div>
          </div>

          {/* Workplace Image (Right) */}
          <div className="lg:col-span-6">
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
