import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

interface FooterProps {
  profile: ProfileInfo;
  onOpenCV: () => void;
}

export function Footer({ profile, onOpenCV }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F2747] dark:bg-[#DEE5EC] text-slate-300 dark:text-[#334155] border-t border-slate-800 dark:border-[#CBD5E1] transition-colors no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 dark:border-[#CBD5E1]">
          
          {/* Brand & Title */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F2747] dark:bg-white border border-teal-500/50 text-teal-300 dark:text-[#0F766E] font-bold flex items-center justify-center text-base tracking-wider shadow-xs">
                MS
              </div>
              <div>
                <span className="text-base font-bold text-white dark:text-[#0F2747] block">
                  Muhammad Salman
                </span>
                <span className="text-xs text-teal-400 dark:text-[#0F766E] font-medium block">
                  {isRTL ? t.role : (profile.professionalTitle || 'Accountant | MBA Accounting & Finance')}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300/80 dark:text-[#475569] max-w-md leading-relaxed">
              {isRTL ? t.desc : 'Accounting professional with 14+ years across Saudi Arabia and Pakistan specializing in financial reporting, bookkeeping, reconciliations, month-end closing, ERP systems, and ZATCA VAT compliance.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300/80 dark:text-[#475569] pt-1">
              <MapPin className="w-3.5 h-3.5 text-teal-400 dark:text-[#0F766E]" />
              <span>{isRTL ? t.location : (profile.location || 'Dammam, Saudi Arabia')}</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold text-white dark:text-[#0F2747] uppercase tracking-wider text-[11px] mb-3">
              {isRTL ? t.contactTitle : 'Direct Contact'}
            </h4>
            <div className="flex items-center gap-2 text-slate-300 dark:text-[#334155]">
              <Mail className="w-3.5 h-3.5 text-teal-400 dark:text-[#0F766E] shrink-0" />
              <a href={`mailto:${profile.email}`} className="hover:text-white dark:hover:text-[#0F766E] transition-colors">
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-300 dark:text-[#334155]">
              <Phone className="w-3.5 h-3.5 text-teal-400 dark:text-[#0F766E] shrink-0" />
              <a href={`tel:${profile.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-white dark:hover:text-[#0F766E] transition-colors" dir="ltr">
                {profile.primaryPhone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-400 dark:text-[#64748B]">
              <Phone className="w-3.5 h-3.5 text-slate-500 dark:text-[#64748B] shrink-0" />
              <span dir="ltr">{isRTL ? `${t.altLabel} ${profile.altPhone}` : `Alt: ${profile.altPhone}`}</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold text-white dark:text-[#0F2747] uppercase tracking-wider text-[11px] mb-3">
              {isRTL ? t.linksTitle : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenCV}
                  className="hover:text-teal-300 dark:hover:text-[#0F766E] transition-colors text-start cursor-pointer"
                >
                  {isRTL ? t.cvLink : 'View & Print CV / Resume'}
                </button>
              </li>
              <li>
                <a href="#experience" className="hover:text-teal-300 dark:hover:text-[#0F766E] transition-colors">
                  {isRTL ? t.experienceLink : 'Career History'}
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-teal-300 dark:hover:text-[#0F766E] transition-colors">
                  {isRTL ? t.softwareLink : 'ERP & Accounting Software'}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-[#64748B]">
          <div>
            © {currentYear} Muhammad Salman. {isRTL ? t.copyright : 'All rights reserved.'}
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 dark:bg-white text-slate-300 dark:text-[#334155] hover:bg-[#0F766E] dark:hover:bg-[#0F766E] hover:text-white dark:hover:text-white border dark:border-[#CBD5E1] text-xs transition-colors cursor-pointer"
          >
            <span>{isRTL ? t.backToTop : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
