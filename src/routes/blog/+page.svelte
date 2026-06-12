<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { posts } from '$lib/data/posts';
  import BlogIcon from '$lib/components/BlogIcon.svelte';

  function formatDate(iso: string) {
    const months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
    const d = new Date(iso);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  // Blog listesi yapılandırılmış verisi — yazılar Google'a tek listede bildirilir
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://mustafayilmaz.art/blog',
    name: 'Mustafa Yılmaz — Blog',
    url: 'https://mustafayilmaz.art/blog',
    inLanguage: 'tr-TR',
    author: { '@id': 'https://mustafayilmaz.art/#person' },
    blogPost: sorted.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://mustafayilmaz.art/blog/${p.slug}`,
      datePublished: p.date
    }))
  };
</script>

<svelte:head>
  <title>Blog · Mustafa Yılmaz</title>
  <meta name="description" content="Klinik psikoloji, AI/yazılım, maneviyat ve kişisel gelişim üzerine düşünce yazıları — Mustafa Yılmaz." />
  <link rel="canonical" href="https://mustafayilmaz.art/blog" />
  <meta property="og:title" content="Blog · Mustafa Yılmaz" />
  <meta property="og:description" content="Klinik psikoloji, AI/yazılım, maneviyat ve kişisel gelişim üzerine düşünce yazıları." />
  <meta property="og:url" content="https://mustafayilmaz.art/blog" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="tr_TR" />
  <meta property="og:image" content="https://mustafayilmaz.art/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Blog · Mustafa Yılmaz" />
  <meta name="twitter:description" content="Klinik psikoloji, AI/yazılım, maneviyat ve kişisel gelişim üzerine düşünce yazıları." />
  <meta name="twitter:image" content="https://mustafayilmaz.art/og-image.jpg" />
  {@html `<script type="application/ld+json">${JSON.stringify(blogSchema)}</script>`}
</svelte:head>

<Nav activePath="/blog" />

<main id="ana-icerik">

<section class="blog-hero">
  <div class="blog-hero-inner">
    <div class="section-label">Düşünce Atölyesi</div>
    <h1>Yazılar</h1>
    <p>Klinik psikoloji, AI &amp; yazılım, maneviyat ve kişisel gelişim üzerine inşa edilmiş yazılar — okunması ve hatırlanması için yazıldı.</p>
  </div>
</section>

<section class="blog-featured">
  <a href="/blog/{featured.slug}" class="featured-card">
    <div class="featured-cover blog-cover-bg" data-cover={featured.slug}>
      <span class="featured-cat">{featured.category}</span>
      <div class="cover-icon"><BlogIcon slug={featured.slug} size={120} /></div>
    </div>
    <div class="featured-body">
      <div class="post-meta">
        <span>{formatDate(featured.date)}</span>
        <span class="dot">·</span>
        <span>{featured.readTime} okuma</span>
      </div>
      <h2>{featured.title}</h2>
      <p>{featured.excerpt}</p>
      <span class="read-more">Yazıyı Oku →</span>
    </div>
  </a>
</section>

<section class="blog-list">
  <div class="blog-list-inner">
    <h2 class="blog-section-title">Tüm Yazılar</h2>
    <div class="blog-grid">
      {#each rest as p (p.slug)}
        <a href="/blog/{p.slug}" class="blog-card">
          <div class="blog-card-cover blog-cover-bg" data-cover={p.slug}>
            <span class="blog-cat">{p.category}</span>
            <div class="cover-icon"><BlogIcon slug={p.slug} size={70} /></div>
          </div>
          <div class="blog-card-body">
            <div class="post-meta">
              <span>{formatDate(p.date)}</span>
              <span class="dot">·</span>
              <span>{p.readTime}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

</main>

<Footer />
