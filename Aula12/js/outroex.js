// exercicio
// voce precisa realocar os valores de cada variavel

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varD = varA;

varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);


/* pode ser resolvido assim também
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

*/