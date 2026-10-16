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

// fecha ao clicar em um link do menu
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fecharMenu();
})

