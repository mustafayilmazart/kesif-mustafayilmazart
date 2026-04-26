/* Blog tekil yazı sayfası */
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/data/posts";

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
  return {
    title: `${post.title} · Mustafa Yılmaz`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Mustafa Yılmaz"],
    },
  };
}

function formatDate(iso: string) {
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
  ];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  /* Diğer yazılar - aynı kategori veya en yenisi */
  const others = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 2);

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
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/#iletisim" className="nav-cta">İletişime Geç</Link></li>
        </ul>
      </nav>

      {/* Article hero */}
      <article className="article">
        <header className="article-header blog-cover-bg" data-cover={post.slug}>
          <div className="article-header-inner">
            <Link href="/blog" className="back-link">← Tüm Yazılar</Link>
            <div className="article-cat">{post.category}</div>
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

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

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
