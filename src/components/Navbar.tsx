import { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { ThemeMode } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface NavbarProps {
  currentTheme?: ThemeMode;
  onThemeChange?: (theme: ThemeMode) => void;
  onOpenCV?: () => void;
  isExperienceSelected?: boolean;
  onSelectNav?: (href: string) => void;
}

export function Navbar({
  isExperienceSelected = false,
  onSelectNav,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopExpOpen, setDesktopExpOpen] = useState(false);
  const desktopExpRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopExpRef.current && !desktopExpRef.current.contains(e.target as Node)) {
        setDesktopExpOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: isRTL ? ARABIC_TRANSLATIONS.nav.home : 'Home', href: '#home' },
    { name: isRTL ? ARABIC_TRANSLATIONS.nav.about : 'About', href: '#about' },
    { name: isRTL ? ARABIC_TRANSLATIONS.nav.expertise : 'Expertise', href: '#expertise' },
    { name: isRTL ? ARABIC_TRANSLATIONS.nav.experience : 'Experience', href: '#experience' },
    { name: isRTL ? ARABIC_TRANSLATIONS.nav.software : 'ERP & Software', href: '#software' },
    { name: isRTL ? ARABIC_TRANSLATIONS.nav.education : 'Education', href: '#education' },
    { name: isRTL ? ARABIC_TRANSLATIONS.nav.contact : 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setDesktopExpOpen(false);
    onSelectNav?.(href);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#071827]/95 backdrop-blur-md border-b border-[#0D2538] transition-colors duration-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Monogram & Name */}
          <a 
            href="#home" 
            className="flex items-center gap-3.5 group focus:outline-hidden focus:ring-2 focus:ring-[#D8B56A] rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-lg bg-[#0D2538] border border-[#D8B56A]/50 text-[#D8B56A] font-extrabold flex items-center justify-center text-lg tracking-wider shadow-sm group-hover:border-[#D8B56A] transition-all">
              MS
            </div>
            <div>
              <span className="block text-base font-bold text-[#F8FAFC] tracking-tight leading-none group-hover:text-[#D8B56A] transition-colors whitespace-nowrap">
                {isRTL ? 'محمد سلمان' : 'Muhammad Salman'}
              </span>
              <span className="block text-xs font-medium text-[#CBD5E1] mt-1">
                {isRTL ? 'محاسب' : 'Accountant'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isExp = link.href === '#experience';
              const isHighlighted = isExp && isExperienceSelected;

              if (isExp) {
                return (
                  <div
                    key={link.href}
                    ref={desktopExpRef}
                    className="relative"
                    onMouseEnter={() => setDesktopExpOpen(true)}
                    onMouseLeave={() => setDesktopExpOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('experience-show-categories'));
                        setDesktopExpOpen(false);
                        handleNavClick('#experience');
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-md transition-all duration-300 cursor-pointer ${
                        isHighlighted || desktopExpOpen
                          ? 'font-bold text-[#D8B56A] bg-[#0D2538] border border-[#D8B56A]/50 shadow-xs scale-102'
                          : 'font-medium text-[#CBD5E1] hover:text-[#D8B56A] hover:bg-[#0D2538]/70'
                      }`}
                      aria-expanded={desktopExpOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          desktopExpOpen ? 'rotate-180 text-[#D8B56A]' : 'text-[#CBD5E1]'
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown */}
                    {desktopExpOpen && (
                      <div
                        className={`absolute top-full ${
                          isRTL ? 'right-0' : 'left-0'
                        } pt-1.5 w-64 z-50 animate-in fade-in zoom-in-95 duration-150`}
                      >
                        <div className="bg-[#0D2538] rounded-xl shadow-2xl border border-[#132E43] py-1.5 backdrop-blur-md">
                          <button
                            type="button"
                            onClick={() => {
                              window.dispatchEvent(new CustomEvent('experience-open-full-time'));
                              setDesktopExpOpen(false);
                              handleNavClick('#experience');
                            }}
                            className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#CBD5E1] hover:bg-[#132E43] hover:text-[#D8B56A] transition-colors ${
                              isRTL ? 'text-right' : 'text-left'
                            } cursor-pointer`}
                          >
                            <span>{isRTL ? (ARABIC_TRANSLATIONS.nav.experienceFullTime || 'الخبرة بدوام كامل') : 'Full-Time Experience'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              window.dispatchEvent(new CustomEvent('experience-open-remote'));
                              setDesktopExpOpen(false);
                              handleNavClick('#experience');
                            }}
                            className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#CBD5E1] hover:bg-[#132E43] hover:text-[#D8B56A] transition-colors ${
                              isRTL ? 'text-right' : 'text-left'
                            } cursor-pointer`}
                          >
                            <span>{isRTL ? (ARABIC_TRANSLATIONS.nav.experienceRemote || 'الخبرة عن بُعد / دوام جزئي') : 'Remote / Part-Time Experience'}</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 text-sm rounded-md transition-all duration-300 cursor-pointer ${
                    isHighlighted
                      ? 'font-bold text-[#D8B56A] bg-[#0D2538] border border-[#D8B56A]/50 shadow-xs scale-102'
                      : 'font-medium text-[#CBD5E1] hover:text-[#D8B56A] hover:bg-[#0D2538]/70'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Language Switcher (Theme toggle removed) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <div 
              className="inline-flex items-center p-0.5 rounded-lg bg-[#0D2538] border border-[#132E43] text-xs shadow-2xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#132E43] text-[#D8B56A] font-bold shadow-2xs'
                    : 'text-[#CBD5E1] hover:text-[#F8FAFC]'
                }`}
                aria-label="Select English"
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  language === 'ar'
                    ? 'bg-[#132E43] text-[#D8B56A] font-bold shadow-2xs'
                    : 'text-[#CBD5E1] hover:text-[#F8FAFC]'
                }`}
                aria-label="اختر العربية"
              >
                العربية
              </button>
            </div>
          </div>

          {/* Mobile buttons: Language switch + Hamburger (Theme toggle removed) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <div 
              className="inline-flex items-center p-0.5 rounded-lg bg-[#0D2538] border border-[#132E43] text-[11px] shadow-2xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#132E43] text-[#D8B56A] font-bold shadow-2xs'
                    : 'text-[#CBD5E1]'
                }`}
                aria-label="Select English"
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                  language === 'ar'
                    ? 'bg-[#132E43] text-[#D8B56A] font-bold shadow-2xs'
                    : 'text-[#CBD5E1]'
                }`}
                aria-label="اختر العربية"
              >
                العربية
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#0D2538] rounded-lg cursor-pointer select-none touch-manipulation transition-colors"
              aria-label={isRTL ? 'تبديل القائمة' : 'Toggle navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#0D2538] bg-[#071827] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isExp = link.href === '#experience';
              const isHighlighted = isExp && isExperienceSelected;

              if (isExp) {
                return (
                  <div key={link.href} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('experience-show-categories'));
                        handleNavClick('#experience');
                      }}
                      className={`flex items-center justify-between w-full px-3 py-2.5 ${isRTL ? 'text-right' : 'text-left'} text-sm rounded-md transition-all duration-300 cursor-pointer touch-manipulation ${
                        isHighlighted
                          ? 'font-bold text-[#D8B56A] bg-[#0D2538] border border-[#D8B56A]/50'
                          : 'font-medium text-[#CBD5E1] hover:bg-[#0D2538] hover:text-[#D8B56A]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''} ${isHighlighted ? 'text-[#D8B56A]' : 'text-[#CBD5E1]'}`} />
                    </button>

                    {/* Mobile Experience Sub-options */}
                    <div className={`my-1 ${isRTL ? 'pr-3 border-r-2 mr-2' : 'pl-3 border-l-2 ml-2'} border-[#D8B56A]/30 space-y-1`}>
                      <button
                        type="button"
                        onClick={() => {
                          window.dispatchEvent(new CustomEvent('experience-open-full-time'));
                          handleNavClick('#experience');
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#CBD5E1] hover:bg-[#0D2538] rounded-md hover:text-[#D8B56A] cursor-pointer touch-manipulation ${
                          isRTL ? 'text-right' : 'text-left'
                        }`}
                      >
                        <span>{isRTL ? (ARABIC_TRANSLATIONS.nav.experienceFullTime || 'الخبرة بدوام كامل') : 'Full-Time Experience'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 text-[#CBD5E1] ${isRTL ? 'rotate-180' : ''}`} />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          window.dispatchEvent(new CustomEvent('experience-open-remote'));
                          handleNavClick('#experience');
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#CBD5E1] hover:bg-[#0D2538] rounded-md hover:text-[#D8B56A] cursor-pointer touch-manipulation ${
                          isRTL ? 'text-right' : 'text-left'
                        }`}
                      >
                        <span>{isRTL ? (ARABIC_TRANSLATIONS.nav.experienceRemote || 'الخبرة عن بُعد / دوام جزئي') : 'Remote / Part-Time Experience'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 text-[#CBD5E1] ${isRTL ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 ${isRTL ? 'text-right' : 'text-left'} text-sm rounded-md transition-all duration-300 cursor-pointer touch-manipulation ${
                    isHighlighted
                      ? 'font-bold text-[#D8B56A] bg-[#0D2538] border border-[#D8B56A]/50'
                      : 'font-medium text-[#CBD5E1] hover:bg-[#0D2538] hover:text-[#D8B56A]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''} ${isHighlighted ? 'text-[#D8B56A]' : 'text-[#CBD5E1]'}`} />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Language Selector */}
          <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#0D2538] border border-[#132E43]">
            <span className="text-xs font-semibold text-[#CBD5E1]">
              {isRTL ? 'اختيار اللغة' : 'Language / اللغة'}
            </span>
            <div 
              className="inline-flex items-center p-0.5 rounded-lg bg-[#132E43] text-xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#0D2538] text-[#D8B56A] font-bold shadow-2xs'
                    : 'text-[#CBD5E1]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  language === 'ar'
                    ? 'bg-[#0D2538] text-[#D8B56A] font-bold shadow-2xs'
                    : 'text-[#CBD5E1]'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
