import {
  CalendarDays,
  GraduationCap,
  FileText,
  CheckCircle2,
  Car,
  Briefcase
} from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface AboutProps {
  profile?: ProfileInfo;
}

export function About({ profile: _profile }: AboutProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.about;

  return (
    <section
      id="about"
      className="
        relative
        flex
        min-h-[calc(100vh-5rem)]
        flex-col
        justify-center
        overflow-hidden
        border-b
        border-[#0D2538]
        bg-[#081A2B]
        py-12
        transition-colors
        duration-300
        sm:py-16
        lg:py-0
      "
    >
      {/* ============================================================
          BACKGROUND ATMOSPHERE
          ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Soft warm atmospheric glow near photograph */}
        <div
          className="
            absolute
            top-[5%]
            right-[-10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#D8B56A]/8
            blur-[170px]
          "
        />

        {/* Deep navy depth */}
        <div
          className="
            absolute
            -bottom-36
            -left-28
            h-[540px]
            w-[540px]
            rounded-full
            bg-[#0D2538]/70
            blur-[140px]
          "
        />

        {/* Subtle architectural grid */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#132E4312_1px,transparent_1px),linear-gradient(to_bottom,#132E4312_1px,transparent_1px)]
            bg-[size:4.5rem_4.5rem]
            [mask-image:radial-gradient(ellipse_70%_60%_at_45%_50%,#000_45%,transparent_100%)]
          "
        />
      </div>

      {/* ============================================================
          MAIN CONTENT
          ============================================================ */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">

          {/* ========================================================
              LEFT SIDE — PROFESSIONAL SUMMARY
              ======================================================== */}
          <div
            className={`
              flex
              flex-col
              justify-center
              space-y-6
              lg:col-span-7
              xl:col-span-7
              ${isRTL ? 'lg:text-right' : 'lg:text-left'}
            `}
          >
            {/* SECTION HEADING */}
            <div className="space-y-2">
              <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#D8B56A] uppercase">
                {isRTL ? t.tag : 'ABOUT ME'}
              </span>

              <h2 className="main-heading-3d text-3xl font-extrabold tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl">
                {isRTL ? t.title : 'Professional Summary'}
              </h2>
            </div>

            {/* APPROVED PROFESSIONAL SUMMARY */}
            <div className="space-y-4 text-sm leading-relaxed text-[#CBD5E1] sm:text-base sm:leading-[1.8]">
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

            {/* ======================================================
                HIGHLIGHT CARDS
                ====================================================== */}
            <div className="grid grid-cols-1 gap-3.5 pt-1 sm:grid-cols-3">

              {/* 14+ YEARS */}
              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#D8B56A]/25
                  bg-[#0D2538]/80
                  p-4
                  text-center
                  shadow-md
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D8B56A]/55
                  hover:bg-[#102B40]
                "
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#132E43] text-[#D8B56A]">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <div className="text-2xl font-black text-[#F8FAFC]">
                  14+
                </div>

                <div className="mt-1 text-xs font-bold text-[#CBD5E1]">
                  {isRTL ? t.yearsExpLabel : 'Years Experience'}
                </div>
              </div>

              {/* MBA / BBA */}
              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#D8B56A]/25
                  bg-[#0D2538]/80
                  p-4
                  text-center
                  shadow-md
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D8B56A]/55
                  hover:bg-[#102B40]
                "
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#132E43] text-[#D8B56A]">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div className="text-xl font-black text-[#F8FAFC]">
                  MBA / BBA
                </div>

                <div className="mt-1 text-xs font-bold text-[#CBD5E1]">
                  {isRTL ? 'المحاسبة والمالية' : 'Accounting & Finance'}
                </div>
              </div>

              {/* ZATCA */}
              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#D8B56A]/25
                  bg-[#0D2538]/80
                  p-4
                  text-center
                  shadow-md
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D8B56A]/55
                  hover:bg-[#102B40]
                "
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#132E43] text-[#D8B56A]">
                  <FileText className="h-5 w-5" />
                </div>

                <div className="text-xl font-black text-[#F8FAFC]">
                  ZATCA
                </div>

                <div className="mt-1 text-xs font-bold text-[#CBD5E1]">
                  {isRTL
                    ? 'إقرارات ضريبة القيمة المضافة'
                    : 'VAT Reporting'}
                </div>
              </div>
            </div>

            {/* ======================================================
                COMPLIANCE / CURRENT STATUS
                ====================================================== */}
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
                border-t
                border-[#132E43]
                pt-4
                text-xs
                font-medium
                text-[#CBD5E1]
              "
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D8B56A]" />

                <span>
                  {isRTL
                    ? t.complianceNote
                    : 'Operating with full compliance in Dammam, Kingdom of Saudi Arabia'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">

                {/* SAUDI DRIVING LICENSE */}
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-md
                    border
                    border-[#D8B56A]/30
                    bg-[#0D2538]
                    px-2.5
                    py-1
                    text-[11px]
                    font-semibold
                    text-[#D8B56A]
                  "
                >
                  <Car className="h-3.5 w-3.5" />

                  <span>
                    {isRTL
                      ? t.drivingLicense
                      : 'Valid Saudi Driving License'}
                  </span>
                </span>

                {/* CURRENT EMPLOYER */}
                <a
                  href="https://www.ayalyami.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-md
                    border
                    border-[#132E43]
                    bg-[#0D2538]
                    px-2.5
                    py-1
                    text-[11px]
                    font-semibold
                    text-[#CBD5E1]
                    transition-colors
                    hover:border-[#D8B56A]/50
                    hover:text-[#F8FAFC]
                  "
                  title="Ahmed Yahya Alyami Contracting Co."
                >
                  <Briefcase className="h-3.5 w-3.5 text-[#D8B56A]" />

                  <span>
                    {isRTL
                      ? 'شركة أحمد يحيى اليامي للمقاولات'
                      : 'Ahmed Yahya Alyami Contracting Co.'}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT SIDE — REAL ORIGINAL PHOTO
              CLOUDY / FEATHERED BACKGROUND MERGE
              ======================================================== */}
          <div className="flex items-center justify-center lg:col-span-5 xl:col-span-5">
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[360px]
                sm:max-w-[400px]
                lg:max-w-[440px]
                xl:max-w-[470px]
              "
            >
              {/* LARGE SOFT ATMOSPHERIC HALO */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-[12%]
                  bg-[radial-gradient(ellipse_at_center,rgba(216,181,106,0.10)_0%,rgba(13,37,56,0.18)_42%,rgba(8,26,43,0)_72%)]
                  blur-[45px]
                "
                aria-hidden="true"
              />

              {/* PHOTO AREA */}
              <div
                className="
                  relative
                  aspect-[3/4]
                  w-full
                  overflow-hidden
                  bg-[#081A2B]
                "
              >
                {/* ORIGINAL REAL PHOTO — NEVER MODIFIED */}
                <img
                  src="/images/0D0A2507.JPG"
                  alt={
                    isRTL
                      ? 'محمد سلمان - محاسب'
                      : 'Muhammad Salman - Accountant'
                  }
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    select-none
                    object-cover
                    object-[center_top]
                  "
                  loading="eager"
                />

                {/* ==================================================
                    CLOUDY LEFT MIST
                    Wide + blurred so no straight vertical edge
                    ================================================== */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    top-[-8%]
                    bottom-[-8%]
                    left-[-18%]
                    z-10
                    w-[48%]
                    bg-[#081A2B]/95
                    blur-[48px]
                  "
                  aria-hidden="true"
                />

                {/* SECOND SOFTER LEFT FEATHER */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    top-[-5%]
                    bottom-[-5%]
                    left-[-4%]
                    z-10
                    w-[27%]
                    bg-[#081A2B]/55
                    blur-[36px]
                  "
                  aria-hidden="true"
                />

                {/* ==================================================
                    CLOUDY RIGHT MIST
                    ================================================== */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    top-[-8%]
                    right-[-18%]
                    bottom-[-8%]
                    z-10
                    w-[48%]
                    bg-[#081A2B]/95
                    blur-[48px]
                  "
                  aria-hidden="true"
                />

                {/* SECOND SOFTER RIGHT FEATHER */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    top-[-5%]
                    right-[-4%]
                    bottom-[-5%]
                    z-10
                    w-[27%]
                    bg-[#081A2B]/55
                    blur-[36px]
                  "
                  aria-hidden="true"
                />

                {/* ==================================================
                    CLOUDY TOP MIST
                    ================================================== */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    top-[-14%]
                    right-[-8%]
                    left-[-8%]
                    z-10
                    h-[31%]
                    bg-[#081A2B]/82
                    blur-[48px]
                  "
                  aria-hidden="true"
                />

                {/* ==================================================
                    CLOUDY BOTTOM MIST
                    Stronger to blend lower body into page
                    ================================================== */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-10%]
                    bottom-[-17%]
                    left-[-10%]
                    z-10
                    h-[42%]
                    bg-[#081A2B]
                    blur-[55px]
                  "
                  aria-hidden="true"
                />

                {/* SECOND BOTTOM FEATHER */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-4%]
                    bottom-[-2%]
                    left-[-4%]
                    z-10
                    h-[24%]
                    bg-[#081A2B]/60
                    blur-[34px]
                  "
                  aria-hidden="true"
                />

                {/* ==================================================
                    MASTER ELLIPTICAL VIGNETTE
                    Keeps face/torso center clear and dissolves perimeter
                    ================================================== */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    bg-[radial-gradient(ellipse_55%_64%_at_52%_43%,transparent_0%,transparent_52%,rgba(8,26,43,0.16)_68%,rgba(8,26,43,0.62)_84%,#081A2B_100%)]
                  "
                  aria-hidden="true"
                />

                {/* ==================================================
                    SOFT LOWER NAVY HAZE
                    ================================================== */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    bottom-0
                    left-0
                    z-20
                    h-[30%]
                    bg-[linear-gradient(to_top,#081A2B_0%,rgba(8,26,43,0.78)_28%,rgba(8,26,43,0.28)_65%,transparent_100%)]
                  "
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
