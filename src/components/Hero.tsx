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

          {/* LEFT — SYSTEMS / EXPERIENCE NETWORK */}
          <div className="network-side network-left" aria-label="Systems and experience">
            <svg className="network-lines" viewBox="0 0 360 620" preserveAspectRatio="none">
              <path className="network-base" d="M78 78 C132 118 178 120 224 162" />
              <path className="network-flow network-flow-blue" d="M78 78 C132 118 178 120 224 162" />
              <path className="network-base" d="M224 162 C170 206 126 220 86 264" />
              <path className="network-flow network-flow-blue delay-1" d="M224 162 C170 206 126 220 86 264" />
              <path className="network-base" d="M86 264 C145 300 204 292 256 338" />
              <path className="network-flow network-flow-blue delay-2" d="M86 264 C145 300 204 292 256 338" />
              <path className="network-base" d="M256 338 C205 380 146 386 98 426" />
              <path className="network-flow network-flow-blue delay-3" d="M256 338 C205 380 146 386 98 426" />
              <path className="network-base" d="M98 426 C150 466 206 458 254 500" />
              <path className="network-flow network-flow-blue delay-4" d="M98 426 C150 466 206 458 254 500" />
              <path className="network-base" d="M254 500 C205 532 158 548 108 574" />
              <path className="network-flow network-flow-blue delay-5" d="M254 500 C205 532 158 548 108 574" />
            </svg>

            <div className="network-node blue-node left-n1">14+ Years Exp</div>
            <div className="network-node blue-node left-n2">ERP Software</div>
            <div className="network-node blue-node left-n3">Oracle</div>
            <div className="network-node blue-node left-n4">Qoyod</div>
            <div className="network-node blue-node left-n5">QuickBooks</div>
            <div className="network-node blue-node left-n6">MS Office</div>
            <div className="network-node blue-node left-n7">Advanced Excel</div>
          </div>

          {/* RIGHT — ACCOUNTING PROCESS → FINANCIAL REPORTING */}
          <div className="network-side network-right" aria-label="Accounting process to financial reporting">
            <svg className="network-lines" viewBox="0 0 430 620" preserveAspectRatio="none">
              {/* P&L and Balance Sheet converge into Financial Reporting */}
              <path className="network-base" d="M150 196 C205 148 258 112 324 78" />
              <path className="network-flow" d="M150 196 C205 148 258 112 324 78" />
              <path className="network-base" d="M324 220 C338 168 338 120 324 78" />
              <path className="network-flow delay-2" d="M324 220 C338 168 338 120 324 78" />

              {/* Revenue + Expenses → P&L */}
              <path className="network-base" d="M70 300 C88 255 112 220 150 196" />
              <path className="network-flow delay-1" d="M70 300 C88 255 112 220 150 196" />
              <path className="network-base" d="M185 316 C184 260 170 222 150 196" />
              <path className="network-flow delay-3" d="M185 316 C184 260 170 222 150 196" />

              {/* AR + AP + Inventory → Balance Sheet */}
              <path className="network-base" d="M286 320 C304 286 316 250 324 220" />
              <path className="network-flow delay-1" d="M286 320 C304 286 316 250 324 220" />
              <path className="network-base" d="M386 338 C365 292 345 250 324 220" />
              <path className="network-flow delay-4" d="M386 338 C365 292 345 250 324 220" />
              <path className="network-base" d="M330 426 C342 360 338 286 324 220" />
              <path className="network-flow delay-5" d="M330 426 C342 360 338 286 324 220" />

              {/* Processing layer */}
              <path className="network-base" d="M150 410 C132 370 104 330 70 300" />
              <path className="network-flow delay-2" d="M150 410 C132 370 104 330 70 300" />
              <path className="network-base" d="M72 474 C98 442 124 422 150 410" />
              <path className="network-flow delay-4" d="M72 474 C98 442 124 422 150 410" />
              <path className="network-base" d="M214 492 C190 462 168 432 150 410" />
              <path className="network-flow delay-1" d="M214 492 C190 462 168 432 150 410" />
              <path className="network-base" d="M340 514 C340 478 336 450 330 426" />
              <path className="network-flow delay-3" d="M340 514 C340 478 336 450 330 426" />

              {/* Monthly Closing pulls the process upward into statements/reporting */}
              <path className="network-base" d="M92 566 C110 520 128 458 150 410 C166 350 166 260 150 196" />
              <path className="network-flow network-flow-slow" d="M92 566 C110 520 128 458 150 410 C166 350 166 260 150 196" />
            </svg>

            <div className="network-node master-node right-fr">Financial Reporting</div>
            <div className="network-node gold-node right-pl">P&amp;L Account</div>
            <div className="network-node gold-node right-bs">Balance Sheet</div>
            <div className="network-node gold-node right-revenue">Revenue</div>
            <div className="network-node gold-node right-expenses">Expenses</div>
            <div className="network-node gold-node right-ar">Receivables</div>
            <div className="network-node gold-node right-ap">Payables</div>
            <div className="network-node gold-node right-inventory">Inventory</div>
            <div className="network-node gold-node right-costing">Costing</div>
            <div className="network-node gold-node right-recon">Reconciliation</div>
            <div className="network-node gold-node right-cash">Cash / Petty Cash</div>
            <div className="network-node gold-node right-vat">VAT Reporting</div>
            <div className="network-node gold-node right-close">Monthly Closing</div>
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

        /* TWO-SIDE CONNECTED NETWORK — CURVED PATHS, NO STRAIGHT-LINE CHART LOOK */
        .network-side {
          position: absolute;
          z-index: 24;
          top: 2.5%;
          bottom: 2.5%;
          width: 23%;
          pointer-events: none;
        }

        /* Keep nodes in the dark/blue outer water/margin zones, not on continents. */
        .network-left { left: .8%; }
        .network-right { right: .8%; }

        .network-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .network-base {
          fill: none;
          stroke: rgba(87,117,139,.27);
          stroke-width: 1.15;
          stroke-linecap: round;
        }

        .network-flow {
          fill: none;
          stroke: #D8B56A;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-dasharray: 10 34;
          animation: networkDash 6.4s linear infinite;
          filter: drop-shadow(0 0 4px rgba(216,181,106,.38));
        }

        .network-flow-blue {
          stroke: #78BDE3;
          opacity: .72;
          filter: drop-shadow(0 0 4px rgba(120,189,227,.32));
        }

        .network-flow-slow { animation-duration: 8.5s; }
        .delay-1 { animation-delay: -1.2s; }
        .delay-2 { animation-delay: -2.4s; }
        .delay-3 { animation-delay: -3.6s; }
        .delay-4 { animation-delay: -4.8s; }
        .delay-5 { animation-delay: -6s; }

        @keyframes networkDash {
          to { stroke-dashoffset: -176; }
        }

        .network-node {
          position: absolute;
          transform: translate(-50%,-50%);
          min-width: 92px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(7,24,39,.84);
          backdrop-filter: blur(7px);
          box-shadow: 0 8px 22px rgba(0,0,0,.18);
          color: #E5EDF2;
          font-size: 9px;
          font-weight: 760;
          line-height: 1;
          text-align: center;
          white-space: nowrap;
          animation:
            networkFloat 7s ease-in-out infinite,
            nodePhase 16s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .network-node::before {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          margin-right: 6px;
          border-radius: 50%;
          vertical-align: 1px;
        }

        .blue-node {
          border: 1px solid rgba(120,189,227,.34);
        }
        .blue-node::before {
          background: #78BDE3;
          box-shadow: 0 0 7px rgba(120,189,227,.75);
        }

        .gold-node {
          border: 1px solid rgba(216,181,106,.38);
          color: #F4E3B7;
        }
        .gold-node::before,
        .master-node::before {
          background: #D8B56A;
          box-shadow: 0 0 8px rgba(216,181,106,.8);
        }

        .master-node {
          min-width: 142px;
          padding: 10px 13px;
          border: 1px solid rgba(216,181,106,.72);
          color: #FFF4D6;
          font-size: 10px;
          box-shadow: 0 0 25px rgba(216,181,106,.14), 0 8px 22px rgba(0,0,0,.18);
          animation:
            masterNodePulse 4.2s ease-in-out infinite,
            nodePhase 16s ease-in-out infinite;
        }

        @keyframes networkFloat {
          0%,100% { transform: translate(-50%,-50%) translate(0,6px); }
          50% { transform: translate(-50%,-50%) translate(3px,-9px); }
        }

        @keyframes masterNodePulse {
          0%,100% { transform: translate(-50%,-50%) scale(1); }
          50% { transform: translate(-50%,-50%) scale(1.035); }
        }

        /* Some nodes remain readable while others fade out and return.
           Different phase delays keep the network alive without hiding everything together. */
        @keyframes nodePhase {
          0%,18%,48%,100% { opacity: 1; }
          29%,38% { opacity: .10; }
        }

        /* LEFT — use the outer Pacific/Atlantic blue space, top to bottom. */
        .left-n1 { left: 16%; top: 8%;  animation-delay:-1s,-1s; }
        .left-n2 { left: 72%; top: 20%; animation-delay:-3s,-7s; }
        .left-n3 { left: 15%; top: 34%; animation-delay:-5s,-11s; }
        .left-n4 { left: 76%; top: 47%; animation-delay:-2s,-4s; }
        .left-n5 { left: 17%; top: 61%; animation-delay:-4s,-13s; }
        .left-n6 { left: 76%; top: 75%; animation-delay:-6s,-9s; }
        .left-n7 { left: 20%; top: 91%; animation-delay:-.5s,-5s; }

        /* RIGHT — accounting network stays in the outer dark/blue zone.
           Long curved paths are intentional so labels do not sit on the map. */
        .right-fr      { left: 78%; top: 7%;  animation-delay:0s,-1s; }
        .right-pl      { left: 22%; top: 18%; animation-delay:-1s,-8s; }
        .right-bs      { left: 78%; top: 25%; animation-delay:-2s,-12s; }
        .right-revenue { left: 18%; top: 34%; animation-delay:-3s,-4s; }
        .right-expenses{ left: 72%; top: 40%; animation-delay:-4s,-14s; }
        .right-ar      { left: 18%; top: 49%; animation-delay:-1.5s,-6s; }
        .right-ap      { left: 78%; top: 55%; animation-delay:-3.5s,-10s; }
        .right-inventory{left: 18%; top: 63%; animation-delay:-5s,-2s; }
        .right-costing { left: 76%; top: 69%; animation-delay:-2.2s,-13s; }
        .right-recon   { left: 18%; top: 76%; animation-delay:-4.7s,-7s; }
        .right-cash    { left: 75%; top: 82%; animation-delay:-1.2s,-11s; }
        .right-vat     { left: 20%; top: 89%; animation-delay:-3.2s,-5s; }
        .right-close   { left: 75%; top: 94%; animation-delay:-5.4s,-15s; }

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

          .network-side { width: 38%; top: 7%; bottom: 7%; }
          .network-left { left: 1%; }
          .network-right { right: 1%; }
          .network-node { min-width: 72px; padding: 5px 7px; font-size: 7px; }
          .master-node { min-width: 105px; font-size: 8px; }
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
