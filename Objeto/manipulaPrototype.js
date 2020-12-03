const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'   
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);          //definindo o objA como prototype de objB, com isso no prototype de objB ira aparecer os valores de objA. A vira pai de B.
Object.setPrototypeOf(objC, objB);          //objC herda em seu prototype tudo de objB, e consequentimente tudo de objA;
//console.log(objB.chaveA, objC.chaveB);


//--------------------------------------------------------------------------------------------//

//funcao contrutora.
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {                             //adicionando metodos prototypes a function Produto.
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

//Objeto literal.
const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)            //adicionando o prototype de Produto ao objeto p2, Produto vira pai de p2.

p2.aumento(50);                                         //p2 utilizase dos metodos de Produto.

const p3 = Object.create(Produto.prototype, {           //criando o objeto já com o prototype de Produto.
    preco:{
        writable:true,
        configurable: true,
        enumerable: true,
        value: 115
    },
    tamanho2:{
        writable:true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})             
p3.nome = 'Blusa';                                         //criando a chave preco p podemos usar os metodos do prototipe do Produto em p3;
p3.aumento(20)

console.log(p3);