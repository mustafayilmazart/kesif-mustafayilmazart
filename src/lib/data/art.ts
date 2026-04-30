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
  // Örnek taslak — Mustafa kendi mp3'lerini /public/art/music/ altına atıp burayı dolduracak.
  // {
  //   slug: "kesif-yolu",
  //   title: "Keşif Yolu",
  //   genre: "Sufi Electronic",
  //   mood: "Tefekkür",
  //   description: "İçsel yolculuğu anlatan; ney, elektronik dokular ve nefes ritmiyle örülmüş bir parça.",
  //   date: "2026-03-15",
  //   duration: "3:42",
  //   src: "/art/music/kesif-yolu.mp3",
  //   cover: "linear-gradient(135deg,#219295,#0d1117)",
  //   tags: ["sufi", "elektronik", "ney"],
  //   lyrics: "Bir yol var içeride / sessiz, derin, sade...",
  // },
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
