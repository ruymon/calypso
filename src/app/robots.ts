import { siteConfig } from "@/config/site"
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;
  
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/og/*"],
      //disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`
  }
}