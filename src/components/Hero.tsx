import { useState, useEffect } from 'react';
import {
  MapPin,
  FileDown
} from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface HeroProps {
  profile: ProfileInfo;
  onOpenCV: () => void;
  onSelectExperience?: () => void;
}

export function Hero({ profile, onOpenCV }: HeroProps) {
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [imageError, setImageError] = useState(false);
  const { isRTL } = useLanguage();

  useEffect(() => {
    setImageError(false);
  }, [profile.avatarUrl]);

  useEffect(() => {
    // Detect if Home is selected via hash or scroll
    const checkHash = () => {
      const hash = window.location.hash;

      if (!hash || hash === '#home' || hash === '#') {
        setIsHomeActive(true);
      }
    };

    checkHash();

    window.addEventListener('hashchange', checkHash);
    window.addEventListener('popstate', checkHash);

    // Watch intersection for smooth activation when scrolled into view
    const homeEl = document.getElementById('home');
    let observer: IntersectionObserver | null = null;

    if (homeEl && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              entry.intersectionRatio >= 0.2
            ) {
              setIsHomeActive(true);
            }
          });
        },
        {
          threshold: [0.2],
        }
      );

      observer.observe(homeEl);
    }

    // Listen to clicks on navigation links pointing to #home
    const handleHomeClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        'a, button'
      );

      if (target) {
        const href =
          target.getAttribute('href') ||
          target.getAttribute('data-href');

        const text = target.textContent
          ?.trim()
          .toLowerCase();

        if (href === '#home' || text === 'home') {
          setIsHomeActive(true);
        }
      }
    };

    document.addEventListener('click', handleHomeClick);

    return () => {
      window.removeEventListener(
        'hashchange',
        checkHash
      );

      window.removeEventListener(
        'popstate',
        checkHash
      );

      document.removeEventListener(
        'click',
        handleHomeClick
      );

      if (observer && homeEl) {
        observer.unobserve(homeEl);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        border-b
        border-slate-200
        bg-white
        pt-12
        pb-20
        transition-colors
        dark:border-slate-800
        dark:bg-slate-900
        md:pt-20
        md:pb-28
      "
    >
      {/* Subtle Corporate Accounting & Finance Background Image */}
      <div
        className="
          absolute
          inset-0
          z-0
          pointer-events-none
          transition-opacity
          duration-700
          ease-in-out
        "
        aria-hidden="true"
      >
        <img
          src="/images/hero_accounting_bg.jpg"
          alt=""
          referrerPolicy="no-referrer"
          className="
            h-full
            w-full
            select-none
            object-cover
            object-[75%_center]
            opacity-[0.62]
            filter
            contrast-105
            transition-transform
            duration-1000
            ease-out
            dark:opacity-[0.26]
            lg:object-[82%_center]
          "
          style={{
            transform: isHomeActive
              ? 'scale(1.008)'
              : 'scale(1.0)',
          }}
          loading="eager"
        />

        {/* Existing soft background overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-white/88
            via-white/60
            to-white/35
            dark:from-slate-900/90
            dark:via-slate-900/75
            dark:to-slate-900/50
          "
        />
      </div>

      {/* Subtle corporate ambient background grid */}
      <div
        className="
          absolute
          inset-0
          z-0
          pointer-events-none
          bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
          dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center justify-center lg:col-span-4 xl:col-span-4">

            {/* ORIGINAL Circular Profile Photo */}
            <div className="relative">
              {profile.avatarUrl && !imageError ? (
                <img
                  src={profile.avatarUrl}
                  alt={
                    profile.fullName ||
                    'Muhammad Salman'
                  }
                  className="
                    h-48
                    w-48
                    rounded-full
                    border-4
                    border-[#0F766E]/40
                    object-cover
                    object-top
                    shadow-xl
                    shadow-slate-900/10
                    dark:border-teal-500/40
                    dark:shadow-slate-950/30
                    sm:h-56
                    sm:w-56
                  "
                  loading="eager"
                  onError={() =>
                    setImageError(true)
                  }
                />
              ) : (
                <div
                  className="
                    flex
                    h-48
                    w-48
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-[#0F766E]/40
                    bg-gradient-to-br
                    from-[#0F2747]
                    via-slate-900
                    to-[#0F766E]/40
                    p-4
                    text-center
                    shadow-xl
                    sm:h-56
                    sm:w-56
                  "
                >
                  <span className="text-4xl font-extrabold tracking-widest text-teal-300">
                    MS
                  </span>
                </div>
              )}
            </div>

            {/* Current Company Card */}
            <a
              href="https://www.ayalyami.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                isRTL
                  ? 'زيارة الموقع الرسمي لشركة أحمد يحيى اليامي للمقاولات (يفتح في علامة تبويب جديدة)'
                  : 'Visit official website of Ahmed Yahya Alyami Contracting Co. (opens in a new tab)'
              }
              className="
                mt-4
                block
                w-full
                max-w-[280px]
                cursor-pointer
                select-none
                touch-manipulation
                rounded-xl
                border
                border-teal-600/20
                bg-white/95
                px-4
                py-3
                text-center
                shadow-[0_2px_8px_rgba(15,23,42,0.06),0_1px_2px_rgba(15,118,110,0.05)]
                backdrop-blur-xs
                transition-all
                duration-250
                ease-out

                hover:-translate-y-[2.5px]
                hover:border-[#0F766E]/45
                hover:shadow-[0_8px_20px_rgba(15,118,110,0.12),0_2px_6px_rgba(15,39,71,0.06)]

                focus:outline-hidden
                focus-visible:ring-2
                focus-visible:ring-[#0F766E]

                dark:border-teal-400/45
                dark:bg-slate-800
                dark:shadow-[0_6px_18px_rgba(0,0,0,0.34),0_1px_3px_rgba(20,184,166,0.10)]
                dark:hover:border-teal-300/70
                dark:hover:bg-slate-800
                dark:hover:shadow-[0_10px_24px_rgba(0,0,0,0.42),0_3px_8px_rgba(20,184,166,0.16)]

                sm:mt-5
                sm:max-w-[300px]
              "
            >
              <div
                className="
                  hero-company-3d
                  text-[13px]
                  font-extrabold
                  leading-snug
                  tracking-tight
                  dark:!text-slate-100
                  dark:[text-shadow:0_1px_1px_rgba(0,0,0,0.65)]
                  sm:text-sm
                "
              >
                {isRTL
                  ? (
                    ARABIC_TRANSLATIONS.hero
                      .companyArabic ||
                    'شركة أحمد يحيى اليامي للمقاولات'
                  )
                  : 'Ahmed Yahya Alyami Contracting Co.'}
              </div>

              <div
                className="
                  mt-1
                  text-xs
                  font-semibold
                  tracking-normal
                  text-[#0F766E]
                  dark:text-teal-300
                "
              >
                {isRTL
                  ? 'فبراير 2025 – حتى الآن'
                  : 'Feb 2025 – Present'}
              </div>
            </a>
          </div>

          {/* RIGHT SIDE: Main Hero Copy */}
          <div
            className={`
              space-y-6
              text-center
              lg:col-span-8
              xl:col-span-8
              ${
                isRTL
                  ? 'lg:text-right'
                  : 'lg:text-left'
              }
            `}
          >
            {/* Location Pill */}
            <div
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#0F766E]/30
                bg-[#E6F4F1]
                px-3.5
                py-1.5
                text-xs
                font-semibold
                text-[#0F766E]
                shadow-xs
                dark:border-teal-800/80
                dark:bg-teal-950/60
                dark:text-teal-300
              "
            >
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#0F766E] dark:text-teal-400" />

              <span>
                {isRTL
                  ? ARABIC_TRANSLATIONS.hero
                      .location
                  : 'Dammam, Saudi Arabia'}
              </span>
            </div>

            {/* Name, Designation & Education */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="main-heading-3d text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {isRTL
                  ? 'محمد سلمان'
                  : 'MUHAMMAD SALMAN'}
              </h1>

              <p className="text-xl font-bold tracking-tight text-[#0F766E] dark:text-teal-400 sm:text-2xl">
                {isRTL
                  ? ARABIC_TRANSLATIONS.hero.role
                  : 'Accountant'}
              </p>

              <p className="whitespace-normal text-base font-semibold text-[#0F2747] dark:text-slate-200 sm:whitespace-nowrap sm:text-lg">
                {isRTL
                  ? (
                    ARABIC_TRANSLATIONS.hero
                      .degreeCombined ||
                    'ماجستير وبكالوريوس (المحاسبة والمالية)'
                  )
                  : 'MBA & BBA (Accounting & Finance)'}
              </p>
            </div>

            {/* Approved Short Professional Introduction */}
            <div className="mx-auto max-w-2xl text-sm leading-relaxed text-[#1F2937] dark:text-slate-300 sm:text-base lg:mx-0">
              <p>
                {isRTL
                  ? ARABIC_TRANSLATIONS.hero
                      .summary
                  : 'Accounting & Finance professional with 14+ years of experience across Saudi Arabia and Pakistan, specializing in financial operations, reporting, reconciliations, and ERP-based accounting.'}
              </p>
            </div>

            {/* Download CV */}
            <div
              className={`
                flex
                flex-wrap
                justify-center
                gap-3.5
                pt-2
                ${
                  isRTL
                    ? 'lg:justify-start'
                    : 'lg:justify-start'
                }
              `}
            >
              <button
                type="button"
                onClick={onOpenCV}
                className="
                  inline-flex
                  cursor-pointer
                  select-none
                  touch-manipulation
                  items-center
                  gap-2
                  rounded-lg
                  bg-[#0F2747]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  hover:bg-[#16365f]
                  hover:shadow
                "
              >
                <FileDown className="h-4 w-4" />

                <span>
                  {isRTL
                    ? ARABIC_TRANSLATIONS.hero
                        .downloadCv
                    : 'Download CV'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
