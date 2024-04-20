// exercicio:
// fazer com que os numeros digitados pelo usuario no navegador
// se transformem em variavel numero e faça a conta corretamente
// ao invez de concatenar os numeros pq "prompt" sempre retornara
// uma string

let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

let conta = parseInt(num1) + parseInt(num2);

alert('O resultado foi ' + conta);
console.log(conta)


/* poderia ser feito assim também:

let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

num1 = Number(num1);
num2 = Number(num2);

alert(`O resultado da sua conta foi: ${num1 + num2}`);

*/