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

  // Function to load settings from localStorage
  function loadSettings() {
    try {
      const saved = localStorage.getItem('adli_site_settings');
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Settings parse error:', e);
    }
    return DEFAULT_SETTINGS;
  }

  // Function to apply settings across the live DOM
  function applySettings(settings) {
    // 1. Update Phone across DOM
    document.querySelectorAll('.data-phone-val').forEach(el => {
      el.textContent = settings.phone;
    });

    document.querySelectorAll('.data-phone-text').forEach(el => {
      el.textContent = `İletişim: ${settings.phone}`;
    });

    // Clean phone number for tel: and wa.me links
    const cleanPhoneNum = settings.phone.replace(/\D/g, '');
    const formattedTel = cleanPhoneNum.startsWith('90') ? cleanPhoneNum : (cleanPhoneNum.startsWith('0') ? '9' + cleanPhoneNum : '90' + cleanPhoneNum);

    document.querySelectorAll('.data-phone-link').forEach(el => {
      el.setAttribute('href', `tel:${cleanPhoneNum}`);
    });

    // Update WhatsApp link
    const waLink = document.querySelector('.id-wa-link');
    if (waLink) {
      waLink.setAttribute('href', `https://wa.me/${formattedTel}?text=Merhaba,%20uzman%20m%C3%BCtalaas%C4%B1%20ve%20dan%C4%B1%C5%9Fmanl%C4%B1k%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`);
    }

    // 2. Update Email across DOM
    document.querySelectorAll('.data-email-val').forEach(el => {
      el.textContent = settings.email;
    });
    document.querySelectorAll('.data-email-link').forEach(el => {
      el.setAttribute('href', `mailto:${settings.email}`);
    });

    // 3. Update Office Location across DOM
    document.querySelectorAll('.data-office-val').forEach(el => {
      el.textContent = settings.office;
    });

    // 4. Update Hero Title & Subtext
    const heroTitle = document.querySelector('.data-hero-title');
    if (heroTitle) heroTitle.textContent = settings.heroTitle;

    const heroSub = document.querySelector('.data-hero-sub');
    if (heroSub) heroSub.textContent = settings.heroSub;
  }

  // Initialize and apply settings immediately
  let currentSettings = loadSettings();
  applySettings(currentSettings);

  // 2. Mobile Menu Drawer Toggle
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
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // 3. Sticky Header Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 4. Fast File Upload Modal Management
  const modalOverlay = document.getElementById('uploadModal');
  const triggerBtns = document.querySelectorAll('.trigger-modal');
  const closeBtn = document.querySelector('.modal-close');

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay?.classList.add('active');
    });
  });

  closeBtn?.addEventListener('click', () => {
    modalOverlay?.classList.remove('active');
  });

  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  const modalForm = document.getElementById('modalForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Talebiniz ve dosyanız başarıyla iletilmiştir. Uzmanlarımız 24 saat içinde tarafınızla iletişime geçecektir.');
      modalOverlay?.classList.remove('active');
      modalForm.reset();
    });
  }

  // 5. ADMIN PANEL MODAL MANAGEMENT
  const adminPanelBtn = document.getElementById('adminPanelBtn');
  const adminModal = document.getElementById('adminModal');
  const adminCloseBtn = document.querySelector('.id-admin-close');
  const adminForm = document.getElementById('adminForm');
  const adminResetBtn = document.getElementById('adminResetBtn');

  // Input elements
  const inputPhone = document.getElementById('adminPhone');
  const inputEmail = document.getElementById('adminEmail');
  const inputOffice = document.getElementById('adminOffice');
  const inputHeroTitle = document.getElementById('adminHeroTitle');
  const inputHeroSub = document.getElementById('adminHeroSub');

  if (adminPanelBtn && adminModal) {
    adminPanelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Populate admin form inputs with current settings
      const settings = loadSettings();
      if (inputPhone) inputPhone.value = settings.phone;
      if (inputEmail) inputEmail.value = settings.email;
      if (inputOffice) inputOffice.value = settings.office;
      if (inputHeroTitle) inputHeroTitle.value = settings.heroTitle;
      if (inputHeroSub) inputHeroSub.value = settings.heroSub;

      adminModal.classList.add('active');
    });

    adminCloseBtn?.addEventListener('click', () => {
      adminModal.classList.remove('active');
    });

    adminModal.addEventListener('click', (e) => {
      if (e.target === adminModal) {
        adminModal.classList.remove('active');
      }
    });

    if (adminForm) {
      adminForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newSettings = {
          phone: inputPhone?.value || DEFAULT_SETTINGS.phone,
          email: inputEmail?.value || DEFAULT_SETTINGS.email,
          office: inputOffice?.value || DEFAULT_SETTINGS.office,
          heroTitle: inputHeroTitle?.value || DEFAULT_SETTINGS.heroTitle,
          heroSub: inputHeroSub?.value || DEFAULT_SETTINGS.heroSub
        };

        localStorage.setItem('adli_site_settings', JSON.stringify(newSettings));
        applySettings(newSettings);
        alert('Site bilgileri başarıyla güncellendi ve kaydedildi!');
        adminModal.classList.remove('active');
      });
    }

    if (adminResetBtn) {
      adminResetBtn.addEventListener('click', () => {
        if (confirm('Tüm site bilgilerini orijinal varsayılan değerlerine sıfırlamak istiyor musunuz?')) {
          localStorage.removeItem('adli_site_settings');
          applySettings(DEFAULT_SETTINGS);
          alert('Site bilgileri varsayılan değerlerine sıfırlandı!');
          adminModal.classList.remove('active');
        }
      });
    }
  }

});
