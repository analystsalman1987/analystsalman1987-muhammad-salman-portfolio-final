import { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
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
    { name: 'Arqami', logo: '/images/software/Arqami Logo.png', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' },
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
  'job-aali': [
    { name: 'Daftra', logo: '/images/software/Daftra logo.png', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' },
  ],
  'job-peregrine': [
    { name: 'QuickBooks', logo: '/images/software/quickbooks-logo.svg', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' },
  ],
  'job-erthal': [
    { name: 'Qoyod', logo: '/images/software/Qoyod logo.png', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' },
  ],
};

const getJobSoftware = (jobId: string, company: string): SoftwareChip[] => {
  const comp = (company || '').toLowerCase();
  const id = (jobId || '').toLowerCase();
  if (comp.includes('aali') || comp.includes('عالي') || id.includes('aali')) {
    return [{ name: 'Daftra', logo: '/images/software/Daftra logo.png', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' }];
  }
  if (comp.includes('peregrine') || comp.includes('بيريجرين') || id.includes('peregrine')) {
    return [{ name: 'QuickBooks', logo: '/images/software/quickbooks-logo.svg', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' }];
  }
  if (comp.includes('erthal') || comp.includes('إرثال') || id.includes('erthal')) {
    return [{ name: 'Qoyod', logo: '/images/software/Qoyod logo.png', logoClass: 'h-4 sm:h-4.5 w-auto object-contain' }];
  }
  if (JOB_SOFTWARE_MAP[jobId]) return JOB_SOFTWARE_MAP[jobId];
  if (comp.includes('alyami')) return JOB_SOFTWARE_MAP['job-1'];
  if (comp.includes('iqtat')) return JOB_SOFTWARE_MAP['job-2'];
  if (comp.includes('palestine')) return JOB_SOFTWARE_MAP['job-3'];
  if (comp.includes('raya')) return JOB_SOFTWARE_MAP['job-4'];
  if (comp.includes('waheed')) return JOB_SOFTWARE_MAP['job-5'];
  if (comp.includes('honda')) return JOB_SOFTWARE_MAP['job-6'];
  return [];
};

interface CompanyLogoResult {
  logo: string;
  fallbackLogo?: string;
  alt: string;
}

const getCompanyLogoInfo = (job: WorkExperienceItem): CompanyLogoResult | null => {
  const comp = (job.company || '').toLowerCase();
  const id = (job.id || '').toLowerCase();

  const storedJob = job as WorkExperienceItem & {
    logo?: string;
    logoUrl?: string;
    companyLogo?: string;
  };
  const savedLogo = [storedJob.logo, storedJob.logoUrl, storedJob.companyLogo]
    .find((value): value is string => typeof value === 'string' && value.trim().length > 0);
  if (savedLogo) return { logo: savedLogo, alt: job.company };

  // 1. Ahmed Yahya Alyami Contracting Co. (Current employer)
  if (id === 'job-1' || comp.includes('alyami') || comp.includes('اليامي')) {
    return { logo: alyamiLogo, alt: 'Ahmed Yahya Alyami Contracting Co.' };
  }
  // 2. IQTAT Trading Co. - Clean transparent logo with original source fallback
  if (id === 'job-2' || comp.includes('iqtat') || comp.includes('اقتات')) {
    return { 
      logo: '/images/iqtat-logo.png', 
      fallbackLogo: '/images/Iqtat.png', 
      alt: 'IQTAT Trading Co.' 
    };
  }
  // 3. Palestine Hotel Makkah
  if (id === 'job-3' || comp.includes('palestine') || comp.includes('فلسطين')) {
    return { logo: '/images/palestine-hotel-logo.png', alt: 'Palestine Hotel Makkah' };
  }
  // 4. Al Raya Specialties
  if (id === 'job-4' || comp.includes('raya') || comp.includes('الراية')) {
    return { logo: '/images/alraya-logo.svg', alt: 'Al Raya Specialties' };
  }
  // 5. Waheed Sons Sanitary Ware - Check attached Waheed sons(1).jpeg / waheed-sons-logo.jpeg
  if (id === 'job-5' || comp.includes('waheed') || comp.includes('وحيد')) {
    return { 
      logo: '/images/Waheed sons(1).jpeg', 
      fallbackLogo: '/images/waheed-sons-logo.jpeg', 
      alt: 'Waheed Sons Sanitary Ware' 
    };
  }
  // 6. Honda Canal Bank
  if (id === 'job-6' || comp.includes('honda') || comp.includes('هوندا')) {
    return { logo: '/images/honda-logo.svg', alt: 'Honda Canal Bank' };
  }
  // 7. Aali Services Company - Check attached Aali(1).jpeg / aali-services-logo.jpeg
  if (id === 'job-aali' || comp.includes('aali') || comp.includes('عالي')) {
    return { 
      logo: '/images/Aali(1).jpeg', 
      fallbackLogo: '/images/aali-services-logo.jpeg', 
      alt: 'Aali Services Company' 
    };
  }
  // Peregrine Services and Erthal Company: pending genuine original logos
  return null;
};

// Approved Remote Accounting Experience entries
const defaultAaliJob: WorkExperienceItem = {
  id: 'job-aali',
  role: 'Remote Accountant / Accounting Support',
  company: 'Aali Services Company',
  location: 'Jeddah, Saudi Arabia',
  period: 'Remote / Part-Time',
  isCurrent: true,
  responsibilities: [
    'Daily bookkeeping and accounting records maintenance in Daftra ERP.',
    'Accounts payable and receivable management with customer and vendor balance tracking.',
    'Bank and cash transactions reconciliation and periodic financial statement preparation.',
    'Sales and purchase invoice processing and supporting document verification.',
    'VAT record maintenance and ZATCA compliance support.',
  ],
};

const defaultPeregrineJob: WorkExperienceItem = {
  id: 'job-peregrine',
  role: 'Remote Accounting Support',
  company: 'Peregrine Services',
  location: 'Canada',
  period: 'Remote / Part-Time',
  isCurrent: false,
  responsibilities: [
    'Invoice and expense recording',
    'Accounting data entry and record maintenance',
    'Bank reconciliation',
    'Preparation of quarterly accounting batches',
    'Preparation of quarterly tax reports',
    'Management review and confirmation of financial information',
    'Identification and follow-up of accounting discrepancies',
  ],
};

const defaultErthalJob: WorkExperienceItem = {
  id: 'job-erthal',
  role: 'Remote Accountant / Bookkeeper',
  company: 'Erthal Company',
  location: 'Riyadh, Saudi Arabia',
  period: 'Remote / Part-Time',
  isCurrent: false,
  responsibilities: [
    'Daily and weekly driver cash deposit tracking and reconciliation',
    'Fuel and operational expense verification against supporting bills',
    'Accounting entries recording in Qoyod accounting software',
    'Preparation of weekly and monthly vehicle and driver revenue summaries',
    'Cash on hand and bank transaction reconciliation',
    'Support in monthly operational expense review and reporting',
  ],
};

export function Experience({ experience, isSelected, onToggleSelect }: ExperienceProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.experience;

  // Both categories start collapsed by default
  const [openCategories, setOpenCategories] = useState<Set<'full-time' | 'remote'>>(
    () => new Set([])
  );

  // Expanded responsibility panels per card (empty by default)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());

  // Deep linking to #experience-remote opens remote group
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#experience-remote') {
      setOpenCategories(new Set(['remote']));
    }
  }, []);

  // 1. Separate full-time/formal jobs
  const formalJobs = (experience || []).filter((j) => {
    const c = j.company.toLowerCase();
    const id = j.id.toLowerCase();
    return (
      !c.includes('aali') &&
      !c.includes('عالي') &&
      !c.includes('peregrine') &&
      !c.includes('بيريجرين') &&
      !c.includes('erthal') &&
      !c.includes('إرثال') &&
      !id.includes('aali') &&
      !id.includes('peregrine') &&
      !id.includes('erthal')
    );
  });

  // 2. Remote jobs: check if present in user data, otherwise use approved default
  const existingAali = (experience || []).find(
    (j) => j.company.toLowerCase().includes('aali') || j.id.toLowerCase().includes('aali')
  );
  const existingPeregrine = (experience || []).find(
    (j) => j.company.toLowerCase().includes('peregrine') || j.id.toLowerCase().includes('peregrine')
  );
  const existingErthal = (experience || []).find(
    (j) => j.company.toLowerCase().includes('erthal') || j.id.toLowerCase().includes('erthal')
  );

  // 3. Exact approved order: 1. Aali Services Company, 2. Peregrine Services, 3. Erthal Company
  const remoteJobs: WorkExperienceItem[] = [
    existingAali || defaultAaliJob,
    existingPeregrine || defaultPeregrineJob,
    existingErthal || defaultErthalJob,
  ];

  const allRenderedJobs = [...formalJobs, ...remoteJobs];

  if (!experience || experience.length === 0) {
    return (
      <section id="experience" className="misty-portfolio py-20 bg-[#305879] border-b border-[#C5D5E2]">
        <div className="max-w-7xl mx-auto px-4 text-center text-[#52677A]">
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

  const toggleCategory = (category: 'full-time' | 'remote') => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const isFullTimeOpen = openCategories.has('full-time');
  const isRemoteOpen = openCategories.has('remote');

  const allExpanded =
    isFullTimeOpen &&
    isRemoteOpen &&
    allRenderedJobs.length > 0 &&
    expandedIds.size === allRenderedJobs.length;

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIds(new Set());
      setOpenCategories(new Set());
    } else {
      setExpandedIds(new Set(allRenderedJobs.map((j) => j.id)));
      setOpenCategories(new Set(['full-time', 'remote']));
    }
  };

  const getRemoteOverview = (job: WorkExperienceItem) => {
    const comp = (job.company || '').toLowerCase();
    const id = (job.id || '').toLowerCase();

    if (comp.includes('aali') || id.includes('aali')) {
      return isRTL
        ? 'شركة خدمية متخصصة في توريد وتأمين وتركيب سخانات المياه وقطع الغيار وخدمات الدعم الفني المرتبطة بها.'
        : 'A service-based company providing water boiler and spare parts supply, arrangement, installation, and related support services.';
    }

    if (comp.includes('peregrine') || id.includes('peregrine')) {
      return isRTL
        ? 'شركة خدمية تعمل في مجال الاستحواذ على الأراضي والعقارات وإعادة بيعها، بما في ذلك أعمال التجديد والتطوير العقاري.'
        : 'A service-based business involved in land/property acquisition and resale, including renovation-related activities.';
    }

    if (comp.includes('erthal') || id.includes('erthal')) {
      return isRTL
        ? 'شركة نقل وتوجيه مركبات الأجرة، يقوم السائقون فيها بإيداعات نقدية أسبوعية وتقديم فواتير المصروفات، مدعومة بتقارير محاسبية وتشغيلية أسبوعية وشهرية.'
        : 'A taxi transportation company where drivers make weekly cash deposits and submit expense bills, supported by weekly and monthly accounting and operational reporting.';
    }

    return '';
  };

  const renderJobCard = (job: WorkExperienceItem) => {
    const isExpanded = expandedIds.has(job.id);
    const arJob = t.jobs?.find((j) => j.id === job.id);
    const role = isRTL && arJob ? arJob.role : job.role;
    const companyName = isRTL && arJob?.companyArabic ? arJob.companyArabic : job.company;
    const location = isRTL && arJob ? arJob.location : job.location;
    const period = isRTL && arJob ? arJob.period : job.period;
    const responsibilities = isRTL && arJob ? arJob.responsibilities : job.responsibilities;
    const respCount = responsibilities?.length || 0;
    const isAlyami = job.id === 'job-1' || job.company.toLowerCase().includes('alyami');
    const remoteOverview = getRemoteOverview(job);
    const logoInfo = getCompanyLogoInfo(job);

    return (
      <div key={job.id} className="relative group experience-job">
        {/* Timeline marker node */}
        <div 
          className={`absolute ${isRTL ? '-right-[31px] sm:-right-[39px]' : '-left-[31px] sm:-left-[39px]'} top-6 w-4 h-4 rounded-full border-2 transition-all ${
            isAlyami && job.isCurrent
              ? 'bg-[#BE9852] border-white ring-4 ring-[#BE9852]/25'
              : isExpanded
                ? 'bg-[#BE9852] border-white ring-4 ring-[#BE9852]/25'
                : 'bg-white border-[#C5D5E2] group-hover:border-[#BE9852] group-hover:scale-110'
          }`}
        />

        {/* Card Container */}
        <div 
          className={`rounded-2xl border transition-all duration-300 shadow-xs overflow-hidden ${
            isExpanded
              ? 'border-[#BE9852]/60 ring-1 ring-[#BE9852]/25 bg-white shadow-md'
              : 'bg-[#F3F7FA] border-[#C5D5E2] hover:border-[#BE9852]/60 hover:bg-white'
          }`}
        >
          {/* Clickable Header Button / Summary Area */}
          <button
            type="button"
            onClick={() => toggleExpand(job.id)}
            aria-expanded={isExpanded}
            className="w-full text-left rtl:text-right relative p-5 sm:p-6 cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#BE9852] touch-manipulation block"
          >
            <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              {/* LEFT SIDE: 1. Company Name, 2. Designation / Job Title, 3. Location, 4. Date Directly Below Location */}
              <div className={`space-y-1.5 min-w-0 ${logoInfo ? 'sm:max-w-[68%]' : 'sm:max-w-[85%]'}`}>
                <h3 className="company-3d-text text-lg sm:text-xl font-bold !text-[#F3F7FA] group-hover:!text-[#BE9852] transition-colors leading-snug">
                  {companyName}
                </h3>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm sm:text-base font-bold text-[#BE9852]">
                    {role}
                  </span>
                  {/* Keep the Present Role badge ONLY for Ahmed Al Yami Group */}
                  {isAlyami && job.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#BE9852]/15 text-[#BE9852] border border-[#BE9852]/35">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BE9852] animate-pulse" />
                      {isRTL ? t.presentRole : 'Present Role'}
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm text-[#52677A] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-[#BE9852]" />
                  <span>{location}</span>
                </div>

                {/* Employment Date DIRECTLY BELOW Location */}
                <div className="experience-date inline-flex items-center gap-1.5 text-[11px] font-medium text-[#34495E] bg-[#F3F7FA] px-2.5 py-1 rounded-md border border-[#C5D5E2]">
                  <Calendar className="w-3 h-3 text-[#BE9852] shrink-0" />
                  <span>{period}</span>
                </div>

                {remoteOverview && (
                  <p className="pt-1 text-xs sm:text-sm leading-relaxed text-[#52677A] max-w-xl">
                    <span className="font-bold text-[#17324A]">
                      {isRTL ? 'نبذة عن الشركة: ' : 'Company Overview: '}
                    </span>
                    {remoteOverview}
                  </p>
                )}
              </div>

              {/* CENTER / RESPONSIBILITIES BUTTON */}
              <div className="flex justify-center sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:bottom-2.5 z-10 pointer-events-none">
                <span 
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold leading-none tracking-tight transition-all duration-300 ${
                    isExpanded
                      ? 'bg-[#BE9852]/15 text-[#BE9852] border border-[#BE9852]/40 shadow-xs'
                      : 'bg-[#F3F7FA] text-[#17324A] border border-[#C5D5E2] shadow-2xs'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE9852] shadow-xs shadow-[#BE9852]/60" />
                  <span>{isRTL ? 'المسؤوليات' : 'Responsibilities'}</span>
                  <ChevronDown 
                    className={`w-3.5 h-3.5 transition-transform duration-350 ease-out text-[#BE9852] ${
                      isExpanded ? 'rotate-180' : ''
                    }`} 
                  />
                </span>
              </div>

              {/* RIGHT SIDE: Genuine Company Logo directly on card with NO visible box, border, background, or shadow */}
              {logoInfo && (
                <div 
                  className="flex items-center justify-center sm:justify-end shrink-0 self-center sm:self-start pt-2 sm:pt-0 max-w-[160px] sm:max-w-[220px] w-full sm:w-auto"
                  title={companyName}
                >
                  <div className="relative flex items-center justify-center sm:justify-end h-[75px] sm:h-[95px] w-full sm:w-[190px]">
                    <img
                      src={logoInfo.logo}
                      alt={logoInfo.alt}
                      referrerPolicy="no-referrer"
                      onError={(event) => { 
                        if (logoInfo.fallbackLogo && event.currentTarget.src !== logoInfo.fallbackLogo) {
                          event.currentTarget.src = logoInfo.fallbackLogo;
                        } else {
                          event.currentTarget.style.display = 'none';
                        }
                      }}
                      className="experience-logo w-auto h-full max-h-[75px] sm:max-h-[90px] max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              )}
            </div>
          </button>

          {/* EXPANDED RESPONSIBILITIES PANEL: Light surface, deep navy headings, slate bullets */}
          <div 
            className={`grid transition-all duration-350 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
              isExpanded 
                ? 'grid-rows-[1fr] opacity-100' 
                : 'grid-rows-[0fr] opacity-0 pointer-events-none'
            }`}
          >
            <div className="overflow-hidden">
              <div className="p-4 sm:p-6 pt-1 sm:pt-2">
                <div className="experience-responsibilities relative rounded-2xl p-5 sm:p-6 bg-[#F3F7FA] text-[#34495E] border border-[#C5D5E2] shadow-sm">
                  
                  {/* Header: Key Responsibilities */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#C5D5E2]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#BE9852] shadow-xs shadow-[#BE9852]" />
                      <h4 className="text-sm sm:text-base font-extrabold tracking-wide uppercase text-[#17324A] flex items-center gap-2">
                        <span>{isRTL ? 'المسؤوليات الرئيسية' : 'Key Responsibilities'}</span>
                      </h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#BE9852]/15 text-[#BE9852] border border-[#BE9852]/35 shadow-2xs">
                      {respCount} {respCount === 1 ? (isRTL ? t.duty : 'duty') : (isRTL ? t.duties : 'duties')}
                    </span>
                  </div>

                  {/* Responsibilities Grid with readable contrast */}
                  <ul className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
                    {responsibilities.map((resp, idx) => {
                      const colonIndex = resp.indexOf(':');
                      const hasHeading = colonIndex > 0 && colonIndex < 45;
                      const heading = hasHeading ? resp.slice(0, colonIndex) : '';
                      const detail = hasHeading ? resp.slice(colonIndex + 1).trim() : resp;

                      return (
                        <li 
                          key={idx} 
                          className="experience-duty flex items-start gap-3 text-xs sm:text-[13px] text-[#34495E] bg-white hover:bg-white p-3 sm:p-3.5 rounded-xl border border-[#C5D5E2] hover:border-[#BE9852]/40 transition-all duration-200 shadow-2xs"
                        >
                          <div className="mt-0.5 shrink-0 flex items-center justify-center w-4 h-4 rounded-full bg-[#BE9852]/20 text-[#BE9852] border border-[#BE9852]/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#BE9852]" />
                          </div>
                          <span className="min-w-0 flex-1 leading-relaxed">
                            {hasHeading ? (
                              <span className="flex flex-col gap-1">
                                <strong className="block font-bold text-[#17324A] text-[13px] sm:text-[14px] leading-snug tracking-[0.01em]">
                                  {heading}:
                                </strong>
                                <span className="block text-[#34495E] font-normal text-xs sm:text-[13px] leading-relaxed">
                                  {detail}
                                </span>
                              </span>
                            ) : (
                              <span className="block text-[#34495E] font-normal text-xs sm:text-[13px] leading-relaxed">
                                {resp}
                              </span>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Software Information Row inside Panel */}
                  {(() => {
                    const softwareList = getJobSoftware(job.id, job.company);
                    if (!softwareList || softwareList.length === 0) return null;
                    return (
                      <div className="relative z-10 mt-5 pt-3.5 border-t border-[#C5D5E2] flex flex-wrap items-center gap-2.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#BE9852] shrink-0">
                          {isRTL ? 'البرامج المستخدمة:' : 'Software:'}
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {softwareList.map((sw, sIdx) => (
                            <div
                              key={sIdx}
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#C5D5E2] shadow-2xs hover:border-[#BE9852]/50 transition-colors"
                            >
                              <img
                                src={sw.logo}
                                alt={sw.name}
                                className={sw.logoClass || 'h-4 w-auto object-contain shrink-0'}
                                loading="lazy"
                              />
                              <span className="text-xs font-semibold text-[#17324A]">
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
      </div>
    );
  };

  return (
    <section 
      id="experience" 
      className="misty-portfolio relative py-20 scroll-mt-20 bg-[#305879] border-b border-[#C5D5E2] transition-colors overflow-hidden"
      style={{ backgroundColor: '#305879' }}
    >

      <style>{`
        /* Experience-only readability repair: no changes to Home or other sections. */
        #experience .experience-job > div:nth-child(2) {
          background: #254866 !important;
          border-color: #52718a !important;
        }
        #experience .experience-job .company-3d-text {
          color: #f3f7fa !important;
        }
        #experience .experience-job:hover .company-3d-text {
          color: #be9852 !important;
        }
        /* Soft illumination around genuine logos: no replacement, opaque box or recoloring. */
        #experience .experience-job .experience-logo {
          filter: drop-shadow(0 0 7px rgba(255,255,255,.72)) drop-shadow(0 0 18px rgba(255,255,255,.34));
        }
        #experience .experience-job:hover .experience-logo {
          filter: drop-shadow(0 0 10px rgba(255,255,255,.9)) drop-shadow(0 0 23px rgba(255,255,255,.48));
        }
        #experience .experience-job .experience-date {
          background: #1e3a56 !important;
          color: #f3f7fa !important;
          border-color: #7895aa !important;
        }
        #experience .experience-job .experience-date span,
        #experience .experience-job .text-\\[\\#52677A\\] {
          color: #f3f7fa !important;
        }
        #experience .experience-responsibilities {
          background: #254866 !important;
          color: #f3f7fa !important;
          border-color: #52718a !important;
        }
        #experience .experience-responsibilities h4 {
          color: #f3f7fa !important;
        }
        #experience .experience-responsibilities .experience-duty {
          background: #dce7f0 !important;
          color: #17324a !important;
          border-color: #c5d5e2 !important;
        }
        #experience .experience-responsibilities .experience-duty strong,
        #experience .experience-responsibilities .experience-duty span:not(.w-1\\.5) {
          color: #17324a !important;
          opacity: 1 !important;
          -webkit-text-fill-color: #17324a !important;
        }
        #experience .experience-responsibilities .experience-duty:hover {
          background: #e7eff6 !important;
          border-color: #be9852 !important;
        }
        #experience .experience-job button span.text-\\[\\#17324A\\] {
          color: #f3f7fa !important;
        }
      `}</style>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col items-start gap-1.5 max-w-3xl">
            <span className="block text-xs font-bold tracking-widest text-[#BE9852] uppercase">
              {isRTL ? t.tag : 'Career Timeline'}
            </span>
            <div>
              <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight text-[#17324A]">
                {isRTL ? t.title : 'Work Experience'}
              </h2>
            </div>
            <p className="mt-1 text-sm text-[#52677A]">
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
                    ? 'bg-[#BE9852]/15 text-[#BE9852] border-[#BE9852]/40 shadow-2xs'
                    : 'bg-[#F3F7FA] text-[#52677A] border-[#C5D5E2] hover:text-[#17324A] hover:bg-white'
                }`}
                title={isRTL ? t.bgTitle : 'Toggle subtle background image effect (Test)'}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isSelected ? 'bg-[#BE9852] animate-pulse' : 'bg-[#52677A]'}`} />
                <span>{isSelected ? (isRTL ? t.bgActive : 'Background: Active') : (isRTL ? t.bgInactive : 'Background: Inactive')}</span>
              </button>
            )}

            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#17324A] bg-[#F3F7FA] hover:bg-white border border-[#C5D5E2] transition-colors cursor-pointer shadow-xs"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#BE9852]" />
              <span>{allExpanded ? (isRTL ? t.collapseAll : 'Collapse All') : (isRTL ? t.expandAll : 'Expand All')}</span>
            </button>
          </div>
        </div>

        {/* Experience Groups — both collapsed by default */}
        <div className="space-y-5">
          {/* Full-Time Experience */}
          <div className="rounded-2xl border border-[#C5D5E2] bg-[#F3F7FA] overflow-hidden shadow-xs">
            <button
              type="button"
              onClick={() => toggleCategory('full-time')}
              aria-expanded={isFullTimeOpen}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left rtl:text-right hover:bg-white/80 transition-colors cursor-pointer select-none touch-manipulation"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#BE9852]/15 text-[#BE9852] border border-[#BE9852]/25">
                  <Briefcase className="w-4.5 h-4.5" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#17324A]">
                    {isRTL ? 'الخبرة بدوام كامل' : 'Full-Time Experience'}
                  </h3>
                  <p className="text-xs text-[#52677A]">
                    {isRTL ? `${formalJobs.length} وظائف مهنية` : `${formalJobs.length} professional roles`}
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-[#BE9852] transition-transform duration-300 ${
                  isFullTimeOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isFullTimeOpen
                  ? 'grid-rows-[1fr] opacity-100 border-t border-[#C5D5E2]'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 sm:p-6">
                  <div className={`relative ${isRTL ? 'border-r-2 mr-3 sm:mr-4 pr-6 sm:pr-8' : 'border-l-2 ml-3 sm:ml-4 pl-6 sm:pl-8'} border-[#C5D5E2] space-y-8 sm:space-y-10`}>
                    {formalJobs.map(renderJobCard)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remote / Part-Time Experience */}
          <div id="experience-remote" className="rounded-2xl border border-[#C5D5E2] bg-[#F3F7FA] overflow-hidden shadow-xs scroll-mt-24">
            <button
              type="button"
              onClick={() => toggleCategory('remote')}
              aria-expanded={isRemoteOpen}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left rtl:text-right hover:bg-white/80 transition-colors cursor-pointer select-none touch-manipulation"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#BE9852]/15 text-[#BE9852] border border-[#BE9852]/25">
                  <Briefcase className="w-4.5 h-4.5" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#17324A]">
                    {isRTL ? 'الخبرة عن بُعد / بدوام جزئي' : 'Remote / Part-Time Experience'}
                  </h3>
                  <p className="text-xs text-[#52677A]">
                    {isRTL ? `${remoteJobs.length} مهام محاسبية` : `${remoteJobs.length} accounting engagements`}
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-[#BE9852] transition-transform duration-300 ${
                  isRemoteOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isRemoteOpen
                  ? 'grid-rows-[1fr] opacity-100 border-t border-[#C5D5E2]'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 sm:p-6">
                  <div className={`relative ${isRTL ? 'border-r-2 mr-3 sm:mr-4 pr-6 sm:pr-8' : 'border-l-2 ml-3 sm:ml-4 pl-6 sm:pl-8'} border-[#C5D5E2] space-y-8 sm:space-y-10`}>
                    {remoteJobs.map(renderJobCard)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
