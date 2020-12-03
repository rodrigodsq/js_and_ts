//Map: ele vai alterar os valores do array. e retorna um array sempre do msm tamanho.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numDobro = numeros.map( (valor) => {
    return valor * 2;
});

//console.log(numDobro);

//-------------------------------------------------------------------//

const pessoas = [
    {nome:'Heitor', idade:0.6},
    {nome:'Kamila', idade:6},
    {nome:'Rodrigo', idade:22},
    {nome:'Michele', idade:35},
    {nome:'Mirian', idade:55},
    {nome:'Cicero', idade:59},
]

//retorne apenas uma string com o nome pessoa.
const nomePessoa = pessoas.map( (valor) => {
    return valor.nome;
});

//remova apenas uma chave 'nome' do objeto.
const idadePessoa = pessoas.map( (valor) => {
    //delete valor.nome;                                  //para remover a chave nome.
    return valor.idade;
});

//adicione uma chave id em cada objeto.
const idPessoa = pessoas.map( (valor, indice) => {
    const newPessoa  = { ...valor};                     //criando um novo objeto, para não alterar o objeto principal.
    newPessoa.id = indice;
    return newPessoa;
});


console.log(nomePessoa, idadePessoa, idPessoa )