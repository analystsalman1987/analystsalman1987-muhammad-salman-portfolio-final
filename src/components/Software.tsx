import React from 'react';

type Category =
  | 'ERP'
  | 'Accounting'
  | 'Cloud'
  | 'Financial'
  | 'Productivity';

type SoftwareItem = {
  name: string;
  logo: string;
  category: Category;
};

const softwareItems: SoftwareItem[] = [
  {
    name: 'OFIS',
    logo: '/images/ofis-logo.png',
    category: 'ERP',
  },
  {
    name: 'QuickBooks',
    logo: '/images/quickbooks-logo.png',
    category: 'Accounting',
  },
  {
    name: 'Arqami',
    logo: '/images/arqami-logo.png',
    category: 'Cloud',
  },
  {
    name: 'Delta Financial',
    logo: '/images/delta-financial-logo.png',
    category: 'Financial',
  },
  {
    name: 'SMACC',
    logo: '/images/smacc-logo.png',
    category: 'ERP',
  },
  {
    name: 'Daftra',
    logo: '/images/daftra-logo.png',
    category: 'Cloud',
  },
  {
    name: 'Qoyod',
    logo: '/images/qoyod-logo.png',
    category: 'Cloud',
  },
  {
    name: 'Peachtree',
    logo: '/images/peachtree-logo.png',
    category: 'Accounting',
  },
  {
    name: 'Tally',
    logo: '/images/tally-logo.png',
    category: 'Accounting',
  },
  {
    name: 'Advanced Microsoft Excel',
    logo: '/images/excel-logo.png',
    category: 'Productivity',
  },
  {
    name: 'Microsoft Office',
    logo: '/images/microsoft-office-logo.png',
    category: 'Productivity',
  },
];

const categoryStyles: Record<Category, string> = {
  ERP:
    'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800',

  Accounting:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',

  Cloud:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800',

  Financial:
    'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800',

  Productivity:
    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
};

export default function Software() {
  return (
    <section
      id="software"
      className="
        relative
        overflow-hidden
        border-b border-slate-200
        bg-[#f7fbfb]
        py-14
        dark:border-slate-800
        dark:bg-slate-900
        sm:py-16
      "
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="mb-9">
          <span
            className="
              mb-2 block
              text-[12px]
              font-extrabold
              uppercase
              tracking-[0.20em]
              text-[#087d69]
              dark:text-teal-400
              sm:text-[13px]
            "
          >
            ERP &amp; SOFTWARE
          </span>

          <h2
            className="
              text-[29px]
              font-extrabold
              leading-tight
              tracking-[-0.025em]
              text-[#12364d]
              dark:text-slate-100
              sm:text-[34px]
              lg:text-[39px]
            "
          >
            ERP Systems &amp; Accounting Software
          </h2>

          <p
            className="
              mt-2
              max-w-[900px]
              text-[14px]
              font-medium
              leading-relaxed
              text-slate-600
              dark:text-slate-300
              sm:text-[15px]
            "
          >
            Tools and systems I have worked with for accounting, reporting,
            inventory, AP/AR and financial management.
          </p>
        </div>

        {/* SOFTWARE GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {softwareItems.map((software) => (
            <div
              key={software.name}
              className="
                group
                relative
                flex
                min-h-[82px]
                items-center
                overflow-hidden
                rounded-[18px]
                border
                border-slate-200
                bg-white
                px-4
                py-3

                shadow-[0_4px_12px_rgba(15,23,42,0.06)]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-[5px]
                hover:border-teal-300
                hover:shadow-[0_14px_28px_rgba(13,148,136,0.18),0_5px_9px_rgba(15,23,42,0.08)]

                dark:border-slate-700
                dark:bg-slate-800
                dark:shadow-[0_4px_12px_rgba(0,0,0,0.16)]

                dark:hover:border-teal-500/60
                dark:hover:shadow-[0_14px_28px_rgba(13,148,136,0.15),0_5px_9px_rgba(0,0,0,0.25)]
              "
            >
              {/* SUBTLE HOVER / 3D LIGHT */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-teal-50/80
                  via-transparent
                  to-transparent
                  dark:from-teal-900/20
                "
              />

              {/* LOGO */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-[54px]
                  w-[105px]
                  shrink-0
                  items-center
                  justify-center
                  px-2
                "
              >
                <img
                  src={software.logo}
                  alt={`${software.name} logo`}
                  loading="lazy"
                  className="
                    max-h-[44px]
                    max-w-[90px]
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-[1.06]
                  "
                />
              </div>

              {/* DIVIDER */}
              <div
                className="
                  relative
                  z-10
                  mx-3
                  h-[42px]
                  w-px
                  shrink-0
                  bg-slate-200
                  dark:bg-slate-600
                "
              />

              {/* SOFTWARE NAME */}
              <div className="relative z-10 min-w-0 flex-1">
                <h3
                  className="
                    text-[14px]
                    font-extrabold
                    leading-tight
                    tracking-[-0.01em]
                    text-[#15354b]
                    transition-all
                    duration-300

                    group-hover:translate-x-[2px]
                    group-hover:text-[#087d69]

                    dark:text-slate-100
                    dark:group-hover:text-teal-300

                    sm:text-[15px]
                  "
                >
                  {software.name}
                </h3>
              </div>

              {/* CATEGORY */}
              <span
                className={`
                  relative
                  z-10
                  ml-3
                  inline-flex
                  min-w-[76px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  px-3
                  py-[6px]
                  text-[10px]
                  font-extrabold
                  leading-none

                  transition-transform
                  duration-300
                  group-hover:scale-[1.04]

                  ${categoryStyles[software.category]}
                `}
              >
                {software.category}
              </span>

              {/* HOVER DEPTH LINE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-[8%]
                  right-[8%]
                  h-[2px]
                  rounded-full
                  bg-transparent
                  transition-all
                  duration-300

                  group-hover:bg-teal-400/60
                  group-hover:shadow-[0_3px_9px_rgba(20,184,166,0.45)]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
