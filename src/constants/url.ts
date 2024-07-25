import { siteConfig } from "@/config/site";
import { env } from "@/env";

export const BASE_URL =
  env.NEXT_PUBLIC_NODE_ENV === "production"
    ? siteConfig.url
    : "http://localhost:3000";

export const BASE_URL_WITHOUT_PROTOCOL =
  env.NEXT_PUBLIC_NODE_ENV === "production" ? "skyscope.app" : "localhost";
