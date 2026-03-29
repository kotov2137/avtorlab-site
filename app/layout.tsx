import type { Metadata } from "next";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://avtorlab.com.ua").replace(/\/$/, "");
const googleMapsProfile = "https://www.google.com/maps/place/AvtorLab/@48.4391202,35.0460747,784m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40dbe3874afea53b:0x56bc64e017adf841!8m2!3d48.4391202!4d35.048655!16s%2Fg%2F11yxg0n21y?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D";
const defaultTitle = "Зуботехническая лаборатория Авторлаб | Avtorlab dental laboratory Dnipro";
const defaultDescription =
  "Avtorlab — зуботехническая лаборатория в Днепре. Виниры, циркониевые коронки, полные дуги, титановые балки, каппы и услуги фрезерного центра для клиник и лабораторий.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Avtorlab",
  },
  description: defaultDescription,
  applicationName: "Avtorlab",
  referrer: "origin-when-cross-origin",
  keywords: [
    "зуботехническая лаборатория авторлаб",
    "зуботехническая лаборатория днепр",
    "зуботехническая лаборатория dnipro",
    "avtorlab",
    "avtor lab",
    "dental laboratory dnipro",
    "dental lab dnipro",
    "laboratorium dentystyczne dnipro",
    "лаборатория зуботехническая днепр",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Avtorlab",
    locale: "uk_UA",
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
    title: defaultTitle,
    description: defaultDescription,
    images: ["/brand/logo-white.png"],
  },
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
  category: "Dental laboratory",
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
      name: "Avtor Lab",
      alternateName: ["Авторлаб", "Avtorlab"],
      url: siteUrl,
      image: `${siteUrl}/brand/logo-white.png`,
      logo: `${siteUrl}/brand/logo-white.png`,
      telephone: "+380730006699",
      email: "avtorlab1@gmail.com",
      areaServed: ["Dnipro", "Ukraine"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dnipro",
        addressCountry: "UA",
      },
      hasMap: googleMapsProfile,
      sameAs: [
        googleMapsProfile,
        "https://t.me/avtor_lab",
        "https://www.instagram.com/yevhen_bitsenko/",
        "https://www.facebook.com/evgeniy.pavlovich.1",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+380730006699",
          contactType: "customer support",
          availableLanguage: ["Ukrainian", "Russian", "Polish", "English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Avtorlab",
      publisher: {
        "@id": `${siteUrl}#business`,
      },
      inLanguage: ["uk", "ru", "pl", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
