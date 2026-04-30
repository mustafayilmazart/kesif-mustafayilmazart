// Site genelinde kullanılan Schema.org JSON-LD verileri
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://mustafayilmaz.art/#person',
  name: 'Mustafa Yılmaz',
  alternateName: 'kpmustafayilmaz',
  url: 'https://mustafayilmaz.art',
  image: 'https://mustafayilmaz.art/profile.jpg',
  sameAs: [
    'https://www.linkedin.com/in/kpmustafayilmaz',
    'https://github.com/mustafayilmazart',
    'https://medium.com/@kp.mustafayilmaz',
    'https://kesiforg.substack.com',
    'https://www.udemy.com/user/kesfet-kendini/',
    'https://youtube.com/@kesiforg'
  ],
  jobTitle: 'Danışman · AI Engineer · Eğitmen · AI Artist',
  description:
    'Psikiyatri hemşiresi, Psikoloji (Klinik) yüksek lisansı, AI Engineer ve KEŞİF Akademi kurucusu. Bağımlılık danışmanlığı, kurumsal AI otomasyonu ve dijital sağlık ürünleri geliştiriyor.',
  nationality: { '@type': 'Country', name: 'Türkiye' },
  worksFor: {
    '@type': 'Organization',
    name: 'BAHAR Bağımlılık Tedavi Merkezi',
    url: 'https://erenkoyrh.saglik.gov.tr'
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Muğla Sıtkı Koçman Üniversitesi', description: 'Hemşirelik Lisans' },
    { '@type': 'CollegeOrUniversity', name: 'Nişantaşı Üniversitesi', description: 'Psikoloji (Klinik) Yüksek Lisans' },
    { '@type': 'CollegeOrUniversity', name: 'Doğuş Üniversitesi', description: 'Psikoloji (Klinik) Yüksek Lisans' },
    { '@type': 'CollegeOrUniversity', name: 'Anadolu Üniversitesi', description: 'Web Tasarım ve Kodlama Ön Lisans' }
  ],
  knowsAbout: [
    'Psikoloji (Klinik)',
    'Bağımlılık Danışmanlığı',
    'Bilişsel Davranışçı Terapi',
    'NLP',
    'Yapay Zeka',
    'AI Engineering',
    'Vibe Coding',
    'MCP',
    'KVKK Uyumluluk',
    'Dijital Sağlık',
    'Maneviyat Danışmanlığı',
    'Üretici Yapay Zeka'
  ],
  knowsLanguage: ['tr', 'en'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NLP Trainer (Eğitmenlik)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NLP Master Practitioner' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Aile Danışmanlığı (Toros Üniversitesi)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Pozitif Psikoterapi (Işık Üniversitesi)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Oyun Terapisi Uygulayıcı (Uludağ Üniversitesi)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Manevi Danışmanlık' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Yaşam Koçluğu (Life Akademi)' }
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'bilgi@mustafayilmaz.art',
    contactType: 'customer service',
    availableLanguage: ['tr', 'en']
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://mustafayilmaz.art/#website',
  url: 'https://mustafayilmaz.art',
  name: 'mustafayilmaz.art',
  description: 'Mustafa Yılmaz — Kişisel marka portföyü',
  inLanguage: 'tr-TR',
  publisher: { '@id': 'https://mustafayilmaz.art/#person' }
};

export const navigationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: ['Hikayem', 'Uzmanlık', 'AI Danışmanlık', 'Yazılımlar', 'Blog', 'Art'],
  url: [
    'https://mustafayilmaz.art/#hakkimda',
    'https://mustafayilmaz.art/#uzmanlik',
    'https://mustafayilmaz.art/ai-danismanligi',
    'https://mustafayilmaz.art/yazilimlar',
    'https://mustafayilmaz.art/blog',
    'https://mustafayilmaz.art/art'
  ]
};
