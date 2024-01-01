'use client'

import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps as ThemeConfigType } from "next-themes/dist/types";
import { ReactNode } from "react";

const themeConfig: ThemeConfigType = {
  themes: ['light', 'dark'],
  attribute: 'class',
  defaultTheme: 'dark',
  disableTransitionOnChange: true,
  enableSystem: false,
  storageKey: 'theme',
}

interface ClientProvidersProps {
  children: ReactNode
};

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ThemeProvider {...themeConfig}>
      {children}
    </ThemeProvider>
  );
};


