import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mustafa Yılmaz | mustafayilmaz.art — Danışman · AI Engineer · Eğitmen · AI Artist",
  description:
    "Klinik psikolojiden yazılıma, maneviyat danışmanlığından dijital tasarıma, müzikten eğitime — insanın bütünsel iyilik halini bilim, sanat ve teknolojiyle inşa ediyorum.",
  keywords: [
    "Mustafa Yılmaz", "Klinik Psikoloji", "Bağımlılık Danışmanlığı",
    "NLP Trainer", "Vibe Coding", "Keşif Akademi", "mustafayilmaz.art",
  ],
  authors: [{ name: "Mustafa Yılmaz" }],
  openGraph: {
    title: "Mustafa Yılmaz — İyileştiriyorum, Kodluyorum, İnşa Ediyorum",
    description: "Danışman · AI Engineer · Eğitmen · AI Artist — mustafayilmaz.art",
    type: "website",
    locale: "tr_TR",
    siteName: "mustafayilmaz.art",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${dmSans.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
