import { cn } from "@/lib/utils";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Courgette } from "next/font/google";

import type { Metadata } from "next";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { BASE_URL } from "@/constants/url";
import "@/styles/globals.css";
import { getLangDir } from "rtl-detect";
import { Toaster } from "sonner";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Skyscope",
    "Flight Simulation",
    "Online Map Tool",
    "EFB",
    "Live Connections",
    "IVAO",
    "ivao",
    "ivao map",
    "webeye",
    "VATSIM",
    "vatsim",
    "vatsim map",
    "POSCON",
    "poscon",
    "poscon map",
    "Virtual Aviators",
    "Real-time Interaction",
    "Flight Simulation Community",
    "Flight Simulation",
    "Immersive Experience",
    "Collaborative Platform",
    "Innovative Features",
    "Flight Simulation Networks",
    "Realistic Flying",
    "Virtual Pilots",
  ],
  icons: {
    icon: [
      {
        url: "/light-icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/dark-icon.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@ruyymon",
  },
};

const courgette = Courgette({
  weight: "400",
  variable: "--font-courgette",
  subsets: ["latin", "latin-ext"],
});

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const dir = getLangDir(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "overscroll-none whitespace-pre-line",
          GeistSans.variable,
          GeistMono.variable,
          courgette.variable,
        )}
      >
        <Providers locale={locale}>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
