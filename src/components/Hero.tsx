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
        lg:px-8
        lg:py-0
      "
    >
      {/* ============================================================
          ACTIVE CORPORATE FINANCE CITY & ARCHITECTURAL GLASS BACKGROUND
          Clearly visible skyscrapers, financial graph, bars & reflections.
          ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* ----------------------------------------------------------
            1. DEEP NAVY BASE GRADIENT
            ---------------------------------------------------------- */}
        <div
          className="
            absolute
            -inset-16
            bg-[radial-gradient(ellipse_90%_75%_at_50%_25%,#132E43_0%,#0D2538_30%,#081A2B_62%,#071827_100%)]
          "
        />

        {/* ----------------------------------------------------------
            2. MODERN CORPORATE SKYSCRAPERS & FINANCIAL CITY (SVG)
            Clearly visible on Left, Right, and lower background horizon
            ---------------------------------------------------------- */}
        <div className="absolute inset-0 opacity-90">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Glass Tower Facade Gradients */}
              <linearGradient id="towerGlassL1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B3A54" stopOpacity="0.85" />
                <stop offset="45%" stopColor="#0E273C" stopOpacity="0.90" />
                <stop offset="100%" stopColor="#081A2B" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="towerGlassL2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#224563" stopOpacity="0.80" />
                <stop offset="50%" stopColor="#122E46" stopOpacity="0.88" />
                <stop offset="100%" stopColor="#071827" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="towerGlassR1" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#254868" stopOpacity="0.82" />
                <stop offset="40%" stopColor="#14324D" stopOpacity="0.88" />
                <stop offset="100%" stopColor="#071827" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="towerGlassR2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E3E5C" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#102C45" stopOpacity="0.90" />
                <stop offset="100%" stopColor="#081A2B" stopOpacity="0.95" />
              </linearGradient>

              {/* Gold Architectural Mullion Stroke */}
              <linearGradient id="towerMullionGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D8B56A" stopOpacity="0.65" />
                <stop offset="60%" stopColor="#CBD5E1" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#D8B56A" stopOpacity="0.15" />
              </linearGradient>

              {/* Blue Glass Highlight Stroke */}
              <linearGradient id="towerMullionBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.10" />
              </linearGradient>

              {/* Financial Graph Fill Gradient */}
              <linearGradient id="financialGraphFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D8B56A" stopOpacity="0.20" />
                <stop offset="60%" stopColor="#C9A45C" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#071827" stopOpacity="0.00" />
              </linearGradient>
            </defs>

            {/* ----------------------------------------------------
                BACKGROUND SKYLINE HORIZON (Lower Distant Buildings)
                ---------------------------------------------------- */}
            <path
              d="
                M 0 900
                L 0 540 L 70 540 L 70 490 L 140 490 L 140 550
                L 230 550 L 230 460 L 300 460 L 300 560
                L 390 560 L 390 510 L 460 510 L 460 580
                L 560 580 L 560 530 L 630 530 L 630 590
                L 760 590 L 760 540 L 830 540 L 830 580
                L 930 580 L 930 500 L 1010 500 L 1010 560
                L 1100 560 L 1100 480 L 1170 480 L 1170 550
                L 1260 550 L 1260 470 L 1330 470 L 1330 530
                L 1440 530 L 1440 900
                Z
              "
              fill="#081A2B"
              opacity="0.85"
            />

            {/* ====================================================
                LEFT CORPORATE TOWERS (Clearly Visible & Detailed)
                ==================================================== */}
            {/* Tower L1 (Far Left Main Spire High-Rise: x=0 to 190) */}
            <g className="animate-arch-depth-a">
              {/* Main Body */}
              <polygon
                points="10,900 10,180 60,110 120,110 185,180 185,900"
                fill="url(#towerGlassL1)"
                stroke="url(#towerMullionGold)"
                strokeWidth="1.2"
              />
              {/* Spire Pinnacle */}
              <line x1="90" y1="110" x2="90" y2="40" stroke="#D8B56A" strokeWidth="1.5" strokeOpacity="0.8" />
              <circle cx="90" cy="40" r="2.5" fill="#D8B56A" />

              {/* Vertical Mullion Lines */}
              <line x1="45" y1="180" x2="45" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.8" />
              <line x1="90" y1="110" x2="90" y2="900" stroke="url(#towerMullionGold)" strokeWidth="1.2" />
              <line x1="140" y1="180" x2="140" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.8" />

              {/* Horizontal Floor Slabs */}
              {[210, 250, 290, 330, 370, 410, 450, 490, 530, 570, 610, 650, 690, 730, 770, 810, 850].map((y) => (
                <line key={`l1-floor-${y}`} x1="12" y1={y} x2="183" y2={y} stroke="#CBD5E1" strokeOpacity="0.22" strokeWidth="0.75" />
              ))}

              {/* Illuminated Office Windows (Gold & Cool White) */}
              <rect x="25" y="260" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="105" y="260" width="12" height="6" rx="1" fill="#CBD5E1" opacity="0.65" />
              <rect x="60" y="300" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="150" y="340" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="25" y="380" width="12" height="6" rx="1" fill="#CBD5E1" opacity="0.70" />
              <rect x="105" y="420" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="60" y="460" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="150" y="500" width="12" height="6" rx="1" fill="#CBD5E1" opacity="0.60" />
              <rect x="25" y="540" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="105" y="580" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="60" y="620" width="14" height="6" rx="1" fill="#CBD5E1" opacity="0.75" />
            </g>

            {/* Tower L2 (Midground Stepped Corporate Tower: x=175 to 330) */}
            <g className="animate-arch-depth-b">
              {/* Stepped Crown */}
              <rect x="235" y="195" width="45" height="30" fill="#132E43" stroke="#D8B56A" strokeWidth="0.8" strokeOpacity="0.5" />
              <line x1="257" y1="195" x2="257" y2="160" stroke="#D8B56A" strokeWidth="1.2" strokeOpacity="0.7" />

              {/* Main Tower Body */}
              <rect
                x="175"
                y="225"
                width="155"
                height="675"
                fill="url(#towerGlassL2)"
                stroke="url(#towerMullionGold)"
                strokeWidth="1.1"
              />

              {/* Vertical Mullions */}
              <line x1="215" y1="225" x2="215" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.75" />
              <line x1="255" y1="225" x2="255" y2="900" stroke="url(#towerMullionGold)" strokeWidth="0.9" />
              <line x1="295" y1="225" x2="295" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.75" />

              {/* Horizontal Floor Slabs */}
              {[255, 295, 335, 375, 415, 455, 495, 535, 575, 615, 655, 695, 735, 775, 815, 855].map((y) => (
                <line key={`l2-floor-${y}`} x1="176" y1={y} x2="329" y2={y} stroke="#CBD5E1" strokeOpacity="0.20" strokeWidth="0.75" />
              ))}

              {/* Window Lights */}
              <rect x="190" y="270" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="230" y="310" width="14" height="6" rx="1" fill="#CBD5E1" opacity="0.65" />
              <rect x="270" y="350" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="230" y="390" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="190" y="430" width="14" height="6" rx="1" fill="#CBD5E1" opacity="0.75" />
              <rect x="270" y="470" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="230" y="550" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="190" y="590" width="14" height="6" rx="1" fill="#CBD5E1" opacity="0.65" />
              <rect x="270" y="630" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
            </g>

            {/* ====================================================
                RIGHT CORPORATE TOWERS (Clearly Visible & Detailed)
                ==================================================== */}
            {/* Tower R2 (Mid-Right Stepped Financial Center: x=1110 to 1270) */}
            <g className="animate-arch-depth-b">
              {/* Crown Box */}
              <rect x="1165" y="160" width="50" height="35" fill="#132E43" stroke="#D8B56A" strokeWidth="0.8" strokeOpacity="0.5" />
              <line x1="1190" y1="160" x2="1190" y2="120" stroke="#D8B56A" strokeWidth="1.2" strokeOpacity="0.7" />

              {/* Main Body */}
              <rect
                x="1110"
                y="195"
                width="160"
                height="705"
                fill="url(#towerGlassR2)"
                stroke="url(#towerMullionGold)"
                strokeWidth="1.1"
              />

              {/* Vertical Mullions */}
              <line x1="1150" y1="195" x2="1150" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.75" />
              <line x1="1190" y1="195" x2="1190" y2="900" stroke="url(#towerMullionGold)" strokeWidth="0.9" />
              <line x1="1230" y1="195" x2="1230" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.75" />

              {/* Floor Slabs */}
              {[225, 265, 305, 345, 385, 425, 465, 505, 545, 585, 625, 665, 705, 745, 785, 825].map((y) => (
                <line key={`r2-floor-${y}`} x1="1111" y1={y} x2="1269" y2={y} stroke="#CBD5E1" strokeOpacity="0.20" strokeWidth="0.75" />
              ))}

              {/* Windows */}
              <rect x="1125" y="240" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="1165" y="280" width="14" height="6" rx="1" fill="#CBD5E1" opacity="0.70" />
              <rect x="1205" y="320" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="1125" y="360" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="1205" y="400" width="14" height="6" rx="1" fill="#CBD5E1" opacity="0.65" />
              <rect x="1165" y="440" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="1125" y="520" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="1205" y="560" width="14" height="6" rx="1" fill="#CBD5E1" opacity="0.75" />
              <rect x="1165" y="600" width="14" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
            </g>

            {/* Tower R1 (Far Right Angled Iconic Glass Skyscraper: x=1255 to 1440) */}
            <g className="animate-arch-depth-a">
              {/* Main Angled Chamfer Body */}
              <polygon
                points="1255,900 1255,160 1325,90 1395,90 1435,140 1435,900"
                fill="url(#towerGlassR1)"
                stroke="url(#towerMullionGold)"
                strokeWidth="1.2"
              />
              {/* Roof Spire */}
              <line x1="1360" y1="90" x2="1360" y2="30" stroke="#D8B56A" strokeWidth="1.5" strokeOpacity="0.8" />
              <circle cx="1360" cy="30" r="2.5" fill="#D8B56A" />

              {/* Vertical Mullions */}
              <line x1="1300" y1="160" x2="1300" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.8" />
              <line x1="1345" y1="90" x2="1345" y2="900" stroke="url(#towerMullionGold)" strokeWidth="1.1" />
              <line x1="1390" y1="90" x2="1390" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.8" />

              {/* Floor Divisions */}
              {[180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860].map((y) => (
                <line key={`r1-floor-${y}`} x1="1257" y1={y} x2="1433" y2={y} stroke="#CBD5E1" strokeOpacity="0.22" strokeWidth="0.75" />
              ))}

              {/* Windows */}
              <rect x="1275" y="240" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="1315" y="280" width="12" height="6" rx="1" fill="#CBD5E1" opacity="0.70" />
              <rect x="1365" y="320" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="1405" y="360" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="1275" y="400" width="12" height="6" rx="1" fill="#CBD5E1" opacity="0.65" />
              <rect x="1365" y="440" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="1315" y="480" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="1405" y="520" width="12" height="6" rx="1" fill="#CBD5E1" opacity="0.75" />
              <rect x="1275" y="560" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="1365" y="600" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
            </g>

            {/* ====================================================
                3. MOVING CHAMPAGNE-GOLD FINANCIAL LINE GRAPH
                Ascending trendline in lower-right background
                ==================================================== */}
            <g className="animate-financial-graph">
              {/* Area Gradient Fill Below Graph */}
              <path
                d="
                  M 620 740
                  C 740 730, 840 700, 950 670
                  C 1060 640, 1140 590, 1260 550
                  C 1340 520, 1390 490, 1440 470
                  L 1440 850
                  L 620 850
                  Z
                "
                fill="url(#financialGraphFill)"
              />

              {/* Main Ascending Gold Trend Line */}
              <path
                d="
                  M 620 740
                  C 740 730, 840 700, 950 670
                  C 1060 640, 1140 590, 1260 550
                  C 1340 520, 1390 490, 1440 470
                "
                fill="none"
                stroke="#D8B56A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeOpacity="0.85"
              />

              {/* Supporting Secondary Dotted Trajectory */}
              <path
                d="
                  M 680 755
                  C 780 745, 870 720, 980 690
                  C 1080 660, 1180 615, 1290 575
                  C 1360 550, 1400 525, 1440 505
                "
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                strokeOpacity="0.45"
              />

              {/* Glowing Financial Data Points */}
              <circle cx="780" cy="718" r="3.5" fill="#D8B56A" stroke="#071827" strokeWidth="1.5" />
              <circle cx="950" cy="670" r="4.0" fill="#F8FAFC" stroke="#D8B56A" strokeWidth="1.5" />
              <circle cx="1120" cy="605" r="3.5" fill="#D8B56A" stroke="#071827" strokeWidth="1.5" />
              <circle cx="1260" cy="550" r="4.5" fill="#F8FAFC" stroke="#D8B56A" strokeWidth="2.0" />
              <circle cx="1380" cy="495" r="4.0" fill="#D8B56A" stroke="#071827" strokeWidth="1.5" />
            </g>
          </svg>
        </div>

        {/* ----------------------------------------------------------
            4. ANIMATED FINANCIAL BARS (LOWER BACKGROUND)
            Semi-transparent blue/teal/gold bars rising & falling
            ---------------------------------------------------------- */}
        <div className="absolute inset-x-0 bottom-0 z-0 flex h-48 items-end justify-center gap-2.5 px-6 opacity-60 sm:gap-4 lg:gap-6">
          <div className="animate-fin-bar-1 h-14 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/30 border-t border-[#D8B56A]/40" />
          <div className="animate-fin-bar-2 h-24 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#38BDF8]/25 border-t border-[#38BDF8]/40" />
          <div className="animate-fin-bar-3 h-18 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/30 border-t border-[#D8B56A]/40" />
          <div className="animate-fin-bar-4 h-32 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/35 border-t border-[#D8B56A]/50" />
          <div className="animate-fin-bar-1 h-20 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#38BDF8]/25 border-t border-[#38BDF8]/40" />
          <div className="animate-fin-bar-2 h-28 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/30 border-t border-[#D8B56A]/40" />
          <div className="animate-fin-bar-3 h-16 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#38BDF8]/25 border-t border-[#38BDF8]/40" />
          <div className="animate-fin-bar-4 h-36 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/35 border-t border-[#D8B56A]/50" />
          <div className="animate-fin-bar-2 h-22 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/30 border-t border-[#D8B56A]/40" />
          <div className="animate-fin-bar-1 h-30 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#38BDF8]/25 border-t border-[#38BDF8]/40" />
        </div>

        {/* ----------------------------------------------------------
            5. MOVING GOLD / GLASS REFLECTION LIGHT SWEEPS
            Slowly glides across corporate city (LEFT -> RIGHT -> RESET)
            ---------------------------------------------------------- */}
        {/* Broad Ambient Gold Drift (Left-Center) */}
        <div
          className="
            animate-gold-drift
            absolute
            top-[10%]
            left-[12%]
            h-[540px]
            w-[540px]
            rounded-full
            bg-[radial-gradient(circle,rgba(216,181,106,0.18)_0%,rgba(201,164,92,0.08)_35%,transparent_70%)]
            blur-[65px]
          "
        />

        {/* Secondary Gold Ambient Glow (Right-Lower) */}
        <div
          className="
            animate-gold-drift-2
            absolute
            right-[8%]
            bottom-[10%]
            h-[480px]
            w-[480px]
            rounded-full
            bg-[radial-gradient(circle,rgba(201,164,92,0.15)_0%,rgba(216,181,106,0.06)_40%,transparent_70%)]
            blur-[70px]
          "
        />

        {/* Moving Corporate Light Sweep Across Buildings */}
        <div
          className="
            animate-corp-light-sweep
            absolute
            top-0
            left-0
            h-full
            w-[420px]
            rotate-[15deg]
            bg-[linear-gradient(90deg,transparent_0%,rgba(216,181,106,0.04)_30%,rgba(255,255,255,0.12)_50%,rgba(216,181,106,0.18)_55%,rgba(216,181,106,0.04)_75%,transparent_100%)]
            blur-[8px]
          "
        />

        {/* ----------------------------------------------------------
            6. CENTRAL DARK GLASS AREA & VIGNETTE
            Protects the name and buttons for pristine contrast
            ---------------------------------------------------------- */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_52%_52%_at_50%_48%,rgba(7,24,39,0.72)_0%,rgba(7,24,39,0.38)_55%,transparent_82%)]
          "
        />

        {/* Executive Edge Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_80%_75%_at_50%_50%,transparent_45%,rgba(7,24,39,0.30)_75%,#071827_100%)]
          "
        />
      </div>

      {/* ============================================================
          CURRENT APPROVED HERO CONTENT (100% UNCHANGED)
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

        {/* Name: MUHAMMAD SALMAN */}
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

        {/* Designation: ACCOUNTANT */}
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
