// Menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Botón volver arriba
const btnTop = document.getElementById("btnTop");
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🌙 Modo oscuro
const toggleThemeBtn = document.createElement("button");
toggleThemeBtn.innerText = "🌙 Modo Oscuro";
toggleThemeBtn.id = "toggleTheme";
document.querySelector("footer").appendChild(toggleThemeBtn);

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleThemeBtn.innerText = "☀️ Modo Claro";
  } else {
    toggleThemeBtn.innerText = "🌙 Modo Oscuro";
  }
});
