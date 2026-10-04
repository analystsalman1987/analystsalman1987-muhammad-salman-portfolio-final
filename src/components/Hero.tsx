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
        {/* LEFT CONTENT */}
        <div
          className={`hero-copy absolute z-30 top-[48%] w-[37%] -translate-y-1/2 ${
            isRTL ? 'right-[6vw] text-right' : 'left-[6vw] text-left'
          }`}
        >
          <div className="mb-[18px] text-[12px] font-semibold tracking-[0.24em] text-[#D8B56A]">
            {isRTL ? 'مرحباً بكم في ملفي المهني' : 'WELCOME TO MY PORTFOLIO'}
          </div>

          <h1 className="m-0 text-[clamp(48px,6vw,90px)] font-extrabold leading-[0.86] tracking-[-0.05em] text-[#F8FAFC]">
            MUHAMMAD
            <br />
            <span className="text-[#D8B56A]">SALMAN</span>
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

        {/* RIGHT MAP / PROFESSIONAL FOOTPRINT */}
        <div className="map-wrap absolute right-[1vw] top-[4%] z-10 h-[88%] w-[62vw]" aria-hidden="true">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 1000 560">
            <path className="map-grid" d="M90 180H930M70 280H950M90 380H930M250 80V485M500 60V500M750 80V485" />

            {/* Visible inline world map: no external image dependency */}
            <path className="world" d="M88 169 L115 137 151 126 183 105 226 104 257 119 286 112 312 132 302 151 278 160 266 181 239 190 220 216 196 221 177 246 153 238 145 215 119 203 99 188Z" />
            <path className="world" d="M231 246 L257 257 276 282 281 316 300 341 292 375 275 397 269 429 249 462 232 439 226 405 211 377 205 341 214 308 202 278Z" />
            <path className="world" d="M444 139 L472 116 511 113 536 126 563 118 594 130 619 124 649 140 685 139 716 153 752 148 785 161 817 160 849 181 838 199 803 205 782 224 748 223 724 239 691 233 665 249 638 245 616 263 590 254 564 263 542 249 516 250 494 232 469 228 453 208 430 199 423 176Z" />
            <path className="world" d="M516 259 L550 258 578 275 589 301 580 330 563 353 555 386 535 416 513 444 493 425 488 392 472 365 466 330 474 300 492 278Z" />
            <path className="world" d="M744 287 L772 275 797 284 808 306 795 327 769 335 747 321 735 303Z" />
            <path className="world" d="M818 375 L847 362 879 370 895 392 884 414 852 423 824 410 809 391Z" />

            <path className="geo-detail" d="M128 154 C166 165 205 163 253 142 M159 202 C193 188 229 178 272 174 M459 163 C511 151 562 151 615 159 M532 201 C582 184 635 181 688 191 M659 215 C708 198 759 194 809 199 M493 294 C524 304 551 322 572 347 M225 291 C245 315 260 346 271 378 M829 390 C849 382 870 385 885 398" />

            {/* Saudi Arabia ↔ Pakistan ↔ Canada */}
            <path className="route route-gold" d="M605 278 C646 245 681 246 720 264" />
            <path className="route route-gold" d="M605 278 C500 176 352 120 218 151" />
            <path className="route route-blue" d="M720 264 C605 151 401 104 218 151" />

            <circle className="map-node" cx="605" cy="278" r="5" />
            <circle className="map-pulse" cx="605" cy="278" r="9" />
            <circle className="map-node" cx="720" cy="264" r="5" />
            <circle className="map-pulse" cx="720" cy="264" r="9" />
            <circle className="map-node map-node-blue" cx="218" cy="151" r="5" />
            <circle className="map-pulse map-pulse-blue" cx="218" cy="151" r="9" />
          </svg>

          <div className="country country-sa">
            <b>SAUDI ARABIA</b>
            <small>PROFESSIONAL EXPERIENCE</small>
          </div>
          <div className="country country-pk">
            <b>PAKISTAN</b>
            <small>PROFESSIONAL EXPERIENCE</small>
          </div>
          <div className="country country-ca">
            <b>CANADA</b>
            <small>REMOTE EXPERIENCE</small>
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

        {/* LOCKED MOVING ROUND ELEMENT — retained until exact reference animation is supplied */}
        <div className="network-orb absolute right-[5%] top-[7%] z-20 hidden h-[105px] w-[105px] lg:block" aria-hidden="true">
          <span className="orb-line orb-line-a" />
          <span className="orb-line orb-line-b" />
        </div>
      </div>

      <style>{`
        .hero-final {
          background: #071827;
          isolation: isolate;
        }

        .hero-bg {
          background:
            radial-gradient(circle at 72% 44%, rgba(111,184,223,.09), transparent 28%),
            radial-gradient(circle at 67% 55%, rgba(216,181,106,.065), transparent 34%),
            linear-gradient(135deg,#071827 0%,#081A2B 52%,#0D2538 100%);
        }

        .hero-final::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: .18;
          background-image: radial-gradient(rgba(216,181,106,.13) .65px, transparent .65px);
          background-size: 29px 29px;
          -webkit-mask-image: linear-gradient(90deg, transparent 28%, #000 60%, #000 100%);
          mask-image: linear-gradient(90deg, transparent 28%, #000 60%, #000 100%);
        }

        .world {
          fill: rgba(111,184,223,.035);
          stroke: rgba(139,198,230,.52);
          stroke-width: 1.35;
          vector-effect: non-scaling-stroke;
          filter: drop-shadow(0 0 7px rgba(111,184,223,.08));
        }

        .map-grid {
          fill: none;
          stroke: rgba(111,184,223,.045);
          stroke-width: 1;
        }

        .geo-detail {
          fill: none;
          stroke: rgba(139,198,230,.16);
          stroke-width: .8;
          stroke-dasharray: 2 5;
        }

        .route {
          fill: none;
          stroke-linecap: round;
          stroke-width: 1.6;
          stroke-dasharray: 5 11;
          animation: routeFlow 13s linear infinite;
        }

        .route-gold { stroke: #D8B56A; }
        .route-blue {
          stroke: #6FB8DF;
          animation-duration: 16s;
        }

        @keyframes routeFlow {
          to { stroke-dashoffset: -320; }
        }

        .map-node {
          fill: #D8B56A;
          filter: drop-shadow(0 0 7px rgba(216,181,106,.9));
        }

        .map-node-blue { fill: #6FB8DF; }

        .map-pulse {
          fill: none;
          stroke: #D8B56A;
          stroke-width: 1.2;
          transform-box: fill-box;
          transform-origin: center;
          animation: mapPulse 3.4s ease-out infinite;
        }

        .map-pulse-blue {
          stroke: #6FB8DF;
          animation-delay: -1.3s;
        }

        @keyframes mapPulse {
          0% { transform: scale(.55); opacity: .9; }
          100% { transform: scale(3.2); opacity: 0; }
        }

        .country {
          position: absolute;
          z-index: 25;
          padding: 8px 11px;
          border-radius: 10px;
          background: rgba(7,24,39,.87);
          border: 1px solid rgba(216,181,106,.34);
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

        .country-sa { left: 59%; top: 47%; }
        .country-pk { left: 69%; top: 39%; animation-delay: -4s; }
        .country-ca {
          left: 20%;
          top: 19%;
          border-color: rgba(111,184,223,.36);
          animation-delay: -7s;
        }

        .country-ca small { color: #8BC6E6; }

        @keyframes countryFloat {
          0%,100% { transform: translateY(6px); }
          50% { transform: translateY(-13px); }
        }

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
          border-color: rgba(216,181,106,.35);
          color: #F4E3B7;
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
          0%,100% { transform: translateY(10px); opacity:.9; }
          50% { transform: translateY(-17px) scale(1.035); opacity:1; }
        }

        .p1{left:40%;top:3%}
        .p2{left:23%;top:8%}
        .p3{left:4%;top:39%}
        .p4{right:1%;top:37%}
        .p5{left:34%;top:24%}
        .p6{left:10%;top:60%}
        .p7{left:28%;bottom:7%}
        .p8{right:19%;top:4%}
        .p9{right:5%;bottom:9%}
        .p10{left:48%;bottom:2%}
        .p11{right:29%;bottom:15%}
        .p12{left:2%;bottom:22%}
        .p13{left:17%;top:29%}
        .p14{right:34%;top:14%}
        .p15{right:1%;top:67%}
        .p16{left:43%;top:71%}
        .p17{right:17%;top:61%}

        .network-orb {
          border: 1px solid rgba(216,181,106,.43);
          border-radius: 50%;
          box-shadow: 0 0 35px rgba(216,181,106,.07);
          animation: orbMove 10s ease-in-out infinite;
        }

        .orb-line {
          position: absolute;
          border-radius: 45% 55% 50% 50%;
          animation: orbMorph 7s ease-in-out infinite, orbSpin 18s linear infinite;
        }

        .orb-line-a {
          inset: 13px;
          border: 1px dashed rgba(111,184,223,.55);
        }

        .orb-line-b {
          inset: 27px 8px;
          border: 1px dashed rgba(216,181,106,.55);
          animation-duration: 9s,14s;
          animation-direction: alternate,reverse;
        }

        @keyframes orbMorph {
          0%,100% { border-radius:45% 55% 48% 52%; }
          50% { border-radius:60% 40% 58% 42%; }
        }

        @keyframes orbSpin {
          to { transform:rotate(360deg); }
        }

        @keyframes orbMove {
          0%,100% { transform:translate(-8px,12px) scale(.96); }
          50% { transform:translate(14px,-17px) scale(1.05); }
        }

        @media (max-width: 1023px) {
          .hero-final {
            min-height: 760px;
          }

          .hero-copy {
            top: 29%;
            left: 6vw !important;
            right: auto !important;
            width: 88%;
            text-align: left !important;
          }

          .map-wrap {
            top: 42%;
            right: -34vw;
            width: 115vw;
            height: 54%;
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
        }
      `}</style>
    </section>
  );
}
