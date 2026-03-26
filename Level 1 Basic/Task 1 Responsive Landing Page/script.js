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
setInterval(changeBackground, 45000);

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

// Blog Section - Scroll Animation for Blog Cards
document.querySelectorAll(".blog-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Blog Read More Buttons
document.querySelectorAll(".btn-read-more").forEach((button) => {
  button.addEventListener("click", function () {
    const blogCard = this.closest(".blog-card");
    const blogTitle = blogCard.querySelector(".blog-title").textContent;

    alert(
      `Opening article: "${blogTitle}"\\n\\nThis would redirect to the full article page.`,
    );
    // In a real application, this would redirect to the full blog post
  });
});

// View All Blog Articles Button
const viewAllBlogBtn = document.querySelector(".btn-view-all-blog");
if (viewAllBlogBtn) {
  viewAllBlogBtn.addEventListener("click", () => {
    alert(
      "Explore our complete collection of travel articles and guides!\\n\\nRedirecting to blog page...",
    );
    // In a real application, this would redirect to a blog catalog page
  });
}

// Contact Form Submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Display success message
    alert(
      `Thank you for contacting us, ${name}!\n\nWe have received your message about "${subject}".\n\nOur team will respond to ${email} within 24 hours.\n\nBest regards,\nElite Travel Experiences Team`,
    );

    // Reset form
    contactForm.reset();

    // In a real application, this would send the data to a server
  });
}

// AI Assistant Chat Widget
const aiAssistantBtn = document.querySelector(".ai-assistant-btn");
const aiChatWidget = document.querySelector(".ai-chat-widget");
const aiChatClose = document.querySelector(".ai-chat-close");
const aiChatInput = document.querySelector(".ai-chat-input");
const aiChatSend = document.querySelector(".ai-chat-send");
const aiChatBody = document.querySelector(".ai-chat-body");

// Toggle chat widget
if (aiAssistantBtn && aiChatWidget) {
  aiAssistantBtn.addEventListener("click", () => {
    aiChatWidget.classList.toggle("active");
    if (aiChatWidget.classList.contains("active")) {
      aiChatInput.focus();
    }
  });
}

// Close chat widget
if (aiChatClose) {
  aiChatClose.addEventListener("click", () => {
    aiChatWidget.classList.remove("active");
  });
}

// Send message function
function sendAIMessage() {
  const message = aiChatInput.value.trim();
  if (message) {
    // Add user message
    addChatMessage(message, "user");
    aiChatInput.value = "";

    // Simulate AI response after a short delay
    setTimeout(() => {
      const response = getAIResponse(message);
      addChatMessage(response, "ai");
    }, 1000);
  }
}

// Add message to chat
function addChatMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `ai-chat-message ${sender === "user" ? "user-message" : "ai-message"}`;

  const avatar = document.createElement("div");
  avatar.className = "message-avatar";

  if (sender === "ai") {
    avatar.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  } else {
    avatar.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
        <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="currentColor" stroke-width="2"/>
      </svg>
    `;
  }

  const content = document.createElement("div");
  content.className = "message-content";
  const p = document.createElement("p");
  p.textContent = text;
  content.appendChild(p);

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(content);
  aiChatBody.appendChild(messageDiv);

  // Scroll to bottom
  aiChatBody.scrollTop = aiChatBody.scrollHeight;
}

// Simple AI response logic
function getAIResponse(message) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return "Hello! How can I help you plan your next adventure?";
  } else if (
    lowerMessage.includes("destination") ||
    lowerMessage.includes("where")
  ) {
    return "We offer amazing destinations like Maldives, Tokyo, Paris, Dubai, and Santorini! Which one interests you?";
  } else if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
    return "Our packages start from $899 per person. Would you like details about a specific tour?";
  } else if (
    lowerMessage.includes("book") ||
    lowerMessage.includes("reserve")
  ) {
    return "Great! You can book by scrolling to our contact section or calling us at +250 780-197-780. When would you like to travel?";
  } else if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("email")
  ) {
    return "You can reach us at michelmunezero@gmail.com or call +250 780-197-780. We're here to help!";
  } else if (lowerMessage.includes("thank")) {
    return "You're welcome! Have a wonderful day and happy travels! ✈️";
  } else {
    return "I'd be happy to help you with that! For personalized assistance, please scroll to our contact section or email us at michelmunezero@gmail.com.";
  }
}

// Send message on button click
if (aiChatSend) {
  aiChatSend.addEventListener("click", sendAIMessage);
}

// Send message on Enter key
if (aiChatInput) {
  aiChatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendAIMessage();
    }
  });
}
