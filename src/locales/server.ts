import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    af: () => import("./af"), // Afrikaans
    ar: () => import("./ar"), // Arabic
    ca: () => import("./ca"), // Catalan
    cs: () => import("./cs"), // Czech
    da: () => import("./da"), // Danish
    de: () => import("./de"), // German
    el: () => import("./el"), // Greek
    en: () => import("./en"), // English
    es: () => import("./es"), // Spanish
    fi: () => import("./fi"), // Finnish
    fr: () => import("./fr"), // French
    he: () => import("./he"), // Hebrew
    hu: () => import("./hu"), // Hungarian
    it: () => import("./it"), // Italian
    ja: () => import("./ja"), // Japanese
    ko: () => import("./ko"), // Korean
    nl: () => import("./nl"), // Dutch
    no: () => import("./no"), // Norwegian
    pl: () => import("./pl"), // Polish
    pt: () => import("./pt"), // Portuguese
    ro: () => import("./ro"), // Romanian
    ru: () => import("./ru"), // Russian
    sr: () => import("./sr"), // Serbian
    sv: () => import("./sv"), // Swedish
    tr: () => import("./tr"), // Turkish
    uk: () => import("./uk"), // Ukrainian
    vi: () => import("./vi"), // Vietnamese
    zh: () => import("./zh"), // Chinese
  });
