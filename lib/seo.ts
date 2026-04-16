import type { Metadata } from "next";

export type SiteLang = "uk" | "ru" | "pl" | "en";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://avtorlab.com.ua").replace(/\/$/, "");
export const googleMapsProfile = "https://www.google.com/maps/place/AvtorLab/@48.4391202,35.0460747,784m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40dbe3874afea53b:0x56bc64e017adf841!8m2!3d48.4391202!4d35.048655!16s%2Fg%2F11yxg0n21y?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D";

export const phoneDisplay = "+38 (073) 000-66-99";
export const phoneTel = "+380730006699";
export const email = "avtorlab1@gmail.com";
export const telegramUrl = "https://t.me/avtor_lab";

export const langPath: Record<SiteLang, string> = {
  uk: "/",
  ru: "/ru",
  pl: "/pl",
  en: "/en",
};

const SEO_COPY: Record<SiteLang, { title: string; description: string; locale: string }> = {
  uk: {
    title:
      "Зуботехнічна лабораторія Авторлаб у Дніпрі | цирконієві та керамічні коронки, вініри, титанові балки",
    description:
      "Avtorlab — зуботехнічна лабораторія у Дніпрі. Цирконієві коронки, керамічні коронки, цирконієві вініри, керамічні вініри, керамічні накладки, титанові балки та фрезеровані коронки.",
    locale: "uk_UA",
  },
  ru: {
    title:
      "Зуботехническая лаборатория Авторлаб в Днепре | циркониевые и керамические коронки, виниры, титановые балки",
    description:
      "Avtorlab — зуботехническая лаборатория в Днепре. Циркониевые коронки, циркониевые виниры, керамические коронки, керамические виниры, керамические накладки, титановые балки и фрезерованные коронки.",
    locale: "ru_UA",
  },
  pl: {
    title:
      "Laboratorium dentystyczne Avtorlab w Dnieprze | korony cyrkonowe i ceramiczne, licówki, belki tytanowe",
    description:
      "Avtorlab to laboratorium dentystyczne w Dnieprze. Korony cyrkonowe, korony ceramiczne, licówki cyrkonowe, licówki ceramiczne, nakłady ceramiczne, belki tytanowe i korony frezowane.",
    locale: "pl_PL",
  },
  en: {
    title:
      "Avtorlab dental laboratory in Dnipro | zirconia crowns, ceramic crowns, veneers, titanium bars",
    description:
      "Avtorlab is a dental laboratory in Dnipro. Zirconia crowns, ceramic crowns, zirconia veneers, ceramic veneers, ceramic overlays, titanium bars, and milled crowns for clinics and dentists.",
    locale: "en_US",
  },
};

export function buildHomeMetadata(lang: SiteLang): Metadata {
  const copy = SEO_COPY[lang];
  const path = langPath[lang];
  const canonical = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
      languages: {
        uk: `${siteUrl}/`,
        ru: `${siteUrl}/ru`,
        pl: `${siteUrl}/pl`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/`,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonical,
      siteName: "Avtorlab",
      locale: copy.locale,
      type: "website",
      images: [
        {
          url: "/brand/logo-white.png",
          width: 1200,
          height: 630,
          alt: "Avtorlab dental laboratory",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/brand/logo-white.png"],
    },
    keywords: [
      "зуботехническая лаборатория",
      "зубной техник",
      "циркониевые коронки",
      "циркониевые виниры",
      "керамические коронки",
      "керамические виниры",
      "керамические накладки",
      "титановые балки",
      "фрезерованные коронки",
      "коронка",
      "циркон",
      "зуботехническая лаборатория днепр",
      "avtorlab",
    ],
  };
}
