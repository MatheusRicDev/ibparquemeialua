'use client';

import React, { useState, createContext, useContext, useCallback, useSyncExternalStore } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/app/globals';
import { lightTheme, darkTheme, ThemeType } from '@/styles/theme';

type ThemeContextType = {
  toggleTheme: () => void;
  isDark: boolean;
};

const CustomThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  isDark: false,
});

export const useCustomTheme = () => useContext(CustomThemeContext);

const THEME_EVENT = 'theme-change';

function emitThemeChange() {
  window.dispatchEvent(new Event(THEME_EVENT));
}

function subscribeTheme(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function getThemeSnapshot() {
  return localStorage.getItem('theme') === 'dark';
}

function getServerSnapshot() {
  return false;
}

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  const isDark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const newVal = !isDark;
    localStorage.setItem('theme', newVal ? 'dark' : 'light');
    emitThemeChange();
  }, [isDark]);

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const themeToUse: ThemeType = isDark ? darkTheme : lightTheme;

  const content = (
    <CustomThemeContext.Provider value={{ toggleTheme, isDark }}>
      <ThemeProvider theme={themeToUse}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );

  if (typeof window !== 'undefined') {
    return content;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {content}
    </StyleSheetManager>
  );
}
