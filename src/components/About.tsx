import {
  CalendarDays,
  GraduationCap,
  FileText,
  CheckCircle2,
  Car,
  Briefcase,
  Download,
  Linkedin,
} from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface AboutProps {
  profile?: ProfileInfo;
  onOpenCV?: () => void;
}

export function About({ profile: _profile, onOpenCV }: AboutProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.about;

  return (
    <section
      id="about"
      className="misty-portfolio relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden border-b border-[#C5D5E2] bg-[#305879] py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#305879' }}
    >
      <style>{`
        #about .about-readable-copy, #about .about-readable-copy p {
          color: #F3F7FA !important;
          -webkit-text-fill-color: #F3F7FA !important;
          opacity: 1 !important;
        }
        #about .about-stats .group > div, #about .about-stats .group > div * {
          color: #F3F7FA !important;
          -webkit-text-fill-color: #F3F7FA !important;
        }
        #about .about-stats .group:hover > div,
        #about .about-stats .group:hover > div * {
          color: #BE9852 !important;
          -webkit-text-fill-color: #BE9852 !important;
        }
        #about .about-compliance, #about .about-compliance > div > span {
          color: #F3F7FA !important;
          -webkit-text-fill-color: #F3F7FA !important;
        }
        #about .about-compliance .about-bottom-badge {
          background-color: #F3F7FA !important;
          border-color: #C5D5E2 !important;
          color: #17324A !important;
          -webkit-text-fill-color: #17324A !important;
        }
        #about .about-compliance .about-bottom-badge span {
          color: #17324A !important;
          -webkit-text-fill-color: #17324A !important;
          opacity: 1 !important;
        }
        #about .about-compliance .about-bottom-badge:hover span {
          color: #8B6B32 !important;
          -webkit-text-fill-color: #8B6B32 !important;
        }
      `}</style>
      {/* ============================================================
          ABOUT BACKGROUND & DECORATIVE ATMOSPHERE
          ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Subtle Accounting Background Image */}
        <img
          src="/images/about_accounting_background.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.14] filter contrast-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#305879]/95 via-[#305879]/88 to-[#305879]/95" />

        {/* Soft Golden Ambient Glow */}
        <div
          className="absolute top-[8%] right-[-10%] h-[550px] w-[550px] rounded-full bg-[#BE9852]/10 blur-[150px]"
        />
        <div
          className="absolute -bottom-36 -left-28 h-[500px] w-[500px] rounded-full bg-[#17324A]/8 blur-[130px]"
        />

        {/* Subtle Decorative Grid Pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#17324A08_1px,transparent_1px),linear-gradient(to_bottom,#17324A08_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_45%_50%,#000_45%,transparent_100%)]"
        />
      </div>

      {/* ============================================================
          MAIN CONTENT
          ============================================================ */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">

          {/* ========================================================
              LEFT CONTENT
              ======================================================== */}
          <div
            className={`flex flex-col justify-center space-y-6 lg:col-span-7 xl:col-span-7 ${
              isRTL ? 'lg:text-right' : 'lg:text-left'
            }`}
          >
            {/* HEADING */}
            <div className="flex flex-col items-start rtl:items-start text-left rtl:text-right">
              <span className="block text-xs font-bold tracking-[0.25em] text-[#BE9852] uppercase mb-2.5 sm:mb-3">
                {isRTL ? t.tag : 'ABOUT ME'}
              </span>

              <h2 className="main-heading-3d text-3xl font-extrabold tracking-tight text-[#17324A] sm:text-4xl lg:text-5xl">
                {isRTL ? t.title : 'Professional Summary'}
              </h2>
            </div>

            {/* PROFESSIONAL SUMMARY - PARAGRAPHS OVER BACKGROUND */}
            <div className="about-readable-copy space-y-4 text-sm leading-relaxed text-[#F3F7FA] sm:text-base sm:leading-[1.8] font-normal">
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

            {/* ACTION BUTTONS: Download CV & LinkedIn */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#BE9852] bg-gradient-to-r from-[#BE9852] to-[#A8823C] px-6 py-3 text-sm sm:text-base font-bold text-white shadow-md shadow-[#BE9852]/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-[#C9A45C] hover:to-[#BE9852] hover:shadow-lg hover:shadow-[#BE9852]/35 cursor-pointer select-none touch-manipulation"
              >
                <Download className="h-4 w-4 text-white" />
                <span>{isRTL ? (t.downloadCv || 'تحميل السيرة الذاتية') : 'Download CV'}</span>
              </button>

              <a
                href="https://www.linkedin.com/in/muhammad-salman-mba-finance-cpa-finalist-66908767/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#C5D5E2] bg-[#F3F7FA] px-6 py-3 text-sm sm:text-base font-bold text-[#17324A] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A66C2]/50 hover:bg-white hover:text-[#0A66C2] hover:shadow-md cursor-pointer select-none touch-manipulation"
              >
                <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                <span>{isRTL ? (t.linkedin || 'لينكد إن') : 'LinkedIn'}</span>
              </a>
            </div>

            {/* ======================================================
                THREE HIGHLIGHT STATISTICS (DIRECT ON BACKGROUND, NO WHITE CARDS)
                ====================================================== */}
            <div className="about-stats grid grid-cols-1 gap-3.5 pt-1 sm:grid-cols-3">

              {/* 1. EXPERIENCE */}
              <div
                className="group flex flex-col items-center justify-center p-3 text-center transition-all duration-300 cursor-default select-none hover:-translate-y-1"
              >
                <div className="mb-2 flex items-center justify-center text-[#17324A] group-hover:text-[#BE9852] transition-colors duration-300">
                  <CalendarDays className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-xs" />
                </div>

                <div 
                  className="text-2xl sm:text-3xl font-black text-[#17324A] group-hover:text-[#BE9852] transition-colors duration-300 tracking-tight"
                  style={{ textShadow: '0 1px 1px rgba(23, 50, 74, 0.16)' }}
                >
                  14+
                </div>

                <div className="mt-1 text-xs font-bold text-[#17324A]/80 group-hover:text-[#BE9852] transition-colors duration-300">
                  {isRTL ? t.yearsExpLabel : 'Years Experience'}
                </div>
              </div>

              {/* 2. EDUCATION */}
              <div
                className="group flex flex-col items-center justify-center p-3 text-center transition-all duration-300 cursor-default select-none hover:-translate-y-1"
              >
                <div className="mb-2 flex items-center justify-center text-[#17324A] group-hover:text-[#BE9852] transition-colors duration-300">
                  <GraduationCap className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-xs" />
                </div>

                <div 
                  className="text-xl sm:text-2xl font-black text-[#17324A] group-hover:text-[#BE9852] transition-colors duration-300 tracking-tight"
                  style={{ textShadow: '0 1px 1px rgba(23, 50, 74, 0.16)' }}
                >
                  MBA / BBA
                </div>

                <div className="mt-1 text-xs font-bold text-[#17324A]/80 group-hover:text-[#BE9852] transition-colors duration-300">
                  {isRTL ? 'المحاسبة والمالية' : 'Accounting & Finance'}
                </div>
              </div>

              {/* 3. ZATCA */}
              <div
                className="group flex flex-col items-center justify-center p-3 text-center transition-all duration-300 cursor-default select-none hover:-translate-y-1"
              >
                <div className="mb-2 flex items-center justify-center text-[#17324A] group-hover:text-[#BE9852] transition-colors duration-300">
                  <FileText className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-xs" />
                </div>

                <div 
                  className="text-xl sm:text-2xl font-black text-[#17324A] group-hover:text-[#BE9852] transition-colors duration-300 tracking-tight"
                  style={{ textShadow: '0 1px 1px rgba(23, 50, 74, 0.16)' }}
                >
                  ZATCA
                </div>

                <div className="mt-1 text-xs font-bold text-[#17324A]/80 group-hover:text-[#BE9852] transition-colors duration-300">
                  {isRTL ? 'إقرارات ضريبة القيمة المضافة' : 'VAT Reporting'}
                </div>
              </div>
            </div>

            {/* ======================================================
                STATUS / COMPLIANCE BAR
                ====================================================== */}
            <div className="about-compliance flex flex-wrap items-center justify-between gap-3 border-t border-[#C5D5E2]/40 pt-4 text-xs font-medium text-[#F3F7FA]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#BE9852]" />
                <span>
                  {isRTL
                    ? t.complianceNote
                    : 'Operating with full compliance in Dammam, Kingdom of Saudi Arabia'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* DRIVING LICENSE */}
                <span className="about-bottom-badge inline-flex items-center gap-1.5 rounded-md border border-[#C5D5E2] bg-[#F3F7FA] px-2.5 py-1 text-[11px] font-semibold text-[#17324A]">
                  <Car className="h-3.5 w-3.5 text-[#BE9852]" />
                  <span>
                    {isRTL ? t.drivingLicense : 'Valid Saudi Driving License'}
                  </span>
                </span>

                {/* CURRENT EMPLOYER */}
                <a
                  href="https://www.ayalyami.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-bottom-badge inline-flex items-center gap-1.5 rounded-md border border-[#C5D5E2] bg-[#F3F7FA] px-2.5 py-1 text-[11px] font-semibold text-[#17324A] transition-colors hover:border-[#BE9852]/60 hover:text-[#BE9852]"
                  title="Ahmed Yahya Alyami Contracting Co."
                >
                  <Briefcase className="h-3.5 w-3.5 text-[#BE9852]" />
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
              RIGHT SIDE — REAL PHOTO (NATURAL BLENDED EDGES)
              ======================================================== */}
          <div className="flex items-center justify-center lg:col-span-5 xl:col-span-5">
            <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[470px]">
              {/* SUBTLE GOLD ATMOSPHERE BEHIND PHOTO */}
              <div
                className="pointer-events-none absolute -inset-[10%] bg-[radial-gradient(ellipse_at_center,rgba(190,152,82,0.12)_0%,rgba(190,152,82,0.04)_45%,transparent_72%)] blur-[50px]"
                aria-hidden="true"
              />

              {/* PHOTO CONTAINER WITH NATURAL FEATHERED EDGES MERGING INTO MISTY BLUE */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-transparent">
                <img
                  src="/images/Muhammad_Salman_HD_1200.webp"
                  alt={
                    isRTL
                      ? 'محمد سلمان - محاسب'
                      : 'Muhammad Salman - Accountant'
                  }
                  className="absolute inset-0 h-full w-full select-none object-cover object-[center_top]"
                  style={{
                    maskImage: 'radial-gradient(ellipse 73% 72% at 50% 48%, #000 48%, rgba(0,0,0,.96) 65%, rgba(0,0,0,.6) 82%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 73% 72% at 50% 48%, #000 48%, rgba(0,0,0,.96) 65%, rgba(0,0,0,.6) 82%, transparent 100%)',
                  }}
                  loading="eager"
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
