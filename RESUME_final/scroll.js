// Modal functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".art-image");

// Open modal on image click
images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = image.src;
    });
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal on outside click
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const video = document.getElementById('myVideo');

video.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});