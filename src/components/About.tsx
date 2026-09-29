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
      className="relative overflow-hidden border-b border-slate-200 py-20 transition-colors dark:border-slate-800 dark:bg-slate-900"
    >
      {/* FULL ABOUT BACKGROUND */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/images/about_accounting_background.jpg"
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-[0.38] dark:opacity-[0.16]"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F2FAF7]/72 via-[#F3FAF8]/66 to-[#EEF8F5]/68 dark:from-slate-900/88 dark:via-slate-900/82 dark:to-slate-900/86" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-9 flex max-w-3xl flex-col items-start gap-1.5">
          <span className="block text-xs font-bold uppercase tracking-widest text-[#0F766E] dark:text-teal-400">
            {isRTL ? t.tag : 'Profile Overview'}
          </span>

          <h2 className="main-heading-3d text-3xl font-extrabold tracking-tight sm:text-4xl">
            {isRTL ? t.title : 'About Muhammad Salman'}
          </h2>
        </div>

        {/* FINAL DESKTOP STRUCTURE:
            LEFT = summary + compliance + 3 cards
            RIGHT = original image + integrated bottom content */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">

          {/* LEFT SIDE */}
          <div className="flex flex-col lg:col-span-6">

            {/* APPROVED SUMMARY - TRANSPARENT, NO CARD */}
            <div className="space-y-5 text-base font-medium leading-relaxed text-[#1E293B] sm:text-lg dark:text-slate-100">
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
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-400/40 pt-4 text-xs font-semibold text-slate-700 dark:border-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#0F766E]" />
                <span>
                  {isRTL
                    ? t.complianceNote
                    : 'Operating with full compliance in Dammam, Kingdom of Saudi Arabia'}
                </span>
              </div>

              <span className="rounded-md border border-[#0F766E]/25 bg-[#E6F4F1]/90 px-2.5 py-1 font-bold text-[#0F766E] dark:bg-teal-950/70 dark:text-teal-300">
                {isRTL
                  ? t.drivingLicense
                  : 'Valid Saudi Driving License'}
              </span>
            </div>

            {/* THREE FINAL CARDS - LEFT SIDE ONLY */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">

              {/* 14+ */}
              <div className="flex min-h-[108px] flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/75">
                <span
                  className="text-2xl font-extrabold text-[#0F766E] sm:text-3xl dark:text-teal-400"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(255,255,255,.8), 0 2px 3px rgba(15,118,110,.18)'
                  }}
                >
                  14+
                </span>

                <span className="mt-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                  {isRTL ? t.yearsExpLabel : 'Years Experience'}
                </span>
              </div>

              {/* MBA / BBA */}
              <div className="flex min-h-[108px] flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/75">
                <span
                  className="whitespace-nowrap text-lg font-extrabold text-[#0F766E] sm:text-xl dark:text-teal-400"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(255,255,255,.8), 0 2px 3px rgba(15,118,110,.18)'
                  }}
                >
                  {isRTL ? t.mbaFinance : 'MBA / BBA'}
                </span>

                <span className="mt-1 text-[10px] font-semibold leading-tight text-slate-600 sm:text-[11px] dark:text-slate-300">
                  {isRTL
                    ? t.mbaFinanceLabel
                    : 'Accounting & Finance'}
                </span>
              </div>

              {/* ZATCA */}
              <div className="flex min-h-[108px] flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/75">
                <span
                  className="text-2xl font-extrabold text-[#0F766E] sm:text-3xl dark:text-teal-400"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(255,255,255,.8), 0 2px 3px rgba(15,118,110,.18)'
                  }}
                >
                  ZATCA
                </span>

                <span className="mt-1 text-[10px] font-semibold leading-tight text-slate-600 sm:text-[11px] dark:text-slate-300">
                  {isRTL
                    ? t.zatcaVatLabel
                    : 'VAT Reporting & Submission'}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - EXISTING ORIGINAL IMAGE ONLY */}
          <div className="lg:col-span-6">
            <div className="group relative h-full min-h-[390px] overflow-hidden rounded-[24px] sm:min-h-[460px] lg:min-h-full">

              <img
                src="/images/accounting_workplace.jpg"
                alt="Accounting and Financial Operations Workplace"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.91] transition-transform duration-700 group-hover:scale-[1.01] dark:opacity-[0.86]"
                loading="lazy"
              />

              {/* SOFT OUTER EDGE MERGE */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F2FAF7]/24 via-transparent to-[#EEF8F5]/18 dark:from-slate-900/18 dark:via-transparent dark:to-slate-900/14" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F2FAF7]/22 via-transparent to-transparent dark:from-slate-900/16" />

              {/* SOFTER BOTTOM GRADIENT */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F3148]/78 via-[#0F3148]/16 to-transparent" />

              {/* CONTENT INSIDE IMAGE */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <h3 className="mb-2 text-xs font-extrabold uppercase tracking-[0.13em] text-teal-200 sm:text-sm">
                  {isRTL
                    ? t.governanceBadge
                    : 'FINANCIAL OPERATIONS & CONTROLS'}
                </h3>

                <p className="max-w-xl text-xs font-medium leading-relaxed text-white sm:text-sm">
                  {isRTL
                    ? t.governanceDesc
                    : 'Dedicated to accurate ledger maintenance, audit-ready financial schedules, balance confirmations, and ZATCA statutory tax compliance across enterprise operations.'}
                </p>
              </div>

              {/* VERY SUBTLE EDGE DEFINITION */}
              <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/20 dark:ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
