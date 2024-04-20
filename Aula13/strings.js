// Strings são indexadas 012345678910
         let umaString = 'derek teste';
         console.log(umaString);
         console.log(umaString[4]); //pegando elemento do indice

let outraString = 'barragão'
console.log(outraString);
console.log(outraString.concat(' ', umaString));
console.log(outraString + ' em um lindo dia ' + umaString)
console.log(`${umaString} ${outraString} é lindo`)

// pesquisar por um indice na string utilizando indexOf
console.log(umaString.indexOf('r', 4));

// substituir uma palavra por outra
console.log(umaString.replace('derek', 'Kim'));

let maisUmaString = 'O rato roeu a roupa do rei de roma';

console.log(maisUmaString.replace(/e/, '%')); // o primeiro e é substituido
console.log(maisUmaString.replace(/e/g, '%'));// todos os e são substituidos

// contar quantos carecteres contem
console.log(maisUmaString.length);
// dividir os caracteres
console.log(maisUmaString.slice(2, 12));
// separar pelo espaçamento
console.log(maisUmaString.split(' '));
// colocar a string totalmente maiucula
console.log(maisUmaString.toUpperCase());
// colocar a string totalmente minuscula
console.log(maisUmaString.toLowerCase());







