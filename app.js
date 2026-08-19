/* ==========================================================================
   UZMAN İNCELEME - ADLİ MÜHENDİSLİK & BİLİŞİM INTERACTIVE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. DEFAULT SITE SETTINGS
  const DEFAULT_SETTINGS = {
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
    } else if (currentPath === 'makaleler.html' && link.classList.contains('nav-dropdown-trigger')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 3. INJECT FIXED MOBILE BOTTOM NAVIGATION BAR
  if (!document.querySelector('.mobile-bottom-nav')) {
        const isIndex = currentPath === 'index.html' || currentPath === '';
    const isKurumsal = currentPath === 'kurumsal.html';
    const isUzmanlik = currentPath === 'uzmanliklar.html';
    const isHaberler = currentPath === 'haberler.html' || currentPath.startsWith('haber-');
    const isIletisim = currentPath === 'iletisim.html';

    const mobileNavHTML = 
      <nav class="mobile-bottom-nav">
        <a href="index.html" class="mobile-bottom-nav-item ">
          <i class="fa-solid fa-house"></i>
          <span>Ana Sayfa</span>
        </a>
        <a href="kurumsal.html" class="mobile-bottom-nav-item ">
          <i class="fa-solid fa-building"></i>
          <span>Kurumsal</span>
        </a>
        <a href="uzmanliklar.html" class="mobile-bottom-nav-item ">
          <i class="fa-solid fa-briefcase"></i>
          <span>UzmanlÄ±k</span>
        </a>
        <a href="haberler.html" class="mobile-bottom-nav-item ">
          <i class="fa-solid fa-newspaper"></i>
          <span>Haberler</span>
        </a>
        <a href="iletisim.html" class="mobile-bottom-nav-item ">
          <i class="fa-solid fa-envelope"></i>
          <span>Ä°letiÅŸim</span>
        </a>
      </nav>
    ;
    document.body.insertAdjacentHTML('beforeend', mobileNavHTML);
  }

  // 4. HERO 5-SLIDE CAROUSEL ENGINE (AUTOMATIC 5-SECOND TIMER)
  const heroCarouselWrap = document.querySelector('.hero-carousel-wrap');
  if (heroCarouselWrap) {
    const slides = heroCarouselWrap.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    let currentSlide = 0;
    let autoSlideInterval = null;

    function showSlide(index) {
      if (slides.length === 0) return;
      currentSlide = (index + slides.length) % slides.length;

      slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.add('active');
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.classList.remove('active');
          dot.removeAttribute('aria-current');
        }
      });
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    function startAutoSlide() {
      stopAutoSlide();
      autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
        startAutoSlide();
      });
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    heroCarouselWrap.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroCarouselWrap.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
        startAutoSlide();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
        startAutoSlide();
      }
    }, { passive: true });

    // Initialize first slide and start 5-second automatic timer
    showSlide(0);
    startAutoSlide();
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

  // 7. DYNAMIC RENDERER FOR HOMEPAGE "UZMAN İNCELEME YAYINLARI"
  function renderHomepageArticles() {
    const gridContainer = document.getElementById('homepageArticlesGrid');
    if (!gridContainer) return;

    function getArticlesData() {
      const localData = localStorage.getItem('uzman_yayinlar_data');
      if (localData) {
        try {
          const parsed = JSON.parse(localData);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch(e) {}
      }
      if (window.YAYINLAR_DATA && Array.isArray(window.YAYINLAR_DATA)) {
        return window.YAYINLAR_DATA;
      }
      return [];
    }

    const allArticles = getArticlesData();

    // Filter ONLY "Uzman Makaleleri" (category: "makale")
    const makalelerOnly = allArticles.filter(art => {
      const cat = (art.category || '').toLocaleLowerCase('tr-TR');
      return cat === 'makale' || cat === 'uzman makalesi';
    });

    if (makalelerOnly.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; background: #0e172c; border: 1px dashed rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 2.5rem; text-align: center; color: #cbd5e1;">
          <h3 style="font-size: 1rem; color: #94a3b8; font-weight: 600;">Henüz yayınlanmış uzman makalesi bulunmamaktadır.</h3>
        </div>
      `;
      return;
    }

    // Helper to parse Turkish date strings like "12 Ağustos 2026"
    function parseTurkishDate(dateStr) {
      if (!dateStr) return new Date(0);
      const monthMap = {
        "ocak": 0, "şubat": 1, "mart": 2, "nisan": 3, "mayıs": 4, "haziran": 5,
        "temmuz": 6, "ağustos": 7, "eylül": 8, "ekim": 9, "kasım": 10, "aralık": 11
      };
      const parts = dateStr.trim().toLocaleLowerCase('tr-TR').split(/\s+/);
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = monthMap[parts[1]];
        const year = parseInt(parts[2], 10);
        if (!isNaN(day) && month !== undefined && !isNaN(year)) {
          return new Date(year, month, day);
        }
      }
      const parsed = new Date(dateStr);
      return isNaN(parsed.getTime()) ? new Date(0) : parsed;
    }

    // Sort newest to oldest
    makalelerOnly.sort((a, b) => parseTurkishDate(b.date) - parseTurkishDate(a.date));

    // Pick top 3 latest articles
    const top3 = makalelerOnly.slice(0, 3);

    gridContainer.innerHTML = top3.map(art => {
      const coverImg = art.image || 'assets/uzman_makalesi_thumb.png';
      const authorText = art.author ? ` • ✍️ ${art.author}` : '';
      return `
        <div class="dergi-card light-card">
          <div class="dergi-card-img-box" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('${coverImg}');">
            <span class="dergi-card-tag" style="background: #0284c7;">UZMAN MAKALESİ</span>
          </div>
          <div class="dergi-card-body">
            <span class="dergi-card-date">${art.date || ''}${authorText}</span>
            <h4 class="dergi-card-title">${art.title || 'Uzman Makalesi'}</h4>
            <p class="dergi-card-desc">${art.summary || ''}</p>
            <a href="makaleler.html?id=${encodeURIComponent(art.id)}" class="dergi-card-link">Devamını Oku →</a>
          </div>
        </div>
      `;
    }).join('');
  }

  // renderHomepageArticles(); // Temporarily hidden for launch

});
