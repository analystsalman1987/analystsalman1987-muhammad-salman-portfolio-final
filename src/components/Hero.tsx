import { ExternalLink, FileDown } from 'lucide-react';
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
      <div className="hero-bg absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto h-full min-h-[calc(100svh-5rem)] max-w-[1920px] lg:min-h-[650px]">
        {/* LEFT CONTENT — LOCKED */}
        <div
          className={`hero-copy absolute z-30 top-[48%] w-[37%] -translate-y-1/2 ${
            isRTL ? 'right-[6vw] text-right' : 'left-[6vw] text-left'
          }`}
        >
          <div className="mb-[18px] text-[12px] font-semibold tracking-[0.24em] text-[#D8B56A]">
            {isRTL ? 'مرحباً بكم في ملفي المهني' : 'WELCOME TO MY PORTFOLIO'}
          </div>

          <h1 className="m-0 text-[clamp(48px,6vw,90px)] font-extrabold leading-[0.86] tracking-[-0.05em] text-[#F8FAFC]">
            <span className="text-[#F8FAFC]">MUHAMMAD</span>
            <br />
            <span className="text-[#F8FAFC]">SALMAN</span>
          </h1>

          <div className="mt-[22px] text-[18px] font-medium tracking-[0.34em] text-[#CBD5E1]">
            {isRTL ? 'محاسب' : 'ACCOUNTANT'}
          </div>

          <div className={`mt-8 flex gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#D8B56A] bg-[#D8B56A] px-[18px] py-3 text-[13px] font-extrabold text-[#071827] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(216,181,106,.18)]"
            >
              <FileDown size={16} />
              {isRTL ? 'تحميل السيرة الذاتية' : 'Download CV'}
            </button>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(216,181,106,.45)] bg-[rgba(7,24,39,.35)] px-[18px] py-3 text-[13px] font-medium text-[#F8FAFC] transition hover:border-[#D8B56A] hover:bg-[rgba(216,181,106,.06)]"
            >
              <ExternalLink size={15} />
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* RIGHT PROFESSIONAL FOOTPRINT */}
        <div className="map-wrap absolute z-10" aria-hidden="true">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 1000 560">
            {/* LOCKED GOLDEN WORLD MAP IMAGE — uploaded at public/images/Golden World Map.png */}
            <g className="locked-golden-map">
              <image
                className="locked-map-image"
                href="/images/Golden World Map.png"
                x="18"
                y="52"
                width="944"
                height="472"
                preserveAspectRatio="xMidYMid meet"
              />
              <rect
                className="locked-map-glow"
                x="35"
                y="70"
                width="910"
                height="430"
                rx="38"
              />
            </g>

            {/*
              FLOW DIRECTION IS TOWARD SAUDI ARABIA.
              Paths are deliberately drawn FROM Canada/Pakistan TO Saudi Arabia.
            */}
            <path
              className="route route-canada"
              pathLength="1000"
              d="M218 151 C350 118 505 170 605 278"
            />
            <path
              className="route route-pakistan"
              pathLength="1000"
              d="M720 264 C680 245 642 247 605 278"
            />

            {/* CANADA */}
            <circle className="map-node map-node-canada" cx="218" cy="151" r="4.5" />
            <circle className="map-pulse map-pulse-canada" cx="218" cy="151" r="8" />

            {/* PAKISTAN */}
            <circle className="map-node" cx="720" cy="264" r="4.5" />
            <circle className="map-pulse" cx="720" cy="264" r="8" />

            {/* SAUDI ARABIA — MAIN DESTINATION */}
            <circle className="saudi-halo" cx="605" cy="278" r="17" />
            <circle className="map-node map-node-saudi" cx="605" cy="278" r="6.5" />
            <circle className="map-pulse map-pulse-saudi" cx="605" cy="278" r="11" />
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

        {/* LOWER MOVING WAVES */}
        <div className="lower-waves absolute z-[8]" aria-hidden="true">
          <svg viewBox="0 0 1200 180" preserveAspectRatio="none">
            <path
              className="wave wave-gold"
              d="M0 112 C130 66 230 150 360 104 C500 55 600 142 735 96 C870 50 990 132 1200 74"
            />
            <path
              className="wave wave-blue"
              d="M0 139 C145 105 260 166 405 126 C540 88 650 154 790 116 C930 77 1045 140 1200 104"
            />
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

        /* MAP: SMALLER + RIGHT-SHIFTED SO IT NEVER COVERS THE NAME */
        .map-wrap {
          right: 1.8vw;
          top: 8%;
          width: 54vw;
          height: 72%;
        }

        /* LOCKED GOLDEN WORLD MAP IMAGE */
        .locked-golden-map {
          transform-box: fill-box;
          transform-origin: center;
          animation: lockedMapDrift 16s ease-in-out infinite;
        }

        .locked-map-image {
          opacity: .82;
          filter:
            saturate(.92)
            brightness(.90)
            contrast(1.04)
            drop-shadow(0 0 7px rgba(216,181,106,.16));
          transform-box: fill-box;
          transform-origin: center;
          animation: lockedMapBreath 8s ease-in-out infinite;
        }

        .locked-map-glow {
          fill: transparent;
          stroke: rgba(216,181,106,.045);
          stroke-width: 1;
          filter: drop-shadow(0 0 18px rgba(216,181,106,.08));
          animation: lockedMapGlow 7s ease-in-out infinite;
        }

        @keyframes lockedMapDrift {
          0%, 100% { transform: translate3d(0, 2px, 0) scale(1); }
          50% { transform: translate3d(4px, -4px, 0) scale(1.006); }
        }

        @keyframes lockedMapBreath {
          0%, 100% { opacity: .78; }
          50% { opacity: .90; }
        }

        @keyframes lockedMapGlow {
          0%, 100% { opacity: .30; }
          50% { opacity: .72; }
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
          left: 15.5%;
          top: 17%;
          border-color: rgba(120,189,227,.38);
        }

        .country-ca small { color: #8BC6E6; }

        .country-pk {
          left: 68%;
          top: 42%;
          animation-delay: -4s;
        }

        .country-sa {
          left: 54.5%;
          top: 48%;
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

        /* Balanced around the smaller right-side map */
        .p1  { left: 38%; top: 1%; }
        .p2  { left: 12%; top: 7%; }
        .p3  { left: 2%; top: 40%; }
        .p4  { right: 0%; top: 34%; }
        .p5  { left: 34%; top: 25%; }
        .p6  { left: 7%; top: 64%; }
        .p7  { left: 24%; bottom: 0%; }
        .p8  { right: 20%; top: 1%; }
        .p9  { right: 3%; bottom: 1%; }
        .p10 { left: 50%; bottom: -7%; }
        .p11 { right: 29%; bottom: 10%; }
        .p12 { left: 0%; bottom: 15%; }
        .p13 { left: 8%; top: 31%; }
        .p14 { right: 34%; top: 13%; }
        .p15 { right: 0%; top: 68%; }
        .p16 { left: 39%; top: 76%; }
        .p17 { right: 17%; top: 61%; }

        /* TWO LOWER MORPHING WAVES */
        .lower-waves {
          left: 35%;
          right: 1.5%;
          bottom: 0.5%;
          height: 160px;
          pointer-events: none;
          opacity: 1;
          filter: drop-shadow(0 0 7px rgba(216,181,106,.05));
        }

        .lower-waves svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .wave {
          fill: none;
          stroke-linecap: round;
          vector-effect: non-scaling-stroke;
          will-change: d, transform;
        }

        .wave-gold {
          stroke: rgba(216,181,106,.78);
          stroke-width: 1.6;
          stroke-dasharray: none;
          filter: drop-shadow(0 0 5px rgba(216,181,106,.20));
          transform-origin: center;
          animation: goldWaveMorph 20s ease-in-out infinite;
        }

        .wave-blue {
          stroke: rgba(111,184,223,.46);
          stroke-width: 1.2;
          stroke-dasharray: none;
          transform-origin: center;
          animation: blueWaveMorph 25s ease-in-out infinite;
        }

        @keyframes goldWaveMorph {
          0%,100% {
            transform: translate3d(0,4px,0) scaleY(.92);
            opacity: .72;
          }
          35% {
            transform: translate3d(-14px,-8px,0) scaleY(1.08);
            opacity: .95;
          }
          70% {
            transform: translate3d(10px,2px,0) scaleY(.98);
            opacity: .8;
          }
        }

        @keyframes blueWaveMorph {
          0%,100% {
            transform: translate3d(0,5px,0) scaleY(.95);
            opacity: .46;
          }
          45% {
            transform: translate3d(16px,-6px,0) scaleY(1.10);
            opacity: .68;
          }
          75% {
            transform: translate3d(-8px,1px,0) scaleY(1);
            opacity: .52;
          }
        }
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

          .hero-copy {
            top: 28%;
            left: 6vw !important;
            right: auto !important;
            width: 88%;
            text-align: left !important;
          }

          .map-wrap {
            right: -24vw;
            top: 40%;
            width: 104vw;
            height: 49%;
          }

          .lower-waves {
            left: 5%;
            right: 2%;
            bottom: 1%;
            height: 105px;
            opacity: .65;
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
          .hero-copy h1 {
            font-size: 52px;
          }

          .hero-copy > div:nth-of-type(2) {
            font-size: 13px;
          }

          .hero-copy .flex {
            flex-wrap: wrap;
          }

          .map-wrap {
            right: -36vw;
            width: 122vw;
          }

          .lower-waves {
            bottom: 0;
            height: 85px;
          }
        }
      `}</style>
    </section>
  );
}
