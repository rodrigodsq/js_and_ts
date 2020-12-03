//Função Objeto Pai
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}


//-----------Função Objeto Filho------------//
function Camiseta(nome, preco, cor) {           //iremos herda de Produto
    Produto.call(this, nome, preco )            //call(): ira passar o this (Camiseta no caso) e os parametros, p linkar com o objt Produto.
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);          //adicionando o prototype de Produto ao prototype de Camiseta.// usa o contrutor de Produto 'Errado'.
Camiseta.prototype.contructor = Camiseta;               //add essa linha, com isso o contrutor dos Objetos sera a propria Camiseta e não o Produto 'certo'


//-----------Função Objeto Filho------------//
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {                //definindo acesso a chave.
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if(typeof valor !== "number") return;               //caso não seja um valor nao alterar o valor de estoque
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.contructor = Caneca;


//---------------Criando Objetos----------------------//
const camiseta = new Camiseta('Regata', 7.5, 'preta');
camiseta.aumento(5);

const caneca = new Caneca('caneca bonita', 15, 'porcelana', 5);
caneca.desconto(3)
caneca.estoque = 20;            //utilizano o set.

console.log(camiseta, caneca.estoque)