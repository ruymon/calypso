import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import type { Metadata } from "next";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { IS_IN_DEVELOPMENT } from "@/constants/workspace";
import { firebaseConfig } from "@/lib/firebase";
import "@/styles/globals.css";
import { LogSnagProvider } from "@logsnag/next";
import { getLangDir } from "rtl-detect";
import { Toaster } from "sonner";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
  authors: [
    {
      name: "Ruy Monteiro",
      url: "https://github.com/ruymon",
    },
    {
      name: "Luciano Santos",
      url: "https://github.com/lcnssantos",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@skyscope_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
};

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const dir = getLangDir(locale);
  const shouldInjectToolbar = IS_IN_DEVELOPMENT;

  return (
    <html lang={locale} dir={dir}>
      <head />
      <body
        className={cn(
          "min-h-screen w-full overscroll-none whitespace-pre-line",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers locale={locale}>
          {children}
          {shouldInjectToolbar && <VercelToolbar />}
        </Providers>
        <LogSnagProvider
          token="f337c938614cec433562bda0b3ef1463"
          project="skyscope"
        />
        <Toaster />
        <GoogleAnalytics gaId={firebaseConfig.measurementId!} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
