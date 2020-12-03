const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Numero pares. (Filter)    //filtra.
//Dobrar os valores pares. (Map)    //altera.
//Reduzir, somar tudo. (Reduce)     //retorna um unico elemento,
const numPares = numeros.filter( (valor) => {
    return valor % 2 === 0;                         //retorna valor caso o resto da divisão por 2 for 0.
}).map( (valor) => {                                //dobrando os valores vindo do filter.
    return valor * 2;
}).reduce( (acumulador, valor) => {                 //somando todos os valores do array vindo do map.
    return acumulador += valor;
});


console.log(numPares);