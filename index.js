// TAILWIND CONFIGURATION
tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    animation: {
                        'gradient-slow': 'gradient-xy 18s ease-in-out infinite',
                        'gradient': 'gradient-xy 12s ease-in-out infinite',
                    },
                    keyframes: {
                        'gradient-xy': {
                            '0%, 100%': { 'background-position': '0% 50%' },
                            '50%': { 'background-position': '100% 50%' },
                        }
                    }
                }
            }
        }

// Initialize Icons
lucide.createIcons();

// Greeting Cycle
const greetings = [
  "Hi, I'm",
  "नमस्ते, म",
  "Bonjour, je suis",
  "Hola, soy",
  "Ciao, sono",
  "こんにちは、私は",
  "你好，我是",
];
let i = 0;
const greetingElement = document.getElementById("greeting-text");
setInterval(() => {
  i = (i + 1) % greetings.length;
  greetingElement.style.opacity = 0;
  setTimeout(() => {
    greetingElement.innerText = greetings[i];
    greetingElement.style.opacity = 1;
  }, 300);
}, 2000);

// Auto Update Year
document.getElementById(
  "copyright"
).innerText = `© ${new Date().getFullYear()} Ayush Shrestha. All rights reserved.`;

// Mobile Menu Logic
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");

    // Optional: visual toggle feedback on navbar
    if (!mobileMenu.classList.contains("hidden")) {
      navbar.classList.remove("rounded-[2rem]");
      navbar.classList.add("rounded-2xl");
    } else {
      navbar.classList.add("rounded-[2rem]");
      navbar.classList.remove("rounded-2xl");
    }
  });
}

function closeMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    navbar.classList.add("rounded-[2rem]");
    navbar.classList.remove("rounded-2xl");
  }
}

// Scroll to Top Logic
const scrollTopBtn = document.getElementById("scroll-top-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.remove("hidden");
    scrollTopBtn.classList.add("flex");
  } else {
    scrollTopBtn.classList.add("hidden");
    scrollTopBtn.classList.remove("flex");
  }

  // Active Section Highlight
  const sections = ["home", "experience", "tools", "education"];
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const element = document.getElementById(section);
    if (element) {
      const sectionTop = element.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section;
      }
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-[#1d1d1f]", "font-bold");
    link.classList.add("text-gray-500", "font-medium");
    if (link.dataset.section === current) {
      link.classList.add("text-[#1d1d1f]", "font-bold");
      link.classList.remove("text-gray-500", "font-medium");
    }
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
