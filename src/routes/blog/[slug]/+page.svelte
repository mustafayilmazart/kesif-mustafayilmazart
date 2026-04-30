<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import BlogIcon from '$lib/components/BlogIcon.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  const { post, toc, contentWithIds, others } = $derived(data);

  function formatDate(iso: string) {
    const months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
    const d = new Date(iso);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  const articleSchema = $derived({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: 'Mustafa Yılmaz', url: 'https://mustafayilmaz.art' },
    publisher: { '@type': 'Person', name: 'Mustafa Yılmaz', url: 'https://mustafayilmaz.art' },
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'tr-TR',
    keywords: post.tags.join(', '),
    articleSection: post.category,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mustafayilmaz.art/blog/${post.slug}/`
    }
  });
</script>

<svelte:head>
  <title>{post.title} · Mustafa Yılmaz</title>
  <meta name="description" content={post.excerpt} />
  <meta name="keywords" content={post.tags.join(', ')} />
  <link rel="canonical" href="https://mustafayilmaz.art/blog/{post.slug}/" />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.excerpt} />
  <meta property="og:url" content="https://mustafayilmaz.art/blog/{post.slug}/" />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content={post.date} />
  <meta property="og:locale" content="tr_TR" />
  <meta property="og:site_name" content="mustafayilmaz.art" />
  <meta name="twitter:card" content="summary_large_image" />
  {@html `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>`}
</svelte:head>

<Nav activePath="/blog" />

<article class="article">
  <header class="article-header blog-cover-bg" data-cover={post.slug}>
    <div class="article-header-inner">
      <a href="/blog" class="back-link">← Tüm Yazılar</a>
      <div class="article-cat">{post.category}</div>
      <div class="article-header-icon"><BlogIcon slug={post.slug} size={140} /></div>
      <h1>{post.title}</h1>
      <div class="article-meta">
        <div class="author">
          <div class="author-avatar">MY</div>
          <div>
            <div class="author-name">Mustafa Yılmaz</div>
            <div class="author-handle">mustafayilmaz.art</div>
          </div>
        </div>
        <div class="article-meta-right">
          <span>{formatDate(post.date)}</span>
          <span class="dot">·</span>
          <span>{post.readTime} okuma</span>
        </div>
      </div>
    </div>
  </header>

  <div class="article-layout">
    {#if toc.length > 0}
      <aside class="article-toc">
        <div class="toc-sticky">
          <h4 class="toc-title">İçindekiler</h4>
          <ol class="toc-list">
            {#each toc as item (item.id)}
              <li><a href="#{item.id}">{item.text}</a></li>
            {/each}
          </ol>
        </div>
      </aside>
    {/if}

    <div class="article-main">
      {#if post.audio}
        <div class="article-audio">
          <div class="audio-head">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 18v-6a9 9 0 0118 0v6"></path>
              <path d="M21 19a2 2 0 01-2 2h-1v-7h3zM3 19a2 2 0 002 2h1v-7H3z"></path>
            </svg>
            <div>
              <div class="audio-label">Bu yazıyı dinle</div>
              <div class="audio-meta">Türkçe seslendirme · {post.audioDuration ?? ''}</div>
            </div>
          </div>
          <audio controls preload="none" src={post.audio}>
            Tarayıcınız ses oynatmayı desteklemiyor.
          </audio>
        </div>
      {/if}

      <div class="article-body">
        {@html contentWithIds}
      </div>

      <div class="article-tags">
        {#each post.tags as t (t)}
          <span class="article-tag">#{t}</span>
        {/each}
      </div>

      {#if post.sources && post.sources.length > 0}
        <details class="article-sources">
          <summary>
            <span class="sources-icon">📚</span>
            <span class="sources-label">Kaynaklar &amp; Atıflar</span>
            <span class="sources-count">{post.sources.length} kaynak</span>
            <svg class="sources-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div class="sources-content">
            <ul>
              {#each post.sources as s, i (i)}
                <li>
                  {#if s.type}<span class="source-type source-type-{s.type}">{s.type}</span>{/if}
                  <span class="source-title">
                    {#if s.url}
                      <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
                    {:else}
                      {s.title}
                    {/if}
                  </span>
                  {#if s.author}<span class="source-author"> — {s.author}</span>{/if}
                  {#if s.note}<span class="source-note"> · {s.note}</span>{/if}
                </li>
              {/each}
            </ul>
            <p class="sources-note">
              Bu yazı, kaynaklarda anılan eserlerden <strong>kavram düzeyinde ilham</strong> almıştır; metin sıfırdan, Türkçe ve genel okur için yazılmıştır. Birebir alıntı veya kişisel danışan/seans verisi içermez. Verilen örnekler, alanyazında yaygın olarak gözlemlenen tipik durumların anonim ve genel anlatımıdır.
            </p>
          </div>
        </details>
      {/if}

      <div class="article-cta">
        <h3>Bu yazı sana iyi geldiyse...</h3>
        <p>Düzenli yazıları kaçırmamak için bültenime abone ol.</p>
        <div class="article-cta-buttons">
          <a href="https://kesiforg.substack.com" target="_blank" rel="noopener noreferrer" class="btn-primary">Substack'te Abone Ol</a>
          <a href="mailto:bilgi@mustafayilmaz.art" class="btn-secondary">İletişime Geç</a>
        </div>
      </div>
    </div>

    <aside class="article-profile">
      <div class="profile-sticky">
        <div class="profile-card">
          <div class="profile-avatar-wrap">
            <div class="profile-avatar profile-avatar-img">
              <img src="/profile.jpg" alt="Mustafa Yılmaz" width="96" height="96" />
            </div>
          </div>
          <h4>Mustafa Yılmaz</h4>
          <p class="profile-role">Danışman · AI Engineer · Eğitmen · AI Artist</p>
          <p class="profile-bio">
            Hemşirelikten psikolojiye (klinik), yazılımdan AI'a uzanan bir yolculuk. BAHAR Merkezi'nde bağımlılık danışmanlığı, 80'den fazla projede AI orkestrasyonu.
          </p>
          <div class="profile-stats">
            <div><strong>14+</strong><span>Yıl</span></div>
            <div><strong>3.7K+</strong><span>Öğrenci</span></div>
            <div><strong>12+</strong><span>Uzmanlık</span></div>
          </div>
          <div class="profile-links">
            <a href="https://github.com/mustafayilmazart" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/kpmustafayilmaz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:bilgi@mustafayilmaz.art">E-posta</a>
          </div>
        </div>

        <div class="profile-card profile-cta-card">
          <h5>📬 Bültene abone ol</h5>
          <p>Psikoloji (klinik), AI ve maneviyat üzerine yeni yazılarımı kaçırma.</p>
          <a href="https://kesiforg.substack.com" target="_blank" rel="noopener noreferrer" class="btn-primary btn-block">Substack'te Abone Ol</a>
        </div>
      </div>
    </aside>
  </div>
</article>

{#if others.length > 0}
  <section class="related-posts">
    <div class="related-inner">
      <h3 class="blog-section-title">İlgili Yazılar</h3>
      <div class="blog-grid">
        {#each others as p (p.slug)}
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
{/if}

<Footer />
