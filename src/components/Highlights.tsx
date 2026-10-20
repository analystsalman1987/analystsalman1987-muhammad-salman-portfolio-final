import { HighlightItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';
import { DEFAULT_APP_DATA } from '../data/defaultData';

interface HighlightsProps {
  highlights?: HighlightItem[];
}

export function Highlights({ highlights }: HighlightsProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.highlights;
  const items = highlights && highlights.length > 0 ? highlights : DEFAULT_APP_DATA.highlights;

  return (
    <section
      id="highlights"
      className="misty-portfolio relative overflow-hidden border-y border-white/10 py-16 sm:py-20"
      style={{ backgroundColor: '#305879' }}
    >
      {/* Keep the existing accounting image as a subtle, static background. */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/images/accounting_workplace_optimized.webp"
          alt=""
          className="h-full w-full select-none object-cover object-center opacity-[0.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#305879]/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Preserve the existing main-heading format and hover class. */}
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-1.5 text-center">
          <span className="block text-xs font-bold uppercase tracking-widest text-[#BE9852]">
            {isRTL ? t.tag : 'Executive Overview'}
          </span>
          <div>
            <h2 className="main-heading-3d text-3xl font-extrabold tracking-tight text-[#17324A] sm:text-4xl">
              {isRTL ? t.title : 'Professional Highlights'}
            </h2>
          </div>
          <p className="mt-1 text-xs text-[#F3F7FA] sm:text-sm">
            {isRTL
              ? t.subtitle
              : 'A quick, high-level overview of core accounting qualifications, regional experience, and operational strengths.'}
          </p>
        </div>

        {/* Approved text-only highlights: no cards, badges, icons or buttons. */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => {
            const arItem = t.items.find((x) => x.id === item.id) || t.items[idx];
            const title = isRTL && arItem ? arItem.title : item.title;
            const subtitle = isRTL && arItem ? arItem.subtitle : item.subtitle;

            return (
              <div key={item.id || idx} className="min-w-0 text-start">
                <h3 className="text-sm font-bold leading-snug text-[#E5C78E]">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#F3F7FA]">
                  {subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
