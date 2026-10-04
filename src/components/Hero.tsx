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
      className="hero-final relative min-h-[calc(100svh-5rem)] overflow-hidden lg:h-[calc(100svh-5rem)] lg:min-h-[650px]"
    >
      <div className="hero-bg absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto h-full min-h-[calc(100svh-5rem)] max-w-[1920px] lg:min-h-[650px]">
        {/* FULL-WIDTH PROFESSIONAL FOOTPRINT */}
        <div className="map-wrap absolute z-10" aria-hidden="true">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 1000 560">
            {/* LOCKED GOLDEN WORLD MAP IMAGE — map fit controls are x/y/width/height below. */}
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

        {/* Globe and lower waves intentionally removed while finalizing map fit. */}
      </div>

      <style>{`
        .hero-final {
          /* Match the Golden World Map image background so the picture and Hero read as one surface. */
          background: #031b2b;
          isolation: isolate;
        }

        .hero-bg {
          /* Keep the outer canvas almost identical to the map PNG background. */
          background:
            radial-gradient(circle at 50% 48%, rgba(13,47,69,.34) 0%, rgba(5,31,47,.18) 46%, transparent 76%),
            #031b2b;
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
          /* Slight overscan puts the PNG boundary outside the visible Hero. */
          inset: -3.5% -2.5%;
          width: auto;
          height: auto;
          overflow: hidden;
          /* Four-side feather: image fades into the exact Hero navy on every edge/corner. */
          -webkit-mask-image:
            linear-gradient(to right, transparent 0%, #000 5.5%, #000 94.5%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, #000 6.5%, #000 93.5%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image:
            linear-gradient(to right, transparent 0%, #000 5.5%, #000 94.5%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, #000 6.5%, #000 93.5%, transparent 100%);
          mask-composite: intersect;
        }

        /* LOCKED GOLDEN WORLD MAP IMAGE */
        .locked-golden-map {
          transform-box: fill-box;
          transform-origin: center;
          animation: lockedMapDrift 16s ease-in-out infinite;
        }

        .locked-map-image {
          opacity: .96;
          mix-blend-mode: normal;
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
        .p1  { left: 39%; top: 10%; }
        .p2  { left: 16%; top: 16%; }
        .p3  { left: 12%; top: 43%; }
        .p4  { right: 16%; top: 38%; }
        .p5  { left: 34%; top: 28%; }
        .p6  { left: 16%; top: 62%; }
        .p7  { left: 29%; bottom: 18%; }
        .p8  { right: 22%; top: 16%; }
        .p9  { right: 16%; bottom: 18%; }
        .p10 { left: 48%; bottom: 18%; }
        .p11 { right: 29%; bottom: 19%; }
        .p12 { left: 16%; bottom: 20%; }
        .p13 { left: 20%; top: 34%; }
        .p14 { right: 34%; top: 18%; }
        .p15 { right: 16%; top: 64%; }
        .p16 { left: 39%; top: 72%; }
        .p17 { right: 21%; top: 58%; }

        /* Map-fit tuning: adjust only these image values later if needed. */
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

        }
      `}</style>
    </section>
  );
}
