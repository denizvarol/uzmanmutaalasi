/* ==========================================================================
   UZMAN İNCELEME - ADLİ MÜHENDİSLİK & BİLİŞİM INTERACTIVE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. DEFAULT SITE SETTINGS
  const DEFAULT_SETTINGS = {
    phone: '0532 642 26 57',
    email: 'info@uzmaninceleme.com',
    office: 'Ankara, Türkiye',
    heroTitle: 'Teknik Doğruluk. Hukuki Güç.',
    heroSub: 'Elektrik, elektronik, enerji, dijital delil, yangın, sigorta, adli hesap ve teknik uyuşmazlıklarda uzman inceleme, raporlama ve uzman mütalaası hizmetleri.'
  };

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
  }

  // Initialize and apply settings immediately
  let currentSettings = loadSettings();
  applySettings(currentSettings);

  // 2. ACTIVE NAVIGATION ITEM HIGHLIGHT
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 3. INJECT FIXED MOBILE BOTTOM NAVIGATION BAR (MOCKUP BİREBİR)
  if (!document.querySelector('.mobile-bottom-nav')) {
    const isIndex = currentPath === 'index.html' || currentPath === '';
    const isUzmanlik = currentPath === 'uzmanliklar.html';
    const isDergi = currentPath === 'makaleler.html';
    const isEgitim = currentPath === 'egitimler.html';
    const isIletisim = currentPath === 'iletisim.html';

    const mobileNavHTML = `
      <nav class="mobile-bottom-nav">
        <a href="index.html" class="mobile-bottom-nav-item ${isIndex ? 'active' : ''}">
          <i class="fa-solid fa-house"></i>
          <span>Ana Sayfa</span>
        </a>
        <a href="uzmanliklar.html" class="mobile-bottom-nav-item ${isUzmanlik ? 'active' : ''}">
          <i class="fa-solid fa-briefcase"></i>
          <span>Uzmanlık</span>
        </a>
        <a href="makaleler.html" class="mobile-bottom-nav-item ${isDergi ? 'active' : ''}">
          <i class="fa-solid fa-book-open"></i>
          <span>Dergi</span>
        </a>
        <a href="egitimler.html" class="mobile-bottom-nav-item ${isEgitim ? 'active' : ''}">
          <i class="fa-solid fa-graduation-cap"></i>
          <span>Eğitim</span>
        </a>
        <a href="iletisim.html" class="mobile-bottom-nav-item ${isIletisim ? 'active' : ''}">
          <i class="fa-solid fa-envelope"></i>
          <span>İletişim</span>
        </a>
      </nav>
    `;
    document.body.insertAdjacentHTML('beforeend', mobileNavHTML);
  }

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

});
