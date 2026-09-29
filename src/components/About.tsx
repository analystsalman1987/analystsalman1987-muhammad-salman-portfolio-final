import {
  CalendarDays,
  GraduationCap,
  FileText,
  CheckCircle2,
  Car,
} from 'lucide-react';

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
      className="
        relative overflow-hidden
        border-b border-slate-200
        dark:border-slate-800
        py-16 sm:py-20
      "
    >
      {/* =========================================================
          MAIN ABOUT BACKGROUND
          Keep the existing approved background asset.
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          src="/images/about_accounting_background.jpg"
          alt=""
          className="
            h-full w-full
            object-cover object-center
            opacity-[0.52]
            dark:opacity-[0.20]
          "
        />

        {/* Soft light green/teal treatment */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#edf8f4]/80
            via-[#edf8f4]/67
            to-[#e8f5f1]/42
            dark:from-slate-900/92
            dark:via-slate-900/84
            dark:to-slate-900/72
          "
        />
      </div>

      <div
        className="
          relative z-10
          mx-auto
          max-w-[1380px]
          px-5 sm:px-8 lg:px-12
        "
      >
        {/* =========================================================
            TWO COLUMN FINAL COMPOSITION
        ========================================================== */}
        <div
          className="
            grid grid-cols-1
            items-stretch
            gap-8
            lg:grid-cols-[48%_52%]
            lg:gap-0
          "
        >
          {/* =======================================================
              LEFT SIDE
          ======================================================== */}
          <div
            className="
              relative z-20
              flex flex-col
              lg:pr-10
              xl:pr-14
            "
          >
            {/* FINAL APPROVED HEADING STYLE */}
            <div className="mb-7">
              <span
                className="
                  mb-2 block
                  text-[12px] sm:text-[13px]
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-[#087d69]
                  dark:text-teal-400
                "
              >
                {isRTL ? t.tag : 'ABOUT ME'}
              </span>

              <h2
                className="
                  text-[31px] sm:text-[36px] lg:text-[39px]
                  font-extrabold
                  leading-tight
                  tracking-[-0.025em]
                  text-[#17364d]
                  dark:text-slate-100
                "
              >
                {isRTL ? t.title : 'Professional Summary'}
              </h2>
            </div>

            {/* =====================================================
                APPROVED FINAL PARAGRAPHS
            ====================================================== */}
            <div
              className="
                max-w-[690px]
                space-y-5
                text-[15px] sm:text-[16px]
                font-medium
                leading-[1.75]
                text-[#334155]
                dark:text-slate-200
              "
            >
              <p>
                {isRTL
                  ? t.summaryP1
                  : 'With more than 14 years of accounting and finance experience, I have worked across diverse business environments in Saudi Arabia and Pakistan, supporting day-to-day accounting operations, financial reporting, reconciliations, accounts payable and receivable, and month-end activities.'}
              </p>

              <p>
                {isRTL
                  ? t.summaryP2
                  : 'My professional experience includes ZATCA VAT compliance, inventory and costing, cash and petty cash management, customer and supplier account reconciliation, collections, and ERP-based accounting processes. I focus on maintaining accurate financial records, effective internal controls, and timely financial information to support business operations.'}
              </p>
            </div>

            {/* =====================================================
                COMPLIANCE / LICENSE
            ====================================================== */}
            <div
              className="
                mt-7
                flex flex-col
                gap-3
                border-t border-slate-400/25
                pt-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div
                className="
                  flex items-start gap-2
                  text-[11px] sm:text-[12px]
                  font-semibold
                  leading-relaxed
                  text-[#334155]
                  dark:text-slate-300
                "
              >
                <CheckCircle2
                  size={16}
                  className="mt-[1px] shrink-0 text-[#087d69]"
                />

                <span>
                  {isRTL
                    ? t.complianceNote
                    : 'Operating with full compliance in Dammam, Kingdom of Saudi Arabia'}
                </span>
              </div>

              <div
                className="
                  inline-flex shrink-0
                  items-center gap-1.5
                  self-start
                  rounded-md
                  border border-[#087d69]/20
                  bg-[#e5f4ef]/80
                  px-2.5 py-1.5
                  text-[10px] sm:text-[11px]
                  font-bold
                  text-[#087d69]
                  dark:bg-teal-950/50
                  dark:text-teal-300
                "
              >
                <Car size={13} />

                <span>
                  {isRTL
                    ? t.drivingLicense
                    : 'Valid Saudi Driving License'}
                </span>
              </div>
            </div>

            {/* =====================================================
                FINAL THREE LARGE ICON CARDS
            ====================================================== */}
            <div
              className="
                mt-7
                grid grid-cols-1
                gap-4
                sm:grid-cols-3
              "
            >
              {/* YEARS EXPERIENCE */}
              <div
                className="
                  flex min-h-[145px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[14px]
                  border border-slate-200/80
                  bg-white/88
                  px-3 py-5
                  text-center
                  shadow-[0_8px_24px_rgba(15,23,42,0.07)]
                  backdrop-blur-[2px]
                  dark:border-slate-700
                  dark:bg-slate-800/82
                "
              >
                <div
                  className="
                    mb-3
                    flex h-[44px] w-[44px]
                    items-center justify-center
                    rounded-full
                    bg-[#e7f5f1]
                    text-[#087d69]
                    dark:bg-teal-950/70
                    dark:text-teal-300
                  "
                >
                  <CalendarDays size={22} strokeWidth={1.8} />
                </div>

                <div
                  className="
                    text-[27px]
                    font-extrabold
                    leading-none
                    text-[#087d69]
                    dark:text-teal-400
                  "
                >
                  14+
                </div>

                <div
                  className="
                    mt-2
                    text-[11px]
                    font-bold
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  {isRTL ? t.yearsExpLabel : 'Years Experience'}
                </div>
              </div>

              {/* MBA / BBA */}
              <div
                className="
                  flex min-h-[145px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[14px]
                  border border-slate-200/80
                  bg-white/88
                  px-3 py-5
                  text-center
                  shadow-[0_8px_24px_rgba(15,23,42,0.07)]
                  backdrop-blur-[2px]
                  dark:border-slate-700
                  dark:bg-slate-800/82
                "
              >
                <div
                  className="
                    mb-3
                    flex h-[44px] w-[44px]
                    items-center justify-center
                    rounded-full
                    bg-[#e7f5f1]
                    text-[#087d69]
                    dark:bg-teal-950/70
                    dark:text-teal-300
                  "
                >
                  <GraduationCap size={23} strokeWidth={1.8} />
                </div>

                <div
                  className="
                    whitespace-nowrap
                    text-[21px]
                    font-extrabold
                    leading-none
                    text-[#087d69]
                    dark:text-teal-400
                  "
                >
                  MBA / BBA
                </div>

                <div
                  className="
                    mt-2
                    text-[10px] sm:text-[11px]
                    font-bold
                    leading-tight
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  Accounting &amp; Finance
                </div>
              </div>

              {/* ZATCA */}
              <div
                className="
                  flex min-h-[145px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[14px]
                  border border-slate-200/80
                  bg-white/88
                  px-3 py-5
                  text-center
                  shadow-[0_8px_24px_rgba(15,23,42,0.07)]
                  backdrop-blur-[2px]
                  dark:border-slate-700
                  dark:bg-slate-800/82
                "
              >
                <div
                  className="
                    mb-3
                    flex h-[44px] w-[44px]
                    items-center justify-center
                    rounded-full
                    bg-[#e7f5f1]
                    text-[#087d69]
                    dark:bg-teal-950/70
                    dark:text-teal-300
                  "
                >
                  <FileText size={22} strokeWidth={1.8} />
                </div>

                <div
                  className="
                    text-[24px]
                    font-extrabold
                    leading-none
                    text-[#087d69]
                    dark:text-teal-400
                  "
                >
                  ZATCA
                </div>

                <div
                  className="
                    mt-2
                    text-[10px] sm:text-[11px]
                    font-bold
                    leading-tight
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  VAT Reporting &amp; Submission
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              RIGHT SIDE — FINAL LARGE IMAGE

              IMPORTANT:
              This is NOT styled as a card.
              The image intentionally extends toward the left and
              uses a real CSS mask to dissolve into the section.
          ======================================================== */}
          <div
            className="
              relative
              z-10
              min-h-[470px]
              sm:min-h-[520px]
              lg:min-h-[610px]
            "
          >
            {/* LARGE MERGED IMAGE */}
            <div
              className="
                absolute
                inset-y-0
                -left-10
                right-0
                lg:-left-20
                xl:-left-24
              "
              style={{
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,.18) 5%, black 17%, black 92%, transparent 100%)',
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,.18) 5%, black 17%, black 92%, transparent 100%)',
              }}
            >
              <img
                src="/images/accounting_workplace.jpg"
                alt="Accounting and finance professional workspace"
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover object-center
                  opacity-[0.96]
                  dark:opacity-[0.82]
                "
                loading="lazy"
              />

              {/* TOP FADE */}
              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 top-0
                  h-[18%]
                  bg-gradient-to-b
                  from-[#edf8f4]/70
                  via-[#edf8f4]/20
                  to-transparent
                  dark:from-slate-900/65
                  dark:via-slate-900/15
                  dark:to-transparent
                "
              />

              {/* RIGHT FADE */}
              <div
                className="
                  pointer-events-none
                  absolute inset-y-0 right-0
                  w-[9%]
                  bg-gradient-to-l
                  from-[#edf8f4]/45
                  to-transparent
                  dark:from-slate-900/40
                  dark:to-transparent
                "
              />

              {/* BOTTOM DARK GRADIENT LIKE FINAL REFERENCE */}
              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0
                  h-[46%]
                  bg-gradient-to-t
                  from-[#082f3e]/95
                  via-[#0a3a49]/60
                  to-transparent
                "
              />
            </div>

            {/* =====================================================
                FINANCIAL OPERATIONS CONTENT
            ====================================================== */}
            <div
              className="
                absolute
                bottom-8
                left-5 right-7
                z-20
                sm:bottom-10
                sm:left-8 sm:right-10
                lg:left-10
                xl:left-12
              "
            >
              <h3
                className="
                  text-[12px] sm:text-[13px]
                  font-extrabold
                  uppercase
                  tracking-[0.09em]
                  text-[#35d3b4]
                "
              >
                {isRTL
                  ? t.governanceBadge
                  : 'FINANCIAL OPERATIONS & CONTROLS'}
              </h3>

              <div className="my-3 h-[2px] w-[74px] bg-[#35d3b4]" />

              <p
                className="
                  max-w-[610px]
                  text-[12px] sm:text-[13px]
                  font-medium
                  leading-[1.7]
                  text-white
                "
              >
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
