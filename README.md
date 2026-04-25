# mustafayilmaz.art — Personal Site

> **Mustafa Yılmaz'ın kişisel marka ve portfolyo sitesi.**
> *Personal brand site — Next.js 16 + Tailwind + Firebase Hosting. Migrated from a custom WordPress theme.*

🌐 Canlı: **[mustafayilmazart.web.app](https://mustafayilmazart.web.app)** (özel alan: mustafayilmaz.art)

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![Firebase Hosting](https://img.shields.io/badge/Firebase-Hosting-orange)](https://firebase.google.com/docs/hosting)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Hikaye

Bu site önce bir **özel WordPress teması** olarak yazıldı (`mustafayilmaz-art.zip`), sonra performans, deploy kolaylığı ve modern stack için **Next.js + Firebase Hosting**'e migrasyon yapıldı. Tema'nın CSS'i ve genel tasarımı korundu; React component'leri ile yeniden inşa edildi.

> Burada gördüğünüz her şey, kişisel marka ve portfolyo için inşa edilen **yaşayan bir örnektir**. Aynı yapıyı kendi sitenize uyarlamak için fork edebilirsiniz.

---

## 🏗 Stack

- **Framework:** Next.js 16 App Router + TypeScript
- **Stil:** Tailwind CSS 4 + custom CSS theme
- **Font:** Playfair Display + DM Sans + JetBrains Mono (Google Fonts)
- **Hosting:** Firebase Hosting (statik export, `output: "export"`)
- **CDN:** Cloudflare (custom domain için)
- **Blog:** Markdown-in-TS — `src/data/posts.ts`

---

## 📑 Sayfalar

| Sayfa | Yol | Açıklama |
|---|---|---|
| Anasayfa | `/` | Hero + Hakkımda + Uzmanlık + Akademi + Süreç + Araçlar + Sertifikalar + Referanslar + İletişim |
| Blog | `/blog` | Düşünce yazıları listesi |
| Blog Tekil | `/blog/[slug]` | fs.blog / jamesclear.com tarzı tekil yazı |

---

## 🚀 Geliştirme

```bash
git clone https://github.com/kpmustafayilmaz/NextJS-MustafaYilmazArt
cd NextJS-MustafaYilmazArt
npm install
npm run dev   # http://localhost:3000
```

### Build & Deploy

```bash
npm run build              # statik export -> out/
npm run deploy             # Firebase Hosting'e push
```

---

## 📝 Yeni Blog Yazısı Eklemek

`src/data/posts.ts`:

```ts
{
  slug: "yeni-yazi",
  title: "Başlık",
  category: "Kategori",
  excerpt: "Özet...",
  date: "2026-04-21",
  readTime: "5 dk",
  cover: "linear-gradient(135deg,#X,#Y)",
  tags: ["..."],
  content: `<p>HTML içerik...</p>`
}
```

`globals.css`'e cover gradient ekle:
```css
.blog-cover-bg[data-cover="yeni-yazi"]{background:linear-gradient(135deg,#X,#Y)}
```

Build & deploy — yeni statik sayfa otomatik üretilir.

---

## 📚 Atıflar

[ATTRIBUTIONS.md](ATTRIBUTIONS.md)

---

## 📄 Lisans

MIT — bkz. [LICENSE](LICENSE).

> Sitenin **kişisel içerikleri** (yazılar, biyografi, profil fotoğrafı, marka adı) MIT kapsamında değildir; All Rights Reserved © Mustafa Yılmaz. Sadece **kod & tema yapısı** MIT.
