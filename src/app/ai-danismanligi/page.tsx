/* AI Danışmanlığı — Sağlık kurumları için landing sayfası */
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sağlık Kurumları için AI Danışmanlığı · Mustafa Yılmaz",
  description:
    "Terapistler, doktorlar ve diş klinikleri için yapay zeka otomasyonları: randevu, hasta takibi, KVKK uyumlu dijital altyapı, AI asistan ve içerik pipeline'ı.",
  keywords: [
    "sağlık AI danışmanlığı", "klinik otomasyon", "terapist AI", "diş kliniği yapay zeka",
    "doktor randevu otomasyonu", "KVKK klinik uyumluluk", "Mustafa Yılmaz AI",
  ],
  openGraph: {
    title: "Sağlık Kurumları için AI Danışmanlığı",
    description: "Terapistler, doktorlar ve diş klinikleri için AI otomasyonları.",
    url: "https://mustafayilmaz.art/ai-danismanligi/",
    type: "website",
    locale: "tr_TR",
  },
};

const audiences = [
  { icon: "🧠", title: "Terapistler & Psikologlar", desc: "Seans takibi, ödev otomasyonu, AI destekli ön değerlendirme, KVKK uyumlu danışan kayıt sistemi." },
  { icon: "🦷", title: "Diş Klinikleri", desc: "Randevu hatırlatma, tedavi planı görselleştirme, hasta sadakat programı, onam formları." },
  { icon: "🩺", title: "Doktorlar & Uzmanlar", desc: "Hasta dosyası özetleme, e-reçete entegrasyonu, sonuç bildirimi otomasyonu, klinik dashboard." },
  { icon: "🏥", title: "Klinik & Polikliniğer", desc: "Çoklu hekim koordinasyonu, kapasite yönetimi, gelir analitiği, multi-kanal iletişim." },
  { icon: "💪", title: "Fizyoterapi Merkezleri", desc: "Egzersiz takip uygulaması, ev programı pipeline'ı, video eğitim üretimi." },
  { icon: "🥗", title: "Beslenme Uzmanları", desc: "Beslenme planı oluşturma asistanı, danışan ilerleme takibi, içerik takvimi." },
];

const services = [
  {
    n: "01",
    title: "Randevu & İletişim Otomasyonu",
    desc: "WhatsApp, SMS ve e-posta üzerinden otomatik randevu hatırlatma, no-show azaltma, geri bildirim toplama. Hastaya doğum günü, takip ve kontrol mesajları otomatik atılır. Kliniğin telefonu sürekli zile basmaktan kurtulur.",
    tools: ["WhatsApp", "SMS / E-posta", "Takvim Entegrasyonu", "Otomatik Hatırlatma"],
  },
  {
    n: "02",
    title: "Türkçe AI Asistan",
    desc: "Web sitenizde 7/24 çalışan, sadece sizin kliniğinizin tonunu ve hizmetlerini bilen Türkçe yapay zeka asistanı. Randevu alımı, fiyat sorgulama ve tedaviye dair temel sorulara cevap verir; karmaşık durumda sekretere yönlendirir.",
    tools: ["7/24 Yanıt", "Türkçe Doğal Dil", "Klinik Tonu", "Sekreter Yönlendirme"],
  },
  {
    n: "03",
    title: "KVKK Uyumlu Dijital Altyapı",
    desc: "Hasta verisinin toplandığı her form, hukuki açıdan KVKK uyumlu. Aydınlatma metni, açık rıza, veri saklama politikası ve veri silme talepleri otomatik yönetilir. Kendi geliştirdiğim KVKK denetim altyapısı ile sürekli kontrol sağlanır.",
    tools: ["Aydınlatma Metni", "Açık Rıza", "Veri Saklama", "Sürekli Denetim"],
  },
  {
    n: "04",
    title: "Hasta Takip & Yönetim Panosu",
    desc: "Hasta yolculuğunu görselleştirir: ilk başvuru, randevu, tedavi, kontrol, tavsiye. Kliniğin gelirini, doluluk oranını ve hekim bazlı verimliliği tek bakışta görürsünüz. Excel'in karmaşasından canlı panele geçiş.",
    tools: ["Hasta Yolculuğu", "Gelir Analitiği", "Doluluk", "Hekim Performansı"],
  },
  {
    n: "05",
    title: "İçerik Üretim Hattı",
    desc: "Sosyal medya postu, blog yazısı, hasta bilgilendirme videosu — hepsi yarı otomatik. Konuyu söylersiniz; sistem metni yazar, sesi üretir, videoyu kurgular. Haftalık içerik takvimi 30 dakikada hazırlanır.",
    tools: ["Yazı Üretimi", "Türkçe Seslendirme", "Video Kurgu", "İçerik Takvimi"],
  },
  {
    n: "06",
    title: "Web Sitesi & Yerel SEO",
    desc: "Mobil uyumlu, hızlı, KVKK uyumlu klinik web sitesi. Yerel arama optimizasyonu ile Google'da ilk sayfa: \"Kadıköy diş hekimi\", \"Bakırköy psikolog\" gibi aramalarda görünürlük. Hız ve erişilebilirlik puanları üst seviyede.",
    tools: ["Mobil Uyum", "Yerel SEO", "Hız Optimizasyonu", "Erişilebilirlik"],
  },
  {
    n: "07",
    title: "Eğitim & Mini Kurslar",
    desc: "Hastalarınıza özel mini-kurslar, broşürler, video setleri. \"Diş protezi sonrası bakım\", \"Stres yönetimi 5 günde\", \"İmplant öncesi hazırlık\" gibi materyaller, danışanın kendine yatırım hissini artırır ve aday hasta kazanır.",
    tools: ["Mini Kurs", "Video Set", "Broşür", "Aday Hasta"],
  },
  {
    n: "08",
    title: "Veri Güvenliği & Yedekleme",
    desc: "Hasta verisi şifreli, yedekli ve KVKK'ya uygun şekilde saklanır. Sızıntı durumunda anında uyarı. Periyodik güvenlik denetimi ile zayıf noktalar önceden tespit edilir. Olası kötü senaryolara karşı koruma sağlanır.",
    tools: ["Şifreli Yedekleme", "Sızıntı Uyarısı", "Periyodik Denetim", "Felaket Kurtarma"],
  },
];

const process = [
  { n: "01", t: "Ücretsiz Keşif", d: "30 dakikalık görüşme. Mevcut sürecinizi ve sıkıntı noktalarınızı dinliyorum. Bir AI'ın gerçekten faydalı olacağı yerleri birlikte tespit ediyoruz." },
  { n: "02", t: "Otomasyon Haritası", d: "Kliniğinize özel yol haritası. Hangi süreç önce otomatikleşmeli, hangisi sonra; tahmini zaman ve bütçe. Yapmamanız gereken yatırımları da söylüyorum." },
  { n: "03", t: "Pilot Kurulum", d: "İlk 1-2 hafta tek bir akışı pilot olarak kuruyoruz. Genelde randevu hatırlatma ile başlıyoruz — etkisi net ve hızlı görünür." },
  { n: "04", t: "Ölçek & Destek", d: "Pilot başarılıysa sıradaki akışlara geçiyoruz. Ekibinizi kullanım için eğitiyorum. Aylık veya proje bazlı destek planı sunuyorum." },
];

const whyMe = [
  { icon: "🩺", title: "Sağlık Sektörü İçeriden", desc: "14+ yıl psikiyatri hemşireliği, BAHAR Bağımlılık Merkezi'nde danışmanlık. Hekim ve hasta dilini biliyorum; \"sistem dili\" değil, klinik dili konuşuyorum." },
  { icon: "🤖", title: "AI Engineer", desc: "80'den fazla projede AI orkestrasyonu, 50+ MCP sunucusu. Claude, GPT, Gemini ile production deneyimi. Hype değil, çalışan sistem kuruyorum." },
  { icon: "⚖️", title: "KVKK Uzmanlığı", desc: "Kendi açık kaynak KVKK tarayıcımı yazdım (Avukat MCP). Sağlık verisinin yasal hassasiyetini hem teknik hem hukuki yönden anlıyorum." },
  { icon: "🎓", title: "Eğitim Odaklı", desc: "Keşif Akademi'de 3.700+ öğrenci. Ekibinize sistemi öğretirken karmaşık değil, anlaşılır anlatıyorum. Bağımlılık yaratmıyor; özerklik kazandırıyorum." },
];

const faqs = [
  { q: "Bütçem küçük, küçük bir klinikim. Yine de uygun mu?", a: "Evet. Hizmetler modüler. Tek bir akış — örneğin sadece randevu hatırlatma — bile aylık 5-15 saat zaman tasarrufu sağlar. Küçük başlamak en mantıklısıdır." },
  { q: "Mevcut sistemimi (Google Takvim, WordPress, Excel) bırakmam gerekiyor mu?", a: "Hayır. Sahip olduğunuz araçların üzerine inşa ediyoruz. Yeni bir yazılım almanıza nadiren gerek olur; mevcut araçlarınızı birbirine bağlıyoruz." },
  { q: "Veri güvenliği ne durumda? Hasta verisi sızabilir mi?", a: "KVKK uyumluluğu ve veri şifreleme her projenin temelidir. Avukat MCP ile düzenli güvenlik taraması yapılır. Hasta verisi asla AI eğitiminde kullanılmaz; sadece operasyonel akışta işlenir." },
  { q: "AI hekimin yerini mi alıyor?", a: "Hayır, almayacak. AI sekreterlik, takip, bilgilendirme, raporlama gibi tekrarlayan işleri yapıyor. Hekim hastayla daha çok yüz yüze vakit geçirebilsin diye hayatına giriyor." },
  { q: "Ne kadar sürede sonuç görürüm?", a: "Pilot 1-2 hafta. İlk gözle görülür etkiler 4-6 hafta içinde — no-show azalması, sosyal medya etkileşimi artışı, sekreterin nefes alması gibi." },
  { q: "Aylık ücret mi, proje bazlı mı?", a: "İkisi de mümkün. Sürekli operasyon (otomasyon bakımı, içerik üretimi) için aylık paket; sıfırdan kurulum için proje bazlı." },
];

export default function AIDanismanligi() {
  return (
    <>
      <nav className="site-nav" id="navbar">
        <Link href="/" className="nav-logo">
          M<span>.</span>Yılmaz
          <span className="domain">mustafayilmaz.art</span>
        </Link>
        <ul className="nav-links" id="navLinks">
          <li><Link href="/#hakkimda">Hikayem</Link></li>
          <li><Link href="/#uzmanlik">Uzmanlık</Link></li>
          <li><Link href="/ai-danismanligi" className="active-link">AI Danışmanlık</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><a href="mailto:bilgi@mustafayilmaz.art" className="nav-cta">Görüşme Al</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="aid-hero">
        <div className="aid-hero-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <div className="aid-hero-content">
          <div className="hero-badge">
            <span className="pulse"></span>Sağlık Kurumlarına Özel
          </div>
          <h1>
            Hastalar için <em>insan</em>,<br />
            ofis için <span className="highlight">yapay zeka</span>.
          </h1>
          <p className="aid-hero-desc">
            Terapistler, doktorlar ve diş klinikleri için <strong>AI destekli otomasyon danışmanlığı</strong>.
            Randevudan iletişime, KVKK&apos;dan içerik üretimine — hekim hastayla, AI ofisle ilgilensin.
          </p>
          <div className="aid-hero-buttons">
            <a href="mailto:bilgi@mustafayilmaz.art?subject=AI Danışmanlık — Ücretsiz Keşif Görüşmesi" className="btn-primary">
              Ücretsiz Keşif Görüşmesi
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#hizmetler" className="btn-secondary">Hizmetleri Gör</a>
          </div>
          <div className="aid-hero-stats">
            <div><strong>14+</strong><span>yıl sağlık deneyimi</span></div>
            <div><strong>80+</strong><span>AI projesi</span></div>
            <div><strong>50+</strong><span>MCP sunucu</span></div>
            <div><strong>3.7K+</strong><span>öğrenci</span></div>
          </div>
        </div>
      </section>

      {/* Hedef kitle */}
      <section className="aid-section" id="kimler-icin">
        <div className="aid-inner">
          <div className="section-label">Kimler için</div>
          <h2 className="section-title">Sağlık Sektörünün Gerçek <em>Sıkıntıları</em>nı Biliyorum.</h2>
          <p className="section-subtitle">14 yıl psikiyatri hemşireliği, klinik psikoloji yüksek lisansı ve BAHAR Bağımlılık Merkezi&apos;nde edinilen deneyim — sektörü içeriden tanıyan biri olarak konuşuyorum.</p>
          <div className="aid-audience-grid">
            {audiences.map((a) => (
              <div key={a.title} className="aid-audience-card">
                <div className="aid-audience-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="aid-services-section" id="hizmetler">
        <div className="aid-inner">
          <div className="section-label">Hizmetler</div>
          <h2 className="section-title">Hangi <em>İşler</em> Otomatikleşir?</h2>
          <p className="section-subtitle">Aşağıdaki hizmetler modüler. Hepsini birden almak zorunda değilsiniz; size en çok zaman ve para kazandıracak olanla başlıyoruz.</p>
          <div className="aid-services-grid">
            {services.map((s) => (
              <div key={s.n} className="aid-service-card">
                <div className="service-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tools">
                  {s.tools.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="aid-process-section">
        <div className="aid-inner">
          <div className="section-label">Çalışma Süreci</div>
          <h2 className="section-title">Karmaşık Değil, <em>Adım Adım</em>.</h2>
          <div className="aid-process-grid">
            {process.map((p) => (
              <div key={p.n} className="aid-process-step">
                <div className="aid-step-num">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden ben */}
      <section className="aid-section">
        <div className="aid-inner">
          <div className="section-label">Neden Ben</div>
          <h2 className="section-title">Üç <em>Dünya</em>nın Kesişiminde.</h2>
          <p className="section-subtitle">Salt teknoloji firmaları sağlığı bilmez; salt sağlıkçılar AI&apos;yı bilmez. Üçüncü bir profil var: ikisini de içeriden gören.</p>
          <div className="aid-why-grid">
            {whyMe.map((w) => (
              <div key={w.title} className="aid-why-card">
                <div className="aid-why-icon">{w.icon}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="aid-section aid-faq-section">
        <div className="aid-inner aid-faq-inner">
          <div className="section-label">Sık Sorulanlar</div>
          <h2 className="section-title">Cevabı <em>Şimdi</em>den Bilelim.</h2>
          <div className="aid-faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="aid-faq">
                <summary>
                  <span>{f.q}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="aid-cta-section" id="iletisim">
        <div className="aid-cta-inner">
          <h2>Kliniğinizde <em>15 dakika</em> tasarruf edebileceğimiz bir akış var mı?</h2>
          <p>Ücretsiz 30 dakikalık keşif görüşmesinde birlikte bakalım. Görüşmenin sonunda hiçbir şey almak zorunda değilsiniz; en azından 1-2 somut fikirle ayrılırsınız.</p>
          <div className="aid-cta-buttons">
            <a href="mailto:bilgi@mustafayilmaz.art?subject=AI Danışmanlık — Ücretsiz Keşif Görüşmesi&body=Merhaba Mustafa Bey,%0A%0AKliniğim:%0AŞehir:%0ASıkıntı yaşadığım süreç:%0AGörüşmek istediğim zaman:" className="btn-primary btn-lg">
              📅 Ücretsiz Görüşme Talep Et
            </a>
            <a href="https://linkedin.com/in/kpmustafayilmaz" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-lg">
              LinkedIn&apos;de Mesaj At
            </a>
          </div>
          <p className="aid-cta-meta">
            <strong>bilgi@mustafayilmaz.art</strong> · 7 gün içinde dönüş · KVKK uyumlu iletişim
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-logo">M<span>.</span>Yılmaz</div>
          <div className="footer-domain">mustafayilmaz.art</div>
          <p className="footer-tagline">Keşif · İyilik · Dönüşüm</p>
          <div className="footer-links">
            <Link href="/">Anasayfa</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/ai-danismanligi">AI Danışmanlık</Link>
            <a href="mailto:bilgi@mustafayilmaz.art">İletişim</a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Mustafa Yılmaz</p>
        </div>
      </footer>
    </>
  );
}
