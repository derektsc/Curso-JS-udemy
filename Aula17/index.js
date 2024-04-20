// ****************************************************

function saudação(nome) {
    console.log(`bom dia ${nome}`);
}

saudação('Derek');
saudação('barragão')

// **************************************************** tudo oq esta abaixo de return não é executado

function ola(nome) {
    return `bom dia ${nome}`;
}
const irma = ola('alice');
console.log(irma);

// ****************************************************

function soma(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(5, 10));
console.log(soma(2, 10));
console.log(soma(40, 10));

// **************************************************** se declarar o valor na propria função da para chamar no console.log sem valores

function soma(x = 10, y = 9){
    const resultado = x + y;
    return resultado;
}
console.log(soma());

// **************************************************** aqui ta outro exemplo mas declarando 2 variaveis antes que podem ser alteradas

let num1 = 4
let num2 = 2

function subtracao(x = num1, y = num2){
    const resultado = x - y;
    return resultado;
}
num1 = [100]
console.log(subtracao());
console.log(typeof(subtracao));

// **************************************************** 

const raiz = function (n){
    return n ** 0.5
};
console.log(raiz(9))

//  => significa arrow function

const raizz = n => n ** 0.5;
console.log(raizz(9))