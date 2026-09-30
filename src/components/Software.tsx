import React, { useState } from 'react';

type Category =
  | 'ERP'
  | 'Accounting'
  | 'Cloud'
  | 'Financial'
  | 'Productivity';

interface SoftwareItem {
  name: string;
  category: Category;
  logo: string;
  fallback: string;
  nameColor: string;
}

const softwareItems: SoftwareItem[] = [
  {
    name: 'OFIS (Powered by Oracle)',
    category: 'ERP',
    logo: '/images/software/oracle-logo.svg',
    fallback: 'OFIS (Powered by Oracle)',
    nameColor: 'text-[#17364d] dark:text-slate-100',
  },
  {
    name: 'QuickBooks',
    category: 'Accounting',
    logo: '/images/software/quickbooks-logo.svg',
    fallback: 'QuickBooks',
    nameColor: 'text-green-700 dark:text-green-400',
  },
  {
    name: 'Arqami',
    category: 'ERP',
    logo: '/images/software/Arqami logo.png',
    fallback: 'ARQAMI',
    nameColor: 'text-blue-800 dark:text-blue-300',
  },
  {
    name: 'Delta Financial',
    category: 'Financial',
    logo: '/images/software/delta-logo.svg',
    fallback: 'DELTA',
    nameColor: 'text-indigo-700 dark:text-indigo-300',
  },
  {
    name: 'SMACC',
    category: 'ERP',
    logo: '/images/software/smacc-logo.png',
    fallback: 'SMACC',
    nameColor: 'text-blue-700 dark:text-blue-300',
  },
  {
    name: 'Daftra',
    category: 'Cloud',
    logo: '/images/software/Daftra logo.png',
    fallback: 'DAFTRA',
    nameColor: 'text-blue-700 dark:text-blue-300',
  },
  {
    name: 'Qoyod',
    category: 'Cloud',
    logo: '/images/software/Qoyod logo.png',
    fallback: 'QOYOD',
    nameColor: 'text-blue-900 dark:text-blue-300',
  },
  {
    name: 'Peachtree',
    category: 'Accounting',
    logo: '/images/software/Peachtree logo.png',
    fallback: 'PEACHTREE',
    nameColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    name: 'Tally',
    category: 'Accounting',
    logo: '/images/software/Tally logo.png',
    fallback: 'TALLY',
    nameColor: 'text-red-700 dark:text-red-400',
  },
  {
    name: 'Advanced Microsoft Excel',
    category: 'Productivity',
    logo: '/images/software/excel-logo.svg',
    fallback: 'EXCEL',
    nameColor: 'text-emerald-700 dark:text-emerald-400',
  },
  {
    name: 'Microsoft Office',
    category: 'Productivity',
    logo: '/images/software/office-logo.svg',
    fallback: 'OFFICE',
    nameColor: 'text-orange-600 dark:text-orange-400',
  },
];

const categoryStyles: Record<Category, string> = {
  ERP:
    'border-cyan-300 bg-cyan-50 text-cyan-700 dark:border-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300',

  Accounting:
    'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',

  Cloud:
    'border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-700 dark:bg-sky-950/40 dark:text-sky-300',

  Financial:
    'border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300',

  Productivity:
    'border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
};

function SoftwareLogo({ item }: { item: SoftwareItem }) {
  const [logoError, setLogoError] = useState(false);

  if (logoError) {
    return (
      <div className="flex h-[62px] w-full items-center justify-center">
        <span
          className={`
            text-center
            text-[12px]
            font-extrabold
            tracking-wide
            !opacity-100
            ${item.nameColor}
          `}
        >
          {item.fallback}
        </span>
      </div>
    );
  }

  return (
    <img
      src={item.logo}
      alt={`${item.name} logo`}
      loading="lazy"
      onError={() => setLogoError(true)}
      className="
        h-[62px]
        w-full
        max-w-[125px]
        object-contain
        !opacity-100
        transition-transform
        duration-300
        group-hover:scale-110
      "
    />
  );
}

interface SoftwareProps {
  software?: unknown;
}

export function Software(_props?: SoftwareProps) {
  return (
    <section
      id="software"
      className="
        relative
        overflow-hidden
        border-b
        border-slate-200
        bg-slate-50
        py-16
        transition-colors
        duration-300
        dark:border-slate-800
        dark:bg-slate-900
        sm:py-20
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =========================================================
            SECTION HEADER (STANDARDIZED LEFT-ALIGNED SYSTEM)
        ========================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col items-start gap-1.5 max-w-3xl">
            <span className="block text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
              ERP &amp; SOFTWARE
            </span>
            <div>
              <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight">
                ERP Systems &amp; Accounting Software
              </h2>
            </div>
            <p className="mt-1 text-sm text-[#64748B] dark:text-slate-400">
              Tools and systems I have worked with for accounting, reporting, inventory, AP/AR and financial management.
            </p>
          </div>
        </div>

        {/* =========================================================
            SOFTWARE CARDS
        ========================================================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {softwareItems.map((item) => (
            <div
              key={item.name}
              className="
                group
                flex
                min-h-[105px]
                items-center
                rounded-[14px]
                border
                border-slate-200/90
                bg-white
                px-5
                py-4
                shadow-[0_8px_24px_rgba(15,23,42,0.07)]
                transition-all
                duration-300
                ease-out

                hover:-translate-y-2
                hover:border-[#087d69]/50
                hover:shadow-[0_18px_38px_rgba(8,125,105,0.18)]

                dark:border-slate-700
                dark:bg-slate-800
                dark:hover:border-teal-500/60
                dark:hover:shadow-[0_18px_38px_rgba(20,184,166,0.12)]
              "
            >
              {/* LOGO */}

              <div
                className="
                  flex
                  w-[125px]
                  shrink-0
                  items-center
                  justify-center
                  pr-4
                  !opacity-100
                "
              >
                <SoftwareLogo item={item} />
              </div>

              {/* VERTICAL DIVIDER */}

              <div
                className="
                  h-14
                  w-px
                  shrink-0
                  bg-slate-300
                  transition-colors
                  duration-300
                  group-hover:bg-[#087d69]/60
                  dark:bg-slate-600
                  dark:group-hover:bg-teal-500/60
                "
              />

              {/* SOFTWARE NAME + CATEGORY */}

              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  items-center
                  justify-between
                  gap-3
                  pl-4
                "
              >
                <h3
                  className={`
                    min-w-0
                    text-[16px]
                    font-extrabold
                    leading-5
                    !opacity-100
                    ${item.nameColor}
                  `}
                >
                  {item.name}
                </h3>

                <span
                  className={`
                    shrink-0
                    rounded-full
                    border
                    px-2.5
                    py-1
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-wide
                    !opacity-100
                    ${categoryStyles[item.category]}
                  `}
                >
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
