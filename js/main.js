const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const pageContent = document.querySelector(".page-content"); // Adicione uma classe "page-content" para o conteúdo que você deseja ocultar.

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  pageContent.classList.toggle("hidden"); // Toggle a classe "hidden" para ocultar ou mostrar o conteúdo da página.
});
