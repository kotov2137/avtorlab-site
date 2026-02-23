import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avtor Lab — Premium Dental Laboratory | Dnipro",
  description:
    "Avtor Lab dental laboratory in Dnipro. Veneers, zirconia crowns, full-arch restorations, titanium bars, occlusal splints, B2B milling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
