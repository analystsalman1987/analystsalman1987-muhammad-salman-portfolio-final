import { ExternalLink, FileDown } from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  profile?: ProfileInfo;
  onOpenCV: () => void;
  onSelectExperience?: () => void;
}

// 17 Approved Expertise Points for Live Breathing / Shimmer Overlays (No Text Duplication)
const liveSkillPills = [
  { id: 'exp', x: 930, y: 95, w: 115, h: 28, isGold: true, duration: '14s', delay: '-1s' },
  { id: 'fin-rep', x: 640, y: 130, w: 138, h: 28, isGold: false, duration: '17s', delay: '-7s' },
  { id: 'recv', x: 660, y: 320, w: 100, h: 28, isGold: false, duration: '15s', delay: '-3s' },
  { id: 'vat', x: 1590, y: 290, w: 180, h: 30, isGold: true, duration: '18s', delay: '-10s' },
  { id: 'erp', x: 1010, y: 220, w: 110, h: 28, isGold: false, duration: '16s', delay: '-5s' },
  { id: 'reconc', x: 670, y: 480, w: 120, h: 28, isGold: false, duration: '19s', delay: '-12s' },
  { id: 'cost', x: 830, y: 640, w: 82, h: 28, isGold: false, duration: '15s', delay: '-8s' },
  { id: 'msoffice', x: 1380, y: 115, w: 92, h: 28, isGold: false, duration: '17.5s', delay: '-2s' },
  { id: 'month-close', x: 1560, y: 640, w: 126, h: 28, isGold: false, duration: '16.5s', delay: '-11s' },
  { id: 'cash-hand', x: 1080, y: 715, w: 116, h: 28, isGold: false, duration: '19.5s', delay: '-4s' },
  { id: 'petty', x: 1270, y: 590, w: 96, h: 28, isGold: false, duration: '15.5s', delay: '-9s' },
  { id: 'pay', x: 590, y: 570, w: 88, h: 28, isGold: false, duration: '18.5s', delay: '-6s' },
  { id: 'oracle', x: 690, y: 360, w: 76, h: 28, isGold: false, duration: '14s', delay: '-0.5s' },
  { id: 'qoyod', x: 1220, y: 180, w: 76, h: 28, isGold: false, duration: '17s', delay: '-13s' },
  { id: 'quickbooks', x: 1640, y: 500, w: 102, h: 28, isGold: false, duration: '15s', delay: '-7.5s' },
  { id: 'pl', x: 980, y: 550, w: 112, h: 28, isGold: true, duration: '20s', delay: '-14s' },
  { id: 'bs', x: 1430, y: 480, w: 120, h: 28, isGold: true, duration: '16s', delay: '-1.5s' },
];

export function Hero({ onOpenCV }: HeroProps) {
  const { isRTL } = useLanguage();

  const linkedInUrl =
    'https://www.linkedin.com/in/muhammad-salman-mba-finance-cpa-finalist-66908767/';

  return (
    <section
      id="home"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="hero-final relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#071827] lg:h-[calc(100svh-5rem)] lg:min-h-[650px]"
    >
      {/* ==========================================================
          1. AUTHORITATIVE LOCKED VISUAL AS BASE LAYER
          Uses public/images/hero-locked-visual.png
          ========================================================== */}
      <div className="hero-base-layer absolute inset-0 z-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <img
          src="/images/hero-locked-visual.png"
          alt="Muhammad Salman Global Network"
          className="h-full w-full object-cover object-center lg:object-right transition-opacity duration-700"
        />
      </div>

      {/* Atmospheric depth lighting overlay */}
      <div className="hero-ambient-lights absolute inset-0 z-[2] pointer-events-none" aria-hidden="true" />

      {/* ==========================================================
          2. LEFT PROFILE MASK & BACKGROUND VEIL
          Guarantees zero ghosting/duplicated text underneath
          ========================================================== */}
      <div
        className={`hero-left-mask absolute inset-y-0 z-[3] w-full sm:w-[58%] lg:w-[44%] pointer-events-none ${
          isRTL ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'
        } from-[#071827] via-[#071827]/95 via-[68%] to-transparent`}
        aria-hidden="true"
      />

      <div className="relative mx-auto h-full min-h-[calc(100svh-5rem)] max-w-[1920px] lg:min-h-[650px]">
        {/* ==========================================================
            3. REAL FUNCTIONAL REACT PROFILE (100% PRESERVED EXACTLY)
            ========================================================== */}
        <div
          className={`hero-copy absolute z-30 top-[48%] w-[90%] sm:w-[52%] lg:w-[38%] max-w-[520px] -translate-y-1/2 ${
            isRTL ? 'right-[6vw] text-right' : 'left-[6vw] text-left'
          }`}
        >
          {/* Welcome Tag */}
          <div className="mb-[18px] text-[12px] font-semibold tracking-[0.24em] text-[#D8B56A] uppercase">
            {isRTL ? 'مرحباً بكم في ملفي المهني' : 'WELCOME TO MY PORTFOLIO'}
          </div>

          {/* Name: MUHAMMAD SALMAN (Both in identical pure white #F8FAFC) */}
          <h1 className="m-0 text-[clamp(44px,5.8vw,88px)] font-extrabold leading-[0.88] tracking-[-0.04em] text-[#F8FAFC]">
            <span className="text-[#F8FAFC]">{isRTL ? 'محمد' : 'MUHAMMAD'}</span>
            <br />
            <span className="text-[#F8FAFC]">{isRTL ? 'سلمان' : 'SALMAN'}</span>
          </h1>

          {/* Designation: ACCOUNTANT */}
          <div className="mt-[22px] text-[18px] font-medium tracking-[0.34em] text-[#CBD5E1] uppercase">
            {isRTL ? 'محاسب' : 'ACCOUNTANT'}
          </div>

          {/* Actions */}
          <div className={`mt-8 flex flex-wrap gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#D8B56A] bg-[#D8B56A] px-[20px] py-3 text-[13px] font-extrabold text-[#071827] shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E4C477] hover:shadow-[0_10px_30px_rgba(216,181,106,.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B56A]"
            >
              <FileDown size={16} className="text-[#071827]" />
              <span>{isRTL ? 'تحميل السيرة الذاتية' : 'Download CV'}</span>
            </button>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(216,181,106,.45)] bg-[rgba(7,24,39,.45)] px-[18px] py-3 text-[13px] font-medium text-[#F8FAFC] shadow-md shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D8B56A] hover:bg-[rgba(216,181,106,.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B56A]"
            >
              <ExternalLink size={15} className="text-[#D8B56A]" />
              <span>{isRTL ? 'الملف الشخصي على LinkedIn' : 'LinkedIn Profile'}</span>
            </a>
          </div>
        </div>

        {/* ==========================================================
            4. LIVE ANIMATION OVERLAYS MATCHING LOCKED DEMO
            Continuous Routes, Beacons, Waves, and Subtle Shimmers
            ========================================================== */}
        <div className="hero-interactive-overlays absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
          <svg
            className="h-full w-full"
            viewBox="0 0 1853 849"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Route Glow Filters */}
              <filter id="routeGlowBlue" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#69B7E7" floodOpacity="0.8" />
              </filter>
              <filter id="routeGlowGold" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#D8B56A" floodOpacity="0.9" />
              </filter>

              {/* Shimmer Gradients for Skills */}
              <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D8B56A" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#D8B56A" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* --------------------------------------------------------
                A. CONTINUOUS FLOWING ROUTES TOWARD SAUDI ARABIA
                -------------------------------------------------------- */}
            {/* Canada -> Saudi Arabia (Soft Blue Flow) */}
            <path
              className="route-flow route-flow-canada"
              d="M 800 290 C 920 180, 1080 260, 1220 460"
              filter="url(#routeGlowBlue)"
            />

            {/* Pakistan -> Saudi Arabia (Champagne Gold Flow) */}
            <path
              className="route-flow route-flow-pakistan"
              d="M 1380 410 C 1330 380, 1270 410, 1220 460"
              filter="url(#routeGlowGold)"
            />

            {/* --------------------------------------------------------
                B. LOCATION BEACONS & PULSE RINGS
                -------------------------------------------------------- */}
            {/* CANADA (Remote Experience) */}
            <circle className="live-pulse live-pulse-canada" cx="800" cy="290" r="14" />
            <circle className="live-pulse live-pulse-canada delay-700" cx="800" cy="290" r="22" />

            {/* PAKISTAN (Professional Experience) */}
            <circle className="live-pulse live-pulse-pakistan" cx="1380" cy="410" r="14" />
            <circle className="live-pulse live-pulse-pakistan delay-700" cx="1380" cy="410" r="22" />

            {/* SAUDI ARABIA (Main Focal Destination Hub) */}
            <circle className="live-saudi-halo" cx="1220" cy="460" r="44" />
            <circle className="live-pulse live-pulse-saudi" cx="1220" cy="460" r="24" />
            <circle className="live-pulse live-pulse-saudi delay-500" cx="1220" cy="460" r="38" />
            <circle className="live-pulse live-pulse-saudi delay-1000" cx="1220" cy="460" r="54" />

            {/* --------------------------------------------------------
                C. LIVE LOWER FLOWING WAVES (Gold: 20s, Blue: 25s)
                Continuous smooth flowing ribbons across the bottom
                -------------------------------------------------------- */}
            <g className="live-lower-waves">
              {/* Champagne Gold Wave (20s cycle) */}
              <path
                className="live-wave live-wave-gold"
                d="M -100 710 C 240 640, 460 760, 720 700 C 980 640, 1180 770, 1440 710 C 1650 660, 1780 740, 1980 715"
              />
              {/* Muted Soft Blue Wave (25s cycle) */}
              <path
                className="live-wave live-wave-blue"
                d="M -100 760 C 220 800, 480 690, 760 770 C 1040 850, 1260 710, 1520 780 C 1700 830, 1800 760, 1980 775"
              />
            </g>

            {/* --------------------------------------------------------
                D. TOP-RIGHT ORB SUBTLE ROTATING AURA
                Centered at (1680, 160) matching the locked demo orb
                -------------------------------------------------------- */}
            <g className="live-orb-aura" transform="translate(1680, 160)">
              <circle cx="0" cy="0" r="70" fill="none" stroke="rgba(216,181,106,0.25)" strokeWidth="1" strokeDasharray="6 8" />
              <circle cx="0" cy="0" r="64" fill="none" stroke="rgba(105,183,231,0.20)" strokeWidth="0.8" strokeDasharray="4 6" />
            </g>

            {/* --------------------------------------------------------
                E. 17 SUBTLE EXPERTISE SHIMMER OVERLAYS
                Breathing highlights aligned with each pill (no duplicate text)
                -------------------------------------------------------- */}
            {liveSkillPills.map((p) => (
              <rect
                key={p.id}
                x={p.x}
                y={p.y}
                width={p.w}
                height={p.h}
                rx={p.h / 2}
                fill="url(#shimmerGradient)"
                className="live-skill-shimmer"
                style={{
                  animationDuration: p.duration,
                  animationDelay: p.delay,
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* ============================================================
          LOCKED HERO ANIMATION STYLES & HARDWARE ACCELERATED KEYFRAMES
          ============================================================ */}
      <style>{`
        .hero-final {
          isolation: isolate;
        }

        /* 1. CONTINUOUS ROUTE ANIMATIONS MOVING TOWARD SAUDI ARABIA */
        .route-flow {
          fill: none;
          stroke-linecap: round;
          will-change: stroke-dashoffset;
        }

        /* Canada -> Saudi Arabia (Soft Blue 10s loop) */
        .route-flow-canada {
          stroke: #69B7E7;
          stroke-width: 2.8;
          stroke-dasharray: 10 18;
          animation: streamToSaudiCanada 9.5s linear infinite;
        }

        /* Pakistan -> Saudi Arabia (Champagne Gold 8s loop) */
        .route-flow-pakistan {
          stroke: #D8B56A;
          stroke-width: 3.0;
          stroke-dasharray: 10 16;
          animation: streamToSaudiPakistan 7.5s linear infinite;
        }

        @keyframes streamToSaudiCanada {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -280;
          }
        }

        @keyframes streamToSaudiPakistan {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -260;
          }
        }

        /* 2. LIVE LOCATION PULSES (Canada, Pakistan, Saudi Arabia) */
        .live-pulse {
          fill: none;
          transform-box: fill-box;
          transform-origin: center;
          animation: pulseWave 3.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }

        .live-pulse-canada {
          stroke: #69B7E7;
          stroke-width: 1.4;
        }

        .live-pulse-pakistan {
          stroke: #D8B56A;
          stroke-width: 1.5;
        }

        .live-pulse-saudi {
          stroke: #E4C477;
          stroke-width: 1.8;
        }

        .delay-500 {
          animation-delay: 0.6s;
        }

        .delay-700 {
          animation-delay: 1.1s;
        }

        .delay-1000 {
          animation-delay: 1.7s;
        }

        @keyframes pulseWave {
          0% {
            transform: scale(0.6);
            opacity: 0.9;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }

        /* Saudi Arabia Focal Destination Radiant Halo */
        .live-saudi-halo {
          fill: rgba(216,181,106,0.12);
          stroke: rgba(216,181,106,0.50);
          stroke-width: 1.2;
          transform-box: fill-box;
          transform-origin: center;
          animation: saudiHubBreathing 4.2s ease-in-out infinite;
        }

        @keyframes saudiHubBreathing {
          0%, 100% {
            transform: scale(0.92);
            opacity: 0.45;
          }
          50% {
            transform: scale(1.22);
            opacity: 0.85;
          }
        }

        /* 3. TWO LOWER CONTINUOUS FLOWING WAVES (Gold 20s, Blue 25s) */
        .live-wave {
          fill: none;
          stroke-linecap: round;
        }

        .live-wave-gold {
          stroke: rgba(216,181,106,0.55);
          stroke-width: 2.4;
          filter: drop-shadow(0 0 10px rgba(216,181,106,0.5));
          animation: waveGoldMotion 20s ease-in-out infinite alternate;
        }

        .live-wave-blue {
          stroke: rgba(105,183,231,0.50);
          stroke-width: 2.0;
          filter: drop-shadow(0 0 8px rgba(105,183,231,0.45));
          animation: waveBlueMotion 25s ease-in-out infinite alternate;
        }

        @keyframes waveGoldMotion {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-18px, -12px, 0);
          }
          100% {
            transform: translate3d(14px, 8px, 0);
          }
        }

        @keyframes waveBlueMotion {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(16px, 10px, 0);
          }
          100% {
            transform: translate3d(-14px, -14px, 0);
          }
        }

        /* 4. TOP-RIGHT ORB SUBTLE ROTATION */
        .live-orb-aura {
          transform-box: fill-box;
          transform-origin: center;
          animation: orbAuraRotate 30s linear infinite;
        }

        @keyframes orbAuraRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* 5. 17 EXPERTISE SHIMMER BREATHING (No duplicated text) */
        .live-skill-shimmer {
          opacity: 0;
          pointer-events: none;
          animation-name: skillShimmerPulse;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes skillShimmerPulse {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.85;
          }
        }
      `}</style>
    </section>
  );
}
