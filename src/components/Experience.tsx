import { useState } from 'react';
import { 
  Building2, 
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
      className="relative py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      {/* Subtle Professional Background Image for Experience */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img 
          src="/images/experience_background.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.32] dark:opacity-[0.24] filter contrast-105 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-slate-900/75 dark:via-slate-900/40 dark:to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
              {isRTL ? t.tag : 'Career Timeline'}
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-[#0F2747] dark:text-white sm:text-4xl tracking-tight">
              {isRTL ? t.title : 'Work Experience'}
            </h2>
            <p className="mt-2 text-sm text-[#64748B] dark:text-slate-400">
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
                    <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
                      {/* LEFT SIDE: Designation, Company, Location */}
                      <div className="space-y-0.5 sm:space-y-1 min-w-0 sm:max-w-[42%]">
                        {/* 1. Job designation at the top */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-bold text-[#0F2747] dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors leading-snug">
                            {role}
                          </h3>
                          {job.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E6F4F1] text-[#0F766E] dark:bg-teal-950/80 dark:text-teal-300 border border-[#0F766E]/30 dark:border-teal-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse" />
                              {isRTL ? t.presentRole : 'Present Role'}
                            </span>
                          )}
                        </div>

                        {/* 2. Company directly underneath */}
                        <div className="text-xs sm:text-sm font-semibold text-[#0F766E] dark:text-teal-400 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{job.company}</span>
                        </div>

                        {/* 3. Location directly underneath company */}
                        <div className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span>{location}</span>
                        </div>
                      </div>

                      {/* CENTER / RESPONSIBILITIES: Horizontally centered in full card, vertically aligned with Location line */}
                      <div className="flex justify-center my-1 sm:my-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:bottom-0.5 z-10 pointer-events-none">
                        <div 
                          className={`inline-flex items-center gap-1 px-1.5 py-[2px] rounded text-[9.5px] font-medium leading-none tracking-tight transition-all pointer-events-auto ${
                            isExpanded
                              ? 'bg-teal-500/[0.10] hover:bg-teal-500/[0.16] text-[#0F766E] dark:text-teal-200 dark:bg-teal-400/[0.10] dark:hover:bg-teal-400/[0.16] border border-teal-500/30 dark:border-teal-400/30 shadow-2xs'
                              : 'bg-teal-500/[0.04] hover:bg-teal-500/[0.09] text-[#0F766E] dark:text-teal-300 dark:bg-teal-400/[0.04] dark:hover:bg-teal-400/[0.09] border border-teal-500/20 dark:border-teal-400/20 shadow-2xs backdrop-blur-2xs'
                          }`}
                        >
                          <span>{isExpanded ? (isRTL ? t.hideResponsibilities : 'Hide Responsibilities') : (isRTL ? t.responsibilities : 'Responsibilities')}</span>
                          <ChevronDown 
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 transition-transform duration-300 ease-out ${
                              isExpanded ? 'rotate-180 text-[#0F766E] dark:text-teal-300' : 'text-[#0F766E] dark:text-teal-400'
                            }`} 
                          />
                        </div>
                      </div>

                      {/* RIGHT SIDE: Logo at top-right, Date directly below */}
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-end gap-1.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/60 sm:max-w-[42%]">
                        {/* Company Logo (100% Transparent Background) */}
                        {isAlyami && (
                          <span className="inline-flex items-center justify-center bg-transparent h-8 sm:h-8.5 min-w-[52px] sm:min-w-[60px]">
                            <img
                              src={alyamiLogo}
                              alt="Ahmed Alyami Group"
                              referrerPolicy="no-referrer"
                              className="h-7 sm:h-7.5 w-auto object-contain max-w-[120px]"
                            />
                          </span>
                        )}

                        {isPalestine && (
                          <span className="inline-flex items-center justify-center bg-transparent h-8 sm:h-8.5 min-w-[52px] sm:min-w-[60px]">
                            <img
                              src="/images/palestine-hotel-logo.png"
                              alt="Palestine Hotel Makkah"
                              referrerPolicy="no-referrer"
                              className="h-7 sm:h-7.5 w-auto object-contain max-w-[95px]"
                            />
                          </span>
                        )}

                        {isAlRaya && (
                          <span className="inline-flex items-center justify-center bg-transparent h-8 sm:h-8.5 min-w-[52px] sm:min-w-[60px]">
                            <img
                              src="/images/alraya-logo.svg"
                              alt="Al Raya Specialties"
                              referrerPolicy="no-referrer"
                              className="h-7 sm:h-7.5 w-auto object-contain max-w-[95px]"
                            />
                          </span>
                        )}

                        {isHonda && (
                          <span className="inline-flex items-center justify-center bg-transparent h-8 sm:h-8.5 min-w-[52px] sm:min-w-[60px]">
                            <img
                              src="/images/honda-logo.svg"
                              alt="Honda Canal Bank"
                              referrerPolicy="no-referrer"
                              className="h-7 sm:h-7.5 w-auto object-contain max-w-[95px] text-slate-800 dark:text-slate-200"
                            />
                          </span>
                        )}

                        {/* Employment date directly below logo (small & compact) */}
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

                        {/* Professional Accounting Workflow Visual — Ahmed Alyami Group */}
                        {job.id === 'job-1' && (
                          <div className="mb-4 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-800/40 p-3 sm:p-3.5 flex flex-col sm:flex-row items-center gap-3.5 shadow-2xs">
                            <img
                              src="/images/work_finance_analysis.jpg"
                              alt="Corporate Financial Analysis & Operations"
                              referrerPolicy="no-referrer"
                              className="w-full sm:w-44 h-28 sm:h-24 object-cover rounded-lg shrink-0 shadow-2xs"
                              loading="lazy"
                            />
                            <div className="space-y-1 text-center sm:text-left">
                              <span className="text-xs sm:text-sm font-bold text-[#0F2747] dark:text-white block">
                                {isRTL && arJob?.workflowTitle ? arJob.workflowTitle : 'Corporate Accounting Operations & Financial Analysis'}
                              </span>
                              <p className="text-[11px] sm:text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                                {isRTL && arJob?.workflowDesc ? arJob.workflowDesc : 'End-to-end ERP operations covering quotation and sales order processing, accounts receivable & payable cycle, vendor reconciliations, cost accounting, and ZATCA VAT compliance.'}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Professional Accounting Workflow Visual — Iqtat Trading Co. */}
                        {job.id === 'job-2' && (
                          <div className="mb-4 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-800/40 p-3 sm:p-3.5 flex flex-col sm:flex-row items-center gap-3.5 shadow-2xs">
                            <img
                              src="/images/work_audit_reports.jpg"
                              alt="Ledger Auditing & Statement Reconciliations"
                              referrerPolicy="no-referrer"
                              className="w-full sm:w-44 h-28 sm:h-24 object-cover rounded-lg shrink-0 shadow-2xs"
                              loading="lazy"
                            />
                            <div className="space-y-1 text-center sm:text-left">
                              <span className="text-xs sm:text-sm font-bold text-[#0F2747] dark:text-white block">
                                {isRTL && arJob?.workflowTitle ? arJob.workflowTitle : 'Ledger Reconciliations & Statements of Account'}
                              </span>
                              <p className="text-[11px] sm:text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                                {isRTL && arJob?.workflowDesc ? arJob.workflowDesc : 'Multi-branch general ledger maintenance, supplier & customer SOA audits, inventory costing, bank transaction verification, and month-end financial reporting.'}
                              </p>
                            </div>
                          </div>
                        )}

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
