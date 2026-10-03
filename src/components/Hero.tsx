import { FileDown, ExternalLink } from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface HeroProps {
  profile: ProfileInfo;
  onOpenCV: () => void;
  onSelectExperience?: () => void;
}

export function Hero({ onOpenCV }: HeroProps) {
  const { isRTL } = useLanguage();

  const linkedInUrl =
    'https://www.linkedin.com/in/muhammad-salman-mba-finance-cpa-finalist-66908767/';

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[calc(100svh-5rem)]
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-[#071827]
        px-4
        py-8
        text-center
        sm:px-6
        lg:h-[calc(100svh-5rem)]
        lg:px-8
        lg:py-0
      "
    >
      {/* ============================================================
          NAVY / GOLD ARCHITECTURAL GLASS BACKGROUND
          No people, stars, particles, network or neon effects.
          ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* ----------------------------------------------------------
            DEEP NAVY BASE
            ---------------------------------------------------------- */}
        <div
          className="
            absolute
            -inset-16
            bg-[radial-gradient(ellipse_90%_75%_at_50%_25%,#132E43_0%,#0D2538_30%,#081A2B_62%,#071827_100%)]
          "
        />

        {/* ----------------------------------------------------------
            DISTANT CORPORATE SKYLINE
            ---------------------------------------------------------- */}
        <div className="absolute inset-x-0 bottom-0 h-[44%] opacity-35">
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 420"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="skylineFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#132E43"
                  stopOpacity="0.55"
                />
                <stop
                  offset="100%"
                  stopColor="#071827"
                  stopOpacity="0.95"
                />
              </linearGradient>
            </defs>

            <path
              d="
                M0 420
                L0 310
                L80 310
                L80 270
                L145 270
                L145 325
                L225 325
                L225 230
                L290 230
                L290 315
                L360 315
                L360 255
                L425 255
                L425 340
                L505 340
                L505 285
                L570 285
                L570 320
                L650 320
                L650 245
                L715 245
                L715 325
                L795 325
                L795 275
                L860 275
                L860 335
                L940 335
                L940 235
                L1010 235
                L1010 315
                L1085 315
                L1085 265
                L1150 265
                L1150 325
                L1230 325
                L1230 245
                L1295 245
                L1295 305
                L1370 305
                L1370 275
                L1440 275
                L1440 420
                Z
              "
              fill="url(#skylineFill)"
            />
          </svg>
        </div>

        {/* ----------------------------------------------------------
            MAIN MODERN GLASS FACADE
            Vertical panels + mullions + horizontal floor divisions.
            ---------------------------------------------------------- */}
        <div className="absolute inset-0 opacity-[0.68]">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="glassPanelA"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#D8B56A"
                  stopOpacity="0.09"
                />
                <stop
                  offset="30%"
                  stopColor="#132E43"
                  stopOpacity="0.28"
                />
                <stop
                  offset="70%"
                  stopColor="#0D2538"
                  stopOpacity="0.42"
                />
                <stop
                  offset="100%"
                  stopColor="#071827"
                  stopOpacity="0.12"
                />
              </linearGradient>

              <linearGradient
                id="glassPanelB"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#F8FAFC"
                  stopOpacity="0.06"
                />
                <stop
                  offset="40%"
                  stopColor="#132E43"
                  stopOpacity="0.32"
                />
                <stop
                  offset="100%"
                  stopColor="#C9A45C"
                  stopOpacity="0.07"
                />
              </linearGradient>

              <linearGradient
                id="glassPanelC"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#071827"
                  stopOpacity="0.18"
                />
                <stop
                  offset="55%"
                  stopColor="#0D2538"
                  stopOpacity="0.36"
                />
                <stop
                  offset="100%"
                  stopColor="#D8B56A"
                  stopOpacity="0.08"
                />
              </linearGradient>

              <linearGradient
                id="goldMullion"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#D8B56A"
                  stopOpacity="0.24"
                />
                <stop
                  offset="50%"
                  stopColor="#CBD5E1"
                  stopOpacity="0.12"
                />
                <stop
                  offset="100%"
                  stopColor="#D8B56A"
                  stopOpacity="0.08"
                />
              </linearGradient>
            </defs>

            {/* Glass panel surfaces */}
            <rect
              x="0"
              y="0"
              width="180"
              height="900"
              fill="url(#glassPanelA)"
            />

            <rect
              x="180"
              y="0"
              width="180"
              height="900"
              fill="url(#glassPanelB)"
            />

            <rect
              x="360"
              y="0"
              width="180"
              height="900"
              fill="url(#glassPanelC)"
            />

            <rect
              x="540"
              y="0"
              width="180"
              height="900"
              fill="url(#glassPanelA)"
            />

            <rect
              x="720"
              y="0"
              width="180"
              height="900"
              fill="url(#glassPanelB)"
            />

            <rect
              x="900"
              y="0"
              width="180"
              height="900"
              fill="url(#glassPanelC)"
            />

            <rect
              x="1080"
              y="0"
              width="180"
              height="900"
              fill="url(#glassPanelA)"
            />

            <rect
              x="1260"
              y="0"
              width="180"
              height="900"
              fill="url(#glassPanelB)"
            />

            {/* Vertical architectural mullions */}
            {[
              90,
              180,
              270,
              360,
              450,
              540,
              630,
              720,
              810,
              900,
              990,
              1080,
              1170,
              1260,
              1350
            ].map((x) => (
              <line
                key={`vertical-${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2="900"
                stroke="url(#goldMullion)"
                strokeWidth={x % 180 === 0 ? 1.4 : 0.65}
              />
            ))}

            {/* Horizontal floor divisions */}
            {[145, 290, 435, 580, 725].map((y) => (
              <line
                key={`horizontal-${y}`}
                x1="0"
                y1={y}
                x2="1440"
                y2={y}
                stroke="#CBD5E1"
                strokeOpacity="0.08"
                strokeWidth="0.8"
              />
            ))}

            {/* Architectural perspective lines */}
            <line
              x1="0"
              y1="900"
              x2="350"
              y2="0"
              stroke="#D8B56A"
              strokeOpacity="0.08"
              strokeWidth="1"
            />

            <line
              x1="1440"
              y1="900"
              x2="1090"
              y2="0"
              stroke="#D8B56A"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* ----------------------------------------------------------
            SUBTLE GLASS DEPTH PANELS
            Vertical, not oversized diagonal polygons.
            ---------------------------------------------------------- */}
        <div
          className="
            animate-arch-depth-a
            absolute
            top-[-8%]
            left-[4%]
            h-[116%]
            w-[20%]
            border-x
            border-[#D8B56A]/10
            bg-gradient-to-r
            from-transparent
            via-[#132E43]/12
            to-transparent
            backdrop-blur-[1px]
          "
        />

        <div
          className="
            animate-arch-depth-b
            absolute
            top-[-8%]
            right-[5%]
            h-[116%]
            w-[18%]
            border-x
            border-[#CBD5E1]/8
            bg-gradient-to-r
            from-transparent
            via-[#0D2538]/18
            to-transparent
            backdrop-blur-[1px]
          "
        />

        {/* ----------------------------------------------------------
            CHAMPAGNE GOLD SUNSET / BUILDING REFLECTION
            ---------------------------------------------------------- */}
        <div
          className="
            animate-gold-drift
            absolute
            top-[6%]
            left-[5%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[radial-gradient(circle,rgba(216,181,106,0.20)_0%,rgba(201,164,92,0.10)_34%,rgba(216,181,106,0.03)_58%,transparent_74%)]
            blur-[65px]
          "
        />

        <div
          className="
            animate-gold-drift-2
            absolute
            right-[4%]
            bottom-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(201,164,92,0.16)_0%,rgba(216,181,106,0.07)_40%,transparent_72%)]
            blur-[75px]
          "
        />

        {/* ----------------------------------------------------------
            LARGE MOVING GLASS REFLECTION
            ---------------------------------------------------------- */}
        <div
          className="
            animate-glass-reflection
            absolute
            -top-[35%]
            -left-[45%]
            h-[180%]
            w-[65%]
            rotate-[8deg]
            bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.02)_22%,rgba(216,181,106,0.07)_42%,rgba(255,255,255,0.10)_50%,rgba(216,181,106,0.05)_58%,transparent_78%)]
            blur-[2px]
          "
        />

        {/* ----------------------------------------------------------
            NARROW GLASS LIGHT SWEEP
            ---------------------------------------------------------- */}
        <div
          className="
            animate-light-sweep
            absolute
            -top-[45%]
            -left-[20%]
            h-[190%]
            w-[240px]
            rotate-[7deg]
            bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.02)_28%,rgba(255,255,255,0.13)_47%,rgba(216,181,106,0.20)_50%,rgba(255,255,255,0.10)_53%,rgba(255,255,255,0.02)_72%,transparent_100%)]
            blur-[1px]
          "
        />

        {/* ----------------------------------------------------------
            CENTRAL DARK GLASS AREA
            Keeps name and buttons highly readable.
            ---------------------------------------------------------- */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_48%_48%_at_50%_50%,rgba(7,24,39,0.48)_0%,rgba(7,24,39,0.22)_52%,transparent_78%)]
          "
        />

        {/* ----------------------------------------------------------
            EXECUTIVE EDGE VIGNETTE
            ---------------------------------------------------------- */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_75%_72%_at_50%_48%,transparent_42%,rgba(7,24,39,0.30)_72%,#071827_100%)]
          "
        />
      </div>

      {/* ============================================================
          MINIMAL HERO CONTENT
          ============================================================ */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          items-center
          justify-center
          space-y-6
        "
      >
        {/* Welcome label */}
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-6 bg-[#D8B56A]/60 sm:w-10" />

          <span
            className="
              text-[11px]
              font-bold
              tracking-[0.28em]
              text-[#D8B56A]
              uppercase
              sm:text-xs
              sm:tracking-[0.34em]
            "
          >
            {isRTL
              ? 'مرحباً بكم في ملفي المهني'
              : 'WELCOME TO MY PORTFOLIO'}
          </span>

          <span className="h-px w-6 bg-[#D8B56A]/60 sm:w-10" />
        </div>

        {/* Name */}
        <h1
          className="
            select-none
            text-4xl
            leading-[1.1]
            font-extrabold
            tracking-tight
            sm:text-6xl
            md:text-7xl
            lg:text-[5.25rem]
          "
        >
          <span className="text-[#F8FAFC] drop-shadow-[0_2px_12px_rgba(0,0,0,0.60)]">
            {isRTL ? 'محمد' : 'MUHAMMAD'}
          </span>

          {' '}

          <span className="text-[#D8B56A] drop-shadow-[0_2px_16px_rgba(216,181,106,0.22)]">
            {isRTL ? 'سلمان' : 'SALMAN'}
          </span>
        </h1>

        {/* Designation */}
        <p
          className="
            text-base
            font-semibold
            tracking-[0.25em]
            text-[#CBD5E1]
            uppercase
            sm:text-xl
            sm:tracking-[0.35em]
            md:text-2xl
          "
        >
          {isRTL
            ? ARABIC_TRANSLATIONS.hero.role || 'محاسب'
            : 'ACCOUNTANT'}
        </p>

        {/* ==========================================================
            ACTION BUTTONS
            ========================================================== */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            pt-4
            sm:gap-5
          "
        >
          {/* DOWNLOAD CV */}
          <button
            type="button"
            onClick={onOpenCV}
            className="
              group
              relative
              inline-flex
              cursor-pointer
              touch-manipulation
              select-none
              items-center
              gap-2.5
              overflow-hidden
              rounded-xl
              border
              border-[#D8B56A]/50
              bg-[#0D2538]/95
              px-7
              py-3.5
              text-sm
              font-bold
              text-[#F8FAFC]
              shadow-lg
              shadow-black/40
              backdrop-blur-md
              transition-all
              duration-300
              ease-out
              hover:-translate-y-0.5
              hover:border-[#D8B56A]
              hover:bg-[#132E43]
              hover:shadow-[#D8B56A]/10
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#D8B56A]
            "
          >
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
              aria-hidden="true"
            />

            <FileDown className="relative z-10 h-4 w-4 text-[#D8B56A]" />

            <span className="relative z-10">
              {isRTL
                ? ARABIC_TRANSLATIONS.hero.downloadCv
                : 'Download CV'}
            </span>
          </button>

          {/* ========================================================
              LINKEDIN — FINAL LIVE PROFILE URL
              ======================================================== */}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              isRTL
                ? 'فتح الملف الشخصي على LinkedIn'
                : 'Open Muhammad Salman LinkedIn Profile'
            }
            className="
              group
              relative
              inline-flex
              cursor-pointer
              touch-manipulation
              select-none
              items-center
              gap-2.5
              overflow-hidden
              rounded-xl
              border
              border-[#D8B56A]/45
              bg-[#071827]/78
              px-6
              py-3.5
              text-sm
              font-semibold
              text-[#CBD5E1]
              shadow-md
              shadow-black/30
              backdrop-blur-md
              transition-all
              duration-300
              ease-out
              hover:-translate-y-0.5
              hover:border-[#D8B56A]
              hover:bg-[#0D2538]/90
              hover:text-[#F8FAFC]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#D8B56A]
            "
          >
            {/* Subtle hover reflection */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-[#D8B56A]/8
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
              aria-hidden="true"
            />

            {/* LinkedIn icon */}
            <svg
              className="
                relative
                z-10
                h-4
                w-4
                fill-current
                text-[#D8B56A]
              "
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37z" />
            </svg>

            <span className="relative z-10">
              {isRTL
                ? 'الملف الشخصي على LinkedIn'
                : 'LinkedIn Profile'}
            </span>

            <ExternalLink className="relative z-10 h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
