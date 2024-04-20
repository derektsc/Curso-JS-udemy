/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) não recomendado
=== igualdade estrita (valor e tipo)
!= diferente (valor) não recomendado
!== diferente estrito (valor e tipo)
*/

// console.log(10>5); Vai retornar true or false


let feeling = prompt('HRU?');
let die = false;
function death() {
    die = true;
    console.log(`i died`);
}
if (feeling.toLowerCase() === 'tired') {
    death();
}