/* ==========================================================================
   ADLİ TEKNİK & BİLİRKİŞİLİK PLATFORMU - REVISED SCRIPT (app.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Shadow Effect on Scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Drag & Drop File Upload Handler
  const dropzones = document.querySelectorAll('.dropzone');
  dropzones.forEach(dropzone => {
    const fileInput = dropzone.querySelector('input[type="file"]') || document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    dropzone.appendChild(fileInput);

    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFiles(files, dropzone);
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        handleFiles(fileInput.files, dropzone);
      }
    });
  });

  function handleFiles(files, container) {
    const fileName = files[0].name;
    const fileSize = (files[0].size / (1024 * 1024)).toFixed(2);
    const dropzoneText = container.querySelector('.dropzone-text');
    const dropzoneSubtext = container.querySelector('.dropzone-subtext');

    if (dropzoneText) {
      dropzoneText.innerHTML = `📄 <span style="color: #0284c7;">${fileName}</span> (${fileSize} MB)`;
    }
    if (dropzoneSubtext) {
      dropzoneSubtext.textContent = '✅ Dosya eklendi. Talebiniz için formu gönderin.';
    }
    showToast(`"${fileName}" yükleme için hazırlandı.`);
  }

  // 3. Modal Popup Control
  const modalOverlay = document.getElementById('uploadModal');
  const modalOpenBtns = document.querySelectorAll('.trigger-modal');
  const modalCloseBtn = document.querySelector('.modal-close');

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalOverlay) {
        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 4. Toast Notification Helper
  function showToast(message) {
    let toast = document.getElementById('toastNotification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotification';
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.right = '20px';
      toast.style.backgroundColor = '#0f172a';
      toast.style.color = '#ffffff';
      toast.style.padding = '12px 24px';
      toast.style.borderRadius = '8px';
      toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
      toast.style.zIndex = '3000';
      toast.style.fontWeight = '600';
      toast.style.fontSize = '0.9rem';
      toast.style.borderLeft = '4px solid #0284c7';
      toast.style.transition = 'all 0.3s ease';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 3500);
  }

  // 5. Form Submission Handlers
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('🎉 Talebiniz başarıyla alındı! Ekibimiz kısa sürede sizinle iletişime geçecektir.');
      if (modalOverlay) modalOverlay.classList.remove('active');
      form.reset();
    });
  });
});
