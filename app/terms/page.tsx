"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Lang = "uk" | "pl" | "en";

const COPY: Record<Lang, { title: string; body: string; back: string }> = {
  uk: {
    title: "Умови використання",
    body:
      "Ця сторінка є шаблоном умов. Додайте тут правила співпраці, відповідальність сторін, оплату, терміни, доставку, гарантії та обмеження.",
    back: "Повернутися на головну",
  },
  pl: {
    title: "Warunki",
    body:
      "Ta strona jest szablonem warunków. Dodaj tutaj zasady współpracy, odpowiedzialność stron, płatności, terminy, dostawę, gwarancje i ograniczenia.",
    back: "Wróć na stronę główną",
  },
  en: {
    title: "Terms",
    body:
      "This page is a terms template. Add cooperation rules, responsibilities, payments, timelines, delivery, warranties, and limitations.",
    back: "Back to home",
  },
};

export default function TermsPage() {
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
