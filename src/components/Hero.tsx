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
        relative flex w-full flex-col items-center justify-center
        min-h-[calc(100svh-5rem)]
        lg:h-[calc(100svh-5rem)]
        lg:min-h-[calc(100svh-5rem)]
        overflow-hidden
        bg-[#071827]
        px-4 py-8
        sm:px-6
        lg:px-8 lg:py-0
        text-center
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Base navy */}
        <div className="absolute inset-0 bg-[#071827]" />

        <div
          className="
            absolute -inset-16
            bg-[radial-gradient(ellipse_95%_85%_at_50%_35%,#132E43_0%,#0D2538_32%,#081A2B_65%,#071827_100%)]
          "
        />

        {/* =====================================================
            LEFT — REAL BUILDING PHOTO
            Original colors retained.
            Only edges fade softly into navy.
        ====================================================== */}
        <div
          className="
            hero-skyline
            absolute
            bottom-0 left-0
            z-[1]
            h-[58%]
            w-[48%]
            sm:h-[61%]
            sm:w-[47%]
            lg:h-[64%]
            lg:w-[46%]
            xl:h-[66%]
            xl:w-[45%]
          "
        >
          <img
            src="/images/hero-distant-buildings.jpg"
            alt=""
            draggable={false}
            loading="eager"
            className="
              absolute
              bottom-0 left-0
              h-full w-full
              object-cover
              object-left-bottom
            "
          />

          {/* very light navy integration — does not recolor buildings */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-transparent
              via-transparent
              to-[#071827]
            "
          />

          {/* top edge fade */}
          <div
            className="
              absolute inset-x-0 top-0
              h-[24%]
              bg-gradient-to-b
              from-[#071827]
              via-[#071827]/45
              to-transparent
            "
          />

          {/* bottom edge integration */}
          <div
            className="
              absolute inset-x-0 bottom-0
              h-[9%]
              bg-gradient-to-t
              from-[#071827]/65
              to-transparent
            "
          />
        </div>

        {/* Soft building-side feather */}
        <div
          className="
            absolute
            bottom-[3%]
            left-[37%]
            z-[2]
            h-[55%]
            w-[12%]
            rounded-full
            bg-[#071827]/75
            blur-[45px]
          "
        />

        {/* =====================================================
            RIGHT — ACCOUNTING / FINANCE VISUAL
        ====================================================== */}
        <svg
          className="absolute inset-0 z-[2] h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* dark gold graph */}
            <linearGradient
              id="heroDarkGold"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#8F7134"
                stopOpacity="0.58"
              />

              <stop
                offset="50%"
                stopColor="#B58E43"
                stopOpacity="0.82"
              />

              <stop
                offset="100%"
                stopColor="#D8B56A"
                stopOpacity="0.95"
              />
            </linearGradient>

            {/* bright moving streak */}
            <linearGradient
              id="heroBrightGold"
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
                offset="25%"
                stopColor="#D8B56A"
                stopOpacity="0.35"
              />

              <stop
                offset="50%"
                stopColor="#FFF2C9"
                stopOpacity="1"
              />

              <stop
                offset="75%"
                stopColor="#D8B56A"
                stopOpacity="0.45"
              />

              <stop
                offset="100%"
                stopColor="#D8B56A"
                stopOpacity="0"
              />
            </linearGradient>

            {/* bars */}
            <linearGradient
              id="heroBarBlue"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#183448"
                stopOpacity="0.55"
              />

              <stop
                offset="100%"
                stopColor="#7890A0"
                stopOpacity="0.72"
              />
            </linearGradient>

            <linearGradient
              id="heroBarGold"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#6D552A"
                stopOpacity="0.58"
              />

              <stop
                offset="100%"
                stopColor="#D8B56A"
                stopOpacity="0.82"
              />
            </linearGradient>

            {/* graph glow */}
            <filter
              id="heroGraphGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                stdDeviation="5"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="heroSoftGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="9"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* =================================================
              14 MOVING BARS
              NO BACKGROUND GRID / BOXES
          ================================================== */}
          <g opacity="0.82">
            <rect
              x="760"
              y="755"
              width="15"
              height="70"
              rx="2"
              fill="url(#heroBarBlue)"
            >
              <animate
                attributeName="y"
                values="770;735;755;770"
                dur="5.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="55;90;70;55"
                dur="5.4s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="798"
              y="735"
              width="15"
              height="90"
              rx="2"
              fill="url(#heroBarGold)"
            >
              <animate
                attributeName="y"
                values="750;710;735;750"
                dur="5.9s"
                begin=".3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="75;115;90;75"
                dur="5.9s"
                begin=".3s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="836"
              y="715"
              width="15"
              height="110"
              rx="2"
              fill="url(#heroBarBlue)"
            >
              <animate
                attributeName="y"
                values="735;690;715;735"
                dur="6.3s"
                begin=".6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="90;135;110;90"
                dur="6.3s"
                begin=".6s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="874"
              y="690"
              width="15"
              height="135"
              rx="2"
              fill="url(#heroBarGold)"
            >
              <animate
                attributeName="y"
                values="710;660;690;710"
                dur="5.6s"
                begin=".9s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="115;165;135;115"
                dur="5.6s"
                begin=".9s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="912"
              y="725"
              width="15"
              height="100"
              rx="2"
              fill="url(#heroBarBlue)"
            >
              <animate
                attributeName="y"
                values="745;700;725;745"
                dur="6.1s"
                begin="1.2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="80;125;100;80"
                dur="6.1s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="950"
              y="670"
              width="15"
              height="155"
              rx="2"
              fill="url(#heroBarGold)"
            >
              <animate
                attributeName="y"
                values="690;635;670;690"
                dur="6.7s"
                begin=".2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="135;190;155;135"
                dur="6.7s"
                begin=".2s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="988"
              y="710"
              width="15"
              height="115"
              rx="2"
              fill="url(#heroBarBlue)"
            >
              <animate
                attributeName="y"
                values="730;680;710;730"
                dur="5.7s"
                begin=".7s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="95;145;115;95"
                dur="5.7s"
                begin=".7s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1026"
              y="645"
              width="15"
              height="180"
              rx="2"
              fill="url(#heroBarGold)"
            >
              <animate
                attributeName="y"
                values="670;610;645;670"
                dur="6.8s"
                begin="1.1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="155;215;180;155"
                dur="6.8s"
                begin="1.1s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1064"
              y="695"
              width="15"
              height="130"
              rx="2"
              fill="url(#heroBarBlue)"
            >
              <animate
                attributeName="y"
                values="715;665;695;715"
                dur="5.5s"
                begin="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="110;160;130;110"
                dur="5.5s"
                begin="1.5s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1102"
              y="620"
              width="15"
              height="205"
              rx="2"
              fill="url(#heroBarGold)"
            >
              <animate
                attributeName="y"
                values="650;585;620;650"
                dur="7s"
                begin=".4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="175;240;205;175"
                dur="7s"
                begin=".4s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1140"
              y="680"
              width="15"
              height="145"
              rx="2"
              fill="url(#heroBarBlue)"
            >
              <animate
                attributeName="y"
                values="700;650;680;700"
                dur="6s"
                begin=".8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="125;175;145;125"
                dur="6s"
                begin=".8s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1178"
              y="600"
              width="15"
              height="225"
              rx="2"
              fill="url(#heroBarGold)"
            >
              <animate
                attributeName="y"
                values="630;560;600;630"
                dur="7.2s"
                begin="1.2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="195;265;225;195"
                dur="7.2s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1216"
              y="655"
              width="15"
              height="170"
              rx="2"
              fill="url(#heroBarBlue)"
            >
              <animate
                attributeName="y"
                values="680;625;655;680"
                dur="5.8s"
                begin="1.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="145;200;170;145"
                dur="5.8s"
                begin="1.6s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="1254"
              y="570"
              width="15"
              height="255"
              rx="2"
              fill="url(#heroBarGold)"
            >
              <animate
                attributeName="y"
                values="605;535;570;605"
                dur="7.4s"
                begin=".6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="220;290;255;220"
                dur="7.4s"
                begin=".6s"
                repeatCount="indefinite"
              />
            </rect>
          </g>

          {/* =================================================
              DARK GOLD ZIGZAG FINANCIAL LINE
              NO DOTS
          ================================================== */}

          {/* soft glow underneath */}
          <path
            d="
              M 730 720
              L 790 685
              L 850 625
              L 900 650
              L 960 570
              L 1015 605
              L 1070 515
              L 1125 550
              L 1180 445
              L 1230 490
              L 1285 365
              L 1335 410
              L 1400 245
            "
            fill="none"
            stroke="#C9A45C"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.07"
            filter="url(#heroSoftGlow)"
          />

          {/* permanent dark-gold zigzag */}
          <path
            d="
              M 730 720
              L 790 685
              L 850 625
              L 900 650
              L 960 570
              L 1015 605
              L 1070 515
              L 1125 550
              L 1180 445
              L 1230 490
              L 1285 365
              L 1335 410
              L 1400 245
            "
            fill="none"
            stroke="url(#heroDarkGold)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* =================================================
              ONE CONTINUOUS MOVING GOLD STREAK
              NO CIRCLES
              NO DOTS
              SLOW 10 SECOND MOVEMENT
          ================================================== */}
          <path
            d="
              M 730 720
              L 790 685
              L 850 625
              L 900 650
              L 960 570
              L 1015 605
              L 1070 515
              L 1125 550
              L 1180 445
              L 1230 490
              L 1285 365
              L 1335 410
              L 1400 245
            "
            fill="none"
            stroke="url(#heroBrightGold)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1000"
            strokeDasharray="145 855"
            strokeDashoffset="1000"
            filter="url(#heroGraphGlow)"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="1000"
              to="-1000"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* =====================================================
            SUBTLE RIGHT GOLD ATMOSPHERE
        ====================================================== */}
        <div
          className="
            absolute
            right-[-5%]
            bottom-[4%]
            z-[1]
            h-[62%]
            w-[50%]
            rounded-full
            bg-[radial-gradient(circle,rgba(216,181,106,0.08)_0%,rgba(201,164,92,0.025)_43%,transparent_72%)]
            blur-[70px]
          "
        />

        {/* =====================================================
            CENTER READING AREA
            Keeps text clean without hiding left/right visuals
        ====================================================== */}
        <div
          className="
            absolute inset-0 z-[3]
            bg-[radial-gradient(ellipse_42%_46%_at_50%_43%,rgba(7,24,39,0.80)_0%,rgba(7,24,39,0.52)_50%,rgba(7,24,39,0.12)_76%,transparent_100%)]
          "
        />

        {/* outer vignette */}
        <div
          className="
            absolute inset-0 z-[4]
            bg-[radial-gradient(ellipse_94%_88%_at_50%_48%,transparent_50%,rgba(7,24,39,0.18)_76%,#071827_100%)]
          "
        />

        {/* bottom fade */}
        <div
          className="
            absolute inset-x-0 bottom-0 z-[5]
            h-[10%]
            bg-gradient-to-t
            from-[#071827]
            via-[#071827]/55
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          CENTER CONTENT
      ========================================================== */}
      <div
        className="
          relative z-10
          mx-auto
          flex w-full max-w-5xl
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
          </span>{' '}

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
              group relative
              inline-flex
              cursor-pointer
              touch-manipulation
              select-none
              items-center
              gap-2.5
              overflow-hidden
              rounded-xl
              border border-[#D8B56A]/50
              bg-[#0D2538]/95
              px-7 py-3.5
              text-sm font-bold
              text-[#F8FAFC]
              shadow-lg shadow-black/40
              backdrop-blur-md
              transition-all duration-300 ease-out
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
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
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
              group relative
              inline-flex
              cursor-pointer
              touch-manipulation
              select-none
              items-center
              gap-2.5
              overflow-hidden
              rounded-xl
              border border-[#D8B56A]/45
              bg-[#071827]/78
              px-6 py-3.5
              text-sm font-semibold
              text-[#CBD5E1]
              shadow-md shadow-black/30
              backdrop-blur-md
              transition-all duration-300 ease-out
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
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-[#D8B56A]/10
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
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

      {/* =========================================================
          LOCAL HERO CSS
          No index.css change required
      ========================================================== */}
      <style>{`
        .hero-skyline {
          /*
           * Keep the real photograph intact.
           * Only feather the outer boundaries into the Hero.
           */
          -webkit-mask-image:
            linear-gradient(
              to right,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,1) 68%,
              rgba(0,0,0,.88) 78%,
              rgba(0,0,0,.48) 90%,
              transparent 100%
            ),
            linear-gradient(
              to top,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,1) 80%,
              rgba(0,0,0,.55) 93%,
              transparent 100%
            );

          mask-image:
            linear-gradient(
              to right,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,1) 68%,
              rgba(0,0,0,.88) 78%,
              rgba(0,0,0,.48) 90%,
              transparent 100%
            ),
            linear-gradient(
              to top,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,1) 80%,
              rgba(0,0,0,.55) 93%,
              transparent 100%
            );

          -webkit-mask-composite: source-in;
          mask-composite: intersect;
        }

        @media (max-width: 767px) {
          .hero-skyline {
            width: 58%;
            height: 43%;
            opacity: .72;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #home svg animate,
          #home svg animateTransform {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
