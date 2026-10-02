// 1. Os dados: uma lista (array) de objeto
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

// 2. Uma função que recebe UM profissional e devolve o HTML do cartão
// 1. Os dados: uma lista (array) de objeto
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

// 2. Uma função que recebe UM profissional e devolve o HTML do cartão
function criarCard(profissional) {
  const inicais = profissional.nome
    .split(" ")
    .map((parte) => parte[0])
    .splice(0, 2)
    .join("");

  const tags = profissional.especialidades
    .map((esp) => `<span class="tag">${esp}</span>`)
    .join("");

  return `
    <article class="pro-card">
    <div class="pro-avatar">${inicais}</div>
    <h3>${profissional.nome}</h3>
    <p> class="pro-cidade">${profissional.cidade} <p/>
    <div class="pro-tags">${tags}</div>
    <a href="#" class="pro-botao">Ver perfil</a>
    </article>
    `;
}

// 3. Pegar a div vazia e preencher com os cartões
const lista = document.getElementById("lista-profissionais");
lista.innerHTML = profissionais.map(criarCard).join("");

// 3. Pegar a div vazia e preencher com os cartões
const lista = document.getElementById("lista-profissionais");
lista.innerHTML = profissionais.map(criarCard).join("");
