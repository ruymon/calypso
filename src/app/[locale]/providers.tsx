"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProviderClient } from "@/locales/client";
import { Theme } from "@/types/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
  locale: string;
}

const queryClient = new QueryClient();

export function Providers({ children, locale }: ProvidersProps) {
  return (
    <I18nProviderClient locale={locale}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            themes={["light", "dark"] as Theme[]}
            disableTransitionOnChange
          >
            {children}
            <ReactQueryDevtools />
          </ThemeProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </I18nProviderClient>
  );
}
