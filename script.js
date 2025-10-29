document.getElementById("entrar").addEventListener("click", () => {
  alert("Você entrou no meu coração ❤️");
});

const botaoEntrar = document.getElementById("entrar");
const botaoVoltar = document.getElementById("voltar");
const secoesRazo = document.querySelector(".razoes");
const botaoVoltar2 = document.getElementById("voltar2");

const botaoAvancar = document.createElement("button");
botaoAvancar.textContent = "➡ Ver minhas razões";
botaoAvancar.style.marginTop = "400px";
botaoAvancar.style.backgroundColor = "rgba(255,127,158,0.85)";
botaoAvancar.style.padding = "12px 25px";
botaoAvancar.style.borderRadius = "25px";
botaoAvancar.style.color = "white";
botaoAvancar.style.fontSize = "16px";
botaoAvancar.style.border = "none";
botaoAvancar.style.cursor = "pointer";
botaoAvancar.style.transition = "0.3s";

document.querySelector(".historia .overlay").appendChild(botaoAvancar);
botaoAvancar.addEventListener("click", () => {
  historia.style.transition = "opacity 0.8s ease";
  historia.style.opacity = "0";

  setTimeout(() => {
    historia.style.display = "none";
    secoesRazo.style.display = "block";
    secoesRazo.style.opacity = "0";

    setTimeout(() => {
      secoesRazo.style.transition = "opacity 1s ease";
      secoesRazo.style.opacity = "1";
    }, 50);
  }, 800);
});

const botaoAvancarGaleria = document.createElement("button");
botaoAvancarGaleria.textContent = "➡ Ver nossa galeria";
botaoAvancarGaleria.style.marginTop = "500px"; 
botaoAvancarGaleria.style.backgroundColor = "rgba(255,127,158,0.85)";
botaoAvancarGaleria.style.padding = "12px 25px";
botaoAvancarGaleria.style.borderRadius = "25px";
botaoAvancarGaleria.style.color = "white";
botaoAvancarGaleria.style.fontSize = "16px";
botaoAvancarGaleria.style.border = "none";
botaoAvancarGaleria.style.cursor = "pointer";
botaoAvancarGaleria.style.transition = "0.3s";

document.querySelector(".razoes .overlay").appendChild(botaoAvancarGaleria);

botaoAvancarGaleria.addEventListener("click", () => {
  secoesRazo.style.transition = "opacity 0.8s ease";
  secoesRazo.style.opacity = "0";

  setTimeout(() => {
    secoesRazo.style.display = "none";
    galeria.style.display = "block";
    galeria.style.opacity = "0";

    setTimeout(() => {
      galeria.style.transition = "opacity 1s ease";
      galeria.style.opacity = "1";
    }, 50);
  }, 800);
});

const mensagemFinal = document.querySelector(".mensagem-final");

const botaoAvancarMensagem = document.createElement("button");
botaoAvancarMensagem.textContent = "➡ Mensagem final";
botaoAvancarMensagem.style.marginTop = "1000px";
botaoAvancarMensagem.style.backgroundColor = "rgba(255,127,158,0.85)";
botaoAvancarMensagem.style.padding = "12px 25px";
botaoAvancarMensagem.style.borderRadius = "25px";
botaoAvancarMensagem.style.color = "white";
botaoAvancarMensagem.style.fontSize = "16px";
botaoAvancarMensagem.style.border = "none";
botaoAvancarMensagem.style.cursor = "pointer";
botaoAvancarMensagem.style.transition = "0.3s";

document.querySelector(".galeria .overlay").appendChild(botaoAvancarMensagem);

botaoAvancarMensagem.addEventListener("click", () => {
  galeria.style.transition = "opacity 0.8s ease";
  galeria.style.opacity = "0";

  setTimeout(() => {
    galeria.style.display = "none";
    mensagemFinal.style.display = "block";
    mensagemFinal.style.opacity = "0";

    setTimeout(() => {
      mensagemFinal.style.transition = "opacity 1s ease";
      mensagemFinal.style.opacity = "1";
    }, 50);
  }, 800);
});

const galeria = document.querySelector(".galeria");
const botaoVoltar3 = document.getElementById("voltar3");

const home = document.querySelector(".home");
const historia = document.querySelector(".historia");

historia.style.display = "none";
botaoEntrar.addEventListener("click", () => {
  home.style.transition = "opacity 0.8s ease";
  home.style.opacity = "0";

  setTimeout(() => {
    home.style.display = "none";
    historia.style.display = "block";
    historia.style.opacity = "0";

    setTimeout(() => {
      historia.style.transition = "opacity 1s ease";
      historia.style.opacity = "1";
    }, 50);
  }, 800);
});