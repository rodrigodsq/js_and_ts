//prototypes: melhora a performance dos objetos, pois não envia os metodos e var a todo objeto criado(instanciado), com isso economizando memoria e processamento. prototype(__proto__) sempre existe em um objeto.

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.estouAqui = 'Chegueii!!'                       //adiciona a var 'estouAqui' ao prototype do objeto.
Pessoa.prototype.nomeCompleto = () => {                         //adicionando metodo 'nomeCompleto' ao prototype do objeto. melhor performance.
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Rodrigo', 'Quintais');              //criando objetos, Instanciando objetos.
const pessoa2 = new Pessoa('Kamila', 'VB');

console.log(pessoa1.nomeCompleto());
