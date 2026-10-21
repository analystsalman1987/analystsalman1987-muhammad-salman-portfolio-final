
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';
import { LikeButton } from './LikeButton';

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
    <footer className="bg-[#1E3A56] text-[#E2EAF2] border-t border-[#CBD5E1] transition-colors no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#CBD5E1]/40">

          {/* Brand & Title */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-[#C9A45C]/50 text-[#D8B56A] font-bold flex items-center justify-center text-base tracking-wider shadow-xs">
                MS
              </div>
              <div>
                <span className="text-base font-bold text-white block">
                  Muhammad Salman
                </span>
                <span className="text-xs text-[#D8B56A] font-medium block">
                  {isRTL
                    ? t.role
                    : (profile.professionalTitle || 'Accountant | MBA Accounting & Finance')}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#E2EAF2] max-w-md leading-relaxed">
              {isRTL
                ? t.desc
                : 'Accounting professional with 14+ years across Saudi Arabia and Pakistan specializing in financial reporting, bookkeeping, reconciliations, month-end closing, ERP systems, and ZATCA VAT compliance.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E2EAF2] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#D8B56A]" />
              <span>
                {isRTL
                  ? t.location
                  : (profile.location || 'Dammam, Saudi Arabia')}
              </span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold text-[#E5C78E] uppercase tracking-wider text-[11px] mb-3">
              {isRTL ? t.contactTitle : 'Direct Contact'}
            </h4>

            <div className="flex items-center gap-2 text-[#E2EAF2]">
              <Mail className="w-3.5 h-3.5 text-[#D8B56A] shrink-0" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-[#E5C78E] transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex items-center gap-2 text-[#E2EAF2]">
              <Phone className="w-3.5 h-3.5 text-[#D8B56A] shrink-0" />
              <a
                href={`tel:${profile.primaryPhone.replace(/\s+/g, '')}`}
                className="hover:text-[#E5C78E] transition-colors"
                dir="ltr"
              >
                {profile.primaryPhone}
              </a>
            </div>

            <div className="flex items-center gap-2 text-[#E2EAF2]">
              <Phone className="w-3.5 h-3.5 text-[#D8B56A] shrink-0" />
              <a
                href={`tel:${profile.altPhone.replace(/\s+/g, '')}`}
                className="hover:text-[#E5C78E] transition-colors"
                dir="ltr"
              >
                {isRTL
                  ? `${t.altLabel} ${profile.altPhone}`
                  : `Alt: ${profile.altPhone}`}
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold text-[#E5C78E] uppercase tracking-wider text-[11px] mb-3">
              {isRTL ? t.linksTitle : 'Quick Links'}
            </h4>

            <ul className="space-y-2 text-[#E2EAF2]">
              <li>
                <button
                  type="button"
                  onClick={onOpenCV}
                  className="hover:text-[#E5C78E] transition-colors text-start cursor-pointer select-none touch-manipulation"
                >
                  {isRTL ? t.cvLink : 'View & Print CV / Resume'}
                </button>
              </li>

              <li>
                <a
                  href="#experience"
                  className="hover:text-[#E5C78E] transition-colors"
                >
                  {isRTL ? t.experienceLink : 'Career History'}
                </a>
              </li>

              <li>
                <a
                  href="#software"
                  className="hover:text-[#E5C78E] transition-colors"
                >
                  {isRTL ? t.softwareLink : 'ERP & Accounting Software'}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D5E2EC]">
          <div>
            © {currentYear} Muhammad Salman.{' '}
            {isRTL ? t.copyright : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-3">
            <LikeButton />

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#294C6B] text-[#E2EAF2] hover:bg-[#D8B56A] hover:text-white border border-[#CBD5E1]/40 text-xs transition-colors cursor-pointer select-none touch-manipulation"
            >
              <span>{isRTL ? t.backToTop : 'Back to top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
