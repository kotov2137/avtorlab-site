"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Globe, Mail, MapPin, Phone, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  email,
  googleMapsProfile,
  langPath,
  phoneDisplay,
  phoneTel,
  telegramUrl,
} from "@/lib/seo";

const SOCIALS = [
  { label: "Google Maps", href: googleMapsProfile, icon: MapPin },
  { label: "Instagram", href: "https://www.instagram.com/yevhen_bitsenko/", icon: Globe },
  { label: "Facebook", href: "https://www.facebook.com/evgeniy.pavlovich.1", icon: Globe },
  { label: "Telegram", href: telegramUrl, icon: Globe },
];

const LANGS = [
  { key: "uk", label: "UA", href: "/" },
  { key: "ru", label: "RU", href: "/ru" },
  { key: "pl", label: "PL", href: "/pl" },
  { key: "en", label: "EN", href: "/en" },
];

const PAGE_BG = "bg-black text-white";
const PAGE_BORDER = "border-neutral-800";
const PANEL = "rounded-2xl bg-white text-black border border-neutral-200";
const ON_DARK_TITLE = "text-white";
const ON_DARK_TEXT = "text-neutral-200";
const ON_DARK_MUTED = "text-neutral-300";
const ON_LIGHT_TEXT = "text-neutral-700";

const COPY = {
  uk: {
    brand: "Avtorlab",
    topbar: {
      tagline: "Зуботехнічна лабораторія • Дніпро",
      call: "Подзвонити",
      email: "Написати",
    },
    nav: {
      services: "Послуги",
      keywords: "Напрями",
      process: "Процес",
      faq: "FAQ",
      about: "Про нас",
      contact: "Контакти",
    },
    hero: {
      title: "Зуботехнічна лабораторія Авторлаб",
      subtitle:
        "Avtorlab — зуботехнічна лабораторія у Дніпрі для клінік, стоматологів та лікарів, яким потрібні цирконієві коронки, керамічні коронки, вініри, керамічні накладки, титанові балки та точне цифрове фрезерування.",
      ctaPrimary: "Надіслати запит",
      ctaSecondary: "Дивитися напрями",
      badges: ["Дніпро", "Цифровий протокол", "Стабільні терміни", "Контроль якості"],
      qcLine: "Лабораторний контроль якості на кожному етапі",
      workflowTitle: "Що отримує клініка",
      workflowItems: [
        "Планування кейсу та узгодження конструкції",
        "Цифрове моделювання та фрезерування",
        "Контроль посадки, контактів та естетики",
        "Підтримка лікаря й зрозуміла комунікація",
      ],
      contactTitle: "Швидкий контакт",
    },
    services: {
      title: "Основні стоматологічні роботи лабораторії",
      subtitle:
        "Робимо саме ті роботи, за якими нас реально шукають: коронки, вініри, накладки, балки та цифрові конструкції для повсякденної клінічної практики.",
      bannerAlt: "Зуботехнічна лабораторія Avtorlab — роботи та фрезерування",
      galleryAlt: "Зразок стоматологічної реставрації Avtorlab",
      items: [
        { title: "Цирконієві коронки", desc: "Роботи для жувальної та фронтальної групи з точним приляганням і стабільною оклюзією." },
        { title: "Керамічні коронки", desc: "Естетичні рішення там, де критично важливі світлопроникність, форма та колір." },
        { title: "Цирконієві та керамічні вініри", desc: "Мікропротезування для естетичних кейсів із керованим дизайном та прогнозованою посадкою." },
        { title: "Керамічні накладки", desc: "Функціональні та естетичні реставрації для збереження тканин зуба." },
        { title: "Титанові балки", desc: "Індивідуальні фрезеровані конструкції для імплантаційних і повнодужних робіт." },
        { title: "Фрезеровані коронки та роботи з циркону", desc: "Цифрове фрезерування конструкцій із контрольованою геометрією та повторюваною якістю." },
      ],
    },
    keywords: {
      title: "Ключові напрями роботи",
      subtitle:
        "Основні види робіт і матеріали, з якими лабораторія працює у щоденній клінічній практиці.",
      searchLabel: "Пошуковий запит",
      items: [
        { title: "Зуботехнічна лабораторія", search: "Зуботехническая лаборатория", desc: "Лабораторія у Дніпрі для цифрових та класичних ортопедичних робіт." },
        { title: "Зубний технік", search: "Зубной техник", desc: "Працюємо як технічний партнер для стоматологів та клінік." },
        { title: "Цирконієві коронки", search: "Циркониевые коронки", desc: "Коронки з циркону для міцності, стабільності та акуратної посадки." },
        { title: "Цирконієві вініри", search: "Циркониевые виниры", desc: "Естетичні роботи для кейсів, де потрібні міцність і контрольований результат." },
        { title: "Керамічні коронки", search: "Керамические коронки", desc: "Реставрації з кераміки для фронтальної та естетичної групи." },
        { title: "Керамічні вініри", search: "Керамические виниры", desc: "Тонкі естетичні реставрації з роботою по формі, кольору та прозорості." },
        { title: "Керамічні накладки", search: "Керамические накладки", desc: "Мікропротезування з функціональною анатомією та контролем меж." },
        { title: "Титанові балки", search: "Титановые балки", desc: "Індивідуальні фрезеровані балки для імплантаційних робіт." },
        { title: "Фрезеровані коронки", search: "Фрезерованные коронки", desc: "Цифрові коронки з прогнозованою геометрією та стабільною повторюваністю." },
        { title: "Коронка", search: "Коронка", desc: "Окремі коронки та комплексні ортопедичні конструкції під клінічне завдання." },
        { title: "Циркон", search: "Циркон", desc: "Роботи з циркону для клінік, де важливі і естетика, і міцність." },
      ],
    },
    process: {
      title: "Як працює лабораторія",
      subtitle: "Без декоративної мішури: зрозумілий процес, контроль якості та нормальна технічна комунікація.",
      blocks: [
        {
          title: "Процес роботи",
          items: [
            "Скани або відбитки, фото та ТЗ від лікаря",
            "Погодження дизайну і матеріалу під кейс",
            "Виготовлення, контроль та передача роботи",
          ],
        },
        {
          title: "Для кого це",
          items: [
            "Стоматологічні клініки",
            "Окремі лікарі-ортопеди",
            "Партнерські лабораторії та B2B-фрезерування",
          ],
        },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Коротко по суті — про роботи, матеріали та файли.",
      items: [
        { q: "Чи робите ви цирконієві коронки та керамічні коронки?", a: "Так. Це один з базових напрямів Avtorlab, разом з вінірами, накладками та роботами по циркону." },
        { q: "Чи можна замовити титанові балки та фрезеровані коронки?", a: "Так. Лабораторія працює з цифровими конструкціями, титановими балками та фрезерованими коронками під клінічне ТЗ." },
        { q: "Які файли ви приймаєте?", a: "STL, скани, фото, технічний опис кейсу та інші дані, потрібні для узгодження роботи." },
      ],
    },
    about: {
      title: "Про Avtorlab",
      subtitle:
        "Avtorlab — зуботехнічна лабораторія у Дніпрі. Ми не малюємо повітряні обіцянки, а робимо роботи, які повинні нормально сідати, працювати та виглядати переконливо.",
      stats: [
        { k: "Дніпро", v: "локальна присутність і Google Maps профіль" },
        { k: "Циркон", v: "коронки, вініри та цифрові конструкції" },
        { k: "Кераміка", v: "коронки, вініри та накладки" },
        { k: "B2B", v: "робота з клініками та лабораторіями" },
      ],
    },
    contact: {
      title: "Контакти",
      subtitle: "Напишіть або зателефонуйте. Швидше за все, це корисніше, ніж ще один раунд домислів у переписці.",
      map: "Google Maps",
      mapOffline: "Мапа недоступна офлайн. Відкрити профіль:",
      openMap: "Відкрити у Google Maps",
      blockTitle: "Канали зв'язку",
    },
    footer: { rights: "© Avtorlab. Всі права захищені." },
    cta: { title: "Потрібен прорахунок або консультація?", subtitle: "Надішліть кейс — лабораторія повернеться з відповіддю.", button: "Написати" },
  },
  ru: {
    brand: "Avtorlab",
    topbar: {
      tagline: "Зуботехническая лаборатория • Днепр",
      call: "Позвонить",
      email: "Написать",
    },
    nav: {
      services: "Услуги",
      keywords: "Направления",
      process: "Процесс",
      faq: "FAQ",
      about: "О нас",
      contact: "Контакты",
    },
    hero: {
      title: "Зуботехническая лаборатория Авторлаб",
      subtitle:
        "Avtorlab — зуботехническая лаборатория в Днепре для клиник и стоматологов, которым нужны циркониевые коронки, керамические коронки, циркониевые виниры, керамические виниры, керамические накладки, титановые балки и точное цифровое фрезерование.",
      ctaPrimary: "Отправить запрос",
      ctaSecondary: "Смотреть направления",
      badges: ["Днепр", "Цифровой протокол", "Стабильные сроки", "Контроль качества"],
      qcLine: "Лабораторный контроль качества на каждом этапе",
      workflowTitle: "Что получает клиника",
      workflowItems: [
        "Планирование кейса и согласование конструкции",
        "Цифровое моделирование и фрезерование",
        "Контроль посадки, контактов и эстетики",
        "Поддержка врача и понятная коммуникация",
      ],
      contactTitle: "Быстрый контакт",
    },
    services: {
      title: "Основные работы лаборатории",
      subtitle:
        "На сайте выделены именно те услуги, по которым нас должны находить: коронки, виниры, накладки, титановые балки, циркон и цифровые конструкции.",
      bannerAlt: "Зуботехническая лаборатория Avtorlab — работы и фрезерование",
      galleryAlt: "Пример стоматологической реставрации Avtorlab",
      items: [
        { title: "Циркониевые коронки", desc: "Работы для жевательной и фронтальной группы с точной посадкой и контролем окклюзии." },
        { title: "Керамические коронки", desc: "Эстетические конструкции там, где важны цвет, прозрачность и анатомия." },
        { title: "Циркониевые и керамические виниры", desc: "Микропротезирование для эстетических кейсов с понятным цифровым процессом." },
        { title: "Керамические накладки", desc: "Функциональные и эстетические реставрации с бережным подходом к тканям зуба." },
        { title: "Титановые балки", desc: "Индивидуальные фрезерованные конструкции для имплантационных и полнодуговых работ." },
        { title: "Фрезерованные коронки и работы из циркона", desc: "Цифровое фрезерование конструкций с контролируемой геометрией и повторяемостью." },
      ],
    },
    keywords: {
      title: "Ключевые направления работ",
      subtitle:
        "Основные виды работ и материалы, с которыми лаборатория работает для клиник, стоматологов и ортопедических кейсов.",
      searchLabel: "Поисковый ключ",
      items: [
        { title: "Зуботехническая лаборатория", search: "Зуботехническая лаборатория", desc: "Лаборатория в Днепре для цифровых и классических ортопедических работ." },
        { title: "Зубной техник", search: "Зубной техник", desc: "Технический партнёр для стоматологов, ортопедов и клиник." },
        { title: "Циркониевые коронки", search: "Циркониевые коронки", desc: "Коронки из циркона для прочности, точной посадки и стабильной функции." },
        { title: "Циркониевые виниры", search: "Циркониевые виниры", desc: "Эстетические конструкции для кейсов, где важна и прочность, и контролируемый результат." },
        { title: "Керамические коронки", search: "Керамические коронки", desc: "Керамика для эстетической зоны и клинических задач, где важна натуральность." },
        { title: "Керамические виниры", search: "Керамические виниры", desc: "Тонкие эстетические реставрации с работой по форме, цвету и прозрачности." },
        { title: "Керамические накладки", search: "Керамические накладки", desc: "Микропротезирование с функциональной анатомией и контролем краевых зон." },
        { title: "Титановые балки", search: "Титановые балки", desc: "Фрезерованные балки и конструкции для имплантационных работ." },
        { title: "Фрезерованные коронки", search: "Фрезерованные коронки", desc: "Цифровые коронки с предсказуемой геометрией и повторяемым качеством." },
        { title: "Коронка", search: "Коронка", desc: "Одиночные коронки и комплексные ортопедические конструкции под конкретную задачу." },
        { title: "Циркон", search: "Циркон", desc: "Работы из циркона для клиник, где важны эстетика, прочность и стабильность." },
      ],
    },
    process: {
      title: "Как работает лаборатория",
      subtitle: "Без фокусов: нормальный процесс, контроль качества и техническая коммуникация по делу.",
      blocks: [
        {
          title: "Процесс работы",
          items: [
            "Сканы или оттиски, фото и ТЗ от врача",
            "Согласование материала, дизайна и сроков",
            "Изготовление, контроль и передача работы",
          ],
        },
        {
          title: "Для кого это",
          items: [
            "Стоматологические клиники",
            "Отдельные врачи-ортопеды",
            "Партнёрские лаборатории и B2B-фрезеровка",
          ],
        },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Коротко и без сантиментов — про услуги, материалы и файлы.",
      items: [
        { q: "Вы делаете циркониевые коронки и керамические коронки?", a: "Да. Это одно из основных направлений Avtorlab вместе с винирами, накладками, цирконом и цифровыми работами." },
        { q: "Можно заказать титановые балки и фрезерованные коронки?", a: "Да. Лаборатория работает с титановыми балками, фрезерованными коронками и другими цифровыми конструкциями под клиническое ТЗ." },
        { q: "Какие файлы вы принимаете?", a: "STL, сканы, фото, техническое описание кейса и другие данные, которые нужны для согласования конструкции." },
      ],
    },
    about: {
      title: "О Avtorlab",
      subtitle:
        "Avtorlab — зуботехническая лаборатория в Днепре. Мы не обещаем чудеса на слайдах, а делаем работы, которые должны нормально садиться, работать и выглядеть убедительно.",
      stats: [
        { k: "Днепр", v: "локальное присутствие и профиль Google Maps" },
        { k: "Циркон", v: "коронки, виниры и цифровые конструкции" },
        { k: "Керамика", v: "коронки, виниры и накладки" },
        { k: "B2B", v: "работа с клиниками и лабораториями" },
      ],
    },
    contact: {
      title: "Контакты",
      subtitle: "Напишите или позвоните. Обычно это полезнее, чем в десятый раз гадать в переписке, что именно нужно по кейсу.",
      map: "Google Maps",
      mapOffline: "Карта недоступна офлайн. Открыть профиль:",
      openMap: "Открыть в Google Maps",
      blockTitle: "Каналы связи",
    },
    footer: { rights: "© Avtorlab. Все права защищены." },
    cta: { title: "Нужен расчёт или консультация?", subtitle: "Отправьте кейс — лаборатория вернётся с ответом.", button: "Написать" },
  },
  pl: {
    brand: "Avtorlab",
    topbar: {
      tagline: "Laboratorium dentystyczne • protokół cyfrowy • Dniepr",
      call: "Zadzwoń",
      email: "Napisz",
    },
    nav: { services: "Usługi", keywords: "Zakres", process: "Proces", faq: "FAQ", about: "O nas", contact: "Kontakt" },
    hero: {
      title: "Laboratorium dentystyczne Avtorlab",
      subtitle:
        "Avtorlab to laboratorium dentystyczne w Dnieprze dla klinik i lekarzy, którzy potrzebują koron cyrkonowych, koron ceramicznych, licówek, nakładów ceramicznych, belek tytanowych i precyzyjnego frezowania cyfrowego.",
      ctaPrimary: "Wyślij zapytanie",
      ctaSecondary: "Zobacz zakres",
      badges: ["Dniepr", "Protokół cyfrowy", "Stabilne terminy", "Kontrola jakości"],
      qcLine: "Kontrola jakości na każdym etapie laboratoryjnym",
      workflowTitle: "Co dostaje klinika",
      workflowItems: ["Planowanie przypadku i uzgodnienie konstrukcji", "Projekt cyfrowy i frezowanie", "Kontrola dopasowania, kontaktów i estetyki", "Wsparcie lekarza i jasna komunikacja"],
      contactTitle: "Szybki kontakt",
    },
    services: {
      title: "Główne prace laboratorium",
      subtitle:
        "Na stronie pokazujemy dokładnie te usługi, według których laboratorium powinno być znajdowane: korony, licówki, nakłady, belki tytanowe, cyrkon i konstrukcje cyfrowe.",
      bannerAlt: "Laboratorium dentystyczne Avtorlab — prace i frezowanie",
      galleryAlt: "Przykład pracy protetycznej Avtorlab",
      items: [
        { title: "Korony cyrkonowe", desc: "Prace dla strefy bocznej i przedniej z precyzyjnym dopasowaniem i kontrolą okluzji." },
        { title: "Korony ceramiczne", desc: "Rozwiązania estetyczne tam, gdzie liczy się kolor, przezierność i anatomia." },
        { title: "Licówki cyrkonowe i ceramiczne", desc: "Mikroprotetyka dla przypadków estetycznych z kontrolowanym procesem cyfrowym." },
        { title: "Nakłady ceramiczne", desc: "Funkcjonalne i estetyczne rekonstrukcje z oszczędnym podejściem do tkanek zęba." },
        { title: "Belki tytanowe", desc: "Indywidualne frezowane konstrukcje do prac implantologicznych i pełnych łuków." },
        { title: "Korony frezowane i prace z cyrkonu", desc: "Cyfrowe frezowanie konstrukcji z kontrolowaną geometrią i powtarzalną jakością." },
      ],
    },
    keywords: {
      title: "Zakres usług i kluczowe frazy",
      subtitle:
        "Niżej znajdują się realne kierunki pracy laboratorium. Zachowaliśmy też rosyjskie odpowiedniki, bo właśnie tak część użytkowników wpisuje zapytania.",
      searchLabel: "Fraza wyszukiwania",
      items: [
        { title: "Laboratorium dentystyczne", search: "Зуботехническая лаборатория", desc: "Laboratorium w Dnieprze dla prac cyfrowych i klasycznych." },
        { title: "Technik dentystyczny", search: "Зубной техник", desc: "Partner techniczny dla lekarzy i klinik stomatologicznych." },
        { title: "Korony cyrkonowe", search: "Циркониевые коронки", desc: "Korony z cyrkonu dla wytrzymałości, dokładnego dopasowania i stabilnej funkcji." },
        { title: "Licówki cyrkonowe", search: "Циркониевые виниры", desc: "Estetyczne konstrukcje dla przypadków, gdzie liczy się i trwałość, i przewidywalny efekt." },
        { title: "Korony ceramiczne", search: "Керамические коронки", desc: "Ceramika do strefy estetycznej i zadań, gdzie ważna jest naturalność." },
        { title: "Licówki ceramiczne", search: "Керамические виниры", desc: "Cienkie rekonstrukcje estetyczne z pracą nad kształtem, kolorem i przeziernością." },
        { title: "Nakłady ceramiczne", search: "Керамические накладки", desc: "Mikroprotetyka z anatomią funkcjonalną i kontrolą granic." },
        { title: "Belki tytanowe", search: "Титановые балки", desc: "Frezowane belki i konstrukcje do prac implantologicznych." },
        { title: "Korony frezowane", search: "Фрезерованные коронки", desc: "Cyfrowe korony z przewidywalną geometrią i powtarzalną jakością." },
        { title: "Korona", search: "Коронка", desc: "Pojedyncze korony i złożone konstrukcje ortopedyczne pod konkretne zadanie." },
        { title: "Cyrkon", search: "Циркон", desc: "Prace z cyrkonu dla klinik, gdzie liczy się estetyka, trwałość i stabilność." },
      ],
    },
    process: {
      title: "Jak pracuje laboratorium",
      subtitle: "Bez sztuczek: normalny proces, kontrola jakości i techniczna komunikacja wprost.",
      blocks: [
        { title: "Proces pracy", items: ["Skany lub wyciski, zdjęcia i wytyczne od lekarza", "Uzgodnienie materiału, projektu i terminów", "Wykonanie, kontrola i przekazanie pracy"] },
        { title: "Dla kogo", items: ["Kliniki stomatologiczne", "Lekarze protetycy", "Laboratoria partnerskie i frezowanie B2B"] },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Krótko i konkretnie — o usługach, materiałach i plikach.",
      items: [
        { q: "Czy wykonujecie korony cyrkonowe i korony ceramiczne?", a: "Tak. To jeden z głównych kierunków Avtorlab, obok licówek, nakładów, cyrkonu i prac cyfrowych." },
        { q: "Czy można zamówić belki tytanowe i korony frezowane?", a: "Tak. Laboratorium pracuje z belkami tytanowymi, koronami frezowanymi i innymi konstrukcjami cyfrowymi według zlecenia klinicznego." },
        { q: "Jakie pliki przyjmujecie?", a: "STL, skany, zdjęcia, opis techniczny przypadku i inne dane potrzebne do uzgodnienia konstrukcji." },
      ],
    },
    about: {
      title: "O Avtorlab",
      subtitle: "Avtorlab to laboratorium dentystyczne w Dnieprze. Zamiast marketingowego dymu dostarczamy prace, które mają się dobrze osadzać, działać i wyglądać przekonująco.",
      stats: [
        { k: "Dniepr", v: "lokalna obecność i profil Google Maps" },
        { k: "Cyrkon", v: "korony, licówki i konstrukcje cyfrowe" },
        { k: "Ceramika", v: "korony, licówki i nakłady" },
        { k: "B2B", v: "współpraca z klinikami i laboratoriami" },
      ],
    },
    contact: { title: "Kontakt", subtitle: "Napisz lub zadzwoń. To zwykle daje więcej niż kolejne zgadywanie w czacie, co dokładnie trzeba zrobić.", map: "Google Maps", mapOffline: "Mapa niedostępna offline. Otwórz profil:", openMap: "Otwórz w Google Maps", blockTitle: "Kanały kontaktu" },
    footer: { rights: "© Avtorlab. Wszelkie prawa zastrzeżone." },
    cta: { title: "Potrzebna wycena lub konsultacja?", subtitle: "Wyślij przypadek — laboratorium wróci z odpowiedzią.", button: "Napisz" },
  },
  en: {
    brand: "Avtorlab",
    topbar: { tagline: "Dental laboratory • digital workflow • Dnipro", call: "Call", email: "Write" },
    nav: { services: "Services", keywords: "Focus", process: "Process", faq: "FAQ", about: "About", contact: "Contact" },
    hero: {
      title: "Avtorlab dental laboratory",
      subtitle:
        "Avtorlab is a dental laboratory in Dnipro for clinics and dentists who need zirconia crowns, ceramic crowns, zirconia veneers, ceramic veneers, ceramic overlays, titanium bars, and precise digital milling.",
      ctaPrimary: "Send request",
      ctaSecondary: "View focus areas",
      badges: ["Dnipro", "Digital workflow", "Stable lead times", "Quality control"],
      qcLine: "Laboratory quality control at each production stage",
      workflowTitle: "What the clinic gets",
      workflowItems: ["Case planning and design alignment", "Digital modeling and milling", "Fit, contact, and esthetic control", "Doctor support and direct communication"],
      contactTitle: "Fast contact",
    },
    services: {
      title: "Core laboratory work",
      subtitle: "The page is structured around the actual services people search for: crowns, veneers, overlays, titanium bars, zircon, and digital constructions.",
      bannerAlt: "Avtorlab dental laboratory — milling and restorative work",
      galleryAlt: "Sample restorative work by Avtorlab",
      items: [
        { title: "Zirconia crowns", desc: "Work for posterior and anterior groups with precise fit and controlled occlusion." },
        { title: "Ceramic crowns", desc: "Esthetic constructions where color, translucency, and anatomy matter." },
        { title: "Zirconia and ceramic veneers", desc: "Micro-prosthetic work for esthetic cases with a controlled digital workflow." },
        { title: "Ceramic overlays", desc: "Functional and esthetic restorations with a tissue-preserving approach." },
        { title: "Titanium bars", desc: "Individual milled constructions for implant and full-arch cases." },
        { title: "Milled crowns and zircon work", desc: "Digital milling for predictable geometry and repeatable laboratory quality." },
      ],
    },
    keywords: {
      title: "Service focus and search terms",
      subtitle: "These are the real service areas of the laboratory. Russian search phrases are kept on the page as common query equivalents for multilingual demand.",
      searchLabel: "Search term",
      items: [
        { title: "Dental laboratory", search: "Зуботехническая лаборатория", desc: "Dnipro laboratory for digital and classic restorative work." },
        { title: "Dental technician", search: "Зубной техник", desc: "Technical partner for dentists, prosthodontists, and clinics." },
        { title: "Zirconia crowns", search: "Циркониевые коронки", desc: "Zircon work for strength, fit, and stable function." },
        { title: "Zirconia veneers", search: "Циркониевые виниры", desc: "Esthetic constructions for cases where strength and controlled output both matter." },
        { title: "Ceramic crowns", search: "Керамические коронки", desc: "Ceramic restorations for esthetic-zone and natural-looking work." },
        { title: "Ceramic veneers", search: "Керамические виниры", desc: "Thin esthetic restorations with attention to shape, color, and translucency." },
        { title: "Ceramic overlays", search: "Керамические накладки", desc: "Micro-prosthetic restorations with functional anatomy and edge control." },
        { title: "Titanium bars", search: "Титановые балки", desc: "Milled bars and constructions for implant cases." },
        { title: "Milled crowns", search: "Фрезерованные коронки", desc: "Digital crowns with predictable geometry and repeatable quality." },
        { title: "Crown", search: "Коронка", desc: "Single crowns and more complex restorative constructions for the required indication." },
        { title: "Zircon", search: "Циркон", desc: "Zircon-based work where esthetics, strength, and stability all matter." },
      ],
    },
    process: {
      title: "How the laboratory works",
      subtitle: "No smoke and mirrors: a direct workflow, quality control, and technical communication that respects the case.",
      blocks: [
        { title: "Workflow", items: ["Scans or impressions, photos, and doctor instructions", "Material, design, and timing alignment", "Production, control, and handoff"] },
        { title: "Who it serves", items: ["Dental clinics", "Individual prosthodontists", "Partner laboratories and B2B milling"] },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Brief and practical — on services, materials, and files.",
      items: [
        { q: "Do you produce zirconia crowns and ceramic crowns?", a: "Yes. That is one of the main service lines at Avtorlab, together with veneers, overlays, zircon work, and digital constructions." },
        { q: "Can we order titanium bars and milled crowns?", a: "Yes. The laboratory works with titanium bars, milled crowns, and other digital constructions based on clinical requirements." },
        { q: "Which files do you accept?", a: "STL, scans, photos, technical case notes, and the data needed to align the construction." },
      ],
    },
    about: {
      title: "About Avtorlab",
      subtitle: "Avtorlab is a dental laboratory in Dnipro. No inflated promises — just work that is supposed to seat properly, function, and look convincing.",
      stats: [
        { k: "Dnipro", v: "local presence and Google Maps profile" },
        { k: "Zircon", v: "crowns, veneers, and digital constructions" },
        { k: "Ceramics", v: "crowns, veneers, and overlays" },
        { k: "B2B", v: "work with clinics and laboratories" },
      ],
    },
    contact: { title: "Contact", subtitle: "Write or call. It is usually more productive than guessing in chat what the case really needs.", map: "Google Maps", mapOffline: "Map unavailable offline. Open profile:", openMap: "Open in Google Maps", blockTitle: "Contact channels" },
    footer: { rights: "© Avtorlab. All rights reserved." },
    cta: { title: "Need an estimate or consultation?", subtitle: "Send the case — the laboratory will respond.", button: "Write" },
  },
};

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10">
          <h2 className={`mt-2 text-3xl md:text-4xl font-bold ${ON_DARK_TITLE}`}>{title}</h2>
          {subtitle ? <p className={`mt-3 max-w-4xl text-base md:text-lg ${ON_DARK_MUTED}`}>{subtitle}</p> : null}
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

function Topbar({ t, currentLang }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`sticky top-0 z-50 border-b ${PAGE_BORDER} bg-black`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3 gap-3">
          <div className="flex flex-col leading-tight min-w-0">
            <div className="text-base md:text-lg font-bold text-white tracking-wide">{t.brand}</div>
            <div className="text-xs md:text-sm text-neutral-400">{t.topbar.tagline}</div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sm">
            {Object.entries(t.nav).map(([key, label]) => (
              <button key={key} className="text-neutral-300 hover:text-white" onClick={() => scrollTo(key)} type="button">
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pl-2 sm:gap-3 sm:pl-3">
            <div className="hidden shrink-0 sm:flex items-center gap-2 rounded-xl border border-neutral-800 pl-3 pr-2 py-1">
              <Globe className="h-4 w-4 text-neutral-400" />
              {LANGS.map((l) => (
                <a
                  key={l.key}
                  href={l.href}
                  className={[
                    "rounded-lg px-2 py-1 text-xs",
                    currentLang === l.key ? "bg-white text-black" : "text-neutral-300 hover:bg-neutral-900 hover:text-white",
                  ].join(" ")}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <Button
              variant="outline"
              className="hidden sm:inline-flex gap-2 border-neutral-700 text-black hover:bg-neutral-900"
              onClick={() => window.open(telegramUrl, "_blank")}
              type="button"
            >
              <Mail className="h-4 w-4" />
              {t.topbar.email}
            </Button>

            <Button className="gap-2 bg-white text-black hover:bg-neutral-200" onClick={() => (window.location.href = `tel:${phoneTel}`)} type="button">
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
            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-5xl font-semibold leading-tight text-white">
              {t.hero.title}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className={`mt-5 text-base md:text-lg ${ON_DARK_TEXT}`}>
              {t.hero.subtitle}
            </motion.p>

            <div className="mt-7 flex flex-wrap gap-3">
              {t.hero.badges.map((b) => (
                <Pill key={b}>{b}</Pill>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button className="gap-2 bg-white text-black hover:bg-neutral-200" onClick={() => scrollTo("contact")} type="button">
                {t.hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-neutral-700 text-black bg-white hover:bg-neutral-200" onClick={() => scrollTo("keywords")} type="button">
                {t.hero.ctaSecondary}
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
              <Shield className="h-4 w-4" />
              <span>{t.hero.qcLine}</span>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className={PANEL}>
              <CardHeader><CardTitle className="text-base">{t.hero.workflowTitle}</CardTitle></CardHeader>
              <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>
                <ul className="space-y-2">
                  {t.hero.workflowItems.map((item) => (
                    <li key={item} className="flex items-center gap-2"><Check className="h-4 w-4" /> {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className={PANEL}>
              <CardHeader><CardTitle className="text-base">{t.hero.contactTitle}</CardTitle></CardHeader>
              <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>{phoneDisplay}</span></div>
                <div className="mt-2 flex items-center gap-2"><Mail className="h-4 w-4" /><span>{email}</span></div>
                <div className="mt-2 flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Dnipro, Ukraine</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ t }) {
  const gallery = useMemo(() => [
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
  ], []);

  return (
    <Section id="services" title={t.services.title} subtitle={t.services.subtitle}>
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease: "easeOut" }} className="mt-6 mb-4">
        <a href={SOCIALS.find((s) => s.label === "Facebook")?.href} target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 aspect-[16/6]">
            <Image src="/images/services-teeth.jpg" alt={t.services.bannerAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 1100px" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          </div>
        </a>
      </motion.div>

      <div className="mb-8">
        <div className="mt-1 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((src) => (
            <div key={src} className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              <div className="relative aspect-[4/3]">
                <Image src={src} alt={t.services.galleryAlt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 320px" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((it) => (
          <Card key={it.title} className={PANEL}>
            <CardHeader><CardTitle className="text-base">{it.title}</CardTitle></CardHeader>
            <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>{it.desc}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function KeywordGrid({ t }) {
  return (
    <Section id="keywords" title={t.keywords.title} subtitle={t.keywords.subtitle}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.keywords.items.map((it) => (
          <Card key={it.title} className={PANEL}>
            <CardHeader>
              <CardTitle className="text-base">{it.title}</CardTitle>
            </CardHeader>
            <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>{it.desc}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Process({ t }) {
  return (
    <Section id="process" title={t.process.title} subtitle={t.process.subtitle}>
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        {t.process.blocks.map((block) => (
          <Card key={block.title} className={PANEL}>
            <CardHeader><CardTitle className="text-base">{block.title}</CardTitle></CardHeader>
            <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>
              <ul className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function FAQ({ t }) {
  return (
    <Section id="faq" title={t.faq.title} subtitle={t.faq.subtitle}>
      <div className="grid gap-3">
        {t.faq.items.map((it) => (
          <Card key={it.q} className={PANEL}>
            <CardHeader><CardTitle className="text-base">{it.q}</CardTitle></CardHeader>
            <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>{it.a}</CardContent>
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

function Contact({ t }) {
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent("Dnipro, Ukraine")}&output=embed`;
  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className={PANEL}>
          <CardHeader><CardTitle className="text-base">{t.contact.map}</CardTitle></CardHeader>
          <CardContent className="p-0">
            <div className="rounded-b-2xl overflow-hidden">
              <iframe title="map" className="w-full h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={mapEmbedUrl} />
            </div>
          </CardContent>
        </Card>
        <Card className={PANEL}>
          <CardHeader><CardTitle className="text-base">{t.contact.blockTitle}</CardTitle></CardHeader>
          <CardContent className={`text-sm ${ON_LIGHT_TEXT}`}>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> {phoneDisplay}</div>
            <div className="mt-2 flex items-center gap-2"><Mail className="h-4 w-4" /> {email}</div>
            <div className="mt-2 flex items-center gap-2"><MapPin className="h-4 w-4" /> Dnipro, Ukraine</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <Button key={s.label} variant="outline" className="gap-2 border-neutral-300 text-black hover:bg-neutral-100" type="button" onClick={() => window.open(s.href, "_blank")}>
                    <Icon className="h-4 w-4" /> {s.label}
                  </Button>
                );
              })}
            </div>
            <div className="mt-4">
              <Button asChild className="bg-black text-white hover:bg-neutral-900">
                <a href={googleMapsProfile} target="_blank" rel="noopener noreferrer">{t.contact.openMap}</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function Footer({ t }) {
  return (
    <footer className={`border-t ${PAGE_BORDER} py-10 bg-black`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-sm text-neutral-400">{t.footer.rights}</div>
      </div>
    </footer>
  );
}

function StickyCTA({ t }) {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between gap-3 rounded-2xl border ${PAGE_BORDER} bg-black p-3`}>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white">{t.cta.title}</div>
            <div className="text-xs text-neutral-400">{t.cta.subtitle}</div>
          </div>
          <Button asChild className="shrink-0 gap-2 bg-white text-black hover:bg-neutral-200">
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer">{t.cta.button} <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function AvtorLabSite({ initialLang = "uk" }) {
  const t = COPY[initialLang] || COPY.uk;
  return (
    <div className={`min-h-screen ${PAGE_BG}`}>
      <Topbar t={t} currentLang={initialLang} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <KeywordGrid t={t} />
        <Process t={t} />
        <FAQ t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <StickyCTA t={t} />
    </div>
  );
}
