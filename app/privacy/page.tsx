"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Lang = "uk" | "pl" | "en";

const COPY: Record<Lang, { title: string; body: string; back: string }> = {
  uk: {
    title: "Політика конфіденційності",
    body:
      "Ця сторінка є шаблоном політики конфіденційності. Додайте тут інформацію про збір, обробку та зберігання персональних даних (контактна форма, телефон, email, аналітика, файли STL/фото тощо).",
    back: "Повернутися на головну",
  },
  pl: {
    title: "Polityka prywatności",
    body:
      "Ta strona jest szablonem polityki prywatności. Dodaj tutaj informacje o zbieraniu, przetwarzaniu i przechowywaniu danych (formularz kontaktowy, telefon, email, analityka, pliki STL/zdjęcia itp.).",
    back: "Wróć na stronę główną",
  },
  en: {
    title: "Privacy Policy",
    body:
      "This page is a privacy policy template. Add details about how you collect, process, and store data (contact form, phone, email, analytics, STL/photo files, etc.).",
    back: "Back to home",
  },
};

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("uk");

  useEffect(() => {
    const h = (window.location.hash || "").replace("#", "").trim() as Lang;
    if (h === "pl" || h === "en" || h === "uk") setLang(h);
  }, []);

  const t = useMemo(() => COPY[lang] || COPY.uk, [lang]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold">{t.title}</h1>
        <p className="mt-4 text-neutral-300 leading-relaxed">{t.body}</p>
        <div className="mt-10">
          <Link href={lang === "uk" ? "/" : `/#${lang}`} className="text-white underline underline-offset-4">
            {t.back}
          </Link>
        </div>
      </div>
    </div>
  );
}
