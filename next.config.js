/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // FIXME: Remove this and replace with the correct domains for images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
