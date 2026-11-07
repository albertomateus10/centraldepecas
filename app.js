// Lista dos 13 botões da Central de Peças com metadados, links e ícones temáticos
const SYSTEMS = [
  {
    id: 1,
    name: "Sugestão de compra",
    desc: "Reposição inteligente",
    shortcut: "1",
    url: "https://sugestaodecompra-sm.web.app/",
    icon: `<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>`
  },
  {
    id: 2,
    name: "Estoque de Peças",
    desc: "Saldo e localização física",
    shortcut: "2",
    url: "https://albertomateus10.github.io/estoquedepecas/",
    icon: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/>`
  },
  {
    id: 3,
    name: "Peças Vendidas",
    desc: "Histórico e fluxo de saídas",
    shortcut: "3",
    url: "https://albertomateus10.github.io/pecasvendidas/",
    icon: `<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`
  },
  {
    id: 4,
    name: "Inventário",
    desc: "Auditoria e acuracidade",
    shortcut: "4",
    url: "https://albertomateus10.github.io/inventario/",
    icon: `<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>`
  },
  {
    id: 5,
    name: "Peças reservadas",
    desc: "Ordens de serviço e balcão",
    shortcut: "5",
    url: "https://albertomateus10.github.io/pecasreservadas/",
    icon: `<circle cx="12" cy="4" r="2"/><path d="M10 8h4M9 11l6 2-6 2 6 2-6 2 6 2M10 23h4"/>`
  },
  {
    id: 6,
    name: "Link&Entry",
    desc: "Autenticação Fiat Group",
    shortcut: "6",
    url: "https://sts.fiatgroup.com/adfs/ls/?wa=wsignin1.0&wtrealm=https%3a%2f%2fuprssaml.fiat.com&wctx=rm%3d0%26id%3dpassive%26ru%3d%252ffiat%252fDefault.aspx%253ftarget%253dhttps%25253A%25252F%25252Flinkentry.fiat.com%2526debug%253d0&wct=2026-07-31T13%3a23%3a38Z&whr=http%3a%2f%2fsts.fiatgroup.com%2fadfs%2fservices%2ftrust",
    icon: `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`
  },
  {
    id: 7,
    name: "CSPS",
    desc: "Garantias e pedidos de fábrica",
    shortcut: "7",
    url: "https://csps.parts.fiat.com/EplusLogin/authenticateUser.do",
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`
  },
  {
    id: 8,
    name: "Margem de peças",
    desc: "Rentabilidade e markup",
    shortcut: "8",
    url: "https://albertomateus10.github.io/calculomargempecas/",
    icon: `<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>`
  },
  {
    id: 9,
    name: "Admin da GoParts",
    desc: "Console e-commerce e B2B",
    shortcut: "9",
    url: "https://admin.goparts.com.br/",
    icon: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>`
  },
  {
    id: 10,
    name: "Catálogo de Peças - Epair",
    desc: "Vista explodida técnica Fiat",
    shortcut: "0",
    url: "https://eper-ltm.parts.fiat.com/navi?KEY=STARTUP",
    icon: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`
  },
  {
    id: 11,
    name: "Catálogo de Acessórios",
    desc: "Linha de personalização",
    shortcut: null,
    url: "https://catalogodeacessorios-sm.web.app/",
    icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`
  },
  {
    id: 12,
    name: "Abastecer as Filiais",
    desc: "Logística e transferência",
    shortcut: null,
    url: "https://albertomateus10.github.io/pecasfiliais/",
    icon: `<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>`
  },
  {
    id: 13,
    name: "Compras de Peças",
    desc: "Aquisição e pedidos de fábrica",
    shortcut: null,
    url: "https://albertomateus10.github.io/comprasdepecas/",
    icon: `<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>`
  }
];

const buttonsGrid = document.getElementById("buttonsGrid");
const activeCountEl = document.getElementById("activeCount");

// Renderizar todos os botões com ícones, textos e micro-interações
function renderButtons() {
  if (activeCountEl) {
    activeCountEl.textContent = `${SYSTEMS.length} Sistemas Conectados`;
  }

  buttonsGrid.innerHTML = SYSTEMS.map(item => `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-system" title="Abrir ${item.name}">
      <div class="btn-content-left">
        <div class="btn-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            ${item.icon}
          </svg>
        </div>
        <div class="btn-info">
          <span class="btn-title">${item.name}</span>
          <span class="btn-desc">
            ${item.desc}
            ${item.shortcut ? `<span class="btn-shortcut-tag">[${item.shortcut}]</span>` : ''}
          </span>
        </div>
      </div>
      <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"/>
        <polyline points="7 7 17 7 17 17"/>
      </svg>
    </a>
  `).join("");
}

// Atalhos do teclado: números 1 a 9 abrem direto o sistema (tecla 0 abre o 10)
window.addEventListener("keydown", (e) => {
  // Evitar disparar se o usuário estiver digitando em campos de texto
  if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
    return;
  }

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