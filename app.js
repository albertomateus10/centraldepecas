// Lista dos botões com seus nomes e links exatos
const SYSTEMS = [
  {
    id: 1,
    name: "Sugestão de compra",
    url: "https://sugestaodecompra-sm.web.app/"
  },
  {
    id: 2,
    name: "Estoque de Peças",
    url: "https://albertomateus10.github.io/estoquedepecas/"
  },
  {
    id: 3,
    name: "Peças Vendidas",
    url: "https://albertomateus10.github.io/pecasvendidas/"
  },
  {
    id: 4,
    name: "Inventário",
    url: "https://albertomateus10.github.io/inventario/"
  },
  {
    id: 5,
    name: "Peças reservadas",
    url: "https://albertomateus10.github.io/pecasreservadas/"
  },
  {
    id: 6,
    name: "Link&Entry",
    url: "https://sts.fiatgroup.com/adfs/ls/?wa=wsignin1.0&wtrealm=https%3a%2f%2fuprssaml.fiat.com&wctx=rm%3d0%26id%3dpassive%26ru%3d%252ffiat%252fDefault.aspx%253ftarget%253dhttps%25253A%25252F%25252Flinkentry.fiat.com%2526debug%253d0&wct=2026-07-31T13%3a23%3a38Z&whr=http%3a%2f%2fsts.fiatgroup.com%2fadfs%2fservices%2ftrust"
  },
  {
    id: 7,
    name: "CSPS",
    url: "https://csps.parts.fiat.com/EplusLogin/authenticateUser.do"
  },
  {
    id: 8,
    name: "Margem de peças",
    url: "https://albertomateus10.github.io/calculomargempecas/"
  },
  {
    id: 9,
    name: "Admin da GoParts",
    url: "https://admin.goparts.com.br/"
  },
  {
    id: 10,
    name: "Catalogo de Peças - Epair",
    url: "https://eper-ltm.parts.fiat.com/navi?KEY=STARTUP"
  }
];

const buttonsGrid = document.getElementById("buttonsGrid");

// Renderizar todos os botões diretamente na tela
function renderButtons() {
  buttonsGrid.innerHTML = SYSTEMS.map(item => `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-system" title="Abrir ${item.name}">
      <span class="btn-index">${item.id}</span>
      <span class="btn-title">${item.name}</span>
      <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"/>
        <polyline points="7 7 17 7 17 17"/>
      </svg>
    </a>
  `).join("");
}

// Atalhos do teclado: números 1 a 9 abrem direto o sistema (tecla 0 abre o 10)
window.addEventListener("keydown", (e) => {
  if (e.key >= "1" && e.key <= "9") {
    const num = parseInt(e.key, 10);
    const target = SYSTEMS.find(s => s.id === num);
    if (target) {
      window.open(target.url, "_blank", "noopener,noreferrer");
    }
  } else if (e.key === "0") {
    const target = SYSTEMS.find(s => s.id === 10);
    if (target) {
      window.open(target.url, "_blank", "noopener,noreferrer");
    }
  }
});

// Inicialização imediata
renderButtons();
