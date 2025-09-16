// 🌙 Modo oscuro con persistencia
const toggleThemeBtn = document.createElement("button");
toggleThemeBtn.id = "toggleTheme";
document.querySelector("footer").appendChild(toggleThemeBtn);

// Verificar si hay tema guardado en localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleThemeBtn.innerText = "☀️ Modo Claro";
} else {
  toggleThemeBtn.innerText = "🌙 Modo Oscuro";
}

// Evento para cambiar tema
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleThemeBtn.innerText = "☀️ Modo Claro";
    localStorage.setItem("theme", "dark");
  } else {
    toggleThemeBtn.innerText = "🌙 Modo Oscuro";
    localStorage.setItem("theme", "light");
  }
});
