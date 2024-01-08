"use client"

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps as ThemeConfigType } from "next-themes/dist/types";
import { ReactNode, useState } from "react";

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
  const [ queryClient ] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <TooltipProvider delayDuration={0}>
        <ThemeProvider {...themeConfig}>
          {children}
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};


