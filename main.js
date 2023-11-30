const form = document.getElementById('deposito');
const nomeBeneficiario = document.getElementById('beneficiario');
let formValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroConta = document.getElementById('conta');
    const valorDeposito = document.getElementById('valor');
    const mensagemSucesso = `montande de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.mensagem');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.mensagem-error').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formValido = validaNome(e.target.value);
    if (!formValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.mensagem-error').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.mensagem-error').style.display = 'none';
    }
})