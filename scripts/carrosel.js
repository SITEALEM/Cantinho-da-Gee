const botaoEsquerda = document.querySelector(".esquerda");
const botaoDireita = document.querySelector(".direita");
const produtos = document.querySelectorAll(".produto");

let contador = 0;

function trocaItem() {
  produtos.forEach((item) => {
    item.classList.remove("active");
  });
  produtos[contador].classList.add("active");
}

botaoEsquerda.addEventListener("click", () => {
  contador -= 1;
  if (contador < 0) contador = produtos.length - 1;
  trocaItem();
});
botaoDireita.addEventListener("click", () => {
  contador += 1;
  if (contador > produtos.length - 1) contador = 0;
  trocaItem();
});
