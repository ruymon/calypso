"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Locale } from "@/config/i18n";
import { I18nProviderClient } from "@/locales/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps as ThemeConfigType } from "next-themes/dist/types";
import { ReactNode } from "react";

const themeConfig: ThemeConfigType = {
  themes: ["light", "dark"],
  attribute: "class",
  defaultTheme: "dark",
  disableTransitionOnChange: true,
  enableSystem: false,
  storageKey: "theme",
};

interface ClientProvidersProps {
  children: ReactNode;
  locale: Locale;
}

const queryClient = new QueryClient();

export function ClientProviders({ children, locale }: ClientProvidersProps) {
  return (
    <I18nProviderClient locale={locale}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
        <TooltipProvider delayDuration={0}>
          <ThemeProvider {...themeConfig}>{children}</ThemeProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </I18nProviderClient>
  );
}
