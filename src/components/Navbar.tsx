import { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { ThemeMode } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface NavbarProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onOpenCV?: () => void;
  isExperienceSelected?: boolean;
  onSelectNav?: (href: string) => void;
}

export function Navbar({
  currentTheme,
  onThemeChange,
  isExperienceSelected = false,
  onSelectNav,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopExpOpen, setDesktopExpOpen] = useState(false);
  const [mobileExpOpen, setMobileExpOpen] = useState(false);
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

  const toggleTheme = () => {
    onThemeChange(currentTheme === 'dark' ? 'light' : 'dark');
  };

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
    setMobileExpOpen(false);
    setDesktopExpOpen(false);
    onSelectNav?.(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Monogram & Name */}
          <a 
            href="#home" 
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#0F766E] rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-lg bg-[#0F2747] border border-[#0F766E]/40 text-teal-300 font-bold flex items-center justify-center text-lg tracking-wider shadow-sm group-hover:border-[#0F766E] transition-all">
              MS
            </div>
            <div>
              <span className="block text-base font-bold text-[#0F2747] dark:text-slate-100 tracking-tight leading-none group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors whitespace-nowrap">
                {isRTL ? 'محمد سلمان' : 'Muhammad Salman'}
              </span>
              <span className="block text-xs font-medium text-[#64748B] dark:text-slate-400 mt-1">
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
                      onClick={() => setDesktopExpOpen((prev) => !prev)}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-md transition-all duration-300 cursor-pointer ${
                        isHighlighted || desktopExpOpen
                          ? 'font-bold text-[#0F766E] dark:text-teal-300 bg-[#E6F4F1] dark:bg-teal-950/80 border border-[#0F766E]/30 dark:border-teal-800 shadow-2xs scale-102'
                          : 'font-medium text-[#1F2937] hover:text-[#0F766E] dark:text-slate-300 dark:hover:text-teal-400 hover:bg-[#E6F4F1]/70 dark:hover:bg-slate-800/60'
                      }`}
                      aria-expanded={desktopExpOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          desktopExpOpen ? 'rotate-180 text-[#0F766E] dark:text-teal-300' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown */}
                    {desktopExpOpen && (
                      <div
                        className={`absolute top-full ${
                          isRTL ? 'right-0' : 'left-0'
                        } mt-1 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md`}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setDesktopExpOpen(false);
                            handleNavClick('#experience');
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#1F2937] dark:text-slate-200 hover:bg-[#E6F4F1] dark:hover:bg-slate-800 hover:text-[#0F766E] dark:hover:text-teal-300 transition-colors ${
                            isRTL ? 'text-right' : 'text-left'
                          } cursor-pointer`}
                        >
                          <span>{isRTL ? (ARABIC_TRANSLATIONS.nav.experienceFullTime || 'الخبرة بدوام كامل') : 'Full-Time Experience'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setDesktopExpOpen(false);
                            handleNavClick('#experience-remote');
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#1F2937] dark:text-slate-200 hover:bg-[#E6F4F1] dark:hover:bg-slate-800 hover:text-[#0F766E] dark:hover:text-teal-300 transition-colors ${
                            isRTL ? 'text-right' : 'text-left'
                          } cursor-pointer`}
                        >
                          <span>{isRTL ? (ARABIC_TRANSLATIONS.nav.experienceRemote || 'الخبرة عن بُعد / دوام جزئي') : 'Remote / Part-Time Experience'}</span>
                        </button>
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
                      ? 'font-bold text-[#0F766E] dark:text-teal-300 bg-[#E6F4F1] dark:bg-teal-950/80 border border-[#0F766E]/30 dark:border-teal-800 shadow-2xs scale-102'
                      : 'font-medium text-[#1F2937] hover:text-[#0F766E] dark:text-slate-300 dark:hover:text-teal-400 hover:bg-[#E6F4F1]/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Actions & Theme & CV */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher: English / العربية */}
            <div 
              className="inline-flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs shadow-2xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-white dark:bg-slate-900 text-[#0F766E] dark:text-teal-300 shadow-2xs'
                    : 'text-[#64748B] hover:text-[#0F2747] dark:text-slate-400 dark:hover:text-slate-200'
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
                    ? 'bg-white dark:bg-slate-900 text-[#0F766E] dark:text-teal-300 shadow-2xs'
                    : 'text-[#64748B] hover:text-[#0F2747] dark:text-slate-400 dark:hover:text-slate-200'
                }`}
                aria-label="اختر العربية"
              >
                العربية
              </button>
            </div>

            {/* Theme switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-all border border-slate-200 dark:border-slate-700 cursor-pointer shadow-2xs"
              title={
                isRTL
                  ? (currentTheme === 'dark' ? 'الوضع الليلي نشط (انقر للوضع النهاري)' : 'الوضع النهاري نشط (انقر للوضع الليلي)')
                  : (currentTheme === 'dark' ? 'Dark Mode active (click for Light Mode)' : 'Light Mode active (click for Dark Mode)')
              }
              aria-label={
                isRTL
                  ? (currentTheme === 'dark' ? 'تبديل إلى الوضع النهاري' : 'تبديل إلى الوضع الليلي')
                  : (currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode')
              }
            >
              {currentTheme === 'dark' ? (
                <>
                  <Moon className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-[11px] font-bold text-slate-200">
                    {isRTL ? 'داكن' : 'Dark'}
                  </span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-[11px] font-bold text-slate-700">
                    {isRTL ? 'نهاري' : 'Light'}
                  </span>
                </>
              )}
            </button>
          </div>

          {/* Mobile buttons: Language switch + Theme + Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            {/* Mobile Language switch */}
            <div 
              className="inline-flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] shadow-2xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-white dark:bg-slate-900 text-[#0F766E] dark:text-teal-300 shadow-2xs'
                    : 'text-[#64748B] dark:text-slate-400'
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
                    ? 'bg-white dark:bg-slate-900 text-[#0F766E] dark:text-teal-300 shadow-2xs'
                    : 'text-[#64748B] dark:text-slate-400'
                }`}
                aria-label="اختر العربية"
              >
                العربية
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-700/60 cursor-pointer"
              title={
                isRTL
                  ? (currentTheme === 'dark' ? 'الوضع الليلي نشط' : 'الوضع النهاري نشط')
                  : (currentTheme === 'dark' ? 'Dark Mode active' : 'Light Mode active')
              }
              aria-label={
                isRTL
                  ? (currentTheme === 'dark' ? 'تبديل إلى الوضع النهاري' : 'تبديل إلى الوضع الليلي')
                  : (currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode')
              }
            >
              {currentTheme === 'dark' ? (
                <Moon className="w-4 h-4 text-teal-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              aria-label={isRTL ? 'تبديل القائمة' : 'Toggle navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isExp = link.href === '#experience';
              const isHighlighted = isExp && isExperienceSelected;

              if (isExp) {
                return (
                  <div key={link.href} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileExpOpen((prev) => !prev)}
                      className={`flex items-center justify-between w-full px-3 py-2.5 ${isRTL ? 'text-right' : 'text-left'} text-sm rounded-md transition-all duration-300 cursor-pointer ${
                        isHighlighted || mobileExpOpen
                          ? 'font-bold text-[#0F766E] dark:text-teal-300 bg-[#E6F4F1] dark:bg-teal-950/80 border border-[#0F766E]/30 dark:border-teal-800'
                          : 'font-medium text-[#1F2937] dark:text-slate-200 hover:bg-[#E6F4F1]/60 dark:hover:bg-slate-800/80 hover:text-[#0F766E]'
                      }`}
                      aria-expanded={mobileExpOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExpOpen ? 'rotate-180 text-[#0F766E] dark:text-teal-300' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Mobile Sub-options */}
                    {mobileExpOpen && (
                      <div className={`mt-1 mb-2 ${isRTL ? 'pr-4 pl-2 border-r-2 mr-2' : 'pl-4 pr-2 border-l-2 ml-2'} border-[#0F766E]/40 space-y-1`}>
                        <button
                          type="button"
                          onClick={() => {
                            setMobileExpOpen(false);
                            handleNavClick('#experience');
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#1F2937] dark:text-slate-200 hover:bg-[#E6F4F1] dark:hover:bg-slate-800 rounded-md hover:text-[#0F766E] dark:hover:text-teal-300 ${
                            isRTL ? 'text-right' : 'text-left'
                          } cursor-pointer`}
                        >
                          <span>{isRTL ? (ARABIC_TRANSLATIONS.nav.experienceFullTime || 'الخبرة بدوام كامل') : 'Full-Time Experience'}</span>
                          <ChevronRight className={`w-3.5 h-3.5 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setMobileExpOpen(false);
                            handleNavClick('#experience-remote');
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#1F2937] dark:text-slate-200 hover:bg-[#E6F4F1] dark:hover:bg-slate-800 rounded-md hover:text-[#0F766E] dark:hover:text-teal-300 ${
                            isRTL ? 'text-right' : 'text-left'
                          } cursor-pointer`}
                        >
                          <span>{isRTL ? (ARABIC_TRANSLATIONS.nav.experienceRemote || 'الخبرة عن بُعد / دوام جزئي') : 'Remote / Part-Time Experience'}</span>
                          <ChevronRight className={`w-3.5 h-3.5 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 ${isRTL ? 'text-right' : 'text-left'} text-sm rounded-md transition-all duration-300 cursor-pointer ${
                    isHighlighted
                      ? 'font-bold text-[#0F766E] dark:text-teal-300 bg-[#E6F4F1] dark:bg-teal-950/80 border border-[#0F766E]/30 dark:border-teal-800'
                      : 'font-medium text-[#1F2937] dark:text-slate-200 hover:bg-[#E6F4F1]/60 dark:hover:bg-slate-800/80 hover:text-[#0F766E]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''} ${isHighlighted ? 'text-[#0F766E] dark:text-teal-300' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Language Selector */}
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
            <span className="text-xs font-semibold text-[#1F2937] dark:text-slate-300">
              {isRTL ? 'اختيار اللغة' : 'Language / اللغة'}
            </span>
            <div 
              className="inline-flex items-center p-0.5 rounded-lg bg-slate-200/80 dark:bg-slate-700/80 text-xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-white dark:bg-slate-900 text-[#0F766E] dark:text-teal-300 shadow-2xs'
                    : 'text-[#64748B] dark:text-slate-300'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  language === 'ar'
                    ? 'bg-white dark:bg-slate-900 text-[#0F766E] dark:text-teal-300 shadow-2xs'
                    : 'text-[#64748B] dark:text-slate-300'
                }`}
              >
                العربية
              </button>
            </div>
          </div>

          {/* Mobile Menu Theme Selector */}
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
            <span className="text-xs font-semibold text-[#1F2937] dark:text-slate-300">
              {isRTL ? 'المظهر' : 'Appearance'}
            </span>
            <div 
              className="inline-flex items-center p-0.5 rounded-lg bg-slate-200/80 dark:bg-slate-700/80 text-xs"
              role="group"
              aria-label="Theme selection"
            >
              <button
                type="button"
                onClick={() => onThemeChange('light')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  currentTheme === 'light'
                    ? 'bg-white dark:bg-slate-900 text-[#0F766E] dark:text-teal-300 shadow-2xs'
                    : 'text-[#64748B] dark:text-slate-300'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>{isRTL ? 'نهاري' : 'Light'}</span>
              </button>
              <button
                type="button"
                onClick={() => onThemeChange('dark')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  currentTheme === 'dark'
                    ? 'bg-white dark:bg-slate-900 text-[#0F766E] dark:text-teal-300 shadow-2xs'
                    : 'text-[#64748B] dark:text-slate-300'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-teal-400" />
                <span>{isRTL ? 'داكن' : 'Dark'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
