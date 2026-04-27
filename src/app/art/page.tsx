/* Art sayfası — Suno müzikleri + AI görseller */
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { tracks, artworks } from "@/data/art";

export const metadata: Metadata = {
  title: "Art · Müzik & Görsel — Mustafa Yılmaz",
  description:
    "AI ile üretilmiş müzikler ve görsellerden oluşan kişisel sanat portfolyom. Suno ile bestelenmiş parçalar dinlenebilir, görseller galeride görüntülenebilir.",
  openGraph: {
    title: "Art · Mustafa Yılmaz",
    description: "Müzik ve görsel — AI destekli sanat portfolyom.",
    url: "https://mustafayilmaz.art/art/",
    type: "website",
    locale: "tr_TR",
  },
};

const categories = Array.from(new Set(artworks.map((a) => a.category)));

export default function ArtPage() {
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
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/art" className="active-link">Art</Link></li>
          <li><a href="mailto:bilgi@mustafayilmaz.art" className="nav-cta">Görüşme Al</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="art-hero">
        <div className="art-hero-bg">
          <div className="art-blob art-blob-1"></div>
          <div className="art-blob art-blob-2"></div>
        </div>
        <div className="art-hero-content">
          <div className="hero-badge">
            <span className="pulse"></span>Müzik & Görsel
          </div>
          <h1>
            Bilim ve <em>sanat</em><br />
            aynı nefesten doğar.
          </h1>
          <p className="art-hero-desc">
            <strong>Suno</strong> ile bestelenmiş müzikler, AI destekli görseller — düşüncelerimi kelime dışında da
            ifade etmenin yolu. Klinik, mühendislik ve manevi düzlemde dolaşırken; ses ve görüntü, dilin yetersiz
            kaldığı yerde devreye giriyor.
          </p>
          <div className="art-hero-stats">
            <div><strong>{tracks.length}</strong><span>müzik</span></div>
            <div><strong>{artworks.length}</strong><span>görsel</span></div>
            <div><strong>{categories.length || "—"}</strong><span>kategori</span></div>
          </div>
          <div className="art-hero-buttons">
            <a href="#muzikler" className="btn-primary">Müzikleri Dinle</a>
            <a href="#galeri" className="btn-secondary">Galeriyi Gör</a>
          </div>
        </div>
      </section>

      {/* Müzikler */}
      <section className="art-section" id="muzikler">
        <div className="art-inner">
          <div className="section-label">Müzik</div>
          <h2 className="section-title">
            <em>Suno</em> ile Bestelenen Parçalar
          </h2>
          <p className="section-subtitle">
            Türkçe sözlü, manevi ve elektronik dokular. Her parça bir duygu, bir an, bir tefekkür kapısı.
          </p>

          {tracks.length === 0 ? (
            <div className="art-empty">
              <p>Yakında ilk müzikler buraya yüklenecek.</p>
            </div>
          ) : (
            <div className="art-tracks">
              {tracks.map((t) => (
                <article key={t.slug} className="art-track-card">
                  <div
                    className="art-track-cover"
                    style={t.cover.startsWith("linear-") ? { background: t.cover } : undefined}
                  >
                    {!t.cover.startsWith("linear-") && (
                      <Image src={t.cover} alt={t.title} fill sizes="(max-width:768px) 100vw, 280px" />
                    )}
                    <div className="art-track-genre">{t.genre}</div>
                  </div>
                  <div className="art-track-body">
                    <div className="art-track-meta">
                      <span>{t.mood}</span>
                      <span>·</span>
                      <span>{t.duration}</span>
                    </div>
                    <h3>{t.title}</h3>
                    <p>{t.description}</p>
                    <audio controls preload="none" src={t.src} className="art-audio">
                      Tarayıcınız ses oynatıcıyı desteklemiyor.
                    </audio>
                    <div className="art-tags">
                      {t.tags.map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                    {t.lyrics && (
                      <details className="art-lyrics">
                        <summary>Sözler</summary>
                        <pre>{t.lyrics}</pre>
                      </details>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Galeri */}
      <section className="art-gallery-section" id="galeri">
        <div className="art-inner">
          <div className="section-label">Görsel</div>
          <h2 className="section-title">
            AI ile <em>Üretilmiş</em> Görseller
          </h2>
          <p className="section-subtitle">
            Manevi kavramlar, klinik kavrayışlar ve içsel yolculuklar — her biri bir düşüncenin görsel karşılığı.
          </p>

          {artworks.length === 0 ? (
            <div className="art-empty">
              <p>Yakında galeri açılacak.</p>
            </div>
          ) : (
            <div className="art-gallery">
              {artworks.map((a) => (
                <figure key={a.slug} className="art-piece">
                  <div className="art-piece-img">
                    <Image
                      src={a.src}
                      alt={a.title}
                      width={a.width}
                      height={a.height}
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption>
                    <div className="art-piece-cat">{a.category}</div>
                    <h3>{a.title}</h3>
                    <p>{a.description}</p>
                    <div className="art-tags">
                      {a.tags.map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="art-cta">
        <div className="art-cta-inner">
          <h2>Birlikte <em>üretmek</em> ister misin?</h2>
          <p>
            Marka müziği, jenerik, podcast intro veya görsel kimlik için yapay zekayla kürate edilmiş özel
            çalışmalar üretiyorum. Ham AI çıktısı değil; klinik bir kulağın eliyle düzenlenmiş eserler.
          </p>
          <a href="mailto:bilgi@mustafayilmaz.art?subject=Sanat İşbirliği" className="btn-primary btn-lg">
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
