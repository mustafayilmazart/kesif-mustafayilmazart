/* Blog tekil yazı sayfası — TOC + audio + profil kartı + SEO */
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, type Post } from "@/data/posts";
import { BlogIcon } from "@/components/BlogIcon";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Yazı bulunamadı" };
  const url = `https://mustafayilmaz.art/blog/${post.slug}/`;
  return {
    title: `${post.title} · Mustafa Yılmaz`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Mustafa Yılmaz", url: "https://mustafayilmaz.art" }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Mustafa Yılmaz"],
      tags: post.tags,
      siteName: "mustafayilmaz.art",
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

/* Türkçe tarih biçimi */
function formatDate(iso: string) {
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
  ];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

/* HTML içeriğinden h2 başlıklarını çıkarıp TOC üret */
function extractToc(html: string): { id: string; text: string }[] {
  const matches = [...html.matchAll(/<h2>([^<]+)<\/h2>/g)];
  return matches.map((m, i) => ({
    id: `h2-${i}`,
    text: m[1].trim(),
  }));
}

/* h2'lere id ekleyerek HTML üret (anchor için) */
function injectTocIds(html: string): string {
  let i = 0;
  return html.replace(/<h2>/g, () => `<h2 id="h2-${i++}">`);
}

/* JSON-LD Article structured data (SEO için) */
function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Mustafa Yılmaz",
      url: "https://mustafayilmaz.art",
    },
    publisher: {
      "@type": "Person",
      name: "Mustafa Yılmaz",
      url: "https://mustafayilmaz.art",
    },
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "tr-TR",
    keywords: post.tags.join(", "),
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mustafayilmaz.art/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const toc = extractToc(post.content);
  const contentWithIds = injectTocIds(post.content);

  /* İlgili yazılar — aynı kategori öncelikli, en çok 2 tane */
  const others = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 2);

  return (
    <>
      {/* JSON-LD structured data — SEO için Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />

      <nav className="site-nav" id="navbar">
        <Link href="/" className="nav-logo">
          M<span>.</span>Yılmaz
          <span className="domain">mustafayilmaz.art</span>
        </Link>
        <ul className="nav-links" id="navLinks">
          <li><Link href="/#hakkimda">Hikayem</Link></li>
          <li><Link href="/#uzmanlik">Uzmanlık</Link></li>
          <li><Link href="/#akademi">Keşif Akademi</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/#iletisim" className="nav-cta">İletişime Geç</Link></li>
        </ul>
      </nav>

      <article className="article">
        <header className="article-header blog-cover-bg" data-cover={post.slug}>
          <div className="article-header-inner">
            <Link href="/blog" className="back-link">← Tüm Yazılar</Link>
            <div className="article-cat">{post.category}</div>
            <div className="article-header-icon"><BlogIcon slug={post.slug} size={140} /></div>
            <h1>{post.title}</h1>
            <div className="article-meta">
              <div className="author">
                <div className="author-avatar">MY</div>
                <div>
                  <div className="author-name">Mustafa Yılmaz</div>
                  <div className="author-handle">mustafayilmaz.art</div>
                </div>
              </div>
              <div className="article-meta-right">
                <span>{formatDate(post.date)}</span>
                <span className="dot">·</span>
                <span>{post.readTime} okuma</span>
              </div>
            </div>
          </div>
        </header>

        {/* 3 kolon grid: TOC sol — content orta — profil kart sağ */}
        <div className="article-layout">
          {/* SOL: İçindekiler (Table of Contents) */}
          {toc.length > 0 && (
            <aside className="article-toc">
              <div className="toc-sticky">
                <h4 className="toc-title">İçindekiler</h4>
                <ol className="toc-list">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.text}</a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          )}

          {/* ORTA: Audio + içerik */}
          <div className="article-main">
            {post.audio && (
              <div className="article-audio">
                <div className="audio-head">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1v-7h3zM3 19a2 2 0 002 2h1v-7H3z"></path>
                  </svg>
                  <div>
                    <div className="audio-label">Bu yazıyı dinle</div>
                    <div className="audio-meta">Türkçe seslendirme · {post.audioDuration ?? ""}</div>
                  </div>
                </div>
                <audio controls preload="none" src={post.audio}>
                  Tarayıcınız ses oynatmayı desteklemiyor.
                </audio>
              </div>
            )}

            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />

            {/* Kaynaklar */}
            {post.sources && post.sources.length > 0 && (
              <section className="article-sources">
                <h3>Kaynaklar &amp; Atıflar</h3>
                <ul>
                  {post.sources.map((s, i) => (
                    <li key={i}>
                      {s.type && <span className={`source-type source-type-${s.type}`}>{s.type}</span>}
                      <span className="source-title">
                        {s.url ? (
                          <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
                        ) : (
                          s.title
                        )}
                      </span>
                      {s.author && <span className="source-author"> — {s.author}</span>}
                      {s.note && <span className="source-note"> · {s.note}</span>}
                    </li>
                  ))}
                </ul>
                <p className="sources-note">
                  Bu yazı, kaynaklarda anılan eserlerden <strong>kavram düzeyinde ilham</strong> almıştır; metin tamamen Mustafa Yılmaz&apos;ın kendi klinik deneyimi ve yorumlarıyla, sıfırdan Türkçe yazılmıştır. Birebir alıntı içermez.
                </p>
              </section>
            )}

            <div className="article-tags">
              {post.tags.map((t) => (
                <span key={t} className="article-tag">#{t}</span>
              ))}
            </div>

            <div className="article-cta">
              <h3>Bu yazı sana iyi geldiyse...</h3>
              <p>Düzenli yazıları kaçırmamak için bültenime abone ol.</p>
              <div className="article-cta-buttons">
                <a href="https://kesiforg.substack.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Substack&apos;te Abone Ol</a>
                <a href="mailto:bilgi@mustafayilmaz.art" className="btn-secondary">İletişime Geç</a>
              </div>
            </div>
          </div>

          {/* SAĞ: Profil + Bülten kartı (sticky) */}
          <aside className="article-profile">
            <div className="profile-sticky">
              <div className="profile-card">
                <div className="profile-avatar-wrap">
                  <div className="profile-avatar profile-avatar-img">
                    <Image src="/profile.jpg" alt="Mustafa Yılmaz" width={96} height={96} />
                  </div>
                </div>
                <h4>Mustafa Yılmaz</h4>
                <p className="profile-role">Danışman · AI Engineer · Eğitmen · AI Artist</p>
                <p className="profile-bio">
                  Hemşirelikten psikolojiye (klinik), yazılımdan AI&apos;a uzanan bir yolculuk. BAHAR Merkezi&apos;nde bağımlılık danışmanlığı, 80&apos;den fazla projede AI orkestrasyonu.
                </p>
                <div className="profile-stats">
                  <div><strong>14+</strong><span>Yıl</span></div>
                  <div><strong>3.7K+</strong><span>Öğrenci</span></div>
                  <div><strong>12+</strong><span>Uzmanlık</span></div>
                </div>
                <div className="profile-links">
                  <a href="https://github.com/mustafayilmazart" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://linkedin.com/in/kpmustafayilmaz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="mailto:bilgi@mustafayilmaz.art">E-posta</a>
                </div>
              </div>

              <div className="profile-card profile-cta-card">
                <h5>📬 Bültene abone ol</h5>
                <p>Psikoloji (klinik), AI ve maneviyat üzerine yeni yazılarımı kaçırma.</p>
                <a href="https://kesiforg.substack.com" target="_blank" rel="noopener noreferrer" className="btn-primary btn-block">Substack&apos;te Abone Ol</a>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* İlgili yazılar */}
      {others.length > 0 && (
        <section className="related-posts">
          <div className="related-inner">
            <h3 className="blog-section-title">İlgili Yazılar</h3>
            <div className="blog-grid">
              {others.map((p) => (
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
      )}

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-logo">M<span>.</span>Yılmaz</div>
          <div className="footer-domain">mustafayilmaz.art</div>
          <p className="footer-tagline">Keşif · İyilik · Dönüşüm</p>
          <div className="footer-links">
            <Link href="/">Anasayfa</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#iletisim">İletişim</Link>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Mustafa Yılmaz</p>
        </div>
      </footer>
    </>
  );
}
