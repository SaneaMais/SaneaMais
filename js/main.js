const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const pageContent = document.querySelector(".page-content");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  pageContent.classList.toggle("hidden"); 
});

document.querySelector('footer a[href="#meu-card"]').addEventListener('click', function(e) {
  e.preventDefault();
  
  const cardElement = document.getElementById('meu-card');
  
  if (cardElement) {
    cardElement.scrollIntoView({ behavior: 'smooth' });
  }
});

