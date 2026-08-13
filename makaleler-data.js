/**
 * UZMAN İNCELEME - UZMAN MAKALELERİ & YAYINLAR VERİ DOSYASI
 * C:\Users\User\Desktop\Projeler\Danışmanlık\makaleler-data.js
 * 
 * Toplam 12 gerçek yayın ve bunlara ait fiziksel doküman eşleşmeleri:
 * - 6 Adli Mühendislik & Bilişim Makalesi / Posteri
 * - 2 Hasar & Sigorta Mühendisliği Makalesi / Posteri
 * - 4 Adli Hesap Uzmanlığı Makalesi
 */

window.MAKALELER_DATA = [
  {
    id: "art-fabrikalar-siber-hasar-makale",
    title: "Fabrikalar Artık Sadece Yanmıyor, Verileri de Çalınıyor (Makale)",
    category: "makale",
    categoryLabel: "Uzman Makalesi",
    uzmanlik: "muhendislik",
    uzmanlikLabel: "Adli Mühendislik & Bilişim",
    author: "Melike Özlem BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "10 dk okuma",
    image: "assets/vaka_analizi_thumb.png",
    pdfUrl: "assets/docs/fabrikalar_siber_hasar_makalesi.pdf",
    fileType: "pdf",
    summary: "Sanayide yeni hasar türü: Fiziksel kayıptan siber-fiziksel zarara, IT/OT yakınsaması, KVKK ihlal ilanları, 7545 sayılı Siber Güvenlik Kanunu ve 12 noktalı adli mühendislik matrisi.",
    detailUrl: "makale-detay.html?id=art-fabrikalar-siber-hasar-makale",
    highlights: [
      { num: "5,5M $", label: "Ortalama İhlal Maliyeti", sub: "Küresel Sanayi İstatistikleri" },
      { num: "6 KATMAN", label: "Hasar Analiz Modeli", sub: "Fiziksel & Bilişim İncelemesi" },
      { num: "12 NOKTA", label: "Adli Matris", sub: "IT/OT Sanayi İnceleme Matrisi" }
    ],
    content: "Sanayi tesislerinde klasik hasar dosyası yangın, patlama ve makine kırılması üzerinden kurulurdu. Dijitalleşme bu tabloyu değiştirdi. Günümüzde bir siber olay kişisel veriye erişimle sınırlı kalmayıp IT/OT yakınsaması nedeniyle operasyon teknolojilerini etkileyerek siber-fiziksel kayba ve iş durmasına dönüşebilir."
  },
  {
    id: "art-fabrikalar-siber-hasar-poster",
    title: "Fabrikalar Artık Sadece Yanmıyor, Verileri de Çalınıyor (İnteraktif Poster)",
    category: "poster",
    categoryLabel: "İnfografik & Poster",
    uzmanlik: "muhendislik",
    uzmanlikLabel: "Adli Mühendislik & Bilişim",
    author: "Melike Özlem BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "3 dk okuma",
    image: "assets/fabrikalar_siber_hasar_poster_thumb.jpg",
    pdfUrl: "assets/docs/fabrikalar_siber_hasar_poster.jpg",
    fileType: "image",
    summary: "Sanayide Yeni Hasar Türü: 5,50 Milyon $ Ortalama İhlal Maliyeti, Yeni Hasarın 6 Katmanı ve 12 Noktalı Sanayi Siber Hasar İnceleme Matrisi (İnfografik Poster).",
    detailUrl: "makale-detay.html?id=art-fabrikalar-siber-hasar-poster",
    highlights: [
      { num: "INFOGRAFİK", label: "Visual Poster", sub: "Grafik & İnfografik Görsel" },
      { num: "6 KATMAN", label: "Teknik Model", sub: "Adli Mühendislik Özeti" },
      { num: "10 SORU", label: "Yönetim Rehberi", sub: "Siber Hasar İncelemesi" }
    ],
    content: "Yeni fabrika hasarı bazen duman çıkarmadan başlar; ancak üretimi, veriyi ve bilançoyu aynı anda vurabilir. 12 noktalı adli mühendislik matrisi ve yönetim için 10 kritik soruyu içeren infografik poster."
  },
  {
    id: "art-dijital-delil-deepfake-makale",
    title: "Mahkemede Gördüğünüz Şeye Artık İnanabilir misiniz? (Makale)",
    category: "makale",
    categoryLabel: "Uzman Makalesi",
    uzmanlik: "muhendislik",
    uzmanlikLabel: "Adli Mühendislik & Bilişim",
    author: "Melike Özlem BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "9 dk okuma",
    image: "assets/uzman_makalesi_thumb.png",
    pdfUrl: "assets/docs/dijital_delil_deepfake_makalesi.pdf",
    fileType: "pdf",
    summary: "Yapay zekâ çağında dijital delil, deepfake, AB AI Act Madde 50 şeffaflık kuralları, C2PA Content Credentials ve 5 katmanlı adli doğrulama çerçevesi.",
    detailUrl: "makale-detay.html?id=art-dijital-delil-deepfake-makale",
    highlights: [
      { num: "DEEPFAKE", label: "Yapay Zekâ Tehdidi", sub: "Ses & Görüntü Manipülasyonu" },
      { num: "C2PA", label: "Content Credentials", sub: "Dijital İmza & Köken Doğrulama" },
      { num: "5 KATMAN", label: "Adli Analiz", sub: "Bilirkişi İnceleme Standardı" }
    ],
    content: "Bir dijital kayıt artık yalnızca ne gösterdiği ile değil, nasıl üretildiği, nereden geldiği ve hangi bağımsız izlerle doğrulandığı ile değerlendirilmek zorunda."
  },
  {
    id: "art-dijital-delil-deepfake-poster",
    title: "Mahkemede Gördüğünüz Şeye Artık İnanabilir misiniz? (İnteraktif Poster)",
    category: "poster",
    categoryLabel: "İnfografik & Poster",
    uzmanlik: "muhendislik",
    uzmanlikLabel: "Adli Mühendislik & Bilişim",
    author: "Melike Özlem BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "3 dk okuma",
    image: "assets/dijital_delil_poster_thumb.jpg",
    pdfUrl: "assets/docs/dijital_delil_deepfake_poster.jpg",
    fileType: "image",
    summary: "Yapay Zekâ ve Deepfake Çağında Dijital Delil Güvenliği, 5 Ayrı Doğrulama Katmanı ve 12 Kontrol Noktası (İnfografik Poster).",
    detailUrl: "makale-detay.html?id=art-dijital-delil-deepfake-poster",
    highlights: [
      { num: "5 KATMAN", label: "Doğrulama Çerçevesi", sub: "Adli İnceleme Adımları" },
      { num: "12 NOKTA", label: "Kontrol Listesi", sub: "Dijital Delil Sıhhati" },
      { num: "C2PA", label: "Standart Görseli", sub: "İnfografik Şema" }
    ],
    content: "En değerli delil görüntünün kendisi olmayabilir. Asıl değer; içeriğin hangi sistemden geldiğini, nasıl edinildiğini ve bağımsız kayıtlarla ne ölçüde doğrulandığını gösteren teknik izler bütünündedir."
  },
  {
    id: "art-amazon-uei-makale",
    title: "Amazon–UEI Davası: Akıllı Ev Teknolojisinin Görünmeyen Sınırları (Makale)",
    category: "makale",
    categoryLabel: "Uzman Makalesi",
    uzmanlik: "muhendislik",
    uzmanlikLabel: "Adli Mühendislik & Bilişim",
    author: "Melike Özlem BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "10 dk okuma",
    image: "assets/vaka_analizi_thumb.png",
    pdfUrl: "assets/docs/amazon_uei_akilli_ev_makalesi.pdf",
    fileType: "pdf",
    summary: "Echo ve Fire TV üzerindeki patent iddiaları, akıllı bina adli mühendisliği, IoT mimarisi, istem-ürün eşlemesi ve dijital delil metodolojisi üzerinden ayrıntılı teknik inceleme.",
    detailUrl: "makale-detay.html?id=art-amazon-uei-makale",
    highlights: [
      { num: "PATENT", label: "IoT Uyuşmazlığı", sub: "Kaliforniya Federal Mahkemesi" },
      { num: "CLAIM CHART", label: "İstem-Ürün İncelemesi", sub: "Yazılım & Donanım Eşlemesi" },
      { num: "11 NOKTA", label: "Adli Matris", sub: "Akıllı Ev Patent Analizi" }
    ],
    content: "Universal Electronics Inc. (UEI), 6 Ağustos 2026'da ABD Kaliforniya Federal Mahkemesinde Amazon.com, Inc. ve AWS aleyhine patent ihlali davası açtı."
  },
  {
    id: "art-amazon-uei-poster",
    title: "Amazon–UEI Davası: Akıllı Ev Teknolojisinin Görünmeyen Sınırları (İnteraktif Poster)",
    category: "poster",
    categoryLabel: "İnfografik & Poster",
    uzmanlik: "muhendislik",
    uzmanlikLabel: "Adli Mühendislik & Bilişim",
    author: "Melike Özlem BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "3 dk okuma",
    image: "assets/amazon_uei_poster_thumb.jpg",
    pdfUrl: "assets/docs/amazon_uei_akilli_ev_poster.jpg",
    fileType: "image",
    summary: "12 Noktalı Adli Teknik İnceleme Matrisi, 6 Katmanlı Bilirkişi İnceleme Modeli ve Akıllı Ev Patent İhlali Özeti (İnfografik Poster).",
    detailUrl: "makale-detay.html?id=art-amazon-uei-poster",
    highlights: [
      { num: "12 NOKTA", label: "İnceleme Matrisi", sub: "IoT Patent İhlali" },
      { num: "6 KATMAN", label: "Bilirkişi Modeli", sub: "Yazılım & Bulut Analizi" },
      { num: "POSTER", label: "Görsel İnfografik", sub: "Teknik Özet" }
    ],
    content: "Akıllı evde tek bir cihaz yoktur. Donanım, yazılım, protokol ve bulut aynı delil zincirindedir. 12 noktalı adli teknik matris ve 6 katmanlı bilirkişi analizini içeren infografik teknik poster."
  },
  {
    id: "art-hasar-sigorta-makale",
    title: "Endüstriyel Hasar ve Sigorta Mühendisliği (Makale)",
    category: "makale",
    categoryLabel: "Uzman Makalesi",
    uzmanlik: "hasar",
    uzmanlikLabel: "Hasar & Sigorta Mühendisliği",
    author: "Melike Özlem BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "10 dk okuma",
    image: "assets/mevzuat_notu_thumb.png",
    pdfUrl: "assets/docs/endustriyel_hasar_sigorta_makalesi.pdf",
    fileType: "pdf",
    summary: "Fabrika yangınından üretim kaybına: Teknik neden, fiziksel zarar, kök neden analizi, rayiç/ikame değer ve sigorta tazminatı nasıl birbirinden ayrılır?",
    detailUrl: "makale-detay.html?id=art-hasar-sigorta-makale",
    highlights: [
      { num: "NFPA 921", label: "Yangın İnceleme", sub: "Bilimsel Metodoloji" },
      { num: "BI", label: "İş Durması Kaybı", sub: "Üretim & Ciro Etkisi" },
      { num: "12 NOKTA", label: "Hasar Matrisi", sub: "Rayiç & İkame Değer Hesabı" }
    ],
    content: "Endüstriyel bir hasar olayı tek bir rakam değildir. Yangın, patlama, elektriksel arıza, makine kırılması ve proses kazası aynı anda fiziksel varlık kaybı, üretim kesintisi, ek işletme gideri, sovtaj ve rücu potansiyeli doğurabilir."
  },
  {
    id: "art-hasar-sigorta-poster",
    title: "Endüstriyel Hasar ve Sigorta Mühendisliği (İnteraktif Poster)",
    category: "poster",
    categoryLabel: "İnfografik & Poster",
    uzmanlik: "hasar",
    uzmanlikLabel: "Hasar & Sigorta Mühendisliği",
    author: "Melike Özlem BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "3 dk okuma",
    image: "assets/endustriyel_hasar_poster_thumb.jpg",
    pdfUrl: "assets/docs/endustriyel_hasar_sigorta_poster.jpg",
    fileType: "image",
    summary: "Küresel Hasar Verileri (%21 Yangın, %36 İş Durması), Kök Neden - Hasar - Tazminat Zinciri ve 12 Noktalı İdeal Veri Seti (İnfografik Poster).",
    detailUrl: "makale-detay.html?id=art-hasar-sigorta-poster",
    highlights: [
      { num: "%21 YANGIN", label: "Küresel Hasar Payı", sub: "Sanayi Hasar Oranı" },
      { num: "%36 İŞ DURMASI", label: "Dolaylı Kayıp", sub: "Ciro & Kar Kaybı" },
      { num: "VERİ SETİ", label: "12 Noktalı Şema", sub: "İnfografik Poster" }
    ],
    content: "Hasarın bedeli yanan şeylerin toplamı değildir. Nedensellik + teknik değer + üretim etkisi + poliçe sınırı birlikte okunur. 12 noktalı ideal veri seti ve 6 katmanlı teknik değerlendirme içeren infografik poster."
  },
  {
    id: "art-hesap-rakam-delil",
    title: "Mahkemede Rakam Tek Başına Delil Değildir (Uzman Makalesi)",
    category: "makale",
    categoryLabel: "Uzman Makalesi",
    uzmanlik: "hesap",
    uzmanlikLabel: "Adli Hesap Uzmanlığı",
    author: "Talip BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "8 dk okuma",
    image: "assets/hesap_thumb_1.png",
    pdfUrl: "assets/docs/adli_hesap_mahkemede_rakam.pdf",
    fileType: "pdf",
    summary: "Adli hesap uzmanlığı ve nitelikli hesaplamalar: Uyuşmazlığın rakama dönüştüğü yerde bilirkişilik, 12 yüksek değerli uyuşmazlık kümesi ve denetlenebilir hesap zinciri.",
    detailUrl: "makale-detay.html?id=art-hesap-rakam-delil",
    highlights: [
      { num: "60. UZMANLIK", label: "Adalet Bakanlığı", sub: "Nitelikli Hesaplamalar" },
      { num: "12 KÜME", label: "Yüksek Değerli Davalar", sub: "Ticari & Borçlar Uyuşmazlığı" },
      { num: "DENETLENEBİLİR", label: "Formül Zinciri", sub: "Şeffaf Hesap Metodolojisi" }
    ],
    content: "Adli hesap raporlaması, tarafların ileri sürdüğü rakamları yeniden toplamak değildir. Nitelikli hesaplama; hukuken belirlenmiş veya mahkemece kabul edilmesi gereken parametreleri, doğrulanabilir mali ve ticari verilerle birleştirerek denetlenebilir bir sonuca dönüştürür."
  },
  {
    id: "art-hesap-dort-gun-izin",
    title: "Dört Günlük Hesap Hatası Kararı Bozdurdu (Uzman Makalesi)",
    category: "makale",
    categoryLabel: "Uzman Makalesi",
    uzmanlik: "hesap",
    uzmanlikLabel: "Adli Hesap Uzmanlığı",
    author: "Talip BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "7 dk okuma",
    image: "assets/hesap_thumb_2.png",
    pdfUrl: "assets/docs/adli_hesap_dort_gunluk_hesap_hatasi.pdf",
    fileType: "pdf",
    summary: "Yıllık izin hesabında takvim, ispat ve bilirkişi metodolojisi (Yargıtay 9. Hukuk Dairesi E.2025/9525, K.2026/757 sayılı kanun yararına bozma kararı incelemesi).",
    detailUrl: "makale-detay.html?id=art-hesap-dort-gun-izin",
    highlights: [
      { num: "YARGITAY 9.HD", label: "3 Şubat 2026 Kararı", sub: "Kanun Yararına Bozma" },
      { num: "4857 m.56/5", label: "İş Kanunu Emredici", sub: "Hafta Tatili Düşümü" },
      { num: "4 GÜN", label: "Bakiye İzin Farkı", sub: "Metodolojik Hesap Hatası" }
    ],
    content: "Yargıtay 9. Hukuk Dairesinin 3 Şubat 2026 tarihli kararı, yıllık izin hesabında küçük görünen bir takvim hatasının yargısal sonucu nasıl değiştirebildiğini gösteren güncel bir örnektir."
  },
  {
    id: "art-hesap-endeks-fiyat-farki",
    title: "Bir Endeks Hatası Milyonları Değiştirebilir (Uzman Makalesi)",
    category: "makale",
    categoryLabel: "Uzman Makalesi",
    uzmanlik: "hesap",
    uzmanlikLabel: "Adli Hesap Uzmanlığı",
    author: "Talip BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "9 dk okuma",
    image: "assets/hesap_thumb_3.png",
    pdfUrl: "assets/docs/adli_hesap_endeks_hatasi.pdf",
    fileType: "pdf",
    summary: "Kamu projelerinde hakediş, fiyat farkı ve adli hesaplamanın görünmeyen gücü (KİK 2025/2026 mevzuat değişiklikleri ve 12 noktalı adli hesap matrisi).",
    detailUrl: "makale-detay.html?id=art-hesap-endeks-fiyat-farki",
    highlights: [
      { num: "KİK MEVZUAT", label: "2025/2026 Düzenlemesi", sub: "Fiyat Farkı Esasları" },
      { num: "BAZ ENDEKS", label: "Hesaplama Hassasiyeti", sub: "Ağırlık Katsayıları" },
      { num: "12 NOKTA", label: "Hakediş Matrisi", sub: "Kamu İhale Hesap Metodu" }
    ],
    content: "Kamu yapım ve hizmet sözleşmelerinde hakediş, yalnızca gerçekleşen imalat miktarı ile sözleşme fiyatının çarpımı değildir."
  },
  {
    id: "art-hesap-tarih-faiz-oran",
    title: "Bir Tarih Milyonluk Fark Yaratabilir (Uzman Makalesi)",
    category: "makale",
    categoryLabel: "Uzman Makalesi",
    uzmanlik: "hesap",
    uzmanlikLabel: "Adli Hesap Uzmanlığı",
    author: "Talip BİLGİLİ",
    date: "12 Ağustos 2026",
    readTime: "8 dk okuma",
    image: "assets/hesap_thumb_4.png",
    pdfUrl: "assets/docs/adli_hesap_bir_tarih_milyonluk_fark.pdf",
    fileType: "pdf",
    summary: "Faiz hesabında yanlış oran, yanlış başlangıç tarihi ve 1 Eylül 2026 eşiği (Kanuni faiz %24, ticari temerrüt %39,75, TTK m.1530 %43 incelemesi).",
    detailUrl: "makale-detay.html?id=art-hesap-tarih-faiz-oran",
    highlights: [
      { num: "1 EYLÜL 2026", label: "Yeni Faiz Eşiği", sub: "7589 Sayılı Kanun Düzenlemesi" },
      { num: "%39,75", label: "Ticari Temerrüt", sub: "TCMB Reeskont Değişken Oranı" },
      { num: "TTK 1530", label: "%43 Mal/Hizmet Faizi", sub: "Ticari Geç Ödeme Oranı" }
    ],
    content: "Faiz hesabı, ana paraya bir yüzde yazıp gün sayısıyla çarpmaktan ibaret değildir."
  }
];
