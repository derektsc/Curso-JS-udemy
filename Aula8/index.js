/*
Derek Barragão tem 22 anos, pesa 50KG
tem 1.73 de altura e seu IMC é de 
Derek nasceu em 2000
*/

const nome = 'Derek Barragão';
const sobrenome = 'Barragão';
const idade = 23;
const peso = 60;
const alturaEmM = 1.73;
let imc = peso / (alturaEmM * alturaEmM); // peso / (altura * altura)
let anoNascimento = 2023 - idade;

console.log(nome,'tem', idade, 'anos, pesa', peso,'KG tem', alturaEmM, 'e seu IMC é de', imc, nome, 'nasceu em', anoNascimento);

// pode ser feito da seguinte maneira e é a mais legivel e comum
console.log(`${nome} tem ${idade} anos pesa ${peso} KG tem ${alturaEmM} e seu IMC é de ${imc} ${nome} nasceu em ${anoNascimento}`)
