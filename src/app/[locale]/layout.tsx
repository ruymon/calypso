import { ReactNode } from "react";
import { Providers } from "./providers";

interface AppLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function AppLayout({
  children,
  params: { locale },
}: AppLayoutProps) {
  return <Providers locale={locale}>{children}</Providers>;
}
