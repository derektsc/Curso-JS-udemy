// pode usar tanto let quanto var mas preferencialmente use LET
let nome = 'Eduardo'; // inicializando a variavel


console.log('João nasceu em 1984');
console.log('Em 2000 João conheceu Maria');
console.log('João casou-se com Maria em 2012');
console.log('Maria teve 1 filho com João em 2015');
console.log('O filho de João se chama Eduardo');

console.log(nome,'nasceu em 1984');
console.log('Em 2000',nome,'conheceu Maria');
console.log(nome,'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com',nome,'em 2015');
console.log('O filho de',nome,'se chama Eduardo');

// da para declarar uma variavel e não iniciar ela
let apelido; // vai aparecer como undefined
console.log(apelido);

// não podemos criar variaveis com palavras reservadas, por exemplo:
// let let;
// let if;
// Variaveis precisam ter nomes significativos
// Não pode começar o nome de uma variavel com um número
// Não podem conter espaços ou traços
// Utiliza camelCase (let nomeCompleto='';)
// Case-sensitive ele diferencia maiuscula de minuscula
// não utilize var, utilize let.
