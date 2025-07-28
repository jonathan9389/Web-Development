const scrollBtn = document.getElementById("scrollTopBtn");
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  };
  scrollBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ✅ Smooth Progress Bar while scrolling
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; 
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  progressBar.style.width = scrollPercent + "%";

  // Fade in when scrolling, fade out when at top
  if (scrollTop > 20) {
    progressBar.classList.add("show");
  } else {
    progressBar.classList.remove("show");
  }
});

  // ✅ Highlight navbar link based on scroll position + Progress Bar update (merged logic)
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 150;
    const atPageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;

    // ✅ Navbar highlight logic
    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (atPageBottom) {
        if (link.getAttribute("href") === "#contact") {
          link.classList.add("active");
        }
      } else if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });

    // ✅ Progress bar logic
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById("progressBar").style.width = scrollPercent + "%";
  });

  // ✅ Scroll reveal effect for sections
  const revealSections = document.querySelectorAll("section");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 100) {
  section.classList.add("reveal");

  // ✅ Smooth stagger for section title
const title = section.querySelector("h2");
if (title && !title.classList.contains("reveal")) {
  setTimeout(() => {
    title.classList.add("reveal");
  }, 150); // slight 150ms delay for premium feel
}
}
    });
  }

  // Trigger on scroll + on page load
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

  // ✅ Scroll reveal for project cards with stagger
  const projectCards = document.querySelectorAll(".project-card");

  function revealCardsOnScroll() {
    const windowHeight = window.innerHeight;
    projectCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight - 100) {
        setTimeout(() => {
          card.classList.add("reveal");
        }, index * 150); // stagger delay
      }
    });
  }

  // ✅ Trigger card reveal on scroll & load
  window.addEventListener("scroll", revealCardsOnScroll);
  window.addEventListener("load", revealCardsOnScroll);
// ✅ Dark Mode toggle
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  darkToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light"); // save user choice
});

// ✅ Load saved theme if available
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    darkToggle.textContent = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    darkToggle.textContent = "🌙 Dark Mode";
  }
} else {
  // ✅ Auto-detect system dark mode on first load
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark-mode");
    darkToggle.textContent = "☀️ Light Mode"; // update button if dark by default
  }
}