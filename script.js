// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: false,
  speed: 800,
  effect: "slide",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Keyboard control
  keyboard: {
    enabled: true,
  },

  // Mouse wheel control
  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },

  // Touch gestures
  touchRatio: 1,
  touchAngle: 45,

  // Autoplay (optional)
  // autoplay: {
  //     delay: 10000,
  //     disableOnInteraction: false,
  // },
});

// Navigation menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link[data-slide]");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const slideIndex = parseInt(this.getAttribute("data-slide"));
      swiper.slideTo(slideIndex);
    });
  });

  // Update active nav link based on current slide
  swiper.on("slideChange", function () {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    const currentSlide = swiper.activeIndex;
    const activeLink = document.querySelector(`[data-slide="${currentSlide}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  });
});

// Competenza cards click functionality
document.addEventListener("DOMContentLoaded", function () {
  const competenzaCards = document.querySelectorAll(".competenza-card");

  competenzaCards.forEach((card) => {
    card.addEventListener("click", function () {
      const page = this.getAttribute("data-page");
      if (page) {
        // For now, show an alert. In a real implementation,
        // you would navigate to the specific page
        alert(
          `Navigazione verso: ${page}\n\nQuesta funzionalità sarà implementata con le pagine di approfondimento.`
        );

        // Uncomment the following line when you have the actual pages:
        // window.location.href = page;
      }
    });
  });
});

// Smooth animations on scroll/slide change
swiper.on("slideChangeTransitionStart", function () {
  // Reset animations
  const currentSlide = document.querySelector(".swiper-slide-active");
  if (currentSlide) {
    const animatedElements = currentSlide.querySelectorAll(
      ".slide-in-bottom, .fade-in-text, .competenza-card"
    );
    animatedElements.forEach((el) => {
      el.style.animation = "none";
      el.offsetHeight; // Trigger reflow
      el.style.animation = null;
    });
  }
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Navbar background on scroll (for mobile) - DISABILITATO
/*
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
});
*/

// Configurazione Google Maps (da personalizzare)
function initMap() {
  // Coordinate di esempio per Livorno
  const livorno = { lat: 43.5482, lng: 10.3116 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: livorno,
    styles: [
      {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [{ color: "#f5f5dc" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#e6f3ff" }],
      },
    ],
  });

  const marker = new google.maps.Marker({
    position: livorno,
    map: map,
    title: "Maria Antonietta Monaco - Psicologa",
  });
}

// WhatsApp widget configuration
function openWhatsApp() {
  const phoneNumber = "39123456789"; // Sostituire con il numero reale
  const message = encodeURIComponent(
    "Ciao, vorrei informazioni sui servizi di psicologia"
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
}
