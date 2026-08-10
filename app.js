/* ==========================================================================
   UZMAN İNCELEME - ADLİ MÜHENDİSLİK & BİLİŞİM INTERACTIVE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. DEFAULT SITE SETTINGS
  const DEFAULT_SETTINGS = {
    phone: '0532 642 26 57',
    email: 'info@adliteknik.com',
    office: 'Ankara / TÜRKİYE',
    heroTitle: 'ADLİ MÜHENDİSLİK, ADLİ BİLİŞİM VE TEKNİK BİLİRKİŞİLİK',
    heroSub: 'Elektrik, elektronik, enerji, dijital delil ve teknik uyuşmazlıklarda uzman inceleme, raporlama ve mütalaa hizmetleri.'
  };

  // 2. DEFAULT OFFICIAL ARTICLES STORE
  const DEFAULT_ARTICLES = [
    {
      id: 'art-1',
      title: 'HMK 293 Çerçevesinde Uzman Görüşünün Dava Sonucuna Etkisi',
      category: 'HMK 293 Mevzuat',
      author: 'Akademisyen & Hukuk Danışma Kurulu',
      date: '08 Ağustos 2026',
      summary: '6100 Sayılı HMK Madde 293 uyarınca mahkemelere sunulan taraf uzman mütalaalarının delil niteliği ve mahkeme heyetini ikna edici hukuki gücü.',
      content: `HMK Madde 293 (Uzman Görüşü), taraflara dava konusu teknik uyuşmazlıklarda bağımsız uzmanlardan bilimsel mütalaa alma hakkı tanır. Mahkeme hakimi hukuki ve teknik olarak bilimsel nitelikteki mütalaayı incelemekle yükümlüdür.

Özellikle karmaşık adli bilişim, elektrik tesisatı yangınları ve mali zarar hesaplamalarında uzman görüşü raporu, mahkeme bilirkişi raporundaki olası hataların tespit edilmesi ve hakime teknik gerçeğin tarafsız olarak sunulmasında hayati rol oynar.`
    },
    {
      id: 'art-2',
      title: 'Dijital Delillerde Hash Değeri ve Delil Bütünlüğü Zinciri (Chain of Custody)',
      category: 'Adli Bilişim',
      author: 'Adli Bilişim & Siber Güvenlik Kurulu',
      date: '04 Ağustos 2026',
      summary: 'Cep telefonları, bilgisayarlar ve sunuculardan alınan dijital imajlarda MD5/SHA256 hash doğrulamasının mahkemedeki reddedilemezlik önemi.',
      content: `Adli bilişim incelemelerinde en kritik safha delil güvenliği zinciridir. Bir cihazın imajı alınırken oluşturulan MD5 veya SHA256 hash değeri, verinin orijinal halinin dijital parmak izidir.

Mahkemeye sunulacak log, mesaj veya imaj kayıtlarının doğrulanabilir olması için ISO/IEC 27037 standartlarına uygun adli imaj alınmalı ve raporda hash değerleri açıkça yer almalıdır.`
    },
    {
      id: 'art-3',
      title: 'GES ve Elektrik Tesisatı Yangınlarında Arıza ve Kusur Tespiti',
      category: 'Adli Mühendislik',
      author: 'Elektrik & Enerji Mühendisliği Kurulu',
      date: '28 Temmuz 2026',
      summary: 'Güneş enerjisi santrallerinde (GES) inverter, arklanma ve tesisat kaynaklı yangınlar ile kaçak elektrik cezalarında teknik raporlama.',
      content: `Elektrik tesisatı ve endüstriyel tesis yangınlarında yangının çıkış sebebinin (ark, aşırı ısınma, nötr kopması veya dış müdahale) tespiti bilimsel adli mühendislik metotlarıyla mümkündür.

Laboratuvar incelemelerinde termal kamera verileri, şalter açma eğrileri ve nötr hatları incelenerek kusur oranları tarafsız olarak mütalaaya dökülmektedir.`
    }
  ];

  // Function to load settings
  function loadSettings() {
    try {
      const saved = localStorage.getItem('adli_site_settings');
      if (saved) return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
    } catch (e) {
      console.error('Settings parse error:', e);
    }
    return DEFAULT_SETTINGS;
  }

  // Function to load articles
  function loadArticles() {
    try {
      const saved = localStorage.getItem('adli_site_articles');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Articles parse error:', e);
    }
    return DEFAULT_ARTICLES;
  }

  // Save articles to localStorage
  function saveArticles(articles) {
    localStorage.setItem('adli_site_articles', JSON.stringify(articles));
  }

  // Apply settings to DOM
  function applySettings(settings) {
    document.querySelectorAll('.data-phone-val').forEach(el => el.textContent = settings.phone);
    document.querySelectorAll('.data-phone-text').forEach(el => el.textContent = `İletişim: ${settings.phone}`);

    const cleanPhoneNum = settings.phone.replace(/\D/g, '');
    const formattedTel = cleanPhoneNum.startsWith('90') ? cleanPhoneNum : (cleanPhoneNum.startsWith('0') ? '9' + cleanPhoneNum : '90' + cleanPhoneNum);

    document.querySelectorAll('.data-phone-link').forEach(el => el.setAttribute('href', `tel:${cleanPhoneNum}`));

    const waLink = document.querySelector('.id-wa-link');
    if (waLink) {
      waLink.setAttribute('href', `https://wa.me/${formattedTel}?text=Merhaba,%20uzman%20m%C3%BCtalaas%C4%B1%20ve%20dan%C4%B1%C5%9Fmanl%C4%B1k%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`);
    }

    document.querySelectorAll('.data-email-val').forEach(el => el.textContent = settings.email);
    document.querySelectorAll('.data-email-link').forEach(el => el.setAttribute('href', `mailto:${settings.email}`));

    document.querySelectorAll('.data-office-val').forEach(el => el.textContent = settings.office);

    const heroTitle = document.querySelector('.data-hero-title');
    if (heroTitle) heroTitle.textContent = settings.heroTitle;

    const heroSub = document.querySelector('.data-hero-sub');
    if (heroSub) heroSub.textContent = settings.heroSub;
  }

  // Render articles on frontend pages
  function renderArticles(filterCategory = 'all') {
    const articles = loadArticles();
    const articlesContainer = document.getElementById('articlesContainer');
    const homeArticlesGrid = document.getElementById('homeArticlesGrid');

    let filtered = filterCategory === 'all' ? articles : articles.filter(a => a.category === filterCategory);

    // 1. Render on Makaleler.html
    if (articlesContainer) {
      articlesContainer.innerHTML = '';
      if (filtered.length === 0) {
        articlesContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 3rem;">Bu kategoride henüz yayınlanmış makale bulunmamaktadır.</div>';
      } else {
        filtered.forEach(art => {
          const cardHtml = `
            <div class="article-card">
              <div class="article-card-header">
                <span class="article-badge">${art.category}</span>
                <span class="article-date">${art.date}</span>
              </div>
              <div class="article-card-body">
                <h3 class="article-card-title">${art.title}</h3>
                <p class="article-card-summary">${art.summary}</p>
                <div class="article-card-footer">
                  <span><i class="fa-solid fa-user-pen"></i> ${art.author}</span>
                  <span class="article-read-btn" data-id="${art.id}">Oku <i class="fa-solid fa-arrow-right"></i></span>
                </div>
              </div>
            </div>
          `;
          articlesContainer.insertAdjacentHTML('beforeend', cardHtml);
        });

        // Add modal click handlers
        articlesContainer.querySelectorAll('.article-read-btn').forEach(btn => {
          btn.addEventListener('click', () => openArticleModal(btn.dataset.id));
        });
      }
    }

    // 2. Render latest 3 on index.html
    if (homeArticlesGrid) {
      homeArticlesGrid.innerHTML = '';
      const latest3 = articles.slice(0, 3);
      latest3.forEach(art => {
        const cardHtml = `
          <div class="article-card">
            <div class="article-card-header">
              <span class="article-badge">${art.category}</span>
              <span class="article-date">${art.date}</span>
            </div>
            <div class="article-card-body">
              <h3 class="article-card-title">${art.title}</h3>
              <p class="article-card-summary">${art.summary}</p>
              <div class="article-card-footer">
                <span><i class="fa-solid fa-user-pen"></i> ${art.author}</span>
                <a href="makaleler.html" class="article-read-btn">Detaylar <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        `;
        homeArticlesGrid.insertAdjacentHTML('beforeend', cardHtml);
      });
    }
  }

  // Open Article Reading Modal
  function openArticleModal(articleId) {
    const articles = loadArticles();
    const article = articles.find(a => a.id === articleId);
    const readModal = document.getElementById('articleReadModal');

    if (article && readModal) {
      document.getElementById('readArticleTitle').textContent = article.title;
      document.getElementById('readArticleCategory').textContent = article.category;
      document.getElementById('readArticleDate').textContent = article.date;
      document.getElementById('readArticleAuthor').textContent = article.author;
      document.getElementById('readArticleBody').innerHTML = article.content.replace(/\n/g, '<br/>');

      readModal.classList.add('active');
    }
  }

  // Close Article Modal Handler
  const articleModalClose = document.querySelector('.id-article-close');
  const readModal = document.getElementById('articleReadModal');
  articleModalClose?.addEventListener('click', () => readModal?.classList.remove('active'));
  readModal?.addEventListener('click', (e) => {
    if (e.target === readModal) readModal.classList.remove('active');
  });

  // Filter Buttons on makaleler.html
  document.querySelectorAll('.article-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.article-filter-btn').forEach(b => {
        b.classList.remove('active');
        b.style.background = 'rgba(255,255,255,0.05)';
        b.style.color = '#cbd5e1';
      });
      btn.classList.add('active');
      btn.style.background = 'rgba(2, 132, 199, 0.2)';
      btn.style.color = '#38bdf8';

      renderArticles(btn.dataset.filter);
    });
  });

  // Initialize
  let currentSettings = loadSettings();
  applySettings(currentSettings);
  renderArticles();

  // 3. Active Nav Link Detection
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 4. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }

  // 5. Sticky Header Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header?.classList.add('scrolled');
    else header?.classList.remove('scrolled');
  });

  // 6. Fast Upload Modal
  const modalOverlay = document.getElementById('uploadModal');
  const triggerBtns = document.querySelectorAll('.trigger-modal');
  const closeBtn = document.querySelector('.modal-close');

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay?.classList.add('active');
    });
  });

  closeBtn?.addEventListener('click', () => modalOverlay?.classList.remove('active'));
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
  });

  const modalForm = document.getElementById('modalForm');
  modalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Talebiniz ve dosyanız başarıyla iletilmiştir. Uzmanlarımız 24 saat içinde tarafınızla iletişime geçecektir.');
    modalOverlay?.classList.remove('active');
    modalForm.reset();
  });

  const contactPageForm = document.getElementById('contactPageForm');
  contactPageForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mütalaa talebiniz ve dosyanız güvenli şekilde iletilmiştir. Uzmanlarımız 24 saat içinde tarafınıza dönüş yapacaktır.');
    contactPageForm.reset();
  });

  // ==========================================================================
  // ADMIN DASHBOARD & CMS LOGIC (ADMIN.HTML)
  // ==========================================================================
  const pinLockOverlay = document.getElementById('pinLockOverlay');
  const pinForm = document.getElementById('pinForm');
  const pinInput = document.getElementById('pinInput');

  if (pinForm && pinLockOverlay) {
    pinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (pinInput.value === '1234') {
        pinLockOverlay.classList.remove('active');
        initAdminDashboard();
      } else {
        alert('Hatalı PIN Kodu! Lütfen tekrar deneyiniz.');
        pinInput.value = '';
      }
    });
  }

  function initAdminDashboard() {
    const settings = loadSettings();
    const articles = loadArticles();

    // Update Overview Stats
    const dashArticleCount = document.getElementById('dashArticleCount');
    if (dashArticleCount) dashArticleCount.textContent = articles.length;

    // Admin Sidebar Tab Switcher
    const adminNavItems = document.querySelectorAll('.admin-nav-item');
    const adminTabContents = document.querySelectorAll('.admin-tab-content');

    adminNavItems.forEach(item => {
      item.addEventListener('click', () => {
        adminNavItems.forEach(i => i.classList.remove('active'));
        adminTabContents.forEach(c => c.classList.remove('active'));

        item.classList.add('active');
        const targetTab = document.getElementById(item.dataset.tab);
        if (targetTab) targetTab.classList.add('active');
      });
    });

    // Populate Settings Form Inputs
    const settingPhone = document.getElementById('settingPhone');
    const settingEmail = document.getElementById('settingEmail');
    const settingOffice = document.getElementById('settingOffice');
    const settingHeroTitle = document.getElementById('settingHeroTitle');
    const settingHeroSub = document.getElementById('settingHeroSub');

    if (settingPhone) settingPhone.value = settings.phone;
    if (settingEmail) settingEmail.value = settings.email;
    if (settingOffice) settingOffice.value = settings.office;
    if (settingHeroTitle) settingHeroTitle.value = settings.heroTitle;
    if (settingHeroSub) settingHeroSub.value = settings.heroSub;

    // Contact Form Submit
    document.getElementById('adminContactForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const updated = {
        ...loadSettings(),
        phone: settingPhone.value,
        email: settingEmail.value,
        office: settingOffice.value
      };
      localStorage.setItem('adli_site_settings', JSON.stringify(updated));
      applySettings(updated);
      alert('İletişim bilgileri tüm sayfalarda başarıyla güncellendi!');
    });

    // Hero Form Submit
    document.getElementById('adminHeroForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const updated = {
        ...loadSettings(),
        heroTitle: settingHeroTitle.value,
        heroSub: settingHeroSub.value
      };
      localStorage.setItem('adli_site_settings', JSON.stringify(updated));
      applySettings(updated);
      alert('Ana sayfa metinleri başarıyla güncellendi!');
    });

    // Render Admin Articles Table
    renderAdminArticlesTable();

    // Article Form Open / Cancel
    const openAddBtn = document.getElementById('openAddArticleBtn');
    const formBox = document.getElementById('articleFormBox');
    const cancelBtn = document.getElementById('cancelArticleBtn');
    const articleForm = document.getElementById('adminArticleForm');

    openAddBtn?.addEventListener('click', () => {
      articleForm.reset();
      document.getElementById('articleId').value = '';
      document.getElementById('articleFormTitle').textContent = 'Yeni Makale / Haber Ekle';
      formBox.style.display = 'block';
    });

    cancelBtn?.addEventListener('click', () => formBox.style.display = 'none');

    // Save/Update Article Submit
    articleForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      let currentArticles = loadArticles();
      const idInput = document.getElementById('articleId').value;
      const titleInput = document.getElementById('articleTitleInput').value;
      const catInput = document.getElementById('articleCategoryInput').value;
      const authorInput = document.getElementById('articleAuthorInput').value;
      const summaryInput = document.getElementById('articleSummaryInput').value;
      const contentInput = document.getElementById('articleContentInput').value;

      if (idInput) {
        // Edit existing
        currentArticles = currentArticles.map(a => {
          if (a.id === idInput) {
            return {
              ...a,
              title: titleInput,
              category: catInput,
              author: authorInput,
              summary: summaryInput,
              content: contentInput
            };
          }
          return a;
        });
      } else {
        // Add new
        const newArt = {
          id: 'art-' + Date.now(),
          title: titleInput,
          category: catInput,
          author: authorInput,
          date: new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' }),
          summary: summaryInput,
          content: contentInput
        };
        currentArticles.unshift(newArt);
      }

      saveArticles(currentArticles);
      renderAdminArticlesTable();
      renderArticles();
      formBox.style.display = 'none';
      articleForm.reset();
      alert('Makale başarıyla kaydedildi ve yayınlandı!');
    });
  }

  // Render Admin Table
  function renderAdminArticlesTable() {
    const tableBody = document.getElementById('adminArticlesTableBody');
    if (!tableBody) return;

    const articles = loadArticles();
    tableBody.innerHTML = '';

    articles.forEach(art => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${art.date}</td>
        <td><strong>${art.title}</strong></td>
        <td><span class="article-badge">${art.category}</span></td>
        <td>${art.author}</td>
        <td>
          <button class="admin-action-btn btn-edit" data-id="${art.id}"><i class="fa-solid fa-pen"></i> Düzenle</button>
          <button class="admin-action-btn btn-delete" data-id="${art.id}"><i class="fa-solid fa-trash"></i> Sil</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });

    // Edit Button Handlers
    tableBody.querySelectorAll('.btn-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const artId = btn.dataset.id;
        const art = articles.find(a => a.id === artId);
        if (art) {
          document.getElementById('articleId').value = art.id;
          document.getElementById('articleTitleInput').value = art.title;
          document.getElementById('articleCategoryInput').value = art.category;
          document.getElementById('articleAuthorInput').value = art.author;
          document.getElementById('articleSummaryInput').value = art.summary;
          document.getElementById('articleContentInput').value = art.content;
          document.getElementById('articleFormTitle').textContent = 'Makaleyi Düzenle';
          document.getElementById('articleFormBox').style.display = 'block';
        }
      });
    });

    // Delete Button Handlers
    tableBody.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('Bu makaleyi silmek istediğinizden emin misiniz?')) {
          const artId = btn.dataset.id;
          let currentArticles = loadArticles();
          currentArticles = currentArticles.filter(a => a.id !== artId);
          saveArticles(currentArticles);
          renderAdminArticlesTable();
          renderArticles();
        }
      });
    });
  }

});
