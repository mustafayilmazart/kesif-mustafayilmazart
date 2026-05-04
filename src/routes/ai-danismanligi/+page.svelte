<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const audiences = [
    { icon: '🧠', title: 'Terapistler & Psikologlar', desc: 'Seans takibi, ödev otomasyonu, AI destekli ön değerlendirme, KVKK uyumlu danışan kayıt sistemi.' },
    { icon: '🦷', title: 'Diş Klinikleri', desc: 'Randevu hatırlatma, tedavi planı görselleştirme, hasta sadakat programı, onam formları.' },
    { icon: '🩺', title: 'Doktorlar & Uzmanlar', desc: 'Hasta dosyası özetleme, e-reçete entegrasyonu, sonuç bildirimi otomasyonu, klinik dashboard.' },
    { icon: '🏥', title: 'Klinik & Polikliniğer', desc: 'Çoklu hekim koordinasyonu, kapasite yönetimi, gelir analitiği, multi-kanal iletişim.' },
    { icon: '💪', title: 'Fizyoterapi Merkezleri', desc: "Egzersiz takip uygulaması, ev programı pipeline'ı, video eğitim üretimi." },
    { icon: '🥗', title: 'Beslenme Uzmanları', desc: 'Beslenme planı oluşturma asistanı, danışan ilerleme takibi, içerik takvimi.' }
  ];

  const packages = [
    { tier: 'Giriş', n: '00', title: 'Keşif Atölyesi', duration: '2 saat', price: 'Ücretsiz',
      desc: 'Bu pakete dair detaylar ve hızlı kazanç listesi.', cta: 'Atölye Al', accent: '#0ea5e9',
      outcomes: ['AI Hazırlık Skoru', 'Hızlı Kazanç Listesi', 'Yol Haritası'] },
    { tier: 'Pilot', n: '01', title: 'Tek Akış Pilot Kurulum', duration: '1-2 hafta', price: 'Proje bazlı',
      desc: 'Tek bir akışı (genelde randevu hatırlatma) baştan sona kurarım.', cta: 'Pilot İste', accent: '#16a34a',
      outcomes: ['Randevu Hatırlatma', 'Takvim Entegrasyonu', 'No-Show Azaltma', 'Geri Bildirim Toplama'] },
    { tier: 'Tam Kurulum', n: '02', title: 'Klinik AI Paketi', duration: '4-8 hafta', price: 'Proje bazlı',
      desc: 'Pilot başarılıysa sıradaki akışlara geçiyoruz: Türkçe AI asistan, KVKK uyumlu form altyapısı, hasta takip panosu, içerik üretim hattı.', cta: 'Görüşme Al', accent: '#219295', featured: true,
      outcomes: ['7/24 Türkçe AI Asistan', 'KVKK Uyumlu Formlar', 'Hasta Takip Panosu', 'İçerik Üretim Hattı', 'Web Sitesi & Yerel SEO', 'Ekip Eğitimi'] },
    { tier: 'Sürekli Bakım', n: '03', title: 'Aylık Operasyon Desteği', duration: 'Aylık', price: 'Aylık paket',
      desc: 'Sistem kurulduktan sonra haftalık içerik üretimi, otomasyon bakımı, KVKK denetimi, güvenlik taraması ve yeni süreç eklemeleri.', cta: 'Aylık Plan', accent: '#7c3aed',
      outcomes: ['Haftalık İçerik Takvimi', 'Otomasyon Bakımı', 'KVKK Sürekli Denetim', 'Güvenlik Tarama', 'Yeni Akış Ekleme'] }
  ];

  const services = [
    { n: '01', title: 'Randevu & İletişim Otomasyonu', desc: 'WhatsApp, SMS ve e-posta üzerinden otomatik randevu hatırlatma, no-show azaltma, geri bildirim toplama.', tools: ['WhatsApp', 'SMS / E-posta', 'Takvim Entegrasyonu', 'Otomatik Hatırlatma'] },
    { n: '02', title: 'Türkçe AI Asistan', desc: 'Web sitenizde 7/24 çalışan, sadece sizin kliniğinizin tonunu ve hizmetlerini bilen Türkçe yapay zeka asistanı.', tools: ['7/24 Yanıt', 'Türkçe Doğal Dil', 'Klinik Tonu', 'Sekreter Yönlendirme'] },
    { n: '03', title: 'KVKK Uyumlu Dijital Altyapı', desc: 'Hasta verisinin toplandığı her form, hukuki açıdan KVKK uyumlu. Aydınlatma metni, açık rıza, veri saklama politikası ve veri silme talepleri otomatik yönetilir.', tools: ['Aydınlatma Metni', 'Açık Rıza', 'Veri Saklama', 'Sürekli Denetim'] },
    { n: '04', title: 'Hasta Takip & Yönetim Panosu', desc: 'Hasta yolculuğunu görselleştirir: ilk başvuru, randevu, tedavi, kontrol, tavsiye.', tools: ['Hasta Yolculuğu', 'Gelir Analitiği', 'Doluluk', 'Hekim Performansı'] },
    { n: '05', title: 'İçerik Üretim Hattı', desc: 'Sosyal medya postu, blog yazısı, hasta bilgilendirme videosu — hepsi yarı otomatik.', tools: ['Yazı Üretimi', 'Türkçe Seslendirme', 'Video Kurgu', 'İçerik Takvimi'] },
    { n: '06', title: 'Web Sitesi & Yerel SEO', desc: "Mobil uyumlu, hızlı, KVKK uyumlu klinik web sitesi. Yerel arama optimizasyonu ile Google'da ilk sayfa.", tools: ['Mobil Uyum', 'Yerel SEO', 'Hız Optimizasyonu', 'Erişilebilirlik'] },
    { n: '07', title: 'Eğitim & Mini Kurslar', desc: 'Hastalarınıza özel mini-kurslar, broşürler, video setleri.', tools: ['Mini Kurs', 'Video Set', 'Broşür', 'Aday Hasta'] },
    { n: '08', title: 'Veri Güvenliği & Yedekleme', desc: "Hasta verisi şifreli, yedekli ve KVKK'ya uygun şekilde saklanır.", tools: ['Şifreli Yedekleme', 'Sızıntı Uyarısı', 'Periyodik Denetim', 'Felaket Kurtarma'] }
  ];

  const process = [
    { n: '01', t: 'Ücretsiz Keşif', d: '30 dakikalık görüşme. Mevcut sürecinizi ve sıkıntı noktalarınızı dinliyorum.' },
    { n: '02', t: 'Otomasyon Haritası', d: 'Kliniğinize özel yol haritası. Hangi süreç önce otomatikleşmeli, hangisi sonra; tahmini zaman ve bütçe.' },
    { n: '03', t: 'Pilot Kurulum', d: 'İlk 1-2 hafta tek bir akışı pilot olarak kuruyoruz. Genelde randevu hatırlatma ile başlıyoruz.' },
    { n: '04', t: 'Ölçek & Destek', d: 'Pilot başarılıysa sıradaki akışlara geçiyoruz. Ekibinizi kullanım için eğitiyorum.' }
  ];

  const whyMe = [
    { icon: '🩺', title: 'Sağlık Sektörü İçeriden', desc: '14+ yıl psikiyatri hemşireliği, bağımlılık tedavi merkezinde klinik tecrübe. Hekim ve hasta dilini biliyorum.' },
    { icon: '🤖', title: 'AI Engineer', desc: 'Üretim ortamında çalışan AI sistemleri kuruyorum. Hype değil, sonuç odaklı.' },
    { icon: '⚖️', title: 'KVKK Uzmanlığı', desc: 'Sağlık verisinin yasal hassasiyetini hem teknik hem hukuki yönden anlıyorum.' },
    { icon: '🎓', title: 'Eğitim Odaklı', desc: 'Keşif Akademi\'de 3.700+ öğrenci. Ekibinize sistemi öğretirken karmaşık değil, anlaşılır anlatıyorum.' }
  ];

  const faqs = [
    { q: 'Bütçem küçük, küçük bir klinikim. Yine de uygun mu?', a: 'Evet. Hizmetler modüler. Tek bir akış — örneğin sadece randevu hatırlatma — bile aylık 5-15 saat zaman tasarrufu sağlar.' },
    { q: 'Mevcut sistemimi (Google Takvim, WordPress, Excel) bırakmam gerekiyor mu?', a: 'Hayır. Sahip olduğunuz araçların üzerine inşa ediyoruz.' },
    { q: 'Veri güvenliği ne durumda? Hasta verisi sızabilir mi?', a: 'KVKK uyumluluğu ve veri şifreleme her projenin temelidir. Düzenli güvenlik taraması yapılır. Hasta verisi asla AI eğitiminde kullanılmaz.' },
    { q: 'AI hekimin yerini mi alıyor?', a: 'Hayır, almayacak. AI sekreterlik, takip, bilgilendirme, raporlama gibi tekrarlayan işleri yapıyor.' },
    { q: 'Ne kadar sürede sonuç görürüm?', a: 'Pilot 1-2 hafta. İlk gözle görülür etkiler 4-6 hafta içinde.' },
    { q: 'Aylık ücret mi, proje bazlı mı?', a: 'İkisi de mümkün. Sürekli operasyon için aylık paket; sıfırdan kurulum için proje bazlı.' }
  ];
</script>

<svelte:head>
  <title>Sağlık Kurumları için AI Danışmanlığı · Mustafa Yılmaz</title>
  <meta name="description" content="Terapistler, doktorlar ve diş klinikleri için yapay zeka otomasyonları: randevu, hasta takibi, KVKK uyumlu dijital altyapı, AI asistan ve içerik pipeline'ı." />
  <meta property="og:title" content="Sağlık Kurumları için AI Danışmanlığı" />
  <meta property="og:description" content="Terapistler, doktorlar ve diş klinikleri için AI otomasyonları." />
  <meta property="og:url" content="https://mustafayilmaz.art/ai-danismanligi/" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="tr_TR" />
</svelte:head>

<Nav activePath="/ai-danismanligi" />

<section class="aid-hero">
  <div class="aid-hero-bg">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
  </div>
  <div class="aid-hero-content">
    <div class="hero-badge">
      <span class="pulse"></span>Sağlık Kurumlarına Özel
    </div>
    <h1>
      Hastalar için <em>insan</em>,<br />
      ofis için <span class="highlight">yapay zeka</span>.
    </h1>
    <p class="aid-hero-desc">
      Terapistler, doktorlar ve diş klinikleri için <strong>AI destekli otomasyon danışmanlığı</strong>.
      Randevudan iletişime, KVKK'dan içerik üretimine — hekim hastayla, AI ofisle ilgilensin.
    </p>
    <div class="aid-hero-buttons">
      <a href="mailto:bilgi@mustafayilmaz.art?subject=AI Danışmanlık — Ücretsiz Keşif Görüşmesi" class="btn-primary">
        Ücretsiz Keşif Görüşmesi
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#paketler" class="btn-secondary">Paketleri Gör</a>
    </div>
    <div class="aid-hero-stats">
      <div><strong>14+</strong><span>yıl sağlık deneyimi</span></div>
      <div><strong>80+</strong><span>AI projesi</span></div>
      <div><strong>50+</strong><span>otomasyon akışı</span></div>
      <div><strong>3.7K+</strong><span>öğrenci</span></div>
    </div>
  </div>
</section>

<section class="aid-section" id="kimler-icin">
  <div class="aid-inner">
    <div class="section-label">Kimler için</div>
    <h2 class="section-title">Sağlık Sektörünün Gerçek <em>Sıkıntıları</em>nı Biliyorum.</h2>
    <p class="section-subtitle">14 yıl psikiyatri hemşireliği, klinik psikoloji yüksek lisansı ve bağımlılık tedavi merkezindeki klinik tecrübe — sektörü içeriden tanıyan biri olarak konuşuyorum.</p>
    <div class="aid-audience-grid">
      {#each audiences as a (a.title)}
        <div class="aid-audience-card">
          <div class="aid-audience-icon">{a.icon}</div>
          <h3>{a.title}</h3>
          <p>{a.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="aid-packages-section" id="paketler">
  <div class="aid-inner">
    <div class="section-label">Paketler</div>
    <h2 class="section-title">Küçük Başlayın, <em>Adım Adım</em> Büyüyün.</h2>
    <p class="section-subtitle">Sıfır risk: ücretsiz keşifle başlarız. Pilot çalışırsa tam kuruluma, oradan da aylık bakıma geçeriz. Her aşamada çıkış kapısı açık.</p>
    <div class="aid-packages-grid">
      {#each packages as p (p.n)}
        <div class="aid-package-card" class:featured={p.featured}>
          {#if p.featured}<div class="aid-package-badge">En Çok Tercih</div>{/if}
          <div class="aid-package-tier" style:color={p.accent}>{p.tier}</div>
          <h3>{p.title}</h3>
          <div class="aid-package-meta">
            <span>{p.duration}</span>
            <span>·</span>
            <span>{p.price}</span>
          </div>
          <p>{p.desc}</p>
          <ul class="aid-package-outcomes">
            {#each p.outcomes as o (o)}
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.accent} stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                {o}
              </li>
            {/each}
          </ul>
          <a
            href="mailto:bilgi@mustafayilmaz.art?subject={encodeURIComponent(`AI Danışmanlık — ${p.title}`)}"
            class="aid-package-cta"
            style:background={p.accent}
            style:border-color={p.accent}
          >
            {p.cta} →
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="aid-services-section" id="hizmetler">
  <div class="aid-inner">
    <div class="section-label">Detaylar</div>
    <h2 class="section-title">Tam Kurulumda Hangi <em>İşler</em> Otomatikleşir?</h2>
    <p class="section-subtitle">Yukarıdaki paketler bu modüllerden birleşiyor. Her klinik için kombinasyon farklı — keşif görüşmesinde size özel olanı seçiyoruz.</p>
    <div class="aid-services-grid">
      {#each services as s (s.n)}
        <div class="aid-service-card">
          <div class="service-num">{s.n}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <div class="service-tools">
            {#each s.tools as t (t)}<span>{t}</span>{/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="aid-process-section">
  <div class="aid-inner">
    <div class="section-label">Çalışma Süreci</div>
    <h2 class="section-title">Karmaşık Değil, <em>Adım Adım</em>.</h2>
    <div class="aid-process-grid">
      {#each process as p (p.n)}
        <div class="aid-process-step">
          <div class="aid-step-num">{p.n}</div>
          <h3>{p.t}</h3>
          <p>{p.d}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="aid-section">
  <div class="aid-inner">
    <div class="section-label">Neden Ben</div>
    <h2 class="section-title">Üç <em>Dünya</em>nın Kesişiminde.</h2>
    <p class="section-subtitle">Salt teknoloji firmaları sağlığı bilmez; salt sağlıkçılar AI'yı bilmez. Üçüncü bir profil var: ikisini de içeriden gören.</p>
    <div class="aid-why-grid">
      {#each whyMe as w (w.title)}
        <div class="aid-why-card">
          <div class="aid-why-icon">{w.icon}</div>
          <div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="aid-section aid-faq-section">
  <div class="aid-inner aid-faq-inner">
    <div class="section-label">Sık Sorulanlar</div>
    <h2 class="section-title">Cevabı <em>Şimdi</em>den Bilelim.</h2>
    <div class="aid-faq-list">
      {#each faqs as f (f.q)}
        <details class="aid-faq">
          <summary>
            <span>{f.q}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <p>{f.a}</p>
        </details>
      {/each}
    </div>
  </div>
</section>

<section class="aid-cta-section" id="iletisim">
  <div class="aid-cta-inner">
    <h2>Kliniğinizde <em>15 dakika</em> tasarruf edebileceğimiz bir akış var mı?</h2>
    <p>Ücretsiz 30 dakikalık keşif görüşmesinde birlikte bakalım. Görüşmenin sonunda hiçbir şey almak zorunda değilsiniz; en azından 1-2 somut fikirle ayrılırsınız.</p>
    <div class="aid-cta-buttons">
      <a href="mailto:bilgi@mustafayilmaz.art?subject=AI%20Dan%C4%B1%C5%9Fmanl%C4%B1k%20%E2%80%94%20%C3%9Ccretsiz%20Ke%C5%9Fif%20G%C3%B6r%C3%BC%C5%9Fmesi" class="btn-primary btn-lg">
        📅 Ücretsiz Görüşme Talep Et
      </a>
      <a href="https://linkedin.com/in/kpmustafayilmaz" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-lg">
        LinkedIn'de Mesaj At
      </a>
    </div>
    <p class="aid-cta-meta">
      <strong>bilgi&#64;mustafayilmaz&#46;art</strong> · 7 gün içinde dönüş · KVKK uyumlu iletişim
    </p>
  </div>
</section>

<Footer />
