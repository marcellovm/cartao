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
    let ultimoDigito = numero.value.substr(-1);
    if (isNaN(ultimoDigito)) {
        let quantidade = numero.value.length;
        let resultado = numero.value.substr(0, quantidade -1);
        numero.value = resultado;
    }
    if (numero.value.length === 19) {
        numero.classList.add('is-valid');
    }
    if (numero.value.substr(0, 1) === "4"){
        card_bandeira.innerHTML = '<img src="img/visa.png" height="50px">';        
    } else if (numero.value.substr(0, 1) === "5"){
        card_bandeira.innerHTML = '<img src="img/master.png" height="50px">';
    } else if (numero.value.substr(0, 1) == "6") {
        card_bandeira.innerHTML = '<img src="img/elo.png" heigth="50px">';
    }

    card_numero.innerHTML = numero.value;
}
function alterarTitular () {
    titular.classList.remove('is-invalid');
    if (titular.value.length === 23) {
        titular.classList.add('is-valid');
    }    
    card_titular.innerHTML = titular.value;
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
    card_mes.innerHTML = mes.value;
}
function alterarAno() {
    ano.classList.remove('is-invalid');
    card_ano.innerHTML = ano.value;
}
function alterarCvv() {
    cvv.classList.remove('is-invalid');
    let ultimoDigito = cvv.value.substr(-1);
    if (isNaN(ultimoDigito)) {
        let quantidade = cvv.value.length;
        let resultado = cvv.value.substr(0, quantidade - 1);
        cvv.value = resultado;
    }
    if (cvv.value.length === 3) {
        cvv.classList.add('is-valid');
    }    
    card_cvv.innerHTML = cvv.value;
}

function Enviar() {
    event.preventDefault();
    alert('Enviado')
}