"use client";
import { useEffect } from "react";
import Image from "next/image";

/* Konfig — kolay güncellenebilir */
const CFG = {
  email: "bilgi@mustafayilmaz.art",
  medium: "https://medium.com/@kp.mustafayilmaz",
  substack: "https://kesiforg.substack.com",
  udemy: "https://www.udemy.com/user/kesfet-kendini/",
  youtube: "https://youtube.com/@kesiforg",
  linkedin: "https://linkedin.com/in/kpmustafayilmaz",
  github: "https://github.com/mustafayilmazart",
  kesif: "https://kesif.org",
  domain: "mustafayilmaz.art",
};

const expertise = [
  { icon: "icon-healing", title: "Psikoloji (Klinik) & Bağımlılık Danışmanlığı", desc: "BAHAR Merkezinde bağımlı hastalara eğitim ve ailelerine danışmanlık. Kanıta dayalı rehabilitasyon yaklaşımları.", tags: ["CBT", "NLP Trainer", "Rehabilitasyon", "SAMBA"] },
  { icon: "icon-spirit", title: "Maneviyat Danışmanlığı & Yaşam Koçluğu", desc: "İçsel keşif yolculuğunda eşlik ediyor, manevi farkındalık ve duygusal zeka ile kişisel dönüşümü destekliyorum.", tags: ["Yaşam Koçluğu", "Manevi Danışmanlık", "Pozitif Psikoterapi"] },
  { icon: "icon-code", title: "AI Engineer & Vibe Coding", desc: "AI ajanları, çoklu model orkestrasyonu ve vibe coding ile sağlık/eğitim platformları geliştiriyorum. Prompt engineering ve AI workflow tasarımı uzmanı.", tags: ["AI Agents", "Vibe Code", "Prompt Engineering", "MCP & Tools"] },
  { icon: "icon-design", title: "WordPress & Grafik Tasarım", desc: "Ruh sağlığı profesyonellerinin dijital varlığını inşa ediyorum. WordPress, Avada, Canva ile marka kimliği.", tags: ["WordPress", "Canva", "Avada", "SEO"] },
  { icon: "icon-media", title: "Sosyal Medya & Dijital Pazarlama", desc: "İçerik stratejisi, sosyal medya yönetimi ve dijital pazarlama ile markaların görünürlüğünü inşa ediyorum.", tags: ["İçerik Stratejisi", "SEO", "Dijital Pazarlama"] },
  { icon: "icon-teach", title: "Eğitim & İçerik Üretimi", desc: "Keşif Akademi kurucusu, Udemy eğitmeni, video editör. Bilgiyi erişilebilir formatlarda sunuyorum.", tags: ["Udemy", "Video Editing", "Keşif Akademi", "Camtasia"] },
  { icon: "icon-health", title: "Hemşirelik & Sağlık Teknolojisi", desc: "14+ yıl psikiyatri hemşireliği. HES yazılım geliştirme, İyilik Hali Platformu ve sağlık sistemleri.", tags: ["Psikiyatri", "HES Yazılım", "İyilik Hali Platformu"] },
  { icon: "icon-data", title: "Google Sheets & Veri Yönetimi", desc: "Karmaşık veri sistemleri, otomasyon dashboardları ve KVKK uyumlu sağlık veri çözümleri.", tags: ["Google Sheets", "Otomasyon", "Dashboard", "KVKK"] },
  { icon: "icon-music", title: "AI Sanat & Müzik Prodüksiyonu", desc: "Suno ile rap ve müzik çalışmaları, AI Art, dijital sanat üretimi. İşimi sanatla inşa ediyorum.", tags: ["Suno", "AI Art", "Rap", "Müzik"] },
];

const milestones = [
  { year: "2006 — 2010", title: "Hemşirelik Lisans", desc: "Muğla Sıtkı Koçman Üniversitesi, Fethiye SYO" },
  { year: "2011 — 2013", title: "Klinik Deneyim", desc: "Çapa, Cerrahpaşa, Kocaeli Tıp — Onkoloji & Kemoterapi" },
  { year: "2013 — 2018", title: "Eğitim & AR-GE", desc: "Anadolu Kuzey KHB — HES yazılımı, 80+ eğitim videosu" },
  { year: "2014 — 2019", title: "Psikoloji (Klinik)", desc: "Nişantaşı & Doğuş Üniversitesi — Yüksek Lisans" },
  { year: "2018 — Günümüz", title: "BAHAR Merkezi", desc: "Erenköy RH EAH — Bağımlılık Rehabilitasyonu" },
  { year: "2019 — 2021", title: "Web Tasarım & Kodlama", desc: "Anadolu Üniversitesi — Ön Lisans" },
  { year: "2021 — Günümüz", title: "Vibe Code & AI Art & Müzik", desc: "Apps Script, WordPress, Suno, AI Tools" },
];

const process = [
  { n: "01", t: "Dinle & Anla", d: "İhtiyacınızı derinlemesine anlıyorum. Her proje bir sohbetle başlar." },
  { n: "02", t: "Keşfet & Planla", d: "En uygun stratejiyi birlikte belirliyoruz. Yol haritası netleşiyor." },
  { n: "03", t: "İnşa Et & Tasarla", d: "Kod, tasarım veya terapi — aşkla ve özenle inşa süreci başlıyor." },
  { n: "04", t: "Büyüt & Dönüştür", d: "Sürdürülebilir sonuçlar için birlikte ilerliyoruz." },
];

/* GitHub açık kaynak projelerim — github.com/mustafayilmazart */
const githubProjects = [
  {
    name: "kesif-avukat-mcp",
    title: "Avukat MCP",
    desc: "Türkiye + uluslararası hukuki uyumluluk tarayıcısı. KVKK, GDPR, FSEK, PCI-DSS, COPPA, İYS taraması — Claude Desktop & Cursor üzerinden.",
    stack: ["Python", "MCP", "FastMCP"],
    url: "https://github.com/mustafayilmazart/kesif-avukat-mcp",
    accent: "#16a34a",
  },
  {
    name: "kesif-capraz-kontrol",
    title: "Çapraz Kontrol",
    desc: "Multi-LLM kod review CLI. Aynı dosyayı Claude + Gemini + Codex + Qwen'a inceletip birleşik Markdown raporu üretir.",
    stack: ["Node.js", "CLI", "Multi-LLM"],
    url: "https://github.com/mustafayilmazart/kesif-capraz-kontrol",
    accent: "#7c3aed",
  },
  {
    name: "kesif-udemy-mcp",
    title: "Udemy MCP",
    desc: "Udemy eğitmenleri için MCP. Instructor API + browser scanner ile kurs/yorum/Q&A yönetimi ve AI ile içerik üretimi.",
    stack: ["Python", "MCP", "Playwright"],
    url: "https://github.com/mustafayilmazart/kesif-udemy-mcp",
    accent: "#a435f0",
  },
  {
    name: "kesif-mcp-orkestratori",
    title: "MCP Orkestratörü",
    desc: "Tek registry'den Claude Desktop + Code + Cursor için MCP sync. Kategorize, .env ile secret yönetimi, dry-run modu.",
    stack: ["Node.js", "Zero deps"],
    url: "https://github.com/mustafayilmazart/kesif-mcp-orkestratori",
    accent: "#219295",
  },
  {
    name: "kesif-claude-skills",
    title: "Claude Skills Curated",
    desc: "Yazarın pipeline'larında dahili kullanılan 14 Claude Code skill — TTS, video, NotebookLM, YouTube, prompt engineering.",
    stack: ["Markdown", "Skills"],
    url: "https://github.com/mustafayilmazart/kesif-claude-skills",
    accent: "#d4a574",
  },
  {
    name: "kesif-mustafayilmazart",
    title: "Bu Site",
    desc: "Kişisel marka ve portfolyo sitesi. Next.js 16 + Tailwind + Firebase Hosting. WordPress→Next.js migration.",
    stack: ["Next.js", "Firebase", "TS"],
    url: "https://github.com/mustafayilmazart/kesif-mustafayilmazart",
    accent: "#1a1a1a",
  },
];

const tools = [
  /* Terapi & Danışmanlık Yaklaşımları */
  { n: "SAMBA", c: "#16a34a" },
  { n: "BDT (CBT)", c: "#0ea5e9" },
  { n: "Motivasyonel Görüşme", c: "#22c55e" },
  { n: "NLP", c: "#8b5cf6" },
  { n: "Yaşam Koçluğu", c: "#d97706" },
  { n: "Aile Danışmanlığı", c: "#ec4899" },
  { n: "Pozitif Psikoterapi", c: "#eab308" },
  { n: "Kişilerarası Psikoterapi", c: "#06b6d4" },
  { n: "Şema Terapi", c: "#f43f5e" },
  { n: "Oyun Terapisi", c: "#a855f7" },
  { n: "Manevi Danışmanlık", c: "#b8a920" },
  /* Geliştirme & Bulut */
  { n: "Firebase", c: "#ffca28" },
  { n: "Google Cloud", c: "#4285f4" },
  { n: "Cloudflare", c: "#f38020" },
  { n: "cPanel", c: "#ff6c2c" },
  { n: "Google Apps Script", c: "var(--teal)" },
  { n: "Google Sheets", c: "#34a853" },
  { n: "WordPress", c: "#21759b" },
  { n: "Avada Theme", c: "#ea580c" },
  { n: "HTML / CSS / JS", c: "#f06529" },
  { n: "Cursor IDE", c: "#9146ff" },
  /* Yapay Zeka */
  { n: "Claude AI", c: "#7c3aed" },
  { n: "ChatGPT", c: "#10a37f" },
  { n: "Gemini", c: "#1a73e8" },
  { n: "Suno AI", c: "#ff5722" },
  /* Tasarım & Video */
  { n: "Canva", c: "#00c4cc" },
  { n: "Figma", c: "#dc2626" },
  { n: "After Effects", c: "#9999ff" },
  { n: "Filmora", c: "#00d2ff" },
  { n: "Movavi", c: "#ff5b00" },
  { n: "CapCut", c: "#000000" },
  { n: "Camtasia Studio", c: "#1db954" },
  /* İçerik Platformları */
  { n: "YouTube", c: "#f00" },
  { n: "Udemy", c: "#a435f0" },
  { n: "Medium", c: "#000" },
  { n: "Substack", c: "#ff6719" },
  { n: "LinkedIn", c: "#0a66c2" },
  { n: "Instagram", c: "#e4405f" },
];

const certs = [
  { h: "NLP & Terapi", items: [
    ["NLP Trainer (Eğitmenlik)", "Life Akademi"],
    ["NLP Master Practitioner", "Life Akademi"],
    ["Aile Danışmanlığı", "Toros Üniversitesi"],
    ["Pozitif Psikoterapi", "Işık Üniversitesi"],
    ["Oyun Terapisi Uygulayıcı", "Uludağ Üni."],
    ["Yas ve Travma Terapisi", "NEWSPDR"],
    ["Manevi Danışmanlık", "Kariyer Online"],
  ]},
  { h: "Koçluk", items: [
    ["Profesyonel Eğitim Koçluğu", "Uludağ Üni."],
    ["Profesyonel Öğrenci Koçluğu", "Uludağ Üni."],
    ["Profesyonel Yönetici Koçluğu", "Uludağ Üni."],
    ["Yaşam Koçluğu (Life Coach)", "Life Akademi"],
    ["Aile, Eğitim ve Öğrenci Koçluğu", "Üsküdar Üni."],
  ]},
  { h: "Eğitim & Gelişim", items: [
    ["Eğiticinin Eğitimi", "İst. Gelişim Üni."],
    ["Trainer of Trainers", "Liderlik Okulu"],
    ["Hızlı Okuma Eğitmenliği", "Uludağ Üni."],
    ["Mind & Memory Trainer", "Life Akademi"],
    ["İş Pedagojisi Sertifikası", "MEB"],
  ]},
  { h: "Yapay Zeka & Teknoloji", items: [
    ["Prompt Engineering", "LinkedIn"],
    ["Get Ready for Generative AI", "LinkedIn"],
    ["GPT-4: The New GPT Release", "LinkedIn"],
    ["WordPress: SEO & Troubleshoot", "LinkedIn"],
    ["Microsoft Office & Google Sheets İleri Düzey", ""],
  ]},
  { h: "Yönetim & Kişisel Gelişim", items: [
    ["Stres Yönetimi Uzmanlığı", "Life Akademi"],
    ["Öfke Yönetimi", "İzgören Akademi"],
    ["Duygusal Zeka Eğitimi", "Liderlik Okulu"],
    ["İkna Teknikleri Eğitmenliği", "Liderlik Okulu"],
    ["Etkili İletişim & Beden Dili", "Life Akademi"],
  ]},
  { h: "Bağımlılık & Psikoeğitim", items: [
    ["Fundamentals of Addiction", "Udemy"],
    ["Problem Gambling Treatment", "ACORN"],
    ["Mindful Yaşamın İyileştirici Gücü", "BAUGO"],
    ["İletişiminizi Görsel Hale Getirin", "BAUGO"],
  ]},
];

/* Udemy 5★ gerçek öğrenci yorumları — soyadları gizlilik için kısaltılmıştır (KVKK) */
const refs = [
  { grad: "linear-gradient(135deg,var(--teal),var(--teal-light))", letter: "F",
    quote: "İçerik derli toplu, çok iyi şekilde düzenli olması ve daha anlaşılır olması benim için çok iyiydi. Hocamızın emeğine sağlık, teşekkür ederim.",
    name: "Fazilet O.", title: "Udemy · Kendini Yönetme Becerileri" },
  { grad: "linear-gradient(135deg,#7c3aed,#a855f7)", letter: "B",
    quote: "İçeriğinde yoğun ve faydalı bilgiler içeren bu video için emeğinize sağlık.",
    name: "Büşra Y.", title: "Udemy · Stres ve Başa Çıkma" },
  { grad: "linear-gradient(135deg,#16a34a,#22c55e)", letter: "F",
    quote: "Faydalı bir eğitim. Eğitimciye teşekkür ederim.",
    name: "Fikret Y.", title: "Udemy · Alkol Bağımlılığı" },
];

/* Icon bileşenleri — basit SVG'ler */
const Icons = {
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  ext: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>,
  mail: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  vibe: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>,
  heart: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  music: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
  edu: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
};

const expIcons: Record<string, React.ReactElement> = {
  "icon-healing": <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><path d="M10 21h4"/><path d="M12 7v4"/><path d="M10 11h4"/></svg>,
  "icon-spirit": <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>,
  "icon-code": <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>,
  "icon-design": <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9z"/><circle cx="8" cy="10" r="1.5"/><circle cx="12" cy="7" r="1.5"/><circle cx="16" cy="10" r="1.5"/></svg>,
  "icon-media": <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>,
  "icon-teach": <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  "icon-health": <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0L12 5.34l-.77-.76a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>,
  "icon-data": <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  "icon-music": <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
};

const certIcons = [
  <svg key="c1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><path d="M10 21h4"/></svg>,
  <svg key="c2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  <svg key="c3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  <svg key="c4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h.01"/><path d="M15 9h.01"/><path d="M9 15h6"/></svg>,
  <svg key="c5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  <svg key="c6" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/></svg>,
];

export default function Home() {
  /* Navbar scroll + reveal animation + mobile menu + smooth scroll */
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const onScroll = () => navbar?.classList.toggle("scrolled", window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const onMenu = () => navLinks?.classList.toggle("active");
    menuBtn?.addEventListener("click", onMenu);
    navLinks?.querySelectorAll("a").forEach((l) =>
      l.addEventListener("click", () => navLinks.classList.remove("active"))
    );

    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("visible"), i * 60);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      menuBtn?.removeEventListener("click", onMenu);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* SEO/AI fallback — JS yokken bile crawler ve LLM'ler tüm bilgiyi okur */}
      <noscript>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px", fontFamily: "system-ui,sans-serif", lineHeight: 1.6 }}>
          <h1>Mustafa Yılmaz — Danışman · AI Engineer · Eğitmen · AI Artist</h1>
          <p><strong>14+ yıl psikiyatri hemşireliği</strong>, BAHAR Bağımlılık Tedavi Merkezi&apos;nde danışmanlık. <strong>Psikoloji (Klinik)</strong> yüksek lisansı (Nişantaşı + Doğuş Üniversitesi). NLP Trainer, ICF prensipli yaşam koçu, Manevi Danışmanlık sertifikalı.</p>
          <p>2021&apos;den beri AI Engineer olarak 80+ projede yapay zeka orkestrasyonu yapıyorum. Kendi açık kaynak araçlarımı geliştiriyor, KEŞİF Akademi&apos;de 3.700+ öğrenciye eğitim veriyorum.</p>

          <h2>Uzmanlık Alanları</h2>
          <ul>
            <li><strong>Psikoloji (Klinik) &amp; Bağımlılık Danışmanlığı</strong> — BAHAR Merkezinde rehabilitasyon, CBT, NLP, SAMBA</li>
            <li><strong>Maneviyat Danışmanlığı &amp; Yaşam Koçluğu</strong> — manevi farkındalık ve duygusal zeka</li>
            <li><strong>AI Engineer &amp; Vibe Coding</strong> — AI ajanları, çoklu model orkestrasyonu, prompt engineering</li>
            <li><strong>WordPress &amp; Grafik Tasarım</strong> — sağlık profesyonelleri için dijital varlık</li>
            <li><strong>Eğitim &amp; İçerik Üretimi</strong> — Udemy, YouTube, Keşif Akademi</li>
            <li><strong>Hemşirelik &amp; Sağlık Teknolojisi</strong> — HES yazılım, İyilik Hali Platformu</li>
            <li><strong>AI Sanat &amp; Müzik Prodüksiyonu</strong> — Suno, AI Art</li>
          </ul>

          <h2>Geliştirdiğim Yazılımlar</h2>
          <ul>
            <li><a href="https://kesif.app">kesif.app</a> — Keşif Portal (ana platform)</li>
            <li><a href="https://iyilikhali.tr">iyilikhali.tr</a> — İyilik Hali Platformu</li>
            <li><a href="https://terapist.io">terapist.io</a> — Terapist Pro</li>
            <li><a href="https://tooleo.app">tooleo.app</a> — Günlük dijital araçlar</li>
            <li><a href="https://aile.kesif.app">aile.kesif.app</a> — Aile içi iletişim</li>
            <li><a href="https://maneviyat.kesif.app">maneviyat.kesif.app</a> — Manevi danışmanlık AI</li>
            <li><a href="https://ikra.kesif.app">ikra.kesif.app</a>, <a href="https://hafiz.kesif.app">hafiz.kesif.app</a>, <a href="https://tahkik.kesif.app">tahkik.kesif.app</a>, <a href="https://zirh.kesif.app">zirh.kesif.app</a></li>
          </ul>

          <h2>Açık Kaynak Projeler</h2>
          <ul>
            <li><a href="https://github.com/mustafayilmazart/kesif-avukat-mcp">kesif-avukat-mcp</a> — KVKK/GDPR uyumluluk tarayıcısı</li>
            <li><a href="https://github.com/mustafayilmazart/kesif-capraz-kontrol">kesif-capraz-kontrol</a> — Multi-LLM kod review</li>
            <li><a href="https://github.com/mustafayilmazart/kesif-udemy-mcp">kesif-udemy-mcp</a> — Udemy eğitmen API entegrasyonu</li>
            <li><a href="https://github.com/mustafayilmazart/kesif-mcp-orkestratori">kesif-mcp-orkestratori</a> — MCP sync aracı</li>
          </ul>

          <h2>Rakamlarla</h2>
          <p>14+ yıl sağlık deneyimi · 80+ AI projesi · 3.700+ Udemy öğrencisi · 233+ değerlendirme · 12+ uzmanlık alanı</p>

          <h2>Hizmetler</h2>
          <p><a href="/ai-danismanligi">Sağlık kurumları için AI danışmanlığı</a> — Klinikler, terapistler, doktorlar için randevu otomasyonu, KVKK uyumlu altyapı, AI asistan, içerik pipeline&apos;ı.</p>

          <h2>İletişim</h2>
          <p>Email: <a href="mailto:bilgi@mustafayilmaz.art">bilgi@mustafayilmaz.art</a></p>
          <p>
            <a href="https://www.linkedin.com/in/kpmustafayilmaz">LinkedIn</a> ·
            <a href="https://github.com/mustafayilmazart">GitHub</a> ·
            <a href="https://medium.com/@kp.mustafayilmaz">Medium</a> ·
            <a href="https://youtube.com/@kesiforg">YouTube</a> ·
            <a href="https://www.udemy.com/user/kesfet-kendini/">Udemy</a>
          </p>
          <p><a href="/blog">Blog</a> · <a href="/art">Art</a> · <a href="/yazilimlar">Yazılımlar</a> · <a href="/ai-danismanligi">AI Danışmanlık</a></p>
        </div>
      </noscript>

      {/* Navbar */}
      <nav className="site-nav" id="navbar">
        <a href="/" className="nav-logo">
          M<span>.</span>Yılmaz
          <span className="domain">{CFG.domain}</span>
        </a>
        <ul className="nav-links" id="navLinks">
          <li><a href="#hakkimda">Hikayem</a></li>
          <li><a href="#uzmanlik">Uzmanlık</a></li>
          <li><a href="/ai-danismanligi">AI Danışmanlık</a></li>
          <li><a href="/yazilimlar">Yazılımlar</a></li>
          <li><a href="#github">Açık Kaynak</a></li>
          <li><a href="#akademi">Keşif Akademi</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/art">Art</a></li>
          <li><a href="#iletisim" className="nav-cta">İletişime Geç</a></li>
        </ul>
        <button className="mobile-menu-btn" id="menuBtn" aria-label="Menü">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="pulse"></span>İşimi Sanatla &amp; Aşkla İnşa Ediyorum
            </div>
            <h1>
              Destekliyorum,<br />
              <span className="highlight">Kodluyorum,</span><br />
              <em>İnşa Ediyorum.</em>
            </h1>
            <p className="hero-desc">
              Psikolojiden (klinik) yazılıma, maneviyat danışmanlığından dijital tasarıma, müzikten eğitime —{" "}
              <strong>insanın bütünsel iyilik halini</strong> hem bilimle hem sanatla hem de teknolojiyle inşa ediyorum.
            </p>
            <div className="hero-buttons">
              <a href="#iletisim" className="btn-primary">Birlikte İnşa Edelim {Icons.arrow}</a>
              <a href="#uzmanlik" className="btn-secondary">Neler Yapıyorum?</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-avatar">
                <Image src="/profile.jpg" alt="Mustafa Yılmaz" width={100} height={100} priority />
              </div>
              <h3>Mustafa Yılmaz</h3>
              <p className="subtitle">Danışman · AI Engineer · Eğitmen · AI Artist</p>
              <p className="domain-line">{CFG.domain}</p>
              <div className="hero-stats">
                <div className="hero-stat"><div className="num">14+</div><div className="label">Yıl Deneyim</div></div>
                <div className="hero-stat"><div className="num">3.7K+</div><div className="label">Öğrenci</div></div>
                <div className="hero-stat"><div className="num">12+</div><div className="label">Uzmanlık Alanı</div></div>
              </div>
            </div>
            <div className="floating-tag tag-1">{Icons.vibe}Vibe Coding</div>
            <div className="floating-tag tag-2">{Icons.heart}Destekleme</div>
            <div className="floating-tag tag-3">{Icons.music}Suno Müzik</div>
            <div className="floating-tag tag-4">{Icons.edu}Eğitim</div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <div className="philosophy">
        <div className="philosophy-inner reveal">
          <div className="quote-mark">&ldquo;</div>
          <blockquote>
            Gerçek destekleme; <strong>KALP, NEFS, RUH, ZİHİN ve BEDEN</strong>&apos;in birbiriyle uyum içinde dans ettiği bütünsel bir yaklaşımla mümkündür.
            Ben sadece bir şey yapmıyorum — yaşamı her boyutuyla <strong>inşa ediyorum.</strong>
          </blockquote>
          <p className="author">— Mustafa Yılmaz · {CFG.domain}</p>
        </div>
      </div>

      {/* About */}
      <div className="about-section" id="hakkimda">
        <div className="about-inner">
          <div className="about-text reveal">
            <div className="section-label">Hikayem</div>
            <h2>Her Şey Bir <em>Merakla</em> Başladı.</h2>
            <p>Her şey, insanın karmaşık ve bir o kadar da büyüleyici iç dünyasını anlama merakıyla başladı. <strong>2010 yılında</strong> insan bedenine şifa verme niyetiyle çıktığım hemşirelik yolculuğu, zamanla beni ruhun ve zihnin derinliklerine doğru bir keşfe yöneltti.</p>
            <div className="about-highlight">Anladım ki gerçek destekleme; KALP, NEFS, RUH, ZİHİN ve BEDEN&apos;in birbiriyle uyum içinde dans ettiği bütünsel bir yaklaşımla mümkündü.</div>
            <p>Bu farkındalık, beni önce psikoloji, ardından da <strong>Psikoloji (Klinik)</strong> alanında uzmanlaşmaya götürdü. Geçtiğimiz 14 yıl boyunca heybeme NLP Eğitmenliği, Hızlı Okuma ve Hafıza Teknikleri gibi zihinsel yetenekleri güçlendiren araçları; Yaşam, Öğrenci, Aile, Bağımlılık ve Maneviyat Danışmanlığı gibi hayatın farklı dönemeçlerinde yol gösteren pusulaları ekledim.</p>
            <p>Teorik bilgiyi ve danışmanlık tecrübelerimi daha geniş kitlelere ulaştırma arzusu, beni yeni yollar aramaya itti. <strong>2012&apos;de</strong> bir hobi olarak başlayan web tasarım ve sosyal medya merakım, zamanla ruh sağlığı profesyonellerinin seslerini dijital dünyada duyurmalarına yardımcı olduğum bir uzmanlığa dönüştü.</p>
            <p>İşimi sadece bir meslek olarak değil, bir <strong>sanat</strong> olarak görüyorum. Domain adresim <strong>{CFG.domain}</strong> bu felsefeyi yansıtıyor — her projemde aşk ve özen var. Suno ile rap ve müzik çalışmalarım da bu sanatsal bakış açısının bir uzantısı.</p>
            <p>Ben <strong>Mustafa Yılmaz</strong>. Amacım, insanların kendini keşfetme yolculuklarında onlara rehberlik etmek ve daha anlamlı bir hayat inşa etmelerine katkı sağlamaktır.</p>
          </div>
          <div className="about-sidebar reveal">
            <div className="about-milestones">
              {milestones.map((m) => (
                <div key={m.year} className="milestone">
                  <div className="year">{m.year}</div>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <section className="my-section" id="uzmanlik">
        <div className="section-label reveal">Uzmanlık</div>
        <h2 className="section-title reveal">Birden Fazla Dünyada<br />Ev Sahibiyim.</h2>
        <p className="section-subtitle reveal">Her uzmanlık alanım birbiriyle konuşur. Terapideki empati kodlara, koçluktaki strateji tasarıma, müzikteki ritim eğitime yansır.</p>
        <div className="expertise-grid">
          {expertise.map((e) => (
            <div key={e.title} className="expertise-card reveal">
              <div className="card-inner">
                <div className={`expertise-icon ${e.icon}`}>{expIcons[e.icon]}</div>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <div className="card-tags">
                  {e.tags.map((t) => <span key={t} className="card-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Geliştirdiğim Yazılımlar — Teaser */}
      <section className="apps-teaser" id="yazilimlar">
        <div className="apps-teaser-inner">
          <div className="section-label reveal">Geliştirdiğim Yazılımlar</div>
          <h2 className="section-title reveal">Hayata Geçirdiğim <em>Ürünler</em>.</h2>
          <p className="section-subtitle reveal">
            kesif.app, iyilikhali.tr, terapist.io, tooleo.app, aile.kesif.app ve daha fazlası — production&apos;da çalışan
            dijital ürünlerimin tamamını yazılımlar sayfasında görebilirsin.
          </p>
          <div className="apps-teaser-cta reveal">
            <a href="/yazilimlar" className="btn-primary">Tüm Yazılımları Gör →</a>
          </div>
        </div>
      </section>

      {/* Açık Kaynak / GitHub Projeleri */}
      <section className="github-section" id="github">
        <div className="github-inner">
          <div className="section-label reveal">Açık Kaynak</div>
          <h2 className="section-title reveal">GitHub&apos;da <em>İnşa Ettiklerim</em>.</h2>
          <p className="section-subtitle reveal">
            MCP sunucuları, AI orkestrasyon araçları ve Claude Code skill koleksiyonu — hepsi MIT lisansı altında, herkes kullanabilir.
            <a href="https://github.com/mustafayilmazart" target="_blank" rel="noopener noreferrer" className="github-profile-link"> @mustafayilmazart →</a>
          </p>
          <div className="github-grid">
            {githubProjects.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="github-card reveal">
                <div className="github-accent" style={{ background: p.accent }}></div>
                <div className="github-card-head">
                  <svg className="github-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  <span className="github-name">{p.name}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="github-stack">
                  {p.stack.map((s) => <span key={s} className="github-stack-tag">{s}</span>)}
                </div>
                <span className="github-link">View on GitHub →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Keşif Akademi */}
      <div className="akademi-section" id="akademi">
        <div className="akademi-inner">
          <div className="akademi-text reveal">
            <div className="section-label">Keşif Akademi</div>
            <h2>Bireysel ve Toplumsal<br /><em>Gelişim Platformu</em></h2>
            <p>En büyük tutkum öğrenmek ve öğrendiklerimi paylaşmaktır. Keşif Akademi&apos;yi, insanların kendi potansiyelini keşfetme arzusundaki o &ldquo;nasıl?&rdquo; sorusuna cevaplar sunmak için inşa ettim. Buradaki her eğitim, benim için de bir gelişim yolculuğudur.</p>
            <div className="akademi-cta">
              <a href={CFG.udemy} target="_blank" rel="noopener noreferrer" className="btn-yellow">Udemy Profilim {Icons.ext}</a>
              <a href={CFG.youtube} target="_blank" rel="noopener noreferrer" className="btn-ghost">YouTube @kesiforg {Icons.ext}</a>
            </div>
          </div>
          <div className="reveal">
            <div className="akademi-stats">
              <div className="akademi-stat"><div className="num">3.724</div><div className="label">Toplam Öğrenci</div></div>
              <div className="akademi-stat"><div className="num">233</div><div className="label">Yorum &amp; Değerlendirme</div></div>
              <div className="akademi-stat"><div className="num">14+</div><div className="label">Yıl Deneyim</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="process-section" id="surecim">
        <div className="process-inner">
          <div className="section-label reveal">Çalışma Sürecim</div>
          <h2 className="section-title reveal">Her Projede Aynı Öz, Farklı Form.</h2>
          <p className="section-subtitle reveal">İster bir terapi süreci olsun ister bir web sitesi — yaklaşımım hep aynı: dinle, anla, inşa et, dönüştür.</p>
          <div className="process-steps">
            {process.map((p) => (
              <div key={p.n} className="process-step reveal">
                <div className="step-number">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
      <section className="my-section">
        <div style={{ textAlign: "center" }}>
          <div className="section-label reveal" style={{ justifyContent: "center" }}>Araçlarım</div>
          <h2 className="section-title reveal">Her İşin Doğru Aleti</h2>
        </div>
        <div className="tools-grid reveal">
          {tools.map((t) => (
            <div key={t.n} className="tool-badge">
              <span className="tool-dot" style={{ background: t.c }}></span>
              {t.n}
            </div>
          ))}
        </div>
      </section>

      {/* Certs */}
      <div className="certs-section" id="sertifikalar">
        <div className="certs-inner">
          <div className="section-label reveal">Sertifikalar &amp; Eğitimler</div>
          <h2 className="section-title reveal">Sürekli Öğrenme, Sürekli Dönüşme.</h2>
          <p className="section-subtitle reveal">40&apos;ın üzerinde sertifika ve uzmanlık eğitimi — çünkü en büyük tutkum öğrenmek.</p>
          <div className="certs-grid">
            {certs.map((c, i) => (
              <div key={c.h} className="cert-category reveal">
                <h4>{certIcons[i]} {c.h}</h4>
                <ul>
                  {c.items.map(([name, src]) => (
                    <li key={name}>
                      {name} {src && <span className="cert-source">— {src}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* References */}
      <div className="references-section" id="referanslar">
        <div className="references-inner">
          <div className="section-label reveal">Referanslar</div>
          <h2 className="section-title reveal">Birlikte Yol Yürüdüklerim<br />Ne Diyor?</h2>
          <p className="section-subtitle reveal">Öğrencilerimden, danışanlarımdan ve iş birliği yaptığım profesyonellerden gelen geri bildirimler. <span style={{ display: "block", fontSize: "0.78rem", marginTop: "8px", opacity: 0.7 }}>Soyadlar KVKK kapsamında gizlilik için kısaltılmıştır.</span></p>
          <div className="references-grid">
            {refs.map((r) => (
              <div key={r.name} className="reference-card reveal">
                <div className="ref-stars">★★★★★</div>
                <div className="ref-quote">&ldquo;</div>
                <blockquote>{r.quote}</blockquote>
                <div className="reference-author">
                  <div className="ref-avatar" style={{ background: r.grad }}>{r.letter}</div>
                  <div>
                    <div className="ref-name">{r.name}</div>
                    <div className="ref-title">{r.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Yazılar */}
      <section className="my-section" id="yazilar">
        <div className="section-label reveal">Yazılar &amp; Platformlar</div>
        <h2 className="section-title reveal">Düşünce Atölyem</h2>
        <p className="section-subtitle reveal">Psikoloji (klinik), maneviyat, teknoloji ve kişisel gelişim üzerine düzenli içerikler inşa ediyorum.</p>
        <div className="writing-grid">
          <a href={CFG.medium} target="_blank" rel="noopener noreferrer" className="writing-card reveal">
            <div className="writing-card-img" style={{ background: "linear-gradient(135deg,#1a1a1a,#333)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </div>
            <div className="writing-card-body">
              <div className="platform">Medium</div>
              <h3>Psikoloji (Klinik) &amp; Bilgelik</h3>
              <p>Öz farkındalık, duygusal zeka ve ilişki dinamikleri.</p>
            </div>
          </a>
          <a href={CFG.substack} target="_blank" rel="noopener noreferrer" className="writing-card reveal">
            <div className="writing-card-img" style={{ background: "linear-gradient(135deg,var(--teal),var(--teal-dark))" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div className="writing-card-body">
              <div className="platform">Substack</div>
              <h3>Keşif Bülteni</h3>
              <p>Haftalık ilham, içgörü ve pratik bilgelik.</p>
            </div>
          </a>
          <a href={CFG.udemy} target="_blank" rel="noopener noreferrer" className="writing-card reveal">
            <div className="writing-card-img" style={{ background: "linear-gradient(135deg,#a435f0,#7c2db8)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
            <div className="writing-card-body">
              <div className="platform">Udemy — Keşif Akademi</div>
              <h3>Online Eğitimler</h3>
              <p>3.724 öğrenci, 233 değerlendirme.</p>
            </div>
          </a>
          <a href={CFG.youtube} target="_blank" rel="noopener noreferrer" className="writing-card reveal">
            <div className="writing-card-img" style={{ background: "linear-gradient(135deg,#f00,#c00)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
            </div>
            <div className="writing-card-body">
              <div className="platform">YouTube</div>
              <h3>@kesiforg</h3>
              <p>Video içerikler, eğitimler ve daha fazlası.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Testimonial */}
      <div className="testimonial-section">
        <div className="testimonial-inner reveal">
          <div className="quote-icon">&ldquo;</div>
          <blockquote>Bir hemşire olarak başladığım yolculuk, beni psikolojiye, maneviyata, yazılıma, müziğe ve tasarıma götürdü. Her yeni öğrenme, bir öncekini güçlendirdi. İşimi sanatla ve aşkla inşa etmek benim en büyük ayrıcalığım.</blockquote>
          <p className="testimonial-author">Mustafa Yılmaz — {CFG.domain}</p>
        </div>
      </div>

      {/* CTA / İletişim */}
      <section className="my-section cta-section" id="iletisim">
        <div className="section-label reveal" style={{ justifyContent: "center" }}>İletişim</div>
        <h2 className="section-title reveal">Birlikte Bir Şeyler<br />İnşa Etmeye Hazır mısınız?</h2>
        <p className="reveal">İster terapi sürecinizde destek olsun, ister bir web sitesi veya dijital strateji — her projede aynı özenle, aynı aşkla çalışıyorum. Bir kahve içerek konuşalım.</p>
        <div className="hero-buttons reveal" style={{ justifyContent: "center" }}>
          <a href={`mailto:${CFG.email}`} className="btn-primary">E-posta Gönder {Icons.mail}</a>
          <a href={CFG.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn&apos;de Bağlanalım</a>
        </div>
        <div className="cta-links reveal">
          <a href={CFG.github} target="_blank" rel="noopener noreferrer" className="cta-link">⌨️ GitHub</a>
          <a href={CFG.medium} target="_blank" rel="noopener noreferrer" className="cta-link">📝 Medium</a>
          <a href={CFG.substack} target="_blank" rel="noopener noreferrer" className="cta-link">📬 Substack</a>
          <a href={CFG.youtube} target="_blank" rel="noopener noreferrer" className="cta-link">▶ YouTube</a>
          <a href={CFG.udemy} target="_blank" rel="noopener noreferrer" className="cta-link">🎓 Udemy</a>
          <a href={CFG.kesif} target="_blank" rel="noopener noreferrer" className="cta-link">🌐 kesif.org</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-logo">M<span>.</span>Yılmaz</div>
          <div className="footer-domain">{CFG.domain}</div>
          <p className="footer-tagline">Keşif · İyilik · Dönüşüm — İşimi Sanatla &amp; Aşkla İnşa Ediyorum</p>
          <div className="footer-links">
            <a href="#hakkimda">Hikayem</a>
            <a href="#uzmanlik">Uzmanlık</a>
            <a href="/ai-danismanligi">AI Danışmanlık</a>
            <a href="/yazilimlar">Yazılımlar</a>
            <a href="#github">Açık Kaynak</a>
            <a href="#akademi">Keşif Akademi</a>
            <a href="#sertifikalar">Sertifikalar</a>
            <a href="/blog">Blog</a>
            <a href="/art">Art</a>
            <a href="#iletisim">İletişim</a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Mustafa Yılmaz. Tüm hakları saklıdır. Aşkla inşa edildi ☕</p>
        </div>
      </footer>
    </>
  );
}
