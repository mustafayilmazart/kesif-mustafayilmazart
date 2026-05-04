<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { skills, skillCategories, audienceLabels, type SkillCategory, type Audience } from '$lib/data/skills';

  let query = $state('');
  let activeCategory = $state<SkillCategory | 'all'>('all');
  let activeAudience = $state<Audience | 'all'>('all');

  const cats = Object.keys(skillCategories) as SkillCategory[];
  const auds = Object.keys(audienceLabels) as Audience[];

  const filtered = $derived.by(() => {
    const q = query.trim().toLowerCase();
    return skills.filter((s) => {
      if (activeCategory !== 'all' && s.category !== activeCategory) return false;
      if (activeAudience !== 'all' && !s.audiences.includes(activeAudience)) return false;
      if (q) {
        const hay = (s.name + ' ' + s.description + ' ' + s.tags.join(' ')).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  });

  const total = skills.length;
  const highlightCount = skills.filter((s) => s.highlight).length;
</script>

<svelte:head>
  <title>{total}+ Claude Skills Koleksiyonu · Mustafa Yılmaz</title>
  <meta name="description" content="Klinik, eğitim, içerik üretimi, manevi rehberlik ve yapay zeka alanlarında 50+ kürate edilmiş Claude Code skill koleksiyonu. Hepsi gerçek projelerde sınanmış." />
  <meta property="og:title" content="{total}+ Claude Skills Koleksiyonu" />
  <meta property="og:description" content="Sahada sınanmış 50+ Claude Skill — klinik, eğitim, içerik, AI." />
  <meta property="og:url" content="https://mustafayilmaz.art/skills/" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="tr_TR" />
  <meta property="og:image" content="https://mustafayilmaz.art/og-image.jpg" />
</svelte:head>

<Nav activePath="/skills" />

<section class="skills-hero">
  <div class="skills-hero-bg">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
  </div>
  <div class="skills-hero-content">
    <div class="hero-badge">
      <span class="pulse"></span>Sahada Sınanmış · {highlightCount} öne çıkan
    </div>
    <h1>
      <span class="highlight">{total}+</span> Claude Skill<br />
      <em>Koleksiyonu</em>
    </h1>
    <p class="skills-hero-desc">
      Klinik gözlem, eğitim üretimi, içerik pipeline'ları ve yapay zeka orkestrasyonundan damıtılmış
      <strong>{total}+ Claude Code skill</strong>. Hepsi klinik saha / KEŞİF Akademi / mustafayilmaz.art üretim
      hattında çalışıyor.
    </p>
    <div class="skills-hero-stats">
      <div><strong>{total}+</strong><span>skill</span></div>
      <div><strong>{cats.length}</strong><span>kategori</span></div>
      <div><strong>{auds.length}</strong><span>hedef kitle</span></div>
    </div>
    <div class="skills-hero-cta">
      <a href="https://github.com/mustafayilmazart/kesif-claude-skills" target="_blank" rel="noopener noreferrer" class="btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        Koleksiyonu GitHub'da Aç
      </a>
      <a href="#kategoriler" class="btn-secondary">Kategorilere Bak</a>
    </div>
  </div>
</section>

<section class="skills-controls" id="kategoriler">
  <div class="skills-inner">
    <div class="search-row">
      <div class="search-box">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input
          type="search"
          placeholder="Skill ara — örn: BDT, Reels, KVKK..."
          bind:value={query}
        />
        {#if query}
          <button onclick={() => query = ''} class="clear-btn" type="button" aria-label="Temizle">×</button>
        {/if}
      </div>
      <div class="result-count">
        <strong>{filtered.length}</strong> sonuç
      </div>
    </div>

    <div class="filter-group">
      <div class="filter-label">Kategori</div>
      <div class="filter-row">
        <button
          class="filter-chip"
          class:active={activeCategory === 'all'}
          onclick={() => activeCategory = 'all'}
          type="button"
        >Hepsi</button>
        {#each cats as c (c)}
          {@const cat = skillCategories[c]}
          {@const count = skills.filter((s) => s.category === c).length}
          <button
            class="filter-chip"
            class:active={activeCategory === c}
            onclick={() => activeCategory = c}
            type="button"
          >
            <span class="chip-icon">{cat.icon}</span>
            {cat.label}
            <span class="chip-count">{count}</span>
          </button>
        {/each}
      </div>
    </div>

    <div class="filter-group">
      <div class="filter-label">Hedef Kitle</div>
      <div class="filter-row">
        <button
          class="filter-chip alt"
          class:active={activeAudience === 'all'}
          onclick={() => activeAudience = 'all'}
          type="button"
        >Hepsi</button>
        {#each auds as a (a)}
          <button
            class="filter-chip alt"
            class:active={activeAudience === a}
            onclick={() => activeAudience = a}
            type="button"
          >{audienceLabels[a]}</button>
        {/each}
      </div>
    </div>
  </div>
</section>

<section class="skills-grid-section">
  <div class="skills-inner">
    {#if filtered.length === 0}
      <div class="empty-state">
        <p>Bu filtrelerle eşleşen skill bulunamadı.</p>
        <button onclick={() => { query = ''; activeCategory = 'all'; activeAudience = 'all'; }} class="btn-secondary" type="button">
          Filtreleri Sıfırla
        </button>
      </div>
    {:else}
      <div class="skills-grid">
        {#each filtered as s (s.slug)}
          {@const cat = skillCategories[s.category]}
          <a href="/skills/{s.slug}" class="skill-card" class:highlight={s.highlight}>
            <div class="skill-cat-tag" style:color={cat.accent} style:background={cat.accent + '14'}>
              <span>{cat.icon}</span>
              {cat.label}
            </div>
            <div class="skill-status status-{s.status}">{s.status === 'aktif' ? 'Aktif' : s.status === 'beta' ? 'Beta' : 'Planlı'}</div>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <div class="skill-meta">
              <div class="skill-tags">
                {#each s.tags.slice(0, 4) as t (t)}
                  <span class="skill-tag">{t}</span>
                {/each}
              </div>
              <div class="skill-audiences">
                {#each s.audiences as a (a)}
                  <span class="aud-pill" title={audienceLabels[a]}>{audienceLabels[a].split(' ')[0]}</span>
                {/each}
              </div>
            </div>
            <span class="skill-arrow">Detay →</span>
          </a>
        {/each}
      </div>
    {/if}
  </div>
</section>

<section class="skills-cta-section">
  <div class="skills-cta-inner">
    <h2>Kendi <em>skill koleksiyonunu</em> kurmak ister misin?</h2>
    <p>
      Senin iş akışına özel Claude skill'leri tasarlıyor, var olanları sahaya uyarlıyorum.
      Eğitim, klinik veya kurumsal kullanım için — bireysel veya kurum içi paket halinde.
    </p>
    <div class="skills-cta-buttons">
      <a href="mailto:bilgi@mustafayilmaz.art?subject=Skill%20Koleksiyon%20Talebi" class="btn-primary btn-lg">
        Özel Skill Koleksiyonu
      </a>
      <a href="/egitimler" class="btn-secondary btn-lg">Eğitim Programları</a>
    </div>
  </div>
</section>

<Footer />

<style>
  /* HERO */
  .skills-hero { position: relative; padding: 140px 40px 70px; background: linear-gradient(135deg, #0d1117 0%, #1f3333 100%); color: #fff; overflow: hidden; }
  .skills-hero-bg { position: absolute; inset: 0; z-index: 0; }
  .skills-hero-bg .blob { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.2; }
  .skills-hero-bg .blob-1 { width: 520px; height: 520px; background: var(--teal); top: -160px; right: -120px; }
  .skills-hero-bg .blob-2 { width: 420px; height: 420px; background: var(--yellow); bottom: -120px; left: -60px; }
  .skills-hero-content { max-width: 920px; margin: 0 auto; position: relative; z-index: 1; text-align: center; }
  .skills-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 800; line-height: 1.15; margin: 22px 0; }
  .skills-hero h1 em { color: var(--yellow); font-style: italic; }
  .skills-hero h1 .highlight { color: var(--teal-light); }
  .skills-hero-desc { font-size: 1.08rem; color: rgba(255,255,255,.78); line-height: 1.75; max-width: 680px; margin: 0 auto 28px; }
  .skills-hero-desc strong { color: var(--teal-light); }
  .skills-hero-stats { display: flex; justify-content: center; gap: 32px; padding: 22px 0; border-top: 1px solid rgba(255,255,255,.12); border-bottom: 1px solid rgba(255,255,255,.12); margin-bottom: 28px; }
  .skills-hero-stats > div { text-align: center; }
  .skills-hero-stats strong { display: block; font-family: 'Playfair Display', serif; font-size: 1.6rem; color: var(--yellow); }
  .skills-hero-stats span { font-size: .7rem; color: rgba(255,255,255,.55); }
  .skills-hero-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .skills-hero-cta .btn-primary { background: var(--yellow); color: var(--charcoal); font-weight: 700; }
  .skills-hero-cta .btn-secondary { border-color: rgba(255,255,255,.3); color: #fff; }

  /* CONTROLS */
  .skills-controls { padding: 40px 40px 20px; background: var(--warm-white); position: sticky; top: 64px; z-index: 30; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); background: rgba(254,253,251,.92); border-bottom: 1px solid var(--border); }
  .skills-inner { max-width: 1280px; margin: 0 auto; }
  .search-row { display: flex; gap: 16px; align-items: center; margin-bottom: 18px; flex-wrap: wrap; }
  .search-box { flex: 1; min-width: 280px; display: flex; align-items: center; gap: 10px; background: #fff; border: 1px solid var(--border); border-radius: 50px; padding: 0 16px; transition: all .2s; }
  .search-box:focus-within { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(33,146,149,.15); }
  .search-box svg { color: var(--text-muted); flex-shrink: 0; }
  .search-box input { flex: 1; border: 0; outline: 0; padding: 14px 0; background: transparent; font-size: .95rem; color: var(--charcoal); font-family: inherit; }
  .clear-btn { background: var(--warm-gray); border: 0; width: 24px; height: 24px; border-radius: 50%; cursor: pointer; color: var(--text-muted); font-size: 1rem; line-height: 1; }
  .result-count { font-family: 'JetBrains Mono', monospace; font-size: .82rem; color: var(--text-muted); white-space: nowrap; }
  .result-count strong { color: var(--teal); font-size: 1rem; }

  .filter-group { margin-top: 14px; }
  .filter-label { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-light); letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 8px; }
  .filter-row { display: flex; flex-wrap: wrap; gap: 8px; }
  .filter-chip { display: inline-flex; align-items: center; gap: 6px; background: #fff; border: 1px solid var(--border); border-radius: 50px; padding: 7px 14px; font-size: .82rem; cursor: pointer; transition: all .2s; color: var(--charcoal); font-family: inherit; }
  .filter-chip:hover { border-color: var(--teal); }
  .filter-chip.active { background: var(--teal); color: #fff; border-color: var(--teal); }
  .filter-chip.alt { font-size: .76rem; padding: 5px 12px; }
  .filter-chip.alt.active { background: var(--charcoal); border-color: var(--charcoal); }
  .chip-icon { font-size: .9em; }
  .chip-count { background: var(--warm-gray); color: var(--text-muted); padding: 1px 7px; border-radius: 10px; font-family: 'JetBrains Mono', monospace; font-size: .7rem; }
  .filter-chip.active .chip-count { background: rgba(255,255,255,.2); color: #fff; }

  /* GRID */
  .skills-grid-section { padding: 40px 40px 80px; }
  .empty-state { text-align: center; padding: 60px 24px; color: var(--text-muted); }
  .empty-state p { margin: 0 0 18px; }
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 18px; }
  .skill-card { position: relative; background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 20px 22px 22px; display: flex; flex-direction: column; gap: 12px; transition: all .25s; text-decoration: none; color: inherit; }
  .skill-arrow { font-family: 'JetBrains Mono', monospace; font-size: .74rem; color: var(--teal); font-weight: 600; align-self: flex-end; }
  .skill-card:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(33,146,149,.08); border-color: rgba(33,146,149,.3); }
  .skill-card.highlight { border-color: var(--teal); box-shadow: 0 8px 24px rgba(33,146,149,.12); }
  .skill-card.highlight::before { content: '⭐'; position: absolute; top: -10px; right: 14px; background: var(--yellow); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: .75rem; }
  .skill-cat-tag { display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 50px; font-family: 'JetBrains Mono', monospace; font-size: .7rem; font-weight: 600; align-self: flex-start; }
  .skill-status { position: absolute; top: 16px; right: 16px; font-family: 'JetBrains Mono', monospace; font-size: .65rem; padding: 2px 8px; border-radius: 50px; letter-spacing: .5px; text-transform: uppercase; font-weight: 600; }
  .status-aktif { background: rgba(22,163,74,.12); color: #16a34a; }
  .status-beta { background: rgba(217,119,6,.12); color: #d97706; }
  .status-planli { background: rgba(107,107,107,.12); color: var(--text-muted); }
  .skill-card h3 { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: var(--charcoal); margin: 0; line-height: 1.3; padding-right: 50px; }
  .skill-card p { font-size: .85rem; color: var(--text-muted); line-height: 1.6; margin: 0; flex: 1; }
  .skill-meta { display: flex; flex-direction: column; gap: 8px; padding-top: 10px; border-top: 1px dashed var(--border); }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 5px; }
  .skill-tag { font-family: 'JetBrains Mono', monospace; font-size: .68rem; padding: 2px 8px; background: var(--warm-gray); color: var(--text-muted); border-radius: 50px; }
  .skill-audiences { display: flex; flex-wrap: wrap; gap: 4px; }
  .aud-pill { font-size: .65rem; padding: 2px 7px; background: rgba(33,146,149,.08); color: var(--teal-dark); border-radius: 50px; font-weight: 600; letter-spacing: .3px; }

  /* CTA */
  .skills-cta-section { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); color: #fff; padding: 80px 40px; text-align: center; }
  .skills-cta-inner { max-width: 720px; margin: 0 auto; }
  .skills-cta-section h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 3vw, 2.2rem); margin: 0 0 14px; }
  .skills-cta-section h2 em { color: var(--yellow); font-style: italic; }
  .skills-cta-section p { line-height: 1.7; max-width: 580px; margin: 0 auto 28px; opacity: .9; }
  .skills-cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .skills-cta-section .btn-primary { background: var(--yellow); color: var(--charcoal); border: 1px solid var(--yellow); }
  .skills-cta-section .btn-secondary { border-color: rgba(255,255,255,.3); color: #fff; }

  @media (max-width: 768px) {
    .skills-hero { padding: 110px 24px 50px; }
    .skills-controls { padding: 30px 24px 18px; top: 60px; }
    .skills-grid-section { padding: 30px 24px 60px; }
    .skills-grid { grid-template-columns: 1fr; }
    .skills-cta-section { padding: 60px 24px; }
  }
</style>
