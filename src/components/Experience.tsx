import { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronDown,
  Briefcase 
} from 'lucide-react';
import { WorkExperienceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';
import alyamiLogo from '../assets/alyami-logo.png';

interface ExperienceProps {
  experience: WorkExperienceItem[];
  isSelected?: boolean;
  onToggleSelect?: () => void;
}

interface SoftwareChip {
  name: string;
  logo: string;
  logoClass?: string;
}

const JOB_SOFTWARE_MAP: Record<string, SoftwareChip[]> = {
  'job-1': [
    { name: 'OFIS (Powered by Oracle)', logo: '/images/software/oracle-logo.svg', logoClass: 'h-3.5 sm:h-4 w-auto object-contain' },
  ],
  'job-2': [
    { name: 'Arqami', logo: '/images/software/Arqami logo.png', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' },
    { name: 'Daftra', logo: '/images/software/Daftra logo.png', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' },
  ],
  'job-3': [
    { name: 'Delta Financial', logo: '/images/software/delta-logo.svg', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' },
  ],
  'job-4': [
    { name: 'QuickBooks', logo: '/images/software/quickbooks-logo.svg', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' },
  ],
  'job-5': [
    { name: 'Peachtree', logo: '/images/software/Peachtree logo.png', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' },
  ],
  'job-6': [
    { name: 'SMACC', logo: '/images/software/smacc-logo.png', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' },
  ],
};

const getJobSoftware = (jobId: string, company: string): SoftwareChip[] => {
  if (JOB_SOFTWARE_MAP[jobId]) return JOB_SOFTWARE_MAP[jobId];
  const comp = company.toLowerCase();
  if (comp.includes('alyami')) return JOB_SOFTWARE_MAP['job-1'];
  if (comp.includes('iqtat')) return JOB_SOFTWARE_MAP['job-2'];
  if (comp.includes('palestine')) return JOB_SOFTWARE_MAP['job-3'];
  if (comp.includes('raya')) return JOB_SOFTWARE_MAP['job-4'];
  if (comp.includes('waheed')) return JOB_SOFTWARE_MAP['job-5'];
  if (comp.includes('honda')) return JOB_SOFTWARE_MAP['job-6'];
  return [];
};

export function Experience({ experience, isSelected = false, onToggleSelect }: ExperienceProps) {
  // All cards collapsed by default
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.experience;

  if (!experience || experience.length === 0) {
    return (
      <section id="experience" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500">
          {isRTL ? 'سيتم إضافة المعلومات قريباً.' : 'Information will be added soon.'}
        </div>
      </section>
    );
  }

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allExpanded = experience.length > 0 && expandedIds.size === experience.length;

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(experience.map((j) => j.id)));
    }
  };

  return (
    <section 
      id="experience" 
      className="relative py-20 scroll-mt-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      {/* Subtle Professional Background Image for Experience */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img 
          src="/images/experience_background.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.16] dark:opacity-[0.12] filter contrast-105 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/92 dark:from-slate-900/90 dark:via-slate-900/75 dark:to-slate-900/92" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col items-start gap-1.5 max-w-3xl">
            <span className="block text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
              {isRTL ? t.tag : 'Career Timeline'}
            </span>
            <div>
              <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight">
                {isRTL ? t.title : 'Work Experience'}
              </h2>
            </div>
            <p className="mt-1 text-sm text-[#64748B] dark:text-slate-400">
              {isRTL ? t.subtitle : 'A sustained record of financial management, regulatory adherence, and accounting across manufacturing, trade, hospitality, and corporate sectors in Saudi Arabia and Pakistan.'}
            </p>
          </div>

          {/* Controls: toggle background test effect & expand/collapse all */}
          <div className="self-start sm:self-auto flex items-center gap-2 flex-wrap">
            {onToggleSelect && (
              <button
                type="button"
                onClick={onToggleSelect}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#E6F4F1] text-[#0F766E] border-[#0F766E]/40 dark:bg-teal-950/70 dark:text-teal-300 dark:border-teal-700/60 shadow-2xs'
                    : 'bg-[#F4F6F8] text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                }`}
                title={isRTL ? t.bgTitle : 'Toggle subtle background image effect (Test)'}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isSelected ? 'bg-[#0F766E] dark:bg-teal-400 animate-pulse' : 'bg-slate-400'}`} />
                <span>{isSelected ? (isRTL ? t.bgActive : 'Background: Active') : (isRTL ? t.bgInactive : 'Background: Inactive')}</span>
              </button>
            )}

            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#1F2937] dark:text-slate-300 bg-[#F4F6F8] hover:bg-[#E6F4F1] dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#0F766E] dark:text-teal-400" />
              <span>{allExpanded ? (isRTL ? t.collapseAll : 'Collapse All') : (isRTL ? t.expandAll : 'Expand All')}</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className={`relative ${isRTL ? 'border-r-2 mr-3 sm:mr-4 pr-6 sm:pr-8' : 'border-l-2 ml-3 sm:ml-4 pl-6 sm:pl-8'} border-slate-200 dark:border-slate-800 space-y-8 sm:space-y-10`}>
          {experience.map((job, jobIdx) => {
            const isExpanded = expandedIds.has(job.id);
            const arJob = t.jobs.find((j) => j.id === job.id) || t.jobs[jobIdx];
            const role = isRTL && arJob ? arJob.role : job.role;
            const companyName = isRTL && arJob?.companyArabic ? arJob.companyArabic : job.company;
            const location = isRTL && arJob ? arJob.location : job.location;
            const period = isRTL && arJob ? arJob.period : job.period;
            const responsibilities = isRTL && arJob ? arJob.responsibilities : job.responsibilities;
            const respCount = responsibilities?.length || 0;
            const isAlyami = job.id === 'job-1' || job.company.toLowerCase().includes('alyami');
            const isHonda = job.company.toLowerCase().includes('honda');
            const isAlRaya = job.id === 'job-4' || job.company.toLowerCase().includes('raya');
            const isPalestine = job.id === 'job-3' || job.company.toLowerCase().includes('palestine');

            return (
              <div key={job.id} className="relative group">
                
                {/* Timeline marker node */}
                <div 
                  className={`absolute ${isRTL ? '-right-[31px] sm:-right-[39px]' : '-left-[31px] sm:-left-[39px]'} top-6 w-4 h-4 rounded-full border-2 transition-all ${
                    job.isCurrent
                      ? 'bg-[#0F766E] border-[#E6F4F1] dark:border-teal-950 ring-4 ring-[#0F766E]/20'
                      : isExpanded
                        ? 'bg-[#0F766E] border-[#E6F4F1] dark:border-teal-800 ring-4 ring-[#0F766E]/20'
                        : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600 group-hover:border-[#0F766E] group-hover:scale-110'
                  }`}
                />

                {/* Card Container */}
                <div 
                  className={`rounded-2xl border transition-all duration-200 shadow-xs overflow-hidden ${
                    isExpanded
                      ? 'border-[#0F766E]/40 dark:border-teal-500/40 ring-1 ring-[#0F766E]/20 bg-white dark:bg-slate-800/60 shadow-sm'
                      : 'bg-[#F4F6F8] dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                  }`}
                >
                  
                  {/* Clickable Header Button / Summary Area */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleExpand(job.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpand(job.id);
                      }
                    }}
                    aria-expanded={isExpanded}
                    className="relative p-5 sm:p-6 cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F766E]"
                  >
                    <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                      {/* LEFT SIDE: 1. Company Name, 2. Designation / Job Title, 3. Location */}
                      <div className="space-y-1 sm:space-y-1.5 min-w-0 sm:max-w-[44%]">
                        {/* 1. Company Name at the top with subtle professional 3D effect */}
                        <h3 className="company-3d-text text-lg sm:text-xl font-extrabold text-[#0F2747] dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors leading-snug">
                          {companyName}
                        </h3>

                        {/* 2. Designation / Job Title directly below Company Name */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm sm:text-base font-bold text-[#0F766E] dark:text-teal-400">
                            {role}
                          </span>
                          {job.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E6F4F1] text-[#0F766E] dark:bg-teal-950/80 dark:text-teal-300 border border-[#0F766E]/30 dark:border-teal-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse" />
                              {isRTL ? t.presentRole : 'Present Role'}
                            </span>
                          )}
                        </div>

                        {/* 3. Location directly below Designation */}
                        <div className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 shrink-0 text-[#0F766E] dark:text-teal-400" />
                          <span>{location}</span>
                        </div>
                      </div>

                      {/* CENTER / RESPONSIBILITIES BUTTON: Clean, slightly smaller, light/transparent appearance, consistent across all 6 cards */}
                      <div className="flex justify-center sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:bottom-2 z-10 pointer-events-none">
                        <div 
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium leading-none tracking-tight transition-all pointer-events-auto cursor-pointer ${
                            isExpanded
                              ? 'bg-teal-600/[0.08] hover:bg-teal-600/[0.14] text-[#0F766E] dark:text-teal-200 dark:bg-teal-400/[0.10] border border-teal-500/30 shadow-2xs'
                              : 'bg-teal-600/[0.04] hover:bg-teal-600/[0.09] text-[#0F766E] dark:text-teal-300 dark:bg-teal-400/[0.04] border border-teal-500/20 shadow-2xs backdrop-blur-2xs'
                          }`}
                        >
                          <span>{isRTL ? 'المسؤوليات' : 'Responsibilities'}</span>
                          <ChevronDown 
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-300 ease-out ${
                              isExpanded ? 'rotate-180 text-[#0F766E] dark:text-teal-300' : 'text-[#0F766E] dark:text-teal-400'
                            }`} 
                          />
                        </div>
                      </div>

                      {/* RIGHT SIDE: Company logo on right, Employment date positioned neatly below the logo */}
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/60 sm:max-w-[42%]">
                        {/* Company Logo (100% Transparent Background, balanced height) */}
                        {isAlyami && (
                          <span className="inline-flex items-center justify-center sm:justify-end bg-transparent h-7 sm:h-8 min-w-[52px] sm:min-w-[60px]">
                            <img
                              src={alyamiLogo}
                              alt="Ahmed Yahya Alyami Contracting Co."
                              referrerPolicy="no-referrer"
                              className="h-6 sm:h-7.5 w-auto object-contain max-w-[120px]"
                            />
                          </span>
                        )}

                        {isPalestine && (
                          <span className="inline-flex items-center justify-center sm:justify-end bg-transparent h-7 sm:h-8 min-w-[52px] sm:min-w-[60px]">
                            <img
                              src="/images/palestine-hotel-logo.png"
                              alt="Palestine Hotel Makkah"
                              referrerPolicy="no-referrer"
                              className="h-6 sm:h-7.5 w-auto object-contain max-w-[95px]"
                            />
                          </span>
                        )}

                        {isAlRaya && (
                          <span className="inline-flex items-center justify-center sm:justify-end bg-transparent h-7 sm:h-8 min-w-[52px] sm:min-w-[60px]">
                            <img
                              src="/images/alraya-logo.svg"
                              alt="Al Raya Specialties"
                              referrerPolicy="no-referrer"
                              className="h-6 sm:h-7.5 w-auto object-contain max-w-[95px]"
                            />
                          </span>
                        )}

                        {isHonda && (
                          <span className="inline-flex items-center justify-center sm:justify-end bg-transparent h-7 sm:h-8 min-w-[52px] sm:min-w-[60px]">
                            <img
                              src="/images/honda-logo.svg"
                              alt="Honda Canal Bank"
                              referrerPolicy="no-referrer"
                              className="h-6 sm:h-7.5 w-auto object-contain max-w-[95px] text-slate-800 dark:text-slate-200"
                            />
                          </span>
                        )}

                        {/* 4. Employment Period / Date directly below logo */}
                        <div className="inline-flex items-center gap-1 text-[11px] font-medium text-[#1F2937] dark:text-slate-300 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800">
                          <Calendar className="w-3 h-3 text-[#0F766E] dark:text-teal-400 shrink-0" />
                          <span>{period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Responsibilities Content (Smooth CSS Grid Transition) */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded 
                        ? 'grid-rows-[1fr] opacity-100 border-t border-slate-200/90 dark:border-slate-700/70 bg-white dark:bg-slate-900/40' 
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden relative">
                      
                      {/* Official Ahmed Yahya Alyami Watermark (Large subtle watermark on right side with exact 18% opacity) */}
                      {isAlyami && (
                        <div 
                          className={`absolute ${isRTL ? 'left-2 sm:left-6 md:left-8 justify-start' : 'right-2 sm:right-6 md:right-8 justify-end'} bottom-3 sm:bottom-6 pointer-events-none select-none z-0 transition-all duration-500 ease-out flex items-end ${
                            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                          }`}
                          aria-hidden="true"
                        >
                          <div className="relative w-44 sm:w-72 md:w-96 lg:w-[440px] max-w-[50vw]">
                            <img
                              src={alyamiLogo}
                              alt="Ahmed Yahya Alyami"
                              referrerPolicy="no-referrer"
                              className="w-full h-auto object-contain opacity-[0.18] pointer-events-none select-none drop-shadow-xs"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      )}

                      <div className="relative z-10 p-5 sm:p-6 pt-5">
                        <div className="flex items-center justify-between mb-3.5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] dark:text-slate-400 flex items-center gap-2">
                            <span>{isRTL ? t.deliverablesHeader : 'Key Responsibilities & Deliverables'}</span>
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#F4F6F8] dark:bg-slate-800 text-[#64748B] dark:text-slate-400">
                              {respCount} {respCount === 1 ? (isRTL ? t.duty : 'duty') : (isRTL ? t.duties : 'duties')}
                            </span>
                          </h4>
                        </div>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {responsibilities.map((resp, idx) => {
                            const colonIndex = resp.indexOf(':');
                            const hasHeading = colonIndex > 0 && colonIndex < 45;
                            const heading = hasHeading ? resp.slice(0, colonIndex) : '';
                            const detail = hasHeading ? resp.slice(colonIndex + 1).trim() : resp;

                            return (
                              <li 
                                key={idx} 
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2937] dark:text-slate-300 bg-[#F4F6F8]/90 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-xs"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-teal-400 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">
                                  {hasHeading ? (
                                    <>
                                      <strong className="font-bold text-[#0F2747] dark:text-white">{heading}:</strong>{' '}
                                      {detail}
                                    </>
                                  ) : (
                                    resp
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ul>

                        {/* Software Information Row */}
                        {(() => {
                          const softwareList = getJobSoftware(job.id, job.company);
                          if (!softwareList || softwareList.length === 0) return null;
                          return (
                            <div className="mt-4 pt-3.5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-2 sm:gap-3">
                              <span className="text-xs sm:text-sm font-bold text-[#0F2747] dark:text-slate-100 shrink-0">
                                {isRTL ? 'البرامج المستخدمة:' : 'Software:'}
                              </span>
                              <div className="flex flex-wrap items-center gap-2">
                                {softwareList.map((sw, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-[#0F766E]/40 transition-colors"
                                  >
                                    <img
                                      src={sw.logo}
                                      alt={sw.name}
                                      className={sw.logoClass || 'h-4 sm:h-4.5 w-auto object-contain shrink-0'}
                                      loading="lazy"
                                    />
                                    <span className="text-xs font-semibold text-[#1F2937] dark:text-slate-200">
                                      {sw.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
