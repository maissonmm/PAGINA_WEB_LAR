
// ABA RELATORIO



const fechaAba = document.querySelector('#x3')
const relatorio = document.querySelector('#relatorio')
const abreR = document.querySelector('#relatorios')



abreR.addEventListener('click', () => {
    relatorio.style.display = 'flex';
})
fechaAba.addEventListener('click', () => {
    relatorio.style.display = 'none';
})