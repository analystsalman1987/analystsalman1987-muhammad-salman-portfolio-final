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
                BACKGROUND BUSINESS DISTRICT SKYLINE (Flat-Top Horizon)
                Pure rectangular corporate building silhouettes
                ---------------------------------------------------- */}
            <path
              d="
                M 0 900
                L 0 550 L 55 550 L 55 490 L 115 490 L 115 540
                L 190 540 L 190 460 L 260 460 L 260 550
                L 330 550 L 330 500 L 400 500 L 400 570
                L 470 570 L 470 530 L 540 530 L 540 580
                L 620 580 L 620 540 L 690 540 L 690 590
                L 770 590 L 770 540 L 840 540 L 840 580
                L 910 580 L 910 510 L 980 510 L 980 560
                L 1050 560 L 1050 470 L 1120 470 L 1120 540
                L 1200 540 L 1200 480 L 1270 480 L 1270 530
                L 1340 530 L 1340 500 L 1400 500 L 1400 550
                L 1440 550 L 1440 900
                Z
              "
              fill="#081A2B"
              opacity="0.80"
            />

            {/* ====================================================
                LEFT CORPORATE TOWERS (Straight Rectangular Glass Skyscrapers)
                ==================================================== */}
            {/* Tower L3 (Background High-Rise: x=270 to 390) */}
            <g className="animate-arch-depth-b" opacity="0.75">
              <rect x="295" y="305" width="70" height="15" fill="#0D2538" stroke="#CBD5E1" strokeWidth="0.6" strokeOpacity="0.4" />
              <rect
                x="270"
                y="320"
                width="120"
                height="580"
                fill="url(#towerGlassL2)"
                stroke="url(#towerMullionGold)"
                strokeWidth="0.8"
              />
              <line x1="310" y1="320" x2="310" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.6" />
              <line x1="350" y1="320" x2="350" y2="900" stroke="url(#towerMullionGold)" strokeWidth="0.7" />
              {[350, 390, 430, 470, 510, 550, 590, 630, 670, 710, 750, 790, 830].map((y) => (
                <line key={`l3-floor-${y}`} x1="271" y1={y} x2="389" y2={y} stroke="#CBD5E1" strokeOpacity="0.16" strokeWidth="0.6" />
              ))}
              <rect x="282" y="365" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="322" y="445" width="12" height="6" rx="1" fill="#CBD5E1" opacity="0.60" />
              <rect x="360" y="525" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
            </g>

            {/* Tower L2 (Midground Stepped Flat-Top Corporate Tower: x=150 to 295) */}
            <g className="animate-arch-depth-b">
              {/* Stepped Flat Mechanical Crown */}
              <rect x="180" y="195" width="85" height="20" fill="#102C45" stroke="#D8B56A" strokeWidth="0.9" strokeOpacity="0.6" />

              {/* Main Straight Rectangular Skyscraper Body */}
              <rect
                x="150"
                y="215"
                width="145"
                height="685"
                fill="url(#towerGlassL2)"
                stroke="url(#towerMullionGold)"
                strokeWidth="1.1"
              />

              {/* Vertical Mullions */}
              <line x1="185" y1="215" x2="185" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.75" />
              <line x1="222" y1="215" x2="222" y2="900" stroke="url(#towerMullionGold)" strokeWidth="0.9" />
              <line x1="260" y1="215" x2="260" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.75" />

              {/* Horizontal Floor Slabs */}
              {[243, 271, 299, 327, 355, 383, 411, 439, 467, 495, 523, 551, 579, 607, 635, 663, 691, 719, 747, 775, 803, 831, 859].map((y) => (
                <line key={`l2-floor-${y}`} x1="151" y1={y} x2="294" y2={y} stroke="#CBD5E1" strokeOpacity="0.20" strokeWidth="0.75" />
              ))}

              {/* Window Lights */}
              <rect x="160" y="255" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="198" y="283" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.65" />
              <rect x="235" y="339" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="272" y="395" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="160" y="423" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.75" />
              <rect x="198" y="479" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="235" y="563" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="272" y="619" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.65" />
              <rect x="198" y="675" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
            </g>

            {/* Tower L1 (Foreground Primary Corporate Skyscraper: x=15 to 165) */}
            <g className="animate-arch-depth-a">
              {/* Flat Mechanical Penthouse Roof Box */}
              <rect x="45" y="118" width="90" height="22" fill="#132E43" stroke="#D8B56A" strokeWidth="1.0" strokeOpacity="0.7" />

              {/* Main Straight Rectangular Skyscraper Body */}
              <rect
                x="15"
                y="140"
                width="150"
                height="760"
                fill="url(#towerGlassL1)"
                stroke="url(#towerMullionGold)"
                strokeWidth="1.2"
              />

              {/* Vertical Mullion Lines */}
              <line x1="52" y1="140" x2="52" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.8" />
              <line x1="90" y1="140" x2="90" y2="900" stroke="url(#towerMullionGold)" strokeWidth="1.2" />
              <line x1="127" y1="140" x2="127" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.8" />

              {/* Horizontal Floor Slabs */}
              {[166, 192, 218, 244, 270, 296, 322, 348, 374, 400, 426, 452, 478, 504, 530, 556, 582, 608, 634, 660, 686, 712, 738, 764, 790, 816, 842, 868].map((y) => (
                <line key={`l1-floor-${y}`} x1="16" y1={y} x2="164" y2={y} stroke="#CBD5E1" strokeOpacity="0.22" strokeWidth="0.75" />
              ))}

              {/* Illuminated Office Windows (Gold & Cool White) */}
              <rect x="25" y="200" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="100" y="226" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.65" />
              <rect x="62" y="278" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="137" y="330" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="25" y="382" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.70" />
              <rect x="100" y="434" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="62" y="486" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="137" y="538" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.60" />
              <rect x="25" y="590" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="100" y="642" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="62" y="694" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.75" />
            </g>

            {/* ====================================================
                RIGHT CORPORATE TOWERS (Straight Rectangular Glass Skyscrapers)
                ==================================================== */}
            {/* Tower R3 (Background High-Rise: x=1050 to 1170) */}
            <g className="animate-arch-depth-b" opacity="0.75">
              <rect x="1075" y="295" width="70" height="15" fill="#0D2538" stroke="#CBD5E1" strokeWidth="0.6" strokeOpacity="0.4" />
              <rect
                x="1050"
                y="310"
                width="120"
                height="590"
                fill="url(#towerGlassR2)"
                stroke="url(#towerMullionGold)"
                strokeWidth="0.8"
              />
              <line x1="1090" y1="310" x2="1090" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.6" />
              <line x1="1130" y1="310" x2="1130" y2="900" stroke="url(#towerMullionGold)" strokeWidth="0.7" />
              {[340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820].map((y) => (
                <line key={`r3-floor-${y}`} x1="1051" y1={y} x2="1169" y2={y} stroke="#CBD5E1" strokeOpacity="0.16" strokeWidth="0.6" />
              ))}
              <rect x="1062" y="355" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="1102" y="435" width="12" height="6" rx="1" fill="#CBD5E1" opacity="0.60" />
              <rect x="1140" y="515" width="12" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
            </g>

            {/* Tower R2 (Midground Stepped Flat-Top Corporate Tower: x=1140 to 1290) */}
            <g className="animate-arch-depth-b">
              {/* Stepped Flat Mechanical Crown */}
              <rect x="1170" y="185" width="90" height="20" fill="#102C45" stroke="#D8B56A" strokeWidth="0.9" strokeOpacity="0.6" />

              {/* Main Straight Rectangular Skyscraper Body */}
              <rect
                x="1140"
                y="205"
                width="150"
                height="695"
                fill="url(#towerGlassR2)"
                stroke="url(#towerMullionGold)"
                strokeWidth="1.1"
              />

              {/* Vertical Mullions */}
              <line x1="1177" y1="205" x2="1177" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.75" />
              <line x1="1215" y1="205" x2="1215" y2="900" stroke="url(#towerMullionGold)" strokeWidth="0.9" />
              <line x1="1252" y1="205" x2="1252" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.75" />

              {/* Floor Slabs */}
              {[233, 261, 289, 317, 345, 373, 401, 429, 457, 485, 513, 541, 569, 597, 625, 653, 681, 709, 737, 765, 793, 821, 849].map((y) => (
                <line key={`r2-floor-${y}`} x1="1141" y1={y} x2="1289" y2={y} stroke="#CBD5E1" strokeOpacity="0.20" strokeWidth="0.75" />
              ))}

              {/* Windows */}
              <rect x="1150" y="245" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="1188" y="273" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.70" />
              <rect x="1226" y="329" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="1264" y="385" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="1150" y="441" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.65" />
              <rect x="1188" y="497" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="1226" y="581" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="1264" y="637" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.75" />
              <rect x="1188" y="693" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
            </g>

            {/* Tower R1 (Foreground Primary Corporate Skyscraper: x=1270 to 1425) */}
            <g className="animate-arch-depth-a">
              {/* Flat Mechanical Penthouse Roof Box */}
              <rect x="1300" y="108" width="95" height="22" fill="#132E43" stroke="#D8B56A" strokeWidth="1.0" strokeOpacity="0.7" />

              {/* Main Straight Rectangular Skyscraper Body */}
              <rect
                x="1270"
                y="130"
                width="155"
                height="770"
                fill="url(#towerGlassR1)"
                stroke="url(#towerMullionGold)"
                strokeWidth="1.2"
              />

              {/* Vertical Mullions */}
              <line x1="1308" y1="130" x2="1308" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.8" />
              <line x1="1347" y1="130" x2="1347" y2="900" stroke="url(#towerMullionGold)" strokeWidth="1.2" />
              <line x1="1386" y1="130" x2="1386" y2="900" stroke="url(#towerMullionBlue)" strokeWidth="0.8" />

              {/* Floor Divisions */}
              {[156, 182, 208, 234, 260, 286, 312, 338, 364, 390, 416, 442, 468, 494, 520, 546, 572, 598, 624, 650, 676, 702, 728, 754, 780, 806, 832, 858].map((y) => (
                <line key={`r1-floor-${y}`} x1="1271" y1={y} x2="1424" y2={y} stroke="#CBD5E1" strokeOpacity="0.22" strokeWidth="0.75" />
              ))}

              {/* Windows */}
              <rect x="1280" y="190" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="1357" y="216" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.70" />
              <rect x="1319" y="268" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="1396" y="320" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="1280" y="372" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.65" />
              <rect x="1357" y="424" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
              <rect x="1319" y="476" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-b" />
              <rect x="1396" y="528" width="13" height="6" rx="1" fill="#CBD5E1" opacity="0.75" />
              <rect x="1280" y="580" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-c" />
              <rect x="1357" y="632" width="13" height="6" rx="1" fill="#D8B56A" className="animate-window-glow-a" />
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
                className="animate-graph-line"
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
                className="animate-graph-dash"
                d="
                  M 680 755
                  C 780 745, 870 720, 980 690
                  C 1080 660, 1180 615, 1290 575
                  C 1360 550, 1400 525, 1440 505
                "
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                strokeDasharray="6 8"
                strokeOpacity="0.45"
              />

              {/* Glowing Financial Data Points */}
              <circle cx="780" cy="718" r="3.5" fill="#D8B56A" stroke="#071827" strokeWidth="1.5" className="animate-graph-node-1" />
              <circle cx="950" cy="670" r="4.0" fill="#F8FAFC" stroke="#D8B56A" strokeWidth="1.5" className="animate-graph-node-2" />
              <circle cx="1120" cy="605" r="3.5" fill="#D8B56A" stroke="#071827" strokeWidth="1.5" className="animate-graph-node-3" />
              <circle cx="1260" cy="550" r="4.5" fill="#F8FAFC" stroke="#D8B56A" strokeWidth="2.0" className="animate-graph-node-4" />
              <circle cx="1380" cy="495" r="4.0" fill="#D8B56A" stroke="#071827" strokeWidth="1.5" className="animate-graph-node-5" />
            </g>
          </svg>
        </div>

        {/* ----------------------------------------------------------
            4. ANIMATED FINANCIAL BARS (LOWER BACKGROUND)
            Semi-transparent blue/teal/gold bars rising & falling
            ---------------------------------------------------------- */}
        <div className="absolute inset-x-0 bottom-0 z-0 flex h-48 items-end justify-center gap-2.5 px-6 opacity-75 sm:gap-4 lg:gap-6">
          <div className="animate-fin-bar-1 origin-bottom h-14 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/30 border-t border-[#D8B56A]/40" />
          <div className="animate-fin-bar-2 origin-bottom h-24 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#38BDF8]/25 border-t border-[#38BDF8]/40" />
          <div className="animate-fin-bar-3 origin-bottom h-18 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/30 border-t border-[#D8B56A]/40" />
          <div className="animate-fin-bar-4 origin-bottom h-32 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/35 border-t border-[#D8B56A]/50" />
          <div className="animate-fin-bar-5 origin-bottom h-20 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#38BDF8]/25 border-t border-[#38BDF8]/40" />
          <div className="animate-fin-bar-6 origin-bottom h-28 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/30 border-t border-[#D8B56A]/40" />
          <div className="animate-fin-bar-7 origin-bottom h-16 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#38BDF8]/25 border-t border-[#38BDF8]/40" />
          <div className="animate-fin-bar-8 origin-bottom h-36 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/35 border-t border-[#D8B56A]/50" />
          <div className="animate-fin-bar-9 origin-bottom h-22 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#D8B56A]/30 border-t border-[#D8B56A]/40" />
          <div className="animate-fin-bar-10 origin-bottom h-30 w-3.5 rounded-t-sm bg-gradient-to-t from-[#0D2538]/70 via-[#132E43]/45 to-[#38BDF8]/25 border-t border-[#38BDF8]/40" />
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
            pointer-events-none
            absolute
            top-0
            bottom-0
            w-[380px]
            sm:w-[500px]
            rotate-[16deg]
            bg-[linear-gradient(90deg,transparent_0%,rgba(216,181,106,0.03)_25%,rgba(255,255,255,0.12)_48%,rgba(216,181,106,0.22)_52%,rgba(216,181,106,0.06)_75%,transparent_100%)]
            blur-[10px]
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
