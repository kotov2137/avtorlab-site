"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Check,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Upload,
  Shield,
  Calculator,
  FileText,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/** ---- CONFIG ---- */
const PHONE_DISPLAY = "+38 (073) 000-66-99";
const PHONE_TEL = "+380730006699";
const EMAIL = "avtorlab1@gmail.com";
const TG_LAB = "https://t.me/avtor_lab";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/yevhen_bitsenko/", icon: Globe },
  { label: "Facebook", href: "https://www.facebook.com/evgeniy.pavlovich.1", icon: Globe },
  // поменяй USERNAME на реальный ник
  { label: "Telegram", href: "https://t.me/avtor_lab", icon: Globe },
];

const LANGS = [
  { key: "uk", label: "UA" },
  { key: "pl", label: "PL" },
  { key: "en", label: "EN" },
];

const PAGE_BG = "bg-black text-white";
const PAGE_BORDER = "border-neutral-800";

// on dark
const ON_DARK_TITLE = "text-white";
const ON_DARK_TEXT = "text-neutral-200";
const ON_DARK_MUTED = "text-neutral-300";

// text on WHITE background (cards)
const ON_LIGHT_TITLE = "text-black";
const ON_LIGHT_TEXT = "text-neutral-700";
const ON_LIGHT_MUTED = "text-neutral-600";

// panels (white boxes)
const PANEL = "rounded-2xl bg-white text-black border border-neutral-200";


/** ---- COPY ---- */
const COPY = {
  uk: {
    brand: "Avtor Lab",
    topbar: {
      tagline: "Преміум реставрації",
      call: "Подзвонити",
      email: "Написати",
    },
    nav: {
      services: "Послуги",
      partners: "Партнерам",
      education: "Навчання",
      calculator: "Калькулятор",
      faq: "FAQ",
      about: "Про нас",
      blog: "Блог",
      contact: "Контакти",
    },
    hero: {
      title: "Преміум реставрації та точне фрезерування",
      subtitle:
        "Створюємо естетичні та функціональні рішення: від вініру до повних дуг. Приймаємо замовлення від клінік і лабораторій по всій Україні.",
      ctaPrimary: "Надіслати запит",
      ctaSecondary: "Дивитися послуги",
      badges: ["Стабільні терміни", "Контроль якості", "Підтримка лікаря", "100% цифровий протокол"],
      qcLine: "QC • Цифровий протокол",
    },
    workflow: {
      title: "Процес роботи",
      items: ["Сканування / відбитки", "Дизайн / погодження", "Фрезерування / контроль якості", "Доставка / підтримка"],
    },
    contactBlockTitle: "Контакти",
    services: {
      title: "Послуги",
      subtitle:
        "Працюємо у цифровому та класичному протоколі. Підбираємо матеріали під задачу та бюджет.",
      items: [
        { title: "Вініри та накладки", desc: "Естетика, натуральна анатомія, контроль кольору та прозорості.", img: "" },
        { title: "Цирконієві коронки", desc: "Міцність, точність посадки, стабільна оклюзія.", img: "" },
        { title: "Тотальне протезування", desc: "Повні дуги, реабілітації, протоколи під імплантацію.", img: "" },
        { title: "Титанові балки", desc: "Індивідуальні конструкції, точне фрезерування, контроль пасивності.", img: "" },
        { title: "Оклюзійні капи", desc: "Захист, стабілізація, контроль висоти та комфорту.", img: "" },
        { title: "Фрезерний центр", desc: "Фрезерування STL/Exocad: цирконій, PMMA, титан (за ТЗ).", img: "" },
      ],
    },
    partners: {
      title: "Партнерам",
      subtitle:
        "Підключаємо клініки та лабораторії: прозорі умови, комунікація, контроль якості.",
      bullets: [
        "Персональний менеджер та швидкий зворотний зв’язок",
        "Стабільні терміни та трекінг етапів",
        "Технічні рекомендації та підтримка лікаря",
        "Файли/скани: Exocad, 3Shape, STL",
      ],
      cta: "Отримати прайс та умови",

      qcTitle: "Контроль якості на кожному етапі",
      qcItems: ["Посадка та прилягання", "Оклюзія та контакти", "Товщина та межі", "Фінішна обробка"],
    },
    education: {
      title: "Навчання та підтримка",
      subtitle: "Ділимось протоколами, розбираємо складні кейси, допомагаємо з цифровим потоком.",
      cards: [
        { title: "Міні-лекції для лікарів", desc: "Матеріали, преп, цементація, комунікація лабораторія–клініка." },
        { title: "Цифрові воркфлоу", desc: "Скан, дизайн, техвимоги, перевірка посадки та оклюзії." },
        { title: "Супровід складних кейсів", desc: "Планування, контроль естетики, тимчасові рішення, прототипування." },
      ],
      cta: "Записатися на консультацію",
      link: "https://t.me/avtor_lab",
    },
    calculator: {
      title: "Калькулятор термінів",
      subtitle:
        "Оцініть орієнтовний термін виробництва. Фактичний термін залежить від складності та логістики.",
      label: "Тип роботи",
      types: [
        { key: "veneer", label: "Вінір/накладка", days: 5 },
        { key: "zirconia", label: "Цирконієва коронка", days: 7 },
        { key: "fullarch", label: "Повна дуга", days: 14 },
        { key: "bar", label: "Титанова балка", days: 10 },
        { key: "splint", label: "Оклюзійна капа", days: 4 },
        { key: "b2b", label: "Фрезерний центр", days: 3 },
      ],
      rush: "Терміново (прискорено)",
      result: "Орієнтовно:",
      days: "днів",
    },
    faq: {
      title: "FAQ",
      subtitle: "Відповіді на часті питання.",
      items: [
        {
          q: "Які формати файлів ви приймаєте?",
          a: "STL, PLY (за домовленістю), Exocad-проєкти. Найкраще — STL з коректними межами та оклюзією.",
        },
        { q: "Чи працюєте ви з доставкою по Україні?", a: "Так, відправляємо НП/кур’єром. Логістику узгоджуємо окремо." },
        { q: "Чи можна отримати примірку/прототип?", a: "Так, залежно від кейсу можемо зробити прототип/примірку." },
      ],
    },
    about: {
      title: "Про Avtor Lab",
      subtitle: "Поєднуємо естетику, точність і контроль якості на кожному етапі.",
      stats: [
        { k: "20+ років", v: "стаж роботи" },
        { k: "100%", v: "цифрові протоколи" },
        { k: "Контроль", v: "якості на кожному етапі" },
        { k: "Фрезерний центр", v: "послуги та підтримка" },
      ],
    },
    blog: {
      title: "Блог",
      subtitle: "Короткі нотатки про матеріали, протоколи та комунікацію лабораторія–клініка.",
      posts: [
        { title: "Як підготувати STL для фрезерування", desc: "Межі, оклюзія, товщина, експорт і перевірка — без зайвих переробок.", tag: "Digital" },
        { title: "Цирконій: міцність vs естетика", desc: "Коли обирати багатошаровий цирконій, а коли — облицювання.", tag: "Materials" },
        { title: "Повна дуга: що важливо в комунікації", desc: "Дані, фото, прикус, вертикаль, тимчасові — щоб зменшити переробки.", tag: "Workflow" },
      ],
    },
    contact: {
      title: "Контакти",
      subtitle: "Напишіть нам — підкажемо протокол, прорахуємо вартість та терміни.",
      formTitle: "Запит / прорахунок",
      name: "Ім’я",
      clinic: "Клініка/Лабораторія",
      phone: "Телефон",
      email: "Email",
      message: "Опис кейсу",
      attach: "Прикріпити файли (STL/фото)",
      consent: "Погоджуюсь з обробкою персональних даних",
      send: "Надіслати",
      sent: "Дякуємо! Запит надіслано.",
      map: "Ми на мапі",
      mapOffline: "Мапа недоступна офлайн. Адреса:",
      openMap: "Відкрити в Google Maps",
    },
    footer: {
      rights: "© Avtor Lab. Всі права захищені.",
      policy: "Політика конфіденційності",
      terms: "Умови",
    },
    cta: {
      title: "Готові почати?",
      subtitle: "Надішліть запит і ми зв’яжемося з вами.",
      button: "Надіслати запит",
    },
  },
  pl: {
    brand: "Avtor Lab",
    topbar: {
      tagline: "Premium rekonstrukcje",
      call: "Zadzwoń",
      email: "Napisz",
    },
    nav: {
      services: "Usługi",
      partners: "Dla partnerów",
      education: "Szkolenia",
      calculator: "Kalkulator",
      faq: "FAQ",
      about: "O nas",
      blog: "Blog",
      contact: "Kontakt",
    },
    hero: {
      title: "Premium rekonstrukcje i precyzyjne frezowanie",
      subtitle:
        "Tworzymy estetyczne i funkcjonalne rozwiązania: od licówek po pełne łuki. Współpracujemy z klinikami i laboratoriami na terenie Ukrainy.",
      ctaPrimary: "Wyślij zapytanie",
      ctaSecondary: "Zobacz usługi",
      badges: ["Stabilne terminy", "Kontrola jakości", "Wsparcie lekarza", "100% cyfrowy protokół"],
      qcLine: "QC • Cyfrowy protokół",
    },
    workflow: {
      title: "Proces pracy",
      items: ["Skan / wyciski", "Projekt / akceptacja", "Frezowanie / kontrola jakości", "Dostawa / wsparcie"],
    },
    contactBlockTitle: "Kontakt",
    services: {
      title: "Usługi",
      subtitle: "Pracujemy w protokole cyfrowym i klasycznym. Dobieramy materiały do zadania i budżetu.",
      items: [
        { title: "Licówki i onlaye", desc: "Estetyka, naturalna anatomia, kontrola koloru i przezierności.", img: "" },
        { title: "Korony cyrkonowe", desc: "Wytrzymałość, precyzyjne dopasowanie, stabilna okluzja.", img: "" },
        { title: "Rehabilitacje pełnołukowe", desc: "Pełne łuki, rehabilitacje, protokoły pod implanty.", img: "" },
        { title: "Belki tytanowe", desc: "Konstrukcje indywidualne, precyzyjne frezowanie, kontrola pasywności.", img: "" },
        { title: "Szyny okluzyjne", desc: "Ochrona, stabilizacja, kontrola wysokości i komfortu.", img: "" },
        { title: "Centrum frezowania", desc: "Frezowanie STL/Exocad: cyrkon, PMMA, tytan (wg specyfikacji).", img: "" },
      ],
    },
    partners: {
      title: "Dla partnerów",
      subtitle: "Dołączamy kliniki i laboratoria: jasne warunki, komunikacja i kontrola jakości.",
      bullets: [
        "Osobisty opiekun i szybka informacja zwrotna",
        "Stabilne terminy i śledzenie etapów",
        "Rekomendacje techniczne i wsparcie lekarza",
        "Pliki/skany: Exocad, 3Shape, STL",
      ],
      cta: "Poproś o cennik i warunki",

      qcTitle: "Kontrola jakości na każdym etapie",
      qcItems: ["Dopasowanie i brzegi", "Okluzja i kontakty", "Grubość i granice", "Wykończenie"],
    },
    education: {
      title: "Szkolenia i wsparcie",
      subtitle: "Dzielimy się protokołami, omawiamy trudne przypadki, pomagamy w cyfrowym workflow.",
      cards: [
        { title: "Mini-wykłady dla lekarzy", desc: "Materiały, preparacja, cementowanie, komunikacja laboratorium–klinika." },
        { title: "Cyfrowe workflow", desc: "Skan, projekt, wymagania techniczne, kontrola dopasowania i okluzji." },
        { title: "Wsparcie trudnych przypadków", desc: "Planowanie, kontrola estetyki, tymczasówki, prototypowanie." },
      ],
      cta: "Umów konsultację",
      link: "https://t.me/avtor_lab",
    },
    calculator: {
      title: "Kalkulator terminów",
      subtitle: "Oszacuj orientacyjny czas wykonania (bez logistyki).",
      label: "Rodzaj pracy",
      types: [
        { key: "veneer", label: "Licówka/onlay", days: 5 },
        { key: "zirconia", label: "Korona cyrkonowa", days: 7 },
        { key: "fullarch", label: "Pełny łuk", days: 14 },
        { key: "bar", label: "Belka tytanowa", days: 10 },
        { key: "splint", label: "Szyna okluzyjna", days: 4 },
        { key: "b2b", label: "Centrum frezowania", days: 3 },
      ],
      rush: "Pilne (przyspieszone)",
      result: "Orientacyjnie:",
      days: "dni",
    },
    faq: {
      title: "FAQ",
      subtitle: "Odpowiedzi na najczęstsze pytania.",
      items: [
        { q: "Jakie formaty plików przyjmujecie?", a: "STL, PLY (po uzgodnieniu), projekty Exocad. Najlepiej — STL z poprawnymi granicami i okluzją." },
        { q: "Czy realizujecie dostawy na terenie Ukrainy?", a: "Tak — wysyłka kurierem/Nową Pocztą. Logistykę ustalamy osobno." },
        { q: "Czy można wykonać przymiarkę/prototyp?", a: "Tak, zależnie od przypadku możemy przygotować prototyp lub przymiarkę." },
      ],
    },
    about: {
      title: "O Avtor Lab",
      subtitle: "Łączymy estetykę, precyzję i kontrolę jakości na każdym etapie.",
      stats: [
        { k: "20+ lat", v: "doświadczenia" },
        { k: "100%", v: "cyfrowe protokoły" },
        { k: "Kontrola", v: "jakości na każdym etapie" },
        { k: "Centrum frezowania", v: "usługi i wsparcie" },
      ],
    },
    blog: {
      title: "Blog",
      subtitle: "Krótkie notatki o materiałach, protokołach i komunikacji laboratorium–klinika.",
      posts: [
        { title: "Jak przygotować STL do frezowania", desc: "Granice, okluzja, grubość, eksport i weryfikacja — bez zbędnych poprawek.", tag: "Digital" },
        { title: "Cyrkon: wytrzymałość vs estetyka", desc: "Kiedy wybrać cyrkon wielowarstwowy, a kiedy licowanie.", tag: "Materials" },
        { title: "Pełny łuk: co jest kluczowe w komunikacji", desc: "Dane, zdjęcia, zwarcie, wysokość, tymczasówki — żeby ograniczyć poprawki.", tag: "Workflow" },
      ],
    },
    contact: {
      title: "Kontakt",
      subtitle: "Napisz do nas — podpowiemy protokół, wycenimy i podamy terminy.",
      formTitle: "Zapytanie / wycena",
      name: "Imię",
      clinic: "Klinika/Laboratorium",
      phone: "Telefon",
      email: "Email",
      message: "Opis przypadku",
      attach: "Dołącz pliki (STL/zdjęcia)",
      consent: "Wyrażam zgodę na przetwarzanie danych osobowych",
      send: "Wyślij",
      sent: "Dziękujemy! Zapytanie zostało wysłane.",
      map: "Mapa",
      mapOffline: "Mapa jest niedostępna offline. Adres:",
      openMap: "Otwórz w Google Maps",
    },
    footer: {
      rights: "© Avtor Lab. Wszelkie prawa zastrzeżone.",
      policy: "Polityka prywatności",
      terms: "Warunki",
    },
    cta: {
      title: "Gotowi zacząć?",
      subtitle: "Wyślij zapytanie — skontaktujemy się.",
      button: "Wyślij zapytanie",
    },
  },

  en: {
    brand: "Avtor Lab",
    topbar: {
      tagline: "Premium restorations",
      call: "Call",
      email: "Email",
    },
    nav: {
      services: "Services",
      partners: "For partners",
      education: "Education",
      calculator: "Calculator",
      faq: "FAQ",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Premium restorations and precise milling",
      subtitle:
        "We deliver aesthetic and functional solutions from veneers to full-arch cases. We work with clinics and labs across Ukraine.",
      ctaPrimary: "Send request",
      ctaSecondary: "View services",
      badges: ["Reliable timelines", "Quality control", "Doctor support", "100% digital protocols"],
      qcLine: "QC • Digital workflow",
    },
    workflow: {
      title: "Workflow",
      items: ["Scan / impressions", "Design / approval", "Milling / QC", "Delivery / support"],
    },
    contactBlockTitle: "Contact",
    services: {
      title: "Services",
      subtitle: "Digital and classic workflows.",
      items: [
        { title: "Veneers & onlays", desc: "Natural anatomy, color and translucency control.", img: "" },
        { title: "Zirconia crowns", desc: "Strength, accurate fit, stable occlusion.", img: "" },
        { title: "Full-arch restorations", desc: "Rehabilitations and implant protocols.", img: "" },
        { title: "Titanium bars", desc: "Custom structures, precise milling, passive fit control.", img: "" },
        { title: "Occlusal splints", desc: "Protection, stabilization, comfort.", img: "" },
        { title: "Milling center services", desc: "STL/Exocad milling: zirconia, PMMA, titanium (per spec).", img: "" },
      ],
    },
    partners: {
      title: "For partners",
      subtitle: "Transparent terms, communication, quality control.",
      bullets: [
        "Personal manager and fast feedback",
        "Stable timelines and stage tracking",
        "Technical recommendations and doctor support",
        "Files/scans: Exocad, 3Shape, STL",
      ],
      cta: "Get pricing & terms",
      
      qcTitle: "Quality control at every stage",
      qcItems: ["Fit & margins", "Occlusion & contacts", "Thickness & boundaries", "Finishing"],
    },
    education: {
      title: "Education & support",
      subtitle: "Protocols, case reviews, help with your digital workflow.",
      cards: [
        { title: "Mini sessions for doctors", desc: "Materials, prep, cementation, lab–clinic communication." },
        { title: "Digital workflows", desc: "Scan, design, requirements, fit and occlusion checks." },
        { title: "Complex case support", desc: "Planning, esthetic control, temporaries, prototyping." },
      ],
      cta: "Book a consultation",
      link: "https://t.me/avtor_lab",
    },
    calculator: {
      title: "Lead time calculator",
      subtitle: "Estimate production lead time (logistics not included).",
      label: "Case type",
      types: [
        { key: "veneer", label: "Veneer/onlay", days: 5 },
        { key: "zirconia", label: "Zirconia crown", days: 7 },
        { key: "fullarch", label: "Full-arch", days: 14 },
        { key: "bar", label: "Titanium bar", days: 10 },
        { key: "splint", label: "Occlusal splint", days: 4 },
        { key: "b2b", label: "Milling center", days: 3 },
      ],
      rush: "Rush (accelerated)",
      result: "Estimated:",
      days: "days",
    },
    faq: {
      title: "FAQ",
      subtitle: "Common questions.",
      items: [
        { q: "Which file formats do you accept?", a: "STL, PLY (by agreement), Exocad projects. Best is STL with clean margins and occlusion." },
        { q: "Do you deliver across Ukraine?", a: "Yes — via Nova Poshta/courier. Logistics timing is agreed separately." },
        { q: "Can you provide try-in/prototypes?", a: "Yes — depending on the case we can do prototyping/try-ins." },
      ],
    },
    about: {
      title: "About Avtor Lab",
      subtitle: "We combine esthetics, precision and QC at every stage.",
      stats: [
        { k: "20+ years", v: "experience" },
        { k: "100%", v: "digital protocols" },
        { k: "Quality", v: "control at every stage" },
        { k: "Milling center", v: "services & support" },
      ],
    },
    blog: {
      title: "Blog",
      subtitle: "Notes about materials and workflows.",
      posts: [
        { title: "How to prepare STL for milling", desc: "Margins, occlusion, thickness, export and verification tips.", tag: "Digital" },
        { title: "Zirconia: strength vs esthetics", desc: "When to use multilayer zirconia vs layering.", tag: "Materials" },
        { title: "Full-arch: communication basics", desc: "Data, photos, bite, vertical, temporaries — to reduce remakes.", tag: "Workflow" },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Send us a message — we’ll help with protocol and timing.",
      formTitle: "Request / estimate",
      name: "Name",
      clinic: "Clinic/Lab",
      phone: "Phone",
      email: "Email",
      message: "Case description",
      attach: "Attach files (STL/photos)",
      consent: "I agree to personal data processing",
      send: "Send",
      sent: "Thanks! Your request has been sent.",
      map: "Our location",
      mapOffline: "Map is unavailable offline. Address:",
      openMap: "Open in Google Maps",
    },
    footer: {
      rights: "© Avtor Lab. All rights reserved.",
      policy: "Privacy policy",
      terms: "Terms",
    },
    cta: {
      title: "Ready to start?",
      subtitle: "Send a request — we’ll get back to you.",
      button: "Send request",
    },
  },
};

/** ---- UI ---- */
function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10">
          {eyebrow ? (
            <div className="text-xs uppercase tracking-wider text-neutral-500">{eyebrow}</div>
          ) : null}
          <h2 className={`mt-2 text-3xl md:text-4xl font-bold ${ON_DARK_TITLE}`}>{title}</h2>
          {subtitle ? (
            <p className={`mt-3 max-w-3xl text-base md:text-lg ${ON_DARK_MUTED}`}>{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black px-3 py-1 text-xs text-white">
      <Check className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function Topbar({ t, lang, setLang }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`sticky top-0 z-50 border-b ${PAGE_BORDER} bg-black`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex flex-col leading-tight">
  <div className="text-base md:text-lg font-bold text-white tracking-wide">
    {t.brand}
  </div>
  <div className="text-xs md:text-sm text-neutral-400">
    {t.topbar.tagline}
  </div>
</div>


          <div className="hidden md:flex items-center gap-4 text-sm">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                className="text-neutral-300 hover:text-white"
                onClick={() => scrollTo(key)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 rounded-xl border border-neutral-800 px-2 py-1">
              <Globe className="h-4 w-4 text-neutral-400" />
              {LANGS.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setLang(l.key)}
                  type="button"
                  className={[
                    "rounded-lg px-2 py-1 text-xs",
                    lang === l.key
                      ? "bg-white text-black"
                      : "text-neutral-300 hover:bg-neutral-900 hover:text-white",
                  ].join(" ")}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <Button
  variant="outline"
  className="hidden sm:inline-flex gap-2 border-neutral-700 text-black hover:bg-neutral-900"
  onClick={() => window.open(TG_LAB, "_blank")}
  type="button"
>
  <Mail className="h-4 w-4" />
  {t.topbar.email}
</Button>

            <Button
              className="gap-2 bg-white text-black hover:bg-neutral-200"
              onClick={() => (window.location.href = `tel:${PHONE_TEL}`)}
              type="button"
            >
              <Phone className="h-4 w-4" />
              {t.topbar.call}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ t }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={`relative overflow-hidden border-b ${PAGE_BORDER} bg-black`}>
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-semibold leading-tight text-white"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
             className={`mt-5 text-base md:text-lg ${ON_DARK_TEXT}`}
            >
              {t.hero.subtitle}
            </motion.p>

            <div className="mt-7 flex flex-wrap gap-3">
              {t.hero.badges.map((b) => (
                <Pill key={b}>{b}</Pill>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                className="gap-2 bg-white text-black hover:bg-neutral-200"
                onClick={() => scrollTo("contact")}
                type="button"
              >
                {t.hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="border-neutral-700 text-black bg-white hover:bg-neutral-200"
                onClick={() => scrollTo("services")}
                type="button"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
              <Shield className="h-4 w-4" />
              <span>{t.hero.qcLine}</span>
            </div>
          </div>

          {/* Clean panels — no gradients, no blur spots */}
          <div className="grid gap-4">
            <Card className={PANEL}>
              <CardHeader>
                <CardTitle className="text-base">{t.workflow.title}</CardTitle>
              </CardHeader>
              <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>
                <ul className="space-y-2">
                  {t.workflow.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className={PANEL}>
              <CardHeader>
                <CardTitle className="text-base">{t.contactBlockTitle}</CardTitle>
              </CardHeader>
              <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{PHONE_DISPLAY}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{EMAIL}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Dnipro, Ukraine</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ t }) {
  const gallery = useMemo(
    () => [
      "/images/services-teeth-2.jpg",
      "/images/services-teeth-3.jpg",
      "/images/services-teeth-4.jpg",
      "/images/services-teeth-5.jpg",
      "/images/services-teeth-6.jpg",
      "/images/services-teeth-7.jpg",
      "/images/services-teeth-8.jpg",
      "/images/services-teeth-9.jpg",
      "/images/services-teeth-10.jpg",
      "/images/services-teeth-11.jpg",
      "/images/services-teeth-12.jpg",
      "/images/services-teeth-13.jpg",
    ],
    []
  );
  return (
    <Section id="services" title={t.services.title} subtitle={t.services.subtitle}>
      
{/* Services category image (banner) */}
<motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="mt-6 mb-4"
>
  <a href={SOCIALS.find((s) => s.label === "Facebook")?.href} target="_blank" rel="noopener noreferrer" className="block">
    <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 aspect-[16/6]">
    <Image
      src="/images/services-teeth.jpg"
      alt="Преміальне фрезерування та реставрації"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 1100px"
      priority={false}
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
  </div>
</a>
</motion.div>

{/* Extra service photos (grid 3 columns) */}
<div className="mb-8">
  <div className="mt-1 grid grid-cols-2 gap-3 md:grid-cols-3">
    {gallery.map((src) => (
      <div
        key={src}
        className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={src}
            alt="Przykładowe prace protetyczne"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 320px"
          />
        </div>
      </div>
    ))}
  </div>
</div>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((it) => (
          <Card key={it.title} className={PANEL}>
            <CardHeader>
              <CardTitle className="text-base">{it.title}</CardTitle>
            </CardHeader>
            <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>
              {/* Optional image */}
              {it.img ? (
                <div className="mb-3 overflow-hidden rounded-xl border border-neutral-200">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="h-40 w-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
              ) : null}
              {it.desc}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Partners({ t }) {
  return (
    <Section id="partners" title={t.partners.title} subtitle={t.partners.subtitle}>
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <Card className={PANEL}>
          <CardHeader>
            <CardTitle className="text-base">{t.partners.title}</CardTitle>
          </CardHeader>
          <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>
            <ul className="space-y-3">
              {t.partners.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button asChild className="gap-2 bg-black text-white hover:bg-neutral-900">
                <a href={TG_LAB} target="_blank" rel="noopener noreferrer">
                  {t.partners.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className={PANEL}>
          <CardHeader>
            <CardTitle className="text-base">{t.partners.qcTitle}</CardTitle>
          </CardHeader>
          <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>
            <div className="grid gap-2">
              {t.partners.qcItems.map((x) => (
                <div key={x} className="flex items-center gap-2">
                  <Check className="h-4 w-4" /> {x}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function Education({ t }) {
  return (
    <Section id="education" title={t.education.title} subtitle={t.education.subtitle}>
      <div className="grid gap-4 md:grid-cols-3">
        {t.education.cards.map((c) => (
          <Card key={c.title} className={PANEL}>
            <CardHeader>
              <CardTitle className="text-base">{c.title}</CardTitle>
            </CardHeader>
            <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>{c.desc}</CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <a
  href={t.education.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-white text-lg font-semibold hover:underline"
>
  {t.education.cta}
  <ArrowRight className="h-4 w-4" />
</a>

      </div>
    </Section>
  );
}

function LeadTimeCalculator({ t }) {
  const [type, setType] = useState(t.calculator.types[0].key);
  const [rush, setRush] = useState(false);

  const days = useMemo(() => {
    const base = t.calculator.types.find((x) => x.key === type)?.days ?? 0;
    return rush ? Math.max(1, Math.round(base * 0.7)) : base;
  }, [type, rush, t]);

  return (
    <Section id="calculator" title={t.calculator.title} subtitle={t.calculator.subtitle}>
      <Card className={PANEL}>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-3 md:items-end">
            <div className="md:col-span-2">
              <div className="text-sm font-semibold flex items-center gap-2 text-black">
                <Calculator className="h-4 w-4" /> {t.calculator.label}
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {t.calculator.types.map((tt) => (
                  <button
                    key={tt.key}
                    type="button"
                    onClick={() => setType(tt.key)}
                    className={[
                      "rounded-xl border px-4 py-3 text-left text-sm",
                      type === tt.key
                        ? "border-black bg-black text-white"
                        : "border-neutral-200 bg-white hover:bg-neutral-50 text-black",
                    ].join(" ")}
                  >
                    <div className="font-medium">{tt.label}</div>
                    <div className={["text-xs mt-1", type === tt.key ? "text-white/80" : "text-neutral-500"].join(" ")}>
                      {tt.days} {t.calculator.days}
                    </div>
                  </button>
                ))}
              </div>

              <label className="mt-4 flex items-center gap-2 text-sm text-neutral-700">
                <input type="checkbox" checked={rush} onChange={(e) => setRush(e.target.checked)} />
                {t.calculator.rush}
              </label>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="text-xs text-neutral-500">{t.calculator.result}</div>
              <div className="mt-2 text-3xl font-semibold text-black">
                {days} <span className="text-base font-medium">{t.calculator.days}</span>
              </div>
              <div className="mt-3 text-sm text-neutral-600">* logistics not included</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}

function FAQ({ t }) {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" title={t.faq.title} subtitle={t.faq.subtitle}>
      <div className="grid gap-3">
        {t.faq.items.map((it, idx) => (
          <Card key={it.q} className={PANEL}>
            <CardHeader className="cursor-pointer" onClick={() => setOpen(idx === open ? -1 : idx)}>
              <CardTitle className="text-base">{it.q}</CardTitle>
            </CardHeader>
            {open === idx ? (
              <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>{it.a}</CardContent>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}

function About({ t }) {
  return (
    <Section id="about" title={t.about.title} subtitle={t.about.subtitle}>
      <div className="grid gap-4 md:grid-cols-4">
        {t.about.stats.map((s) => (
          <div key={`${s.k}-${s.v}`} className="rounded-2xl border border-neutral-200 bg-white p-5 text-black">
            <div className="text-xl font-semibold">{s.k}</div>
            <div className="mt-1 text-sm text-neutral-600">{s.v}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Blog({ t }) {
  return (
    <Section id="blog" title={t.blog.title} subtitle={t.blog.subtitle}>
      <div className="grid gap-4 md:grid-cols-3">
        {t.blog.posts.map((p) => (
          <Card key={p.title} className={PANEL}>
            <CardHeader>
              <div className="text-xs uppercase tracking-wider text-neutral-500">{p.tag}</div>
              <CardTitle className="text-base">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>{p.desc}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Contact({ t }) {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent("Dnipro, Ukraine")}`;

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      {/* Убираем форму (красная зона на скрине) и растягиваем карту + direct на всю ширину */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className={PANEL}>
          <CardHeader>
            <CardTitle className="text-base">{t.contact.map}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="rounded-b-2xl overflow-hidden">
              {online ? (
                <iframe
                  title="map"
                  className="w-full h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`${mapUrl}&output=embed`}
                />
              ) : (
                <div className="p-4 text-sm text-neutral-700">
                  {t.contact.mapOffline} <b>Dnipro, Ukraine</b>
                  <div className="mt-3">
                    <Button asChild className="bg-black text-white hover:bg-neutral-900">
                      <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                        {t.contact.openMap}
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className={PANEL}>
          <CardHeader>
            <CardTitle className="text-base">Direct</CardTitle>
          </CardHeader>
          <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Mail className="h-4 w-4" /> {EMAIL}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <Button
                    key={s.label}
                    variant="outline"
                    className="gap-2 border-neutral-300 text-black hover:bg-neutral-100"
                    type="button"
                    onClick={() => window.open(s.href, "_blank")}
                  >
                    <Icon className="h-4 w-4" /> {s.label}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function Footer({ t, lang }) {
  return (
    <footer className={`border-t ${PAGE_BORDER} py-10 bg-black`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-neutral-400">{t.footer.rights}</div>
          <div className="flex gap-4 text-sm">
            <a href={`/privacy${lang === "uk" ? "" : `#${lang}`}`} className="text-neutral-300 hover:text-white">{t.footer.policy}</a>
            <a href={`/terms${lang === "uk" ? "" : `#${lang}`}`} className="text-neutral-300 hover:text-white">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyCTA({ t }) {
  const scrollTo = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between gap-3 rounded-2xl border ${PAGE_BORDER} bg-black p-3`}>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white">{t.cta.title}</div>
            <div className="text-xs text-neutral-400">{t.cta.subtitle}</div>
          </div>
          <Button className="shrink-0 gap-2 bg-white text-black hover:bg-neutral-200" onClick={scrollTo} type="button">
            {t.cta.button} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

/** ---- MAIN ---- */
export default function AvtorLabSite() {
  const [lang, setLang] = useState("uk");
  const t = COPY[lang] || COPY.uk;

  // Hash routing: allows /#pl to open Polish version.
  useEffect(() => {
    const applyFromHash = () => {
      const h = (window.location.hash || "").replace("#", "").trim();
      if (h === "pl" || h === "en" || h === "uk") setLang(h);
    };
    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (lang === "uk") {
      url.hash = "";
    } else {
      url.hash = lang;
    }
    window.history.replaceState(null, "", url.toString());
  }, [lang]);

  return (
    <div className={`min-h-screen ${PAGE_BG}`}>
      <Topbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <Partners t={t} />
        <Education t={t} />
        <LeadTimeCalculator t={t} />
        <FAQ t={t} />
        <About t={t} />
        <Blog t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} lang={lang} />
      <StickyCTA t={t} />
    </div>
  );
}