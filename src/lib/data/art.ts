/* Sanat portfolyosu — Suno müzikleri ve AI görseller */

export type Track = {
  slug: string;
  title: string;
  genre: string;
  mood: string;
  description: string;
  date: string;
  duration: string;
  src: string;        // /art/music/<file>.mp3
  cover: string;      // /art/covers/<file>.jpg veya gradient string
  video?: string;     // YouTube video ID — varsa kapak tıkla-oynat klibe dönüşür
  tags: string[];
  lyrics?: string;
};

export type Artwork = {
  slug: string;
  title: string;
  category: string;
  description: string;
  date: string;
  src: string;        // /art/images/<file>.jpg
  width: number;
  height: number;
  tools: string[];
  tags: string[];
};

export const tracks: Track[] = [
  {
    slug: "arayis",
    title: "Arayış",
    genre: "Manevi Rap",
    mood: "İçsel Yolculuk",
    description:
      "Karanlıktan aydınlığa, yalnızlıktan huzura, kayboluştan kendini bulmaya uzanan içsel yolculuğun sinematik anlatımı. Zirveye çıkmak, bulutların üstünde durup nefes almak... aslında dışarıda değil, içeride başlayan bir yolculuğun sonu. Söz: Mustafa Yılmaz · Sanatçı: Kâşif · Prodüksiyon: AI.",
    date: "2026-06-07",
    duration: "2:46",
    src: "/art/music/arayis.mp3",
    cover: "/art/covers/arayis.jpg",
    video: "OdtSXX-m0q0",
    tags: ["rap", "manevi", "içsel yolculuk", "Kâşif", "AI müzik"],
  },
  {
    slug: "tabut",
    title: "Tabut",
    genre: "Manevi Rap",
    mood: "Tefekkür",
    description:
      "Ölümün, hesap gününün ve Rabbe dönüşün sessiz bir hatırlatması. \"Dört tahta duvar, son durak son bineğim...\" Söz: Mustafa Yılmaz · Sanatçı: Kâşif · Prodüksiyon: AI (jeneratif müzik araçları).",
    date: "2026-05-29",
    duration: "3:08",
    src: "/art/music/tabut.mp3",
    cover: "/art/covers/tabut.jpg",
    video: "V7ud_xukjUs",
    tags: ["rap", "manevi", "tefekkür", "ahiret", "Kâşif", "AI müzik"],
    lyrics: `[Verse 1]
Dört tahta duvar, son durak son bineğim
Yolculuk başlar, ölümlü dünya geride kaldı
Her adım, bir nefes biten bir ömür
Karanlıkta parlayan bir ışık, Rabbime yöneldiğim

[Nakarat]
Tabut ey tabut, sırrın derin
Toprağa emanet bedenim
Ruhum yüceldi, affına sığındım
Merhametine döndüm — senden gelip
Sana dönecek yolcu benim

[Verse 2]
Dünya dediğin bir gölge, bir anlık bir nefes
Eşyalar anlamsız, sadece kalp sesi eşlik eder
Amellerle yolcu, hesap günü bekler
Rabbinin huzurunda hakikat belirir

[Bridge]
Rabbim günahım çok, merhametin engin
Beni affet, bana yol göster, nurunla aydınlat
Kabrimi cennet bahçelerinden bir köşe eyle
Sana döndüğümde
Yüzüm ak eyle`,
  },
];

export const artworks: Artwork[] = [
  // Örnek taslak — görselleri /public/art/images/ altına atıp burayı dolduracak.
  // {
  //   slug: "ic-sema",
  //   title: "İç Sema",
  //   category: "AI Görsel",
  //   description: "Mevlevi semazenin iç dünyasına dair soyut bir kompozisyon.",
  //   date: "2026-02-10",
  //   src: "/art/images/ic-sema.jpg",
  //   width: 1024,
  //   height: 1024,
  //   tools: ["AI Görsel", "Dijital Boyama"],
  //   tags: ["semazen", "soyut", "manevi"],
  // },
];
