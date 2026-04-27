/* Blog listesi sayfası */
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { BlogIcon } from "@/components/BlogIcon";

export const metadata: Metadata = {
  title: "Blog · Mustafa Yılmaz",
  description:
    "Klinik psikoloji, AI/yazılım, maneviyat ve kişisel gelişim üzerine düşünce yazıları — Mustafa Yılmaz.",
};

/* Tarih biçimi: 2026-04-18 → 18 Nisan 2026 */
function formatDate(iso: string) {
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
  ];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;

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
          <li><Link href="/#akademi">Keşif Akademi</Link></li>
          <li><Link href="/yazilimlar">Yazılımlar</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/art">Art</Link></li>
          <li><Link href="/#iletisim" className="nav-cta">İletişime Geç</Link></li>
        </ul>
      </nav>

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="section-label">Düşünce Atölyesi</div>
          <h1>Yazılar</h1>
          <p>Klinik psikoloji, AI &amp; yazılım, maneviyat ve kişisel gelişim üzerine inşa edilmiş yazılar — okunması ve hatırlanması için yazıldı.</p>
        </div>
      </section>

      {/* Öne çıkan yazı */}
      <section className="blog-featured">
        <Link href={`/blog/${featured.slug}`} className="featured-card">
          <div className="featured-cover blog-cover-bg" data-cover={featured.slug}>
            <span className="featured-cat">{featured.category}</span>
            <div className="cover-icon"><BlogIcon slug={featured.slug} size={120} /></div>
          </div>
          <div className="featured-body">
            <div className="post-meta">
              <span>{formatDate(featured.date)}</span>
              <span className="dot">·</span>
              <span>{featured.readTime} okuma</span>
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <span className="read-more">Yazıyı Oku →</span>
          </div>
        </Link>
      </section>

      {/* Diğer yazılar */}
      <section className="blog-list">
        <div className="blog-list-inner">
          <h3 className="blog-section-title">Tüm Yazılar</h3>
          <div className="blog-grid">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-card-cover blog-cover-bg" data-cover={p.slug}>
                  <span className="blog-cat">{p.category}</span>
                  <div className="cover-icon"><BlogIcon slug={p.slug} size={70} /></div>
                </div>
                <div className="blog-card-body">
                  <div className="post-meta">
                    <span>{formatDate(p.date)}</span>
                    <span className="dot">·</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
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
            <Link href="/art">Art</Link>
            <Link href="/#iletisim">İletişim</Link>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Mustafa Yılmaz</p>
        </div>
      </footer>
    </>
  );
}
