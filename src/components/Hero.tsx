import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  profile?: ProfileInfo;
  onOpenCV: () => void;
  onSelectExperience?: () => void;
}

const points = [
  { label: '14+ Years Exp', cls: 'p1 gold keep', duration: '15s', delay: '-2s' },
  { label: 'Financial Reporting', cls: 'p2', duration: '18s', delay: '-8s' },
  { label: 'Receivables', cls: 'p3', duration: '16s', delay: '-4s' },
  { label: 'VAT Reports & Submission', cls: 'p4 gold', duration: '19s', delay: '-11s' },
  { label: 'ERP Software', cls: 'p5 keep', duration: '17s', delay: '-6s' },
  { label: 'Reconciliations', cls: 'p6', duration: '20s', delay: '-13s' },
  { label: 'Costing', cls: 'p7', duration: '15.5s', delay: '-9s' },
  { label: 'MS Office', cls: 'p8', duration: '18.5s', delay: '-3s' },
  { label: 'Monthly Closing', cls: 'p9', duration: '17.5s', delay: '-12s' },
  { label: 'Cash Handling', cls: 'p10', duration: '20.5s', delay: '-5s' },
  { label: 'Petty Cash', cls: 'p11', duration: '16.5s', delay: '-10s' },
  { label: 'Payables', cls: 'p12', duration: '19.5s', delay: '-7s' },
  { label: 'Oracle', cls: 'p13', duration: '14.5s', delay: '-1s' },
  { label: 'Qoyod', cls: 'p14', duration: '18s', delay: '-14s' },
  { label: 'QuickBooks', cls: 'p15', duration: '16s', delay: '-8s' },
  { label: 'P&L Account', cls: 'p16 gold keep', duration: '21s', delay: '-15s' },
  { label: 'Balance Sheet', cls: 'p17 gold', duration: '17s', delay: '-2s' },
];

export function Hero(_props: HeroProps) {
  const { isRTL } = useLanguage();



  return (
    <section
      id="home"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="hero-final relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#051D2E] lg:h-[calc(100svh-5rem)] lg:min-h-[650px]"
    >
      <div className="hero-bg absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto h-full min-h-[calc(100svh-5rem)] max-w-[1920px] lg:min-h-[650px]">
        {/* FULL-WIDTH PROFESSIONAL FOOTPRINT */}
        <div className="map-wrap absolute z-10" aria-hidden="true">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 1000 560">
            <defs>
              <radialGradient id="mapEdgeFade" cx="50%" cy="48%" r="67%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="68%" stopColor="white" stopOpacity="1" />
                <stop offset="88%" stopColor="white" stopOpacity=".62" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="mapFeatherMask">
                <rect x="0" y="28" width="1000" height="520" fill="url(#mapEdgeFade)" />
              </mask>
            </defs>
            {/* LOCKED GOLDEN WORLD MAP IMAGE — uploaded at public/images/Golden World Map.png */}
            <g className="locked-golden-map">
              <image
                className="locked-map-image"
                href="/images/Golden World Map.png"
                x="-75"
                y="-48"
                width="1150"
                height="657"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/*
              FLOW DIRECTION IS TOWARD SAUDI ARABIA.
              Paths are deliberately drawn FROM Canada/Pakistan TO Saudi Arabia.
            */}
            <path
              className="route route-canada"
              pathLength="1000"
              d="M218 151 C350 118 475 172 558 259"
            />
            <path
              className="route route-pakistan"
              pathLength="1000"
              d="M642 238 C615 232 585 241 558 259"
            />

            {/* CANADA */}
            <circle className="map-node map-node-canada" cx="218" cy="151" r="4.5" />
            <circle className="map-pulse map-pulse-canada" cx="218" cy="151" r="8" />

            {/* PAKISTAN */}
            <circle className="map-node" cx="642" cy="238" r="4.5" />
            <circle className="map-pulse" cx="642" cy="238" r="8" />

            {/* SAUDI ARABIA — MAIN DESTINATION */}
            <circle className="saudi-halo" cx="558" cy="259" r="17" />
            <circle className="map-node map-node-saudi" cx="558" cy="259" r="6.5" />
            <circle className="map-pulse map-pulse-saudi" cx="558" cy="259" r="11" />
          </svg>

          <div className="country country-ca">
            <b>CANADA</b>
            <small>REMOTE EXPERIENCE</small>
          </div>

          <div className="country country-pk">
            <b>PAKISTAN</b>
            <small>PROFESSIONAL EXPERIENCE</small>
          </div>

          <div className="country country-sa">
            <b>SAUDI ARABIA</b>
            <small>PROFESSIONAL EXPERIENCE</small>
          </div>

          {points.map((point) => (
            <div
              key={point.label}
              className={`skill-point ${point.cls}`}
              style={{
                animationDuration: point.duration,
                animationDelay: point.delay,
              }}
            >
              {point.label}
            </div>
          ))}
        </div>

        {/* LOCKED FINAL LOWER FLOWING WAVES */}
        <div className="lower-waves absolute z-[8]" aria-hidden="true">
          <svg viewBox="0 0 1900 220" preserveAspectRatio="none">
            <path className="wave wave-gold wg" d="M-80 110 C170 30 360 175 610 95 S1030 35 1250 120 S1630 175 1980 75" />
            <path className="wave wave-gold wg wave-soft-1" d="M-80 145 C170 65 350 200 610 125 S1030 70 1250 150 S1630 205 1980 105" />
            <path className="wave wave-gold wg wave-soft-2" d="M-80 175 C180 100 370 220 630 155 S1030 105 1260 180 S1640 220 1980 135" />
            <path className="wave wave-blue wb" d="M-100 160 C170 205 380 70 650 160 S1080 230 1320 140 S1670 70 2000 165" />
            <path className="wave wave-blue wb wave-blue-soft" d="M-100 190 C170 230 390 105 650 190 S1080 255 1320 170 S1680 105 2000 195" />
            <path className="golden-shine" d="M-80 110 C170 30 360 175 610 95 S1030 35 1250 120 S1630 175 1980 75" />
          </svg>
        </div>

        {/* LOCKED-DEMO STYLE LIVE NETWORK ORB */}
        <div
          className="network-orb absolute right-[5%] top-[7%] z-20 hidden h-[112px] w-[112px] lg:block"
          aria-hidden="true"
        >
          <svg className="orb-svg h-full w-full" viewBox="0 0 112 112">
            <circle className="orb-shell" cx="56" cy="56" r="50" />
            <ellipse className="orb-latitude orb-latitude-a" cx="56" cy="56" rx="43" ry="18" />
            <ellipse className="orb-latitude orb-latitude-b" cx="56" cy="56" rx="43" ry="31" />
            <ellipse className="orb-longitude orb-longitude-a" cx="56" cy="56" rx="18" ry="43" />
            <ellipse className="orb-longitude orb-longitude-b" cx="56" cy="56" rx="31" ry="43" />

            <g className="orb-network">
              <path d="M25 40 L43 27 L65 31 L83 45 L78 69 L60 84 L37 76 L25 40" />
              <path d="M43 27 L48 50 L25 40 M48 50 L65 31 M48 50 L78 69 M48 50 L37 76 M65 31 L83 45 L78 69 M37 76 L60 84 L78 69" />
              <circle cx="25" cy="40" r="2.1" />
              <circle cx="43" cy="27" r="2.1" />
              <circle cx="65" cy="31" r="2.1" />
              <circle cx="83" cy="45" r="2.1" />
              <circle cx="78" cy="69" r="2.1" />
              <circle cx="60" cy="84" r="2.1" />
              <circle cx="37" cy="76" r="2.1" />
              <circle cx="48" cy="50" r="2.4" />
            </g>

            <circle className="orb-spark orb-spark-a" cx="29" cy="35" r="1.5" />
            <circle className="orb-spark orb-spark-b" cx="80" cy="38" r="1.4" />
            <circle className="orb-spark orb-spark-c" cx="69" cy="82" r="1.5" />
          </svg>
        </div>
      </div>

      <style>{`
        .hero-final {
          background: #071827;
          isolation: isolate;
        }

        .hero-bg {
          background:
            radial-gradient(circle at 72% 43%, rgba(216,181,106,.095), transparent 25%),
            radial-gradient(circle at 80% 57%, rgba(111,184,223,.095), transparent 30%),
            radial-gradient(circle at 48% 20%, rgba(111,184,223,.035), transparent 24%),
            linear-gradient(135deg,#061522 0%,#081A2B 48%,#0D2538 100%);
        }

        .hero-bg::before,
        .hero-bg::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(1px);
          animation: ambientBreath 14s ease-in-out infinite;
        }

        .hero-bg::before {
          width: 42vw;
          height: 42vw;
          right: 8%;
          top: 10%;
          background: radial-gradient(circle, rgba(216,181,106,.035) 0%, rgba(216,181,106,.012) 38%, transparent 70%);
        }

        .hero-bg::after {
          width: 34vw;
          height: 34vw;
          right: 28%;
          bottom: -12%;
          background: radial-gradient(circle, rgba(111,184,223,.045) 0%, rgba(111,184,223,.012) 42%, transparent 72%);
          animation-delay: -7s;
        }

        @keyframes ambientBreath {
          0%,100% { transform: translate3d(0,0,0) scale(.96); opacity:.55; }
          50% { transform: translate3d(12px,-10px,0) scale(1.06); opacity:1; }
        }

        .hero-final::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: .18;
          background-image:
            radial-gradient(rgba(216,181,106,.16) .65px, transparent .75px),
            radial-gradient(rgba(111,184,223,.10) .55px, transparent .7px);
          background-position: 0 0, 15px 15px;
          background-size: 30px 30px;
          -webkit-mask-image: linear-gradient(90deg, transparent 36%, #000 65%, #000 100%);
          mask-image: linear-gradient(90deg, transparent 36%, #000 65%, #000 100%);
        }

        /* LOCKED FINAL MAP COMPOSITION — LARGE, SEAMLESS, UNDER THE NAME */
        .map-wrap {
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* LOCKED GOLDEN WORLD MAP IMAGE */
        .locked-golden-map {
          transform-box: fill-box;
          transform-origin: center;
          animation: lockedMapDrift 16s ease-in-out infinite;
        }

        .locked-map-image {
          opacity: .92;
          mix-blend-mode: screen;
          filter:
            saturate(.92)
            brightness(.94)
            contrast(1.02)
            drop-shadow(0 0 12px rgba(216,181,106,.12));
          transform-box: fill-box;
          transform-origin: center;
          animation: lockedMapBreath 14s ease-in-out infinite;
        }


        @keyframes lockedMapDrift {
          0%,100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.015) translateY(-4px); }
        }

        @keyframes lockedMapBreath {
          0%,100% { opacity: .88; }
          50% { opacity: .96; }
        }

        /* ROUTES: CANADA/PAKISTAN -> SAUDI ARABIA */
        .route {
          fill: none;
          stroke-linecap: round;
          stroke-width: 1.75;
          stroke-dasharray: 38 962;
          stroke-dashoffset: 1000;
          animation: routeToSaudi 8.5s linear infinite;
          filter: drop-shadow(0 0 4px rgba(216,181,106,.22));
        }

        .route-canada {
          stroke: #78BDE3;
          animation-duration: 10.5s;
        }

        .route-pakistan {
          stroke: #D8B56A;
          animation-duration: 7.5s;
          animation-delay: -2.5s;
        }

        @keyframes routeToSaudi {
          from { stroke-dashoffset: 1000; opacity: .45; }
          20% { opacity: .95; }
          80% { opacity: .95; }
          to { stroke-dashoffset: 0; opacity: .45; }
        }

        .map-node {
          fill: #D8B56A;
          filter: drop-shadow(0 0 7px rgba(216,181,106,.75));
        }

        .map-node-canada {
          fill: #78BDE3;
          filter: drop-shadow(0 0 7px rgba(120,189,227,.65));
        }

        .map-node-saudi {
          fill: #E4C477;
          filter: drop-shadow(0 0 11px rgba(216,181,106,.95));
        }

        .saudi-halo {
          fill: rgba(216,181,106,.07);
          stroke: rgba(216,181,106,.32);
          stroke-width: 1;
          transform-box: fill-box;
          transform-origin: center;
          animation: saudiHalo 4.2s ease-in-out infinite;
        }

        @keyframes saudiHalo {
          0%,100% { transform: scale(.85); opacity: .35; }
          50% { transform: scale(1.35); opacity: .7; }
        }

        .map-pulse {
          fill: none;
          stroke: #D8B56A;
          stroke-width: 1.15;
          transform-box: fill-box;
          transform-origin: center;
          animation: mapPulse 3.8s ease-out infinite;
        }

        .map-pulse-canada {
          stroke: #78BDE3;
          animation-delay: -1.2s;
        }

        .map-pulse-saudi {
          stroke-width: 1.45;
          animation-duration: 3.2s;
        }

        @keyframes mapPulse {
          0% { transform: scale(.55); opacity: .85; }
          100% { transform: scale(3); opacity: 0; }
        }

        .country {
          position: absolute;
          z-index: 25;
          padding: 8px 11px;
          border-radius: 10px;
          background: rgba(7,24,39,.88);
          border: 1px solid rgba(216,181,106,.36);
          backdrop-filter: blur(9px);
          box-shadow: 0 10px 28px rgba(0,0,0,.22);
          animation: countryFloat 11s ease-in-out infinite;
        }

        .country b {
          display: block;
          color: #F8FAFC;
          font-size: 10px;
          line-height: 1.1;
        }

        .country small {
          display: block;
          margin-top: 5px;
          color: #D8B56A;
          font-size: 7px;
          letter-spacing: .08em;
          white-space: nowrap;
        }

        /* Positions aligned to the SVG nodes */
        .country-ca {
          left: 18%;
          top: 24%;
          border-color: rgba(120,189,227,.38);
        }

        .country-ca small { color: #8BC6E6; }

        .country-pk {
          left: 65%;
          top: 40%;
          animation-delay: -4s;
        }

        .country-sa {
          left: 54%;
          top: 44%;
          border-color: rgba(216,181,106,.55);
          box-shadow: 0 0 22px rgba(216,181,106,.08), 0 10px 28px rgba(0,0,0,.22);
          animation-delay: -7s;
        }

        @keyframes countryFloat {
          0%,100% { transform: translateY(6px); }
          50% { transform: translateY(-13px); }
        }

        /* ALL 17 POINTS */
        .skill-point {
          position: absolute;
          z-index: 22;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid rgba(111,184,223,.24);
          background: rgba(7,24,39,.78);
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 24px rgba(0,0,0,.18);
          color: #DCE7EE;
          font-size: 10px;
          font-weight: 760;
          line-height: 1;
          white-space: nowrap;
          animation-name: pointFloatFade;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        .skill-point.gold {
          border-color: rgba(216,181,106,.38);
          color: #F4E3B7;
          box-shadow: 0 0 14px rgba(216,181,106,.05);
        }

        .skill-point.keep {
          animation-name: pointFloatOnly;
        }

        @keyframes pointFloatFade {
          0%   { transform: translate(0,9px) scale(.98); opacity:.92; }
          18%  { transform: translate(3px,-10px) scale(1.02); opacity:1; }
          38%  { transform: translate(-2px,-18px) scale(1); opacity:.9; }
          51%  { transform: translate(2px,-9px) scale(.98); opacity:.14; }
          59%  { transform: translate(0,-5px) scale(.97); opacity:0; }
          68%  { transform: translate(-2px,1px) scale(.98); opacity:.2; }
          79%  { transform: translate(2px,10px) scale(1.02); opacity:1; }
          100% { transform: translate(0,9px) scale(.98); opacity:.92; }
        }

        @keyframes pointFloatOnly {
          0%,100% { transform: translateY(10px); opacity:.92; }
          50% { transform: translateY(-17px) scale(1.035); opacity:1; }
        }

        /* All 17 points locked INSIDE the map/viewport safe area */
        .p1  { left: 39%; top: 5%; }
        .p2  { left: 15%; top: 10%; }
        .p3  { left: 11%; top: 42%; }
        .p4  { right: 8%; top: 36%; }
        .p5  { left: 34%; top: 27%; }
        .p6  { left: 12%; top: 66%; }
        .p7  { left: 27%; bottom: 8%; }
        .p8  { right: 18%; top: 8%; }
        .p9  { right: 8%; bottom: 8%; }
        .p10 { left: 49%; bottom: 7%; }
        .p11 { right: 28%; bottom: 12%; }
        .p12 { left: 10%; bottom: 14%; }
        .p13 { left: 18%; top: 33%; }
        .p14 { right: 33%; top: 15%; }
        .p15 { right: 8%; top: 68%; }
        .p16 { left: 39%; top: 76%; }
        .p17 { right: 17%; top: 61%; }

        /* LOCKED FINAL ORGANIC GOLD + BLUE WAVE FIELD */
        .lower-waves {
          left: -4%;
          right: -4%;
          bottom: -1%;
          height: 25%;
          pointer-events: none;
          opacity: 1;
        }

        .lower-waves svg { width:100%; height:100%; overflow:visible; }
        .wave { fill:none; stroke-linecap:round; vector-effect:non-scaling-stroke; }
        .wg {
          stroke:#D8B56A;
          stroke-width:1.5;
          opacity:.56;
          filter:drop-shadow(0 0 5px rgba(216,181,106,.16));
          animation:wg 20s ease-in-out infinite;
        }
        .wb {
          stroke:#69B7E7;
          stroke-width:1.3;
          opacity:.42;
          animation:wb 25s ease-in-out infinite;
        }
        .wave-soft-1 { opacity:.35; }
        .wave-soft-2 { opacity:.22; }
        .wave-blue-soft { opacity:.50; }
        .golden-shine {
          fill:none;
          stroke:#F7D77D;
          stroke-width:4;
          stroke-linecap:round;
          stroke-dasharray:85 1300;
          filter:drop-shadow(0 0 8px #D8B56A);
          animation:shine 8s linear infinite;
        }
        @keyframes wg {
          0%,100% { transform:translateY(0); }
          50% { transform:translateY(-10px); }
        }
        @keyframes wb {
          0%,100% { transform:translateY(5px); }
          50% { transform:translateY(-6px); }
        }
        @keyframes shine { to { stroke-dashoffset:-1385; } }
        /* LOCKED-DEMO STYLE LIVE TOP-RIGHT NETWORK ORB */
        .network-orb {
          transform-box: border-box;
          transform-origin: center;
          filter: drop-shadow(0 0 14px rgba(216,181,106,.10));
          animation: lockedOrbMotion 12s ease-in-out infinite;
          will-change: transform;
        }

        .orb-svg {
          overflow: visible;
        }

        .orb-shell {
          fill: rgba(7,24,39,.16);
          stroke: rgba(216,181,106,.52);
          stroke-width: 1.15;
        }

        .orb-latitude,
        .orb-longitude {
          fill: none;
          stroke: rgba(105,183,231,.42);
          stroke-width: .85;
          stroke-dasharray: 3 4;
          transform-box: fill-box;
          transform-origin: center;
        }

        .orb-latitude-a { animation: orbRingSpin 14s linear infinite; }
        .orb-latitude-b { animation: orbRingSpinReverse 18s linear infinite; opacity:.70; }
        .orb-longitude-a { animation: orbRingSpinReverse 16s linear infinite; }
        .orb-longitude-b { animation: orbRingSpin 20s linear infinite; opacity:.68; }

        .orb-network {
          fill: rgba(216,181,106,.72);
          stroke: rgba(216,181,106,.44);
          stroke-width: .72;
          stroke-linecap: round;
          stroke-linejoin: round;
          transform-box: fill-box;
          transform-origin: center;
          animation: orbNetworkBreathe 6.5s ease-in-out infinite;
        }

        .orb-network path { fill:none; }

        .orb-spark {
          fill:#69B7E7;
          filter:drop-shadow(0 0 3px rgba(105,183,231,.85));
          animation:orbSpark 5s ease-in-out infinite;
        }
        .orb-spark-b { animation-delay:-1.8s; fill:#D8B56A; }
        .orb-spark-c { animation-delay:-3.4s; }

        @keyframes lockedOrbMotion {
          0%,100% { transform:translate(-5px,6px) rotate(0deg); }
          50% { transform:translate(8px,-8px) rotate(180deg); }
        }

        @keyframes orbRingSpin {
          to { transform:rotate(360deg); }
        }

        @keyframes orbRingSpinReverse {
          to { transform:rotate(-360deg); }
        }

        @keyframes orbNetworkBreathe {
          0%,100% { transform:scale(.96) rotate(-4deg); opacity:.52; }
          50% { transform:scale(1.04) rotate(5deg); opacity:.92; }
        }

        @keyframes orbSpark {
          0%,100% { opacity:.15; transform:scale(.85); }
          50% { opacity:.9; transform:scale(1.35); }
        }

        @media (max-width: 1023px) {
          .hero-final {
            min-height: 760px;
          }


          .map-wrap {
            inset: 0;
            width: 100%;
            height: 100%;
            opacity: .78;
          }

          .lower-waves {
            left: -8%;
            right: -8%;
            bottom: 0;
            height: 18%;
            opacity: .72;
          }

          .country {
            padding: 5px 7px;
          }

          .country b { font-size: 7px; }
          .country small { font-size: 5px; }

          .skill-point {
            padding: 5px 7px;
            font-size: 7px;
          }

          .p2,.p6,.p8,.p10,.p11,.p14,.p17 {
            display:none;
          }
        }

        @media (max-width: 640px) {

          .map-wrap {
            inset: 0;
          }

          .lower-waves {
            bottom: 0;
            height: 17%;
          }
        }
      `}</style>
    </section>
  );
}
