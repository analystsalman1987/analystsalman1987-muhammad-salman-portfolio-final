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
      className="relative py-20 bg-[#F4FAF8] dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      {/* Light Professional Accounting & Finance Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img
          src="/images/about_accounting_background.jpg"
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-[0.30] dark:opacity-[0.13] filter contrast-105 saturate-[0.85] select-none"
          loading="lazy"
        />

        {/* Soft overlay keeps the background visible without reducing readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4FAF8]/75 via-[#F4FAF8]/62 to-[#F4FAF8]/78 dark:from-slate-900/88 dark:via-slate-900/76 dark:to-slate-900/90" />

        {/* Very soft teal atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50/20 via-transparent to-emerald-50/15 dark:from-teal-950/10 dark:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col items-start gap-1.5 max-w-3xl">
          <span className="block text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
            {isRTL ? t.tag : 'Profile Overview'}
          </span>

          <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight">
            {isRTL ? t.title : 'About Muhammad Salman'}
          </h2>
        </div>

        {/* Main About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* LEFT: About Text Directly on Background */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
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

            {/* Compliance / Driving License */}
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
          </div>

          {/* RIGHT: Existing Original Finance Workplace Image */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[330px] sm:min-h-[390px] overflow-hidden rounded-[1.35rem] group">

              {/* Existing image asset retained */}
              <img
                src="/images/accounting_workplace.jpg"
                alt="Accounting and Financial Operations Workplace"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.94] dark:opacity-[0.88] group-hover:scale-[1.015] transition-transform duration-700"
                loading="lazy"
              />

              {/* Soft edge blending into About background */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#F4FAF8]/35 via-transparent to-[#F4FAF8]/18 dark:from-slate-900/25 dark:via-transparent dark:to-slate-900/15" />

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#F4FAF8]/18 via-transparent to-transparent dark:from-slate-900/18" />

              {/* Bottom gradient for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/82 via-[#0F2747]/18 to-transparent" />

              {/* Financial Operations & Controls content merged inside image */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="max-w-xl">
                  <span className="inline-block text-[10px] sm:text-xs uppercase font-extrabold tracking-[0.12em] text-teal-200 mb-2">
                    {isRTL
                      ? t.governanceBadge
                      : 'FINANCIAL OPERATIONS & CONTROLS'}
                  </span>

                  <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                    {isRTL
                      ? t.governanceDesc
                      : 'Dedicated to accurate ledger maintenance, audit-ready financial schedules, balance confirmations, and ZATCA statutory tax compliance across enterprise operations.'}
                  </p>
                </div>
              </div>

              {/* Soft border without separate card appearance */}
              <div className="absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/25 dark:ring-white/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Three Professional Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Experience */}
          <div className="p-4 sm:p-5 rounded-xl bg-white/82 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-sm text-center flex flex-col justify-center items-center min-h-[105px]">
            <span
              className="block text-2xl sm:text-3xl font-extrabold text-[#0F766E] dark:text-teal-400"
              style={{
                textShadow:
                  '0 1px 0 rgba(255,255,255,0.65), 0 2px 3px rgba(15,118,110,0.16)'
              }}
            >
              14+
            </span>

            <span className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">
              {isRTL
                ? t.yearsExpLabel
                : 'Years Experience'}
            </span>
          </div>

          {/* Education */}
          <div className="p-4 sm:p-5 rounded-xl bg-white/82 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-sm text-center flex flex-col justify-center items-center min-h-[105px]">
            <span
              className="block text-xl sm:text-2xl font-extrabold text-[#0F766E] dark:text-teal-400 whitespace-nowrap leading-tight"
              style={{
                textShadow:
                  '0 1px 0 rgba(255,255,255,0.65), 0 2px 3px rgba(15,118,110,0.16)'
              }}
            >
              {isRTL ? t.mbaFinance : 'MBA / BBA'}
            </span>

            <span className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">
              {isRTL
                ? t.mbaFinanceLabel
                : 'Accounting & Finance'}
            </span>
          </div>

          {/* ZATCA */}
          <div className="p-4 sm:p-5 rounded-xl bg-white/82 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-sm text-center flex flex-col justify-center items-center min-h-[105px]">
            <span
              className="block text-2xl sm:text-3xl font-extrabold text-[#0F766E] dark:text-teal-400"
              style={{
                textShadow:
                  '0 1px 0 rgba(255,255,255,0.65), 0 2px 3px rgba(15,118,110,0.16)'
              }}
            >
              ZATCA
            </span>

            <span className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">
              {isRTL
                ? t.zatcaVatLabel
                : 'VAT Reporting & Submission'}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
