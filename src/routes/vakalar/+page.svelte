<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { caseStudies, caseStudyCategories } from '$lib/data/caseStudies';

  const cats = Object.keys(caseStudyCategories) as (keyof typeof caseStudyCategories)[];
  let activeCat = $state<'all' | (typeof cats)[number]>('all');
  const filtered = $derived(activeCat === 'all' ? caseStudies : caseStudies.filter((c) => c.category === activeCat));
</script>

<svelte:head>
  <title>Vaka Çalışmaları · Mustafa Yılmaz</title>
  <meta name="description" content="Klinik AI dönüşümünden eğitim akademisine, KVKK uyumlu sağlık platformlarından bağımlılık BDT pipeline'ına — sahaya inmiş gerçek vakalar." />
  <meta property="og:title" content="Vaka Çalışmaları" />
  <meta property="og:description" content="Sahaya inmiş gerçek dönüşüm vakaları." />
  <meta property="og:url" content="https://mustafayilmaz.art/vakalar/" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="tr_TR" />
</svelte:head>

<Nav activePath="/vakalar" />

<section class="cv-hero">
  <div class="cv-hero-inner">
    <div class="section-label">Vaka Çalışmaları</div>
    <h1>Slogandan değil, <em>sahadan</em>.</h1>
    <p>
      Klinik AI dönüşümünden eğitim akademisine, KVKK uyumlu sağlık platformlarından bağımlılık BDT pipeline'ına —
      gerçek projelerden gerçek sonuçlar. Her vakada metot, kullanılan araçlar ve elde edilen ölçülebilir çıktılar var.
    </p>
    <div class="cv-stats">
      <div><strong>{caseStudies.length}</strong><span>vaka</span></div>
      <div><strong>{caseStudies.filter((c) => c.status === 'live').length}</strong><span>canlı</span></div>
      <div><strong>{cats.length}</strong><span>kategori</span></div>
    </div>
  </div>
</section>

<section class="cv-filters">
  <div class="cv-inner">
    <div class="filter-row">
      <button class="filter-chip" class:active={activeCat === 'all'} onclick={() => activeCat = 'all'} type="button">
        Hepsi <span class="chip-count">{caseStudies.length}</span>
      </button>
      {#each cats as c (c)}
        {@const count = caseStudies.filter((cs) => cs.category === c).length}
        <button class="filter-chip" class:active={activeCat === c} onclick={() => activeCat = c} type="button">
          {caseStudyCategories[c]} <span class="chip-count">{count}</span>
        </button>
      {/each}
    </div>
  </div>
</section>

<section class="cv-list">
  <div class="cv-inner">
    {#each filtered as c (c.slug)}
      <article class="case-card">
        <header class="case-head">
          <div class="case-cat">{caseStudyCategories[c.category]}</div>
          <div class="case-status status-{c.status}">
            {c.status === 'live' ? '● Canlı' : c.status === 'tamamlandi' ? '✓ Tamamlandı' : '↻ Devam Ediyor'}
          </div>
        </header>
        <h2>{c.title}</h2>
        <div class="case-meta">
          <span><strong>Müşteri:</strong> {c.client}</span>
          <span><strong>Yıl:</strong> {c.year}</span>
          <span><strong>Süre:</strong> {c.duration}</span>
        </div>

        <div class="case-section">
          <h3>Sıkıntı / Bağlam</h3>
          <p>{c.challenge}</p>
        </div>

        <div class="case-grid">
          <div class="case-section">
            <h3>Yaklaşım</h3>
            <ul>
              {#each c.approach as a (a)}<li>{a}</li>{/each}
            </ul>
          </div>
          <div class="case-section">
            <h3>Sonuç</h3>
            <ul>
              {#each c.outcome as o (o)}<li>{o}</li>{/each}
            </ul>
          </div>
        </div>

        <div class="case-metrics">
          {#each c.metrics as m (m.label)}
            <div class="metric">
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          {/each}
        </div>

        <div class="case-tools">
          <strong>Kullanılan Araçlar:</strong>
          {#each c.tools as t (t)}<span class="tool-pill">{t}</span>{/each}
        </div>

        {#if c.testimonial}
          <blockquote class="case-quote">
            <p>"{c.testimonial.quote}"</p>
            <cite>— {c.testimonial.attribution}</cite>
          </blockquote>
        {/if}
      </article>
    {/each}
  </div>
</section>

<section class="cv-cta">
  <div class="cv-cta-inner">
    <h2>Sıradaki <em>vaka</em> seninki olabilir.</h2>
    <p>Sağlık, eğitim, dijital ürün veya yapay zeka dönüşümü için iş birliği yapalım — keşif görüşmesi ücretsiz.</p>
    <a href="mailto:bilgi@mustafayilmaz.art?subject=Vaka%20%C4%B0%C5%9F%20Birli%C4%9Fi" class="btn-primary btn-lg">İş Birliği İçin Yaz</a>
  </div>
</section>

<Footer />

<style>
  .cv-hero { padding: 140px 40px 50px; background: linear-gradient(135deg, var(--charcoal), #1f3333); color: #fff; text-align: center; }
  .cv-hero-inner { max-width: 800px; margin: 0 auto; }
  .cv-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 5vw, 3.6rem); font-weight: 800; line-height: 1.15; margin: 18px 0 16px; letter-spacing: -1px; }
  .cv-hero h1 em { color: var(--yellow); font-style: italic; }
  .cv-hero p { font-size: 1.1rem; color: rgba(255,255,255,.78); line-height: 1.7; max-width: 660px; margin: 0 auto 28px; }
  .cv-stats { display: flex; justify-content: center; gap: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.12); }
  .cv-stats > div { text-align: center; }
  .cv-stats strong { display: block; font-family: 'Playfair Display', serif; font-size: 1.6rem; color: var(--yellow); }
  .cv-stats span { font-size: .7rem; color: rgba(255,255,255,.55); }

  .cv-filters { padding: 28px 40px; background: var(--warm-white); border-bottom: 1px solid var(--border); position: sticky; top: 64px; z-index: 30; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); background: rgba(254,253,251,.92); }
  .cv-inner { max-width: 1100px; margin: 0 auto; }
  .filter-row { display: flex; gap: 8px; flex-wrap: wrap; }
  .filter-chip { background: #fff; border: 1px solid var(--border); border-radius: 50px; padding: 8px 16px; font-size: .85rem; cursor: pointer; transition: all .2s; color: var(--charcoal); font-family: inherit; display: inline-flex; align-items: center; gap: 6px; }
  .filter-chip:hover { border-color: var(--teal); }
  .filter-chip.active { background: var(--teal); color: #fff; border-color: var(--teal); }
  .chip-count { background: var(--warm-gray); color: var(--text-muted); padding: 1px 7px; border-radius: 10px; font-family: 'JetBrains Mono', monospace; font-size: .7rem; }
  .filter-chip.active .chip-count { background: rgba(255,255,255,.2); color: #fff; }

  .cv-list { padding: 50px 40px 80px; }
  .case-card { background: #fff; border: 1px solid var(--border); border-radius: 18px; padding: 36px 36px 32px; margin-bottom: 28px; box-shadow: 0 8px 24px rgba(33,146,149,.04); }
  .case-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .case-cat { font-family: 'JetBrains Mono', monospace; font-size: .72rem; color: var(--teal); font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
  .case-status { font-family: 'JetBrains Mono', monospace; font-size: .7rem; padding: 4px 10px; border-radius: 50px; font-weight: 600; }
  .status-live { background: rgba(22,163,74,.12); color: #16a34a; }
  .status-tamamlandi { background: rgba(33,146,149,.12); color: var(--teal); }
  .status-devam-ediyor { background: rgba(217,119,6,.12); color: #d97706; }
  .case-card h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.4rem, 2.5vw, 1.8rem); color: var(--charcoal); margin: 0 0 12px; line-height: 1.25; }
  .case-meta { display: flex; gap: 20px; flex-wrap: wrap; padding-bottom: 18px; border-bottom: 1px dashed var(--border); margin-bottom: 22px; font-size: .82rem; color: var(--text-muted); }
  .case-meta strong { color: var(--charcoal); font-weight: 600; }

  .case-section { margin-bottom: 22px; }
  .case-section h3 { font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--charcoal); margin: 0 0 8px; font-weight: 700; }
  .case-section p { color: var(--text); line-height: 1.7; margin: 0; font-size: .94rem; }
  .case-section ul { margin: 0; padding-left: 18px; color: var(--text); line-height: 1.7; font-size: .92rem; }
  .case-section li { margin-bottom: 6px; }
  .case-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-bottom: 22px; }

  .case-metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; padding: 18px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-bottom: 18px; }
  .metric { text-align: center; }
  .metric strong { display: block; font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--teal); font-weight: 700; }
  .metric span { font-size: .72rem; color: var(--text-light); text-transform: uppercase; letter-spacing: .8px; }

  .case-tools { font-size: .82rem; color: var(--text-muted); margin-bottom: 18px; line-height: 1.8; }
  .case-tools strong { margin-right: 8px; color: var(--charcoal); }
  .tool-pill { display: inline-block; background: var(--warm-gray); color: var(--text); padding: 3px 10px; border-radius: 50px; font-size: .76rem; margin-right: 6px; margin-bottom: 4px; }

  .case-quote { background: linear-gradient(135deg, var(--teal-glow), rgba(225,217,72,.06)); border-left: 4px solid var(--teal); padding: 18px 24px; margin: 0; border-radius: 0 12px 12px 0; }
  .case-quote p { margin: 0 0 6px; font-style: italic; color: var(--charcoal); line-height: 1.6; }
  .case-quote cite { font-size: .82rem; color: var(--text-muted); font-style: normal; }

  .cv-cta { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); color: #fff; padding: 80px 40px; text-align: center; }
  .cv-cta-inner { max-width: 720px; margin: 0 auto; }
  .cv-cta h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 3vw, 2.2rem); margin: 0 0 14px; }
  .cv-cta h2 em { color: var(--yellow); font-style: italic; }
  .cv-cta p { line-height: 1.7; margin: 0 0 28px; opacity: .9; max-width: 560px; margin-left: auto; margin-right: auto; }
  .cv-cta .btn-primary { background: var(--yellow); color: var(--charcoal); border: 1px solid var(--yellow); }

  @media (max-width: 768px) {
    .cv-hero { padding: 110px 24px 40px; }
    .cv-stats { gap: 22px; }
    .cv-filters { padding: 20px 24px; top: 60px; }
    .cv-list { padding: 30px 24px 60px; }
    .case-card { padding: 24px 22px; }
    .case-grid { grid-template-columns: 1fr; gap: 18px; }
    .cv-cta { padding: 60px 24px; }
  }
</style>
