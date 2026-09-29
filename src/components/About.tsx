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
      className="relative overflow-hidden border-b border-slate-200 py-20 transition-colors dark:border-slate-700 dark:bg-slate-900"
    >
      {/* FINAL ABOUT BACKGROUND */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/images/about_accounting_background.jpg"
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-[0.48] dark:opacity-[0.20]"
          loading="lazy"
        />

        {/* Light green/teal professional overlay.
            Background remains clearly visible. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F1FAF7]/78 via-[#F4FAF8]/70 to-[#EDF8F6]/68 dark:from-slate-900/88 dark:via-slate-900/82 dark:to-slate-900/86" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-9 flex max-w-3xl flex-col items-start gap-1.5">
          <span className="block text-xs font-bold uppercase tracking-widest text-[#0F766E] dark:text-teal-400">
            {isRTL ? t.tag : 'Profile Overview'}
          </span>

          <h2 className="main-heading-3d text-3xl font-extrabold tracking-tight sm:text-4xl">
            {isRTL ? t.title : 'About Muhammad Salman'}
          </h2>
        </div>

        {/* MAIN ABOUT CONTENT */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between lg:col-span-6">

            {/* EXACT APPROVED ABOUT TEXT — NO CARD */}
            <div className="space-y-5 text-base font-medium leading-relaxed text-slate-800 sm:text-lg dark:text-slate-100">
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

            {/* COMPLIANCE INFORMATION */}
            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-400/40 pt-4 text-xs font-semibold text-slate-700 dark:border-slate-600 dark:text-slate-300">

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
          </div>

          {/* RIGHT SIDE — KEEP EXISTING ORIGINAL IMAGE */}
          <div className="lg:col-span-6">
            <div className="group relative min-h-[350px] h-full overflow-hidden rounded-[24px] sm:min-h-[410px]">

              <img
                src="/images/accounting_workplace.jpg"
                alt="Accounting and Financial Operations Workplace"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.93] transition-transform duration-700 group-hover:scale-[1.015] dark:opacity-[0.88]"
                loading="lazy"
              />

              {/* EDGE BLENDING — image visually merges with About background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F1FAF7]/32 via-transparent to-[#EDF8F6]/16 dark:from-slate-900/22 dark:via-transparent dark:to-slate-900/12" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F1FAF7]/20 via-transparent to-transparent dark:from-slate-900/15" />

              {/* SOFT BOTTOM GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2941]/82 via-[#0B2941]/18 to-transparent" />

              {/* FINAL CONTENT INSIDE IMAGE */}
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

              <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/25 dark:ring-white/10" />
            </div>
          </div>
        </div>

        {/* FINAL THREE CARDS ONLY */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* 14+ */}
          <div className="flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 p-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/75">

            <span
              className="block text-3xl font-extrabold text-[#0F766E] dark:text-teal-400"
              style={{
                textShadow:
                  '0 1px 0 rgba(255,255,255,.8), 0 2px 3px rgba(15,118,110,.20)'
              }}
            >
              14+
            </span>

            <span className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
              {isRTL ? t.yearsExpLabel : 'Years Experience'}
            </span>
          </div>

          {/* MBA / BBA */}
          <div className="flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 p-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/75">

            <span
              className="block whitespace-nowrap text-2xl font-extrabold text-[#0F766E] dark:text-teal-400"
              style={{
                textShadow:
                  '0 1px 0 rgba(255,255,255,.8), 0 2px 3px rgba(15,118,110,.20)'
              }}
            >
              {isRTL ? t.mbaFinance : 'MBA / BBA'}
            </span>

            <span className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
              {isRTL ? t.mbaFinanceLabel : 'Accounting & Finance'}
            </span>
          </div>

          {/* ZATCA */}
          <div className="flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 p-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/75">

            <span
              className="block text-3xl font-extrabold text-[#0F766E] dark:text-teal-400"
              style={{
                textShadow:
                  '0 1px 0 rgba(255,255,255,.8), 0 2px 3px rgba(15,118,110,.20)'
              }}
            >
              ZATCA
            </span>

            <span className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
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
