import { BASE_URL } from "@/lib/constants"
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/og/*"],
      //disallow: "/private/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`
  }
}