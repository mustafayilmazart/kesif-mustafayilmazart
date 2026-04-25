/* Blog yazıları — slug, başlık, kategori, özet, içerik */

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover: string;
  content: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "bagimliligi-anlamak",
    title: "Bağımlılığı Anlamak: Bir İhtiyacın Yanlış İfadesi",
    category: "Klinik Psikoloji",
    excerpt:
      "Bağımlılık ahlaki bir zayıflık değil, karşılanmamış bir ihtiyacın çığlığıdır. Bu yazıda madde, davranış ve duygusal bağımlılıkların ortak köküne — kaçış arayışına — bakıyoruz.",
    date: "2026-04-18",
    readTime: "7 dk",
    cover: "linear-gradient(135deg,#16a34a,#0ea5e9)",
    tags: ["bağımlılık", "rehabilitasyon", "BAHAR", "psikoloji"],
    content: `
<p>BAHAR Merkezi'nde geçirdiğim yıllar bana bir şeyi defalarca öğretti: <strong>bağımlılık, asla yalnızca madde ya da davranışla ilgili değildir.</strong> Bağımlılık, çoğu zaman karşılanmamış bir ihtiyacın yanlış adresle gönderilmiş mektubudur.</p>

<h2>Beyin değil, hayat</h2>

<p>Klasik anlatı şudur: bağımlılık beyindeki dopamin sisteminin "kaçırılması"dır. Bu doğru ama eksik. Çünkü aynı dopamin yolakları, hayatın anlamlı bağlantılarıyla da çalışır. Sevdiği kişiyle vakit geçiren, yaratıcı bir işle uğraşan, derin bir sohbet yapan kişide de aynı sistem aktiftir.</p>

<p>Sorun beyin değil, hayatın <em>yoksunluğu</em>dur. Dr. Bruce Alexander'ın "Rat Park" deneyi tam da bunu gösterdi: zengin, sosyal ve uyaranla dolu bir ortamda yaşayan fareler, morfinli suya dokunmadı bile. Bağımlılık, sterilize edilmiş kafesin hastalığıdır.</p>

<h2>Karşılanmamış üç ihtiyaç</h2>

<p>Klinik deneyimim bana bağımlılığın çoğunlukla şu üç boşluğun tepkisi olduğunu gösterdi:</p>

<ul>
  <li><strong>Bağ kurma ihtiyacı</strong> — yalnızlığı uyuşturma</li>
  <li><strong>Anlam ihtiyacı</strong> — boşluğu doldurma</li>
  <li><strong>Düzenleme ihtiyacı</strong> — taşınamayan duyguyu bastırma</li>
</ul>

<p>Bu yüzden yalnızca maddeyi durdurmak yetmez. Eğer kişi neden o boşluğa kaçtığını anlamazsa, başka bir kaçış kapısı bulur — ekran, kumar, ilişki, yemek...</p>

<h2>İyileşmenin yolu: kınamak değil, dinlemek</h2>

<p>Bağımlıyı kınamak en kolay refleks ama en tehlikeli yaklaşımdır. Çünkü utanç, bağımlılığın yakıtıdır — utanan kişi daha da kaçar.</p>

<p>Onun yerine sormalıyız: <em>"Bu davranış sana neyi söylemeye çalışıyor? Hangi acıyı sustur­maya çalışıyor?"</em> Bu soru, bağımlıyı düşmandan müttefike çevirir. İyileşmenin ilk kapısı budur.</p>

<p>BAHAR'da gördüğüm en güçlü dönüşümler, kişinin bağımlılığa düşman olmaktan vazgeçip, ona <strong>çevirmen</strong> olduğu anda başlar. Çünkü bağımlılık susturmak istediğimiz değil, anlamamız gereken bir mesajdır.</p>

<blockquote>"İyileşmek; <strong>kalp, nefs, ruh, zihin ve bedenin</strong> birbiriyle uyum içinde dans ettiği bütünsel bir yaklaşımla mümkündür. İhtiyacı görmeden çareyi konuşamayız."</blockquote>
`,
  },
  {
    slug: "vibe-coding-ai-cagi",
    title: "Vibe Coding: AI Çağında Yazılım Üretmenin Yeni Yolu",
    category: "AI & Yazılım",
    excerpt:
      "AI ile birlikte kod yazmak; klavyede kod tuşlamaktan çok bir niyetin sezgisel ifadesine dönüşüyor. Vibe coding nedir, neden işe yarar ve nasıl ustalaşılır?",
    date: "2026-04-12",
    readTime: "6 dk",
    cover: "linear-gradient(135deg,#7c3aed,#219295)",
    tags: ["AI", "vibe coding", "Claude", "yazılım"],
    content: `
<p>Yazılım üretmek son iki yılda sessizce dönüştü. Eskiden kod, satır satır parmaklarla dokuduğumuz bir kumaştı. Şimdi ise bir <em>niyet</em>i AI'a anlatıp, doğru sonuca dans gibi yaklaştığımız bir akış var. Bu akışın adı: <strong>vibe coding</strong>.</p>

<h2>Vibe coding nedir?</h2>

<p>Andrej Karpathy'nin popülerleştirdiği terim, kodun her satırını yazmaktansa, AI'a niyetinizi tarif edip onun ürettiği kodu <em>hissederek</em> yönlendirmeniz anlamına gelir. Programlama burada bir tuşlama eylemi değil, <strong>sezgisel bir koreografi</strong>dır.</p>

<p>Yapı basit: niyet, prompt, sonuç, geri bildirim, tekrar. Klavyede saatlerce tüketilen sözdizimi mücadelesi, yerini "şu özellik şöyle olsun" diyen birine bırakır. Kodun ritmini siz belirler, AI ise yazar.</p>

<h2>Neden işe yarar?</h2>

<ul>
  <li><strong>Sözdizimi yükü kalkar</strong> — beyin enerjisi <em>ne</em> yapacağıma odaklanır, <em>nasıl</em> yazacağıma değil.</li>
  <li><strong>Hızlı prototipleme</strong> — fikrin ile çalışan kod arasındaki süre dakikalara iner.</li>
  <li><strong>Disiplinler arası geçiş</strong> — Python'dan Rust'a, Flutter'dan WordPress'e geçmek için tüm dillerin sözdizimini ezberlemenize gerek kalmaz.</li>
</ul>

<h2>Tehlike: niyet zayıfsa, kod da zayıftır</h2>

<p>Vibe coding büyülü değildir. AI'ın sınırı, sizin niyetinizin netliğidir. Belirsiz prompt, belirsiz kod üretir. Ustalık burada başlar:</p>

<ol>
  <li><strong>Önce zihinde inşa edin.</strong> Ne yapacağınızı, hangi katmanın hangi sorumluluğu taşıdığını anlamadan prompt yazmayın.</li>
  <li><strong>Küçük adımlarla yürüyün.</strong> 500 satırlık tek prompt yerine, 50 satırlık 10 etkileşim daha doğru sonuç verir.</li>
  <li><strong>Geri bildirim verin, kabul etmeyin.</strong> AI'ın ürettiğini okumadan kabul etmek, yabancı bir mektubu imzalamak gibidir.</li>
</ol>

<h2>Yeni meslek: AI Engineer</h2>

<p>Vibe coding, yazılımcının ölmesi değil, evrimleşmesi. Geleceğin geliştiricisi sadece kod yazmıyor; <strong>AI ajanlarını orkestralıyor, prompt mimarisi kuruyor, model davranışını ayarlıyor.</strong> İsmi de değişti: AI Engineer.</p>

<p>Bu yeni alan tek bir cümleyle özetlenebilir: <em>kodun nasıl yazıldığı değil, niyetin ne kadar net olduğu</em> önemli artık.</p>
`,
  },
  {
    slug: "icsel-sessizligin-sesi",
    title: "İçsel Sessizliğin Sesi: Maneviyat ve Modern Hayat",
    category: "Maneviyat",
    excerpt:
      "Bildirimlerin, sosyal medyanın ve sürekli üretkenlik baskısının kuşattığı bir çağda; içsel sessizlik bir lüks değil, bir hayatta kalma becerisidir.",
    date: "2026-04-05",
    readTime: "5 dk",
    cover: "linear-gradient(135deg,#b8a920,#219295)",
    tags: ["maneviyat", "sessizlik", "farkındalık", "iyilik hali"],
    content: `
<p>Modern insanın en zor yapabildiği şeylerden biri sessiz oturmaktır. Telefon kapalı, müzik yok, hiçbir şey yapılmıyor — sadece varlık. Beş dakika sürmez, çoğumuz ekrana uzanırız.</p>

<h2>Sessizlik neyi rahatsız ediyor?</h2>

<p>Sessizlik aslında dış değil, <strong>iç</strong> bir olaydır. Telefon sustuğunda susan dış dünyadır; ama içeride hâlâ bir koro çalmaktadır — kaygılar, cevaplanmamış mesajlar, geleceğe dair senaryolar, geçmişe ait pişmanlıklar. İçsel sessizlik, bu koroyu duyabilmek ve onunla nazikçe yüzleşmektir.</p>

<p>Tasavvuf geleneği bunu yüzyıllardır biliyor: <em>halvet</em>. Yani yalnız kalış. Maddi yalnızlık değil, dünyanın gürültüsünden bilinçli bir geri çekiliş. Bu yalnızlık aslında <strong>bir buluşma</strong>dır — kendimizle.</p>

<h2>Üretkenlik tuzağı</h2>

<p>Modern dünya bize sürekli "verimli ol" diyor. Boş zaman, gelişim için bir fırsat olarak satılıyor: bir podcast dinle, bir kitap oku, yeni bir beceri öğren. Hatta meditasyon bile bir performans göstergesine dönüştü — günde kaç dakika, hangi uygulama, hangi ölçüm.</p>

<p>Oysa içsel sessizlik bir <em>performans</em> değil, bir <em>duruş</em>tur. Üretmiyorum. Tüketmiyorum. Sadece varım. Bu cümlenin bugün ne kadar radikal olduğunu fark etmek bile başlı başına bir uyanış.</p>

<h2>Pratik bir öneri</h2>

<p>Bir hafta boyunca her sabah uyandıktan sonra <strong>10 dakika</strong>, telefon ekranı açmadan oturun. Pencereden bakın, çay için, sessizce bekleyin. Hiçbir şey "yapmaya" çalışmayın. Beyniniz protesto edecek — bu normal. Beyin, boşluğu doldurmak üzere eğitilmiştir.</p>

<p>Bu pratiğin amacı meditasyon değil; <strong>boşluğa tahammül kasını çalıştırmak</strong>. O kası geliştirenler şunu fark eder: hayatın en derin yanıtları gürültüde değil, bekleyişte gelir.</p>

<blockquote>İçsel sessizlik bir kaçış değildir. Tam tersine — kendine, hayatına ve seni aşan bir şeye doğru en cesur yaklaşma biçimidir.</blockquote>
`,
  },
];
