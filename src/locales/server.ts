import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: () => import("./en"), // English
    "pt-BR": () => import("./pt-BR"), // Portuguese (Brazil)
  });
