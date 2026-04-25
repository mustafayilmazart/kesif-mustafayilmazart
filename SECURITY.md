# Security Policy

## Reporting / Bildirim

**medya@kesif.org** — public issue açmayın / do not open public issues.

72 saat yanıt, 14 gün düzeltme hedefi.

## Statik Site, Sınırlı Yüzey

Bu site **statik export** (`output: "export"`) ile dağıtılır. Kullanıcı verisi toplanmaz, çerez atılmaz, form yoktur. Güvenlik yüzeyi:

- ✅ Hiç JavaScript-tarafı veri toplama yok
- ✅ Form/POST endpoint yok
- ✅ Cookie / localStorage / IndexedDB kullanımı yok
- ✅ Analytics / tracking pixel yok
- ✅ Üçüncü taraf script yok (sadece Next.js bundle)
- ✅ Firebase Hosting üzerinden HTTPS

## Bilinen Hususlar

### `mailto:medya@kesif.org` Açık

Bot tarama/spam riski vardır. Mitigasyonu basit: spam filtre (Gmail otomatik).

### Üçüncü Taraf Linkler

Site Instagram, YouTube, LinkedIn, Medium, Substack, Udemy linklerine yönlendirir. Tıkladıktan sonra ilgili platformun gizlilik politikası geçerlidir; bu site referans dışında veri aktarmaz.

### Profil Görselleri

`public/profile.jpg` ve `public/profile-large.jpg` doğrudan Firebase Hosting'den servis edilir.

> ⚠️ **EXIF Temizliği:** `next.config.ts`'te `images: { unoptimized: true }` ayarı kullanıldığı için Next.js **görselleri olduğu gibi** servis eder; EXIF metadata (GPS koordinatları dahil) **dosyada kalır**. Görselleri repoya eklemeden önce manuel olarak EXIF temizliği yapın:
>
> ```bash
> exiftool -all= public/profile.jpg
> exiftool -all= public/profile-large.jpg
> ```
>
> Veya alternatif: `images: { unoptimized: false }` + Vercel/Firebase Image Optimization katmanı kullanın.

## KVKK / GDPR

Site:
- Kişisel veri **toplamaz** (ziyaretçi formu yok)
- Çerez **kullanmaz**
- Analytics / fingerprinting **kullanmaz**

→ KVKK aydınlatma metni veya cookie consent banner'ı **gerekli değildir**.

İçerik içinde anılan üçüncü tarafların adları (Udemy öğrencileri vs.) **soyadları kısaltılarak** verilmiştir; tam ad isteği gelirse 7 gün içinde işleme alınır.

## Supported Versions

Yalnızca canlı sürüm (`mustafayilmazart.web.app`).
