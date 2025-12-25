const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let maxTentativas = 10;

let tentativasRestantes = maxTentativas;

const inputPalpite = document.getElementById("palpite");
const botaoChutar = document.getElementById("chutar");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");

tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

botaoChutar.addEventListener("click", () => {
    const palpite = parseInt(inputPalpite.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Digite um número válido entre 1 e 100.";
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        mensagem.textContent = "Você acertou!";
        botaoChutar.disabled = true;
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "número secreto é maior.";
    } else {
        mensagem.textContent = "O número secreto é menor.";
    }

    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
        mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}`;
        botaoChutar.disabled = true;
    }

    inputPalpite.value = "";
});
