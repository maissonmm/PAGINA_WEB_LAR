// SAIR DO USUARIO
const sair = document.querySelector('#sair')

sair.addEventListener('click', () => {
    window.location.href = '/index.html'
})


// FECHAR ABA
const x = document.querySelector('#x2')
const cadastro = document.querySelector('#cadastro')

x.addEventListener('click', () => {
    cadastro.style.display = 'none'
})

// ABRIR JOGO NOVAMENTE
const jogo = document.querySelector('#jogo')

jogo.addEventListener('click', () => {
    cadastro.style.display = 'inline-flex';
})



// INICIA O JOGO 
function jogar() {
    window.location.href = '/meio_ambiente.html'
}


// MOSTRA AS LETRAS
const texto = `Prepare-se para testar seus conhecimentos sobre \n reciclagem e descarte correto de resíduos. \n O objetivo do jogo é acertar em qual lixeira cada \n tipo de lixo deve ser descartado. Mostre que você \n é um defensor do meio ambiente e faça as \n escolhas certas para preservar o nosso planeta!`;
const container = document.getElementById("texto");
let index = 0;

function mostrarLetras() {
    if (index < texto.length) {
        if (texto.charAt(index) === '\n') {
            container.innerHTML += '<br>'; // Inserir uma quebra de linha
        } else {
            container.innerHTML += texto.charAt(index);
        }
        index++;
        setTimeout(mostrarLetras, 20);
    }
}

mostrarLetras();