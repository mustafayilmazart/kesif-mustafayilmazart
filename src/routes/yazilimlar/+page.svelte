<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { apps } from '$lib/data/apps';

  const categories = Array.from(new Set(apps.map((a) => a.category)));
</script>

<svelte:head>
  <title>Geliştirdiğim Yazılımlar · Mustafa Yılmaz</title>
  <meta name="description" content="Klinik gözlemden doğan, manevi ihtiyaçtan yükselen, bireyin işine yarayan dijital ürünler. kesif.app, iyilikhali.tr, terapist.io ve daha fazlası." />
  <meta name="keywords" content="Mustafa Yılmaz yazılım, kesif.app, iyilikhali.tr, terapist.io, tooleo, aile.kesif, hafiz.kesif, tahkik.kesif, maneviyat.kesif" />
  <meta property="og:title" content="Geliştirdiğim Yazılımlar · Mustafa Yılmaz" />
  <meta property="og:description" content="Production'da çalışan dijital ürünlerim." />
  <meta property="og:url" content="https://mustafayilmaz.art/yazilimlar/" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="tr_TR" />
</svelte:head>

<Nav activePath="/yazilimlar" />

<section class="apps-hero">
  <div class="apps-hero-bg">
    <div class="apps-blob apps-blob-1"></div>
    <div class="apps-blob apps-blob-2"></div>
  </div>
  <div class="apps-hero-content">
    <div class="hero-badge">
      <span class="pulse"></span>Production'da Çalışıyor
    </div>
    <h1>
      Hayata <em>geçirdiğim</em><br />
      dijital ürünler.
    </h1>
    <p class="apps-hero-desc">
      Klinik gözlemden doğan, manevi ihtiyaçtan yükselen, bireyin işine yarayan yazılımlar.
      Hepsi <strong>yayında</strong>, hepsi büyümeye devam ediyor.
    </p>
    <div class="apps-hero-stats">
      <div><strong>{apps.length}</strong><span>uygulama</span></div>
      <div><strong>{categories.length}</strong><span>kategori</span></div>
      <div><strong>7/24</strong><span>erişilebilir</span></div>
    </div>
  </div>
</section>

{#each categories as cat (cat)}
  {@const items = apps.filter((a) => a.category === cat)}
  <section class="apps-page-section">
    <div class="apps-inner">
      <div class="apps-cat-head">
        <div class="section-label">{cat}</div>
        <div class="apps-cat-count">{items.length} uygulama</div>
      </div>
      <div class="apps-grid">
        {#each items as a (a.name)}
          <a href={a.url} target="_blank" rel="noopener noreferrer" class="app-card">
            <div class="app-accent" style:background={a.accent}></div>
            <div class="app-card-head">
              <span class="app-domain">{a.domain}</span>
              <svg class="app-ext" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <span class="app-link">Ziyaret et →</span>
          </a>
        {/each}
      </div>
    </div>
  </section>
{/each}

<section class="apps-cta">
  <div class="apps-cta-inner">
    <h2>Sıradaki <em>fikir</em> seninki olabilir.</h2>
    <p>
      Sağlık, eğitim veya manevi alanda bir uygulama fikrin mi var? Yapay zekayla hızlandırılmış,
      klinik bir bakışla denetlenmiş ürünler birlikte inşa edebiliriz.
    </p>
    <a href="mailto:bilgi@mustafayilmaz.art?subject=Yazılım İşbirliği" class="btn-primary btn-lg">
      İletişime Geç
    </a>
  </div>
</section>

<Footer />
