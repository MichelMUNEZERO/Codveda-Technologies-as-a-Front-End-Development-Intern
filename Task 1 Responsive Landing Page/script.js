// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Background image slideshow - changes every 1 minute (60000ms)
const heroSection = document.querySelector(".hero");
const backgroundImages = [
  "Photo/pexels-pixabay-415980.jpg",
  "Photo/pexels-navneet-shanu-202773-672630.jpg",
  "Photo/pexels-pixabay-236296.jpg",
  "Photo/pexels-pixabay-415708.jpg",
  "Photo/pexels-rbrigant44-771881.jpg",
];

let currentImageIndex = 0;

function changeBackground() {
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  heroSection.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
  heroSection.style.transition = "background-image 1s ease-in-out";
}

// Change background every 1 minute (60000 milliseconds)
setInterval(changeBackground, 60000);
