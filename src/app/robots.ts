import { BASE_URL } from "@/constants/url"
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {

  return {
    rules: {
      userAgent: "*",
      allow: [
        "/home",
        "/legal/*",
      ],
      disallow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`
  }
}