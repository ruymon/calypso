import { cn } from "@/lib/utils";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import type { Metadata } from "next";
import { ReactNode } from "react";
import { ClientProviders } from "./[locale]/client-providers";

import { siteConfig } from "@/config/site";
import { BASE_URL } from "@/lib/constants";
import "@/styles/colors.css";
import "@/styles/globals.css";

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

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen flex",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
