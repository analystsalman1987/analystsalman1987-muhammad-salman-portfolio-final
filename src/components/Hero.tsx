import { FileDown, ExternalLink } from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface HeroProps {
  profile?: ProfileInfo;
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
        lg:min-h-[calc(100svh-5rem)]
        lg:px-8
        lg:py-0
      "
    >
      {/* ============================================================
          FINAL HERO BACKGROUND
          Real distant buildings + native SVG finance animation
          ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Deep Navy Base */}
        <div className="absolute inset-0 bg-[#071827]" />

        <div
          className="
            absolute
            -inset-16
            bg-[radial-gradient(ellipse_95%_82%_at_50%_30%,#132E43_0%,#0D2538_30%,#081A2B_63%,#071827_100%)]
          "
        />

        {/* ==========================================================
            REAL BUILDINGS
            SMALL + DISTANT + LOWER LEFT
            ========================================================== */}
        <div
          className="
            absolute
            bottom-0
            left-0
            z-[1]
            h-[38%]
            w-[48%]
            overflow-hidden
            sm:h-[40%]
            sm:w-[45%]
            lg:h-[42%]
            lg:w-[42%]
            xl:w-[40%]
          "
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, black 0%, black 58%, rgba(0,0,0,0.82) 72%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, black 0%, black 58%, rgba(0,0,0,0.82) 72%, transparent 100%)',
          }}
        >
          <img
            src="/images/hero-distant-buildings.jpg"
            alt=""
            draggable={false}
            loading="eager"
            className="
              absolute
              bottom-0
              left-0
              h-auto
              w-full
              object-contain
              object-left-bottom
              opacity-[0.82]
            "
            style={{
              filter:
                'brightness(0.58) contrast(1.16) saturate(0.72) sepia(0.10)',
            }}
          />

          {/* Navy blend */}
          <div className="absolute inset-0 bg-[#071827]/20 mix-blend-multiply" />

          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-[#071827] via-[#071827]/60 to-transparent" />

          {/* Right fade */}
          <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-r from-transparent via-[#071827]/45 to-[#071827]" />

          {/* Bottom integration */}
          <div className="absolute inset-x-0 bottom-0 h-[16%] bg-gradient-to-t from-[#071827]/75 to-transparent" />
        </div>

        {/* Subtle gold reflection below buildings */}
        <div
          className="
            absolute
            bottom-0
            left-0
            z-[1]
            h-[12%]
            w-[42%]
            bg-[radial-gradient(ellipse_at_bottom,rgba(216,181,106,0.08)_0%,rgba(13,37,56,0.08)_45%,transparent_75%)]
            blur-2xl
          "
        />

        {/* ==========================================================
            FINANCIAL GRAPH
            RIGHT SIDE ONLY
            Native SVG animation for clearly visible movement
            ========================================================== */}
        <svg
          className="absolute inset-0 z-[2] h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="finalHeroGraphFill"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#D8B56A"
                stopOpacity="0.16"
              />
              <stop
                offset="52%"
                stopColor="#C9A45C"
                stopOpacity="0.055"
              />
              <stop
                offset="100%"
                stopColor="#071827"
                stopOpacity="0"
              />
            </linearGradient>

            <linearGradient
              id="finalHeroGold"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#C9A45C"
                stopOpacity="0.45"
              />
              <stop
                offset="40%"
                stopColor="#D8B56A"
                stopOpacity="0.90"
              />
              <stop
                offset="100%"
                stopColor="#F4E7C5"
                stopOpacity="1"
              />
            </linearGradient>

            <linearGradient
              id="finalHeroBar"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#0D2538"
                stopOpacity="0.18"
              />
              <stop
                offset="55%"
                stopColor="#315B78"
                stopOpacity="0.35"
              />
              <stop
                offset="100%"
                stopColor="#D8B56A"
                stopOpacity="0.50"
              />
            </linearGradient>

            <linearGradient
              id="finalHeroSweep"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#D8B56A"
                stopOpacity="0"
              />
              <stop
                offset="42%"
                stopColor="#D8B56A"
                stopOpacity="0.02"
              />
              <stop
                offset="50%"
                stopColor="#F4E7C5"
                stopOpacity="0.22"
              />
              <stop
                offset="58%"
                stopColor="#D8B56A"
                stopOpacity="0.06"
              />
              <stop
                offset="100%"
                stopColor="#D8B56A"
                stopOpacity="0"
              />
            </linearGradient>

            <filter
              id="finalHeroGlow"
              x="-40%"
              y="-40%"
              width="180%"
              height="180%"
            >
              <feGaussianBlur
                stdDeviation="4"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="finalHeroStrongGlow"
              x="-80%"
              y="-80%"
              width="260%"
              height="260%"
            >
              <feGaussianBlur
                stdDeviation="8"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* --------------------------------------------------------
              SUBTLE FINANCIAL GRID — RIGHT SIDE
              -------------------------------------------------------- */}
          <g opacity="0.13">
            <line x1="850" y1="300" x2="850" y2="825" stroke="#CBD5E1" />
            <line x1="950" y1="300" x2="950" y2="825" stroke="#CBD5E1" />
            <line x1="1050" y1="300" x2="1050" y2="825" stroke="#CBD5E1" />
            <line x1="1150" y1="300" x2="1150" y2="825" stroke="#CBD5E1" />
            <line x1="1250" y1="300" x2="1250" y2="825" stroke="#CBD5E1" />
            <line x1="1350" y1="300" x2="1350" y2="825" stroke="#CBD5E1" />

            <line x1="790" y1="400" x2="1440" y2="400" stroke="#CBD5E1" />
            <line x1="790" y1="500" x2="1440" y2="500" stroke="#CBD5E1" />
            <line x1="790" y1="600" x2="1440" y2="600" stroke="#CBD5E1" />
            <line x1="790" y1="700" x2="1440" y2="700" stroke="#CBD5E1" />
            <line x1="790" y1="800" x2="1440" y2="800" stroke="#CBD5E1" />
          </g>

          {/* --------------------------------------------------------
              GRAPH AREA
              -------------------------------------------------------- */}
          <path
            d="
              M 760 765
              C 830 755, 885 738, 940 720
              C 1000 700, 1055 675, 1100 645
              C 1150 612, 1185 580, 1225 550
              C 1270 515, 1300 475, 1340 430
              C 1375 390, 1405 350, 1440 315
              L 1440 850
              L 760 850
              Z
            "
            fill="url(#finalHeroGraphFill)"
          >
            <animate
              attributeName="opacity"
              values="0.18;0.70;0.70;0.18"
              keyTimes="0;0.35;0.78;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </path>

          {/* --------------------------------------------------------
              SECONDARY MOVING DASHED LINE
              -------------------------------------------------------- */}
          <path
            d="
              M 785 790
              C 850 780, 910 760, 965 742
              C 1020 723, 1070 700, 1120 670
              C 1170 640, 1210 610, 1250 580
              C 1300 545, 1345 500, 1385 455
              C 1405 433, 1425 412, 1440 395
            "
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="1.4"
            strokeDasharray="8 12"
            strokeOpacity="0.35"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-200"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>

          {/* --------------------------------------------------------
              SOFT GOLD GLOW UNDER MAIN GRAPH
              -------------------------------------------------------- */}
          <path
            d="
              M 760 765
              C 830 755, 885 738, 940 720
              C 1000 700, 1055 675, 1100 645
              C 1150 612, 1185 580, 1225 550
              C 1270 515, 1300 475, 1340 430
              C 1375 390, 1405 350, 1440 315
            "
            fill="none"
            stroke="#D8B56A"
            strokeWidth="9"
            strokeLinecap="round"
            strokeOpacity="0.08"
            pathLength="1000"
            strokeDasharray="1000"
            filter="url(#finalHeroGlow)"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="1000;0;0;1000"
              keyTimes="0;0.48;0.84;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </path>

          {/* --------------------------------------------------------
              MAIN GOLD GRAPH
              ACTUAL LEFT -> RIGHT DRAW
              -------------------------------------------------------- */}
          <path
            d="
              M 760 765
              C 830 755, 885 738, 940 720
              C 1000 700, 1055 675, 1100 645
              C 1150 612, 1185 580, 1225 550
              C 1270 515, 1300 475, 1340 430
              C 1375 390, 1405 350, 1440 315
            "
            fill="none"
            stroke="url(#finalHeroGold)"
            strokeWidth="3.5"
            strokeLinecap="round"
            pathLength="1000"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            filter="url(#finalHeroGlow)"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="1000;0;0;1000"
              keyTimes="0;0.48;0.84;1"
              dur="7s"
              repeatCount="indefinite"
            />

            <animate
              attributeName="stroke-opacity"
              values="0;1;1;0"
              keyTimes="0;0.08;0.84;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </path>

          {/* --------------------------------------------------------
              BRIGHT TRAVELING SEGMENT
              -------------------------------------------------------- */}
          <path
            d="
              M 760 765
              C 830 755, 885 738, 940 720
              C 1000 700, 1055 675, 1100 645
              C 1150 612, 1185 580, 1225 550
              C 1270 515, 1300 475, 1340 430
              C 1375 390, 1405 350, 1440 315
            "
            fill="none"
            stroke="#F4E7C5"
            strokeWidth="5.5"
            strokeLinecap="round"
            pathLength="1000"
            strokeDasharray="38 962"
            strokeDashoffset="1000"
            filter="url(#finalHeroStrongGlow)"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="1000"
              to="-1000"
              dur="7s"
              repeatCount="indefinite"
            />

            <animate
              attributeName="stroke-opacity"
              values="0;1;1;0"
              keyTimes="0;0.10;0.86;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </path>

          {/* --------------------------------------------------------
              SEQUENTIAL GRAPH NODES
              -------------------------------------------------------- */}
          <circle
            cx="940"
            cy="720"
            r="4"
            fill="#D8B56A"
            stroke="#071827"
            strokeWidth="2"
            opacity="0"
            filter="url(#finalHeroGlow)"
          >
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.16;0.23;0.82;1"
              dur="7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="3;3;7;4;3"
              keyTimes="0;0.16;0.23;0.55;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="1100"
            cy="645"
            r="4"
            fill="#F8FAFC"
            stroke="#D8B56A"
            strokeWidth="2"
            opacity="0"
            filter="url(#finalHeroGlow)"
          >
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.28;0.35;0.82;1"
              dur="7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="3;3;7;4;3"
              keyTimes="0;0.28;0.35;0.60;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="1225"
            cy="550"
            r="4"
            fill="#D8B56A"
            stroke="#071827"
            strokeWidth="2"
            opacity="0"
            filter="url(#finalHeroGlow)"
          >
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.38;0.45;0.82;1"
              dur="7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="3;3;7;4;3"
              keyTimes="0;0.38;0.45;0.66;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="1340"
            cy="430"
            r="5"
            fill="#F8FAFC"
            stroke="#D8B56A"
            strokeWidth="2"
            opacity="0"
            filter="url(#finalHeroGlow)"
          >
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.46;0.53;0.82;1"
              dur="7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="3;3;8;5;3"
              keyTimes="0;0.46;0.53;0.70;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>

          {/* --------------------------------------------------------
              MOVING FINANCIAL BARS
              Native SVG height/y animations
              -------------------------------------------------------- */}
          <g opacity="0.72">
            <rect
              x="900"
              y="755"
              width="13"
              height="70"
              rx="2"
              fill="url(#finalHeroBar)"
            >
              <animate
                attributeName="y"
                values="780;735;760;780"
                dur="4.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="45;90;65;45"
                dur="4.4s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="930"
              y="720"
              width="13"
              height="105"
              rx="2"
              fill="url(#finalHeroBar)"
            >
              <animate
                attributeName="y"
                values="740;775;710;740"
                dur="5.3s"
                begin=".4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="85;50;115;85"
                dur="5.3s"
                begin=".4s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="960"
              y="745"
              width="13"
              height="80"
              rx="2"
              fill="url(#finalHeroBar)"
            >
              <animate
                attributeName="y"
                values="770;715;750;770"
                dur="4.8s"
                begin=".8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="55;110;75;55"
                dur="4.8s"
                begin=".8s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="990"
              y="695"
              width="13"
              height="130"
              rx="2"
              fill="url(#finalHeroBar)"
            >
              <animate
                attributeName="y"
                values="715;770;680;715"
                dur="5.8s"
                begin="1.1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="110;55;145;110"
                dur="5.8s"
                begin="1.1s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1020"
              y="735"
              width="13"
              height="90"
              rx="2"
              fill="url(#finalHeroBar)"
            >
              <animate
                attributeName="y"
                values="760;700;740;760"
                dur="4.6s"
                begin="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="65;125;85;65"
                dur="4.6s"
                begin="1.5s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1050"
              y="675"
              width="13"
              height="150"
              rx="2"
              fill="url(#finalHeroBar)"
            >
              <animate
                attributeName="y"
                values="690;755;660;690"
                dur="6s"
                begin=".2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="135;70;165;135"
                dur="6s"
                begin=".2s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1080"
              y="725"
              width="13"
              height="100"
              rx="2"
              fill="url(#finalHeroBar)"
            >
              <animate
                attributeName="y"
                values="750;690;730;750"
                dur="5.1s"
                begin=".9s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="75;135;95;75"
                dur="5.1s"
                begin=".9s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1110"
              y="655"
              width="13"
              height="170"
              rx="2"
              fill="url(#finalHeroBar)"
            >
              <animate
                attributeName="y"
                values="675;745;640;675"
                dur="6.3s"
                begin="1.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="150;80;185;150"
                dur="6.3s"
                begin="1.4s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1140"
              y="705"
              width="13"
              height="120"
              rx="2"
              fill="url(#finalHeroBar)"
            >
              <animate
                attributeName="y"
                values="730;670;710;730"
                dur="5.5s"
                begin="1.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="95;155;115;95"
                dur="5.5s"
                begin="1.8s"
                repeatCount="indefinite"
              />
            </rect>
          </g>

          {/* --------------------------------------------------------
              MOVING GOLD REFLECTION SWEEP
              -------------------------------------------------------- */}
          <g opacity="0">
            <rect
              x="-350"
              y="-100"
              width="250"
              height="1100"
              fill="url(#finalHeroSweep)"
              transform="rotate(15 0 450)"
            />

            <animate
              attributeName="opacity"
              values="0;0.75;0.75;0"
              keyTimes="0;0.12;0.82;1"
              dur="9s"
              repeatCount="indefinite"
            />

            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="2050 0"
              dur="9s"
              repeatCount="indefinite"
            />
          </g>
        </svg>

        {/* Right-side gold atmospheric glow */}
        <div
          className="
            absolute
            right-[2%]
            bottom-[4%]
            z-[2]
            h-[55%]
            w-[48%]
            rounded-full
            bg-[radial-gradient(circle,rgba(216,181,106,0.10)_0%,rgba(201,164,92,0.04)_42%,transparent_72%)]
            blur-[60px]
          "
        />

        {/* ==========================================================
            CENTRAL CLEAN/DARK AREA
            Keeps name perfectly readable
            ========================================================== */}
        <div
          className="
            absolute
            inset-0
            z-[3]
            bg-[radial-gradient(ellipse_47%_50%_at_50%_47%,rgba(7,24,39,0.88)_0%,rgba(7,24,39,0.66)_48%,rgba(7,24,39,0.20)_75%,transparent_100%)]
          "
        />

        {/* Executive vignette */}
        <div
          className="
            absolute
            inset-0
            z-[4]
            bg-[radial-gradient(ellipse_88%_82%_at_50%_48%,transparent_44%,rgba(7,24,39,0.22)_72%,#071827_100%)]
          "
        />

        {/* Bottom integration */}
        <div className="absolute inset-x-0 bottom-0 z-[5] h-[12%] bg-gradient-to-t from-[#071827] via-[#071827]/60 to-transparent" />
      </div>

      {/* ============================================================
          HERO CONTENT
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
        {/* Welcome */}
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

        {/* Accountant */}
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

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:gap-5">
          {/* Download CV */}
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

          {/* LinkedIn */}
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
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-[#D8B56A]/10
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
              aria-hidden="true"
            />

            <svg
              className="relative z-10 h-4 w-4 fill-current text-[#D8B56A]"
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
