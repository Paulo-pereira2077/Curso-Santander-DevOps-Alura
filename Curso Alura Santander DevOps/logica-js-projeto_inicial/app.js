alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos")
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

let nomeU = prompt("Digite seu nome: ");
let idadeU = prompt("Digite sua idade: ");

if(idadeU >= 18){
    alert("Pode tirar a habilitação!");
}
else{
    alert("Não pode tirar a habilitação!");
}