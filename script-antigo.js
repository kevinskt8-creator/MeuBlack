// 1. Os dados
const profissionais = [
  {
    id: 1,
    nome: "Ana Souza",
    cidade: "Asa Norte, Brasília",
    especialidades: ["Tranças", "Twists"],
  },
  {
    id: 2,
    nome: "Marcos Lima",
    cidade: "Taguatinga, DF",
    especialidades: ["Barbearia", "Degradê"],
  },
  {
    id: 3,
    nome: "Joana Ribeiro",
    cidade: "Ceilândia, DF",
    especialidades: ["Cacheados", "Transição capilar"],
  },
  {
    id: 4,
    nome: "Paulo Mendes",
    cidade: "Asa Sul, Brasília",
    especialidades: ["Locs", "Coloração"],
  },
];

// 2. Recebe UM profissional e devolve o HTML do cartão
function criarCard(profissional) {
  const iniciais = profissional.nome
    .split(" ")
    .map((parte) => parte[0])
    .slice(0, 2)
    .join("");

  const tags = profissional.especialidades
    .map((esp) => `<span class="tag">${esp}</span>`)
    .join("");

  return `
    <article class="pro-card">
      <div class="pro-avatar">${iniciais}</div>
      <h3>${profissional.nome}</h3>
      <p class="pro-cidade">${profissional.cidade}</p>
      <div class="pro-tags">${tags}</div>
      <a href="#" class="pro-botao">Ver perfil</a>
    </article>
  `;
}

// 3. Renderização
const lista = document.getElementById("lista-profissionais");

function renderizar(profissionaisParaMostrar) {
  if (profissionaisParaMostrar.length === 0) {
    lista.innerHTML = `<p class="sem-resultado">Nenhum profissional encontrado.</p>`;
    return;
  }
  lista.innerHTML = profissionaisParaMostrar.map(criarCard).join("");
}

renderizar(profissionais);

// 4. Busca
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const inputServico = document.getElementById("servico");

inputServico.addEventListener("input", (evento) => {
  const termo = normalizar(evento.target.value);

  const filtrados = profissionais.filter((profissional) =>
    profissional.especialidades.some((esp) => normalizar(esp).includes(termo)),
  );

  renderizar(filtrados);
});

const botaoBuscar = document.querySelector(".btn-buscar");
const secaoProfissionais = document.getElementById("profissionais");

function irParaResultados() {
  secaoProfissionais.scrollIntoView({ behavior: "smooth" });
}

botaoBuscar.addEventListener("click", irParaResultados);

inputServico.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") irParaResultados();
});
