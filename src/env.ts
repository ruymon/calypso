import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
  */
  client: {
    // Mapbox
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: z.string().min(1),

    // Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_APP_ID: z.string().min(1),
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: z.string().min(1),

    // IVAO
    NEXT_PUBLIC_IVAO_CLIENT_ID: z.string().min(1),
    NEXT_PUBLIC_IVAO_CLIENT_SECRET: z.string().min(1),

    // Vatsim
    NEXT_PUBLIC_VATSIM_CLIENT_ID: z.string().min(1),
    NEXT_PUBLIC_VATSIM_CLIENT_SECRET: z.string().min(1),

    // Navigraph
    NEXT_PUBLIC_NAVIGRAPH_CLIENT_ID: z.string().min(1),
    NEXT_PUBLIC_NAVIGRAPH_CLIENT_SECRET: z.string().min(1),
    
    // Environment
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "test", "production"]).optional().default("development"),
    NEXT_PUBLIC_BASE_URL: z.string().min(1).optional(),
  },
  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    // Mapbox
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
    
    // Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

    // IVAO
    NEXT_PUBLIC_IVAO_CLIENT_ID: process.env.NEXT_PUBLIC_IVAO_CLIENT_ID,
    NEXT_PUBLIC_IVAO_CLIENT_SECRET: process.env.NEXT_PUBLIC_IVAO_CLIENT_SECRET,

    // Vatsim
    NEXT_PUBLIC_VATSIM_CLIENT_ID: process.env.NEXT_PUBLIC_VATSIM_CLIENT_ID,
    NEXT_PUBLIC_VATSIM_CLIENT_SECRET: process.env.NEXT_PUBLIC_VATSIM_CLIENT_SECRET,

    // Navigraph
    NEXT_PUBLIC_NAVIGRAPH_CLIENT_ID: process.env.NEXT_PUBLIC_NAVIGRAPH_CLIENT_ID,
    NEXT_PUBLIC_NAVIGRAPH_CLIENT_SECRET: process.env.NEXT_PUBLIC_NAVIGRAPH_CLIENT_SECRET,

    // Environment
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});