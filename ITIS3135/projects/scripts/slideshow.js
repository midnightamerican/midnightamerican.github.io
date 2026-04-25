let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let interval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Next button
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Previous button
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Start auto slideshow
function startAutoSlide() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000);
}

// Stop auto slideshow
function stopAutoSlide() {
  clearInterval(interval);
}

// Pause on hover
const container = document.querySelector(".slideshow-container");

container.addEventListener("mouseenter", stopAutoSlide);
container.addEventListener("mouseleave", startAutoSlide);

// Start it
startAutoSlide();