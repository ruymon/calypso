import { siteConfig } from "@/config/site";

interface EmbedFloatingBrandingProps {}

export function EmbedFloatingBranding({}: EmbedFloatingBrandingProps) {
  return <footer>{siteConfig.name}</footer>;
}
