/* Vaka çalışmaları — kurumsal/klinik AI dönüşüm projelerinden anonim örnekler */

export type CaseStudy = {
  slug: string;
  category: 'klinik' | 'kurumsal' | 'egitim' | 'icerik';
  title: string;
  client: string; // Anonim ya da kurumun açık ismiyle
  year: string;
  duration: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  metrics: { label: string; value: string }[];
  tools: string[];
  testimonial?: { quote: string; attribution: string };
  status: 'live' | 'tamamlandi' | 'devam-ediyor';
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'iyilikhali-platformu',
    category: 'klinik',
    title: 'Sağlık Profesyonelleri için Bütünsel Platform İnşası',
    client: 'İyilik Hali Platformu',
    year: '2024 — Devam Ediyor',
    duration: '8+ ay',
    challenge:
      'Türkiye\'de ruh sağlığı profesyonellerinin kendi dijital varlıklarını, danışan takibini ve ödeme akışlarını tek çatı altında çözebilecekleri KVKK uyumlu bir platform yoktu.',
    approach: [
      'Klinik tecrübeden edinilen gözlemle kullanıcı yolculuğu haritası çıkarıldı',
      'KVKK 6698 m.6 (özel nitelikli sağlık verisi) çerçevesinde veri mimarisi tasarlandı',
      'Terapist + danışan iki yönlü panel: randevu, seans notu, ödev, ödeme akışları',
      'Dijital sağlık çözümleri için Türkiye\'ye özel uyarlamalar'
    ],
    outcome: [
      'Production\'da 7/24 çalışan platform',
      'Ruh sağlığı profesyonellerine özel dijital altyapı',
      'KVKK uyumlu danışan kayıt ve veri saklama sistemi',
      'Sürekli geliştirme — yeni modüller eklenmekte'
    ],
    metrics: [
      { label: 'Domain', value: 'iyilikhali.tr' },
      { label: 'Geliştirme', value: '8+ ay' },
      { label: 'Teknoloji', value: 'KVKK uyumlu' }
    ],
    tools: ['Klinik gözlem', 'KVKK uyumlu altyapı', 'Çift yönlü panel', 'Production deploy'],
    status: 'live'
  },
  {
    slug: 'terapist-pro-platform',
    category: 'klinik',
    title: 'Ruh Sağlığı Profesyonelleri İçin Klinik Yönetim',
    client: 'Terapist Pro',
    year: '2024 — Devam Ediyor',
    duration: '6+ ay',
    challenge:
      'Bireysel çalışan terapistler ve küçük klinikler için klinik yönetim, danışan takibi ve dijital iş akışı sağlayan, Türkçe arayüzlü ve Türkiye odaklı bir çözüm gerekliydi.',
    approach: [
      'Terapistlerin ihtiyaçlarına özel modüller: seans notu, randevu, ödev, fatura',
      'KVKK uyumlu danışan kayıt sistemi',
      'Tamamen Türkçe arayüz, Türkiye\'ye özel kuralları',
      'Bireysel çalışan profesyonellere uygun fiyatlandırma'
    ],
    outcome: [
      'Production\'da çalışan platform',
      'Türkçe arayüzle klinik yönetim',
      'Bireysel terapistler için sürdürülebilir altyapı'
    ],
    metrics: [
      { label: 'Domain', value: 'terapist.io' },
      { label: 'Hedef', value: 'Bireysel terapistler' },
      { label: 'Pazar', value: 'Türkiye' }
    ],
    tools: ['Klinik yönetim', 'KVKK', 'Türkçe UX', 'Fiyatlandırma'],
    status: 'live'
  },
  {
    slug: 'kesif-akademi-3700',
    category: 'egitim',
    title: 'Türkçe Dijital Eğitim Akademisi Kurulumu',
    client: 'KEŞİF Akademi',
    year: '2018 — Devam Ediyor',
    duration: '6+ yıl',
    challenge:
      'Bağımlılık, manevi rehberlik, kişisel gelişim alanlarında Türkçe ücretli/ücretsiz online eğitim altyapısı eksikliği. Klinik bilginin akademik dilden sıyrılıp halka ulaşması.',
    approach: [
      'Udemy + YouTube üzerinde paralel kanal kurgusu',
      'KEŞİF marka tonu (sade Türkçe + empatik + bilim+manevi sentez)',
      'Bağımlılık nörobilimini halka uygun hale getiren psikoeğitim modülleri',
      'Sürekli içerik üretimi için Claude Code skill koleksiyonuyla destek'
    ],
    outcome: [
      '3.724 öğrenci',
      '233 değerlendirme + yorum',
      'Yıllar içinde sürdürülebilir eğitim ekosistemi',
      'Sınıflandırılmış içerik kütüphanesi (Udemy + YouTube)'
    ],
    metrics: [
      { label: 'Öğrenci', value: '3.724+' },
      { label: 'Değerlendirme', value: '233' },
      { label: 'Süre', value: '6+ yıl' }
    ],
    tools: ['Udemy', 'YouTube', 'Edge-TTS', 'Video pipeline'],
    testimonial: {
      quote: 'İçerik derli toplu, çok iyi şekilde düzenli olması ve daha anlaşılır olması benim için çok iyiydi. Hocamızın emeğine sağlık.',
      attribution: 'Fazilet O. — Udemy değerlendirmesi'
    },
    status: 'live'
  },
  {
    slug: 'bdt-modul-uretimi',
    category: 'klinik',
    title: 'Bağımlılık Tedavisinde Dijital Psikoeğitim',
    client: 'Bağımlılık tedavi merkezi (anonim vakalardan damıtılmış)',
    year: '2023 — Devam Ediyor',
    duration: '12+ ay',
    challenge:
      'Yatan hastalar için kanıta dayalı BDT (CBT) modüllerinin, hasta hızında ilerleyebileceği video formatında, Türkçeye özel anlatımla sunulması gerekliydi.',
    approach: [
      '10 BDT PDF\'inden ChromaDB tabanlı RAG sistemiyle modül üretimi',
      'Edge-TTS Türkçe seslendirme (tr-TR-EmelNeural)',
      'Bölüm bazlı görseller (HOOK / ANA FİKİR / DETAY / PRATİK / KAPANIŞ)',
      'FFmpeg ile 1920×1080 + 1080×1920 çift format çıktı',
      '5 modül × ~5 dakika yapılandırılmış format'
    ],
    outcome: [
      '5 modül yayına hazır',
      'Yatan hastalar kendi ritimlerinde ilerleyebiliyor',
      'Klinisyen iş yükünde azalma',
      'YouTube + Reels eş zamanlı dağıtım'
    ],
    metrics: [
      { label: 'Modül', value: '5' },
      { label: 'Format', value: '16:9 + 9:16' },
      { label: 'Süre/modül', value: '~5 dk' }
    ],
    tools: ['ChromaDB RAG', 'Edge-TTS', 'CF FLUX', 'FFmpeg', 'Brain-X'],
    status: 'live'
  }
];

export const caseStudyCategories: Record<CaseStudy['category'], string> = {
  klinik: 'Klinik & Sağlık',
  kurumsal: 'Kurumsal AI',
  egitim: 'Eğitim',
  icerik: 'İçerik & Pipeline'
};
