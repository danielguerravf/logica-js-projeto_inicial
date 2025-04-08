alert('Boas vindas ao jogo do número secreto');
let maxNumber = 100;
let minNumber = 1;
let numeroSecreto = parseInt(Math.random() * maxNumber + minNumber);

let palpite = prompt(`Escolha um número entre ${minNumber} e ${maxNumber}`);
let tentativas = 1;

while (palpite != numeroSecreto) {
    if (palpite > numeroSecreto)
        alert(`O número secreto é menor que ${palpite}`);
    else
        alert(`O número secreto é maior que ${palpite}`);

    tentativas++;
    palpite = prompt('Escolha um novo número');
}

let tentativaTexto = (tentativas == 1 ? 'tentativa' : 'tentativas')
alert(`Você acertou o número secreto ${numeroSecreto}! Você levou ${tentativas} ${tentativaTexto}.`);

/* //Q1
let diaDaSemana = prompt('Qual o dia da semana?');

if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
}
else {
    alert('Boa semana!');
}

//Q2
let digiteNumero = prompt('Digite um número');
let sinalNumeroTexto = (digiteNumero > 0 ? 'positivo' : 'negativo');

alert(`O número digitado é ${sinalNumeroTexto}`);

//Q3
let pontuacao = 100;
if (pontuacao >= 100)
    alert('Parabéns, você venceu!');
else
    alert('Tente novamente para ganhar.');

//Q4
let saldoConta = 1000;
alert(`O saldo da sua conta é de ${saldoConta}.`);

//Q5
let nomeUsuario = prompt('Por favor, digite o seu nome.');
alert(`Seja bem vindo(a), ${nomeUsuario}`); */