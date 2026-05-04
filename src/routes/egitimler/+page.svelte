<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { programs, categoryLabels, type Program } from '$lib/data/programs';

  const categories = Object.keys(categoryLabels) as Program['category'][];
  const featured = programs.find((p) => p.featured);
</script>

<svelte:head>
  <title>Eğitim & Danışmanlık Programları · Mustafa Yılmaz</title>
  <meta name="description" content="Klinikten kurumsala, bireysel rehberlikten yapay zeka atölyesine — 8 yapılandırılmış program. Klinik tecrübe ve KEŞİF Akademi deneyiminden damıtılmış." />
  <meta property="og:title" content="Eğitim & Danışmanlık Programları" />
  <meta property="og:description" content="Klinikten kurumsala, manevi rehberlikten AI atölyesine — yapılandırılmış programlar." />
  <meta property="og:url" content="https://mustafayilmaz.art/egitimler/" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="tr_TR" />
  <meta property="og:image" content="https://mustafayilmaz.art/og-image.jpg" />
</svelte:head>

<Nav activePath="/egitimler" />

<section class="prog-hero">
  <div class="prog-hero-bg">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
  </div>
  <div class="prog-hero-content">
    <div class="hero-badge">
      <span class="pulse"></span>Saha → Sınıf → Sonuç
    </div>
    <h1>
      Yöntem teorik değil,<br />
      <em>vakadan</em> damıtılmış.
    </h1>
    <p class="prog-hero-desc">
      <strong>14+ yıl psikiyatri</strong>, <strong>bağımlılık tedavi merkezinde klinik tecrübe</strong> ve
      <strong>80+ AI projesi</strong> deneyiminden çıkarılmış 8 yapılandırılmış program.
      Klinikten kurumsala, manevi rehberlikten yapay zeka atölyesine.
    </p>
    <div class="prog-hero-stats">
      <div><strong>8</strong><span>program</span></div>
      <div><strong>4</strong><span>kategori</span></div>
      <div><strong>3.7K+</strong><span>katılımcı</span></div>
      <div><strong>14+</strong><span>yıl saha</span></div>
    </div>
  </div>
</section>

<section class="prog-section">
  <div class="prog-inner">
    <div class="section-label">Kategoriler</div>
    <h2 class="section-title">Hangi <em>Çatı</em> Senin İçin?</h2>
    <p class="section-subtitle">Her program farklı bir kullanıcı profiline kuruldu. Aşağıdaki sekmelerden ilgilendiğin kategoriye odaklanabilirsin.</p>

    {#each categories as cat (cat)}
      {@const items = programs.filter((p) => p.category === cat)}
      {#if items.length}
        <div class="prog-cat-block">
          <div class="prog-cat-head">
            <h3>{categoryLabels[cat]}</h3>
            <span class="prog-cat-count">{items.length} program</span>
          </div>
          <div class="prog-grid">
            {#each items as p (p.slug)}
              <article class="prog-card" class:featured={p.featured}>
                {#if p.featured}<div class="prog-badge">En Çok Tercih</div>{/if}
                <div class="prog-tag" style:color={p.accent} style:background={p.accent + '14'}>{categoryLabels[p.category]}</div>
                <h4>{p.title}</h4>
                <div class="prog-meta">
                  <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>{p.duration}</span>
                  <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>{p.audience}</span>
                  <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/></svg>{p.format}</span>
                </div>
                <p class="prog-desc">{p.desc}</p>
                <ul class="prog-outcomes">
                  {#each p.outcomes as o (o)}
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.accent} stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>
                      {o}
                    </li>
                  {/each}
                </ul>
                <a
                  href="mailto:bilgi@mustafayilmaz.art?subject={encodeURIComponent(p.ctaSubject)}"
                  class="prog-cta"
                  style:background={p.accent}
                >
                  {p.cta} →
                </a>
              </article>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<section class="prog-cta-section">
  <div class="prog-cta-inner">
    <h2>Tam <em>uyan</em> bulamadın mı?</h2>
    <p>
      Yukarıdaki programlar şablon değil; her kurum/birey için sektöre, ihtiyaca ve takvime uyarlanır.
      Yeni bir program kurgulamak ya da mevcut bir paketi özelleştirmek için yazabilirsin.
    </p>
    <a href="mailto:bilgi@mustafayilmaz.art?subject=Özel%20Program%20Talebi" class="btn-primary btn-lg">
      Özel Program Tasarlayalım
    </a>
  </div>
</section>

<Footer />

<style>
  .prog-hero {
    position: relative;
    padding: 140px 40px 80px;
    background: linear-gradient(135deg, var(--charcoal) 0%, #1f3333 100%);
    color: #fff;
    overflow: hidden;
  }
  .prog-hero-bg { position: absolute; inset: 0; z-index: 0; }
  .prog-hero-bg .blob { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.18; }
  .prog-hero-bg .blob-1 { width: 520px; height: 520px; background: var(--teal); top: -160px; right: -120px; }
  .prog-hero-bg .blob-2 { width: 420px; height: 420px; background: var(--yellow); bottom: -120px; left: -60px; }
  .prog-hero-content { max-width: 920px; margin: 0 auto; position: relative; z-index: 1; text-align: center; }
  .prog-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin: 24px 0; }
  .prog-hero h1 em { color: var(--yellow); font-style: italic; }
  .prog-hero-desc { font-size: 1.1rem; color: rgba(255,255,255,.78); line-height: 1.75; max-width: 720px; margin: 0 auto 36px; }
  .prog-hero-desc strong { color: var(--teal-light); }
  .prog-hero-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; max-width: 540px; margin: 0 auto; padding-top: 28px; border-top: 1px solid rgba(255,255,255,.12); }
  .prog-hero-stats > div { text-align: center; }
  .prog-hero-stats strong { display: block; font-family: 'Playfair Display', serif; font-size: 1.6rem; color: var(--yellow); }
  .prog-hero-stats span { font-size: .7rem; color: rgba(255,255,255,.55); margin-top: 4px; display: block; }

  .prog-section { padding: 90px 40px; max-width: 100%; }
  .prog-inner { max-width: 1200px; margin: 0 auto; }
  .prog-cat-block { margin-top: 50px; }
  .prog-cat-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid var(--border); }
  .prog-cat-head h3 { font-family: 'Playfair Display', serif; font-size: 1.35rem; color: var(--charcoal); margin: 0; }
  .prog-cat-count { font-family: 'JetBrains Mono', monospace; font-size: .78rem; color: var(--text-muted); }

  .prog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 22px; }
  .prog-card { position: relative; background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 26px 24px; display: flex; flex-direction: column; gap: 12px; transition: all .3s; }
  .prog-card:hover { transform: translateY(-3px); box-shadow: 0 18px 40px rgba(33,146,149,.1); }
  .prog-card.featured { border-color: var(--teal); box-shadow: 0 14px 36px rgba(33,146,149,.18); }
  .prog-badge { position: absolute; top: -10px; right: 20px; background: var(--teal); color: #fff; padding: 4px 12px; border-radius: 50px; font-family: 'JetBrains Mono', monospace; font-size: .66rem; letter-spacing: .5px; font-weight: 600; }
  .prog-tag { display: inline-block; padding: 3px 10px; border-radius: 50px; font-family: 'JetBrains Mono', monospace; font-size: .7rem; font-weight: 600; letter-spacing: .5px; align-self: flex-start; }
  .prog-card h4 { font-family: 'Playfair Display', serif; font-size: 1.18rem; color: var(--charcoal); margin: 0; line-height: 1.3; }
  .prog-meta { display: flex; flex-direction: column; gap: 5px; font-family: 'JetBrains Mono', monospace; font-size: .74rem; color: var(--text-muted); }
  .prog-meta span { display: flex; align-items: center; gap: 6px; }
  .prog-desc { font-size: .88rem; color: var(--text); line-height: 1.65; margin: 0; }
  .prog-outcomes { list-style: none; padding: 0; margin: 8px 0 0; display: flex; flex-direction: column; gap: 6px; }
  .prog-outcomes li { display: flex; align-items: center; gap: 8px; font-size: .82rem; color: var(--charcoal); }
  .prog-cta { display: block; text-align: center; padding: 12px 18px; border-radius: 50px; text-decoration: none; color: #fff; font-weight: 600; font-size: .88rem; margin-top: 8px; transition: filter .25s; }
  .prog-cta:hover { filter: brightness(1.1); }

  .prog-cta-section { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); color: #fff; padding: 90px 40px; text-align: center; }
  .prog-cta-inner { max-width: 720px; margin: 0 auto; }
  .prog-cta-section h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3.5vw, 2.4rem); margin: 0 0 16px; }
  .prog-cta-section h2 em { color: var(--yellow); font-style: italic; }
  .prog-cta-section p { font-size: 1.05rem; line-height: 1.7; max-width: 580px; margin: 0 auto 30px; opacity: .9; }
  .prog-cta-section .btn-primary { background: var(--yellow); color: var(--charcoal); border: 1px solid var(--yellow); }
  .prog-cta-section .btn-primary:hover { background: #fff; border-color: #fff; }

  @media (max-width: 768px) {
    .prog-hero { padding: 110px 24px 60px; }
    .prog-hero-stats { grid-template-columns: repeat(2, 1fr); }
    .prog-section, .prog-cta-section { padding: 60px 24px; }
    .prog-grid { grid-template-columns: 1fr; }
  }
</style>
