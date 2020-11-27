const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav_links");

// NAV BAR start

// Kad ant mazo ekrano iskristu MediaElementAudioSourceNode, paspaudus ant burgerio
burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav_active");
});




