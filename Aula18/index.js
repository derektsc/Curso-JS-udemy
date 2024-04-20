const array = [1,2,3];
array.push(6);
array[0] = 'Derek'
console.log(array)


const pessoa1 = {
    nome: 'Derek',
    sobrenome: 'Barragão',
    idade: 23
};

const pessoa2 = {
    nome: 'manuela',
    sobrenome: 'Barragão',
    idade: 12
};

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)


function criaPessoa (nome,sobrenome,idade){
    return{nome,sobrenome,idade};
}

const pessoa3 = criaPessoa ('Derek', 'Barragão', 23);
const pessoa4 = criaPessoa ('Manuela', 'Barragão', 14);
const pessoa5 = criaPessoa ('Alice', 'Barragão', 14);
const pessoa6 = criaPessoa ('Leticia', 'Barragão', 17);

console.log(pessoa3.nome)
console.log(pessoa4.nome)
console.log(pessoa5.nome)
console.log(pessoa6.nome)

const pessoa10 = {
    nome: 'Derek',
    sobrenome: 'Barragão',
    idade: 23,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },
    
    incrementaIdade() {
        this.idade++
    }
}

pessoa10.fala();
pessoa10.incrementaIdade();
pessoa10.fala();
pessoa10.incrementaIdade();
