import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LOCAL_STORAGE_KEY = 'ms_portfolio_liked';

export function LikeButton() {
  const { isRTL } = useLanguage();
  const [likes, setLikes] = useState<number | null>(null);
  const [hasLiked, setHasLiked] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return localStorage.getItem(LOCAL_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch initial global like count from backend
  useEffect(() => {
    let isMounted = true;
    fetch('/api/likes')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch likes');
        return res.json();
      })
      .then((data) => {
        if (isMounted && typeof data.likes === 'number') {
          setLikes(data.likes);
        }
      })
      .catch(() => {
        // Fallback gracefully without breaking page
        if (isMounted) {
          setLikes((prev) => (prev !== null ? prev : 0));
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLike = async () => {
    if (hasLiked || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        const data = await res.json();
        if (typeof data.likes === 'number') {
          setLikes(data.likes);
        } else {
          setLikes((prev) => (prev ?? 0) + 1);
        }
        setHasLiked(true);
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
        } catch {
          // ignore localStorage error
        }
      } else {
        const data = await res.json().catch(() => null);
        if (data?.likes !== undefined) {
          setLikes(data.likes);
        }
      }
    } catch {
      // Gracefully handle network failure without breaking page
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayCount = likes !== null ? likes : 0;
  const label = hasLiked ? (isRTL ? 'تم الإعجاب' : 'Liked') : (isRTL ? 'إعجاب' : 'Like');

  return (
    <button
      type="button"
      onClick={handleLike}
      disabled={hasLiked || isSubmitting}
      aria-label={hasLiked ? 'Portfolio liked' : 'Like this portfolio'}
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold
        transition-all duration-300 select-none touch-manipulation
        ${
          hasLiked
            ? 'bg-rose-500/10 dark:bg-rose-50 border-rose-500/40 text-rose-300 dark:text-rose-600 cursor-default shadow-xs'
            : 'bg-slate-800/80 dark:bg-white text-slate-300 dark:text-[#334155] border-slate-700/80 dark:border-[#CBD5E1] hover:border-teal-500/60 dark:hover:border-[#0F766E]/60 hover:text-white dark:hover:text-[#0F766E] hover:-translate-y-0.5 hover:shadow-xs hover:shadow-teal-500/10 cursor-pointer'
        }
        ${isSubmitting ? 'opacity-70' : 'opacity-100'}
      `}
    >
      <Heart
        className={`w-3.5 h-3.5 transition-transform duration-300 ${
          hasLiked
            ? 'fill-rose-500 text-rose-500 scale-105'
            : 'text-teal-400 dark:text-[#0F766E]'
        }`}
      />
      <span>{label}</span>
      <span className="inline-block px-1.5 py-0.5 rounded bg-black/25 dark:bg-slate-100 text-[11px] font-mono font-medium text-slate-200 dark:text-slate-700">
        {displayCount}
      </span>
    </button>
  );
}
