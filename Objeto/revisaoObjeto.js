const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Quintais'
};

const chave = 'sobrenome';

//console.log( pessoa.nome);      //notação de ponto
//console.log(pessoa[chave], pessoa['nome'])      //notação de chave

//-----------------------------------------------------------------------------//

const pessoa1 = new Object();

pessoa1.nome = 'kamila';            //adicionado uma chave nome com o valor 'heitor';
pessoa1.sobrenome = 'VB';
pessoa1.idade = 6;
pessoa1.falar = function () {
    return (`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

delete pessoa1.sobrenome                 //deletando a chave sobrenome do objeto pessoa1;

//console.log(pessoa1, pessoa1.falar(), pessoa1.getDataNascimento());

//------------------------------------------------------------------------------------//

//function factory
function criarPessoa(nome, sobrenome) {
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${nome} ${sobrenome}`;
        }
    }
}

const p1 = criarPessoa('Mirian', 'Reis');
//console.log(p1.nomeCompleto);

//--------------------------------------------------------------------------------------//

//constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Object.freeze(this);                          //Object.freeze(objt): faz com que não possemos alterar o valorer desse objeto. 
}

const p2 = new Pessoa('Cicero', 'Quintais');        //new: cria um objeto vazio {} e cria-se o this referenciando ao objeto no caso 'Pessoa'.
Object.freeze(p1);                                  //Object.freeze(objt): faz com que não possemos alterar o valorer desse objeto.
p1.nome = 'Outra coisa';
const p3 = new Pessoa('Michele', 'Quintais');

console.log(p2, p3);