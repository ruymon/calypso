import { createI18nServer } from "@/config/site";
export const {
  getI18n,
  getScopedI18n,
  getStaticParams,
  getCurrentLocale
} = createI18nServer({
  en: () => import("./en")
});