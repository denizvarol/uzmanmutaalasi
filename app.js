// UZMAN İNCELEME - Interactivity Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Modal Popup Handlers
  const modal = document.getElementById('uploadModal');
  const triggerBtns = document.querySelectorAll('.trigger-modal');
  const closeBtn = document.querySelector('.modal-close');

  if (modal) {
    triggerBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // Dropzone Interactivity
  const dropzone = document.querySelector('.dropzone');
  if (dropzone) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      }, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, () => dropzone.classList.add('dragover'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, () => dropzone.classList.remove('dragover'), false);
    });

    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files.length > 0) {
        const textElem = dropzone.querySelector('.dropzone-text');
        if (textElem) {
          textElem.innerHTML = `<i class="fa-solid fa-check-circle" style="color: #10b981;"></i> ${files[0].name} (${(files[0].size / 1024 / 1024).toFixed(2)} MB Seçildi)`;
        }
      }
    });
  }

  // Form Submission Handler
  const form = document.getElementById('modalForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Talebiniz ve dosyanız 256-bit şifreleme ile başarıyla alındı. Uzman kadromuz 0532 642 26 57 numaralı telefondan ve e-posta adresinizden sizinle iletişime geçecektir.');
      modal.classList.remove('active');
    });
  }
});
