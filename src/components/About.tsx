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
      {/* Background Architectural Glass Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <div
          className="
            absolute
            -top-32
            -right-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#D8B56A]/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -bottom-28
            -left-20
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#0D2538]/70
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#132E4315_1px,transparent_1px),linear-gradient(to_bottom,#132E4315_1px,transparent_1px)]
            bg-[size:4.5rem_4.5rem]
            [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_50%,transparent_100%)]
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">

          {/* LEFT SIDE */}
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

            {/* HIGHLIGHT CARDS */}
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
                  bg-[#0D2538]/85
                  p-4
                  text-center
                  shadow-md
                  backdrop-blur-xs
                  transition-all
                  duration-250
                  hover:-translate-y-1
                  hover:border-[#D8B56A]/60
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
                  bg-[#0D2538]/85
                  p-4
                  text-center
                  shadow-md
                  backdrop-blur-xs
                  transition-all
                  duration-250
                  hover:-translate-y-1
                  hover:border-[#D8B56A]/60
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
                  bg-[#0D2538]/85
                  p-4
                  text-center
                  shadow-md
                  backdrop-blur-xs
                  transition-all
                  duration-250
                  hover:-translate-y-1
                  hover:border-[#D8B56A]/60
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

            {/* COMPLIANCE & CURRENT STATUS */}
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

          {/* RIGHT SIDE — REAL ORIGINAL PHOTO ONLY */}
          <div className="flex items-center justify-center lg:col-span-5 xl:col-span-5">
            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[410px] xl:max-w-[440px]">

              {/* GOLD RIM GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-3
                  rounded-[2rem]
                  bg-gradient-to-tr
                  from-[#D8B56A]/20
                  via-[#132E43]/40
                  to-transparent
                  blur-2xl
                  sm:-inset-4
                "
                aria-hidden="true"
              />

              {/* PHOTO CONTAINER */}
              <div
                className="
                  relative
                  aspect-[3/4]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#D8B56A]/40
                  bg-[#0D2538]
                  shadow-2xl
                  shadow-black/60
                  backdrop-blur-md
                  sm:rounded-3xl
                "
              >
                {/* FINAL REAL PHOTO */}
                <img
                  src="/images/0D0A2507.JPG"
                  alt={
                    isRTL
                      ? 'محمد سلمان - محاسب'
                      : 'Muhammad Salman - Accountant'
                  }
                  className="
                    h-full
                    w-full
                    select-none
                    object-cover
                    object-[center_top]
                  "
                  loading="eager"
                />

                {/* INNER GOLD BORDER */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-2xl
                    ring-1
                    ring-inset
                    ring-[#D8B56A]/20
                    sm:rounded-3xl
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
