const botaoAbrir = document.getElementById("menu-abrir");
const botaoFechar = document.getElementById("menu-fechar");
const menuLateral = document.getElementById("menu-lateral");
const overlay = document.getElementById("menu-overlay");

function abrirMenu() {
  menuLateral.classList.add("aberto");
  overlay.classList.add("aberto");
  menuLateral.setAttribute("aria-hidden", "false");
}

function fecharMenu() {
  menuLateral.classList.remove("aberto");
  overlay.classList.remove("aberto");
  menuLateral.setAttribute("aria-hidden", "true");
}

botaoAbrir.addEventListener("click", abrirMenu);
botaoFechar.addEventListener("click", fecharMenu);
overlay.addEventListener("click", fecharMenu);

menuLateral.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", fecharMenu);
});

// fecha ao clicar em um link do menu
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") fecharMenu();
});

const inputServico = document.getElementById("servico");
const inputLocal = document.getElementById("localizacao");
const botaoBuscar = document.querySelector(".btn-buscar");

if (inputServico && inputLocal && botaoBuscar) {
  function buscar() {
    const params = new URLSearchParams();
    const servico = inputServico.value.trim();
    const local = inputLocal.value.trim();

    if (inputServico.value.trim())
      params.set("servico", inputServico.value.trim());
    if (inputLocal.value.trim()) params.set("local", inputLocal.value.trim());

    const query = params.toString();
    window.location.href = query
      ? `profissionais.html?${query}`
      : "profissionais.html"; // profissionais.html?servico=tran%C3%A7as
  }

  botaoBuscar.addEventListener("click", buscar);

  [inputServico, inputLocal].forEach((input) =>
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") buscar();
    }),
  );
}
