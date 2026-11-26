// 1. DADOS
const profissionais = [
  {
    id: 1,
    nome: "Ana Souza",
    cidade: "Asa Norte, Brasília",
    especialidades: [
      { slug: "trancas", nome: "Tranças" },
      { slug: "twists", nome: "Twists" },
    ],
  },
  {
    id: 2,
    nome: "Marcos Lima",
    cidade: "Taguatinga, DF",
    especialidades: [
      { slug: "barbearia", nome: "Barbearia" },
      { slug: "degrade", nome: "Degradê" },
      { slug: "crespo", nome: "Cabelo crespo" },
    ],
  },
  {
    id: 3,
    nome: "Joana Ribeiro",
    cidade: "Ceilândia, DF",
    especialidades: [
      { slug: "cacheados", nome: "Cacheados" },
      { slug: "transicao", nome: "Transição capilar" },
      { slug: "crespo", nome: "Cabelo crespo" },
    ],
  },
  {
    id: 4,
    nome: "Paulo Mendes",
    cidade: "Asa Sul, Brasília",
    especialidades: [
      { slug: "locs", nome: "Locs" },
      { slug: "coloracao", nome: "Coloração" },
    ],
  },
];

// 2. FUNÇÕES AUXILIARES
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function criarCard(profissional) {
  const iniciais = profissional.nome
    .split(" ")
    .map((parte) => parte[0])
    .slice(0, 2)
    .join("");

  const tags = profissional.especialidades
    .map((esp) => `<span class="tag">${esp.nome}</span>`)
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

const lista = document.getElementById("lista-profissionais");

function renderizar(profissionaisParaMostrar) {
  if (profissionaisParaMostrar.length === 0) {
    lista.innerHTML = `<p class="sem-resultado">Nenhum profissional encontrado.</p>`;
    return;
  }
  lista.innerHTML = profissionaisParaMostrar.map(criarCard).join("");
}

// 3. FILTRO PELA URL
const params = new URLSearchParams(window.location.search);
const servico = normalizar(params.get("servico") || "");
const local = normalizar(params.get("local") || "");

const filtrados = profissionais.filter((p) => {
  const bateServico =
    !servico ||
    p.especialidades.some(
      (e) => e.slug.includes(servico) || normalizar(e.nome).includes(servico),
    );
  const bateLocal = !local || normalizar(p.cidade).includes(local);
  return bateServico && bateLocal;
});

// 4. TÍTULO COM O FILTRO ATIVO
const termoBusca = document.getElementById("termo-busca");

function descobrirNomeDoServico() {
  const bruto = params.get("servico");
  if (!bruto) return "";

  // se for um slug (ex: "trancas"), troca pelo nome bonito ("Tranças")
  for (const p of profissionais) {
    const achada = p.especialidades.find((e) => e.slug === normalizar(bruto));
    if (achada) return achada.nome;
  }
  return bruto; // texto digitado
}

const partes = [];
const nomeServico = descobrirNomeDoServico();
if (nomeServico) partes.push(nomeServico);
if (params.get("local")) partes.push(`em ${params.get("local")}`);

if (termoBusca) {
  termoBusca.textContent = partes.length ? partes.join(" ") : "todos";
}

// 5. MOSTRAR NA TELA
renderizar(filtrados);
