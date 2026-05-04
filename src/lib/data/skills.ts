/* Mustafa'nın Claude Code skill koleksiyonu — github.com/mustafayilmazart/kesif-claude-skills */

export type SkillCategory =
  | 'klinik'
  | 'egitim'
  | 'icerik'
  | 'sosyal'
  | 'ai-otomasyon'
  | 'arastirma'
  | 'manevi'
  | 'marka'
  | 'tasarim'
  | 'yazilim'
  | 'hukuk'
  | 'verimlilik'
  | 'altyapi';

export type Audience = 'klinisyen' | 'egitmen' | 'icerik' | 'gelistirici' | 'girisimci' | 'aile';

export type Skill = {
  slug: string;
  name: string;
  description: string;
  category: SkillCategory;
  audiences: Audience[];
  tags: string[];
  status: 'aktif' | 'beta' | 'planli';
  highlight?: boolean;
};

export const skillCategories: Record<SkillCategory, { label: string; icon: string; accent: string }> = {
  klinik:        { label: 'Klinik & Sağlık',        icon: '🩺', accent: '#16a34a' },
  egitim:        { label: 'Eğitim & Kurslar',       icon: '🎓', accent: '#0ea5e9' },
  icerik:        { label: 'İçerik Üretimi',         icon: '🎬', accent: '#dc2626' },
  sosyal:        { label: 'Sosyal Medya',           icon: '📱', accent: '#ec4899' },
  'ai-otomasyon':{ label: 'AI & Otomasyon',         icon: '🤖', accent: '#7c3aed' },
  arastirma:     { label: 'Araştırma & Analiz',     icon: '🔍', accent: '#0d9488' },
  manevi:        { label: 'Manevi & Maneviyat',     icon: '🌙', accent: '#b8a920' },
  marka:         { label: 'Marka & Pazarlama',      icon: '🎨', accent: '#ea580c' },
  tasarim:       { label: 'Tasarım & UI',           icon: '🎨', accent: '#db2777' },
  yazilim:       { label: 'Yazılım Geliştirme',     icon: '💻', accent: '#2563eb' },
  hukuk:         { label: 'Hukuk & Uyumluluk',      icon: '⚖️', accent: '#475569' },
  verimlilik:    { label: 'Verimlilik & Token',     icon: '⚡', accent: '#d97706' },
  altyapi:       { label: 'Altyapı & Orkestrasyon', icon: '🛠️', accent: '#219295' }
};

export const audienceLabels: Record<Audience, string> = {
  klinisyen: 'Klinisyenler',
  egitmen: 'Eğitmenler',
  icerik: 'İçerik Üreticileri',
  gelistirici: 'Geliştiriciler',
  girisimci: 'Girişimciler',
  aile: 'Aileler & Bireyler'
};

export const skills: Skill[] = [
  // KLİNİK & SAĞLIK
  {
    slug: 'bdt-modul-uretici',
    name: 'BDT Modül Üretici',
    description: 'Bilişsel Davranışçı Terapi protokolü temelli psikoeğitim modüllerini PDF\'ten videoya çevirir. Edge-TTS Türkçe seslendirme + altyazı + bölüm görselleri.',
    category: 'klinik',
    audiences: ['klinisyen', 'egitmen'],
    tags: ['BDT', 'CBT', 'klinik', 'Edge-TTS', 'video'],
    status: 'aktif',
    highlight: true
  },
  {
    slug: 'kvkk-uyum-tarayici',
    name: 'KVKK Uyum Tarayıcısı',
    description: 'Klinik formları, web sitelerini ve dokümanları KVKK 6698 ve sağlık verisi (özel nitelikli) açısından otomatik tarar. Aydınlatma metni şablonu üretir.',
    category: 'klinik',
    audiences: ['klinisyen', 'gelistirici'],
    tags: ['KVKK', 'sağlık verisi', 'Avukat MCP'],
    status: 'aktif'
  },
  {
    slug: 'samba-aile-yardimcisi',
    name: 'SAMBA Aile Yardımcısı',
    description: 'Bağımlı yakınları için yapılandırılmış 6 haftalık aile programı modüllerini hazırlar. Sınır metni, kriz protokolü, iletişim defteri.',
    category: 'klinik',
    audiences: ['klinisyen', 'aile'],
    tags: ['SAMBA', 'aile', 'bağımlılık'],
    status: 'aktif'
  },

  // EĞİTİM & KURSLAR
  {
    slug: 'udemy-video-pipeline',
    name: 'Udemy Video Pipeline',
    description: 'NotebookLM araştırması → Türkçe ders scripti → ElevenLabs seslendirme → video montaj. Bölüm-bazlı organizasyon, altyazı destekli.',
    category: 'egitim',
    audiences: ['egitmen', 'icerik'],
    tags: ['Udemy', 'eğitim videosu', 'NotebookLM', 'ElevenLabs'],
    status: 'aktif',
    highlight: true
  },
  {
    slug: 'kurs-mufredat-yapici',
    name: 'Kurs Müfredat Yapıcı',
    description: 'Konu başlığından tam müfredat çıkarır: bölümler, dersler, ödevler, quiz\'ler, öğrenme çıktıları. Udemy/Teachable formatına hazır.',
    category: 'egitim',
    audiences: ['egitmen'],
    tags: ['müfredat', 'Udemy', 'pedagoji'],
    status: 'aktif'
  },
  {
    slug: 'sinif-ici-ai-rubrigi',
    name: 'Sınıf İçi AI Rubriği',
    description: 'Öğretmenler için AI kullanım rubriği üretir: hangi görevde AI olur/olmaz, değerlendirme kriterleri, telif çerçevesi.',
    category: 'egitim',
    audiences: ['egitmen'],
    tags: ['eğitimde AI', 'rubrik', 'değerlendirme'],
    status: 'aktif'
  },
  {
    slug: 'quiz-uretici',
    name: 'Quiz Üretici',
    description: 'Verilen konudan otomatik 10-50 soru. Çoktan seçmeli, doğru-yanlış, açık uçlu. Bloom taksonomisine göre seviyelendirme.',
    category: 'egitim',
    audiences: ['egitmen'],
    tags: ['quiz', 'değerlendirme', 'Bloom'],
    status: 'aktif'
  },

  // İÇERİK ÜRETİMİ
  {
    slug: 'video-montaj',
    name: 'Video Montaj',
    description: 'FFmpeg ile video montaj, format dönüştürme, altyazı yakma, Reels (9:16) ve YouTube (16:9) çift formatta çıktı.',
    category: 'icerik',
    audiences: ['icerik', 'egitmen'],
    tags: ['FFmpeg', 'Reels', 'YouTube', 'altyazı'],
    status: 'aktif',
    highlight: true
  },
  {
    slug: 'reels-pipeline',
    name: 'Reels Pipeline',
    description: 'Script → Edge-TTS / ElevenLabs ses → aktör görseli → lip-sync → 9:16 montaj. Caption + 30 hashtag otomatik.',
    category: 'icerik',
    audiences: ['icerik'],
    tags: ['Reels', 'Shorts', 'lip-sync', 'TikTok'],
    status: 'aktif'
  },
  {
    slug: 'elevenlabs-tts',
    name: 'ElevenLabs Türkçe TTS',
    description: 'ElevenLabs entegrasyonu — Türkçe seslendirme, ses klonlama, çok karakterli diyalog. Edge-TTS fallback.',
    category: 'icerik',
    audiences: ['icerik', 'egitmen'],
    tags: ['ElevenLabs', 'TTS', 'Türkçe ses'],
    status: 'aktif'
  },
  {
    slug: 'islami-video-pipeline',
    name: 'İslami Video Pipeline',
    description: 'Ehl-i sünnet kaynaklı script → Türkçe seslendirme → Toonly/Doodly animasyon → 9:16 montaj. Manevi içerik için.',
    category: 'icerik',
    audiences: ['icerik'],
    tags: ['islami', 'whiteboard', 'Toonly', 'Doodly'],
    status: 'aktif'
  },
  {
    slug: 'podcast-plani',
    name: 'Podcast Planı',
    description: 'Konu başlığından sezon planı, bölüm yapısı, soru listesi, gösteri notları, transkript çıkarımı.',
    category: 'icerik',
    audiences: ['icerik'],
    tags: ['podcast', 'sezon planı', 'transkript'],
    status: 'aktif'
  },

  // SOSYAL MEDYA
  {
    slug: 'instagram-manager',
    name: 'Instagram Manager',
    description: 'Hesap yönetimi, gönderi/reel/story paylaşımı, AI ile caption ve hashtag üretimi, performans analizi, zamanlama. 2FA destekli.',
    category: 'sosyal',
    audiences: ['icerik', 'girisimci'],
    tags: ['Instagram', 'instagrapi', '2FA'],
    status: 'aktif'
  },
  {
    slug: 'instagram-orkestrasyon',
    name: 'Instagram Orkestrasyon',
    description: 'Master pipeline: araştırma → script → video → caption → paylaşım. Haftalık plan + içerik takvimi otomasyonu.',
    category: 'sosyal',
    audiences: ['icerik'],
    tags: ['pipeline', 'haftalık plan', 'batch'],
    status: 'aktif'
  },
  {
    slug: 'caption-hashtag',
    name: 'Caption & Hashtag',
    description: 'Görsel/video bağlamından Türkçe caption + 30 hashtag üretir. Marka tonuna göre özelleştirilebilir.',
    category: 'sosyal',
    audiences: ['icerik'],
    tags: ['caption', 'hashtag', 'Türkçe'],
    status: 'aktif'
  },
  {
    slug: 'sosyal-medya-takvimi',
    name: 'Sosyal Medya Takvimi',
    description: 'Aylık içerik takvimi planlayıcı: tema, format, platform, optimum zaman. Excel/Notion çıktısı.',
    category: 'sosyal',
    audiences: ['icerik', 'girisimci'],
    tags: ['takvim', 'plan', 'Notion'],
    status: 'aktif'
  },

  // AI & OTOMASYON
  {
    slug: 'kesif-orkestrator',
    name: 'Keşif Orkestratör',
    description: 'KEŞİF ekosistem orkestratörü — 70+ MCP, 300+ skill ve 11+ pipeline\'ı koordine eder. Karmaşık çok adımlı görevlerin yönetimi.',
    category: 'ai-otomasyon',
    audiences: ['gelistirici'],
    tags: ['CEO', 'multi-agent', 'orkestrasyon'],
    status: 'aktif',
    highlight: true
  },
  {
    slug: 'mcp-orkestratori',
    name: 'MCP Orkestratörü',
    description: 'Tek registry\'den Claude Desktop + Code + Cursor için MCP sync. Kategorize, .env ile secret yönetimi, dry-run modu.',
    category: 'ai-otomasyon',
    audiences: ['gelistirici'],
    tags: ['MCP', 'sync', 'multi-tool'],
    status: 'aktif'
  },
  {
    slug: 'capraz-kontrol',
    name: 'Çapraz Kontrol',
    description: 'Multi-LLM kod review CLI. Aynı dosyayı Claude + Gemini + Codex + Qwen\'a inceletir, birleşik Markdown rapor üretir.',
    category: 'ai-otomasyon',
    audiences: ['gelistirici'],
    tags: ['multi-LLM', 'kod review', 'CLI'],
    status: 'aktif'
  },
  {
    slug: 'mirofish-tahmin',
    name: 'MiroFish Tahmin',
    description: 'KEŞİF Stratejik Karar Simülasyonu — multi-agent senaryo tahmin motoru. Kamuoyu, finansal etki, danışan davranış simülasyonu.',
    category: 'ai-otomasyon',
    audiences: ['gelistirici', 'girisimci'],
    tags: ['simülasyon', 'multi-agent', 'swarm'],
    status: 'aktif'
  },

  // ARAŞTIRMA & ANALİZ
  {
    slug: 'notebooklm',
    name: 'NotebookLM Asistanı',
    description: 'Notebook oluşturma, YouTube/web/PDF kaynak ekleme, soru-cevap analizi, podcast/infografik/mind-map/flashcard üretimi.',
    category: 'arastirma',
    audiences: ['egitmen', 'icerik'],
    tags: ['NotebookLM', 'araştırma', 'flashcard'],
    status: 'aktif'
  },
  {
    slug: 'yt-search',
    name: 'YouTube Arama',
    description: 'YouTube\'da video arama, metadata çekme, sonuçları tablo olarak listeleme. yt-dlp tabanlı, hızlı ve toplu.',
    category: 'arastirma',
    audiences: ['icerik'],
    tags: ['YouTube', 'yt-dlp', 'metadata'],
    status: 'aktif'
  },
  {
    slug: 'yt-notebooklm-pipeline',
    name: 'YT-NotebookLM Pipeline',
    description: 'Tek prompt ile YouTube scrape → NotebookLM\'e kaynak yükleme → analiz → içerik üretimi.',
    category: 'arastirma',
    audiences: ['icerik', 'egitmen'],
    tags: ['YouTube', 'NotebookLM', 'pipeline'],
    status: 'aktif'
  },
  {
    slug: 'pubmed-arastirma',
    name: 'PubMed Araştırma',
    description: 'Tıbbi/akademik makale arama, abstract analizi, sistematik derleme yardımcısı. PubMed + Semantic Scholar.',
    category: 'arastirma',
    audiences: ['klinisyen', 'egitmen'],
    tags: ['PubMed', 'akademik', 'sistematik derleme'],
    status: 'aktif'
  },

  // MANEVİ
  {
    slug: 'maneviyat-rag',
    name: 'Maneviyat RAG',
    description: 'Ehl-i sünnet kaynaklarından (Calibre kütüphanesi + Ollama) RAG arama ve manevi danışmanlık asistanı.',
    category: 'manevi',
    audiences: ['aile', 'icerik'],
    tags: ['ehl-i sünnet', 'RAG', 'Ollama'],
    status: 'aktif'
  },
  {
    slug: 'tahkik-asistani',
    name: 'Tahkik Asistanı',
    description: 'Bilgi/iddia/hadis doğrulama, kaynak teyit, ehl-i sünnet usulüne uygun tahkik akışı.',
    category: 'manevi',
    audiences: ['aile'],
    tags: ['tahkik', 'kaynak teyit'],
    status: 'beta'
  },
  {
    slug: 'zikir-takip',
    name: 'Zikir & Vird Takibi',
    description: 'Günlük zikir, dua, virdler için takip ve hatırlatma planlayıcı. Manevi alışkanlık inşa aracı.',
    category: 'manevi',
    audiences: ['aile'],
    tags: ['zikir', 'alışkanlık'],
    status: 'aktif'
  },

  // MARKA & PAZARLAMA
  {
    slug: 'kesif-marka-tonu',
    name: 'KEŞİF Marka Tonu',
    description: 'KEŞİF Akademi marka kimliği ve dil rehberi — sade Türkçe, empatik, bilim+manevi sentez. İçerik üretiminde tutarlılık.',
    category: 'marka',
    audiences: ['icerik'],
    tags: ['marka', 'ton', 'KEŞİF'],
    status: 'aktif'
  },
  {
    slug: 'biyografi-yazari',
    name: 'Biyografi Yazarı',
    description: 'CV/LinkedIn/About sayfası için kişisel biyografi yazımı. 3 farklı uzunluk (kısa/orta/detay) ve ton seçenekli.',
    category: 'marka',
    audiences: ['girisimci', 'icerik'],
    tags: ['CV', 'LinkedIn', 'biyografi'],
    status: 'aktif'
  },
  {
    slug: 'landing-page-metni',
    name: 'Landing Page Metni',
    description: 'Hizmet/ürün landing sayfası için hero, value prop, sosyal kanıt, CTA metinleri. Türkçe + dönüşüm odaklı.',
    category: 'marka',
    audiences: ['girisimci'],
    tags: ['landing', 'copy', 'CRO'],
    status: 'aktif'
  },

  // TASARIM
  {
    slug: 'm3-design-system',
    name: 'M3 Design System',
    description: 'Material Design 3 — KEŞİF Akademi web/mobil/desktop UI üretiminde kullan. 30+ component, 15 type scale, palette üretici.',
    category: 'tasarim',
    audiences: ['gelistirici'],
    tags: ['Material 3', 'design system', 'palette'],
    status: 'aktif'
  },
  {
    slug: 'thumbnail-uretici',
    name: 'YouTube Thumbnail Üretici',
    description: 'Video başlığından çarpıcı thumbnail tasarımı. Renk paleti, tipografi, yüz ifadesi briefing\'i.',
    category: 'tasarim',
    audiences: ['icerik'],
    tags: ['thumbnail', 'YouTube', 'tasarım'],
    status: 'aktif'
  },

  // YAZILIM
  {
    slug: 'prp-framework',
    name: 'PRP Framework',
    description: 'Plan-Research-Plan — feature geliştirme öncesi codebase analizi, pattern araştırma, blueprint, güven skoru.',
    category: 'yazilim',
    audiences: ['gelistirici'],
    tags: ['PRP', 'codebase', 'blueprint'],
    status: 'aktif'
  },
  {
    slug: 'context-engineering',
    name: 'Context Engineering',
    description: 'Büyük özellik geliştirme öncesi kapsamlı bağlam hazırlığı. INITIAL.md feature spec + PRP + examples.',
    category: 'yazilim',
    audiences: ['gelistirici'],
    tags: ['context', 'PRP', 'spec'],
    status: 'aktif'
  },
  {
    slug: 'prompt-muhendisligi',
    name: 'Prompt Mühendisliği',
    description: 'Karmaşık görevler için yapılandırılmış prompt tasarımı. Few-shot, chain-of-thought, role-play kalıpları.',
    category: 'yazilim',
    audiences: ['gelistirici', 'icerik'],
    tags: ['prompt', 'few-shot', 'CoT'],
    status: 'aktif'
  },
  {
    slug: 'os-framework-5',
    name: 'OS Framework 5',
    description: '5 klasör + 20 araç ile ürün-yaşam-döngüsü iskeleti — Build/Think/Make/Ship/Grow. AI solo founder için tam üretim sistemi.',
    category: 'yazilim',
    audiences: ['girisimci', 'gelistirici'],
    tags: ['solo founder', 'OS', 'product'],
    status: 'aktif'
  },

  // HUKUK
  {
    slug: 'avukat-tara',
    name: 'Avukat Tarama',
    description: 'Proje hukuki uyumluluk taraması: KVKK, GDPR, e-ticaret (6563), güvenlik (OWASP), telif (FSEK), çocuk koruması (COPPA).',
    category: 'hukuk',
    audiences: ['gelistirici', 'girisimci'],
    tags: ['KVKK', 'GDPR', 'OWASP', 'FSEK'],
    status: 'aktif',
    highlight: true
  },
  {
    slug: 'aydinlatma-metni-uretici',
    name: 'Aydınlatma Metni Üretici',
    description: 'KVKK 6698 m.10 uyumlu aydınlatma metni şablonu üretir. Sektör ve veri tipine göre özelleştirilir.',
    category: 'hukuk',
    audiences: ['girisimci', 'klinisyen'],
    tags: ['KVKK', 'aydınlatma', 'şablon'],
    status: 'aktif'
  },
  {
    slug: 'sozlesme-taslagi',
    name: 'Sözleşme Taslağı',
    description: 'NDA, hizmet, danışmanlık, mesafeli satış sözleşme taslakları. Türk hukuku uyumlu.',
    category: 'hukuk',
    audiences: ['girisimci'],
    tags: ['sözleşme', 'NDA', 'mesafeli satış'],
    status: 'aktif'
  },

  // VERİMLİLİK
  {
    slug: 'token-optimizer',
    name: 'Token Optimizer',
    description: 'Uzun prompt ve dosyaları Claude/Gemini/Groq\'a göndermeden önce sıkıştırır. %40-60 input token tasarrufu.',
    category: 'verimlilik',
    audiences: ['gelistirici'],
    tags: ['token', 'maliyet', 'sıkıştırma'],
    status: 'aktif'
  },
  {
    slug: 'hybrid-memory',
    name: 'Hibrit Bellek',
    description: 'LLM Wiki + Cognee tarzı hibrit hafıza — Vector + Graph + Relational üçlüsü. Oturumlar arası kalıcı bellek.',
    category: 'verimlilik',
    audiences: ['gelistirici'],
    tags: ['memory', 'RAG', 'Cognee'],
    status: 'aktif'
  },
  {
    slug: 'auto-code-quality',
    name: 'Auto Code Quality',
    description: 'Kod yazıldıktan sonra otomatik kalite kontrolü: tekrar tespiti, karmaşıklık, isimlendirme, kullanılmayan import.',
    category: 'verimlilik',
    audiences: ['gelistirici'],
    tags: ['kalite', 'lint', 'PostToolUse'],
    status: 'aktif'
  },

  // ALTYAPI
  {
    slug: 'git-guard',
    name: 'Git Guard',
    description: 'Tehlikeli git komutlarını engeller (force push, hard reset, branch delete). Hook-based güvenlik katmanı.',
    category: 'altyapi',
    audiences: ['gelistirici'],
    tags: ['git', 'güvenlik', 'hook'],
    status: 'aktif'
  },
  {
    slug: 'notion-master',
    name: 'Notion Master',
    description: 'KEŞİF master sayfaya otomatik olay kaydı. Notion Bridge ile blok ekleme, haftalık rapor.',
    category: 'altyapi',
    audiences: ['gelistirici'],
    tags: ['Notion', 'sync', 'bridge'],
    status: 'aktif'
  },
  {
    slug: 'fewer-permission-prompts',
    name: 'Permission Optimizer',
    description: 'Geçmiş transcriptleri tarayıp tekrarlayan tool çağrılarını allowlist\'e ekler. Permission prompt yorgunluğunu azaltır.',
    category: 'altyapi',
    audiences: ['gelistirici'],
    tags: ['permissions', 'allowlist', 'verim'],
    status: 'aktif'
  },
  {
    slug: 'skill-creator',
    name: 'Skill Creator',
    description: 'Yeni skill oluşturma + mevcut skill geliştirme + eval testi + varyans analizi. Skill ekosistemi inşa aracı.',
    category: 'altyapi',
    audiences: ['gelistirici'],
    tags: ['skill', 'meta', 'eval'],
    status: 'aktif'
  }
];
