# Claude Code â€” Tavsiye ve kontrol notlarÄ±

> Bu dosya **statik tarama** ile Ã¼retildi (derleme/Ã§alÄ±ÅŸtÄ±rma loglarÄ± olmadan). GerÃ§ek hata ayÄ±klama iÃ§in aÅŸaÄŸÄ±daki runtime adÄ±mlarÄ±nÄ± ve Cursor debug oturumunu kullanÄ±n.

**KlasÃ¶r:** `D:\0\NextJS-MustafaYilmazArt`  
**Tarih:** 2026-03-20 01:40  

## 1. Proje tÃ¼rÃ¼ (tespit)
- Belirgin manifest bulunamadÄ± (arÅŸiv / config / karÄ±ÅŸÄ±k iÃ§erik olabilir)

## 2. Statik kontrol Ã¶zeti
| Kontrol | Durum |
| --- | --- |
| README | **Yok** â€” kurulum iÃ§in README Ã¶nerilir |
| .env.example | **Yok** â€” `.env.example` ÅŸablonu Ã¶nerilir |
| .gitignore | **Yok** â€” `node_modules`, `.env`, build Ã§Ä±ktÄ±larÄ± iÃ§in Ã¶nerilir |

## 3. Hata / risk tespitleri (genel)
- Otomatik statik taramada kritik bayrak bulunamadÄ±; aÅŸaÄŸÄ±daki manuel kontrolleri uygulayÄ±n.

## 4. Ä°yileÅŸtirme Ã¶nerileri (Claude Code iÃ§in)
- Ã–nce bu klasÃ¶rdeki Ã§alÄ±ÅŸtÄ±rma komutunu doÄŸrula (README veya Ã¼st dizindeki `PROJE-ENVANTERI.md`).
- Gizli anahtar ve KVKK kapsamÄ± verisini repoya ve loglara yazma.
- Node: `npm audit` / `npm outdated`; lockfile tutarlÄ±lÄ±ÄŸÄ±.
- Python: sanal ortam; mÃ¼mkÃ¼nse `ruff` / `pytest` / `mypy`.
- .NET: `dotnet build` ve testler; yapÄ±landÄ±rmayÄ± User Secrets veya ortam deÄŸiÅŸkenleriyle ayÄ±r.
- Flutter: `flutter analyze` ve baÄŸÄ±mlÄ±lÄ±k gÃ¼ncellemeleri.
- Tauri/Rust: `cargo clippy`; capability ve izinler.
- WordPress: yedekleme, gÃ¼ncelleme ve gÃ¼venlik eklentisi politikasÄ±.

## 5. KlasÃ¶re Ã¶zel notlar
- Ä°Ã§erik aÄŸÄ±rlÄ±klÄ± statik dosyalar; kÃ¶kte `package.json` yok â€” Next projesini burada baÅŸlat veya kaynaÄŸÄ± baÅŸka repodan eÅŸle.

## 6. Debug / doÄŸrulama kontrol listesi (runtime)
1. Temiz ortamda baÄŸÄ±mlÄ±lÄ±klarÄ± kur.
2. `dev` / `build` / test komutlarÄ±nÄ± Ã§alÄ±ÅŸtÄ±r; Ã§Ä±ktÄ±yÄ± kaydet.
3. Port ve `.env` eksiklerinde ilk hatayÄ± Ã§Ã¶z; sonra entegrasyon testi.
4. DÃ¼zeltme sonrasÄ± bu dosyayÄ± gÃ¼ncelle veya gereksiz maddeleri sil.


---

# Gemini Tavsiyeleri (Mimari ve Statik Analiz)

> Yazar: Antigravity (AI Model)
> **Tarih:** 2026-03-20

## Claude İçin Geliştirme Tavsiyeleri ve Kritik Noktalar
- **SSR/SSG:** Server ve Client component ayrımlarını ('use client') optimize ederek performansı artır.
- **State Management:** Gereksiz context API kullanımlarından kaçın; yerel component state'i veya Zustand gibi hafif çözümleri tercih et.
- **Bağımlılıklar:** `package.json` güncellemelerinde cache kaynaklı hatalara dikkat et ve lockfile'ı projeye uygun kullan.


---
**Otomatik tamamlama** (2026-03-20): Bu klasor _finalize_all_projects.ps1 ile tarandi. Detayli tur icin elden guncelleme onerilir.



### Derinlemesine Çalışma Zamanı (Runtime) İncelemesi
- **Genel İnceleme:** Projenin bilinen standart bir derleme aracı kök dizinde saptanamadı (veya build gerektirmeyen klasik HTML/Wordpress). Statik olarak incelendi.
