/* Mustafa'nın eğitim ve danışmanlık programları */

export type Program = {
  slug: string;
  category: 'kurumsal' | 'birey' | 'klinik' | 'manevi';
  title: string;
  duration: string;
  audience: string;
  format: string;
  desc: string;
  outcomes: string[];
  cta: string;
  ctaSubject: string;
  accent: string;
  featured?: boolean;
};

export const programs: Program[] = [
  {
    slug: 'klinik-bdt-egitimi',
    category: 'klinik',
    title: 'Bağımlılıkta Bilişsel Davranışçı Yaklaşım',
    duration: '4 modül × 2 saat',
    audience: 'Sağlık çalışanları, terapistler, danışmanlar',
    format: 'Online veya yüz yüze',
    desc: 'Bağımlılık tedavi merkezinde 7+ yıl uygulanmış klinik vakalardan damıtılmış BDT (CBT) protokolleri. SAMBA ile entegre, Türk hastaya özel düzenlenmiş.',
    outcomes: ['BDT temel oturumu yapısı', 'Tetikleyici haritası çıkarma', 'Düşünce kaydı tekniği', 'Relaps önleme planı', 'Aile entegrasyonu'],
    cta: 'Klinik Eğitim Talebi',
    ctaSubject: 'Eğitim — Bağımlılıkta BDT',
    accent: '#16a34a'
  },
  {
    slug: 'kurumsal-ai-atolyesi',
    category: 'kurumsal',
    title: 'Sağlık Kurumları için Yapay Zeka Atölyesi',
    duration: '1 gün (6 saat) yoğun atölye',
    audience: 'Klinik yöneticileri, hekimler, sağlık girişimcileri',
    format: 'Yüz yüze (Türkiye geneli) veya online',
    desc: 'Yapay zekayı slogan olarak değil, kliniğin günlük operasyonuna entegre eden uygulamalı atölye. Randevu otomasyonu, KVKK uyumu, hasta iletişimi ve içerik üretimi senaryoları üzerinden ilerlenir.',
    outcomes: ['Kurumun AI hazırlık skoru', '3 hızlı kazanç akışı', 'KVKK risk haritası', 'Pilot proje önerisi', 'Ekip için sürdürülebilir iş akışı'],
    cta: 'Kurumsal Atölye Al',
    ctaSubject: 'Eğitim — Sağlık Kurumları AI Atölyesi',
    accent: '#219295',
    featured: true
  },
  {
    slug: 'takimlar-icin-ai',
    category: 'kurumsal',
    title: 'Takımlar için Türkçe AI Pratiği',
    duration: '4 hafta × 90 dakika',
    audience: 'Beyaz yaka ekipler, departman çalışanları',
    format: 'Online canlı + ödevli',
    desc: 'ChatGPT, Claude, Gemini gibi araçların ekibin kendi iş akışına nasıl gömüleceği. Hayali demolar değil, katılımcının haftalık raporundan bir tane gerçek vakayla ilerlenir.',
    outcomes: ['Türkçe prompt rehberi', 'Departman bazlı şablon kütüphanesi', 'Veri sızıntısından korunma', 'Verim ölçümü çerçevesi'],
    cta: 'Takım Eğitimi İste',
    ctaSubject: 'Eğitim — Takımlar için AI',
    accent: '#0ea5e9'
  },
  {
    slug: 'egitimcinin-egitimi-ai',
    category: 'kurumsal',
    title: 'Eğitimcinin Eğitimi: AI ile Öğretmek',
    duration: '5 gün (toplam 20 saat)',
    audience: 'Öğretmenler, akademisyenler, kurum içi eğitmenler',
    format: 'Hybrid (3 yüz yüze + 2 online)',
    desc: 'AI\'ı sınıfta verim aracı olarak kullanmak isteyen eğitimcilerin sahaya çıkmadan önce ihtiyaç duyduğu araç seti, etik çerçeve ve değerlendirme yöntemleri.',
    outcomes: ['Sınıf içi AI rubriği', 'Öğrenciye gizli kalmayan değerlendirme', 'Müfredat entegrasyon planı', 'KVKK ve telif çerçevesi'],
    cta: 'Eğitimci Programı',
    ctaSubject: 'Eğitim — Eğitimcinin Eğitimi',
    accent: '#7c3aed'
  },
  {
    slug: 'maneviyat-rehberlik',
    category: 'manevi',
    title: 'Maneviyat ve Yaşam Rehberliği',
    duration: '8 oturum × 50 dakika',
    audience: 'Bireysel danışanlar, yaşam dönemecindeki yetişkinler',
    format: 'Online (Zoom) veya yüz yüze (İstanbul)',
    desc: 'Manevi farkındalık çerçevesinde bilişsel ve duygusal düzenlemeyi birleştiren bireysel rehberlik. Klinik müdahale değildir; iyilik halini destekleyen yapılandırılmış görüşme zinciridir.',
    outcomes: ['Kişisel değer haritası', 'Tetikleyici-tepki defteri', 'Manevi pratik takvimi', 'İçsel sözleşme metni'],
    cta: 'Bireysel Görüşme',
    ctaSubject: 'Eğitim — Maneviyat Rehberlik',
    accent: '#b8a920'
  },
  {
    slug: 'aile-baginda-bdt',
    category: 'klinik',
    title: 'Bağımlı Yakınları için Aile Programı',
    duration: '6 hafta × 1.5 saat',
    audience: 'Bağımlı bireylerin eş, ebeveyn, kardeşleri',
    format: 'Grup oturumu (online) — 6-8 katılımcı',
    desc: 'Bağımlılığın aileye yansıyan dalgaları için yapılandırılmış destek. SAMBA aile modülünden uyarlanmış, suçlamadan/utançtan uzak, somut adımlar üzerine kurulu.',
    outcomes: ['Sağlıklı sınır metni', 'Krız anı protokolü', 'İletişim yenileme planı', 'Kendine bakım çizelgesi'],
    cta: 'Aile Programı',
    ctaSubject: 'Eğitim — Aile Programı',
    accent: '#ec4899'
  },
  {
    slug: 'lunch-and-learn',
    category: 'kurumsal',
    title: 'Lunch & Learn — 90 Dakikada AI Açılışı',
    duration: '90 dakika',
    audience: 'AI\'a yeni başlayan kurumlar, departmanlar',
    format: 'Online (Teams/Zoom) veya yüz yüze',
    desc: 'Kurumun yapay zekayla ilk temasını hızlı, eğlenceli ve riski düşürerek kuran giriş oturumu. Yöneticilere değil, ekibe konuşur. Karar değil, deneyim için tasarlandı.',
    outcomes: ['Demo görmek değil, kullanmak', '3 anında uygulanabilir akış', 'Yanlış anlamaların temizlenmesi', 'Sıradaki adım için netlik'],
    cta: 'Lunch & Learn Talep',
    ctaSubject: 'Eğitim — Lunch & Learn',
    accent: '#d4a574'
  },
  {
    slug: 'koculuk-program',
    category: 'birey',
    title: 'Yaşam ve Kariyer Koçluğu',
    duration: '12 hafta × 50 dakika',
    audience: 'Yöneticiler, kariyer dönemecindeki profesyoneller',
    format: 'Bireysel (online)',
    desc: 'ICF prensipli, hedef odaklı bireysel koçluk. NLP araçları, motivasyonel görüşme ve manevi farkındalık çerçevesini birleştirir. Terapi değil; eyleme dönüştürme süreci.',
    outcomes: ['12 hafta içinde tanımlı 3 hedef', 'Haftalık eylem planları', 'İç iletişim yenileme', 'Geri bildirim ve düzeltme döngüsü'],
    cta: 'Koçluk Görüşmesi',
    ctaSubject: 'Eğitim — Koçluk Programı',
    accent: '#a855f7'
  }
];

export const categoryLabels: Record<Program['category'], string> = {
  kurumsal: 'Kurumsal',
  birey: 'Bireysel',
  klinik: 'Klinik & Sağlık',
  manevi: 'Manevi & İçsel'
};
