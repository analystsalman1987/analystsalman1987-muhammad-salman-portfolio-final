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

        {/* Experience Groups — both collapsed by default */}
        <div className="space-y-5">
          {/* Full-Time Experience */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/30 overflow-hidden shadow-xs">
            <button
              type="button"
              onClick={() =>
                setOpenExperienceGroup((current) =>
                  current === 'full-time' ? null : 'full-time'
                )
              }
              aria-expanded={openExperienceGroup === 'full-time'}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left hover:bg-[#F4F6F8]/80 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-300">
                  <Briefcase className="w-4.5 h-4.5" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0F2747] dark:text-white">
                    {isRTL ? 'الخبرة بدوام كامل' : 'Full-Time Experience'}
                  </h3>
                  <p className="text-xs text-[#64748B] dark:text-slate-400">
                    {isRTL ? `${formalJobs.length} وظائف مهنية` : `${formalJobs.length} professional roles`}
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-[#0F766E] dark:text-teal-400 transition-transform duration-300 ${
                  openExperienceGroup === 'full-time' ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openExperienceGroup === 'full-time'
                  ? 'grid-rows-[1fr] opacity-100 border-t border-slate-200/80 dark:border-slate-800/80'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 sm:p-6">
                  <div className={`relative ${isRTL ? 'border-r-2 mr-3 sm:mr-4 pr-6 sm:pr-8' : 'border-l-2 ml-3 sm:ml-4 pl-6 sm:pl-8'} border-slate-200 dark:border-slate-800 space-y-8 sm:space-y-10`}>
                    {formalJobs.map(renderJobCard)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remote / Part-Time Experience */}
          <div id="experience-remote" className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/30 overflow-hidden shadow-xs scroll-mt-24">
            <button
              type="button"
              onClick={() =>
                setOpenExperienceGroup((current) =>
                  current === 'remote' ? null : 'remote'
                )
              }
              aria-expanded={openExperienceGroup === 'remote'}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left hover:bg-[#F4F6F8]/80 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-300">
                  <Briefcase className="w-4.5 h-4.5" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0F2747] dark:text-white">
                    {isRTL ? 'الخبرة عن بُعد / بدوام جزئي' : 'Remote / Part-Time Experience'}
                  </h3>
                  <p className="text-xs text-[#64748B] dark:text-slate-400">
                    {isRTL ? `${remoteJobs.length} مهام محاسبية` : `${remoteJobs.length} accounting engagements`}
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-[#0F766E] dark:text-teal-400 transition-transform duration-300 ${
                  openExperienceGroup === 'remote' ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openExperienceGroup === 'remote'
                  ? 'grid-rows-[1fr] opacity-100 border-t border-slate-200/80 dark:border-slate-800/80'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 sm:p-6">
                  <div className={`relative ${isRTL ? 'border-r-2 mr-3 sm:mr-4 pr-6 sm:pr-8' : 'border-l-2 ml-3 sm:ml-4 pl-6 sm:pl-8'} border-slate-200 dark:border-slate-800 space-y-8 sm:space-y-10`}>
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
