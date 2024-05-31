import { env } from "@/env.mjs";

export const IS_IN_DEVELOPMENT = env.NEXT_PUBLIC_NODE_ENV === "development";
export const BUILD_VERSION = "v1.42.0 beta";
