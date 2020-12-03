//defineProperty - defineProperties:  são funcões que definem o acesso a valores dos objetos.

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {    //defindo as propriedade da chave 'estoque'
        enumerable: true,                       //enumerable: exibir essa chave entre as outras(true) ou ocultar essa chave (false);
        value: estoque,                         //value: valor da chave.
        writable: false,                        //writable: define se o valor da chave pode ser alterado.
        configurable: true,                     //configurable: define se pode reconfigurar, deletar essa chave.
    });
    Object.defineProperties(this, {             
        nome: {
            enumerable: true,                       //enumerable: exibir essa chave entre as outras(true) ou ocultar essa chave (false);
            value: nome,                            //value: valor da chave.
            writable: true,                         //writable: define se o valor da chave pode ser alterado.
            configurable: true,                     //configurable: define se pode reconfigurar, deletar essa chave.
        },
        preco: {
            enumerable: true,
            value: preco,                        
            writable: false,                        
            configurable: true,                     
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50;
p1.nome = 'Bone';

console.log(p1, Object.keys(p1))                    //Object.keys(objt): exibe todas as chaves do objeto.