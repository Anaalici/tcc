


const toggle = document.getElementById("togglePaginas");
const pages = document.getElementById("pages");
const icone = document.getElementById("iconeSwitch");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    pages.style.transform = "translateX(-100%)";
    icone.textContent = "🧂"; 
  } else {
    pages.style.transform = "translateX(0%)";
    icone.textContent = "🍴"; // Página 1
  }
});

/*
const input = document.getElementById('searchInput');

input.addEventListener('input', () => {
  const termo = input.value.toLowerCase();
  const cards = document.querySelectorAll('#receitas .quadrados');

  cards.forEach(card => {
    const titulo = card.querySelector('.escrita').textContent.toLowerCase();

    if (titulo.includes(termo)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});*/






