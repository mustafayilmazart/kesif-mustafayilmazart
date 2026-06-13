<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { tracks, artworks } from '$lib/data/art';

  const categories = Array.from(new Set(artworks.map((a) => a.category)));

  // Tıklayınca açılan video parçanın slug'ı — performans/gizlilik için iframe yalnız tıklamada yüklenir
  let activeVideo = $state<string | null>(null);

  // Müzik parçaları için MusicRecording şeması (videolu parçalarda VideoObject + embedUrl)
  const musicSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AI Müzik Portfolyosu — Mustafa Yılmaz',
    url: 'https://mustafayilmaz.art/art',
    itemListElement: tracks.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'MusicRecording',
        name: t.title,
        genre: t.genre,
        duration: t.duration,
        byArtist: { '@type': 'Person', name: 'Mustafa Yılmaz', url: 'https://mustafayilmaz.art' },
        url: `https://mustafayilmaz.art/art#${t.slug}`,
        ...(t.video
          ? {
              video: {
                '@type': 'VideoObject',
                name: `${t.title} — Resmi Klip`,
                description: t.description,
                thumbnailUrl: `https://mustafayilmaz.art${t.cover}`,
                contentUrl: `https://www.youtube.com/watch?v=${t.video}`,
                embedUrl: `https://www.youtube.com/embed/${t.video}`,
                uploadDate: t.date
              }
            }
          : {})
      }
    }))
  };
</script>

<svelte:head>
  <title>Art · Müzik & Görsel — Mustafa Yılmaz</title>
  <meta name="description" content="AI ile üretilmiş müzikler ve görsellerden oluşan kişisel sanat portfolyom. Suno ile bestelenmiş parçalar dinlenebilir, görseller galeride görüntülenebilir." />
  <link rel="canonical" href="https://mustafayilmaz.art/art" />
  <meta property="og:title" content="Art · Mustafa Yılmaz" />
  <meta property="og:description" content="Müzik ve görsel — AI destekli sanat portfolyom." />
  <meta property="og:url" content="https://mustafayilmaz.art/art" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="tr_TR" />
  <meta property="og:image" content="https://mustafayilmaz.art/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Art · Mustafa Yılmaz" />
  <meta name="twitter:description" content="Müzik ve görsel — AI destekli sanat portfolyom." />
  <meta name="twitter:image" content="https://mustafayilmaz.art/og-image.jpg" />
  {#if tracks.length > 0}
    {@html `<script type="application/ld+json">${JSON.stringify(musicSchema)}</script>`}
  {/if}
</svelte:head>

<Nav activePath="/art" />

<main id="ana-icerik">

<section class="art-hero">
  <div class="art-hero-bg">
    <div class="art-blob art-blob-1"></div>
    <div class="art-blob art-blob-2"></div>
  </div>
  <div class="art-hero-content">
    <div class="hero-badge">
      <span class="pulse"></span>Müzik & Görsel
    </div>
    <h1>
      Bilim ve <em>sanat</em><br />
      aynı nefesten doğar.
    </h1>
    <p class="art-hero-desc">
      <strong>Suno</strong> ile bestelenmiş müzikler, AI destekli görseller — düşüncelerimi kelime dışında da
      ifade etmenin yolu. Klinik, mühendislik ve manevi düzlemde dolaşırken; ses ve görüntü, dilin yetersiz
      kaldığı yerde devreye giriyor.
    </p>
    <div class="art-hero-stats">
      <div><strong>{tracks.length}</strong><span>müzik</span></div>
      <div><strong>{artworks.length}</strong><span>görsel</span></div>
      <div><strong>{categories.length || '—'}</strong><span>kategori</span></div>
    </div>
    <div class="art-hero-buttons">
      <a href="#muzikler" class="btn-primary">Müzikleri Dinle</a>
      <a href="#galeri" class="btn-secondary">Galeriyi Gör</a>
    </div>
  </div>
</section>

<section class="art-section" id="muzikler">
  <div class="art-inner">
    <div class="section-label">Müzik</div>
    <h2 class="section-title">
      <em>Suno</em> ile Bestelenen Parçalar
    </h2>
    <p class="section-subtitle">
      Türkçe sözlü, manevi ve elektronik dokular. Her parça bir duygu, bir an, bir tefekkür kapısı.
    </p>

    {#if tracks.length === 0}
      <div class="art-empty">
        <p>Yakında ilk müzikler buraya yüklenecek.</p>
      </div>
    {:else}
      <div class="art-tracks">
        {#each tracks as t (t.slug)}
          <article class="art-track-card">
            <div
              class="art-track-cover"
              class:has-video={t.video}
              style:background={t.cover.startsWith('linear-') ? t.cover : undefined}
            >
              {#if t.video && activeVideo === t.slug}
                <iframe
                  class="art-video-frame"
                  src={`https://www.youtube-nocookie.com/embed/${t.video}?autoplay=1&rel=0`}
                  title={`${t.title} — Resmi Klip`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              {:else if t.video}
                <button
                  type="button"
                  class="art-video-play"
                  onclick={() => (activeVideo = t.slug)}
                  aria-label={`Videoyu oynat — ${t.title} (resmi klip)`}
                >
                  <img src={t.cover} alt={`${t.title} klip kapağı`} />
                  <span class="art-video-playicon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </button>
              {:else if !t.cover.startsWith('linear-')}
                <img src={t.cover} alt={t.title} />
              {/if}
              {#if !(t.video && activeVideo === t.slug)}
                <div class="art-track-genre">{t.genre}</div>
              {/if}
            </div>
            <div class="art-track-body">
              <div class="art-track-meta">
                <span>{t.mood}</span>
                <span>·</span>
                <span>{t.duration}</span>
              </div>
              <h3>{t.title}</h3>
              <p>{t.description}</p>
              {#if t.video}
                <p class="art-listen-label">Klibi yukarıda izle · ya da sadece dinle:</p>
              {/if}
              <audio controls preload="none" src={t.src} class="art-audio" aria-label="Ses oynatıcı — {t.title}">
                Tarayıcınız ses oynatıcıyı desteklemiyor.
              </audio>
              <div class="art-tags">
                {#each t.tags as tag (tag)}<span>#{tag}</span>{/each}
              </div>
              {#if t.lyrics}
                <details class="art-lyrics">
                  <summary>Sözler</summary>
                  <pre>{t.lyrics}</pre>
                </details>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>

<section class="art-gallery-section" id="galeri">
  <div class="art-inner">
    <div class="section-label">Görsel</div>
    <h2 class="section-title">
      AI ile <em>Üretilmiş</em> Görseller
    </h2>
    <p class="section-subtitle">
      Manevi kavramlar, klinik kavrayışlar ve içsel yolculuklar — her biri bir düşüncenin görsel karşılığı.
    </p>

    {#if artworks.length === 0}
      <div class="art-empty">
        <p>Yakında galeri açılacak.</p>
      </div>
    {:else}
      <div class="art-gallery">
        {#each artworks as a (a.slug)}
          <figure class="art-piece">
            <div class="art-piece-img">
              <img src={a.src} alt={a.title} width={a.width} height={a.height} />
            </div>
            <figcaption>
              <div class="art-piece-cat">{a.category}</div>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
              <div class="art-tags">
                {#each a.tags as tag (tag)}<span>#{tag}</span>{/each}
              </div>
            </figcaption>
          </figure>
        {/each}
      </div>
    {/if}
  </div>
</section>

<section class="art-cta">
  <div class="art-cta-inner">
    <h2>Birlikte <em>üretmek</em> ister misin?</h2>
    <p>
      Marka müziği, jenerik, podcast intro veya görsel kimlik için yapay zekayla kürate edilmiş özel
      çalışmalar üretiyorum. Ham AI çıktısı değil; klinik bir kulağın eliyle düzenlenmiş eserler.
    </p>
    <a href="mailto:bilgi@mustafayilmaz.art?subject=Sanat İşbirliği" class="btn-primary btn-lg">
      İletişime Geç
    </a>
  </div>
</section>

</main>

<Footer />
