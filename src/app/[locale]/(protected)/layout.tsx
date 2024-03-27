import { COOKIE_PREFIX } from "@/constants/cookies";
import { cookies } from "next/headers";
import { ReactNode } from "react";

interface ProtectedLayoutProps {
  app: ReactNode;
  login: ReactNode;
}

export default function ProtectedLayout({ app, login }: ProtectedLayoutProps) {
  const accessToken = cookies().get(`${COOKIE_PREFIX}access-token`)?.value;

  const isAuthenticated = !!accessToken;

  if (isAuthenticated) {
    return <>{app}</>;
  }

  return login;
}
