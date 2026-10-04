import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  profile?: ProfileInfo;
  onOpenCV: () => void;
  onSelectExperience?: () => void;
}

const leftPoints = [
  '14+ Years Exp',
  'ERP Software',
  'Oracle',
  'Qoyod',
  'QuickBooks',
  'MS Office',
  'Advanced Excel',
];

const rightPoints = [
  'Financial Reporting',
  'Receivables',
  'VAT Reports & Submission',
  'Reconciliations',
  'Costing',
  'Monthly Closing',
  'Cash Handling',
  'Petty Cash',
  'Payables',
  'P&L Account',
  'Balance Sheet',
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
                x="-92"
                y="-48"
                width="1184"
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

          <div className="skill-column skill-column-left" aria-label="Software and general experience">
            {leftPoints.map((label, index) => (
              <div
                key={label}
                className="skill-point side-point left-side-point"
                style={{
                  top: `${8 + index * 13}%`,
                  animationDelay: `${index * 2}s`,
                }}
              >
                {label}
              </div>
            ))}
          </div>

          <div className="skill-column skill-column-right" aria-label="Accounting and finance expertise">
            {rightPoints.map((label, index) => (
              <div
                key={label}
                className="skill-point side-point right-side-point"
                style={{
                  top: `${4 + index * 8.6}%`,
                  animationDelay: `${index * 2}s`,
                }}
              >
                {label}
              </div>
            ))}
          </div>
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
          inset: -3.5% -4.25%;
          width: auto;
          height: auto;
          overflow: hidden;
          /* Four-side feather: image fades into the exact Hero navy on every edge/corner. */
          -webkit-mask-image:
            linear-gradient(to right, transparent 0%, #000 4.25%, #000 95.75%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, #000 6.5%, #000 93.5%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image:
            linear-gradient(to right, transparent 0%, #000 4.25%, #000 95.75%, transparent 100%),
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

        /* SIDE POINT COLUMNS — map stays clean in the centre. */
        .skill-column {
          position: absolute;
          z-index: 22;
          top: 7%;
          bottom: 7%;
          width: 190px;
          pointer-events: none;
        }

        .skill-column-left { left: 7.5%; }
        .skill-column-right { right: 7.5%; }

        .skill-point {
          position: absolute;
          padding: 7px 11px;
          border-radius: 999px;
          border: 1px solid rgba(111,184,223,.26);
          background: rgba(7,24,39,.82);
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 24px rgba(0,0,0,.18);
          color: #DCE7EE;
          font-size: 10px;
          font-weight: 760;
          line-height: 1;
          white-space: nowrap;
          opacity: 0;
          will-change: transform, opacity;
        }

        .left-side-point {
          left: 0;
          border-color: rgba(111,184,223,.32);
          animation: leftPointSequence 14s ease-in-out infinite;
        }

        .right-side-point {
          right: 0;
          border-color: rgba(216,181,106,.38);
          color: #F4E3B7;
          animation: rightPointSequence 22s ease-in-out infinite;
        }

        @keyframes leftPointSequence {
          0%, 5% { opacity:0; transform:translateY(10px) scale(.97); }
          8%, 11% { opacity:1; transform:translateY(0) scale(1); }
          13.5%, 100% { opacity:0; transform:translateY(-8px) scale(.98); }
        }

        @keyframes rightPointSequence {
          0%, 3% { opacity:0; transform:translateY(10px) scale(.97); }
          5%, 7% { opacity:1; transform:translateY(0) scale(1); }
          8.7%, 100% { opacity:0; transform:translateY(-8px) scale(.98); }
        }

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

          .skill-column { width: 125px; top: 8%; bottom: 8%; }
          .skill-column-left { left: 2.5%; }
          .skill-column-right { right: 2.5%; }
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
