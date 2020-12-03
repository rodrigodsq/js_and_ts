const obj1 = {nome:'Caneca', preco: 1.5};
//const obj2 = obj1;                                            //altera o valor de ambos.

//copiar objetos: atribuir o valor da obj1 para obj2 e não alterar valor da obj1 caso a obj2 for alterada.
const obj2 = {...obj1, material:'porcelana'};                         //com spreed operator.      //nesse caso melhor que assign.
//const obj2 = Object.assign({}, obj1,{material:'porcelana'});          //com assign().


obj1.nome = 'biscoito';
obj2.preco = 1.8;             

console.log(obj1, obj2);
//console.log(Object.getOwnPropertyDescriptor(obj1, 'nome'))           //ver uma descrição sobre a chave, se ela pode ser alterada e etc..
//console.log(Object.values(obj1));                                    //retorna todos os valores desse objeto.
//console.log(Object.entries(obj1));                                   //retorna os valores e as chaves desse objeto.