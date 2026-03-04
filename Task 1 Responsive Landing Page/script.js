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

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// Tours Section - Book Now Buttons
document.querySelectorAll(".btn-book").forEach((button) => {
  button.addEventListener("click", function () {
    const tourCard = this.closest(".tour-card");
    const tourTitle = tourCard.querySelector(".tour-title").textContent;
    const tourPrice = tourCard.querySelector(".price-amount").textContent;

    // Create a simple confirmation message
    const confirmed = confirm(
      `Book "${tourTitle}" for ${tourPrice}/person?\n\nClick OK to proceed to booking.`,
    );

    if (confirmed) {
      // In a real application, this would redirect to a booking page
      alert(
        "Thank you for your interest! A travel specialist will contact you shortly.",
      );
    }
  });
});

// View All Tours Button
const viewAllBtn = document.querySelector(".btn-view-all");
if (viewAllBtn) {
  viewAllBtn.addEventListener("click", () => {
    alert(
      "Explore our complete collection of luxury tours on our booking platform!",
    );
    // In a real application, this would redirect to a tours catalog page
  });
}

// Scroll Animation for Tour Cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all tour cards
document.querySelectorAll(".tour-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Search Form Submission
const searchForm = document.querySelector(".search-form");
if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const destination = document.getElementById("destination").value;
    const travelStyle = document.getElementById("travel-style").value;
    const dates = document.getElementById("dates").value;
    const travelers = document.getElementById("travelers").value;

    alert(
      `Searching for:\n\nDestination: ${destination}\nTravel Style: ${travelStyle}\nDates: ${dates}\nTravelers: ${travelers}\n\nResults loading...`,
    );
    // In a real application, this would trigger a search API call
  });
}

// Service Section - Scroll Animation for Service Cards
// Service Section - Scroll Animation for Service Cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Service Card Flip Animation
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// Contact Us Button
const contactBtn = document.querySelector(".btn-contact");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    const contactConfirm = confirm(
      "Would you like to speak with one of our luxury travel specialists?\\n\\nClick OK to proceed to contact form.",
    );

    if (contactConfirm) {
      alert(
        "Thank you for your interest!\\n\\nOur team will contact you within 24 hours.\\n\\nEmail: michelmunezero@gmail.com\\nPhone: + (250) 780-197-780",
      );
      // In a real application, this would open a contact form or redirect to contact page
    }
  });
}
