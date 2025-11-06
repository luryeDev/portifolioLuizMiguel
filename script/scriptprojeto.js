// Lista de projetos com imagens
const projetos = [
  {
    nome: "Portfolio Pessoal",
    capa: "",
    screenshots: [
      "img/portfolio1.png",
      "img/portfolio2.png",
      "img/portfolio3.png"
    ]
  },
  {
    nome: "Site Institucional em html, css e sistema em PHP",
    capa: "projetos/Entitys1.png",
    screenshots: [
      "img/snake1.png",
      "img/snake2.png"
    ]
  },
  {
    nome: "Calculadora JS",
    capa: "img/calculadora-thumb.jpg",
    screenshots: [
      "img/calc1.png",
      "img/calc2.png"
    ]
  }
];

const container = document.getElementById("cards-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const screenshotsDiv = document.querySelector(".screenshots");
const closeBtn = document.querySelector(".close");

// Gerar cards dinamicamente
projetos.forEach((proj, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${proj.capa}" alt="${proj.nome}">
    <h3>${proj.nome}</h3>
  `;
  card.addEventListener("click", () => abrirModal(index));
  container.appendChild(card);
});

// Abrir modal
function abrirModal(index) {
  const projeto = projetos[index];
  modalTitle.textContent = projeto.nome;
  screenshotsDiv.innerHTML = projeto.screenshots
    .map(img => `<img src="${img}" alt="${projeto.nome} screenshot">`)
    .join("");
  modal.style.display = "block";
}

// Fechar modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };
