//const alunos = ['luiz','maria','joão', 1, true, null]; da para ter varios tipos de dados mas não é recomendado

//            0123456789  
const nome = 'derek barragão'
console.log(nome[0])


//                 0      1       2
const alunos = ['luiz','maria','joão']; 
console.log(alunos);

// alunos[0] = 'eduardo'; modificando o indice 0 
// alunos[3] = 'sharon'; aqui voce adiciona o elemento pq nao existe indice 3
// alunos[7] = 'derek'; vai adicionar <4 empty items> e depois adicionar o derek
// alunos[alunos.length] = 'luiza' vai adicionar ao final também tem uma função para isso que é .push
// alunos[alunos.length] = 'derek' vai adicionar ao final
// alunos.push('derek'); essa função ira adicionar ao final
// alunos.unshift('derek'); para adicionar um item ao começo

// alunos.pop(); para remover o ultimo item
// const removido = alunos.pop(); isso aqui vai criar uma constante chamada removido e armazenar nela o ultimo item
// delete alunos[1]; isso aqui vai remover o indice que voce selecionou mas ele vai ficar como <1 empty item>



// console.log(alunos instanceof Array); se retornar true é um array se retornar false não é
// console.log(typeof alunos); vai retornar que é um objeto
// console.log(alunos.slice(0, 2)) isso aqui vai pegar somente o range que voce deseja
// console.log(alunos[50]); vai retornar undefined porque nao existe 
// console.log(alunos.length); vai contar quantos itens tem
// console.log(alunos[1]); vai trazer apenas o indice 1
// console.log(alunos)