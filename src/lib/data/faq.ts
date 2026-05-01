/* SSS — site geneli sıkça sorulan sorular */

export type FaqGroup = {
  category: string;
  items: { q: string; a: string }[];
};

export const faqs: FaqGroup[] = [
  {
    category: 'Genel',
    items: [
      {
        q: 'Tek başınıza mı çalışıyorsunuz, ekibiniz var mı?',
        a: 'Hem evet hem hayır. Klinik danışmanlık ve bireysel görüşmelerde yalnız çalışırım — bu ilişkinin doğası gereği. Yazılım/AI projelerinde ise gerektiğinde dış uzman, geliştirici ve yapay zeka ajan ekipleriyle birlikte ilerlerim. Sorumluluk her zaman bende kalır.'
      },
      {
        q: 'İstanbul dışından da çalışabilir miyiz?',
        a: 'Evet. Yüz yüze randevular İstanbul (Erenköy / Kadıköy / online) ekseninde yürür; yazılım, eğitim, danışmanlık ve grup programları Türkiye genelinde online çalışır. Yurt dışı katılımcılar da kabul edilir.'
      },
      {
        q: 'Yapay zeka ile çalışmak modaya uymak mı?',
        a: 'Hayır. Yapay zeka, klinikteki vaka takibinden, kurum operasyonuna kadar gerçek bir verim aracı. 80+ projede sahada test ettim. Ben hype satmıyorum; çalışan akış kuruyorum.'
      }
    ]
  },
  {
    category: 'Klinik & Bağımlılık',
    items: [
      {
        q: 'Bağımlılık danışmanlığı ile psikoterapi aynı şey mi?',
        a: 'Hayır. Bağımlılık danışmanlığı yapılandırılmış, bilgi ve beceri odaklı bir süreçtir; SAMBA/CBT temelli oturum dizisi yürütülür. Psikoterapi ise daha derin, dinamik ve uzun soluklu bir içsel çalışmadır. Her iki yaklaşımın da yeri farklıdır.'
      },
      {
        q: 'Bağımlı yakını olarak ben ne yapabilirim?',
        a: 'Bağımlı yakınları için 6 haftalık aile programı yürütüyorum. Suçlama yerine sınır, takip yerine ilişki, kontrol yerine kendine bakım üzerine kuruluyor. Detay için Eğitimler sayfasındaki "Aile Programı"na bakabilirsiniz.'
      },
      {
        q: 'KVKK / gizlilik nasıl sağlanıyor?',
        a: 'Klinik görüşme notları kâğıt veya yerel bilgisayarda şifreli tutulur, asla bulut yapay zeka modellerine girilmez. KVKK 6698 m.6 (özel nitelikli kişisel veri) çerçevesinde işlenir. Yazılım/danışmanlık projelerinde de aynı prensip geçerlidir.'
      }
    ]
  },
  {
    category: 'Yapay Zeka & Eğitim',
    items: [
      {
        q: 'Yapay zeka eğitiminde hangi araçlar kullanılıyor?',
        a: 'ChatGPT, Claude, Gemini ve Türkçe destekli yerli/yabancı modeller. Araç seçimi katılımcının sektörü, kurumun KVKK gereksinimi ve bütçeye göre belirlenir. Belirli bir markaya bağlı kalmıyoruz; ihtiyacın araç değil, akış olduğunu vurguluyoruz.'
      },
      {
        q: 'Sıfır bilgiyle gelirsem yetişebilir miyim?',
        a: 'Lunch & Learn ve Bireysel programlar tam da bunun için tasarlandı. Önbilgi gereksinimi yoktur; sadece ekran kullanabilmek yeter. Eğitim sırasında yapay zekayla ilk gerçek konuşmanı birlikte yaparız.'
      },
      {
        q: 'Eğitim fiyatı nasıl belirleniyor?',
        a: 'Süre, katılımcı sayısı, formatı (yüz yüze/online) ve özelleştirme ihtiyacına göre değişir. Lunch & Learn ile en uygun başlangıç yapılabilir; tam program bütçesi görüşmeden sonra netleşir. Kurumlara özel teklif çıkarılır.'
      },
      {
        q: 'Eğitim sonrası destek var mı?',
        a: 'Evet. Tam program katılımcıları için 30 gün e-posta destek; kurumsal paketlerde 60-90 gün periyodik check-in. AI Danışmanlık paketinde aylık operasyon desteği seçeneği vardır.'
      }
    ]
  },
  {
    category: 'Manevi & Yaşam Rehberliği',
    items: [
      {
        q: 'Manevi rehberlik dini bir hizmet mi?',
        a: 'Hayır. Manevi rehberlik, kişinin kendi inanç ve değerleri çerçevesinde içsel hayatını düzenlemesine eşlik eder. Belirli bir dine sokmaya çalışmaz, kişiyi olduğu yerden kaldırır. Bilim ve manevi farkındalığı birlikte tutar.'
      },
      {
        q: 'Yaşam koçluğu ile rehberlik farkı nedir?',
        a: 'Yaşam koçluğu hedef ve eylem odaklıdır (12 hafta, ölçülebilir hedefler). Manevi rehberlik daha içsel ve değer odaklıdır (8 oturum, kişisel çerçeve). Bazı kişiler için ikisi de uygundur; ilk görüşmede birlikte karar verilir.'
      }
    ]
  },
  {
    category: 'İletişim & Süreç',
    items: [
      {
        q: 'İlk görüşme ücretli mi?',
        a: 'Tüm hizmetler için ilk 30 dakika ücretsiz keşif görüşmesidir. Tanışmak, doğru çatıyı seçmek ve birbirimize uyup uymadığımızı görmek içindir.'
      },
      {
        q: 'Ne kadar sürede dönüyorsunuz?',
        a: 'E-posta yanıtları en geç 7 iş günü içinde döner; çoğu durumda 24-48 saat. Acil klinik durumlar için doğrudan KEŞİF Akademi WhatsApp topluluğundan ya da kayıtlı sağlık kurumu üzerinden ulaşmanız önerilir.'
      },
      {
        q: 'Hangi günlerde görüşme yapıyorsunuz?',
        a: 'BAHAR Bağımlılık Tedavi Merkezi mesai saatleri dışında bireysel/kurumsal randevular planlanır. Genellikle akşam saatleri ve hafta sonu uygundur. Görüşme talebiniz sırasında size 3-5 zaman seçeneği sunulur.'
      }
    ]
  }
];
