# mustafayilmaz.art (SvelteKit sürümü)

Mustafa Yılmaz kişisel marka portföyünün **SvelteKit + Svelte 5** üzerine taşınmış sürümü. Next.js 16 sürümünden parça parça port edildi; tasarım, içerik ve URL yapısı bire bir korundu.

## Stack

| Katman | Teknoloji | Neden |
|--------|-----------|-------|
| Framework | **SvelteKit 2 + Svelte 5 (runes)** | En küçük bundle, en hızlı hydration |
| Adapter | **adapter-static** | Tamamen statik HTML çıktısı |
| Hosting | **Firebase Hosting** | Mevcut altyapıyla aynı (DNS bozulmaz) |
| Fonts | Google Fonts (Playfair / DM Sans / JetBrains Mono) | Aynı tipografi |

## Routes

```
/                       → Anasayfa (hero, hakkında, uzmanlık, yazılım teaser, GitHub, akademi, sertifikalar, referanslar, CTA)
/ai-danismanligi        → Sağlık kurumları için AI danışmanlık (4 paket funnel + 8 hizmet detayı)
/yazilimlar             → 10 production app, kategori bazlı listeleme
/art                    → Suno müzikleri + AI görsel galerisi
/blog                   → Yazı listesi (öne çıkan + grid)
/blog/[slug]            → Tekil yazı (TOC + audio + sources + sticky profil) — 7 yazı prerender
```

## Klasör yapısı

```
src/
├─ app.html               # HTML iskelet + Google Fonts
├─ app.css                # Ana tema (Next.js'ten birebir port)
├─ aid-styles.css         # AI danışmanlık stilleri
├─ art-styles.css         # Art sayfası stilleri
├─ apps-styles.css        # Yazılımlar sayfası stilleri
├─ lib/
│  ├─ schema.ts           # Schema.org JSON-LD (Person + WebSite + Nav)
│  ├─ data/               # posts.ts, apps.ts, art.ts (Next.js'ten birebir)
│  └─ components/
│     ├─ Nav.svelte       # Üst nav (scroll + mobile menu)
│     ├─ Footer.svelte    # Alt footer
│     └─ BlogIcon.svelte  # Slug bazlı özel SVG ikonları
└─ routes/
   ├─ +layout.svelte
   ├─ +layout.ts          # prerender = true
   ├─ +page.svelte        # Anasayfa (~430 satır)
   ├─ ai-danismanligi/+page.svelte
   ├─ yazilimlar/+page.svelte
   ├─ art/+page.svelte
   ├─ blog/+page.svelte
   └─ blog/[slug]/
      ├─ +page.ts         # entries() → 7 yazıyı prerender
      └─ +page.svelte
static/
├─ profile.jpg, profile-large.jpg, favicon.ico
└─ audio/                 # 3 Türkçe seslendirme MP3
```

## Komutlar

```bash
npm install
npm run dev           # http://localhost:5173
npm run build         # build/ klasörüne statik HTML çıkarır
npm run preview       # production build'i lokal test
npm run check         # TypeScript + Svelte kontrol
npm run deploy        # firebase deploy --only hosting
```

## Deploy

Mevcut Firebase Hosting projesi (`mustafayilmazart`) ile aynı `firebase.json` davranışı:
- `cleanUrls: true` → `/ai-danismanligi.html` otomatik `/ai-danismanligi` olarak sunulur
- Resim/CSS/JS `max-age=31536000 immutable`
- Audio `max-age=2592000`

```bash
npm run build
npm run deploy
```

## Next.js'ten farklar

- `Image` → `<img>` (statik export'ta zaten optimize gerekmez)
- `<Link>` → `<a>` (SvelteKit `data-sveltekit-preload-data="hover"` ile zaten preload)
- `useEffect` → `onMount` (sadece reveal animasyonu için)
- `metadata` export → `<svelte:head>`
- `dangerouslySetInnerHTML` → `{@html …}`
- Svelte 5 runes: `$state`, `$props`, `$derived`

## Performans hedefleri

- TTFB: ~30-50ms (Firebase + statik)
- LCP: <800ms
- Bundle (route başına): blog liste 3 KB, anasayfa 42 KB (server), client 6-15 KB
- Lighthouse: 95+

## Migration durumu

- [x] Anasayfa (hero, philosophy, about, expertise, yazılım teaser, GitHub, akademi, process, tools, certs, refs, yazılar, testimonial, CTA)
- [x] AI Danışmanlık (hero, audiences, packages funnel, services, process, whyMe, FAQ, CTA)
- [x] Yazılımlar (10 app, kategori bazlı)
- [x] Art (müzik kart, galeri, CTA)
- [x] Blog liste (featured + grid)
- [x] Blog detay (TOC + audio + sources + sticky profil + JSON-LD)
- [x] Schema.org Person + WebSite + Navigation
- [x] noscript SEO fallback
- [x] BlogIcon (8 slug için özel SVG)
- [x] Build doğrulandı: 7 statik blog + 5 ana sayfa
