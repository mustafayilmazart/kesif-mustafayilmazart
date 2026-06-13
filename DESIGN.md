# Tasarım Sistemi — mustafayilmaz.art

> Bu belge sitenin **tek tasarım kaynağıdır**. Görsel/UI karar vermeden önce burayı oku.
> Sistem mevcut koddan (`src/app.css`, `src/app.html`) çıkarılmıştır — yani uydurma değil, sahada çalışan değerlerdir.
> Token'ların kaynağı: `src/app.css` içindeki `:root` değişkenleri.

## Ürün Bağlamı
- **Ne:** Mustafa Yılmaz kişisel marka portföyü — danışmanlık, AI mühendisliği, eğitim ve AI sanatını tek çatıda toplayan site.
- **Kim için:** Sağlık kurumları (AI danışmanlığı), eğitim alacak kişiler/ekipler, blog okuyucuları, işbirliği arayanlar.
- **Alan:** Kişisel marka / portfolyo · bağımlılık danışmanlığı + AI + maneviyat sentezi.
- **Proje tipi:** Çok sayfalı editöryel marka sitesi (SvelteKit + adapter-static, Firebase Hosting).
- **Akılda kalması gereken tek şey:** "Bilim, sanat, teknoloji ve maneviyatı aynı kişide birleştiren, sıcak ama ciddiye alınması gereken biri." Her tasarım kararı bu izlenime hizmet eder.

## Estetik Yön
- **Yön:** Sıcak Editöryel / Zarif (Refined Editorial). Serif başlık + temiz sans gövde + monospace etiket üçlüsü.
- **Dekorasyon seviyesi:** Niyetli (intentional) — yumuşak blob arka planlar, ince gradient vurgu çizgileri, grain yok ama atmosfer var. Abartı yok.
- **Ruh hali:** Sıcak, insani, güven veren; akademik soğukluk yok, popüler-bilim ucuzluğu da yok — ikisinin arasında olgun bir denge.
- **Anti-slop kuralı:** Mor gradient yok, 3 sütunlu ikon-daire grid'i yok, her şeyi ortalama yok, sistem fontu yok. Vurgu rengi teal→sarı gradient'tir (mor değil).

## Tipografi
Üç aile, üç net rol. Google Fonts üzerinden `display=swap` ile yükleniyor (`src/app.html`).

- **Başlık / Hero:** `Playfair Display` (serif) — 400, 600, 700, 800 + italik 400/600/700. Markanın editöryel sesi; sayfa başlıkları, hero, vurgu `<em>` italikleri. (Kodda en çok kullanılan: ~40 yer.)
- **Gövde / UI:** `DM Sans` (sans-serif) — 400, 500, 600, 700. Tüm paragraf, buton, form metni. `body` varsayılanı.
- **Etiket / Meta / Veri:** `JetBrains Mono` (monospace) — 400, 500. Rozetler, kategori etiketleri, tarih/okuma-süresi meta'ları, domain yazımı. Teknik + zanaatkâr dokunuş.
- **Yükleme:** `<link>` ile Google Fonts; `preconnect` mevcut. (İleride KVKK/performans için self-host'a geçilebilir — bkz. Karar Defteri notu.)
- **Tip ölçeği (akışkan, clamp tabanlı):**
  - Hero başlık: `clamp(2.5rem, 5vw, 4rem)`
  - Bölüm başlığı (H2): `clamp(2rem, 4vw, 2.8rem)`
  - Alt başlık: `clamp(1.6rem, 3vw, 2.2rem)`
  - Gövde: `~1rem` (16px tabanı)
  - Meta/etiket: `.7rem–.82rem` (JetBrains Mono, letter-spacing ile)

## Renk
- **Yaklaşım:** Dengeli — bir birincil (teal) + bir vurgu (sarı), ikisi gradient'te birleşiyor; gerisi sıcak nötrler.
- **Birincil (Teal):** `#219295` · koyu `#1a7577` · açık `#2ab3b6` · glow `rgba(33,146,149,.15)`. Markanın ana rengi: butonlar, linkler, vurgular.
- **Vurgu (Sarı):** `#e1d948` · yumuşak `#f0e96e` · muted `rgba(225,217,72,.12)`. Nokta vurgular, gradient ucu, logo aksanı.
- **Vurgu gradient'i:** `linear-gradient(90deg, var(--teal), var(--yellow))` — hero kart üst çizgisi, dekoratif ayraçlar.
- **Nötrler (sıcak):** krem `#faf8f0` · sıcak-beyaz `#fefdfb` (ana zemin) · sıcak-gri `#f5f3ed` · charcoal `#1a1a1a` · koyu `#0d0d0d` (footer/koyu bölümler).
- **Metin:** ana `#2c2c2c` · muted `#6b6b6b` · açık `#767676` (AA kontrast için #999'dan yükseltildi — WCAG 1.4.3).
- **Kenarlık:** `rgba(33,146,149,.1)` (teal'in çok soluk hali).
- **Semantik:** başarı `#16a34a` · hata `#dc2626` (form/uyarı). Bunlar token değil, yerinde kullanılıyor — gerekirse `:root`'a alınabilir.
- **Koyu bölümler:** Footer ve bazı section'lar `--dark #0d0d0d` zeminde; metin opaklıkları AA için `.5+` tutulur (footer link/tagline/copy).

## Token Mimarisi (3 Katman)
`src/app.css` `:root` üç katmanlı yapıdadır — değer değişikliği tek noktadan yönetilir:

```
KATMAN 1 — Primitif   →  --color-teal-600:#219295   (ham hex, doğrudan KULLANMA)
        ↓
KATMAN 2 — Semantik   →  --teal:var(--color-teal-600)   (amaç; KODDA BUNU kullan)
        ↓
KATMAN 3 — Component  →  ör. --color-success-bg (NewsletterForm durum rengi)
```

- **Kodda her zaman semantik katmanı kullan:** `var(--teal)`, `var(--text)`, `var(--color-success)`. Ham hex yazma.
- Mevcut isimler (`--teal`, `--text`, `--dark`…) korundu; artık primitiflere bağlı — yani geriye uyumlu, hesaplanan çıktı birebir aynı.
- Bir markanın tonunu değiştirmek için **tek satır** yeter: primitifteki hex'i güncelle, tüm site takip eder.
- **Durum renkleri** artık token: `--color-success` / `--color-success-bg` / `--color-success-border` / `--color-error`. NewsletterForm bunları kullanır (önceden hardcoded'di).
- **İstisna — dekoratif paletler token DEĞİL:** icon arka planları, blog kapak gradient'leri, floating tag renkleri bilinçli çok-renkli birer aksandır; semantik token'a bağlanmaz (her biri tek seferlik).

## Boşluk (Spacing)
- **Taban birim:** 4px ızgarası (değerler 4'ün katları: 8/12/14/16/20/24…).
- **Yoğunluk:** Ferah (spacious) — bölümler nefes alır.
- **Bölüm dikey boşluğu:** masaüstü `90–100px`, yatay gutter `40px` (mobilde `60–70px / 24px`).
- **Pratik ölçek:** xs(8) sm(12) md(16) lg(24) xl(32) 2xl(48) 3xl(64) — kod bu aralıkta kalır.

## Yerleşim (Layout)
- **Yaklaşım:** Izgara-disiplinli (grid-disciplined) içerik + hero/kartlarda hafif editöryel serbestlik.
- **İçerik maksimum genişliği:** `1200px` (baskın konteyner). Dar metin blokları için `720–780px`, orta için `968px`.
- **Kenar yarıçapı (hiyerarşik):**
  - Hap/pill: `50px` (butonlar, rozetler, chip filtreleri) — en yaygın
  - Daire: `50%` (avatarlar, ikon kabarcıkları)
  - Kart büyük: `20–24px`
  - Kart orta: `12–16px`
  - Küçük detay: `2–8px`
- **Video/medya:** klip alanları `16:9` (`aspect-ratio:16/9`), müzik kapakları `1:1`.

## Hareket (Motion)
- **Yaklaşım:** Niyetli ama ölçülü — anlamı destekleyen geçişler, gösteriş değil.
- **Süreler:** mikro `.2s` · standart `.3s` (baskın) · orta `.4s` · reveal `.8s`.
- **Easing:** giriş/reveal `ease-out` (fadeUp); genel `ease`.
- **Animasyonlar:** hero blob float, badge pulse, floating tag, `.reveal` IntersectionObserver giriş.
- **Erişilebilirlik:** `@media (prefers-reduced-motion: reduce)` ile tüm animasyon/transition kapatılır (zorunlu — `src/app.css` sonunda tanımlı).
- **Sadece kompozitör-dostu özellikler:** `transform` ve `opacity` tercih edilir; layout-bağlı (width/top/margin) animasyon yapılmaz.

## Erişilebilirlik & SEO Standartları (bu sitenin değişmezleri)
- Her sayfada skip link (`#ana-icerik`) + `<main>` landmark.
- Tek `<h1>`/sayfa, hiyerarşi atlamadan (h1→h2→h3).
- Dekoratif SVG/emoji `aria-hidden`; ikon butonlar `aria-label`'lı; filtreler `aria-pressed`.
- Renk kontrastı AA (≥4.5:1) — `--text-light` bu yüzden `#767676`.
- Her sayfada canonical + og:image + twitter card + uygun schema.org (Person, Article, FAQPage, Course, TechArticle, MusicRecording/VideoObject…).
- Trailing slash: `'never'` (tüm canonical/og:url buna uygun).

## Karar Defteri
| Tarih | Karar | Gerekçe |
|------|----------|-----------|
| 2026-06-14 | DESIGN.md mevcut sistemden çıkarılarak oluşturuldu | Site canlı ve olgun; /design-consultation sıfırdan tasarım yerine var olan dili kodladı (kaynak: src/app.css, src/app.html) |
| (öncesi) | `--text-light` #999 → #767676 | WCAG 1.4.3 AA kontrast (uçtan uca denetim) |
| (öncesi) | prefers-reduced-motion desteği eklendi | WCAG 2.3.3 / hareket hassasiyeti |

## Açık İyileştirme Notları (sistem değil, gelecek)
- Google Fonts → self-host (`@fontsource`) düşünülebilir: KVKK (üçüncü taraf IP) + CLS kazancı.
- Semantik renkler (`success/error`) `:root`'a token olarak alınabilir.
- Playfair Display 12 varyant yükleniyor; gerçekten kullanılanlar subset edilebilir (performans).
