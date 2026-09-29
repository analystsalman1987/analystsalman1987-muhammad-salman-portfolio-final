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
      {/* =========================================================
          FINAL ABOUT BACKGROUND
          Keep the same existing About background image.
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          src="/images/about_accounting_background.jpg"
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-[0.48] dark:opacity-[0.20]"
          loading="lazy"
        />

        {/* Light green / teal overlay.
            Background remains visible behind the content. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F1FAF7]/66 via-[#F3FAF8]/58 to-[#EDF8F5]/54 dark:from-slate-900/88 dark:via-slate-900/82 dark:to-slate-900/86" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            ABOUT HEADER
        ========================================================== */}
        <div className="mb-9 flex max-w-3xl flex-col items-start gap-1.5">
          <span className="block text-xs font-bold uppercase tracking-widest text-[#0F766E] dark:text-teal-400">
            {isRTL ? t.tag : 'Profile Overview'}
          </span>

          <h2 className="main-heading-3d text-3xl font-extrabold tracking-tight sm:text-4xl">
            {isRTL ? t.title : 'About Muhammad Salman'}
          </h2>
        </div>

        {/* =========================================================
            FINAL DESKTOP LAYOUT
            LEFT:
            - Approved paragraphs
            - Compliance / Driving License
            - 3 cards

            RIGHT:
            - Existing original image
            - Merged/faded edges
            - Financial Operations & Controls
        ========================================================== */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">

          {/* =======================================================
              LEFT SIDE
          ======================================================== */}
          <div className="flex flex-col lg:col-span-6">

            {/* EXACT APPROVED PROFESSIONAL SUMMARY */}
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

            {/* =====================================================
                COMPLIANCE + DRIVING LICENSE
            ====================================================== */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-500/30 pt-4 text-xs font-semibold text-slate-700 dark:border-slate-600 dark:text-slate-300">

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

            {/* =====================================================
                FINAL THREE ABOUT CARDS
            ====================================================== */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">

              {/* 14+ */}
              <div className="flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/75">

                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-[#0F766E] dark:bg-teal-950/70 dark:text-teal-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M16 3v4M8 3v4M3 10h18" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01M16 17h.01" />
                  </svg>
                </div>

                <span
                  className="text-2xl font-extrabold text-[#0F766E] sm:text-3xl dark:text-teal-400"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(255,255,255,.8), 0 2px 3px rgba(15,118,110,.18)'
                  }}
                >
                  14+
                </span>

                <span className="mt-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  {isRTL ? t.yearsExpLabel : 'Years Experience'}
                </span>
              </div>

              {/* MBA / BBA */}
              <div className="flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/75">

                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-[#0F766E] dark:bg-teal-950/70 dark:text-teal-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M3 10l9-5 9 5-9 5-9-5Z" />
                    <path d="M7 12.5V17c3 2 7 2 10 0v-4.5" />
                  </svg>
                </div>

                <span
                  className="whitespace-nowrap text-lg font-extrabold text-[#0F766E] sm:text-xl dark:text-teal-400"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(255,255,255,.8), 0 2px 3px rgba(15,118,110,.18)'
                  }}
                >
                  {isRTL ? t.mbaFinance : 'MBA / BBA'}
                </span>

                <span className="mt-1 text-[10px] font-semibold leading-tight text-slate-700 sm:text-[11px] dark:text-slate-300">
                  {isRTL
                    ? t.mbaFinanceLabel
                    : 'Accounting & Finance'}
                </span>
              </div>

              {/* ZATCA */}
              <div className="flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/75">

                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-[#0F766E] dark:bg-teal-950/70 dark:text-teal-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M6 3h9l4 4v14H6V3Z" />
                    <path d="M15 3v5h4M9 12h6M9 16h6" />
                  </svg>
                </div>

                <span
                  className="text-2xl font-extrabold text-[#0F766E] sm:text-3xl dark:text-teal-400"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(255,255,255,.8), 0 2px 3px rgba(15,118,110,.18)'
                  }}
                >
                  ZATCA
                </span>

                <span className="mt-1 text-[10px] font-semibold leading-tight text-slate-700 sm:text-[11px] dark:text-slate-300">
                  {isRTL
                    ? t.zatcaVatLabel
                    : 'VAT Reporting & Submission'}
                </span>
              </div>

            </div>
          </div>

          {/* =======================================================
              RIGHT SIDE
              EXISTING ORIGINAL IMAGE + FINAL MERGE EFFECT
          ======================================================== */}
          <div className="relative lg:col-span-6">

            <div className="relative h-full min-h-[420px] overflow-hidden sm:min-h-[470px] lg:min-h-full">

              {/* EXISTING ORIGINAL ABOUT IMAGE */}
              <img
                src="/images/accounting_workplace.jpg"
                alt="Accounting and Financial Operations Workplace"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.96] dark:opacity-[0.90]"
                loading="lazy"
              />

              {/* ===================================================
                  LEFT EDGE MERGE
              ==================================================== */}
              <div
                className="
                  pointer-events-none
                  absolute inset-y-0 left-0
                  w-[17%]
                  bg-gradient-to-r
                  from-[#F1FAF7]/95
                  via-[#F1FAF7]/40
                  to-transparent
                  dark:from-slate-900/90
                  dark:via-slate-900/35
                  dark:to-transparent
                "
              />

              {/* ===================================================
                  RIGHT EDGE MERGE
              ==================================================== */}
              <div
                className="
                  pointer-events-none
                  absolute inset-y-0 right-0
                  w-[10%]
                  bg-gradient-to-l
                  from-[#EDF8F5]/80
                  via-[#EDF8F5]/25
                  to-transparent
                  dark:from-slate-900/70
                  dark:via-slate-900/20
                  dark:to-transparent
                "
              />

              {/* ===================================================
                  TOP EDGE MERGE
              ==================================================== */}
              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 top-0
                  h-[11%]
                  bg-gradient-to-b
                  from-[#F1FAF7]/70
                  via-[#F1FAF7]/18
                  to-transparent
                  dark:from-slate-900/60
                  dark:via-slate-900/15
                  dark:to-transparent
                "
              />

              {/* ===================================================
                  SOFT BOTTOM IMAGE OVERLAY
              ==================================================== */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#062B3D]/92
                  via-[#0B3547]/25
                  to-transparent
                "
              />

              {/* ===================================================
                  FINAL APPROVED CONTENT INSIDE IMAGE
              ==================================================== */}
              <div className="absolute inset-x-0 bottom-0 px-7 pb-7 sm:px-9 sm:pb-9">

                <h3 className="text-xs font-extrabold uppercase tracking-[0.10em] text-teal-300 sm:text-sm">
                  {isRTL
                    ? t.governanceBadge
                    : 'FINANCIAL OPERATIONS & CONTROLS'}
                </h3>

                <div className="my-3 h-[2px] w-20 bg-teal-400/90" />

                <p className="max-w-xl text-xs font-medium leading-relaxed text-white sm:text-sm">
                  {isRTL
                    ? t.governanceDesc
                    : 'Dedicated to accurate ledger maintenance, audit-ready financial schedules, balance confirmations, and ZATCA statutory tax compliance across enterprise operations.'}
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
