//Reduce: é mais utilizada para reduzir o array a um unico elemento.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//somando todos os numeros.
const somaTotal = numeros.reduce( (acumulador, valor, indice, array) => {           //acumulador sempre é o valor retornado.
    return acumulador += valor;
}, 0)           // 0: valor inicial do acumulador


//retorne um array com os valores pares (filter).
const pares = numeros.reduce( (acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);         // []: valor inicial do meu acumulador é um array, acumulador sera um array.


//retorne um array com o dobro dos valores (Map).
const dobro = numeros.reduce( (acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);


//console.log(somaTotal, pares, numeros, dobro);

//--------------------------------------------------------------------------------------------------------//

const pessoas = [
    {nome:'Heitor', idade:0.6},
    {nome:'Kamila', idade:6},
    {nome:'Rodrigo', idade:22},
    {nome:'Michele', idade:35},
    {nome:'Mirian', idade:55},
    {nome:'Cicero', idade:59},
];

//retorne a pessoa mais velha
const maisVelho = pessoas.reduce( (acumulador, valor) => {                  //acumulador sempre é o valor retornado.
    if( acumulador.idade > valor.idade) return acumulador;                  //verifica se o acumulador é maior que a idade, se for retorna acumulador.
    return valor;                                                           //se valor for maior, retorna valor.
});

console.log(maisVelho);