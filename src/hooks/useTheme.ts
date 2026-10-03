import { useState, useEffect, useCallback } from 'react';
import { ThemeMode } from '../types';

const THEME_STORAGE_KEY = 'ms_accountant_theme';

export function useTheme() {
  const [theme] = useState<ThemeMode>('dark');

  const applyTheme = useCallback(() => {
    try {
      if (typeof document === 'undefined') return;
      const root = document.documentElement;
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } catch (e) {
      console.warn('Theme apply error:', e);
    }
  }, []);

  const setTheme = useCallback(() => {
    // Fixed theme: Deep Navy + Gold corporate theme
    applyTheme();
  }, [applyTheme]);

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  return { theme, setTheme };
}
