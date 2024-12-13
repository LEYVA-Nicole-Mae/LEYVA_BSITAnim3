const carouselInner = document.querySelector('.carousel-inner');
const images = carouselInner.querySelectorAll('img');

let currentIndex = 0;

function scrollCarousel() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(scrollCarousel, 4500); // Adjust interval time as needed

