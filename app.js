const btnPlaca = document.querySelector('#btnPlaca')
const placa = document.querySelector('#placa')
btnPlaca.addEventListener('click', () => {
    if (placa.classList.contains('activeLogin')) {
        placa.classList.remove('activeLogin')
        placa.classList.add('activeCadastro')
        btnPlaca.innerHTML = "Fazer Login"
    } else {
        placa.classList.remove('activeCadastro')
        placa.classList.add('activeLogin')
        btnPlaca.innerHTML = "Fazer Cadastro"
    }
})