// ===== Menú hamburguesa =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ===== Botón volver arriba =====
const btnTop = document.getElementById("btnTop");
if (btnTop) {
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== Modo oscuro con persistencia =====
const toggleThemeBtn = document.createElement("button");
toggleThemeBtn.id = "toggleTheme";
document.querySelector("footer").appendChild(toggleThemeBtn);

// Función para aplicar tema según estado guardado
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    toggleThemeBtn.innerText = "☀️ Modo Claro";
  } else {
    document.body.classList.remove("dark-mode");
    toggleThemeBtn.innerText = "🌙 Modo Oscuro";
  }
}

// Revisar localStorage al cargar la página
let savedTheme = localStorage.getItem("theme");
if (!savedTheme) {
  // Si no hay preferencia, tomar la del sistema
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    savedTheme = "dark";
  } else {
    savedTheme = "light";
  }
}
applyTheme(savedTheme);

// Evento al presionar el botón
toggleThemeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});
