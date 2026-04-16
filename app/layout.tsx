import type { Metadata } from "next";
import "./globals.css";
import { email, googleMapsProfile, phoneTel, siteUrl, telegramUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Avtorlab",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}#business`,
      name: "Avtorlab",
      alternateName: ["Авторлаб", "Avtor Lab"],
      url: siteUrl,
      image: `${siteUrl}/brand/logo-white.png`,
      logo: `${siteUrl}/brand/logo-white.png`,
      telephone: phoneTel,
      email,
      description:
        "Dental laboratory in Dnipro for zirconia crowns, ceramic crowns, veneers, ceramic overlays, titanium bars, milled crowns, and digital restorative workflows.",
      areaServed: ["Dnipro", "Ukraine"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dnipro",
        addressCountry: "UA",
      },
      hasMap: googleMapsProfile,
      sameAs: [
        googleMapsProfile,
        telegramUrl,
        "https://www.instagram.com/yevhen_bitsenko/",
        "https://www.facebook.com/evgeniy.pavlovich.1",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: phoneTel,
          contactType: "customer support",
          availableLanguage: ["Ukrainian", "Russian", "Polish", "English"],
        },
      ],
      knowsAbout: [
        "Зуботехническая лаборатория",
        "Зубной техник",
        "Циркониевые коронки",
        "Циркониевые виниры",
        "Керамические коронки",
        "Керамические виниры",
        "Керамические накладки",
        "Титановые балки",
        "Фрезерованные коронки",
        "Циркон",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dental laboratory services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zirconia crowns" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic crowns" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zirconia veneers" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic veneers" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic overlays" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Titanium bars" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Milled crowns" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Avtorlab",
      publisher: { "@id": `${siteUrl}#business` },
      inLanguage: ["uk", "ru", "pl", "en"],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
