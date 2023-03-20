function validarEnvio() {
    if (numero.value === '') {
        event.preventDefault(); //evitar o envio do formulario
       
        numero.classList.add('is-invalid');
        
    } if (titular.value === '') {

        titular.classList.add('is-invalid');

    } if (cpf.value === '') {
       
        cpf.classList.add('is-invalid');    

    } if (mes.value === '') {    

        mes.classList.add('is-invalid');

    } if (ano.value === '') {
        
       ano.classList.add('is-invalid');

    } if (cvv.value === '') {
        
        cvv.classList.add('is-invalid');
    } 
}

function alterarNumero() {
    numero.classList.remove('is-invalid');
    if (numero.value.length === 19) {
        numero.classList.add('is-valid');
    }
}
function alterarTitular () {
    titular.classList.remove('is-invalid');
    if (titular.value.length === 35) {
        titular.classList.add('is-valid');
    }
}
function alterarCpf() {
    cpf.classList.remove('is-invalid');
    let ultimoDigito = cpf.value.substr(-1); //pega a ultima letra ou numero
    if (isNaN(ultimoDigito)) {
        let quantidade = cpf.value.length;
        let resultado = cpf.value.substr(0, quantidade - 1);
        cpf.value = resultado;
    }
    if (cpf.value.length === 14) {
        cpf.classList.add('is-valid');
    }
}
function alterarMes() {
    mes.classList.remove('is-invalid');
}