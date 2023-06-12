var ano = document.querySelector('#anos');
var anoAtual = new Date().getFullYear();
var anoNascimento = 2000;
var idade = anoAtual - anoNascimento

ano.textContent = idade;