<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { faqs } from '$lib/data/faq';

  // FAQPage Schema.org
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap((g) =>
      g.items.map((i) => ({
        '@type': 'Question',
        name: i.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: i.a
        }
      }))
    )
  };
</script>

<svelte:head>
  <title>Sıkça Sorulan Sorular · Mustafa Yılmaz</title>
  <meta name="description" content="Klinik danışmanlık, yapay zeka eğitimi, manevi rehberlik ve süreç sorularına net cevaplar. KVKK, fiyat, format ve destek konuları." />
  <meta property="og:title" content="Sıkça Sorulan Sorular" />
  <meta property="og:description" content="Klinik, AI, manevi ve süreç sorularına cevaplar." />
  <meta property="og:url" content="https://mustafayilmaz.art/sss/" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="tr_TR" />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>

<Nav activePath="/sss" />

<section class="faq-hero">
  <div class="faq-hero-inner">
    <div class="section-label">Sıkça Sorulanlar</div>
    <h1>Cevabı <em>şimdi</em>den bilelim.</h1>
    <p>Klinik danışmanlıktan yapay zeka eğitimine, manevi rehberlikten süreç ayrıntılarına — sorulması olası tüm sorular ve net cevaplar.</p>
  </div>
</section>

<section class="faq-body">
  <div class="faq-inner">
    {#each faqs as group (group.category)}
      <div class="faq-group">
        <h2 class="faq-cat-title">{group.category}</h2>
        <div class="faq-list">
          {#each group.items as item, i (i)}
            <details class="faq-item">
              <summary>
                <span class="faq-q">{item.q}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <p class="faq-a">{item.a}</p>
            </details>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="faq-cta">
  <div class="faq-cta-inner">
    <h2>Sorun cevap bulamadıysa?</h2>
    <p>Yukarıda olmayan, kişiye özel bir sorun varsa doğrudan yazabilirsin. Genellikle 24-48 saat içinde dönüyorum.</p>
    <a href="mailto:bilgi@mustafayilmaz.art?subject=Soru" class="btn-primary btn-lg">Soru Gönder</a>
  </div>
</section>

<Footer />

<style>
  .faq-hero { padding: 140px 40px 50px; background: var(--warm-white); text-align: center; }
  .faq-hero-inner { max-width: 760px; margin: 0 auto; }
  .faq-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 5vw, 3.6rem); font-weight: 800; color: var(--charcoal); line-height: 1.15; letter-spacing: -1px; margin: 18px 0 16px; }
  .faq-hero h1 em { color: var(--teal); font-style: italic; }
  .faq-hero p { font-size: 1.1rem; color: var(--text-muted); line-height: 1.7; max-width: 600px; margin: 0 auto; }

  .faq-body { padding: 60px 40px 90px; background: var(--warm-gray); }
  .faq-inner { max-width: 820px; margin: 0 auto; }
  .faq-group { margin-bottom: 50px; }
  .faq-cat-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--charcoal); margin: 0 0 18px; padding-bottom: 12px; border-bottom: 2px solid var(--teal); display: inline-block; }
  .faq-list { display: flex; flex-direction: column; gap: 12px; }
  .faq-item { background: #fff; border: 1px solid var(--border); border-radius: 12px; overflow: hidden; transition: all .3s; }
  .faq-item[open] { border-color: var(--teal); box-shadow: 0 8px 24px rgba(33,146,149,.06); }
  .faq-item summary { list-style: none; cursor: pointer; padding: 18px 22px; display: flex; align-items: center; justify-content: space-between; gap: 16px; user-select: none; }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-q { font-weight: 600; font-size: .95rem; color: var(--charcoal); flex: 1; line-height: 1.4; }
  .faq-item summary svg { color: var(--teal); transition: transform .3s; flex-shrink: 0; }
  .faq-item[open] summary svg { transform: rotate(180deg); }
  .faq-a { padding: 0 22px 22px; margin: 0; font-size: .9rem; color: var(--text-muted); line-height: 1.75; }

  .faq-cta { background: linear-gradient(135deg, var(--charcoal), #1f3333); color: #fff; padding: 80px 40px; text-align: center; }
  .faq-cta-inner { max-width: 640px; margin: 0 auto; }
  .faq-cta h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 3vw, 2.2rem); margin: 0 0 14px; }
  .faq-cta p { color: rgba(255,255,255,.78); line-height: 1.7; margin: 0 0 26px; }

  @media (max-width: 768px) {
    .faq-hero { padding: 110px 24px 40px; }
    .faq-body { padding: 40px 24px 70px; }
    .faq-cta { padding: 60px 24px; }
  }
</style>
