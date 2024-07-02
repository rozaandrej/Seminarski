document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementsByClassName('close')[0];
    const galleryItems = document.querySelectorAll('.galerija-stavka img');
    const rightArrow = document.getElementById('desna-strela');
    const leftArrow = document.getElementById('leva-strela');
    
    let currentIndex;
  
    const showImage = (index) => {
      currentIndex = index;
      modalImg.src = galleryItems[index].src;
      modal.style.display = 'block';
    };
  
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        showImage(index);
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      showImage(currentIndex);
    });
  
    leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      showImage(currentIndex);
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  