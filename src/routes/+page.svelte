<script lang="ts">
  import { onMount } from 'svelte';
  import { personSchema, websiteSchema, navigationSchema } from '$lib/schema';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { institutions, institutionLabels, type Institution } from '$lib/data/institutions';
  import { programs } from '$lib/data/programs';
  import NewsletterForm from '$lib/components/NewsletterForm.svelte';

  const institutionCats = Object.keys(institutionLabels) as Institution['category'][];
  const programsTeaser = programs.slice(0, 3);

  const CFG = {
    email: 'bilgi@mustafayilmaz.art',
    medium: 'https://medium.com/@kp.mustafayilmaz',
    substack: 'https://kesiforg.substack.com',
    udemy: 'https://www.udemy.com/user/kesfet-kendini/',
    youtube: 'https://youtube.com/@kesiforg',
    linkedin: 'https://linkedin.com/in/kpmustafayilmaz',
    github: 'https://github.com/mustafayilmazart',
    kesif: 'https://kesif.org',
    domain: 'mustafayilmaz.art'
  };

  const expertise = [
    { icon: 'icon-healing', title: 'Psikoloji (Klinik) & Bağımlılık Danışmanlığı', desc: 'Bağımlılık tedavi merkezinde bağımlı hastalara eğitim ve ailelerine danışmanlık. Kanıta dayalı rehabilitasyon yaklaşımları.', tags: ['CBT', 'NLP Trainer', 'Rehabilitasyon', 'SAMBA'] },
    { icon: 'icon-spirit', title: 'Maneviyat Danışmanlığı & Yaşam Koçluğu', desc: 'İçsel keşif yolculuğunda eşlik ediyor, manevi farkındalık ve duygusal zeka ile kişisel dönüşümü destekliyorum.', tags: ['Yaşam Koçluğu', 'Manevi Danışmanlık', 'Pozitif Psikoterapi'] },
    { icon: 'icon-code', title: 'AI Engineer & Vibe Coding', desc: 'AI ajanları, çoklu model orkestrasyonu ve vibe coding ile sağlık/eğitim platformları geliştiriyorum. Prompt engineering ve AI workflow tasarımı uzmanı.', tags: ['AI Agents', 'Vibe Code', 'Prompt Engineering', 'MCP & Tools'] },
    { icon: 'icon-design', title: 'WordPress & Grafik Tasarım', desc: 'Ruh sağlığı profesyonellerinin dijital varlığını inşa ediyorum. WordPress, Avada, Canva ile marka kimliği.', tags: ['WordPress', 'Canva', 'Avada', 'SEO'] },
    { icon: 'icon-media', title: 'Sosyal Medya & Dijital Pazarlama', desc: 'İçerik stratejisi, sosyal medya yönetimi ve dijital pazarlama ile markaların görünürlüğünü inşa ediyorum.', tags: ['İçerik Stratejisi', 'SEO', 'Dijital Pazarlama'] },
    { icon: 'icon-teach', title: 'Eğitim & İçerik Üretimi', desc: 'Keşif Akademi kurucusu, Udemy eğitmeni, video editör. Bilgiyi erişilebilir formatlarda sunuyorum.', tags: ['Udemy', 'Video Editing', 'Keşif Akademi', 'Camtasia'] },
    { icon: 'icon-health', title: 'Hemşirelik & Sağlık Teknolojisi', desc: '14+ yıl psikiyatri hemşireliği. HES yazılım geliştirme, İyilik Hali Platformu ve sağlık sistemleri.', tags: ['Psikiyatri', 'HES Yazılım', 'İyilik Hali Platformu'] },
    { icon: 'icon-data', title: 'Google Sheets & Veri Yönetimi', desc: 'Karmaşık veri sistemleri, otomasyon dashboardları ve KVKK uyumlu sağlık veri çözümleri.', tags: ['Google Sheets', 'Otomasyon', 'Dashboard', 'KVKK'] },
    { icon: 'icon-music', title: 'AI Sanat & Müzik Prodüksiyonu', desc: 'Suno ile rap ve müzik çalışmaları, AI Art, dijital sanat üretimi. İşimi sanatla inşa ediyorum.', tags: ['Suno', 'AI Art', 'Rap', 'Müzik'] }
  ];

  const milestones = [
    { year: '2006 — 2010', title: 'Hemşirelik Lisans', desc: 'Muğla Sıtkı Koçman Üniversitesi, Fethiye SYO' },
    { year: '2011 — 2013', title: 'Klinik Deneyim', desc: 'Çapa, Cerrahpaşa, Kocaeli Tıp — Onkoloji & Kemoterapi' },
    { year: '2013 — 2018', title: 'Eğitim & AR-GE', desc: 'Anadolu Kuzey KHB — HES yazılımı, 80+ eğitim videosu' },
    { year: '2014 — 2019', title: 'Psikoloji (Klinik)', desc: 'Nişantaşı & Doğuş Üniversitesi — Yüksek Lisans' },
    { year: '2018 — Günümüz', title: 'Bağımlılık Rehabilitasyonu', desc: 'Klinik tecrübe — bağımlılık tedavi merkezinde danışmanlık' },
    { year: '2019 — 2021', title: 'Web Tasarım & Kodlama', desc: 'Anadolu Üniversitesi — Ön Lisans' },
    { year: '2021 — Günümüz', title: 'Vibe Code & AI Art & Müzik', desc: 'Apps Script, WordPress, Suno, AI Tools' }
  ];

  const process = [
    { n: '01', t: 'Dinle & Anla', d: 'İhtiyacınızı derinlemesine anlıyorum. Her proje bir sohbetle başlar.' },
    { n: '02', t: 'Keşfet & Planla', d: 'En uygun stratejiyi birlikte belirliyoruz. Yol haritası netleşiyor.' },
    { n: '03', t: 'İnşa Et & Tasarla', d: 'Kod, tasarım veya terapi — aşkla ve özenle inşa süreci başlıyor.' },
    { n: '04', t: 'Büyüt & Dönüştür', d: 'Sürdürülebilir sonuçlar için birlikte ilerliyoruz.' }
  ];

  const githubProjects = [
    { name: 'kesif-avukat-mcp', title: 'Avukat MCP', desc: 'Türkiye + uluslararası hukuki uyumluluk tarayıcısı. KVKK, GDPR, FSEK, PCI-DSS, COPPA, İYS taraması — Claude Desktop & Cursor üzerinden.', stack: ['Python', 'MCP', 'FastMCP'], url: 'https://github.com/mustafayilmazart/kesif-avukat-mcp', accent: '#16a34a' },
    { name: 'kesif-capraz-kontrol', title: 'Çapraz Kontrol', desc: "Multi-LLM kod review CLI. Aynı dosyayı Claude + Gemini + Codex + Qwen'a inceletip birleşik Markdown raporu üretir.", stack: ['Node.js', 'CLI', 'Multi-LLM'], url: 'https://github.com/mustafayilmazart/kesif-capraz-kontrol', accent: '#7c3aed' },
    { name: 'kesif-udemy-mcp', title: 'Udemy MCP', desc: 'Udemy eğitmenleri için MCP. Instructor API + browser scanner ile kurs/yorum/Q&A yönetimi ve AI ile içerik üretimi.', stack: ['Python', 'MCP', 'Playwright'], url: 'https://github.com/mustafayilmazart/kesif-udemy-mcp', accent: '#a435f0' },
    { name: 'kesif-mcp-orkestratori', title: 'MCP Orkestratörü', desc: "Tek registry'den Claude Desktop + Code + Cursor için MCP sync. Kategorize, .env ile secret yönetimi, dry-run modu.", stack: ['Node.js', 'Zero deps'], url: 'https://github.com/mustafayilmazart/kesif-mcp-orkestratori', accent: '#219295' },
    { name: 'kesif-claude-skills', title: 'Claude Skills Curated', desc: "Yazarın pipeline'larında dahili kullanılan 14 Claude Code skill — TTS, video, NotebookLM, YouTube, prompt engineering.", stack: ['Markdown', 'Skills'], url: 'https://github.com/mustafayilmazart/kesif-claude-skills', accent: '#d4a574' },
    { name: 'kesif-mustafayilmazart', title: 'Bu Site', desc: 'Kişisel marka ve portfolyo sitesi. SvelteKit + Firebase Hosting.', stack: ['SvelteKit', 'Firebase', 'TS'], url: 'https://github.com/mustafayilmazart/kesif-mustafayilmazart', accent: '#1a1a1a' }
  ];

  const tools = [
    { n: 'SAMBA', c: '#16a34a' },
    { n: 'BDT (CBT)', c: '#0ea5e9' },
    { n: 'Motivasyonel Görüşme', c: '#22c55e' },
    { n: 'NLP', c: '#8b5cf6' },
    { n: 'Yaşam Koçluğu', c: '#d97706' },
    { n: 'Aile Danışmanlığı', c: '#ec4899' },
    { n: 'Pozitif Psikoterapi', c: '#eab308' },
    { n: 'Kişilerarası Psikoterapi', c: '#06b6d4' },
    { n: 'Şema Terapi', c: '#f43f5e' },
    { n: 'Oyun Terapisi', c: '#a855f7' },
    { n: 'Manevi Danışmanlık', c: '#b8a920' },
    { n: 'Firebase', c: '#ffca28' },
    { n: 'Google Cloud', c: '#4285f4' },
    { n: 'Cloudflare', c: '#f38020' },
    { n: 'cPanel', c: '#ff6c2c' },
    { n: 'Google Apps Script', c: 'var(--teal)' },
    { n: 'Google Sheets', c: '#34a853' },
    { n: 'WordPress', c: '#21759b' },
    { n: 'Avada Theme', c: '#ea580c' },
    { n: 'HTML / CSS / JS', c: '#f06529' },
    { n: 'Cursor IDE', c: '#9146ff' },
    { n: 'Claude AI', c: '#7c3aed' },
    { n: 'ChatGPT', c: '#10a37f' },
    { n: 'Gemini', c: '#1a73e8' },
    { n: 'Suno AI', c: '#ff5722' },
    { n: 'Canva', c: '#00c4cc' },
    { n: 'Figma', c: '#dc2626' },
    { n: 'After Effects', c: '#9999ff' },
    { n: 'Filmora', c: '#00d2ff' },
    { n: 'Movavi', c: '#ff5b00' },
    { n: 'CapCut', c: '#000000' },
    { n: 'Camtasia Studio', c: '#1db954' },
    { n: 'YouTube', c: '#f00' },
    { n: 'Udemy', c: '#a435f0' },
    { n: 'Medium', c: '#000' },
    { n: 'Substack', c: '#ff6719' },
    { n: 'LinkedIn', c: '#0a66c2' },
    { n: 'Instagram', c: '#e4405f' }
  ];

  const certs = [
    { h: 'NLP & Terapi', items: [
      ['NLP Trainer (Eğitmenlik)', 'Life Akademi'],
      ['NLP Master Practitioner', 'Life Akademi'],
      ['Aile Danışmanlığı', 'Toros Üniversitesi'],
      ['Pozitif Psikoterapi', 'Işık Üniversitesi'],
      ['Oyun Terapisi Uygulayıcı', 'Uludağ Üni.'],
      ['Yas ve Travma Terapisi', 'NEWSPDR'],
      ['Manevi Danışmanlık', 'Kariyer Online']
    ]},
    { h: 'Koçluk', items: [
      ['Profesyonel Eğitim Koçluğu', 'Uludağ Üni.'],
      ['Profesyonel Öğrenci Koçluğu', 'Uludağ Üni.'],
      ['Profesyonel Yönetici Koçluğu', 'Uludağ Üni.'],
      ['Yaşam Koçluğu (Life Coach)', 'Life Akademi'],
      ['Aile, Eğitim ve Öğrenci Koçluğu', 'Üsküdar Üni.']
    ]},
    { h: 'Eğitim & Gelişim', items: [
      ['Eğiticinin Eğitimi', 'İst. Gelişim Üni.'],
      ['Trainer of Trainers', 'Liderlik Okulu'],
      ['Hızlı Okuma Eğitmenliği', 'Uludağ Üni.'],
      ['Mind & Memory Trainer', 'Life Akademi'],
      ['İş Pedagojisi Sertifikası', 'MEB']
    ]},
    { h: 'Yapay Zeka & Teknoloji', items: [
      ['Prompt Engineering', 'LinkedIn'],
      ['Get Ready for Generative AI', 'LinkedIn'],
      ['GPT-4: The New GPT Release', 'LinkedIn'],
      ['WordPress: SEO & Troubleshoot', 'LinkedIn'],
      ['Microsoft Office & Google Sheets İleri Düzey', '']
    ]},
    { h: 'Yönetim & Kişisel Gelişim', items: [
      ['Stres Yönetimi Uzmanlığı', 'Life Akademi'],
      ['Öfke Yönetimi', 'İzgören Akademi'],
      ['Duygusal Zeka Eğitimi', 'Liderlik Okulu'],
      ['İkna Teknikleri Eğitmenliği', 'Liderlik Okulu'],
      ['Etkili İletişim & Beden Dili', 'Life Akademi']
    ]},
    { h: 'Bağımlılık & Psikoeğitim', items: [
      ['Fundamentals of Addiction', 'Udemy'],
      ['Problem Gambling Treatment', 'ACORN'],
      ['Mindful Yaşamın İyileştirici Gücü', 'BAUGO'],
      ['İletişiminizi Görsel Hale Getirin', 'BAUGO']
    ]}
  ];

  const refs = [
    { grad: 'linear-gradient(135deg,var(--teal),var(--teal-light))', letter: 'F',
      quote: 'İçerik derli toplu, çok iyi şekilde düzenli olması ve daha anlaşılır olması benim için çok iyiydi. Hocamızın emeğine sağlık, teşekkür ederim.',
      name: 'Fazilet O.', title: 'Udemy · Kendini Yönetme Becerileri' },
    { grad: 'linear-gradient(135deg,#7c3aed,#a855f7)', letter: 'B',
      quote: 'İçeriğinde yoğun ve faydalı bilgiler içeren bu video için emeğinize sağlık.',
      name: 'Büşra Y.', title: 'Udemy · Stres ve Başa Çıkma' },
    { grad: 'linear-gradient(135deg,#16a34a,#22c55e)', letter: 'F',
      quote: 'Faydalı bir eğitim. Eğitimciye teşekkür ederim.',
      name: 'Fikret Y.', title: 'Udemy · Alkol Bağımlılığı' }
  ];

  // reveal animation
  onMount(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Mustafa Yılmaz | mustafayilmaz.art — Danışman · AI Engineer · Eğitmen · AI Artist</title>
  <meta name="description" content="Psikolojiden (klinik) yazılıma, maneviyat danışmanlığından dijital tasarıma, müzikten eğitime — insanın bütünsel iyilik halini bilim, sanat ve teknolojiyle inşa ediyorum." />
  <meta property="og:title" content="Mustafa Yılmaz — Destekliyorum, Kodluyorum, İnşa Ediyorum" />
  <meta property="og:description" content="Danışman · AI Engineer · Eğitmen · AI Artist — mustafayilmaz.art" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="tr_TR" />
  <meta property="og:site_name" content="mustafayilmaz.art" />
  <meta property="og:url" content="https://mustafayilmaz.art/" />
  <meta property="og:image" content="https://mustafayilmaz.art/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://mustafayilmaz.art/og-image.jpg" />
  {@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(navigationSchema)}</script>`}
</svelte:head>

<noscript>
  <div style="max-width:800px;margin:0 auto;padding:40px 20px;font-family:system-ui,sans-serif;line-height:1.6">
    <h1>Mustafa Yılmaz — Danışman · AI Engineer · Eğitmen · AI Artist</h1>
    <p><strong>14+ yıl psikiyatri hemşireliği</strong>, bağımlılık tedavi merkezinde klinik tecrübe ve danışmanlık. <strong>Psikoloji (Klinik)</strong> yüksek lisansı (Nişantaşı + Doğuş Üniversitesi). NLP Trainer, ICF prensipli yaşam koçu, Manevi Danışmanlık sertifikalı.</p>
    <p>2021'den beri AI Engineer olarak 80+ projede yapay zeka orkestrasyonu yapıyorum. Kendi açık kaynak araçlarımı geliştiriyor, KEŞİF Akademi'de 3.700+ öğrenciye eğitim veriyorum.</p>

    <h2>Uzmanlık Alanları</h2>
    <ul>
      {#each expertise as e}<li><strong>{e.title}</strong> — {e.desc}</li>{/each}
    </ul>

    <h2>Geliştirdiğim Yazılımlar</h2>
    <ul>
      <li><a href="https://kesif.app">kesif.app</a> — Keşif Portal</li>
      <li><a href="https://iyilikhali.tr">iyilikhali.tr</a> — İyilik Hali Platformu</li>
      <li><a href="https://terapist.io">terapist.io</a> — Terapist Pro</li>
      <li><a href="https://tooleo.app">tooleo.app</a></li>
      <li><a href="https://aile.kesif.app">aile.kesif.app</a></li>
      <li><a href="https://maneviyat.kesif.app">maneviyat.kesif.app</a></li>
    </ul>

    <h2>İletişim</h2>
    <p>Email: <a href="mailto:bilgi@mustafayilmaz.art">bilgi@mustafayilmaz.art</a></p>
    <p><a href="https://www.linkedin.com/in/kpmustafayilmaz">LinkedIn</a> · <a href="https://github.com/mustafayilmazart">GitHub</a></p>
    <p><a href="/blog">Blog</a> · <a href="/art">Art</a> · <a href="/yazilimlar">Yazılımlar</a> · <a href="/ai-danismanligi">AI Danışmanlık</a></p>
  </div>
</noscript>

<Nav />

<!-- Hero -->
<section class="hero">
  <div class="hero-bg">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>
  <div class="hero-content">
    <div class="hero-text">
      <div class="hero-badge">
        <span class="pulse"></span>İşimi Sanatla &amp; Aşkla İnşa Ediyorum
      </div>
      <h1>
        Destekliyorum,<br />
        <span class="highlight">Kodluyorum,</span><br />
        <em>İnşa Ediyorum.</em>
      </h1>
      <p class="hero-desc">
        Psikolojiden (klinik) yazılıma, maneviyat danışmanlığından dijital tasarıma, müzikten eğitime —
        <strong>insanın bütünsel iyilik halini</strong> hem bilimle hem sanatla hem de teknolojiyle inşa ediyorum.
      </p>
      <div class="hero-buttons">
        <a href="#iletisim" class="btn-primary">
          Birlikte İnşa Edelim
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#uzmanlik" class="btn-secondary">Neler Yapıyorum?</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-card">
        <div class="hero-avatar">
          <img src="/profile.jpg" alt="Mustafa Yılmaz" width="100" height="100" />
        </div>
        <h3>Mustafa Yılmaz</h3>
        <p class="subtitle">Danışman · AI Engineer · Eğitmen · AI Artist</p>
        <p class="domain-line">{CFG.domain}</p>
        <div class="hero-stats">
          <div class="hero-stat"><div class="num">14+</div><div class="label">Yıl Deneyim</div></div>
          <div class="hero-stat"><div class="num">3.7K+</div><div class="label">Öğrenci</div></div>
          <div class="hero-stat"><div class="num">12+</div><div class="label">Uzmanlık Alanı</div></div>
        </div>
      </div>
      <div class="floating-tag tag-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
        Vibe Coding
      </div>
      <div class="floating-tag tag-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        Destekleme
      </div>
      <div class="floating-tag tag-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        Suno Müzik
      </div>
      <div class="floating-tag tag-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        Eğitim
      </div>
    </div>
  </div>
</section>

<!-- Philosophy -->
<div class="philosophy">
  <div class="philosophy-inner reveal">
    <div class="quote-mark">&ldquo;</div>
    <blockquote>
      Gerçek destekleme; <strong>KALP, NEFS, RUH, ZİHİN ve BEDEN</strong>'in birbiriyle uyum içinde dans ettiği bütünsel bir yaklaşımla mümkündür.
      Ben sadece bir şey yapmıyorum — yaşamı her boyutuyla <strong>inşa ediyorum.</strong>
    </blockquote>
    <p class="author">— Mustafa Yılmaz · {CFG.domain}</p>
  </div>
</div>

<!-- About -->
<div class="about-section" id="hakkimda">
  <div class="about-inner">
    <div class="about-text reveal">
      <div class="section-label">Hikayem</div>
      <h2>Her Şey Bir <em>Merakla</em> Başladı.</h2>
      <p>Her şey, insanın karmaşık ve bir o kadar da büyüleyici iç dünyasını anlama merakıyla başladı. <strong>2010 yılında</strong> insan bedenine şifa verme niyetiyle çıktığım hemşirelik yolculuğu, zamanla beni ruhun ve zihnin derinliklerine doğru bir keşfe yöneltti.</p>
      <div class="about-highlight">Anladım ki gerçek destekleme; KALP, NEFS, RUH, ZİHİN ve BEDEN'in birbiriyle uyum içinde dans ettiği bütünsel bir yaklaşımla mümkündü.</div>
      <p>Bu farkındalık, beni önce psikoloji, ardından da <strong>Psikoloji (Klinik)</strong> alanında uzmanlaşmaya götürdü. Geçtiğimiz 14 yıl boyunca heybeme NLP Eğitmenliği, Hızlı Okuma ve Hafıza Teknikleri gibi zihinsel yetenekleri güçlendiren araçları; Yaşam, Öğrenci, Aile, Bağımlılık ve Maneviyat Danışmanlığı gibi hayatın farklı dönemeçlerinde yol gösteren pusulaları ekledim.</p>
      <p>Teorik bilgiyi ve danışmanlık tecrübelerimi daha geniş kitlelere ulaştırma arzusu, beni yeni yollar aramaya itti. <strong>2012'de</strong> bir hobi olarak başlayan web tasarım ve sosyal medya merakım, zamanla ruh sağlığı profesyonellerinin seslerini dijital dünyada duyurmalarına yardımcı olduğum bir uzmanlığa dönüştü.</p>
      <p>İşimi sadece bir meslek olarak değil, bir <strong>sanat</strong> olarak görüyorum. Domain adresim <strong>{CFG.domain}</strong> bu felsefeyi yansıtıyor — her projemde aşk ve özen var. Suno ile rap ve müzik çalışmalarım da bu sanatsal bakış açısının bir uzantısı.</p>
      <p>Ben <strong>Mustafa Yılmaz</strong>. Amacım, insanların kendini keşfetme yolculuklarında onlara rehberlik etmek ve daha anlamlı bir hayat inşa etmelerine katkı sağlamaktır.</p>
    </div>
    <div class="about-sidebar reveal">
      <div class="about-milestones">
        {#each milestones as m (m.year)}
          <div class="milestone">
            <div class="year">{m.year}</div>
            <h4>{m.title}</h4>
            <p>{m.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<!-- Expertise -->
<section class="my-section" id="uzmanlik">
  <div class="section-label reveal">Uzmanlık</div>
  <h2 class="section-title reveal">Birden Fazla Dünyada<br />Ev Sahibiyim.</h2>
  <p class="section-subtitle reveal">Her uzmanlık alanım birbiriyle konuşur. Terapideki empati kodlara, koçluktaki strateji tasarıma, müzikteki ritim eğitime yansır.</p>
  <div class="expertise-grid">
    {#each expertise as e (e.title)}
      <div class="expertise-card reveal">
        <div class="card-inner">
          <div class="expertise-icon {e.icon}">
            {#if e.icon === 'icon-healing'}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><path d="M10 21h4"/><path d="M12 7v4"/><path d="M10 11h4"/></svg>
            {:else if e.icon === 'icon-spirit'}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/></svg>
            {:else if e.icon === 'icon-code'}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
            {:else if e.icon === 'icon-design'}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9z"/></svg>
            {:else if e.icon === 'icon-media'}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            {:else if e.icon === 'icon-teach'}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            {:else if e.icon === 'icon-health'}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0L12 5.34l-.77-.76a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
            {:else if e.icon === 'icon-data'}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
            {:else if e.icon === 'icon-music'}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            {/if}
          </div>
          <h3>{e.title}</h3>
          <p>{e.desc}</p>
          <div class="card-tags">
            {#each e.tags as t (t)}<span class="card-tag">{t}</span>{/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Eğitim Programları Teaser -->
<section class="programs-teaser" id="egitimler-teaser">
  <div class="programs-teaser-inner">
    <div class="section-label reveal">Eğitim & Danışmanlık</div>
    <h2 class="section-title reveal">Yöntem teorik değil, <em>vakadan</em> damıtılmış.</h2>
    <p class="section-subtitle reveal">
      Klinikten kurumsala, manevi rehberlikten yapay zeka atölyesine — 8 yapılandırılmış program.
      Klinik tecrübe ve KEŞİF Akademi'de sınanmış yöntemlerle.
    </p>
    <div class="programs-teaser-grid reveal">
      {#each programsTeaser as p (p.slug)}
        <a href="/egitimler" class="programs-teaser-card">
          <div class="ptc-accent" style:background={p.accent}></div>
          <div class="ptc-meta">{p.duration}</div>
          <h3>{p.title}</h3>
          <p>{p.audience}</p>
          <span class="ptc-link">Detay →</span>
        </a>
      {/each}
    </div>
    <div class="programs-teaser-cta reveal">
      <a href="/egitimler" class="btn-primary">Tüm Programlar →</a>
    </div>
  </div>
</section>

<!-- Yazılımlar Teaser -->
<section class="apps-teaser" id="yazilimlar">
  <div class="apps-teaser-inner">
    <div class="section-label reveal">Geliştirdiğim Yazılımlar</div>
    <h2 class="section-title reveal">Hayata Geçirdiğim <em>Ürünler</em>.</h2>
    <p class="section-subtitle reveal">
      kesif.app, iyilikhali.tr, terapist.io, tooleo.app, aile.kesif.app ve daha fazlası — production'da çalışan
      dijital ürünlerimin tamamını yazılımlar sayfasında görebilirsin.
    </p>
    <div class="apps-teaser-cta reveal">
      <a href="/yazilimlar" class="btn-primary">Tüm Yazılımları Gör →</a>
    </div>
  </div>
</section>

<!-- GitHub -->
<section class="github-section" id="github">
  <div class="github-inner">
    <div class="section-label reveal">Açık Kaynak</div>
    <h2 class="section-title reveal">GitHub'da <em>İnşa Ettiklerim</em>.</h2>
    <p class="section-subtitle reveal">
      MCP sunucuları, AI orkestrasyon araçları ve Claude Code skill koleksiyonu — hepsi MIT lisansı altında, herkes kullanabilir.
      <a href="https://github.com/mustafayilmazart" target="_blank" rel="noopener noreferrer" class="github-profile-link"> @mustafayilmazart →</a>
    </p>
    <div class="github-grid">
      {#each githubProjects as p (p.name)}
        <a href={p.url} target="_blank" rel="noopener noreferrer" class="github-card reveal">
          <div class="github-accent" style:background={p.accent}></div>
          <div class="github-card-head">
            <svg class="github-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            <span class="github-name">{p.name}</span>
          </div>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div class="github-stack">
            {#each p.stack as s (s)}<span class="github-stack-tag">{s}</span>{/each}
          </div>
          <span class="github-link">View on GitHub →</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Akademi -->
<div class="akademi-section" id="akademi">
  <div class="akademi-inner">
    <div class="akademi-text reveal">
      <div class="section-label">Keşif Akademi</div>
      <h2>Bireysel ve Toplumsal<br /><em>Gelişim Platformu</em></h2>
      <p>En büyük tutkum öğrenmek ve öğrendiklerimi paylaşmaktır. Keşif Akademi'yi, insanların kendi potansiyelini keşfetme arzusundaki o "nasıl?" sorusuna cevaplar sunmak için inşa ettim. Buradaki her eğitim, benim için de bir gelişim yolculuğudur.</p>
      <div class="akademi-cta">
        <a href={CFG.udemy} target="_blank" rel="noopener noreferrer" class="btn-yellow">
          Udemy Profilim
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
        <a href={CFG.youtube} target="_blank" rel="noopener noreferrer" class="btn-ghost">
          YouTube @kesiforg
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>
    </div>
    <div class="reveal">
      <div class="akademi-stats">
        <div class="akademi-stat"><div class="num">3.724</div><div class="label">Toplam Öğrenci</div></div>
        <div class="akademi-stat"><div class="num">233</div><div class="label">Yorum &amp; Değerlendirme</div></div>
        <div class="akademi-stat"><div class="num">14+</div><div class="label">Yıl Deneyim</div></div>
      </div>
    </div>
  </div>
</div>

<!-- Skills Koleksiyonu Teaser -->
<section class="skills-teaser" id="skills">
  <div class="skills-teaser-inner">
    <div class="section-label reveal">Claude Skills</div>
    <h2 class="section-title reveal">50+ Sahada Sınanmış <em>Skill Koleksiyonu</em>.</h2>
    <p class="section-subtitle reveal">
      Klinik gözlem, eğitim üretimi, içerik pipeline'ı ve yapay zeka orkestrasyonundan damıtılmış Claude Code skill'leri.
      Hepsi klinik saha / KEŞİF Akademi / mustafayilmaz.art üretim hattında çalışıyor — açık kaynak.
    </p>
    <div class="skills-teaser-cta reveal">
      <a href="/skills" class="btn-primary">Skill Koleksiyonunu Aç →</a>
    </div>
  </div>
</section>

<!-- Certs -->
<div class="certs-section" id="sertifikalar">
  <div class="certs-inner">
    <div class="section-label reveal">Sertifikalar &amp; Eğitimler</div>
    <h2 class="section-title reveal">Sürekli Öğrenme, Sürekli Dönüşme.</h2>
    <p class="section-subtitle reveal">40'ın üzerinde sertifika ve uzmanlık eğitimi — çünkü en büyük tutkum öğrenmek.</p>
    <div class="certs-grid">
      {#each certs as c (c.h)}
        <div class="cert-category reveal">
          <h4>{c.h}</h4>
          <ul>
            {#each c.items as [name, src] (name)}
              <li>{name} {#if src}<span class="cert-source">— {src}</span>{/if}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Kurumlar Wall (sosyal kanıt) -->
<section class="institutions-section reveal" id="kurumlar">
  <div class="institutions-inner">
    <div class="section-label">Birlikte Yürüdüklerim</div>
    <h2 class="section-title">Sahanın <em>İçinden</em> Geldim.</h2>
    <p class="section-subtitle">
      14+ yıl boyunca çalıştığım, eğitim aldığım, sertifikalandığım ve içerik ürettiğim kurumlar.
      Her biri yöntemime ayrı bir tat ve titizlik kattı.
    </p>
    {#each institutionCats as cat (cat)}
      {@const list = institutions.filter((i) => i.category === cat)}
      <div class="inst-block">
        <div class="inst-cat-label">{institutionLabels[cat]}</div>
        <div class="inst-row">
          {#each list as i (i.name)}
            <div class="inst-chip" title={i.name}>
              <span class="inst-name">{i.shortLabel ?? i.name}</span>
              {#if i.city}<span class="inst-city">{i.city}</span>{/if}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- References -->
<div class="references-section" id="referanslar">
  <div class="references-inner">
    <div class="section-label reveal">Referanslar</div>
    <h2 class="section-title reveal">Birlikte Yol Yürüdüklerim<br />Ne Diyor?</h2>
    <p class="section-subtitle reveal">Öğrencilerimden, danışanlarımdan ve iş birliği yaptığım profesyonellerden gelen geri bildirimler. <span style="display:block;font-size:0.78rem;margin-top:8px;opacity:0.7">Soyadlar KVKK kapsamında gizlilik için kısaltılmıştır.</span></p>
    <div class="references-grid">
      {#each refs as r (r.name)}
        <div class="reference-card reveal">
          <div class="ref-stars">★★★★★</div>
          <div class="ref-quote">&ldquo;</div>
          <blockquote>{r.quote}</blockquote>
          <div class="reference-author">
            <div class="ref-avatar" style:background={r.grad}>{r.letter}</div>
            <div>
              <div class="ref-name">{r.name}</div>
              <div class="ref-title">{r.title}</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Yazılar -->
<section class="my-section" id="yazilar">
  <div class="section-label reveal">Yazılar &amp; Platformlar</div>
  <h2 class="section-title reveal">Düşünce Atölyem</h2>
  <p class="section-subtitle reveal">Psikoloji (klinik), maneviyat, teknoloji ve kişisel gelişim üzerine düzenli içerikler inşa ediyorum.</p>
  <div class="writing-grid">
    <a href={CFG.medium} target="_blank" rel="noopener noreferrer" class="writing-card reveal">
      <div class="writing-card-img" style="background:linear-gradient(135deg,#1a1a1a,#333)">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </div>
      <div class="writing-card-body">
        <div class="platform">Medium</div>
        <h3>Psikoloji (Klinik) &amp; Bilgelik</h3>
        <p>Öz farkındalık, duygusal zeka ve ilişki dinamikleri.</p>
      </div>
    </a>
    <a href={CFG.substack} target="_blank" rel="noopener noreferrer" class="writing-card reveal">
      <div class="writing-card-img" style="background:linear-gradient(135deg,var(--teal),var(--teal-dark))">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </div>
      <div class="writing-card-body">
        <div class="platform">Substack</div>
        <h3>Keşif Bülteni</h3>
        <p>Haftalık ilham, içgörü ve pratik bilgelik.</p>
      </div>
    </a>
    <a href={CFG.udemy} target="_blank" rel="noopener noreferrer" class="writing-card reveal">
      <div class="writing-card-img" style="background:linear-gradient(135deg,#a435f0,#7c2db8)">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>
      <div class="writing-card-body">
        <div class="platform">Udemy — Keşif Akademi</div>
        <h3>Online Eğitimler</h3>
        <p>3.724 öğrenci, 233 değerlendirme.</p>
      </div>
    </a>
    <a href={CFG.youtube} target="_blank" rel="noopener noreferrer" class="writing-card reveal">
      <div class="writing-card-img" style="background:linear-gradient(135deg,#f00,#c00)">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
      </div>
      <div class="writing-card-body">
        <div class="platform">YouTube</div>
        <h3>@kesiforg</h3>
        <p>Video içerikler, eğitimler ve daha fazlası.</p>
      </div>
    </a>
  </div>
</section>

<!-- Topluluk -->
<section class="community-section reveal" id="topluluk">
  <div class="community-inner">
    <div class="community-card">
      <div class="comm-icon">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      </div>
      <div class="community-text">
        <div class="section-label">Keşif Topluluğu</div>
        <h2>Birlikte <em>öğrenelim</em>.</h2>
        <p>
          KEŞİF Akademi öğrencileri, danışanları ve dijital sağlık alanında çalışan profesyoneller için kurulan topluluğa katıl —
          haftalık ipuçları, soru-cevap ve etkinlik duyuruları.
        </p>

        <div class="community-newsletter">
          <NewsletterForm />
        </div>

        <div class="community-actions">
          <a href={CFG.youtube} target="_blank" rel="noopener noreferrer" class="btn-secondary">YouTube'da Bağlan</a>
          <a href={CFG.substack} target="_blank" rel="noopener noreferrer" class="btn-secondary">Substack'te Aç</a>
          <a href="/sss" class="btn-secondary">Sıkça Sorulanlar</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Testimonial -->
<div class="testimonial-section">
  <div class="testimonial-inner reveal">
    <div class="quote-icon">&ldquo;</div>
    <blockquote>Bir hemşire olarak başladığım yolculuk, beni psikolojiye, maneviyata, yazılıma, müziğe ve tasarıma götürdü. Her yeni öğrenme, bir öncekini güçlendirdi. İşimi sanatla ve aşkla inşa etmek benim en büyük ayrıcalığım.</blockquote>
    <p class="testimonial-author">Mustafa Yılmaz — {CFG.domain}</p>
  </div>
</div>

<!-- CTA -->
<section class="my-section cta-section" id="iletisim">
  <div class="section-label reveal" style="justify-content:center">İletişim</div>
  <h2 class="section-title reveal">Birlikte Bir Şeyler<br />İnşa Etmeye Hazır mısınız?</h2>
  <p class="reveal">İster terapi sürecinizde destek olsun, ister bir web sitesi veya dijital strateji — her projede aynı özenle, aynı aşkla çalışıyorum. Bir kahve içerek konuşalım.</p>
  <div class="hero-buttons reveal" style="justify-content:center">
    <a href="mailto:{CFG.email}" class="btn-primary">
      E-posta Gönder
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    </a>
    <a href={CFG.linkedin} target="_blank" rel="noopener noreferrer" class="btn-secondary">LinkedIn'de Bağlanalım</a>
  </div>
  <div class="cta-links reveal">
    <a href={CFG.github} target="_blank" rel="noopener noreferrer" class="cta-link">⌨️ GitHub</a>
    <a href={CFG.medium} target="_blank" rel="noopener noreferrer" class="cta-link">📝 Medium</a>
    <a href={CFG.substack} target="_blank" rel="noopener noreferrer" class="cta-link">📬 Substack</a>
    <a href={CFG.youtube} target="_blank" rel="noopener noreferrer" class="cta-link">▶ YouTube</a>
    <a href={CFG.udemy} target="_blank" rel="noopener noreferrer" class="cta-link">🎓 Udemy</a>
    <a href={CFG.kesif} target="_blank" rel="noopener noreferrer" class="cta-link">🌐 kesif.org</a>
  </div>
</section>

<Footer />
