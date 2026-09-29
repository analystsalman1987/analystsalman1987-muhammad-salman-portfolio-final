import React, { useState } from "react";

type Category =
  | "ERP"
  | "Accounting"
  | "Cloud"
  | "Financial"
  | "Productivity";

type SoftwareItem = {
  name: string;
  category: Category;
  logo?: string;
  fallback: string;
};

const softwareItems: SoftwareItem[] = [
  {
    name: "OFIS",
    category: "ERP",
    logo: "/images/software/oracle-logo.svg",
    fallback: "OFIS",
  },
  {
    name: "QuickBooks",
    category: "Accounting",
    logo: "/images/software/quickbooks-logo.svg",
    fallback: "QB",
  },
  {
    name: "Arqami",
    category: "ERP",
    fallback: "ARQAMI",
  },
  {
    name: "Delta Financial",
    category: "Financial",
    logo: "/images/software/delta-logo.svg",
    fallback: "DELTA",
  },
  {
    name: "SMACC",
    category: "ERP",
    logo: "/images/software/smacc-logo.png",
    fallback: "SMACC",
  },
  {
    name: "Daftra",
    category: "Cloud",
    fallback: "DAFTRA",
  },
  {
    name: "Qoyod",
    category: "Cloud",
    fallback: "QOYOD",
  },
  {
    name: "Peachtree",
    category: "Accounting",
    fallback: "PEACHTREE",
  },
  {
    name: "Tally",
    category: "Accounting",
    fallback: "TALLY",
  },
  {
    name: "Advanced Microsoft Excel",
    category: "Productivity",
    logo: "/images/software/excel-logo.svg",
    fallback: "EXCEL",
  },
  {
    name: "Microsoft Office",
    category: "Productivity",
    logo: "/images/software/office-logo.svg",
    fallback: "OFFICE",
  },
];

const categoryStyles: Record<Category, string> = {
  ERP:
    "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800",
  Accounting:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
  Cloud:
    "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800",
  Financial:
    "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800",
  Productivity:
    "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800",
};

function SoftwareLogo({ item }: { item: SoftwareItem }) {
  const [failed, setFailed] = useState(false);

  if (!item.logo || failed) {
    return (
      <div className="flex h-12 w-full items-center justify-center px-2">
        <span className="text-center text-[11px] font-extrabold tracking-wide text-slate-600 dark:text-slate-300">
          {item.fallback}
        </span>
      </div>
    );
  }

  return (
    <img
      src={item.logo}
      alt={`${item.name} logo`}
      onError={() => setFailed(true)}
      className="h-12 w-full object-contain transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
  );
}

export function Software() {
  return (
    <section
      id="software"
      className="relative overflow-hidden bg-[#f7fbfb] py-20 transition-colors duration-300 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-teal-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-teal-300">
            ERP &amp; Software
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            ERP Systems &amp; Accounting Software
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Tools and systems I have worked with for accounting, reporting,
            inventory, AP/AR and financial management.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {softwareItems.map((item) => (
            <div
              key={item.name}
              className="group flex min-h-[88px] items-center rounded-2xl border border-slate-200/90 bg-white px-4 py-4 shadow-[0_4px_14px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:border-teal-300 hover:shadow-[0_14px_30px_rgba(13,148,136,0.16)] dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-600 dark:hover:shadow-[0_14px_30px_rgba(20,184,166,0.10)]"
            >
              <div className="flex w-[105px] shrink-0 items-center justify-center pr-4">
                <SoftwareLogo item={item} />
              </div>

              <div className="h-12 w-px shrink-0 bg-slate-200 transition-colors duration-300 group-hover:bg-teal-300 dark:bg-slate-600 dark:group-hover:bg-teal-600" />

              <div className="flex min-w-0 flex-1 items-center justify-between gap-3 pl-4">
                <h3 className="min-w-0 text-[15px] font-bold leading-5 text-slate-800 sm:text-base dark:text-slate-100">
                  {item.name}
                </h3>

                <span
                  className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${categoryStyles[item.category]}`}
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
