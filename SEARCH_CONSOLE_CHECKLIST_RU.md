# Avtorlab: что делать после загрузки на GitHub и деплоя

## 1. Перед подключением Search Console
- Убедись, что сайт открывается по основному домену.
- Проверь, что главная, /privacy и /terms отдают 200 OK.
- Проверь, что robots.txt открывается по адресу /robots.txt.
- Проверь, что sitemap.xml открывается по адресу /sitemap.xml.

## 2. Что уже подготовлено в этом архиве
- app/robots.ts — генерирует robots.txt
- app/sitemap.ts — генерирует sitemap.xml
- app/layout.tsx — metadata, robots meta, Open Graph, JSON-LD, Google verification через переменную окружения
- app/manifest.ts — web app manifest
- .env.example — пример переменных окружения

## 3. Что нужно сделать в Vercel
Добавь Environment Variables:
- NEXT_PUBLIC_SITE_URL = https://avtorlab.com.ua
- GOOGLE_SITE_VERIFICATION = токен из Search Console после выбора метода HTML meta tag

После этого сделай redeploy.

## 4. Что делать в Google Search Console
1. Добавь property домена или URL-prefix.
2. Подтверди сайт.
3. Если выбираешь HTML meta tag, скопируй токен в GOOGLE_SITE_VERIFICATION.
4. После нового деплоя открой главную страницу и проверь исходный код: meta verification должен быть виден.
5. В Search Console открой Sitemaps и отправь sitemap.xml.
6. В URL Inspection проверь:
   - /
   - /privacy
   - /terms
7. Нажми Request indexing только для этих URL после деплоя.

## 5. Что смотреть в Search Console
### Sitemaps
- статус Success
- нет ошибок fetch/parse

### URL Inspection
- URL can be indexed
- Page fetch successful
- Indexing allowed
- не должно быть noindex или blocked by robots.txt

### Page indexing
Смотри, нет ли:
- Crawled - currently not indexed
- Discovered - currently not indexed
- Blocked by robots.txt
- Duplicate, Google chose different canonical
- Soft 404

### Performance
Отслеживай запросы:
- зуботехническая лаборатория днепр
- зуботехническая лаборатория авторлаб
- avtorlab
- avtor lab
- dental laboratory dnipro

## 6. Важное ограничение текущей версии
Сайт сейчас многоязычный через переключатель на одной странице. Для полноценного hreflang лучше делать отдельные URL под языки: /uk, /ru, /pl, /en.
Это следующий этап. Без этого сайт всё равно индексируется, но международная SEO-структура не максимальная.

## 7. Что не делать
- не добавлять keyword stuffing
- не закрывать сайт robots.txt
- не ставить noindex на важные страницы
- не менять основной домен хаотично с www на без www и обратно
- не дублировать один и тот же контент на куче URL
