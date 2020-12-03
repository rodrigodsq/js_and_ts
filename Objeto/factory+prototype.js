//Como utilizar factory com prototype: passase o proto dentro do proprio objeto, exemplo a abaixo;
//o que estamos fazendo abaixo se chama composição ou mixing;

const falar = {
        falar(){
        console.log(`${nome} esta falando`);
    },
}

const comer = {
        comer(){
            console.log(`${this.nome} esta comendo`);
        },
}

const beber = {
        beber(){
            console.log(`${this.nome} esta bebendo`);
        },
}


const pessoaPrototype = { ...falar, ...comer, ...beber };       //atribuindo as funcoes a const pessoaPrototype.


function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {                     //atribuindo as caracteristicas de pessoaPrototype ao proto de criarPessoa.
        nome: {value:nome},
        sobrenome: {value: sobrenome},
    })
}

const p1 = criaPessoa('Rodrigo', 'Quintais');

console.log(p1.comer());