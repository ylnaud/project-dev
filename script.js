document.addEventListener("DOMContentLoaded", function () {
  // Toggle para menú móvil
  const menuToggle = document.querySelector(".menu-toggle");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const menuMobile = document.querySelector(".menu-mobile");

  menuToggle.addEventListener("click", function () {
    hamburgerIcon.classList.toggle("open");
    menuMobile.classList.toggle("active");
  });

  // Toggle para modo oscuro
  const darkModeToggle = document.querySelector(".dark-mode-toggle");

  // Cargar la preferencia del modo oscuro al iniciar
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️"; // Sol para modo oscuro
  } else {
    document.body.classList.remove("dark-mode");
    darkModeToggle.textContent = "🌕"; // Luna para modo claro
  }

  // Cambiar el modo y guardar la preferencia
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled"); // Guardar preferencia
      darkModeToggle.textContent = "☀️"; // Sol para modo oscuro
    } else {
      localStorage.setItem("dark-mode", "disabled"); // Guardar preferencia
      darkModeToggle.textContent = "🌕"; // Luna para modo claro
    }
  });

  // Toggle para FAQs
  const faqToggles = document.querySelectorAll(".faq-toggle");

  faqToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.classList.toggle("visible");
    });
  });
});
