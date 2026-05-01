/* Mustafa'nın çalıştığı / iş birliği yaptığı / eğitim aldığı kurumlar */

export type Institution = {
  name: string;
  category: 'klinik' | 'akademik' | 'egitim' | 'platform';
  city?: string;
  shortLabel?: string;
};

export const institutions: Institution[] = [
  // Klinik & Sağlık (BAHAR ekosistemi)
  { name: 'BAHAR Bağımlılık Tedavi Merkezi', category: 'klinik', city: 'İstanbul', shortLabel: 'BAHAR' },
  { name: 'Erenköy Ruh ve Sinir Hastalıkları EAH', category: 'klinik', city: 'İstanbul', shortLabel: 'Erenköy RH' },
  { name: 'Çapa Tıp Fakültesi', category: 'klinik', city: 'İstanbul', shortLabel: 'Çapa' },
  { name: 'Cerrahpaşa Tıp Fakültesi', category: 'klinik', city: 'İstanbul', shortLabel: 'Cerrahpaşa' },
  { name: 'Kocaeli Üniversitesi Tıp Fakültesi', category: 'klinik', city: 'Kocaeli', shortLabel: 'Kocaeli Tıp' },
  { name: 'Anadolu Kuzey Kamu Hastaneleri Birliği', category: 'klinik', shortLabel: 'Anadolu Kuzey KHB' },

  // Akademik (sertifika veren üniversiteler)
  { name: 'Muğla Sıtkı Koçman Üniversitesi', category: 'akademik', city: 'Muğla', shortLabel: 'MSKÜ' },
  { name: 'Nişantaşı Üniversitesi', category: 'akademik', city: 'İstanbul', shortLabel: 'Nişantaşı Üni.' },
  { name: 'Doğuş Üniversitesi', category: 'akademik', city: 'İstanbul', shortLabel: 'Doğuş Üni.' },
  { name: 'Anadolu Üniversitesi', category: 'akademik', city: 'Eskişehir', shortLabel: 'Anadolu Üni.' },
  { name: 'Uludağ Üniversitesi', category: 'akademik', city: 'Bursa', shortLabel: 'Uludağ Üni.' },
  { name: 'Toros Üniversitesi', category: 'akademik', city: 'Mersin', shortLabel: 'Toros Üni.' },
  { name: 'Üsküdar Üniversitesi', category: 'akademik', city: 'İstanbul', shortLabel: 'Üsküdar Üni.' },
  { name: 'Işık Üniversitesi', category: 'akademik', city: 'İstanbul', shortLabel: 'Işık Üni.' },
  { name: 'İstanbul Gelişim Üniversitesi', category: 'akademik', city: 'İstanbul', shortLabel: 'Gelişim Üni.' },

  // Eğitim platformları
  { name: 'Life Akademi', category: 'egitim', shortLabel: 'Life Akademi' },
  { name: 'Liderlik Okulu', category: 'egitim', shortLabel: 'Liderlik Okulu' },
  { name: 'İzgören Akademi', category: 'egitim', shortLabel: 'İzgören' },
  { name: 'Kariyer Online', category: 'egitim', shortLabel: 'Kariyer Online' },
  { name: 'NEWSPDR', category: 'egitim', shortLabel: 'NEWSPDR' },
  { name: 'Milli Eğitim Bakanlığı', category: 'egitim', shortLabel: 'MEB' },
  { name: 'BAUGO', category: 'egitim', shortLabel: 'BAUGO' },
  { name: 'ACORN International', category: 'egitim', shortLabel: 'ACORN' },

  // Yayın platformları
  { name: 'Udemy', category: 'platform', shortLabel: 'Udemy' },
  { name: 'YouTube', category: 'platform', shortLabel: 'YouTube' },
  { name: 'Substack', category: 'platform', shortLabel: 'Substack' },
  { name: 'Medium', category: 'platform', shortLabel: 'Medium' },
  { name: 'LinkedIn Learning', category: 'platform', shortLabel: 'LinkedIn Learning' }
];

export const institutionLabels: Record<Institution['category'], string> = {
  klinik: 'Klinik & Sağlık',
  akademik: 'Akademik',
  egitim: 'Eğitim',
  platform: 'Yayın Platformları'
};
