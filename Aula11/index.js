// Operadores aritimeticos, incremento e atribuição

// Aritméticos (+ - / * ** %)
const num1 = 5;
const num2 = 10;
console.log(num1 + num2); // 15

const num3 = '5';
const num4 =  10;
console.log(num3 + num4); // 510 como num3 é string ele concatena

const num5 = 2;
const num6 = 10;
console.log (num5 ** num6); // 1024  ** = Potenciação

const num7 = 10;
const num8 = 3;
console.log(num7 % num8); // 1  % = Resto da divisão

const num9 = 5;
const num10 = 2;
const num11 = 10;
console.log(num9 + (num10 * num11)); // 25 oq estiver dentro do parenteses sera executado primeiro

let contador = 1; // sempre usar let no contador
contador++; // 2
contador++; // 3
++contador; // 4
console.log(contador++); // 4
console.log(contador); // 5

let contador2 = 10;
console.log(--contador2); // 9
console.log(--contador2); // 8

const passo = 2;
let contador3 = 1;
contador3 = contador3 + passo;
console.log(contador3); // 3
contador3 = contador3 + passo;
console.log(contador3); // 5
contador3 = contador3 + passo;
console.log(contador3); // 7

const num12 = 10;
const num13 = parseInt('5');
console.log(num12 + num13); // 15 parseInt força a transformar em tipo numero
console.log(typeof num13); // typeof mostra qual o tipo da variavel

