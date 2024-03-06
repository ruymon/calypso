import { siteConfig } from '@/config/site'
import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/home',
    display: 'standalone',
    background_color: '#111111',
    theme_color: '#fff',
    icons: [],
  }
}