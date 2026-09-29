import React, { useState } from "react";

type Category =
  | "ERP"
  | "Accounting"
  | "Cloud"
  | "Financial"
  | "Productivity";

interface SoftwareItem {
  name: string;
  category: Category;
  logo?: string;
  fallback: string;
  nameColor?: string;
}

const softwareItems: SoftwareItem[] = [
  {
    name: "OFIS",
    category: "ERP",
    logo: "/images/software/oracle-logo.svg",
    fallback: "OFIS",
    nameColor: "text-slate-900 dark:text-white",
  },
  {
    name: "QuickBooks",
    category: "Accounting",
    logo: "/images/software/quickbooks-logo.svg",
    fallback: "QuickBooks",
    nameColor: "text-green-700 dark:text-green-400",
  },
  {
    name: "Arqami",
    category: "ERP",
    fallback: "ARQAMI",
    nameColor: "text-sky-700 dark:text-sky-400",
  },
  {
    name: "Delta Financial",
    category: "Financial",
    logo: "/images/software/delta-logo.svg",
    fallback: "DELTA",
    nameColor: "text-indigo-700 dark:text-indigo-400",
  },
  {
    name: "SMACC",
    category: "ERP",
    logo: "/images/software/smacc-logo.png",
    fallback: "SMACC",
    nameColor: "text-blue-700 dark:text-blue-400",
  },
  {
    name: "Daftra",
    category: "Cloud",
    fallback: "DAFTRA",
    nameColor: "text-blue-700 dark:text-blue-400",
  },
  {
    name: "Qoyod",
    category: "Cloud",
    fallback: "QOYOD",
    nameColor: "text-blue-900 dark:text-blue-300",
  },
  {
    name: "Peachtree",
    category: "Accounting",
    fallback: "PEACHTREE",
    nameColor: "text-orange-600 dark:text-orange-400",
  },
  {
    name: "Tally",
    category: "Accounting",
    fallback: "TALLY",
    nameColor: "text-red-700 dark:text-red-400",
  },
  {
    name: "Advanced Microsoft Excel",
    category: "Productivity",
    logo: "/images/software/excel-logo.svg",
    fallback: "EXCEL",
    nameColor: "text-emerald-700 dark:text-emerald-400",
  },
  {
    name: "Microsoft Office",
    category: "Productivity",
    logo: "/images/software/office-logo.svg",
    fallback: "OFFICE",
    nameColor: "text-orange-600 dark:text-orange-400",
  },
];

const categoryStyles: Record<Category, string> = {
  ERP:
    "border-cyan-300 bg-cyan-50 text-cyan-700 dark:border-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300",

  Accounting:
    "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",

  Cloud:
    "border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-700 dark:bg-sky-950/40 dark:text-sky-300",

  Financial:
    "border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",

  Productivity:
    "border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
};

function SoftwareLogo({ item }: { item: SoftwareItem }) {
  const [logoError, setLogoError] = useState(false);

  if (!item.logo || logoError) {
    return (
      <div className="flex h-[52px] w-full items-center justify-center">
        <span className="text-center text-[12px] font-black tracking-[0.06em] text-slate-800 dark:text-slate-100">
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
      className="h-[52px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
    />
  );
}

export function Software() {
  return (
    <section
      id="software"
      className="relative overflow-hidden bg-slate-50 py-20 transition-colors duration-300 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 text-center">

          <span className="inline-flex rounded-full border border-teal-300 bg-white px-5 py-2 text-xs font-extrabold uppercase tracking-[0.20em] text-teal-700 shadow-sm dark:border-teal-700 dark:bg-slate-800 dark:text-teal-300">
            ERP &amp; Software
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[42px] dark:text-white">
            ERP Systems &amp;{" "}
            <span className="text-teal-700 dark:text-teal-400">
              Accounting Software
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-teal-600" />

          <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base dark:text-slate-300">
            Tools and systems I have worked with for accounting, reporting,
            inventory, AP/AR and financial management.
          </p>
        </div>

        {/* Software Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {softwareItems.map((item) => (
            <div
              key={item.name}
              className="
                group
                flex
                min-h-[94px]
                items-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-4
                shadow-[0_5px_18px_rgba(15,23,42,0.07)]
                transition-all
                duration-300
                ease-out

                hover:-translate-y-2
                hover:border-teal-400
                hover:shadow-[0_18px_38px_rgba(13,148,136,0.18)]

                dark:border-slate-700
                dark:bg-slate-800
                dark:hover:border-teal-500
                dark:hover:shadow-[0_18px_38px_rgba(20,184,166,0.12)]
              "
            >

              {/* Logo */}
              <div className="flex w-[110px] shrink-0 items-center justify-center pr-4">
                <SoftwareLogo item={item} />
              </div>

              {/* Divider */}
              <div className="h-14 w-px shrink-0 bg-slate-200 transition-colors duration-300 group-hover:bg-teal-400 dark:bg-slate-600" />

              {/* Name + Category */}
              <div className="flex min-w-0 flex-1 items-center justify-between gap-3 pl-4">

                <h3
                  className={`min-w-0 text-[16px] font-extrabold leading-5 transition-all duration-300 group-hover:translate-x-0.5 ${item.nameColor}`}
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
