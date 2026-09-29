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
      className="relative py-20 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      {/* FINAL EXISTING ABOUT BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img
          src="/images/about_accounting_background.jpg"
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-[0.42] dark:opacity-[0.18] select-none"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F2FAF7]/72 via-[#F2FAF7]/62 to-[#EDF8F5]/52 dark:from-slate-900/90 dark:via-slate-900/84 dark:to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ORIGINAL / FINAL HEADING FORMAT */}
        <div className="flex flex-col items-start gap-1.5 max-w-3xl mb-9">
          <span className="block text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
            {isRTL ? t.tag : 'Profile Overview'}
          </span>

          <div>
            <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight">
              {isRTL ? t.title : 'About Muhammad Salman'}
            </h2>
          </div>
        </div>

        {/* FINAL TWO-COLUMN ABOUT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="lg:col-span-6 flex flex-col">

            {/* EXACT APPROVED PARAGRAPHS — NO CARD */}
            <div className="space-y-5 text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-relaxed font-normal">
              <p>
                {isRTL
                  ? (
                      t.summaryP1 ||
                      'مع أكثر من 14 عاماً من الخبرة في المحاسبة والمالية، عملت عبر بيئات أعمال متنوعة في المملكة العربية السعودية وباكستان، دعماً للعمليات المحاسبية اليومية، والتقارير المالية، والتسويات، وحسابات الذمم الدائنة والمدينة، وأنشطة الإقفال الشهري.'
                    )
                  : 'With more than 14 years of accounting and finance experience, I have worked across diverse business environments in Saudi Arabia and Pakistan, supporting day-to-day accounting operations, financial reporting, reconciliations, accounts payable and receivable, and month-end activities.'}
              </p>

              <p>
                {isRTL
                  ? (
                      t.summaryP2 ||
                      'تشمل خبرتي المهنية الامتثال لضريبة القيمة المضافة لهيئة الزكاة والضريبة والجمارك (ZATCA)، وتكاليف المخزون، وإدارة النقدية والعهدة النثرية، وتسويات حسابات العملاء والموردين، والتحصيلات، والعمليات المحاسبية القائمة على أنظمة تخطيط موارد المؤسسات (ERP). أركز على الحفاظ على سجلات مالية دقيقة، وضوابط داخلية فعالة، وتوفير معلومات مالية دقيقة وفي الوقت المناسب لدعم العمليات التشغيلية للأعمال.'
                    )
                  : 'My professional experience includes ZATCA VAT compliance, inventory and costing, cash and petty cash management, customer and supplier account reconciliation, collections, and ERP-based accounting processes. I focus on maintaining accurate financial records, effective internal controls, and timely financial information to support business operations.'}
              </p>
            </div>

            {/* COMPLIANCE + LICENSE */}
            <div className="pt-4 mt-6 border-t border-slate-300/70 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#0F766E] shrink-0" />

                <span>
                  {isRTL
                    ? t.complianceNote
                    : 'Operating with full compliance in Dammam, Kingdom of Saudi Arabia'}
                </span>
              </div>

              <span className="px-2.5 py-1 rounded-md bg-[#E6F4F1]/90 dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-300 font-bold border border-[#0F766E]/20">
                {isRTL
                  ? t.drivingLicense
                  : 'Valid Saudi Driving License'}
              </span>
            </div>

            {/* FINAL THREE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-7">

              {/* 14+ */}
              <div className="p-4 rounded-xl bg-white/88 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 shadow-sm text-center flex flex-col justify-center items-center min-h-[105px]">
                <span
                  className="block text-2xl sm:text-3xl font-extrabold text-[#0F766E] dark:text-teal-400"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(255,255,255,0.65), 0 2px 3px rgba(15,118,110,0.16)'
                  }}
                >
                  14+
                </span>

                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-1">
                  {isRTL ? t.yearsExpLabel : 'Years Experience'}
                </span>
              </div>

              {/* MBA / BBA */}
              <div className="p-4 rounded-xl bg-white/88 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 shadow-sm text-center flex flex-col justify-center items-center min-h-[105px]">
                <span
                  className="block text-lg sm:text-xl font-extrabold text-[#0F766E] dark:text-teal-400 whitespace-nowrap leading-tight"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(255,255,255,0.65), 0 2px 3px rgba(15,118,110,0.16)'
                  }}
                >
                  {isRTL ? t.mbaFinance : 'MBA / BBA'}
                </span>

                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 dark:text-slate-300 leading-tight mt-1">
                  {isRTL
                    ? t.mbaFinanceLabel
                    : 'Accounting & Finance'}
                </span>
              </div>

              {/* ZATCA */}
              <div className="p-4 rounded-xl bg-white/88 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 shadow-sm text-center flex flex-col justify-center items-center min-h-[105px]">
                <span
                  className="block text-2xl sm:text-3xl font-extrabold text-[#0F766E] dark:text-teal-400"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(255,255,255,0.65), 0 2px 3px rgba(15,118,110,0.16)'
                  }}
                >
                  ZATCA
                </span>

                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 dark:text-slate-300 leading-tight mt-1">
                  {isRTL
                    ? t.zatcaVatLabel
                    : 'VAT Reporting & Submission'}
                </span>
              </div>

            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
              SAME IMAGE — TRUE FEATHER / MERGE EFFECT
          ====================================================== */}
          <div className="lg:col-span-6 relative min-h-[420px] sm:min-h-[470px]">

            {/* IMAGE LAYER WITH REAL TRANSPARENT EDGE MASK */}
            <div
              className="absolute inset-0"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, black 13%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 100%)',
                WebkitMaskComposite: 'source-in',
                maskImage:
                  'linear-gradient(to right, transparent 0%, black 13%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 100%)',
                maskComposite: 'intersect'
              }}
            >
              <img
                src="/images/accounting_workplace.jpg"
                alt="Accounting and Financial Operations Workplace"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.96] dark:opacity-[0.90]"
                loading="lazy"
              />
            </div>

            {/* EXTRA SOFT LEFT TRANSITION */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[16%] bg-gradient-to-r from-[#F2FAF7]/55 via-[#F2FAF7]/15 to-transparent dark:from-slate-900/50 dark:via-slate-900/10 dark:to-transparent" />

            {/* SOFT BOTTOM GRADIENT INSIDE IMAGE */}
            <div
              className="pointer-events-none absolute inset-x-[5%] bottom-0 h-[48%]"
              style={{
                background:
                  'linear-gradient(to top, rgba(5,43,59,0.94) 0%, rgba(8,54,70,0.62) 42%, rgba(8,54,70,0) 100%)'
              }}
            />

            {/* FINAL APPROVED IMAGE CONTENT */}
            <div className="absolute left-[8%] right-[7%] bottom-7 sm:bottom-9">
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.10em] text-teal-300">
                {isRTL
                  ? t.governanceBadge
                  : 'FINANCIAL OPERATIONS & CONTROLS'}
              </h3>

              <div className="w-20 h-[2px] bg-teal-400/90 my-3" />

              <p className="max-w-xl text-xs sm:text-sm text-white leading-relaxed font-medium">
                {isRTL
                  ? t.governanceDesc
                  : 'Dedicated to accurate ledger maintenance, audit-ready financial schedules, balance confirmations, and ZATCA statutory tax compliance across enterprise operations.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
