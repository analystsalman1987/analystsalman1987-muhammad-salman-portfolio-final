import React, { useState } from 'react';

type Category = 'ERP' | 'Accounting' | 'Cloud' | 'Financial' | 'Productivity';

interface SoftwareItem {
  name: string;
  category: Category;
  logo: string;
  fallback: string;
  nameColor: string;
}

const softwareItems: SoftwareItem[] = [
  { name: 'OFIS (Powered by Oracle)', category: 'ERP', logo: '/images/software/oracle-logo.svg', fallback: 'OFIS (Powered by Oracle)', nameColor: 'text-[#F3F7FA]' },
  { name: 'QuickBooks', category: 'Accounting', logo: '/images/software/quickbooks-logo.svg', fallback: 'QuickBooks', nameColor: 'text-[#F3F7FA]' },
  { name: 'Arqami', category: 'ERP', logo: '/images/software/Arqami Logo.png', fallback: 'ARQAMI', nameColor: 'text-[#F3F7FA]' },
  { name: 'Delta Financial', category: 'Financial', logo: '/images/software/delta-logo.svg', fallback: 'DELTA', nameColor: 'text-[#F3F7FA]' },
  { name: 'SMACC', category: 'ERP', logo: '/images/software/smacc-logo.png', fallback: 'SMACC', nameColor: 'text-[#F3F7FA]' },
  { name: 'Daftra', category: 'Cloud', logo: '/images/software/Daftra logo.png', fallback: 'DAFTRA', nameColor: 'text-[#F3F7FA]' },
  { name: 'Qoyod', category: 'Cloud', logo: '/images/software/Qoyod logo.png', fallback: 'QOYOD', nameColor: 'text-[#F3F7FA]' },
  { name: 'Peachtree', category: 'Accounting', logo: '/images/software/Peachtree logo.png', fallback: 'PEACHTREE', nameColor: 'text-[#F3F7FA]' },
  { name: 'Tally', category: 'Accounting', logo: '/images/software/Tally logo.png', fallback: 'TALLY', nameColor: 'text-[#F3F7FA]' },
  { name: 'Advanced Microsoft Excel', category: 'Productivity', logo: '/images/software/excel-logo.svg', fallback: 'EXCEL', nameColor: 'text-[#F3F7FA]' },
  { name: 'Microsoft Office', category: 'Productivity', logo: '/images/software/office-logo.svg', fallback: 'OFFICE', nameColor: 'text-[#F3F7FA]' },
];

const categoryStyles: Record<Category, string> = {
  ERP: 'border-[#BE9852]/40 bg-[#BE9852]/15 text-[#8B6B32]',
  Accounting: 'border-[#BE9852]/40 bg-[#BE9852]/15 text-[#8B6B32]',
  Cloud: 'border-[#BE9852]/40 bg-[#BE9852]/15 text-[#8B6B32]',
  Financial: 'border-[#BE9852]/40 bg-[#BE9852]/15 text-[#8B6B32]',
  Productivity: 'border-[#BE9852]/40 bg-[#BE9852]/15 text-[#8B6B32]',
};

function SoftwareLogo({ item }: { item: SoftwareItem }) {
  const [logoError, setLogoError] = useState(false);

  if (logoError) {
    return (
      <div className="flex h-[54px] w-full items-center justify-center">
        <span className={`text-center text-[11px] font-extrabold tracking-wide ${item.nameColor}`}>
          {item.fallback}
        </span>
      </div>
    );
  }

  return (
    <div className="flex min-h-[64px] w-full max-w-[136px] items-center justify-center px-2 py-1 transition-colors duration-300">
      <img
        src={item.logo}
        alt={`${item.name} logo`}
        loading="lazy"
        onError={() => setLogoError(true)}
        className="h-[54px] w-full max-w-[122px] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
      />
    </div>
  );
}

interface SoftwareProps {
  software?: unknown;
}

export function Software(_props?: SoftwareProps) {
  return (
    <section
      id="software"
      className="misty-portfolio relative overflow-hidden border-b border-[#C5D5E2] bg-[#305879] py-16 transition-colors duration-300 sm:py-20"
      style={{ backgroundColor: '#305879' }}
    >
      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex max-w-3xl flex-col items-start gap-1.5">
            <span className="block text-xs font-bold uppercase tracking-widest text-[#BE9852]">
              ERP &amp; SOFTWARE
            </span>
            <div>
              <h2 className="main-heading-3d text-3xl font-extrabold tracking-tight text-[#17324A] sm:text-4xl">
                ERP Systems &amp; Accounting Software
              </h2>
            </div>
            <p className="mt-1 text-sm text-[#F3F7FA]">
              Tools and systems I have worked with for accounting, reporting,
              inventory, AP/AR and financial management.
            </p>
          </div>
        </div>

        {/* SOFTWARE CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {softwareItems.map((item) => (
            <div
              key={item.name}
              className="group flex min-h-[88px] items-center px-4 py-3 transition-colors duration-300"
            >
              {/* SOFTWARE LOGO */}
              <div className="flex min-w-0 flex-1 items-center justify-center pr-3">
                <SoftwareLogo item={item} />
              </div>

              {/* VERTICAL DIVIDER */}
              <div className="h-10 w-px shrink-0 bg-[#C5D5E2] transition-colors duration-300 group-hover:bg-[#BE9852]/60" />

              {/* CATEGORY BADGE */}
              <div className="flex min-w-[86px] shrink-0 items-center justify-center pl-3">
                <span className={`shrink-0 text-[11px] font-bold uppercase tracking-wide text-[#E5C78E]`}>
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
