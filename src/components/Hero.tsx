import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  profile?: ProfileInfo;
  onOpenCV: () => void;
  onSelectExperience?: () => void;
}

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

          {/* FREE-FLOATING SKILL POINTS — ONLY IN DARK / WATER AREAS */}
          <div className="free-points-layer" aria-label="Professional skills">
            <div className="free-point fp1">14+ Years Exp</div>
            <div className="free-point fp2">ERP Software</div>
            <div className="free-point fp3">Oracle</div>
            <div className="free-point fp4">Qoyod</div>
            <div className="free-point fp5">QuickBooks</div>
            <div className="free-point fp6">MS Office</div>
            <div className="free-point fp7">Advanced Excel</div>

            <div className="free-point accounting fp8">Financial Reporting</div>
            <div className="free-point accounting fp9">Receivables</div>
            <div className="free-point accounting fp10">VAT Reports &amp; Submission</div>
            <div className="free-point accounting fp11">Reconciliations</div>
            <div className="free-point accounting fp12">Costing</div>
            <div className="free-point accounting fp13">Monthly Closing</div>
            <div className="free-point accounting fp14">Cash Handling</div>
            <div className="free-point accounting fp15">Petty Cash</div>
            <div className="free-point accounting fp16">Payables</div>
            <div className="free-point accounting fp17">P&amp;L Account</div>
            <div className="free-point accounting fp18">Balance Sheet</div>
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
          transform: none;
          transform-box: fill-box;
          transform-origin: center;
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
          animation: none;
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

        /* FREE-FLOATING POINTS — NO CONNECTION LINES.
           Positions are intentionally placed in dark/ocean/background zones,
           away from the main golden land masses and country information boxes. */
        .free-points-layer {
          position: absolute;
          inset: 0;
          z-index: 24;
          pointer-events: none;
          overflow: hidden;
        }

        .free-point {
          position: absolute;
          transform: translate(-50%,-50%);
          min-width: 88px;
          padding: 7px 10px;
          border: 1px solid rgba(105,183,231,.30);
          border-radius: 999px;
          background: rgba(7,24,39,.82);
          backdrop-filter: blur(7px);
          box-shadow: 0 8px 22px rgba(0,0,0,.18);
          color: #E5EDF2;
          font-size: 9px;
          font-weight: 760;
          line-height: 1;
          text-align: center;
          white-space: nowrap;
          animation:
            freePointFloat 7.5s ease-in-out infinite,
            freePointFade 17s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .free-point::before {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          margin-right: 6px;
          border-radius: 50%;
          background: #69B7E7;
          box-shadow: 0 0 7px rgba(105,183,231,.75);
          vertical-align: 1px;
        }

        .free-point.accounting {
          border-color: rgba(216,181,106,.34);
          color: #F4E3B7;
        }

        .free-point.accounting::before {
          background: #D8B56A;
          box-shadow: 0 0 8px rgba(216,181,106,.78);
        }

        @keyframes freePointFloat {
          0%,100% { transform: translate(-50%,-50%) translate(0,7px); }
          50% { transform: translate(-50%,-50%) translate(3px,-9px); }
        }

        /* Different points disappear and return at different times.
           The whole screen never disappears at once. */
        @keyframes freePointFade {
          0%,16%,48%,100% { opacity: .96; }
          28%,37% { opacity: .08; }
        }

        /* LEFT / PACIFIC / ATLANTIC DARK AREAS */
        .fp1  { left: 7%;  top: 11%; animation-delay:-1s,-1s; }
        .fp2  { left: 32%; top: 17%; animation-delay:-3s,-8s; }
        .fp3  { left: 7%;  top: 36%; animation-delay:-5s,-12s; }
        .fp4  { left: 27%; top: 55%; animation-delay:-2s,-5s; }
        .fp5  { left: 8%;  top: 69%; animation-delay:-4s,-14s; }
        .fp6  { left: 27%; top: 82%; animation-delay:-6s,-10s; }
        .fp7  { left: 8%;  top: 94%; animation-delay:-.5s,-6s; }

        /* OPEN WATER / DARK AREAS AROUND THE MAP — accounting points */
        .fp8  { left: 89%; top: 11%; animation-delay:-1.5s,-3s; }
        .fp9  { left: 93%; top: 27%; animation-delay:-3.5s,-11s; }
        .fp10 { left: 83%; top: 43%; animation-delay:-5.5s,-7s; }
        .fp11 { left: 92%; top: 56%; animation-delay:-2.5s,-15s; }
        .fp12 { left: 79%; top: 65%; animation-delay:-4.5s,-5s; }
        .fp13 { left: 91%; top: 75%; animation-delay:-6.5s,-13s; }
        .fp14 { left: 78%; top: 84%; animation-delay:-1s,-9s; }
        .fp15 { left: 91%; top: 92%; animation-delay:-3s,-2s; }

        /* Lower open-ocean zones, kept away from the main land silhouettes */
        .fp16 { left: 38%; top: 91%; animation-delay:-5s,-12s; }
        .fp17 { left: 58%; top: 91%; animation-delay:-2s,-6s; }
        .fp18 { left: 69%; top: 92%; animation-delay:-4s,-16s; }

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
          .free-point { min-width: 70px; padding: 5px 7px; font-size: 7px; }
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
