//Filter: filtrar o array. Sempre retorna um array com a mesma quantidade de elementos ou menos.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Retorna todos os numeros do array que foram maiores que 10;
/*const numerosFiltrados = numeros.filter( (valor, indice, array) =>{
    console.log(valor, indice);
    return valor > 10;
});
console.log(numerosFiltrados);*/

//-------------------------------------------------------------------//

const pessoas = [
    {nome:'Heitor', idade:0.6},
    {nome:'Kamila', idade:6},
    {nome:'Rodrigo', idade:22},
    {nome:'Michele', idade:35},
    {nome:'Mirian', idade:55},
    {nome:'Cicero', idade:59},
]

//filtrar se o nome tem 5 letras ou mais.
const nomesGrandes = pessoas.filter( (valor) => {
    return valor.nome.length > 6;
});

//filtrar pessoas que tenha mais de 50 anos.
const maisVelhos = pessoas.filter( (valor) => {
    return valor.idade >= 30;
});

//filtrar pessoas que termina com a letra a.
const nomeTerminaComA = pessoas.filter( (valor) => {
    return valor.nome.toLowerCase().endsWith('a')       //toLowerCase(): deixa todas as letras minusculas  //endsWith(): verifica se a ultima letra da string é 'a';
});

console.log(nomesGrandes, maisVelhos, nomeTerminaComA);