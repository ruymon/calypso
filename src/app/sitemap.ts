import { BASE_URL } from "@/constants/url";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/home`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/legal/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/legal/tos`,
      lastModified: new Date(),
    }
  ]
}