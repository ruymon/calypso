import withVercelToolbar from "@vercel/toolbar/plugins/next";
import createJiti from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // FIXME: Remove this and replace with the correct domains for images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withVercelToolbar()(nextConfig);