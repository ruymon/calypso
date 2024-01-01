import { cn } from '@/lib/utils';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { ClientProviders } from './client-providers';

import { siteConfig } from '@/config/site';
import '@/styles/colors.css';
import '@/styles/globals.css';


export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen h-full flex', GeistSans.variable, GeistMono.variable)}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
