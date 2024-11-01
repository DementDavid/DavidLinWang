let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function setSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }

  // Automatic slide change
  setInterval(nextSlide, 3000);

  // Event listeners for manual control
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => setSlide(i));
  });

  // Event listeners for arrow controls
  document.querySelector('.prev').addEventListener('click', prevSlide);
  document.querySelector('.next').addEventListener('click', nextSlide);