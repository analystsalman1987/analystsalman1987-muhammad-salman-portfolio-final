import { useState } from 'react';
import { FileDown, ExternalLink } from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface HeroProps {
  profile: ProfileInfo;
  onOpenCV: () => void;
  onSelectExperience?: () => void;
}

export function Hero({ onOpenCV }: HeroProps) {
  const { isRTL } = useLanguage();
  const [showLinkedInNotice, setShowLinkedInNotice] = useState(false);

  const handleLinkedInClick = () => {
    setShowLinkedInNotice(true);
    setTimeout(() => {
      setShowLinkedInNotice(false);
    }, 4500);
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[calc(100svh-5rem)]
        lg:h-[calc(100svh-5rem)]
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-[#071827]
        px-4
        py-8
        text-center
        transition-colors
        duration-300
        sm:px-6
        lg:px-8
        lg:py-0
      "
    >
      {/* ====================================================================
          ACTIVE ARCHITECTURAL GLASS EXECUTIVE CORPORATE ANIMATED BACKGROUND
          Strictly NO stars, NO particles, NO network dots, NO gaming/neon.
          ==================================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* ------------------------------------------------------------------
            LAYER 1 — NAVY ARCHITECTURAL BASE & STRUCTURAL GLASS FACADE PANELS
            Deep navy corporate gradient (#071827, #081A2B, #0D2538, #132E43)
            ------------------------------------------------------------------ */}
        <div
          className="
            animate-navy-base
            absolute
            -inset-12
            bg-[radial-gradient(ellipse_85%_85%_at_50%_-15%,#0D2538_0%,#081A2B_50%,#071827_100%)]
            opacity-95
          "
        />

        {/* Structural Architectural Glass Facade Panels & Geometry (SVG) */}
        <div className="absolute inset-0 opacity-55">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="glassPaneGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D8B56A" stopOpacity="0.16" />
                <stop offset="45%" stopColor="#0D2538" stopOpacity="0.48" />
                <stop offset="100%" stopColor="#132E43" stopOpacity="0.08" />
              </linearGradient>

              <linearGradient id="glassPaneGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.10" />
                <stop offset="50%" stopColor="#071827" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#C9A45C" stopOpacity="0.12" />
              </linearGradient>

              <linearGradient id="mullionStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D8B56A" stopOpacity="0.38" />
                <stop offset="50%" stopColor="#CBD5E1" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#D8B56A" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* Architectural structural glass panels & facade geometry */}
            <polygon
              points="-100,900 240,0 520,0 180,900"
              fill="url(#glassPaneGrad1)"
              stroke="url(#mullionStroke)"
              strokeWidth="1"
            />
            <polygon
              points="180,900 520,0 820,0 480,900"
              fill="url(#glassPaneGrad2)"
              stroke="url(#mullionStroke)"
              strokeWidth="0.8"
            />
            <polygon
              points="920,900 1260,0 1540,0 1200,900"
              fill="url(#glassPaneGrad1)"
              stroke="url(#mullionStroke)"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="450"
              x2="1440"
              y2="450"
              stroke="#D8B56A"
              strokeOpacity="0.14"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="680"
              x2="1440"
              y2="680"
              stroke="#CBD5E1"
              strokeOpacity="0.09"
              strokeWidth="0.75"
            />
          </svg>
        </div>

        {/* ------------------------------------------------------------------
            LAYER 5 — DEPTH / PARALLAX (22–30s)
            Two large translucent architectural shapes at different depth levels
            ------------------------------------------------------------------ */}
        {/* Layer 5A: Foreground Translucent Architectural Glass Plane */}
        <div
          className="
            animate-arch-depth-a
            absolute
            -top-20
            -left-16
            h-[650px]
            w-[750px]
            origin-center
            rotate-[14deg]
            rounded-[3rem]
            border
            border-[#D8B56A]/20
            bg-gradient-to-br
            from-[#132E43]/25
            via-[#0D2538]/12
            to-transparent
            backdrop-blur-[1px]
          "
        />

        {/* Layer 5B: Background Translucent Architectural Glass Plane */}
        <div
          className="
            animate-arch-depth-b
            absolute
            -bottom-24
            -right-20
            h-[600px]
            w-[700px]
            origin-center
            -rotate-[16deg]
            rounded-[3rem]
            border
            border-[#CBD5E1]/15
            bg-gradient-to-bl
            from-[#0D2538]/30
            via-[#132E43]/15
            to-transparent
            backdrop-blur-[1px]
          "
        />

        {/* ------------------------------------------------------------------
            LAYER 3 — CHAMPAGNE GOLD LIGHT (18–24s)
            Soft warm illumination travelling through architectural background
            ------------------------------------------------------------------ */}
        {/* Primary Warm Gold Travelling Illumination */}
        <div
          className="
            animate-gold-drift
            absolute
            top-1/6
            left-1/4
            h-[520px]
            w-[520px]
            rounded-full
            bg-[radial-gradient(circle,rgba(216,181,106,0.22)_0%,rgba(201,164,92,0.10)_45%,transparent_70%)]
            blur-[60px]
          "
        />

        {/* Secondary Supporting Gold Ambient Illumination */}
        <div
          className="
            animate-gold-drift-2
            absolute
            bottom-1/5
            right-1/4
            h-[440px]
            w-[440px]
            rounded-full
            bg-[radial-gradient(circle,rgba(201,164,92,0.18)_0%,rgba(216,181,106,0.08)_45%,transparent_70%)]
            blur-[60px]
          "
        />

        {/* ------------------------------------------------------------------
            LAYER 2 — MOVING GLASS REFLECTION (14–18s)
            Large translucent diagonal glass reflection travelling across Hero
            ------------------------------------------------------------------ */}
        <div
          className="
            animate-glass-reflection
            pointer-events-none
            absolute
            -top-1/3
            -left-1/4
            h-[170%]
            w-[150%]
            bg-[linear-gradient(118deg,transparent_0%,rgba(216,181,106,0.03)_25%,rgba(255,255,255,0.07)_42%,rgba(216,181,106,0.12)_50%,rgba(255,255,255,0.05)_58%,transparent_80%)]
          "
        />

        {/* ------------------------------------------------------------------
            LAYER 4 — GLASS LIGHT SWEEP (10–16s)
            Narrow reflection/light sweep travelling across glass panels
            ------------------------------------------------------------------ */}
        <div
          className="
            animate-light-sweep
            pointer-events-none
            absolute
            -top-1/2
            -left-1/3
            h-[200%]
            w-[380px]
            bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_25%,rgba(255,255,255,0.18)_48%,rgba(216,181,106,0.25)_50%,rgba(255,255,255,0.18)_52%,rgba(255,255,255,0.03)_75%,transparent_100%)]
          "
        />

        {/* Outer Vignette for Executive Depth and Text Contrast */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_38%,#071827_95%)]
          "
        />
      </div>

      {/* ====================================================================
          MINIMAL HOME CONTENT: TYPOGRAPHY & ACTIONS ONLY
          ==================================================================== */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center space-y-6">
        
        {/* Optional Small Label: WELCOME TO MY PORTFOLIO */}
        <div className="inline-flex items-center gap-2">
          <span className="h-[1px] w-6 bg-[#D8B56A]/60 sm:w-10" />
          <span className="text-[11px] font-bold tracking-[0.28em] sm:tracking-[0.34em] text-[#D8B56A] uppercase sm:text-xs">
            {isRTL ? 'مرحباً بكم في ملفي المهني' : 'WELCOME TO MY PORTFOLIO'}
          </span>
          <span className="h-[1px] w-6 bg-[#D8B56A]/60 sm:w-10" />
        </div>

        {/* Main Name: Two-Tone MUHAMMAD SALMAN */}
        <h1
          className="
            text-4xl
            font-extrabold
            tracking-tight
            leading-[1.1]
            select-none
            sm:text-6xl
            md:text-7xl
            lg:text-[5.25rem]
          "
        >
          <span className="text-[#F8FAFC] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            {isRTL ? 'محمد' : 'MUHAMMAD'}
          </span>
          {' '}
          <span className="text-[#D8B56A] drop-shadow-[0_2px_16px_rgba(216,181,106,0.22)]">
            {isRTL ? 'سلمان' : 'SALMAN'}
          </span>
        </h1>

        {/* Designation: ACCOUNTANT with Clean Letter Spacing */}
        <p
          className="
            text-base
            font-semibold
            tracking-[0.25em]
            text-[#CBD5E1]
            uppercase
            sm:text-xl
            md:text-2xl
            sm:tracking-[0.35em]
          "
        >
          {isRTL ? ARABIC_TRANSLATIONS.hero.role || 'محاسب' : 'ACCOUNTANT'}
        </p>

        {/* Executive Buttons: Download CV + LinkedIn Profile */}
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
          {/* Download CV */}
          <button
            type="button"
            onClick={onOpenCV}
            className="
              group
              relative
              inline-flex
              cursor-pointer
              select-none
              touch-manipulation
              items-center
              gap-2.5
              overflow-hidden
              rounded-xl
              border
              border-[#D8B56A]/50
              bg-[#0D2538]
              px-7
              py-3.5
              text-sm
              font-bold
              text-[#F8FAFC]
              shadow-lg
              shadow-black/40
              transition-all
              duration-250
              ease-out
              hover:-translate-y-0.5
              hover:border-[#D8B56A]
              hover:bg-[#132E43]
              hover:shadow-[#D8B56A]/10
              focus:outline-hidden
              focus-visible:ring-2
              focus-visible:ring-[#D8B56A]
            "
          >
            {/* Subtle button light sweep */}
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
            <FileDown className="h-4 w-4 text-[#D8B56A]" />
            <span>
              {isRTL ? ARABIC_TRANSLATIONS.hero.downloadCv : 'Download CV'}
            </span>
          </button>

          {/* LinkedIn Profile */}
          <div className="relative">
            <button
              type="button"
              onClick={handleLinkedInClick}
              className="
                group
                inline-flex
                cursor-pointer
                select-none
                touch-manipulation
                items-center
                gap-2.5
                rounded-xl
                border
                border-[#CBD5E1]/25
                bg-[#071827]/75
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#CBD5E1]
                shadow-md
                backdrop-blur-md
                transition-all
                duration-250
                ease-out
                hover:-translate-y-0.5
                hover:border-[#D8B56A]/60
                hover:text-[#F8FAFC]
                focus:outline-hidden
                focus-visible:ring-2
                focus-visible:ring-[#D8B56A]
              "
              aria-label="LinkedIn Profile"
            >
              {/* LinkedIn SVG Icon */}
              <svg
                className="h-4 w-4 fill-current text-[#D8B56A] transition-colors group-hover:text-[#D8B56A]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37z" />
              </svg>
              <span>{isRTL ? 'الملف الشخصي على LinkedIn' : 'LinkedIn Profile'}</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </button>

            {/* Tooltip / Notice informing that LinkedIn URL is pending production configuration */}
            {showLinkedInNotice && (
              <div
                className="
                  absolute
                  top-full
                  left-1/2
                  z-50
                  mt-2
                  w-64
                  -translate-x-1/2
                  rounded-lg
                  border
                  border-[#D8B56A]/40
                  bg-[#0D2538]
                  p-2.5
                  text-xs
                  font-medium
                  text-[#CBD5E1]
                  shadow-xl
                  animate-in
                  fade-in
                  zoom-in-95
                  duration-150
                "
                role="status"
              >
                {isRTL
                  ? 'رابط LinkedIn في انتظار التحديد قبل النشر النهائي.'
                  : 'LinkedIn Profile URL is pending configuration before production deployment.'}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
