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
    slug: "michelangelo-etkisi-iliskilerde",
    title: "Michelangelo Etkisi: Eşinin Gözünde Şekillenen Sen",
    category: "Aile & İlişkiler",
    excerpt:
      "Yakın ilişkilerde eşinin sana nasıl baktığı, kim olacağını sessizce şekillendirir. Caryl Rusbult'un Michelangelo Olgusu, bir mermerden heykel çıkarmaya benzer biçimde, partnerin senin içindeki en iyi versiyonu nasıl ortaya çıkardığını anlatır.",
    date: "2026-04-26",
    readTime: "9 dk",
    cover: "linear-gradient(135deg,#ec4899,#f43f5e)",
    tags: ["ilişki", "evlilik", "çift terapisi", "psikoloji"],
    content: `
<p>Floransa'da 1501 yılı. Yirmi altı yaşındaki Michelangelo, dört metre yüksekliğindeki bir mermer bloğun karşısına geçer. Bu blok kırk yıldır atölyelerde unutulmuş, kusurlu sayılmış, kimse el sürmemiştir. Genç heykeltıraş gözlerini kapatır ve şu cümleyi söyler: <em>"Davut zaten bu mermerin içinde. Benim işim, ona ait olmayan her şeyi çıkarmak."</em> Üç yıl sonra dünyanın en ünlü heykellerinden biri ortaya çıkar.</p>

<p>Yıllar sonra sosyal psikolog Caryl Rusbult, bu hikâyede çok güçlü bir psikolojik gerçeklik fark eder ve buna <strong>Michelangelo Olgusu</strong> adını verir. Rusbult'a göre yakın ilişkilerimizde eşimiz, biz olamadığımızda dahi, içimizdeki en iyi sürümü görür ve onu açığa çıkarır. Tıpkı mermer bloktaki gizli heykeli gören sanatçı gibi.</p>

<h2>İlişki bir ayna değil, bir keski</h2>

<p>Çoğumuz ilişkiyi bir aynaya benzetiriz: "Beni olduğum gibi gören biri." Oysa Rusbult'un on yıllarca süren araştırmaları, sağlıklı bir ilişkinin bundan çok daha aktif bir şey yaptığını gösterir. Eş, sadece görmez; <strong>oymaya başlar</strong>. Onun sana yönelik tutumu — ne sorduğu, neyi fark ettiği, hangi konularda inandığı — yıllar içinde seni başka bir kişi haline getirir.</p>

<p>Klinik gözlemim de bunu doğruluyor. Çift terapisinde bir yıldır sıkıntılı bir evlilikten gelen kişi, eşinin kendisine "tembel" diye baktığını söyler ve bir süre sonra gerçekten tembelleşir. Bir başka danışan, partnerinin ona "şefkatli bir baba olabilirsin" cümlesini düzenli söylediğini anlatır ve ona inanılmayı bekler — sonra zamanla şefkat onun karakterinin tanımlayıcı niteliği olur. Bu insan bir önceki ilişkide aynı şefkati göstermiyordu.</p>

<h2>İki farklı keski tipi</h2>

<p>Rusbult, ilişki içindeki bu şekillendirici etkinin iki yönde işleyebileceğini gösterir.</p>

<p><strong>Olumlu Michelangelo Etkisi:</strong> Eş, partnerinin <em>ideal benliğini</em> görür ve davranışlarıyla bu yönü besler. "Sen aslında çok düzenli birisin, bunu biliyorum" diyen eş, partnerinin küçük düzen denemelerini fark eder, takdir eder, sabırla bekler. Birkaç yıl sonra eskiden dağınık olan kişi gerçekten düzenli olmuştur. Mermer yontulmuştur.</p>

<p><strong>Olumsuz Michelangelo Etkisi:</strong> Eş, partnerinin korktuğu olumsuz benliği görür ve farkında olmadan onu güçlendirir. "Sen zaten hep böylesin" cümlesi, "değişemezsin" cümlesi, küçük olumlu değişimleri görmemek — bunlar ters yönde keskidir. Mermer yontulur ama farklı bir heykel ortaya çıkar; partnerin kaçındığı versiyonu.</p>

<p>Aynı insan, iki farklı eşle iki farklı insana dönüşebilir. Bu, kişiliğin sabit olmadığı anlamına gelmez; <strong>kişiliğin yakın ilişki bağlamında oluşmaya devam ettiği</strong> anlamına gelir. Yetişkinlikte bile.</p>

<h2>Pratik soru: Eşinin gözünde hangi heykel görünüyor?</h2>

<p>Çift terapisinde sık sorduğum bir soru var: <em>"Eşin senin için 'olabileceğin en iyi sürüm' kelimesinin karşılığını koysa, ne yazardı?"</em> Bu soru, sandığınızdan daha derin bir bilgi açar. Çünkü bir partner, eşinin ideal benliğini açıkça bilemiyorsa, ona bilinçsizce yön veremez. Yön veremediği için, ilişki şekillenmez; sadece tekrarlanır.</p>

<p>Tersine sorduğumda da aynı şey: <em>"Eş olarak senin gözünde, partnerinin geliştirmek istediği üç şey nedir?"</em> Cevap çoğu zaman boş kalır. Yıllarca aynı evi paylaşan iki insan, birbirinin <strong>iç hayalini</strong> bilmez. Bu yüzden de onu açığa çıkaracak hareketleri yapmaz.</p>

<h2>Michelangelo Etkisinin pratik üç adımı</h2>

<p>Eşinin içindeki heykeli oymak için sanatçı olmaya gerek yok. Üç pratik adım yeterli:</p>

<ol>
  <li><strong>İdeal benliği sor.</strong> "Beş yıl sonra hangi açıdan kendinden gurur duymak istiyorsun?" Bu soru sohbet açar. Cevabı not et — gizlice, kendin için. Çünkü bir kez bilirsen, görmemen mümkün değildir.</li>
  <li><strong>Mikro takdirleri çoğalt.</strong> Eş partnerinin ideal benliğine doğru attığı en küçük adımı bile görmeli ve fark etmeli. "Bugün düzenli yaklaştığın o anı fark ettim" cümlesi, aylarca kürk gibi havayı dağıtır.</li>
  <li><strong>Eski etiketleri yenile.</strong> "Sen zaten hep böylesin" cümlesi yerine "Bu konuda çalışıyor olduğunu biliyorum" cümlesi. Tek değişiklik: zaman algısı. Eski hali sabitlemek yerine, yeniyi büyütmeye yer açmak.</li>
</ol>

<h2>Tek taraflı oyma olur mu?</h2>

<p>Olur, ama uzun vadede sürdürülemez. Michelangelo'nun heykeli yontarken yorulduğu olur — ama mermer ona karşılık vermez. İlişkide ise mermer canlıdır, karşılık verir, kendi keskisini eline alır. Bu yüzden Michelangelo Etkisinin sağlıklı sürmesi için <strong>karşılıklı</strong> olması gerekir. Eş partnerinin idealini açığa çıkarmak için çabalarken, partner de eşin idealini görmüş ve aynı şekilde çabalamış olmalıdır.</p>

<p>Tek taraflı oyma çoğu zaman bir psikolojik tükenmeyle son bulur. Ya da daha kötüsü: oymayı bırakan eş, mermerin de canlı olduğunu fark etmeden onu olduğu yerde donduğu için suçlamaya başlar.</p>

<h2>Sonuç: Sevgi, görmektir</h2>

<p>Bizim kültürümüzde sevgi çoğu zaman "kabul etmek" olarak tarif edilir. "Olduğun gibi seviyorum." Bu doğru ama yarım. Tam hâli şudur: <em>"Olduğun gibi seviyorum, olabileceğin en iyi sürümü de seviyorum, ve aramızdaki ilişkide o sürüm yavaşça açığa çıksın diye sabırlıyım."</em></p>

<p>Bu cümleyi yazılı bir antlaşma olarak görmek gerekmez. Ama uzun bir ilişkide eşler birbirine bunu söyletecek davranışları sürekli üretmelidir. Aksi halde Michelangelo'nun mermeri, kırk yıl sonra atölyenin köşesinde kalır ve içindeki heykel hiç gün yüzüne çıkmaz.</p>

<blockquote>İyi bir ilişki, iki insanın birbirine ayna tutması değildir. İki insanın birbirinin içindeki en iyi heykeli görmesi ve hayata geçmesi için sabırla, sevgiyle yontmasıdır. Bu yontma kimi zaman acıtır, ama heykel ortaya çıktığında her iki taraf da değişmiştir.</blockquote>
`,
  },
  {
    slug: "hirsli-insan-sessiz-sabotaji",
    title: "Hırslı İnsanın Sessiz Sabotajı: Başardıkça Yetersiz Hissetmek",
    category: "Psikoloji (Klinik)",
    excerpt:
      "Hayatın her sınavını başaran kişi, başardıktan sonra niye boşluk hisseder? Hırs ile yetersizlik aynı paranın iki yüzüdür. Bu yazıda 'hep daha fazla' arzusunun arkasındaki kırılgan kimliğe ve onu onaran üç pratiğe bakıyoruz.",
    date: "2026-04-23",
    readTime: "8 dk",
    cover: "linear-gradient(135deg,#7c3aed,#0ea5e9)",
    tags: ["hırs", "imposter sendromu", "kimlik", "kişisel gelişim"],
    content: `
<p>Psikoloji (klinik) ofisinde sıkça yaşadığım bir sahne vardır. Karşımda otuzlu yaşlarında, parlak özgeçmişli, çevresinin gıpta ettiği bir kişi oturuyordur. Lisans birincisi, yüksek lisans, prestijli kurumda iyi bir pozisyon, son kitabı bir ödül listesinde, sosyal medyada binlerce takipçi. Ve bu kişi, ilk seansın yirminci dakikasında şunu söyler: <em>"Hocam, hayatımda her şey tıkır tıkır. Ama ben hiçbir zaman yetersiz hissetmekten kurtulamıyorum."</em></p>

<p>Yıllar boyunca çoğaltılmış başarıların, içsel yetersizlik duygusunu büyüttüğüne tanık olmak — bu, psikolojinin (klinik) en sessiz dramlarından biridir. Bizler hırsı bir motor olarak öğretiliriz. Oysa hırs çoğu zaman <strong>kapanmamış bir yaranın üstüne sürülen yapay benzin</strong> gibidir.</p>

<h2>"Hep daha fazla" cümlesinin altındaki cümle</h2>

<p>Hırslı insanın söylediği cümle şudur: <em>"Daha fazlasını yapmalıyım."</em> Ama bu cümlenin altında genellikle başka bir cümle vardır: <em>"Eğer daha fazlasını yapmazsam, görünmeyeceğim. Sevilmeyeceğim. Yetmeyeceğim."</em></p>

<p>Bu ikinci cümle çocuklukta kazılan bir cümledir. Çocukken her başarı bir koşullu sevgiyle karşılanmıştır: "Aferin oğlum, bak işte böyle yaparsan başarırsın." Olumlu görünür, ama burada saklı bir mesaj vardır: <strong>başarmadığında sevilmiyorum</strong>. Bu mesaj zihne kazıldıktan sonra yetişkinlik bir koşulsuz sevgi arayışına dönüşür ki imkânsız bir hedeftir, çünkü kişi dışarıdan koşulsuz sevgi gelse bile kendi içine yerleşmiş koşullu sevgi şablonu onu içe alamaz.</p>

<p>Sonuç: kişi başarır, takdir görür, ama içine bir damla bile bu sevgi sızmaz. Doldurulamayan bir kova gibi her başarı saniyeler içinde unutulur ve yeni bir başarı arayışı başlar.</p>

<h2>İmposter sendromu mu, kimlik kırılganlığı mı?</h2>

<p>Modern psikoloji bu durumu sıkça <em>imposter sendromu</em> diye adlandırır: "Aslında ben göründüğüm kadar iyi değilim, ortaya çıkacağım." Bu doğru ama eksik bir tarif. Çünkü asıl mesele "kandırıyor olmak" değildir; <strong>kim olduğunu içselleştirememek</strong>tir.</p>

<p>İmposter sendromu yaşayan kişi başarısını gerçek dışı görür. Kimlik kırılganlığı yaşayan kişi başarıyı görür ama o başarının kendisini tarif etmesine izin vermez. Birinde mesele algıdır, diğerinde kimliktir. İkincisi daha derindir.</p>

<p>Hırslı insanın iç dünyasında "ben başarmam gereken biriyim" cümlesi vardır, "ben başaran biriyim" cümlesi yoktur. Birinci cümle gelecekçi ve eksiklik tabanlıdır; ikinci cümle şimdiki zamandadır ve kabul tabanlıdır. Birinciden ikinciye geçemeyen kişi, başardıkça boşalır.</p>

<h2>Sabotajın üç klasik biçimi</h2>

<p>Hırslı insan başaramayacağından korkmaz; <strong>başardıktan sonra ne hissedeceğinden korkar.</strong> Çünkü başarı eğer beklediği iç dolumu sağlamazsa kişi o "delik kova" gerçeğiyle yüzleşmek zorunda kalır. Bunu önlemek için bilinçaltı üç sabotaj geliştirir:</p>

<ol>
  <li><strong>Erteleme:</strong> Bitmeye yaklaşan büyük bir projeyi son hafta erteleme krizi yaratıp yarıda bırakmak. "Zamanım olmadı" cümlesi, "tamamlanırsa içimdeki delik açığa çıkacaktı" cümlesinden daha az korkutucudur.</li>
  <li><strong>Hedef yükseltme:</strong> Bir hedefe yaklaşıldığında o hedefin değerini düşürmek ve daha büyüğüne yönelmek. "Aslında bu o kadar büyük değildi" cümlesi sürekli gelir. Hedef hiçbir zaman vurulmaz çünkü vurulduğu anda boşluk konuşur.</li>
  <li><strong>Dağılma:</strong> Aynı anda beş projeye girmek ve hiçbirini bitirmemek. "Çok yetenekliyim, çok ilgi alanım var" cümlesi sosyal yüzeyde işe yarar. Altta ise hiçbir kimliğin tam yerleşmemesi vardır.</li>
</ol>

<h2>İlk pratik: Başarıdan sonraki üç dakika</h2>

<p>Bir başarı geldikten sonra hırslı insan ortalama altı saniye içinde "sıradaki ne?" diye sorar. Bu altı saniye, başarının iç dünyaya yerleşmesini engeller. Klinik öneri basit ama zor: <strong>başarıdan sonra üç dakika hiçbir şey yapma.</strong></p>

<p>Yeni hedef arama, sosyal medyaya bakma, e-postaya dönme, bir sonrakini planlama — hepsi yasak. Sadece otur. Bedeninde başarının nasıl yerleştiğini fark et. Bu üç dakika, içselleştirmenin tek aralığıdır. Yapmazsan başarıların bir hesap defterindeki sayıdan ibaret kalır.</p>

<h2>İkinci pratik: Koşulsuz tanıkları çoğaltmak</h2>

<p>Hırslı insanın ilişkilerinin çoğu da koşullu sevgi tabanlı kurulur. "Beni başardığım için seviyorlar." Bu inancı kırmak için hayatta en az iki kişi olmalı: seni başarın için değil, varlığın için seven biri. Bu çoğu zaman aile değildir, çünkü aile koşullu mesajın asıl kaynağıdır. Çoğu zaman bir uzun arkadaş, bir terapist, bir öğretmen olur.</p>

<p>Bu kişilere bilinçli olarak başarısızlıklarını söylemek bir egzersizdir. Ne hissettiklerini değil — eksikliklerini. Bunu yaparken sevginin geri çekilmediğini görmek, içeriye sızabilen ilk koşulsuz tecrübedir.</p>

<h2>Üçüncü pratik: Hırsın tanımını değiştirmek</h2>

<p>"Hep daha fazla" yerine "<strong>kimliğime hizmet edecek kadar</strong>" cümlesi denemeye değer. Bu, tembelliğe çağrı değildir; hırsın yönünü değiştirme önerisidir. Soru artık "ne kadar başarabilirim" değildir; "kim olmaya çalışıyorum" olur. Bu soru bir kez içe yerleştiğinde, başarılar iç dünyaya boşalan bir kova değil, kimliğe eklenen taşlar haline gelir.</p>

<p>Hırs gitmez. Sadece motoru değişir. Motor "yetersizlik korkusu" iken yorucudur. Motor "kimliğin gelişimi" olunca sürdürülebilir.</p>

<blockquote>Başardıkça yetersiz hisseden kişi tembel veya nankör değildir. Sadece içinde bir kova vardır ve dibi açıktır. İyileşme, başarıyı arttırmakla değil; kovanın dibini kapatmakla başlar.</blockquote>
`,
  },
  {
    slug: "davranissal-bagimlilik-cagi",
    title: "Davranışsal Bağımlılık Çağı: Madde Yok Ama Beyin Köleleşmiş",
    category: "Bağımlılık",
    excerpt:
      "Yirmi birinci yüzyılın bağımlıları madde kullanmıyor. Telefon, sosyal medya, kumar, alışveriş, yemek, ilişki — bunların hepsi beynin ödül sistemini madde gibi kaçırabiliyor. Davranışsal bağımlılık, görünmediği için en tehlikelisidir.",
    date: "2026-04-20",
    readTime: "10 dk",
    cover: "linear-gradient(135deg,#dc2626,#f97316)",
    tags: ["davranışsal bağımlılık", "ekran", "kumar", "dopamin"],
    content: `
<p>Klasik bağımlılık tanımında bir madde vardır: alkol, eroin, kokain. Madde girer, beyin tutsak olur, davranış kişiyi yönetir. Bu basit modele on yıllar boyunca güvendik. Ama 21. yüzyıl bizi zor bir gerçekle yüzleştirdi: <strong>madde olmadan da beyin köleleşebilir.</strong></p>

<p>Davranışsal bağımlılık, kişinin bir maddeye değil bir davranışa kapanması anlamına gelir. DSM-5 ve sonrasında bu kategoriye ilk olarak <em>patolojik kumar</em> alındı. Sonra internet, sosyal medya, oyun, alışveriş, yemek, pornografi ve giderek ilişki bağımlılığı bilimsel literatüre girdi. Bugün dergipark'tan yayınlanan meta-analitik veriler, sadece patolojik kumar oranının yetişkin nüfusta %0,1 ile %2,7 arasında değiştiğini gösteriyor. Telefon ve sosyal medya bağımlılığı oranları çok daha yüksek.</p>

<h2>Beyin maddeyi değil, dopamin akışını arar</h2>

<p>Bağımlılığın motoru madde değil, dopamin sistemidir. Dopamin "haz molekülü" diye adlandırılır ama daha doğru tarifi <em>"isteme molekülü"</em>dür. Ödülü beklerken salınır, ödül alındığında değil. Ve beyin bu beklemeyi kendine programlar.</p>

<p>Telefonu açtığında bir bildirim olabilir, olmayabilir. Bu belirsizlik dopamin için en güçlü tetikleyicidir — kumarcının makinesini çekmesinden farkı yoktur. Sosyal medyada bir post atıldığında kaç beğeni geleceği belirsizdir. Yemek siparişi geldiğinde paketin ne kadar sürede teslim edileceği belirsizdir. <strong>Bütün bu belirsizlikler beyni bağımlılık moduna sokar.</strong></p>

<p>Maddeden farklı olarak, davranışsal bağımlılıkta görünür bir tahribat yoktur. Kişi içmiyor, kullanmıyor, görünüşte sağlıklı. Ama hayatı her geçen ay daralıyor. Konsantrasyon süresi düşüyor. İlişkileri yüzeyselleşiyor. Anlam duygusu boşalıyor. Bu tahribat madde tahribatından <em>daha sinsi</em>dir çünkü görünmez ve toplumsal olarak normalleşmiştir.</p>

<h2>Madde bağımlısı kabul ediyor, davranışsal bağımlı reddediyor</h2>

<p>BAHAR Merkezindeki klinik gözlemim şudur: bir alkol bağımlısı tedaviye başladığında ilk seansta <em>"benim bir sorunum var"</em> cümlesini söyler. Bir telefon bağımlısı bu cümleyi söylemez. "Çok mu kullanıyorum, evet biraz fazla, ama herkes böyle." Bu cümle kabulü engeller, kabul olmadan tedavi olmaz.</p>

<p>Davranışsal bağımlılığın en tehlikeli özelliği, toplumsal kamuflajdır. Telefonu sürekli elinde olan biri herkesle aynı görünür. Sosyal medyada saatlerce kayan biri "haberleri takip ediyor" diye savunulur. Sürekli online alışveriş yapan biri "şımarık" denip geçilir. Oysa beynin ödül sistemi sessizce ve sürekli kaçırılmaktadır.</p>

<p>İçimden iki klinik soru paylaşayım. Bunları danışana sorduğumda davranışsal bağımlılığın varlığı ya da yokluğu belirginleşir:</p>

<ol>
  <li><strong>"Bu davranışı 7 gün boyunca tamamen bıraksan ne hissedersin?"</strong> Cevap "rahatlardım" değil de "huzursuz olurdum, sinir krizi geçirirdim" ise dikkat etmek gerek.</li>
  <li><strong>"Bu davranış sosyal hayatına, işine, uykuna, ilişkine zarar veriyor mu?"</strong> Cevap evetse ama davranış devam ediyorsa, kullanım bağımlılık eşiğini geçmiş demektir.</li>
</ol>

<h2>Üç görünmez bağımlılık alanı</h2>

<p><strong>1. Telefon ve sosyal medya:</strong> Türkiye'de yetişkin ortalama günlük ekran süresi 5-7 saat aralığında. Bu süre uyku ve çalışma dışındaki uyanık zamanın büyük bölümünü kaplıyor. Sosyal medyanın bağımlılık yapma derecesi araştırmalarda nikotinle aynı seviyede ölçülüyor.</p>

<p><strong>2. Yemek ve ekran kombini:</strong> "Sosyal yemek bozukluğu" diye yeni bir alan oluşuyor. Yemek tek başına değil, bir dizi/podcast eşliğinde tüketiliyor. Beyin yemekten gelen seratonini değil, ekrandan gelen dopamini öğreniyor. Sonuç: yemek artık doyurmuyor, sadece ekrana eşlik etmesi için araç haline geliyor.</p>

<p><strong>3. İlişki ve onaylanma:</strong> Bir mesaj atıp cevabı beklemek dopamin akışı yaratır. Bu akış o kadar güçlüdür ki yetişkinler "ne dediği değil, cevap verişi" üzerine takılırlar. İlişkiler sevgi alanı olmaktan çıkıp dopamin pompaları haline gelir.</p>

<h2>Kurtulma değil, ilişkiyi yeniden kurma</h2>

<p>Davranışsal bağımlılıktan tamamen "kurtulmak" çoğu zaman yanlış hedefdir. Telefondan vazgeçemezsiniz, sosyal medyadan tamamen çıkamazsınız, çevrimiçi alışverişi bırakamazsınız. Mesele <strong>davranışla ilişkiyi yeniden kurmaktır</strong>.</p>

<p>Klinik öneriler:</p>

<ul>
  <li><strong>Sürtünme ekle:</strong> Telefon ekranı gri tonlu yap, uygulamaları ana ekrandan kaldır, parolayı uzunlatır. Beyin sürtünmeden bıkar, davranışı azaltır.</li>
  <li><strong>Belirsizliği azalt:</strong> Bildirimleri kapat. Beyin ne zaman tetikleneceğini bilemediği için sürekli kontrol eder. Belirsizliği kaldırırsan tetik kaybolur.</li>
  <li><strong>İkame değil, anlam:</strong> Telefon yerine başka bir şey "yaparak" boşluk dolmaz. Boşluğun kendisini tutmak gerek. İlk hafta zor, ikinci hafta huzur başlar.</li>
  <li><strong>Sosyal niyet:</strong> Yakın bir kişiye "şu davranışı azaltıyorum" demek, hesap verme alanı açar. Yalnız tedavi davranışsal bağımlılıkta zayıftır.</li>
</ul>

<h2>Toplumsal boyut</h2>

<p>Davranışsal bağımlılık bireysel bir mesele değildir. Ürünler bağımlılık yapacak şekilde tasarlanır. Sonsuz kayma, otomatik oynatma, kişiselleştirilmiş bildirim — bütün bunlar bilinçli tasarım kararlarıdır. Bu yüzden bireysel disiplin tek başına yetmez; toplumsal farkındalık ve hatta yasal düzenleme gerekir.</p>

<p>Türkiye'de bu alanda mevzuat henüz emekleme aşamasında. Çocuk koruma yasalarında ekran ve sosyal medya henüz net düzenlenmemiş. KVKK çerçevesi veri toplama tarafını ele alıyor ama bağımlılık tasarımı henüz görünmüyor. Mevzuatı bekleyemeyiz; aile içi ve eğitim alanı ön cephedir.</p>

<blockquote>Madde bağımlılığı kişiyi gözle görülür biçimde yıkar; davranışsal bağımlılık ise hayatın renklerini sessizce siler. İkisi de aynı beyin sisteminden gelir; ikisi de aynı saygıyı ve özeni hak eder. Görmediğimiz şeyle savaşamayız — ilk adım, görünmeyen bağı görmektir.</blockquote>
`,
  },
  {
    slug: "ai-caginda-niyet-mimarisi",
    title: "AI Çağında Niyet Mimarisi: Token Sayan Bir Dünyada Düşünce Sermayesi",
    category: "AI & Yazılım",
    excerpt:
      "Yapay zeka mesajını değil, token sayar. Yani fikir kaba bir kütleyse, model onu da öyle anlar. Bu yazıda Claude limitlerini iki katına çıkaran sekiz alışkanlığı ve AI çağında niyet mimarisinin neden yeni okur-yazarlık olduğunu konuşuyoruz.",
    date: "2026-04-15",
    readTime: "9 dk",
    cover: "linear-gradient(135deg,#0ea5e9,#7c3aed)",
    tags: ["AI", "Claude", "prompt engineering", "verimlilik"],
    content: `
<p>Defne İncekara'nın geçtiğimiz hafta yazdığı bir cümle vardı: <em>"Yapay zeka mesaj değil, token sayar."</em> Bu cümle bana modern programlamanın en az anlaşılan gerçeğini hatırlattı. Yapay zekayla çalışmak, bir insanla konuşmaya benzemiyor. Bir ekonomik birim olan token üzerinden kurulan bir alışveriş ilişkisidir. Ve bu ilişkide en pahalı para birimi <strong>net niyet</strong>tir.</p>

<p>Claude, GPT-5, Gemini 3 — hepsi token üzerinden çalışıyor. Sen ne yazdın, kaç token oldu, model ne yazdı, kaç token oldu, kotanın ne kadarı bitti. Token budur. Karakter değildir, sözcük değildir; modelin işlediği en küçük birimdir. Türkçede ortalama bir kelime 2-3 token tutar. Yani 1.000 kelimelik bir prompt 2.000-3.000 token harcar. Bu pahalı yakıt, ne kadar net niyetle yazıldıysa o kadar uzağa götürür.</p>

<h2>Niyet mimarisi nedir?</h2>

<p>"Prompt engineering" deniyor ama bu terim eksik. Mesele bir mühendislikten çok bir <strong>niyet mimarisi</strong>dir. Sen modelden ne istediğini, hangi sırayla, hangi kısıtlarla, hangi formatta beklediğini önceden zihinde inşa edersen, modelin yanıtı amacına yakın olur. Niyet bulanıksa cevap da bulanıktır. Üstelik bulanık niyet üç-dört kat fazla token tüketir, çünkü model hem soruyu yorumlamaya, hem cevaplamaya çalışır.</p>

<p>Bunu somut bir örnekle göstereyim. İki prompt karşılaştıralım:</p>

<p><strong>Bulanık prompt:</strong> "Bana bu kod hakkında bir şeyler söyle, bug var mı?"<br />
<strong>Net prompt:</strong> "Bu Python fonksiyonunda race condition riski var mı? Sadece thread güvenliği açısından bak. Bulgu yoksa 'temiz' yaz, varsa satır numarası + tek cümle açıklama."</p>

<p>İki prompt da aynı kodu inceler ama net olan üçte biri kadar token harcar ve cevabı kullanılabilir bilgidir. Bulanık olan kullanıcının sorduğunu bile bilmediği için her ihtimali kapsayan üç paragraflık bir özet üretir.</p>

<h2>Claude limitlerini iki katına çıkaran sekiz alışkanlık</h2>

<p>Defne İncekara'nın listesini kendi kullanım deneyimimle harmanlayarak özetleyeyim:</p>

<ol>
  <li><strong>Sıfırdan başlama, devam et.</strong> Aynı sohbette bağlam birikir. Yeni sohbet açmak token sıfırlar ama bağlam sıfırdan kurulur. Bağlam pahalıdır; sıfırlama daha pahalıdır.</li>
  <li><strong>Sorudan önce kısıt yaz.</strong> "300 kelimeyi geçme, başlık üretme, madde işareti kullan" — bu üç cümle modelin verdiği cevabı kabaca üçte bir kadar küçültür.</li>
  <li><strong>Format şablonu ver.</strong> İstediğin çıktının iskeleti varsa modelin doldurması yeterlidir. İskelet vermezsen model her seferinde kendi iskeletini kurar; bu hem zaman hem token tüketir.</li>
  <li><strong>Tek görev, tek mesaj.</strong> Aynı prompt'a beş soru sıkıştırma. Her sorunun altında bağlam katmanı var; karıştığında model en az iki tanesini geçiştirir.</li>
  <li><strong>Önce planla, sonra yaz.</strong> Karmaşık bir görevde modelden önce plan iste. Plan yirmi token tutar. Plan onaylanınca uygulama bin token tutar. Plansız uygulama üç bin token tutar ve çoğu zaman yanlış yöne gider.</li>
  <li><strong>Eski cevabı referansla.</strong> "Yukarıdaki çıktıyı kullanarak..." cümlesi modelin önceki cevabı kopyalamak yerine referans tutmasını sağlar. Token tasarrufu yüksektir.</li>
  <li><strong>Karar versin, açıklamasın.</strong> "Üç seçenek arasından birini seç, neden seçtiğini iki cümleyi geçmeden anlat." Bu iki kısıt cevabı yarıya indirir.</li>
  <li><strong>Hata varsa düzelt, sıfırdan yeniden yapma.</strong> Modelin ürettiği koddaki hata için "şu satırı düzelt" demek, "kodu yeniden yaz" demekten on kat ucuzdur.</li>
</ol>

<h2>Düşünce sermayesi: yeni okur-yazarlık</h2>

<p>Yıllardır bilgisayarla çalışmanın yeni okur-yazarlık olduğunu düşünürdük. AI çağında bir kademe yukarı çıktık: <strong>net düşünmek</strong> yeni okur-yazarlık. Çünkü AI olmadığı dönemde yazılmış kötü prompt sadece kendine zarar verirdi; AI çağında kötü prompt para harcatır, hatalı kod üretir, kötü kararlar yayılır.</p>

<p>Bu beceri sadece geliştiriciler için değil. Bir öğretmen sınıf planını AI'a yazdırmak istiyorsa net düşünebilmeli. Bir avukat sözleşme taslağı için AI kullanıyorsa net düşünebilmeli. Bir terapist seans notlarını özetletmek istiyorsa net düşünebilmeli. Net düşünemeyen, AI'dan değer üretemiyor.</p>

<h2>Niyet zayıfsa, üretim de zayıf</h2>

<p>"Vibe coding" kavramı son aylarda yaygınlaştı: AI ile sezgisel bir akışta kod yazmak. Bu kavram doğru ama yanlış anlaşılıyor. Vibe coding niyetin <em>akışkan</em> olması demektir, niyetin <em>belirsiz</em> olması demek değildir. Müzik gibi düşün: caz akışkandır ama her notanın ne olduğunu müzisyen bilir. AI ile çalışmak da öyledir; akışta gibi görünür ama altında yapı vardır.</p>

<p>Niyet belirsizse model her ihtimali deneyecek bir kod üretir, çoğu uygun değildir, ya çok karmaşık ya çok abartılı. Sonra geliştirici "AI işe yaramıyor" der; oysa AI çok iyi çalışır, niyetin bulanık olduğu için faydasız bir cevap verir.</p>

<h2>Üç pratik öneri</h2>

<ul>
  <li><strong>Promptu yazmadan önce cümleyi söyle.</strong> Sesli olarak, kendine. Söyleyemiyorsan yazamıyorsun demektir; yazsan da AI anlamaz.</li>
  <li><strong>Çıktıyı önceden hayal et.</strong> "AI cevabı şuna benzeyecek" diyebiliyor musun? Diyemiyorsan promptun eksik. Hayal edebildiğin sürece AI o hayale yaklaşır.</li>
  <li><strong>Token'ı para olarak gör.</strong> Her bin token bir lira gibi düşün. Soru: "Bu cevap için bin lira ödemeye değer miydi?" Cevap hayırsa promptun çok geniş, cevap çok küçükse promptun yanlış yönde gitmiş olabilir.</li>
</ul>

<blockquote>AI bir araç değil, bir aynadır. Net düşüneni güçlendirir, bulanık düşüneni daha bulanık eder. Token sayan dünyada en pahalı para birimi net niyettir; en ucuz yatırım, prompttan önceki üç saniyelik düşünmektir. O üç saniyeyi vermeyen, sonradan üç saatlik tekrar ödüyor.</blockquote>
`,
  },
  {
    slug: "bagimliligi-anlamak",
    title: "Bağımlılığı Anlamak: Bir İhtiyacın Yanlış İfadesi",
    category: "Psikoloji (Klinik)",
    excerpt:
      "Bağımlılık ahlaki bir zayıflık değil, karşılanmamış bir ihtiyacın çığlığıdır. Bu yazıda madde, davranış ve duygusal bağımlılıkların ortak köküne — kaçış arayışına — bakıyoruz.",
    date: "2026-04-18",
    readTime: "7 dk",
    cover: "linear-gradient(135deg,#16a34a,#0ea5e9)",
    tags: ["bağımlılık", "rehabilitasyon", "BAHAR", "psikoloji"],
    content: `
<p>BAHAR Merkezi'nde geçirdiğim yıllar bana bir şeyi defalarca öğretti: <strong>bağımlılık, asla yalnızca madde ya da davranışla ilgili değildir.</strong> Bağımlılık, çoğu zaman karşılanmamış bir ihtiyacın yanlış adresle gönderilmiş mektubudur.</p>

<h2>Beyin değil, hayat</h2>

<p>Klasik anlatı şudur: bağımlılık beyindeki dopamin sisteminin "kaçırılması"dır. Bu doğru ama eksik. Çünkü aynı dopamin yolakları, hayatın anlamlı bağlantılarıyla da çalışır. Sevdiği kişiyle vakit geçiren, üretken bir işle uğraşan, derin bir sohbet yapan kişide de aynı sistem aktiftir.</p>

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

<p>Vibe coding, yazılımcının ölmesi değil, dönüşmesi. Geleceğin geliştiricisi sadece kod yazmıyor; <strong>AI ajanlarını orkestralıyor, prompt mimarisi kuruyor, model davranışını ayarlıyor.</strong> İsmi de değişti: AI Engineer.</p>

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
