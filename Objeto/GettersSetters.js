//defineProperty - Getters Setters:  são funcões que definem o acesso a valores dos objetos.

function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {    //defindo as propriedade da chave 'estoque'
        enumerable: true,                       //enumerable: exibir essa chave entre as outras(true) ou ocultar essa chave (false);
        configurable: true,                     //configurable: define se pode reconfigurar, deletar essa chave.
        get: function () {                      //metodo get para visualizar a informação dessa chave.
            return estoquePrivado;
        },
        set: function (valor) {                 //metodo get para alterar o valor dessa chave;
            if(typeof valor !== 'number'){      //verificação pois so aceitamos numeros;
                console.log('Bad value');
                return;
            }
            estoquePrivado = valor
        }
    });
    Object.defineProperties(this, {             
        nome: {
            enumerable: true,                       //enumerable: exibir essa chave entre as outras(true) ou ocultar essa chave (false);
            configurable: true,                     //configurable: define se pode reconfigurar, deletar essa chave.
        },
        preco: {
            enumerable: true,                    
            configurable: true,                     
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 600;                             //utilizase do metodo set para alterar o valor dessa chave.
//console.log( p1.estoque)                    //utilizase do metodo get para visualizar o valor dessa chave.


//--------------------------------------------------------------------------------------------------------------//


//Getters e Setters com Functions Factory.

function criarProduto(nome) {
    return {
        get nome(){
            return nome
        },
        set nome(valor){
            nome = valor + ' 2';
        }
    }
}const p2 = criarProduto('pasta');
p2.nome = 'lapis';
console.log(p2.nome);