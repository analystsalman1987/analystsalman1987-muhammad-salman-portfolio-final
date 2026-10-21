
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
    nameColor: 'text-[#F3F7FA]',
  },
  {
    name: 'QuickBooks',
    category: 'Accounting',
    logo: '/images/software/quickbooks-logo.svg',
    fallback: 'QuickBooks',
    nameColor: 'text-[#F3F7FA]',
  },
  {
    name: 'Arqami',
    category: 'ERP',
    logo: '/images/software/Arqami Logo.png',
    fallback: 'ARQAMI',
    nameColor: 'text-[#F3F7FA]',
  },
  {
    name: 'Delta Financial',
    category: 'Financial',
    logo: '/images/software/delta-logo.svg',
    fallback: 'DELTA',
    nameColor: 'text-[#F3F7FA]',
  },
  {
    name: 'SMACC',
    category: 'ERP',
    logo: '/images/software/smacc-logo.png',
    fallback: 'SMACC',
    nameColor: 'text-[#F3F7FA]',
  },
  {
    name: 'Daftra',
    category: 'Cloud',
    logo: '/images/software/Daftra logo.png',
    fallback: 'DAFTRA',
    nameColor: 'text-[#F3F7FA]',
  },
  {
    name: 'Qoyod',
    category: 'Cloud',
    logo: '/images/software/Qoyod logo.png',
    fallback: 'QOYOD',
    nameColor: 'text-[#F3F7FA]',
  },
  {
    name: 'Peachtree',
    category: 'Accounting',
    logo: '/images/software/Peachtree logo.png',
    fallback: 'PEACHTREE',
    nameColor: 'text-[#F3F7FA]',
  },
  {
    name: 'Tally',
    category: 'Accounting',
    logo: '/images/software/Tally logo.png',
    fallback: 'TALLY',
    nameColor: 'text-[#F3F7FA]',
  },
  {
    name: 'Advanced Microsoft Excel',
    category: 'Productivity',
    logo: '/images/software/excel-logo.svg',
    fallback: 'EXCEL',
    nameColor: 'text-[#F3F7FA]',
  },
  {
    name: 'Microsoft Office',
    category: 'Productivity',
    logo: '/images/software/office-logo.svg',
    fallback: 'OFFICE',
    nameColor: 'text-[#F3F7FA]',
  },
];

function SoftwareLogo({ item }: { item: SoftwareItem }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="software-logo-shell group relative flex h-[110px] w-full items-center justify-center sm:h-[125px]">
      {logoError ? (
        <span
          className={`software-logo-3d text-center text-sm font-extrabold tracking-wide ${item.nameColor}`}
        >
          {item.fallback}
        </span>
      ) : (
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          loading="lazy"
          onError={() => setLogoError(true)}
          className="software-logo-3d block h-[68px] w-[80%] max-w-[190px] object-contain sm:h-[78px]"
        />
      )}
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
      style={{
        backgroundColor: '#305879',
        backgroundImage: 'none',
      }}
    >
      <style>{`
        #software {
          background: #305879 !important;
          background-image: none !important;
        }

        #software .main-heading-3d {
          color: #F3F7FA;
        }

        #software .main-heading-3d:hover {
          color: #BE9852;
        }

        /* Permanent subtle 3D embossed logo appearance */
        #software .software-logo-3d {
          position: relative;
          transform: perspective(700px)
            translateZ(0)
            rotateX(0deg)
            scale(1);

          filter:
            drop-shadow(0 2px 1px rgba(255,255,255,0.16))
            drop-shadow(0 5px 3px rgba(8,20,35,0.35))
            drop-shadow(0 10px 9px rgba(5,15,30,0.25))
            drop-shadow(0 0 5px rgba(215,235,255,0.20));

          transition:
            transform 350ms ease,
            filter 350ms ease;

          will-change: transform;
        }

        /* Small 3D lift on hover */
        #software .software-logo-shell:hover
        .software-logo-3d {
          transform:
            perspective(700px)
            translateY(-5px)
            translateZ(12px)
            rotateX(3deg)
            scale(1.06);

          filter:
            drop-shadow(0 2px 2px rgba(255,255,255,0.22))
            drop-shadow(0 7px 5px rgba(8,20,35,0.40))
            drop-shadow(0 14px 12px rgba(5,15,30,0.30))
            drop-shadow(0 0 9px rgba(215,235,255,0.32));
        }

        @media (prefers-reduced-motion: reduce) {
          #software .software-logo-3d {
            transition: none;
            will-change: auto;
          }

          #software .software-logo-shell:hover
          .software-logo-3d {
            transform: none;
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER - UNCHANGED */}
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

        {/* SOFTWARE LOGOS ONLY */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
          {softwareItems.map((item) => (
            <SoftwareLogo
              key={item.name}
              item={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
