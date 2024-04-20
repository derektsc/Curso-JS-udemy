/*
Primitivos (imutaveis) - string, number, boolean, undefined,
null (bigint, synbol) - Valor
*/
//          01234
let nome = 'Derek';
nome[0] = 'R' // é imutavel
console.log(nome);
console.log(nome[0]);

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b)

/*
Referencia (mutavel) - array, object, function
*/
let c = [1,2,3];
let d = c;
console.log(c, d)

c.push(4); // vai alterar tanto c quanto d pois apontam no mesmo local da memoria
console.log(c, d)

d.pop();
console.log(c, d)


const pessoa = {
    nome: 'Derek',
    Sobrenome: 'Barragão'
};
const f = {...pessoa}; // vai copiar e nao deixar mudar o valor na const f

pessoa.nome = 'Sharon'
console.log(f);

