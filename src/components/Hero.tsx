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
      {/* =========================================================
          HERO BACKGROUND
          Real distant corporate buildings + finance animation
          ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Deep Navy Base */}
        <div className="absolute -inset-12 bg-[radial-gradient(ellipse_95%_85%_at_50%_30%,#132E43_0%,#0D2538_30%,#081A2B_64%,#071827_100%)]" />

        {/* =======================================================
            REAL CORPORATE BUILDINGS
            LEFT / LOWER-LEFT ONLY
            ======================================================= */}
        <div className="hero-real-city absolute bottom-0 left-0 z-[1] h-[58%] w-[46%] overflow-hidden sm:h-[62%] sm:w-[43%] lg:h-[66%] lg:w-[39%] xl:w-[38%]">
          <img
            src="/images/hero-distant-buildings.jpg"
            alt=""
            className="hero-real-city-image h-full w-full object-cover object-left-bottom"
            loading="eager"
            draggable={false}
          />

          {/* Navy treatment over photograph */}
          <div className="absolute inset-0 bg-[#071827]/25 mix-blend-multiply" />

          {/* Gold/blue atmospheric tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/35 via-[#0D2538]/10 to-[#071827]/30" />

          {/* Fade photograph smoothly into center */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#071827]" />

          {/* Fade upper edge */}
          <div className="absolute inset-x-0 top-0 h-[32%] bg-gradient-to-b from-[#071827] to-transparent" />
        </div>

        {/* Very subtle floor reflection under buildings */}
        <div className="hero-city-reflection absolute bottom-0 left-0 z-[1] h-[16%] w-[45%] bg-[linear-gradient(180deg,rgba(216,181,106,0.06),rgba(19,46,67,0.12)_35%,transparent_100%)] blur-xl" />

        {/* =======================================================
            RIGHT-SIDE FINANCIAL GRAPH
            ======================================================= */}
        <div className="absolute inset-0 z-[2]">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="heroGraphArea"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#D8B56A"
                  stopOpacity="0.18"
                />
                <stop
                  offset="48%"
                  stopColor="#C9A45C"
                  stopOpacity="0.07"
                />
                <stop
                  offset="100%"
                  stopColor="#071827"
                  stopOpacity="0"
                />
              </linearGradient>

              <linearGradient
                id="heroGraphGold"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#C9A45C"
                  stopOpacity="0.35"
                />
                <stop
                  offset="35%"
                  stopColor="#D8B56A"
                  stopOpacity="0.75"
                />
                <stop
                  offset="100%"
                  stopColor="#F4E7C5"
                  stopOpacity="1"
                />
              </linearGradient>

              <filter
                id="heroGoldGlow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
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
            </defs>

            {/* Subtle financial grid — right only */}
            <g className="hero-fin-grid">
              {[760, 840, 920, 1000, 1080, 1160, 1240, 1320, 1400].map(
                (x) => (
                  <line
                    key={`v-${x}`}
                    x1={x}
                    y1="260"
                    x2={x}
                    y2="820"
                    stroke="#CBD5E1"
                    strokeOpacity="0.055"
                    strokeWidth="1"
                  />
                ),
              )}

              {[340, 420, 500, 580, 660, 740, 820].map((y) => (
                <line
                  key={`h-${y}`}
                  x1="720"
                  y1={y}
                  x2="1440"
                  y2={y}
                  stroke="#CBD5E1"
                  strokeOpacity="0.05"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* Graph soft area */}
            <path
              className="hero-graph-area"
              d="
                M 680 760
                C 760 748, 825 728, 900 710
                C 975 690, 1030 670, 1080 640
                C 1135 607, 1165 565, 1215 545
                C 1265 525, 1300 485, 1340 440
                C 1375 400, 1405 365, 1440 330
                L 1440 850
                L 680 850
                Z
              "
              fill="url(#heroGraphArea)"
            />

            {/* Secondary moving dotted trajectory */}
            <path
              className="hero-graph-dashed"
              d="
                M 700 785
                C 790 770, 855 750, 925 730
                C 995 710, 1050 690, 1100 660
                C 1150 630, 1190 600, 1235 575
                C 1290 545, 1340 500, 1390 455
                C 1410 438, 1425 422, 1440 405
              "
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1.2"
              strokeDasharray="7 11"
              strokeOpacity="0.28"
            />

            {/* Glow underneath main graph */}
            <path
              className="hero-graph-glow"
              d="
                M 680 760
                C 760 748, 825 728, 900 710
                C 975 690, 1030 670, 1080 640
                C 1135 607, 1165 565, 1215 545
                C 1265 525, 1300 485, 1340 440
                C 1375 400, 1405 365, 1440 330
              "
              fill="none"
              stroke="#D8B56A"
              strokeWidth="7"
              strokeLinecap="round"
              strokeOpacity="0.10"
            />

            {/* MAIN GOLD LINE — ACTUAL DRAW/TRAVEL */}
            <path
              className="hero-graph-line"
              d="
                M 680 760
                C 760 748, 825 728, 900 710
                C 975 690, 1030 670, 1080 640
                C 1135 607, 1165 565, 1215 545
                C 1265 525, 1300 485, 1340 440
                C 1375 400, 1405 365, 1440 330
              "
              fill="none"
              stroke="url(#heroGraphGold)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#heroGoldGlow)"
              pathLength="1000"
            />

            {/* Traveling highlight */}
            <path
              className="hero-graph-traveler"
              d="
                M 680 760
                C 760 748, 825 728, 900 710
                C 975 690, 1030 670, 1080 640
                C 1135 607, 1165 565, 1215 545
                C 1265 525, 1300 485, 1340 440
                C 1375 400, 1405 365, 1440 330
              "
              fill="none"
              stroke="#F4E7C5"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="24 976"
              pathLength="1000"
              filter="url(#heroGoldGlow)"
            />

            {/* Sequential glowing nodes */}
            <g>
              <circle
                cx="900"
                cy="710"
                r="5"
                className="hero-node hero-node-1"
                fill="#D8B56A"
                stroke="#071827"
                strokeWidth="2"
              />

              <circle
                cx="1080"
                cy="640"
                r="5"
                className="hero-node hero-node-2"
                fill="#F8FAFC"
                stroke="#D8B56A"
                strokeWidth="2"
              />

              <circle
                cx="1215"
                cy="545"
                r="5"
                className="hero-node hero-node-3"
                fill="#D8B56A"
                stroke="#071827"
                strokeWidth="2"
              />

              <circle
                cx="1340"
                cy="440"
                r="6"
                className="hero-node hero-node-4"
                fill="#F8FAFC"
                stroke="#D8B56A"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>

        {/* =======================================================
            ANIMATED FINANCIAL BARS — RIGHT / LOWER-RIGHT
            ======================================================= */}
        <div className="hero-bars absolute right-[2%] bottom-[5%] z-[2] flex h-[30%] w-[45%] items-end justify-end gap-[clamp(6px,1vw,16px)] opacity-70">
          <span className="hero-bar hero-bar-1 h-[24%]" />
          <span className="hero-bar hero-bar-2 h-[38%]" />
          <span className="hero-bar hero-bar-3 h-[29%]" />
          <span className="hero-bar hero-bar-4 h-[48%]" />
          <span className="hero-bar hero-bar-5 h-[35%]" />
          <span className="hero-bar hero-bar-6 h-[60%]" />
          <span className="hero-bar hero-bar-7 h-[44%]" />
          <span className="hero-bar hero-bar-8 h-[72%]" />
          <span className="hero-bar hero-bar-9 h-[55%]" />
          <span className="hero-bar hero-bar-10 h-[82%]" />
        </div>

        {/* Moving warm glow */}
        <div className="hero-gold-ambient absolute right-[4%] bottom-[8%] z-[2] h-[55%] w-[48%] rounded-full bg-[radial-gradient(circle,rgba(216,181,106,0.12)_0%,rgba(201,164,92,0.045)_42%,transparent_72%)] blur-[55px]" />

        {/* Moving reflection sweep */}
        <div className="hero-light-sweep absolute top-[-25%] z-[3] h-[150%] w-[18%] rotate-[17deg] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.025)_30%,rgba(216,181,106,0.14)_50%,rgba(255,255,255,0.04)_58%,transparent_100%)] blur-[8px]" />

        {/* Center text protection */}
        <div className="absolute inset-0 z-[4] bg-[radial-gradient(ellipse_48%_48%_at_50%_48%,rgba(7,24,39,0.84)_0%,rgba(7,24,39,0.62)_48%,rgba(7,24,39,0.18)_76%,transparent_100%)]" />

        {/* Overall executive vignette */}
        <div className="absolute inset-0 z-[5] bg-[radial-gradient(ellipse_88%_82%_at_50%_48%,transparent_44%,rgba(7,24,39,0.22)_72%,#071827_100%)]" />

        {/* Bottom reflective floor fade */}
        <div className="absolute inset-x-0 bottom-0 z-[5] h-[16%] bg-gradient-to-t from-[#071827] via-[#071827]/60 to-transparent" />
      </div>

      {/* =========================================================
          APPROVED HERO CONTENT
          ========================================================= */}
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

      {/* =========================================================
          HERO-ONLY ANIMATIONS
          Isolated here so the rest of the website is untouched.
          ========================================================= */}
      <style>{`
        .hero-real-city {
          -webkit-mask-image:
            linear-gradient(to right, #000 0%, #000 58%, rgba(0,0,0,.82) 72%, transparent 100%),
            linear-gradient(to top, #000 0%, #000 72%, transparent 100%);
          mask-image:
            linear-gradient(to right, #000 0%, #000 58%, rgba(0,0,0,.82) 72%, transparent 100%),
            linear-gradient(to top, #000 0%, #000 72%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-composite: intersect;
        }

        .hero-real-city-image {
          filter:
            brightness(.54)
            contrast(1.12)
            saturate(.82)
            sepia(.08)
            hue-rotate(168deg);
          transform: scale(1.03);
          transform-origin: left bottom;
        }

        .hero-city-reflection {
          animation: heroCityReflection 7s ease-in-out infinite;
        }

        .hero-graph-area {
          animation: heroGraphArea 7.2s ease-in-out infinite;
        }

        .hero-graph-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: heroGraphDraw 7.2s ease-in-out infinite;
        }

        .hero-graph-glow {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: heroGraphGlowDraw 7.2s ease-in-out infinite;
        }

        .hero-graph-traveler {
          stroke-dashoffset: 1024;
          animation: heroGraphTraveler 7.2s linear infinite;
        }

        .hero-graph-dashed {
          animation: heroDashFlow 5.5s linear infinite;
        }

        .hero-node {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
        }

        .hero-node-1 {
          animation: heroNodePulse 7.2s ease-in-out 1.0s infinite;
        }

        .hero-node-2 {
          animation: heroNodePulse 7.2s ease-in-out 1.55s infinite;
        }

        .hero-node-3 {
          animation: heroNodePulse 7.2s ease-in-out 2.1s infinite;
        }

        .hero-node-4 {
          animation: heroNodePulse 7.2s ease-in-out 2.65s infinite;
        }

        .hero-bar {
          display: block;
          width: clamp(7px, 0.8vw, 13px);
          transform-origin: bottom;
          border-top: 1px solid rgba(216,181,106,.52);
          border-radius: 2px 2px 0 0;
          background:
            linear-gradient(
              to top,
              rgba(13,37,56,.40),
              rgba(30,73,105,.42) 50%,
              rgba(216,181,106,.32)
            );
          box-shadow:
            0 -2px 8px rgba(216,181,106,.07),
            inset 0 0 10px rgba(56,189,248,.06);
        }

        .hero-bar-1 {
          animation: heroBarA 4.8s ease-in-out .1s infinite;
        }

        .hero-bar-2 {
          animation: heroBarB 5.5s ease-in-out .7s infinite;
        }

        .hero-bar-3 {
          animation: heroBarC 4.4s ease-in-out 1.2s infinite;
        }

        .hero-bar-4 {
          animation: heroBarA 6s ease-in-out 1.8s infinite;
        }

        .hero-bar-5 {
          animation: heroBarB 4.7s ease-in-out 2.3s infinite;
        }

        .hero-bar-6 {
          animation: heroBarC 5.8s ease-in-out .4s infinite;
        }

        .hero-bar-7 {
          animation: heroBarA 5.1s ease-in-out 1.1s infinite;
        }

        .hero-bar-8 {
          animation: heroBarB 6.2s ease-in-out 1.6s infinite;
        }

        .hero-bar-9 {
          animation: heroBarC 5.4s ease-in-out 2s infinite;
        }

        .hero-bar-10 {
          animation: heroBarA 6.4s ease-in-out 2.5s infinite;
        }

        .hero-light-sweep {
          left: -28%;
          animation: heroLightSweep 9s cubic-bezier(.35,.05,.25,1) infinite;
        }

        .hero-gold-ambient {
          animation: heroGoldAmbient 8s ease-in-out infinite;
        }

        @keyframes heroGraphDraw {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }

          7% {
            opacity: 1;
          }

          48% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          82% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          94% {
            stroke-dashoffset: 0;
            opacity: .18;
          }

          100% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
        }

        @keyframes heroGraphGlowDraw {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }

          8% {
            opacity: .15;
          }

          48% {
            stroke-dashoffset: 0;
            opacity: .45;
          }

          82% {
            stroke-dashoffset: 0;
            opacity: .30;
          }

          100% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
        }

        @keyframes heroGraphTraveler {
          0% {
            stroke-dashoffset: 1024;
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          68% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          86% {
            stroke-dashoffset: -500;
            opacity: .35;
          }

          100% {
            stroke-dashoffset: -1000;
            opacity: 0;
          }
        }

        @keyframes heroDashFlow {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -144;
          }
        }

        @keyframes heroNodePulse {
          0%, 8%, 100% {
            opacity: 0;
            transform: scale(.65);
          }

          18% {
            opacity: 1;
            transform: scale(1.55);
          }

          28% {
            opacity: .95;
            transform: scale(1);
          }

          70% {
            opacity: .80;
            transform: scale(1);
          }

          82% {
            opacity: 0;
            transform: scale(.75);
          }
        }

        @keyframes heroGraphArea {
          0%, 100% {
            opacity: .12;
          }

          45%, 75% {
            opacity: .72;
          }
        }

        @keyframes heroBarA {
          0%, 100% {
            transform: scaleY(.34);
            opacity: .32;
          }

          45% {
            transform: scaleY(1);
            opacity: .88;
          }

          72% {
            transform: scaleY(.58);
            opacity: .55;
          }
        }

        @keyframes heroBarB {
          0%, 100% {
            transform: scaleY(.82);
            opacity: .72;
          }

          38% {
            transform: scaleY(.30);
            opacity: .30;
          }

          72% {
            transform: scaleY(1.08);
            opacity: .92;
          }
        }

        @keyframes heroBarC {
          0%, 100% {
            transform: scaleY(.48);
            opacity: .42;
          }

          35% {
            transform: scaleY(1.05);
            opacity: .90;
          }

          68% {
            transform: scaleY(.32);
            opacity: .35;
          }
        }

        @keyframes heroLightSweep {
          0% {
            transform: translate3d(-15vw,0,0) rotate(17deg);
            opacity: 0;
          }

          12% {
            opacity: .28;
          }

          48% {
            opacity: .80;
          }

          86% {
            opacity: .32;
          }

          100% {
            transform: translate3d(155vw,0,0) rotate(17deg);
            opacity: 0;
          }
        }

        @keyframes heroGoldAmbient {
          0%, 100% {
            transform: translate3d(0,0,0) scale(.92);
            opacity: .55;
          }

          50% {
            transform: translate3d(-4%,-3%,0) scale(1.08);
            opacity: 1;
          }
        }

        @keyframes heroCityReflection {
          0%, 100% {
            opacity: .28;
            transform: translateX(-2%);
          }

          50% {
            opacity: .62;
            transform: translateX(5%);
          }
        }

        @media (max-width: 767px) {
          .hero-real-city {
            width: 62%;
            height: 45%;
            opacity: .64;
          }

          .hero-bars {
            width: 58%;
            opacity: .40;
          }

          .hero-fin-grid {
            opacity: .45;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-city-reflection,
          .hero-graph-area,
          .hero-graph-line,
          .hero-graph-glow,
          .hero-graph-traveler,
          .hero-graph-dashed,
          .hero-node,
          .hero-bar,
          .hero-light-sweep,
          .hero-gold-ambient {
            animation: none !important;
          }

          .hero-graph-line,
          .hero-graph-glow {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          .hero-node {
            opacity: .85;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
