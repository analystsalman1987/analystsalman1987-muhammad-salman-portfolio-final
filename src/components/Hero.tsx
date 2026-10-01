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
  const { isRTL } = useLanguage();

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
            if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
              setIsHomeActive(true);
            }
          });
        },
        { threshold: [0.2] }
      );
      observer.observe(homeEl);
    }

    // Listen to clicks on navigation links pointing to #home
    const handleHomeClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a, button');
      if (target) {
        const href = target.getAttribute('href') || target.getAttribute('data-href');
        const text = target.textContent?.trim().toLowerCase();
        if (href === '#home' || text === 'home') {
          setIsHomeActive(true);
        }
      }
    };

    document.addEventListener('click', handleHomeClick);

    return () => {
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('popstate', checkHash);
      document.removeEventListener('click', handleHomeClick);
      if (observer && homeEl) {
        observer.unobserve(homeEl);
      }
    };
  }, []);

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Subtle Corporate Accounting & Finance Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-700 ease-in-out"
        aria-hidden="true"
      >
        <img 
          src="/images/hero_accounting_bg.jpg" 
          alt="" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[75%_center] lg:object-[82%_center] opacity-[0.62] dark:opacity-[0.26] filter contrast-105 select-none transition-transform duration-1000 ease-out"
          style={{
            transform: isHomeActive ? 'scale(1.008)' : 'scale(1.0)',
          }}
          loading="eager"
        />
        {/* Soft, light gradient overlay to keep finance-office background clearly visible yet gentle and non-distracting */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/60 to-white/35 dark:from-slate-900/90 dark:via-slate-900/75 dark:to-slate-900/50" />
      </div>

      {/* Subtle corporate ambient background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* LEFT SIDE: Existing ORIGINAL Circular Profile Photo & Compact Company Card */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-center justify-center">
            
            {/* Circular Profile Photo */}
            <div className="relative">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.fullName || 'Muhammad Salman'}
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover object-top border-4 border-[#0F766E]/40 dark:border-teal-500/40 shadow-xl shadow-slate-900/10 dark:shadow-slate-950/30"
                  loading="eager"
                />
              ) : (
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[#0F2747] via-slate-900 to-[#0F766E]/40 border-4 border-[#0F766E]/40 flex flex-col items-center justify-center text-center p-4 shadow-xl">
                  <span className="text-4xl font-extrabold tracking-widest text-teal-300">
                    MS
                  </span>
                </div>
              )}
            </div>

            {/* Compact Professional Current Company Card */}
            <div className="mt-4 sm:mt-5 px-4 py-3 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-[0_6px_18px_rgba(15,23,42,0.06)] backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#087d69]/55 hover:shadow-[0_18px_38px_rgba(8,125,105,0.18)] dark:hover:border-teal-400/60 dark:hover:shadow-[0_18px_38px_rgba(20,184,166,0.16)] text-center max-w-[280px] sm:max-w-[300px] w-full cursor-default select-none">
              <div className="text-[13px] sm:text-sm font-extrabold leading-snug tracking-tight hero-company-3d">
                {isRTL ? (ARABIC_TRANSLATIONS.hero.companyArabic || 'شركة أحمد يحيى اليامي للمقاولات') : 'Ahmed Yahya Alyami Contracting Co.'}
              </div>
              <div className="text-xs font-semibold text-[#0F766E] dark:text-teal-400 mt-1 tracking-normal">
                {isRTL ? 'فبراير 2025 – حتى الآن' : 'Feb 2025 – Present'}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Main Hero Copy */}
          <div className={`lg:col-span-8 xl:col-span-8 space-y-6 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#E6F4F1] text-[#0F766E] dark:bg-teal-950/60 dark:text-teal-300 border border-[#0F766E]/30 dark:border-teal-800/80 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#0F766E] dark:text-teal-400 shrink-0" />
              <span>{isRTL ? ARABIC_TRANSLATIONS.hero.location : 'Dammam, Saudi Arabia'}</span>
            </div>

            {/* Name, Designation & Education */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="main-heading-3d text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                {isRTL ? 'محمد سلمان' : 'MUHAMMAD SALMAN'}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#0F766E] dark:text-teal-400 tracking-tight">
                {isRTL ? ARABIC_TRANSLATIONS.hero.role : 'Accountant'}
              </p>
              <p className="text-base sm:text-lg font-semibold text-[#0F2747] dark:text-slate-200 whitespace-normal sm:whitespace-nowrap">
                {isRTL ? (ARABIC_TRANSLATIONS.hero.degreeCombined || 'ماجستير وبكالوريوس (المحاسبة والمالية)') : 'MBA & BBA (Accounting & Finance)'}
              </p>
            </div>

            {/* Approved Short Professional Introduction */}
            <div className="text-sm sm:text-base text-[#1F2937] dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              <p>
                {isRTL 
                  ? ARABIC_TRANSLATIONS.hero.summary
                  : 'Accounting & Finance professional with 14+ years of experience across Saudi Arabia and Pakistan, specializing in financial operations, reporting, reconciliations, and ERP-based accounting.'
                }
              </p>
            </div>

            {/* Call to action buttons */}
            <div className={`pt-2 flex flex-wrap gap-3.5 justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}>
              <button
                type="button"
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0F2747] hover:bg-[#16365f] text-white font-semibold text-sm transition-all shadow-sm hover:shadow cursor-pointer select-none touch-manipulation"
              >
                <FileDown className="w-4 h-4" />
                <span>{isRTL ? ARABIC_TRANSLATIONS.hero.downloadCv : 'Download CV'}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
