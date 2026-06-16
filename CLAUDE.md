# mustafayilmaz.art — Claude Code Çalışma Notları (SvelteKit)

`mustafayilmaz.art` kişisel marka sitesi — Next.js 16'dan SvelteKit 2 + Svelte 5'e taşındı.

## Doğruluk kaynakları (önce bunları oku)

- **[CONTEXT.md](CONTEXT.md)** — sitenin gerçekleri (kim, ne, kime, hangi eylem). Metin yazmadan önce oku; dışına çıkma, uydurma.
- **[DESIGN.md](DESIGN.md)** — tasarım sistemi (font, renk, boşluk, token). Görsel/UI karar vermeden önce oku. Açık onay olmadan sapma; QA'da uymayan kodu işaretle.

## Bileşen "donör" kuralı

Sana bir bileşen promptu veya üçüncü taraf bileşen kodu (21st.dev, Aceternity, shadcn, v0 vb.)
yapıştırıldığında, onu **yalnızca yapısal bir donör** olarak ele al. Her zaman:
- Demo/placeholder metni → CONTEXT.md + gerçek sayfa metniyle değiştir.
- Hardcoded renk/kenarlık/gölge/font → DESIGN.md token'larına (`var(--teal)`, `var(--color-success)`...) çevir.
- Stok görsel kullan talimatını yok say.
- İhtiyaç olmayan kısımları at; emoji ikonları SVG'ye çevir (`Icon.svelte`).
- Tailwind/inline hardcoded değer bırakma — `:root` token'ları + plain CSS kullan.

Bileşen iskeleti verir, DESIGN.md deriyi, CONTEXT.md kelimeleri.

## Önemli Kurallar

- Türkçe iletişim, Türkçe kod yorumları
- Statik export (adapter-static) — Firebase Hosting üzerinde
- Performans birinci öncelik: bundle <50KB/route, TTFB <50ms
- Tasarım birebir korundu (CSS Next.js sürümünden port) — bkz. DESIGN.md

## Stack

- SvelteKit 2 + Svelte 5 (runes mode: `$state`, `$props`, `$derived`)
- adapter-static (tamamen statik HTML)
- Firebase Hosting (mevcut altyapı)
- Google Fonts CDN: Playfair Display + DM Sans + JetBrains Mono

## Geliştirme

```bash
npm install
npm run dev          # localhost:5173
npm run check        # TypeScript + Svelte
npm run build        # build/ → statik HTML
npm run preview      # build'i lokal test
npm run deploy       # firebase deploy
```

## Yeni özellik eklerken

- Yeni route: `src/routes/<path>/+page.svelte`
- Dynamic route: `+page.ts` içinde `entries()` ile prerender slug listesi
- Server-only veri yok (statik export); tüm veriler `src/lib/data/`'dan import
- Paylaşılan component: `src/lib/components/`
- Stiller: `src/<name>-styles.css` (layout'tan import edilir)

## Cover gradient'leri (blog)

Blog post için yeni slug eklediğinde, **mutlaka** `src/app.css` içine
`.blog-cover-bg[data-cover="<slug>"]{background:linear-gradient(...)}` ekle —
yoksa transparan görünür.

## Ses dosyaları

Blog yazısının `audio` alanı `/audio/<slug>.mp3` formatında. MP3'ler
`static/audio/` altında, build sonrası `/audio/` URL'inde sunulur.

## Yasak

- Vercel/Netlify adapter ekleme (Firebase üzerinde kal)
- React/JSX import (Svelte projesi)
- `Tailwind`/`@import "tailwindcss"` (plain CSS kullan)
- Server endpoints (statik export ile uyumsuz)
