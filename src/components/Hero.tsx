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


  // Floating profile points inspired by the reference interaction style.
  // Kept behind the main name/buttons so the locked centre content stays clear.
  const floatingPoints = [
    { label: '14+ Years Exp', pos: 'left-[5%] top-[16%]', tone: 'gold', motion: 'pulse', delay: '0s', dur: '12.5s' },
    { label: 'Financial Reporting', pos: 'left-[22%] top-[12%]', tone: 'blue', motion: 'vertical', delay: '-2s', dur: '15s' },
    { label: 'Receivables', pos: 'left-[45%] top-[18%]', tone: 'gold', motion: 'zoom', delay: '-3.2s', dur: '13.5s' },
    { label: 'VAT Reports & Submission', pos: 'left-[58%] top-[12%]', tone: 'blue', motion: 'drift', delay: '-1.4s', dur: '16s' },
    { label: 'ERP Software', pos: 'left-[7%] top-[47%]', tone: 'blue', motion: 'zoom', delay: '-4.8s', dur: '14.5s' },
    { label: 'Reconciliations', pos: 'right-[14%] top-[39%]', tone: 'gold', motion: 'pulse', delay: '-2.7s', dur: '13.8s' },
    { label: 'Costing', pos: 'left-[17%] bottom-[18%]', tone: 'blue', motion: 'vertical', delay: '-5.1s', dur: '15.5s' },
    { label: 'MS Office', pos: 'right-[22%] bottom-[16%]', tone: 'blue', motion: 'drift', delay: '-2.3s', dur: '15.2s' },
    { label: 'Monthly Closing', pos: 'left-[32%] bottom-[11%]', tone: 'gold', motion: 'pulse', delay: '-4.1s', dur: '14.2s' },
    { label: 'Cash Handling', pos: 'right-[7%] bottom-[27%]', tone: 'gold', motion: 'vertical', delay: '-1.1s', dur: '16.2s' },
    { label: 'Petty Cash', pos: 'left-[4%] bottom-[33%]', tone: 'gold', motion: 'drift', delay: '-3.6s', dur: '14s' },
    { label: 'Payables', pos: 'right-[39%] bottom-[7%]', tone: 'blue', motion: 'zoom', delay: '-5.4s', dur: '15.3s' },
    { label: 'Oracle', pos: 'left-[30%] top-[25%]', tone: 'gold', motion: 'pulse', delay: '-2.2s', dur: '13s' },
    { label: 'Qoyod', pos: 'right-[8%] top-[25%]', tone: 'blue', motion: 'vertical', delay: '-6s', dur: '16.5s' },
    { label: 'QuickBooks', pos: 'right-[3%] bottom-[9%]', tone: 'gold', motion: 'zoom', delay: '-4.3s', dur: '14.3s' },
  ];

  /*
   * LOCKED HERO FINANCE PATH
   *
   * Main gold wave:
   * starts near the visual centre and rises smoothly toward the right.
   *
   * No permanent dots are placed on this gold line.
   */
  const goldWavePath = `
    M 675 720
    C 715 708, 742 690, 770 662
    C 790 642, 805 610, 830 604
    C 855 598, 868 624, 892 618
    C 920 610, 936 574, 962 548
    C 990 520, 1012 502, 1038 510
    C 1068 520, 1088 552, 1118 548
    C 1150 544, 1170 498, 1195 458
    C 1220 418, 1244 390, 1270 394
    C 1300 398, 1315 426, 1340 412
    C 1370 395, 1388 342, 1415 294
    C 1425 276, 1434 262, 1440 254
  `;

  /*
   * Thin secondary dotted trend line.
   * It sits below the main gold wave.
   */
  const dottedTrendPath = `
    M 690 758
    C 730 748, 760 730, 790 714
    C 820 698, 850 686, 880 674
    C 910 662, 940 650, 970 632
    C 1000 614, 1030 598, 1060 584
    C 1090 570, 1120 558, 1150 542
    C 1180 526, 1210 505, 1240 480
    C 1270 455, 1300 430, 1330 402
    C 1360 374, 1390 340, 1440 300
  `;

  const bars = [
    { x: 715, h: 34, gold: false, dur: 6.2, delay: 0.0 },
    { x: 744, h: 47, gold: true, dur: 6.7, delay: 0.3 },
    { x: 773, h: 58, gold: false, dur: 6.0, delay: 0.7 },
    { x: 802, h: 72, gold: false, dur: 7.0, delay: 1.0 },
    { x: 831, h: 86, gold: true, dur: 6.4, delay: 0.5 },
    { x: 860, h: 68, gold: false, dur: 6.8, delay: 1.2 },
    { x: 889, h: 96, gold: false, dur: 7.2, delay: 0.8 },
    { x: 918, h: 112, gold: true, dur: 6.5, delay: 1.5 },
    { x: 947, h: 91, gold: false, dur: 6.9, delay: 0.4 },
    { x: 976, h: 126, gold: false, dur: 7.4, delay: 1.1 },
    { x: 1005, h: 148, gold: true, dur: 6.6, delay: 0.9 },
    { x: 1034, h: 105, gold: false, dur: 7.0, delay: 1.7 },
    { x: 1063, h: 137, gold: false, dur: 6.3, delay: 0.2 },
    { x: 1092, h: 161, gold: true, dur: 7.1, delay: 1.3 },
    { x: 1121, h: 119, gold: false, dur: 6.8, delay: 0.6 },
    { x: 1150, h: 178, gold: false, dur: 7.5, delay: 1.0 },
    { x: 1179, h: 203, gold: true, dur: 6.7, delay: 1.5 },
    { x: 1208, h: 153, gold: false, dur: 7.2, delay: 0.3 },
    { x: 1237, h: 218, gold: true, dur: 6.5, delay: 1.1 },
    { x: 1266, h: 181, gold: false, dur: 7.3, delay: 0.8 },
    { x: 1295, h: 246, gold: true, dur: 6.9, delay: 1.6 },
    { x: 1324, h: 210, gold: false, dur: 7.4, delay: 0.5 },
    { x: 1353, h: 274, gold: true, dur: 6.8, delay: 1.2 },
    { x: 1382, h: 239, gold: false, dur: 7.1, delay: 0.9 },
  ];

  const dottedBlinkPoints = [
    [760, 730],
    [800, 708],
    [840, 690],
    [880, 674],
    [920, 656],
    [960, 638],
    [1000, 615],
    [1040, 594],
    [1080, 574],
    [1120, 558],
    [1160, 536],
    [1200, 512],
    [1240, 480],
    [1280, 447],
    [1320, 410],
    [1360, 370],
    [1400, 332],
  ];

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
      {/* ======================================================
          LOCKED HERO BACKGROUND
      ======================================================= */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Navy background */}
        <div className="absolute inset-0 bg-[#071827]" />

        <div
          className="
            absolute
            -inset-12
            bg-[radial-gradient(ellipse_100%_90%_at_50%_38%,#132E43_0%,#0D2538_31%,#081A2B_65%,#071827_100%)]
          "
        />

        {/* ====================================================
            LEFT SKYLINE — FULL HEIGHT / LOCKED GOLDEN TREATMENT
            The real photo now fills the Hero from top to bottom
            and extends beneath the finance graph.
        ===================================================== */}
        <div
          className="
            hero-locked-skyline
            absolute
            inset-y-0
            left-0
            z-[1]
            w-[100%]
            sm:w-[100%]
            lg:w-[100%]
            xl:w-[100%]
          "
        >
          {/* Base background behind the uploaded skyline image */}
          <div className="absolute inset-0 bg-[#0A1D2E]" />

          <img
            src="/images/Golden-Hour Waterfront Skyline.png"
            alt=""
            draggable={false}
            loading="eager"
            className="
              hero-locked-skyline-image
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-left-bottom
            "
          />

          {/* Right-side navy blend: no visible rectangular photo edge */}
          <div
            className="
              absolute
              inset-y-0
              right-0
              w-[38%]
              bg-gradient-to-r
              from-transparent
              via-[#071827]/12
              to-[#071827]/48
            "
          />

          {/* Soft top integration, while keeping skyline full-height */}
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[16%]
              bg-gradient-to-b
              from-[#071827]/34
              to-transparent
            "
          />

          {/* Soft bottom integration */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[8%]
              bg-gradient-to-t
              from-[#071827]/58
              to-transparent
            "
          />
        </div>

        {/* Golden/navy atmosphere carries behind centre and graph */}
        <div
          className="
            absolute
            bottom-[7%]
            left-[20%]
            z-[1]
            h-[72%]
            w-[55%]
            rounded-full
            bg-[radial-gradient(ellipse,rgba(216,181,106,0.105)_0%,rgba(201,164,92,0.05)_38%,rgba(13,37,56,0.06)_58%,transparent_76%)]
            blur-[72px]
          "
        />

        {/* ====================================================
            RIGHT FINANCE VISUAL
        ===================================================== */}
        <svg
          className="absolute inset-0 z-[2] h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="lockedGoldWave"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#9A7737"
                stopOpacity="0.60"
              />
              <stop
                offset="45%"
                stopColor="#C9A45C"
                stopOpacity="0.90"
              />
              <stop
                offset="100%"
                stopColor="#E1BF72"
                stopOpacity="1"
              />
            </linearGradient>

            <linearGradient
              id="lockedBlueBar"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#183448"
                stopOpacity="0.44"
              />
              <stop
                offset="100%"
                stopColor="#71899A"
                stopOpacity="0.82"
              />
            </linearGradient>

            <linearGradient
              id="lockedGoldBar"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#70562A"
                stopOpacity="0.48"
              />
              <stop
                offset="100%"
                stopColor="#D8B56A"
                stopOpacity="0.90"
              />
            </linearGradient>

            <filter
              id="lockedGoldGlow"
              x="-60%"
              y="-60%"
              width="220%"
              height="220%"
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
              id="lockedDotGlow"
              x="-150%"
              y="-150%"
              width="400%"
              height="400%"
            >
              <feGaussianBlur
                stdDeviation="2.5"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ================================================
              BARS — thin, numerous, professional
          ================================================= */}
          <g>
            {bars.map((bar, index) => {
              const baseY = 822;
              const lowHeight = Math.max(28, bar.h - 18);
              const highHeight = bar.h + 22;

              return (
                <rect
                  key={index}
                  x={bar.x}
                  y={baseY - bar.h}
                  width="14"
                  height={bar.h}
                  rx="2"
                  fill={
                    bar.gold
                      ? 'url(#lockedGoldBar)'
                      : 'url(#lockedBlueBar)'
                  }
                >
                  <animate
                    attributeName="y"
                    values={`${baseY - lowHeight};${baseY - highHeight};${baseY - bar.h};${baseY - lowHeight}`}
                    dur={`${bar.dur}s`}
                    begin={`${bar.delay}s`}
                    repeatCount="indefinite"
                  />

                  <animate
                    attributeName="height"
                    values={`${lowHeight};${highHeight};${bar.h};${lowHeight}`}
                    dur={`${bar.dur}s`}
                    begin={`${bar.delay}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              );
            })}
          </g>

          {/* ================================================
              THIN DOTTED TREND LINE
              Between bars and main gold wave
          ================================================= */}

          <path
            d={dottedTrendPath}
            fill="none"
            stroke="#7E93A2"
            strokeWidth="1.15"
            strokeDasharray="3 10"
            strokeLinecap="round"
            opacity="0.42"
          />

          {/* sequential blinking points ONLY on dotted line */}
          <g>
            {dottedBlinkPoints.map(([cx, cy], index) => (
              <circle
                key={index}
                cx={cx}
                cy={cy}
                r="2.1"
                fill="#CBD5E1"
                opacity="0.12"
                filter="url(#lockedDotGlow)"
              >
                <animate
                  attributeName="opacity"
                  values="0.10;0.10;0.95;0.18;0.10"
                  keyTimes="0;0.35;0.50;0.64;1"
                  dur="5.8s"
                  begin={`${index * 0.18}s`}
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="r"
                  values="1.7;1.7;3.2;2;1.7"
                  keyTimes="0;0.35;0.50;0.64;1"
                  dur="5.8s"
                  begin={`${index * 0.18}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>

          {/* ================================================
              MAIN GOLD WAVE
              NO DOTS
          ================================================= */}

          {/* subtle halo */}
          <path
            d={goldWavePath}
            fill="none"
            stroke="#D8B56A"
            strokeWidth="11"
            strokeLinecap="round"
            opacity="0.055"
            filter="url(#lockedGoldGlow)"
          />

          {/* permanent smooth gold wave */}
          <path
            d={goldWavePath}
            fill="none"
            stroke="url(#lockedGoldWave)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />

          {/* Slightly bolder upper/right end of the locked wave */}
          <path
            d={goldWavePath}
            fill="none"
            stroke="#E6C36F"
            strokeWidth="5.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1000"
            strokeDasharray="245 755"
            strokeDashoffset="-755"
            opacity="0.88"
            filter="url(#lockedGoldGlow)"
          />

          {/* ================================================
              SMOOTH MOVING LIGHT ON GOLD WAVE
              Continuous segment — NO DOTS
          ================================================= */}
          <path
            d={goldWavePath}
            fill="none"
            stroke="#FFF0BE"
            strokeWidth="5.2"
            strokeLinecap="round"
            pathLength="1000"
            strokeDasharray="118 882"
            strokeDashoffset="1000"
            filter="url(#lockedGoldGlow)"
            opacity="0.95"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="1000"
              to="-1000"
              dur="11s"
              repeatCount="indefinite"
            />

            <animate
              attributeName="stroke-opacity"
              values="0;1;1;0"
              keyTimes="0;0.08;0.92;1"
              dur="11s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* subtle right atmosphere */}
        <div
          className="
            absolute
            right-[-4%]
            bottom-[2%]
            z-[1]
            h-[68%]
            w-[52%]
            rounded-full
            bg-[radial-gradient(circle,rgba(216,181,106,0.065)_0%,rgba(201,164,92,0.022)_45%,transparent_73%)]
            blur-[70px]
          "
        />

        {/* ====================================================
            CENTER CONTENT PROTECTION
            Does not redesign left/right.
        ===================================================== */}
        <div
          className="
            absolute
            inset-0
            z-[3]
            bg-[radial-gradient(ellipse_38%_42%_at_50%_43%,rgba(7,24,39,0.62)_0%,rgba(7,24,39,0.36)_48%,rgba(7,24,39,0.07)_74%,transparent_100%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            z-[4]
            bg-[radial-gradient(ellipse_98%_92%_at_50%_48%,transparent_57%,rgba(7,24,39,0.09)_80%,rgba(7,24,39,0.88)_100%)]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-[5]
            h-[8%]
            bg-gradient-to-t
            from-[#071827]/75
            to-transparent
          "
        />
      </div>

      {/* ======================================================
          SUBTLE WATER SHIMMER
          Only animates the lower waterfront area; buildings stay still.
      ======================================================= */}
      <div
        className="hero-water-motion pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-[15%] overflow-hidden"
        aria-hidden="true"
      >
        <div className="hero-water-shimmer hero-water-shimmer-a" />
        <div className="hero-water-shimmer hero-water-shimmer-b" />
      </div>

      {/* ======================================================
          TWO SLOW MOVING DATA LINES — Mohsin-style motion concept
          Kept behind the name and away from the main gold graph.
      ======================================================= */}
      <svg
        className="pointer-events-none absolute inset-0 z-[6] hidden h-full w-full md:block"
        viewBox="0 0 1440 820"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="heroBlueFlowGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path
          d="M -30 275 C 180 215, 320 350, 510 290 S 810 205, 1010 265 S 1260 330, 1470 245"
          fill="none" stroke="#67B7E8" strokeWidth="2" opacity=".55"
        >
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="
              M -30 275 C 180 215, 320 350, 510 290 S 810 205, 1010 265 S 1260 330, 1470 245;
              M -30 245 C 180 285, 320 215, 510 325 S 810 275, 1010 225 S 1260 285, 1470 220;
              M -30 305 C 180 245, 320 385, 510 260 S 810 165, 1010 305 S 1260 365, 1470 270;
              M -30 275 C 180 215, 320 350, 510 290 S 810 205, 1010 265 S 1260 330, 1470 245
            "
          />
        </path>
        <path
          d="M -30 615 C 170 530, 320 500, 505 555 S 790 650, 980 585 S 1250 490, 1470 535"
          fill="none" stroke="#D8B56A" strokeWidth="1.9" opacity=".50"
        >
          <animate
            attributeName="d"
            dur="22s"
            repeatCount="indefinite"
            values="
              M -30 615 C 170 530, 320 500, 505 555 S 790 650, 980 585 S 1250 490, 1470 535;
              M -30 575 C 170 625, 320 455, 505 595 S 790 585, 980 630 S 1250 545, 1470 500;
              M -30 645 C 170 500, 320 570, 505 515 S 790 690, 980 545 S 1250 455, 1470 575;
              M -30 615 C 170 530, 320 500, 505 555 S 790 650, 980 585 S 1250 490, 1470 535
            "
          />
        </path>

      </svg>

      {/* Morphing / rotating network globe above the right-side graph */}
      <div className="hero-network-globe hero-network-globe-motion pointer-events-none absolute right-[8%] top-[8%] z-[8] hidden h-[190px] w-[190px] lg:block" aria-hidden="true">
        <div className="hero-globe-halo" />
        <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible">
          <circle cx="100" cy="100" r="66" fill="rgba(7,24,39,.18)" stroke="rgba(103,183,232,.44)" strokeWidth="1.2" />
          <g className="hero-globe-spin">
            <ellipse cx="100" cy="100" rx="66" ry="27" fill="none" stroke="rgba(103,183,232,.46)" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="27" ry="66" fill="none" stroke="rgba(216,181,106,.42)" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="58" ry="43" fill="none" stroke="rgba(103,183,232,.25)" strokeWidth=".8" transform="rotate(42 100 100)" />
            <path d="M42 78 L70 52 L104 63 L139 47 L160 78 L145 111 L166 137 L124 154 L92 137 L56 149 L39 113 Z"
              fill="none" stroke="rgba(111,195,238,.48)" strokeWidth=".8" className="hero-globe-shape" />
            {[[42,78],[70,52],[104,63],[139,47],[160,78],[145,111],[166,137],[124,154],[92,137],[56,149],[39,113],[100,100]].map(([cx,cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={i % 4 === 0 ? 3.2 : 2.1} fill={i % 3 === 0 ? '#D8B56A' : '#7CC7F2'} className="hero-globe-node" style={{ animationDelay: `${-i * .42}s` }} />
            ))}
          </g>
          <ellipse cx="100" cy="100" rx="86" ry="38" fill="none" stroke="rgba(216,181,106,.50)" strokeWidth="1.2" className="hero-globe-orbit" />
          <circle cx="184" cy="100" r="3.5" fill="#F0D078" className="hero-globe-orbit-dot" />
        </svg>
      </div>

      {/* ======================================================
          FLOATING PROFILE POINTS
          Slow independent drift, inspired by the reference website.
          Main content remains above these pills.
      ======================================================= */}
      <div
        className="pointer-events-none absolute inset-0 z-[7] hidden overflow-hidden md:block"
        aria-hidden="true"
      >
        {floatingPoints.map((point, index) => (
          <div
            key={point.label}
            className={`hero-floating-point absolute ${point.pos} ${
              point.tone === 'gold'
                ? 'hero-floating-point-gold'
                : 'hero-floating-point-blue'
            } hero-motion-${point.motion} ${index === 0 ? 'hero-floating-point-featured' : ''}`}
            style={{
              animationDelay: point.delay,
              animationDuration: point.dur,
            }}
          >
            {point.label}
          </div>
        ))}
      </div>

      {/* ======================================================
          LOCKED CENTER CONTENT
      ======================================================= */}
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

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:gap-5">
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
            />

            <FileDown className="relative z-10 h-4 w-4 text-[#D8B56A]" />

            <span className="relative z-10">
              {isRTL
                ? ARABIC_TRANSLATIONS.hero.downloadCv
                : 'Download CV'}
            </span>
          </button>

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

      {/* ======================================================
          HERO-ONLY CSS
          index.css remains untouched.
      ======================================================= */}
      <style>{`
        .hero-locked-skyline {
          /*
           * Full-height skyline with a soft centre-facing feather.
           * The outer left edge stays solid so the image can fill
           * the Hero; the right edge dissolves into navy.
           */
          -webkit-mask-image:
            linear-gradient(
              to right,
              #000 0%,
              #000 55%,
              rgba(0,0,0,.98) 63%,
              rgba(0,0,0,.90) 70%,
              rgba(0,0,0,.68) 78%,
              rgba(0,0,0,.38) 87%,
              rgba(0,0,0,.12) 95%,
              transparent 100%
            );
          mask-image:
            linear-gradient(
              to right,
              #000 0%,
              #000 55%,
              rgba(0,0,0,.98) 63%,
              rgba(0,0,0,.90) 70%,
              rgba(0,0,0,.68) 78%,
              rgba(0,0,0,.38) 87%,
              rgba(0,0,0,.12) 95%,
              transparent 100%
            );
        }

        .hero-locked-skyline-image {
          /* Light/soft skyline so foreground motion, pills and graph read clearly. */
          filter: brightness(.72) saturate(.68) contrast(.90);
          opacity: .58;
        }

        .hero-flow-line {
          transform-box: fill-box;
          transform-origin: center;
          will-change: transform;
        }
        .hero-flow-line-a {
          animation: heroFlowLineA 18s ease-in-out infinite alternate;
        }
        .hero-flow-line-b {
          animation: heroFlowLineB 22s ease-in-out infinite alternate;
        }
        @keyframes heroFlowLineA {
          0% { transform: translate3d(0,-18px,0); }
          50% { transform: translate3d(10px,14px,0); }
          100% { transform: translate3d(-7px,-5px,0); }
        }
        @keyframes heroFlowLineB {
          0% { transform: translate3d(-8px,16px,0); }
          50% { transform: translate3d(8px,-16px,0); }
          100% { transform: translate3d(0,8px,0); }
        }

        .hero-network-globe-motion {
          animation: heroGlobeTravel 8s ease-in-out infinite alternate;
          will-change: transform;
        }
        @keyframes heroGlobeTravel {
          0% { transform: translate3d(-28px,24px,0) scale(.92) rotate(-4deg); }
          50% { transform: translate3d(18px,-34px,0) scale(1.08) rotate(5deg); }
          100% { transform: translate3d(32px,14px,0) scale(.97) rotate(-2deg); }
        }

        .hero-floating-point {
          padding: 9px 16px;
          border-radius: 9999px;
          border: 1px solid rgba(148, 163, 184, 0.28);
          background: rgba(7, 24, 39, 0.76);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.24);
          font-size: 13px;
          line-height: 1;
          font-weight: 750;
          letter-spacing: .02em;
          white-space: nowrap;
          opacity: .90;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity, filter;
        }

        .hero-floating-point-gold {
          color: #F0D078;
          border-color: rgba(216, 181, 106, 0.44);
          box-shadow: 0 8px 28px rgba(0,0,0,.24), 0 0 15px rgba(216,181,106,.11);
        }

        .hero-floating-point-blue {
          color: #C7E5F5;
          border-color: rgba(103, 183, 232, 0.40);
          box-shadow: 0 8px 28px rgba(0,0,0,.24), 0 0 15px rgba(103,183,232,.10);
        }

        .hero-floating-point-featured {
          padding: 10px 18px;
          color: #F7DB8E;
          border-color: rgba(216,181,106,.62);
          background: rgba(9,31,49,.84);
          font-size: 14px;
          opacity: 1;
        }

        .hero-motion-vertical { animation-name: heroPointVertical; }
        .hero-motion-zoom { animation-name: heroPointZoom; }
        .hero-motion-drift { animation-name: heroPointDrift; }
        .hero-motion-pulse { animation-name: heroPointPulse; }

        @keyframes heroPointVertical {
          0%,100% { transform: translate3d(-8px, 22px, 0); opacity:.82; }
          25% { transform: translate3d(8px, 2px, 0); opacity:.96; }
          50% { transform: translate3d(15px, -32px, 0); opacity:1; }
          75% { transform: translate3d(2px, -8px, 0); opacity:.92; }
        }
        @keyframes heroPointZoom {
          0%,100% { transform: translate3d(-10px, 14px, 0) scale(.92); opacity:.76; }
          35% { transform: translate3d(6px, -5px, 0) scale(1.02); opacity:.92; }
          60% { transform: translate3d(16px, -22px, 0) scale(1.17); opacity:1; }
          82% { transform: translate3d(2px, -4px, 0) scale(1.04); opacity:.94; }
        }
        @keyframes heroPointDrift {
          0%,100% { transform: translate3d(-32px, 15px, 0); opacity:.80; }
          30% { transform: translate3d(-5px, -10px, 0); opacity:.94; }
          58% { transform: translate3d(32px, -25px, 0); opacity:1; }
          82% { transform: translate3d(12px, 5px, 0); opacity:.90; }
        }
        @keyframes heroPointPulse {
          0%,28%,100% { transform: translate3d(-8px, 12px, 0) scale(.96); filter:brightness(.95); opacity:.82; }
          45% { transform: translate3d(4px, -10px, 0) scale(1.03); filter:brightness(1.12); opacity:.94; }
          58%,70% { transform: translate3d(14px, -24px, 0) scale(1.12); filter:brightness(1.55) drop-shadow(0 0 7px rgba(216,181,106,.38)); opacity:1; }
          84% { transform: translate3d(3px, -5px, 0) scale(1.03); filter:brightness(1.08); opacity:.92; }
        }

        .hero-globe-halo {
          position:absolute; inset:18%;
          border-radius:9999px;
          background:radial-gradient(circle, rgba(103,183,232,.14), transparent 68%);
          filter:blur(15px);
          animation:heroGlobeHalo 5.5s ease-in-out infinite;
        }
        .hero-globe-spin { transform-origin:100px 100px; animation:heroGlobeSpin 20s linear infinite; }
        .hero-globe-orbit { transform-origin:100px 100px; animation:heroGlobeOrbit 9s ease-in-out infinite alternate; }
        .hero-globe-node { animation:heroGlobeNode 3.4s ease-in-out infinite; }
        .hero-globe-shape { transform-origin:100px 100px; animation:heroGlobeMorph 7s ease-in-out infinite; }
        .hero-globe-orbit-dot { transform-origin:100px 100px; animation:heroGlobeSpin 7s linear infinite; filter:drop-shadow(0 0 6px #D8B56A); }

        @keyframes heroGlobeSpin { to { transform:rotate(360deg); } }
        @keyframes heroGlobeOrbit {
          from { transform:rotate(-12deg) scaleX(.92); opacity:.42; }
          to { transform:rotate(24deg) scaleX(1.08); opacity:.85; }
        }
        @keyframes heroGlobeNode {
          0%,100% { opacity:.42; transform:scale(.72); }
          50% { opacity:1; transform:scale(1.35); }
        }
        @keyframes heroGlobeMorph {
          0%,100% { transform:scale(.90) rotate(-5deg); }
          50% { transform:scale(1.08) rotate(7deg); }
        }
        @keyframes heroGlobeHalo {
          0%,100% { transform:scale(.88); opacity:.42; }
          50% { transform:scale(1.18); opacity:.85; }
        }

        .hero-water-motion {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.25) 18%, #000 48%, #000 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.25) 18%, #000 48%, #000 100%);
          mix-blend-mode: screen;
          opacity: .50;
        }

        .hero-water-shimmer {
          position: absolute;
          left: -20%;
          width: 140%;
          height: 42%;
          background: repeating-linear-gradient(
            90deg,
            transparent 0 34px,
            rgba(216, 181, 106, .12) 38px 41px,
            transparent 45px 82px,
            rgba(248, 250, 252, .055) 86px 88px,
            transparent 92px 132px
          );
          filter: blur(2.5px);
          transform: skewX(-12deg);
          will-change: transform, opacity;
        }

        .hero-water-shimmer-a {
          bottom: 8%;
          animation: heroWaterShimmerA 12s ease-in-out infinite alternate;
        }

        .hero-water-shimmer-b {
          bottom: 40%;
          opacity: .52;
          transform: skewX(10deg) scaleX(.92);
          animation: heroWaterShimmerB 16s ease-in-out infinite alternate;
        }

        @keyframes heroWaterShimmerA {
          from { transform: translate3d(-3%, 0, 0) skewX(-12deg) scaleX(.98); opacity: .34; }
          to { transform: translate3d(5%, -2px, 0) skewX(-8deg) scaleX(1.03); opacity: .68; }
        }

        @keyframes heroWaterShimmerB {
          from { transform: translate3d(4%, 0, 0) skewX(10deg) scaleX(.92); opacity: .24; }
          to { transform: translate3d(-5%, 2px, 0) skewX(7deg) scaleX(1.01); opacity: .48; }
        }

        @media (max-width: 767px) {
          .hero-locked-skyline {
            width: 100%;
            opacity: .67;
          }

          .hero-locked-skyline-image {
            object-position: 20% bottom;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #home svg animate,
          #home svg animateTransform {
            display: none;
          }

          .hero-floating-point,
          .hero-water-shimmer,
          .hero-flow-line,
          .hero-network-globe-motion,
          .hero-globe-spin,
          .hero-globe-orbit,
          .hero-globe-node,
          .hero-globe-shape,
          .hero-globe-orbit-dot,
          .hero-globe-halo {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
