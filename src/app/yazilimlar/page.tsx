/* Yazılımlar sayfası — geliştirdiğim production uygulamalar */
import Link from "next/link";
import type { Metadata } from "next";
import { apps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Geliştirdiğim Yazılımlar · Mustafa Yılmaz",
  description:
    "Klinik gözlemden doğan, manevi ihtiyaçtan yükselen, bireyin işine yarayan dijital ürünler. kesif.app, iyilikhali.tr, terapist.io ve daha fazlası.",
  keywords: [
    "Mustafa Yılmaz yazılım", "kesif.app", "iyilikhali.tr", "terapist.io",
    "tooleo", "aile.kesif", "hafiz.kesif", "tahkik.kesif", "maneviyat.kesif",
  ],
  openGraph: {
    title: "Geliştirdiğim Yazılımlar · Mustafa Yılmaz",
    description: "Production'da çalışan dijital ürünlerim.",
    url: "https://mustafayilmaz.art/yazilimlar/",
    type: "website",
    locale: "tr_TR",
  },
};

const categories = Array.from(new Set(apps.map((a) => a.category)));

export default function YazilimlarPage() {
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
          <li><Link href="/ai-danismanligi">AI Danışmanlık</Link></li>
          <li><Link href="/yazilimlar" className="active-link">Yazılımlar</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/art">Art</Link></li>
          <li><a href="mailto:bilgi@mustafayilmaz.art" className="nav-cta">Görüşme Al</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="apps-hero">
        <div className="apps-hero-bg">
          <div className="apps-blob apps-blob-1"></div>
          <div className="apps-blob apps-blob-2"></div>
        </div>
        <div className="apps-hero-content">
          <div className="hero-badge">
            <span className="pulse"></span>Production'da Çalışıyor
          </div>
          <h1>
            Hayata <em>geçirdiğim</em><br />
            dijital ürünler.
          </h1>
          <p className="apps-hero-desc">
            Klinik gözlemden doğan, manevi ihtiyaçtan yükselen, bireyin işine yarayan yazılımlar.
            Hepsi <strong>yayında</strong>, hepsi büyümeye devam ediyor.
          </p>
          <div className="apps-hero-stats">
            <div><strong>{apps.length}</strong><span>uygulama</span></div>
            <div><strong>{categories.length}</strong><span>kategori</span></div>
            <div><strong>7/24</strong><span>erişilebilir</span></div>
          </div>
        </div>
      </section>

      {/* Kategoriler */}
      {categories.map((cat) => {
        const items = apps.filter((a) => a.category === cat);
        return (
          <section key={cat} className="apps-page-section">
            <div className="apps-inner">
              <div className="apps-cat-head">
                <div className="section-label">{cat}</div>
                <div className="apps-cat-count">{items.length} uygulama</div>
              </div>
              <div className="apps-grid">
                {items.map((a) => (
                  <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" className="app-card">
                    <div className="app-accent" style={{ background: a.accent }}></div>
                    <div className="app-card-head">
                      <span className="app-domain">{a.domain}</span>
                      <svg className="app-ext" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </div>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                    <span className="app-link">Ziyaret et →</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="apps-cta">
        <div className="apps-cta-inner">
          <h2>Sıradaki <em>fikir</em> seninki olabilir.</h2>
          <p>
            Sağlık, eğitim veya manevi alanda bir uygulama fikrin mi var? Yapay zekayla hızlandırılmış,
            klinik bir bakışla denetlenmiş ürünler birlikte inşa edebiliriz.
          </p>
          <a href="mailto:bilgi@mustafayilmaz.art?subject=Yazılım İşbirliği" className="btn-primary btn-lg">
            İletişime Geç
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <p>© 2026 Mustafa Yılmaz · mustafayilmaz.art</p>
      </footer>
    </>
  );
}
