/* Blog yazılarına içerik-bazlı özel SVG ikonları */

type Props = { slug: string; size?: number };

export function BlogIcon({ slug, size = 64 }: Props) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (slug) {
    /* Michelangelo Etkisi — keski + heykel başı (eşin partneri yontuyor) */
    case "michelangelo-etkisi-iliskilerde":
      return (
        <svg {...props}>
          {/* Mermer blok */}
          <path d="M14 50 L14 22 L36 16 L36 50 Z" />
          {/* Heykelden çıkan profil (içerideki ideal benlik) */}
          <path d="M22 32 Q24 28 28 28 Q30 30 28 33 L28 38 Q26 40 23 39" strokeWidth={1.2} />
          {/* Keski */}
          <path d="M44 18 L52 26 L48 30 L40 22 Z" />
          <path d="M40 22 L36 26" strokeWidth={2} />
          {/* Pırıltı */}
          <circle cx="50" cy="14" r="1.5" fill="currentColor" />
          <path d="M48 12 L52 16 M52 12 L48 16" strokeWidth={1} />
        </svg>
      );

    /* Hırslı İnsanın Sabotajı — dibi delik kova (başardıkça boşalan) */
    case "hirsli-insan-sessiz-sabotaji":
      return (
        <svg {...props}>
          {/* Kova */}
          <path d="M16 18 L20 50 L44 50 L48 18 Z" />
          <ellipse cx="32" cy="18" rx="16" ry="3" />
          {/* Yıldız (başarı içine girer) */}
          <path d="M32 24 L34 28 L38 28 L35 31 L36 35 L32 33 L28 35 L29 31 L26 28 L30 28 Z" fill="currentColor" fillOpacity="0.15" />
          {/* Damlayan delik */}
          <circle cx="32" cy="50" r="1.5" fill="currentColor" />
          <path d="M32 53 L31 56 M32 56 L33 58" strokeWidth={1.2} />
          {/* Aşağı damlalar */}
          <ellipse cx="30" cy="60" rx="1" ry="2" fill="currentColor" fillOpacity="0.4" />
          <ellipse cx="34" cy="58" rx="1" ry="2" fill="currentColor" fillOpacity="0.4" />
        </svg>
      );

    /* Davranışsal Bağımlılık — kırık zincir + telefon bildirim */
    case "davranissal-bagimlilik-cagi":
      return (
        <svg {...props}>
          {/* Telefon */}
          <rect x="22" y="14" width="20" height="36" rx="3" />
          <circle cx="32" cy="46" r="1" fill="currentColor" />
          {/* Ekranda bildirim noktası */}
          <circle cx="38" cy="20" r="3" fill="currentColor" />
          {/* Zincir halkaları (telefon etrafında) */}
          <ellipse cx="14" cy="32" rx="4" ry="6" strokeWidth={1.8} />
          <ellipse cx="50" cy="32" rx="4" ry="6" strokeWidth={1.8} />
          {/* Beyne giden bağ (sağdan üst) */}
          <path d="M44 18 Q52 12 56 16" strokeWidth={1.2} />
          <circle cx="56" cy="16" r="2" fill="currentColor" fillOpacity="0.3" />
        </svg>
      );

    /* AI Niyet Mimarisi — ok/hedefli niyet + token kareleri */
    case "ai-caginda-niyet-mimarisi":
      return (
        <svg {...props}>
          {/* Hedef daire */}
          <circle cx="44" cy="32" r="14" />
          <circle cx="44" cy="32" r="8" />
          <circle cx="44" cy="32" r="3" fill="currentColor" />
          {/* Ok (niyet) */}
          <path d="M8 32 L40 32" strokeWidth={2} />
          <path d="M34 26 L40 32 L34 38" strokeWidth={2} />
          {/* Token kareleri (yolda) */}
          <rect x="10" y="46" width="6" height="6" strokeWidth={1.2} />
          <rect x="20" y="46" width="6" height="6" strokeWidth={1.2} />
          <rect x="30" y="46" width="6" height="6" strokeWidth={1.2} />
          <text x="13" y="51" fontSize="4" fill="currentColor" stroke="none">tk</text>
        </svg>
      );

    /* Bağımlılığı Anlamak — boşluğa uzanan el + kalp ihtiyaç */
    case "bagimliligi-anlamak":
      return (
        <svg {...props}>
          {/* Kalp (ihtiyaç) */}
          <path d="M32 50 C28 46 14 38 14 26 C14 20 18 16 24 16 C28 16 30 18 32 22 C34 18 36 16 40 16 C46 16 50 20 50 26 C50 38 36 46 32 50 Z" />
          {/* Boşluk (kalp ortasında) */}
          <circle cx="32" cy="30" r="3" fill="white" />
          <circle cx="32" cy="30" r="3" />
          {/* Uzanan eller (yan tarafta) */}
          <path d="M8 36 L14 32" strokeWidth={2} />
          <path d="M56 36 L50 32" strokeWidth={2} />
          {/* Damla/yağmur (acı) */}
          <path d="M22 8 L24 12 Q22 14 20 12 Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
          <path d="M42 6 L44 10 Q42 12 40 10 Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
        </svg>
      );

    /* Vibe Coding — kod sembolleri + akış dalgası */
    case "vibe-coding-ai-cagi":
      return (
        <svg {...props}>
          {/* Köşeli ayraç sol */}
          <path d="M18 18 L8 32 L18 46" strokeWidth={2} />
          {/* Köşeli ayraç sağ */}
          <path d="M46 18 L56 32 L46 46" strokeWidth={2} />
          {/* Akış dalgası ortada */}
          <path d="M22 32 Q26 26 30 32 T38 32 T46 32" strokeWidth={1.5} />
          <path d="M22 38 Q26 32 30 38 T38 38 T46 38" strokeWidth={1} strokeOpacity="0.5" />
          {/* Eğik çizgi */}
          <path d="M36 14 L28 50" strokeWidth={1.5} strokeOpacity="0.6" />
          {/* Yıldız */}
          <circle cx="50" cy="14" r="1.5" fill="currentColor" />
        </svg>
      );

    /* İçsel Sessizlik — sessiz konuşma balonu + meditasyon dalga */
    case "icsel-sessizligin-sesi":
      return (
        <svg {...props}>
          {/* Konuşma balonu (içi boş - sessizlik) */}
          <path d="M12 16 H52 A4 4 0 0 1 56 20 V40 A4 4 0 0 1 52 44 H30 L20 54 V44 H12 A4 4 0 0 1 8 40 V20 A4 4 0 0 1 12 16 Z" />
          {/* İç sessizlik — 3 nokta yerine düz çizgi */}
          <line x1="20" y1="32" x2="44" y2="32" strokeWidth={2} />
          {/* Etrafta hafif dalga halkaları (içsel ses) */}
          <circle cx="32" cy="30" r="20" strokeWidth={0.5} strokeOpacity="0.3" strokeDasharray="2 3" />
        </svg>
      );

    default:
      /* Default: yazı/kalem ikonu */
      return (
        <svg {...props}>
          <path d="M14 18 L14 50 L50 50 L50 28 L40 18 Z" />
          <path d="M40 18 L40 28 L50 28" />
          <line x1="20" y1="34" x2="44" y2="34" />
          <line x1="20" y1="40" x2="44" y2="40" />
          <line x1="20" y1="46" x2="36" y2="46" />
        </svg>
      );
  }
}
