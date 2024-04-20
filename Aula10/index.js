// Tipos de dados primitivos
// String, number, undefined, null, boolean, symbol(nao falado)

const nome = 'Derek';  // String
const nome1 = "Derek"; // String
const nome2 = `Derek`; // String
const num1 = 10; // number
const num2 = 10.52; //number
let nomeAluno; // undefined = não aponta para local nenhum na memória
const sobrenomeAluno = null; // NULO -> não aponta para local nenhum na memória
// diferença entre null e undefined, é que quando coloca null fala explicitamente que quer que a variavel
// não aponte para lugar nenhum na memória
const aprovado = true; // boolean = true or false (lógico)

console.log(typeof nome, nome); // vai retornar o tipo e depois o valor da variavel

// dado passado por referencia
// criou uma variavel 'a' depois criou variavel 'b' e depois fez o valor de b apontar para o
// mesmo valor na memória

const a = [1,2]; //array
const b = a;
console.log(a, b); // [1, 2] [1, 2]

b.push(3);
console.log(a, b); // [1, 2, 3] [1, 2, 3]

// outro exemplo 

let e = 2;
let f = e;
console.log(e, f); // 2, 2

e = 3;
console.log(e, f); // 3, 2