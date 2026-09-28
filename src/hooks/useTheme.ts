import { useState, useEffect, useCallback } from 'react';
import { ThemeMode } from '../types';

const THEME_STORAGE_KEY = 'ms_accountant_theme';

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
        if (saved === 'dark' || saved === 'light') return saved as ThemeMode;
      }
    } catch {}
    return 'light';
  });

  const applyTheme = useCallback((mode: ThemeMode) => {
    try {
      if (typeof document === 'undefined') return;
      const root = document.documentElement;
      const isDark = mode === 'dark';

      if (isDark) {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
      }
    } catch (e) {
      console.warn('Theme apply error:', e);
    }
  }, []);

  const setTheme = useCallback(
    (newTheme: ThemeMode) => {
      const mode: ThemeMode = newTheme === 'dark' ? 'dark' : 'light';
      setThemeState(mode);
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem(THEME_STORAGE_KEY, mode);
        }
      } catch {}
      applyTheme(mode);
    },
    [applyTheme]
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  return { theme, setTheme };
}
