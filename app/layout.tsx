import type { Metadata } from "next";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://avtorlab.com.ua").replace(/\/$/, "");
const googleMapsProfile = "https://www.google.com/maps/place/AvtorLab/@48.4391202,35.0460747,784m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40dbe3874afea53b:0x56bc64e017adf841!8m2!3d48.4391202!4d35.048655!16s%2Fg%2F11yxg0n21y?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Зуботехническая лаборатория Авторлаб | Avtorlab dental laboratory Dnipro",
  description:
    "Avtorlab — зуботехническая лаборатория в Днепре. Виниры, циркониевые коронки, полные дуги, титановые балки, каппы и услуги фрезерного центра для клиник и лабораторий.",
  keywords: [
    "зуботехническая лаборатория авторлаб",
    "зуботехническая лаборатория днепр",
    "avtorlab",
    "avtor lab",
    "dental laboratory dnipro",
    "laboratorium dentystyczne dnipro",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Avtorlab dental laboratory | Dnipro",
    description:
      "Dental laboratory in Dnipro: veneers, zirconia crowns, full-arch restorations, titanium bars, splints and milling center services.",
    url: siteUrl,
    siteName: "Avtor Lab",
    type: "website",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avtorlab dental laboratory | Dnipro",
    description: "Dental laboratory in Dnipro for clinics and labs across Ukraine.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Avtor Lab",
  alternateName: "Авторлаб",
  url: siteUrl,
  telephone: "+380730006699",
  email: "avtorlab1@gmail.com",
  image: `${siteUrl}/brand/logo-white.png`,
  areaServed: "Dnipro, Ukraine",
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
