import { env } from "@/env.mjs";

export const IS_IN_DEVELOPMENT = env.NEXT_PUBLIC_NODE_ENV === "development";
export const BUILD_VERSION = "v1.36.0 beta";
