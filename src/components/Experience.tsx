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
  role: 'Remote Accountant / Accounting Support',
  company: 'Erthal Company',
  location: 'Jeddah, Saudi Arabia',
  period: 'Remote / Part-Time',
  isCurrent: false,
  responsibilities: [
    'Review of weekly sales and expenses',
    'Preparation and review of monthly sales reports',
    'Preparation of quarterly VAT reports',
    'VAT return submission through the ZATCA portal',
    'Accounting records review and reconciliation',
    'Supporting documentation and audit requirements',
  ],
