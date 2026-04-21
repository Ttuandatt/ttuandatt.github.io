import { ui, defaultLang, type Lang, type UIKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
    const [, firstSegment] = url.pathname.split("/");
    if (firstSegment in ui) return firstSegment as Lang;
    return defaultLang;
}

export function useTranslations(lang: Lang) {
    return function t(key: UIKey): string {
        return ui[lang][key] ?? ui[defaultLang][key];
    };
}

/**
 * Build a locale-prefixed path. VI (default) has no prefix, EN is prefixed with /en.
 * Examples:
 *   localizePath("/", "vi")             -> "/"
 *   localizePath("/", "en")             -> "/en/"
 *   localizePath("/projects/foo", "vi") -> "/projects/foo"
 *   localizePath("/projects/foo", "en") -> "/en/projects/foo"
 *   localizePath("/#about", "en")       -> "/en/#about"
 */
export function localizePath(path: string, lang: Lang): string {
    if (lang === defaultLang) return path;
    if (path === "/") return `/${lang}/`;
    if (path.startsWith("/#")) return `/${lang}/${path.slice(1)}`;
    return `/${lang}${path}`;
}

/**
 * Localised field accessor: values may be a plain string (same in both languages)
 * or an object { vi, en } with per-locale text.
 */
export type Localized = string | { vi: string; en: string };

export function pickLocale(value: Localized, lang: Lang): string {
    if (typeof value === "string") return value;
    return value[lang] ?? value[defaultLang];
}
