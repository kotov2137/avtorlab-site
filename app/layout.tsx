import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avtor Lab — Premium Dental Laboratory | Dnipro",
  description:
    "Avtor Lab dental laboratory in Dnipro. Veneers, zirconia crowns, full-arch restorations, titanium bars, occlusal splints, B2B milling.",
  metadataBase: new URL("https://avtorlab.com.ua"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "FK3qG2Crp_hp93ztgSn3P_ghbyge6hXpOccPyYyxnQo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
