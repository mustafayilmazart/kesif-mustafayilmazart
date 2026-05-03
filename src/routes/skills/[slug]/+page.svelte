<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { skillCategories, audienceLabels } from '$lib/data/skills';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  const { skill, related } = $derived(data);
  const cat = $derived(skillCategories[skill.category]);

  // Skill başına özelleşebilir; şimdilik genel şablon
  const usageScenario = $derived(buildScenario(skill.slug));
  const examplePrompt = $derived(buildPrompt(skill.slug, skill.name));

  function buildScenario(slug: string): string {
    const scenarios: Record<string, string> = {
      // Klinik
      'bdt-modul-uretici': 'BAHAR\'da yeni gelen bir bağımlı için 5 modüllük psikoeğitim setine ihtiyacın var. PDF\'ten 30 dakikada video çıkarıyorsun: kanıta dayalı script + Türkçe seslendirme + altyazı + bölüm görselleri.',
      'kvkk-uyum-tarayici': 'Kliniğin web formu hazır ama hukuki tarama yapılmadı. Avukat MCP ile aydınlatma metni şablonu çıkar, eksik alanları tespit et, kullanıcıya gönderilebilir hale getir.',
      'samba-aile-yardimcisi': 'Bir bağımlının kardeşi yardım istedi. SAMBA aile modülünden uyarlanmış 6 haftalık programı kişiye özel olarak çıkarır: sağlıklı sınır metni, kriz protokolü, iletişim defteri, kendine bakım çizelgesi.',

      // Eğitim
      'udemy-video-pipeline': 'Yeni bir Udemy kursu üreteceksin. NotebookLM araştırması → Türkçe ders scripti → ElevenLabs seslendirme → bölüm bazlı video montaj. 8 saat manuel iş, 90 dakikaya iniyor.',
      'kurs-mufredat-yapici': '"Stres yönetimi" konusunda 4 haftalık kurs vermek istiyorsun. Skill modüller, dersler, ödevler, quizler ve öğrenme çıktılarını Bloom taksonomisine göre seviyelendirir. Udemy formatına hazır.',
      'sinif-ici-ai-rubrigi': 'Lise öğretmenisin, öğrencilerin AI ile ödev yapmasını yapılandırmak istiyorsun. Skill her ödev tipine göre rubrik üretir: hangi görevde AI olur/olmaz, değerlendirme kriterleri, telif çerçevesi.',
      'quiz-uretici': 'Bağımlılık eğitimi sonunda 30 soruluk değerlendirme istiyorsun. Skill konu metninden çoktan seçmeli, doğru-yanlış ve açık uçlu sorular üretir. Her soru için Bloom seviyesi etiketler.',

      // İçerik
      'video-montaj': 'Çekilen ham videoyu Reels (9:16) ve YouTube (16:9) versiyonlarıyla beraber çıkar. Altyazı yak, intro/outro ekle, ses normalizasyonu yap.',
      'reels-pipeline': 'Bağımlılık temalı 30 saniyelik bir Reels üreteceksin. Hook + 3 mesaj + CTA. Sistem script yazar, sesi üretir, lip-sync\'li görseli oluşturur, montajı yapar, caption + 30 hashtag verir.',
      'elevenlabs-tts': 'Bir Udemy ders bölümü için 12 dakikalık Türkçe seslendirme üretmen lazım. Skill ElevenLabs ile yapar, kalite iyi değilse Edge-TTS\'e otomatik düşer. Çok karakterli diyalog için ses ayrımı sağlar.',
      'islami-video-pipeline': 'Bir hadis-i şerif konulu 60 saniyelik whiteboard video üreteceksin. Skill ehl-i sünnet usulüne göre script yazar, Türkçe seslendirir, Toonly/Doodly çizimleriyle 9:16 montaja dönüştürür.',
      'podcast-plani': 'KEŞİF Akademi adına 12 bölümlük bir podcast sezonu kurguluyorsun. Skill konu haritası, bölüm yapısı, soru listesi, transkript çıkarımı ve gösteri notlarını üretir.',

      // Sosyal
      'instagram-manager': 'Bir reels için 2FA korumalı Instagram hesabından paylaşım yapacaksın. Skill instagrapi ile login, caption+hashtag yükleme, story zincirleme ve performans raporu çıkarır.',
      'instagram-orkestrasyon': '"Önümüzdeki hafta KEŞİF için 5 reels + 3 story + 2 carousel üret ve takvime ekle" dediğinde, skill araştırmadan paylaşıma kadar tüm zinciri yönetir.',
      'caption-hashtag': 'Bir görseli skill\'e veriyorsun. Marka tonuna uygun Türkçe caption + 30 hashtag (popüler / orta / niş karışımı) çıkarır. KEŞİF ya da kişisel ton seçenekli.',
      'sosyal-medya-takvimi': 'Aylık içerik planı hazırlıyorsun. Skill tema, format (reel/post/story), platform ve optimum saat önerisiyle Excel/Notion takvimi çıkarır.',

      // AI & Otomasyon
      'kesif-orkestrator': '"Bu hafta için Instagram + YouTube + Substack içeriklerini üret ve takvime kaydet" gibi karmaşık görev verdiğinde, hangi MCP ve skill\'in ne sırayla çalışacağını koordine eder.',
      'mcp-orkestratori': 'Yeni bir bilgisayara geçtin, 70+ MCP\'yi tek tek tanımlamak yerine kesif-mcp-registry.json\'dan tek komutla Claude Desktop + Code + Cursor için sync ederim. .env secret yönetimi ve dry-run dahil.',
      'capraz-kontrol': 'Bir auth modülü yazdın, deploy öncesi 4 farklı LLM\'e (Claude, Gemini, Codex, Qwen) inceletmek istiyorsun. Skill paralel review yapar, birleşik Markdown raporda kritik+öneri+güvenlik bulgularını sıralar.',
      'mirofish-tahmin': 'Yeni bir BDT modül yayını öncesi danışan reaksiyonunu tahmin etmek istiyorsun. Multi-agent simülasyonla farklı persona tepkilerini, finansal etkiyi ve kamuoyu refleksini çıkarır.',

      // Araştırma
      'notebooklm': 'Yeni bir blog yazısı için 6 makale + 3 podcast + 2 PDF kaynağını analiz edeceksin. Skill NotebookLM\'e kaynakları yükler, soru-cevap akışını kurar, mind-map ve flashcard üretir.',
      'yt-search': '"Türkiye\'de bağımlılık" konulu son 1 ay içindeki YouTube videolarını topluyor. Skill yt-dlp ile arama yapar, metadata\'yı tablo halinde verir, embed listesi çıkarır.',
      'yt-notebooklm-pipeline': 'Bir konuda 10 YouTube videosunu hızlıca anlamak ve özet/blog/script üretmek istiyorsun. Skill scrape → NotebookLM yükleme → analiz → içerik üretimi zincirini tek prompt\'la yapar.',
      'pubmed-arastirma': 'Klinik bir vakanın literatür taraması için PubMed + Semantic Scholar üzerinden 20 makale bulup abstract\'larını analiz ediyorsun. Skill kanıt seviyesi sınıflaması ve kaynakça üretir.',

      // Manevi
      'maneviyat-rag': 'Bir manevi soruya cevap ararken Calibre kütüphanendeki onlarca eserden Ollama RAG ile sahih cevap getirir. Bulut LLM\'e gizli veri sızmaz, kaynak referansı verilir.',
      'tahkik-asistani': 'Sosyal medyada gördüğün bir hadisin sahihliğini doğrulamak istiyorsun. Skill ehl-i sünnet usulüne uygun tahkik yapar: senet, metin, alimler arası farklılıklar.',
      'zikir-takip': 'Günlük 100 istiğfar + sabah evradı + akşam virdi alışkanlığı kuracaksın. Skill kişisel takvim ile bildirim, eksik gün haritası ve haftalık özet sunar.',

      // Marka
      'kesif-marka-tonu': 'Yeni bir Reels script\'i yazdırırken sesin KEŞİF Akademi\'nin "sade Türkçe + empatik + bilim+manevi sentez" tonunda olmasını sağlar. Yargılayan dil, abartılı vurgu otomatik düzeltilir.',
      'biyografi-yazari': 'LinkedIn profilini güncelleyeceksin. Skill 3 farklı uzunluk (kısa/orta/detay) ve ton (resmi/samimi/pazarlama) ile biyografi seçenekleri üretir.',
      'landing-page-metni': 'Yeni bir kurs için landing sayfası kuruyorsun. Skill hero, value proposition, sosyal kanıt, fiyat, SSS ve CTA bloklarını dönüşüm odaklı Türkçe metinle hazırlar.',

      // Tasarım
      'm3-design-system': 'Yeni bir kesif.app modülü için UI tasarlayacaksın. Skill Material 3 tema üretir: dynamic color, type scale, 30+ component varyantı, KEŞİF marka rengi paleti.',
      'thumbnail-uretici': 'Yeni YouTube videosuna thumbnail tasarlatacaksın. Skill başlık + duygu hedefine göre kompozisyon brief\'i çıkarır: yüz ifadesi, renk paleti, font hiyerarşisi.',

      // Yazılım
      'prp-framework': 'Karmaşık bir feature\'a (örn. yeni bir AI agent katmanı) başlamadan önce skill codebase\'i tarar, benzer pattern\'leri çıkarır, blueprint hazırlar ve güven skoru verir.',
      'context-engineering': 'Yeni bir SvelteKit modülü ekleyeceksin. Skill INITIAL.md feature spec, PRP plan ve example pattern\'leri hazırlar — kod yazmadan önce bağlam tam olur.',
      'prompt-muhendisligi': 'Bir LLM uygulamasında yanıt kalitesi düşük. Skill few-shot örnek kütüphanesi, chain-of-thought iskeleti ve role-play kalıplarıyla prompt\'u sistematik olarak iyileştirir.',
      'os-framework-5': 'Solo founder olarak yeni bir AI ürünü kuruyorsun. Skill 5 klasör (Build/Think/Make/Ship/Grow) iskeletini hazırlar; ürün-yaşam-döngüsünün her adımı için araç önerir.',

      // Hukuk
      'avukat-tara': 'Yeni bir SaaS kuruyorsan, deploy öncesi `/avukat-tara <proje>` ile KVKK + GDPR + e-ticaret + güvenlik taraması yap. Aksiyon listesi + öncelikli düzeltme planı çıkar.',
      'aydinlatma-metni-uretici': 'İyilik Hali platformuna terapist üyelik formu eklendi. Skill veri kategorisini analiz eder (özel nitelikli sağlık verisi var mı?), KVKK m.10 uyumlu Türkçe aydınlatma metni hazırlar.',
      'sozlesme-taslagi': 'Bir kurumsal müşteriyle danışmanlık sözleşmesi imzalayacaksın. Skill Türk hukuku uyumlu taslak hazırlar: KVKK, telif, fesih, iade ve gizlilik maddeleri dahil.',

      // Verimlilik
      'token-optimizer': 'Claude\'a 5000 satırlık dosya gönderirken token israfı oluyor. Skill caveman tarzı filler-silme + kalıp sıkıştırması ile %40-60 input tasarrufu, anlam kaybı yok.',
      'hybrid-memory': 'Birkaç oturumdur konuştuğun konu unutulmasın istiyorsun. Skill ChromaDB + Neo4j + SQLite üçlüsünü kullanarak kalıcı bellek kurar, periyodik olarak Obsidian wiki üretir.',
      'auto-code-quality': 'Edit/Write hook\'una bağlı çalışır — kod yazıldıktan hemen sonra otomatik kalite kontrolü yapar: tekrar tespiti, karmaşıklık, isim tutarlılığı, kullanılmayan import.',

      // Altyapı
      'git-guard': 'Tehlikeli git komutları (force push, hard reset, branch -D, --no-verify) çalıştırılmaya çalışıldığında skill engelliyor. Hook tabanlı güvenlik katmanı, commit hijyeni.',
      'notion-master': 'Her başarılı görev sonrası KEŞİF Master Notion sayfasına otomatik kayıt düşer. Skill Notion Bridge ile blok ekler, haftalık ve aylık raporları derler.',
      'fewer-permission-prompts': 'Claude Code sürekli aynı komutlara permission soruyor. Skill geçmiş transcriptleri tarar, tekrarlayan tool çağrılarını allowlist\'e ekler. Permission prompt yorgunluğunu azaltır.',
      'skill-creator': 'Yeni bir skill yazacaksın. Skill yapıyı kurar (frontmatter, when-to-trigger, prompt yapısı), eval senaryoları üretir, varyans testi yapar ve description\'ı tetikleme doğruluğu için optimize eder.'
    };
    return scenarios[slug] ?? `${skill.name} skill'i, ${skill.audiences.map(a => audienceLabels[a]).join(' / ')} için yapılandırılmış bir Claude Code akışı sağlar. ${skill.description}`;
  }

  function buildPrompt(slug: string, name: string): string {
    return `/${slug.replace(/-/g, '_')} <hedef konu veya parametre>\n# veya doğrudan:\n"${name} skill'ini kullan: <senaryo açıklaması>"`;
  }
</script>

<svelte:head>
  <title>{skill.name} · Skills · Mustafa Yılmaz</title>
  <meta name="description" content={skill.description} />
  <meta property="og:title" content={skill.name} />
  <meta property="og:description" content={skill.description} />
  <meta property="og:url" content="https://mustafayilmaz.art/skills/{skill.slug}/" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="tr_TR" />
</svelte:head>

<Nav activePath="/skills" />

<article class="skill-detail">
  <header class="sd-header">
    <div class="sd-header-inner">
      <a href="/skills" class="back-link">← Tüm Skills</a>
      <div class="sd-cat-tag" style:color={cat.accent} style:background={cat.accent + '14'}>
        <span>{cat.icon}</span> {cat.label}
      </div>
      <h1>{skill.name}</h1>
      <p class="sd-lead">{skill.description}</p>

      <div class="sd-meta-row">
        <div class="sd-status status-{skill.status}">{skill.status === 'aktif' ? '✓ Aktif' : skill.status === 'beta' ? 'Beta' : 'Planlı'}</div>
        {#if skill.highlight}<div class="sd-highlight">⭐ Öne Çıkan</div>{/if}
        <div class="sd-audiences">
          {#each skill.audiences as a (a)}
            <span class="aud-pill">{audienceLabels[a]}</span>
          {/each}
        </div>
      </div>
    </div>
  </header>

  <div class="sd-body">
    <section class="sd-section">
      <h2>Ne işe yarar?</h2>
      <p>{usageScenario}</p>
    </section>

    <section class="sd-section">
      <h2>Nasıl çağrılır?</h2>
      <p>Claude Code içinde şu komutla veya doğal dilde tetiklersin:</p>
      <pre class="sd-prompt"><code>{examplePrompt}</code></pre>
    </section>

    <section class="sd-section">
      <h2>Etiketler</h2>
      <div class="sd-tags">
        {#each skill.tags as t (t)}
          <span class="sd-tag">{t}</span>
        {/each}
      </div>
    </section>

    <section class="sd-section">
      <h2>Hedef Kitle</h2>
      <ul class="sd-aud-list">
        {#each skill.audiences as a (a)}
          <li>{audienceLabels[a]}</li>
        {/each}
      </ul>
    </section>

    {#if related.length > 0}
      <section class="sd-section">
        <h2>İlgili Skills</h2>
        <div class="related-grid">
          {#each related as r (r.slug)}
            <a href="/skills/{r.slug}" class="related-card">
              <div class="related-cat" style:color={cat.accent}>{cat.icon} {cat.label}</div>
              <h3>{r.name}</h3>
              <p>{r.description}</p>
              <span class="related-link">İncele →</span>
            </a>
          {/each}
        </div>
      </section>
    {/if}

    <section class="sd-cta">
      <h2>Özel <em>skill</em> kurmak ister misin?</h2>
      <p>Kendi iş akışına özel bir Claude skill koleksiyonu için tasarım, kurulum ve eğitim sunuyorum.</p>
      <div class="sd-cta-buttons">
        <a href="mailto:bilgi@mustafayilmaz.art?subject={encodeURIComponent('Skill — ' + skill.name)}" class="btn-primary btn-lg">
          Bu Skill Hakkında Soru Sor
        </a>
        <a href="https://github.com/mustafayilmazart/kesif-claude-skills" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-lg">
          GitHub Repo
        </a>
      </div>
    </section>
  </div>
</article>

<Footer />

<style>
  .skill-detail { background: var(--warm-white); }
  .sd-header { padding: 140px 40px 50px; background: linear-gradient(135deg, var(--charcoal), #1f3333); color: #fff; }
  .sd-header-inner { max-width: 820px; margin: 0 auto; }
  .back-link { color: rgba(255,255,255,.85); text-decoration: none; font-size: .88rem; display: inline-block; margin-bottom: 18px; }
  .back-link:hover { color: #fff; }
  .sd-cat-tag { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 50px; font-family: 'JetBrains Mono', monospace; font-size: .72rem; font-weight: 600; margin-bottom: 14px; }
  .sd-header h1 { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; line-height: 1.15; margin: 0 0 14px; letter-spacing: -1px; }
  .sd-lead { font-size: 1.1rem; color: rgba(255,255,255,.82); line-height: 1.7; margin: 0 0 28px; max-width: 720px; }

  .sd-meta-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.12); }
  .sd-status { font-family: 'JetBrains Mono', monospace; font-size: .72rem; padding: 4px 12px; border-radius: 50px; font-weight: 600; letter-spacing: .5px; }
  .status-aktif { background: rgba(22,163,74,.2); color: #4ade80; }
  .status-beta { background: rgba(217,119,6,.2); color: #fbbf24; }
  .status-planli { background: rgba(255,255,255,.1); color: rgba(255,255,255,.7); }
  .sd-highlight { font-family: 'JetBrains Mono', monospace; font-size: .72rem; padding: 4px 12px; border-radius: 50px; background: rgba(225,217,72,.2); color: var(--yellow); font-weight: 600; }
  .sd-audiences { display: flex; gap: 6px; flex-wrap: wrap; margin-left: auto; }
  .aud-pill { font-size: .68rem; padding: 3px 10px; background: rgba(33,146,149,.18); color: var(--teal-light); border-radius: 50px; font-weight: 600; }

  .sd-body { max-width: 820px; margin: 0 auto; padding: 50px 40px 80px; }
  .sd-section { margin-bottom: 40px; }
  .sd-section h2 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--charcoal); margin: 0 0 14px; }
  .sd-section p { color: var(--text); line-height: 1.75; font-size: 1rem; margin: 0 0 14px; }
  .sd-prompt { background: var(--charcoal); color: #fff; padding: 18px 22px; border-radius: 12px; overflow-x: auto; font-family: 'JetBrains Mono', monospace; font-size: .88rem; line-height: 1.6; margin: 0; }
  .sd-prompt code { color: var(--teal-light); }
  .sd-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .sd-tag { font-family: 'JetBrains Mono', monospace; font-size: .76rem; padding: 5px 12px; background: var(--warm-gray); color: var(--text-muted); border-radius: 50px; }
  .sd-aud-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }
  .sd-aud-list li { padding: 10px 16px; background: var(--warm-gray); border-radius: 10px; font-size: .92rem; color: var(--charcoal); border-left: 3px solid var(--teal); }

  .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 14px; }
  .related-card { display: flex; flex-direction: column; gap: 8px; padding: 18px 20px; background: #fff; border: 1px solid var(--border); border-radius: 12px; text-decoration: none; color: inherit; transition: all .25s; }
  .related-card:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(33,146,149,.08); border-color: var(--teal); }
  .related-cat { font-family: 'JetBrains Mono', monospace; font-size: .68rem; font-weight: 600; }
  .related-card h3 { font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--charcoal); margin: 0; line-height: 1.3; }
  .related-card p { font-size: .82rem; color: var(--text-muted); line-height: 1.55; margin: 0; flex: 1; }
  .related-link { font-family: 'JetBrains Mono', monospace; font-size: .72rem; color: var(--teal); font-weight: 600; }

  .sd-cta { background: linear-gradient(135deg, var(--teal-glow), rgba(225,217,72,.06)); border: 1px solid var(--border); border-radius: 18px; padding: 36px 32px; margin-top: 40px; text-align: center; }
  .sd-cta h2 { margin: 0 0 12px; }
  .sd-cta h2 em { color: var(--teal); font-style: italic; }
  .sd-cta p { max-width: 540px; margin: 0 auto 22px; color: var(--text-muted); }
  .sd-cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

  @media (max-width: 768px) {
    .sd-header { padding: 110px 24px 40px; }
    .sd-body { padding: 40px 24px 60px; }
    .sd-meta-row { flex-direction: column; align-items: flex-start; }
    .sd-audiences { margin-left: 0; }
    .sd-cta { padding: 28px 22px; }
  }
</style>
