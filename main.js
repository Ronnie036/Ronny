// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Typed Text Animation
  const typed = new Typed(".typedText", {
    strings: [
      "Web Developer",
      "Computer Tutor",
      "Graphic Designer",
      "Content Writer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });

  // Mobile Menu Toggle
  function myMenuFunction() {
    const navMenu = document.getElementById("myNavMenu");
    if (navMenu.className === "nav-menu") {
      navMenu.className += " responsive";
    } else {
      navMenu.className = "nav-menu";
    }
  }

  // Active Link Highlight
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav-menu a[href*=${sectionId}]`)
          .classList.add("active-link");
      } else {
        document
          .querySelector(`.nav-menu a[href*=${sectionId}]`)
          .classList.remove("active-link");
      }
    });
  });

  // Scroll Reveal Animation
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
  });

  sr.reveal(".featured-text, .featured-image", {});
  sr.reveal(".top-header", {});
  sr.reveal(".about-info, .skills-box, .contact-info", { interval: 200 });
  sr.reveal(".project-box", { interval: 200 });
});
