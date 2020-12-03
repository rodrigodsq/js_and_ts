function criarPessoa(nome, sobrenome){
    return {nome, sobrenome}
}

const p1 = criarPessoa('Kamila', 'VB');         //chama a função numa constante.

console.log(typeof p1)                          //saber o tipo do parametro.
console.log(p1)

//------------------------------------------------------//

function criarMultiplicacao(multiplicador){
    //multiplicador
    return function(n) {
        return  n * multiplicador
    };
}

const duplica = criarMultiplicacao(2);              //passar o parametro do multiplicador
const triplica = criarMultiplicacao(3);
const quadriplica = criarMultiplicacao(4);

console.log(duplica(2));                            //passar o parametro do numero, para a função que esta dentro de criarMultiplicação.
console.log(triplica(2));
console.log(quadriplica(8));