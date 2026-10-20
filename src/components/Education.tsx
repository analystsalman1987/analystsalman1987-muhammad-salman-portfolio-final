import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Globe, 
  BookOpen,
  ChevronDown
} from 'lucide-react';
import { EducationItem, LanguageItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';
import { DEFAULT_APP_DATA } from '../data/defaultData';

interface EducationLanguagesProps {
  education?: EducationItem[];
  languages?: LanguageItem[];
}

export function EducationLanguages({ 
  education = DEFAULT_APP_DATA.education, 
  languages = DEFAULT_APP_DATA.languages 
}: EducationLanguagesProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.education;

  // Track expanded degrees (collapsed by default)
  const [expandedEduIds, setExpandedEduIds] = useState<Set<string>>(() => new Set());

  const toggleEdu = (id: string) => {
    setExpandedEduIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="education" className="misty-portfolio relative py-20 bg-[#305879] border-b border-[#C5D5E2] transition-colors overflow-hidden" style={{ backgroundColor: '#305879' }}>
      {/* Subtle Professional Accounting & Academic Workplace Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img 
          src="/images/accounting_workplace.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.16] filter contrast-105 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#A7C6E1]/85 via-[#A7C6E1]/70 to-[#A7C6E1]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Education Section (Col-Span-7) - Clean Expandable Degree Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 h-full">
            <div className="lg:min-h-[104px] flex flex-col items-start justify-start gap-1.5">
              <span className="block text-xs font-bold tracking-widest text-[#BE9852] uppercase">
                {isRTL ? t.tag : 'Academic Background'}
              </span>
              <div>
                <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight text-[#17324A]">
                  {isRTL ? t.title : 'Education'}
                </h2>
              </div>
              <p className="mt-1 text-sm text-[#52677A]">
                {isRTL ? t.subtitle : 'Formal business administration and banking & finance higher education foundation.'}
              </p>
            </div>

            {education.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-[#F3F7FA] border border-[#C5D5E2] text-[#52677A]">
                {isRTL ? 'سيتم إضافة المعلومات قريباً.' : 'Information will be added soon.'}
              </div>
            ) : (
              <div className="space-y-4">
                {education.map((item, idx) => {
                  const isExpanded = expandedEduIds.has(item.id);
                  const arEdu = t.items.find((x) => x.id === item.id) || t.items[idx];
                  const degree = isRTL && arEdu ? arEdu.degree : item.degree;
                  const specialization = isRTL && arEdu ? arEdu.specialization : item.specialization;
                  const institution = isRTL && arEdu ? arEdu.institution : item.institution;
                  const period = isRTL && arEdu ? arEdu.period : item.period;
                  const desc = isRTL && arEdu ? arEdu.desc : 'Comprehensive academic training in corporate finance, financial accounting, banking regulations, credit analysis, and financial management.';

                  return (
                    <div
                      key={item.id}
                      className={`rounded-2xl border transition-all duration-200 shadow-xs overflow-hidden ${
                        isExpanded
                          ? 'bg-white border-[#BE9852]/60 ring-1 ring-[#BE9852]/25 shadow-md'
                          : 'bg-[#F3F7FA] border-[#C5D5E2] hover:border-[#BE9852]/60 hover:bg-white'
                      }`}
                    >
                      {/* Clickable Card Header */}
                      <button
                        type="button"
                        onClick={() => toggleEdu(item.id)}
                        aria-expanded={isExpanded}
                        aria-label={`View ${degree} details`}
                        className="w-full text-left rtl:text-right p-5 sm:p-6 cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BE9852] touch-manipulation group block"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[#BE9852]/15 text-[#BE9852] border border-[#BE9852]/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <GraduationCap className="w-6 h-6" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div>
                                <h3 className="text-base sm:text-lg font-bold text-[#17324A] group-hover:text-[#BE9852] transition-colors flex items-center gap-2 flex-wrap">
                                  <span>{degree} — {specialization}</span>
                                </h3>
                                {institution && (
                                  <p className="text-xs font-medium text-[#52677A] mt-0.5">
                                    {institution}
                                  </p>
                                )}
                              </div>

                              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap">
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#34495E] bg-[#F3F7FA] border border-[#C5D5E2] px-2.5 py-1 rounded-md">
                                  <Calendar className="w-3 h-3 text-[#BE9852]" />
                                  {period}
                                </span>

                                {/* Details expansion toggle badge */}
                                <span
                                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                                    isExpanded
                                      ? 'bg-[#BE9852] text-white shadow-2xs'
                                      : 'bg-[#F3F7FA] text-[#17324A] border border-[#C5D5E2] hover:bg-white hover:border-[#BE9852]/50 hover:text-[#BE9852]'
                                  }`}
                                  title={isRTL ? t.overviewTitle : 'Toggle academic overview'}
                                >
                                  <span>{isExpanded ? (isRTL ? t.hide : 'Hide') : (isRTL ? t.details : 'Details')}</span>
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                                      isExpanded ? 'rotate-180' : ''
                                    }`}
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>

                      {/* Expandable Details Area */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isExpanded
                            ? 'grid-rows-[1fr] opacity-100 border-t border-[#C5D5E2] bg-[#F3F7FA]'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="p-5 sm:p-6 pt-4 space-y-3 text-xs text-[#34495E]">
                            <div className="flex items-center gap-2 font-medium">
                              <BookOpen className="w-4 h-4 text-[#BE9852] shrink-0" />
                              <span>{isRTL ? t.specializationLabel : 'Specialization:'} <strong className="text-[#17324A] font-bold">{specialization}</strong></span>
                            </div>
                            <p className="leading-relaxed text-[#34495E]">
                              {desc}
                            </p>
                            {institution && (
                              <p className="text-[#52677A]">
                                {isRTL ? t.institutionLabel : 'Institution:'} <span className="font-semibold text-[#17324A]">{institution}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

            {/* Academic Foundation Callout Box */}
            <div className="p-5 rounded-2xl bg-[#F3F7FA] border border-[#C5D5E2] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#BE9852]/15 text-[#BE9852] border border-[#BE9852]/25 flex items-center justify-center shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#BE9852]">
                  {isRTL ? t.foundationTitle : 'Higher Education Foundation'}
                </h4>
                <p className="text-xs text-[#52677A] leading-relaxed">
                  {isRTL ? t.foundationDesc : 'Post-graduate degree in Business Administration with Banking & Finance specialization, combined with undergraduate business education covering financial accounting, audit, management, and quantitative finance methods.'}
                </p>
              </div>
            </div>
          </div>

          {/* Languages Section (Col-Span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 h-full">
            <div className="lg:min-h-[104px] flex flex-col items-start justify-start gap-1.5">
              <span className="block text-xs font-bold tracking-widest text-[#BE9852] uppercase">
                {isRTL ? t.languagesTag : 'Communication'}
              </span>
              <div>
                <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight text-[#17324A]">
                  {isRTL ? t.languagesTitle : 'Languages'}
                </h2>
              </div>
              <p className="mt-1 text-sm text-[#52677A]">
                {isRTL ? t.languagesSubtitle : 'Linguistic versatility supporting multinational teams, Saudi vendor dealings, and corporate correspondence.'}
              </p>
            </div>

            {languages.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-[#F3F7FA] border border-[#C5D5E2] text-[#52677A]">
                {isRTL ? 'سيتم إضافة المعلومات قريباً.' : 'Information will be added soon.'}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-[#F3F7FA] border border-[#C5D5E2] shadow-xs flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3.5 sm:space-y-4">
                  {languages.map((lang, idx) => {
                    const arLang = t.langItems.find((x) => x.id === lang.id) || t.langItems[idx];
                    const name = isRTL && arLang ? arLang.name : lang.name;
                    const notes = isRTL && arLang ? arLang.notes : lang.notes;

                    return (
                      <div
                        key={lang.id}
                        className="p-4 rounded-xl bg-white border border-[#C5D5E2] flex items-center justify-between shadow-2xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#BE9852]/15 text-[#BE9852] border border-[#BE9852]/25 flex items-center justify-center font-bold text-sm">
                            <Globe className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#17324A]">
                              {name}
                            </h4>
                            {notes && (
                              <span className="text-xs text-[#52677A]">
                                {notes}
                              </span>
                            )}
                          </div>
                        </div>

                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#BE9852]/15 text-[#8B6B32] border border-[#BE9852]/30">
                          {isRTL ? t.fluentBadge : 'Fluent / Working'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-auto pt-4 border-t border-[#C5D5E2] text-[11px] text-[#52677A] leading-relaxed">
                  {isRTL ? t.languagesNote : 'Daily professional communication with Saudi governmental portals (ZATCA), corporate bank officers, suppliers, and internal stakeholders.'}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
