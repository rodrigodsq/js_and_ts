//Função geradora: chamada valor ou funcoes e etc.. um apos o outro em sequencia.

function* geradora1(){
    //codigo qualquer
    yield 'valor 1';                        //yield: é tipo um return, que a cada vez retorna um valor, no caso na proxima chamada ele retorna 'valor 2';

    //codigo qualquer
    yield 'valor 2';

    //codigo qualquer
    yield 'valor 3';
};

const g1 = geradora1();

//next(): é a função que chama as funcoes geradoras e retorna o value='valor' e o done='true p se ja acabou as funcoes e false p se ainda tiver funcoes'
//console.log(g1.next());

//o for sabe automaticamente quantos return existe dentro de uma função geradora;
for(let valor of g1){
    console.log(valor)
}

//---------------------------------------------------//

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();                      //executando primeira a função geradora3, e apos o restantes dos retorno;
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor)
}

//---------------------------------------------------//

function* geradora5(){
    yield () => {
        console.log('vim do y1')
    };

    return () => {                                      //colocar return dentro de uma função geradora acaba com a sequencia e nenhuma funcao mais sera executado.
        console.log('return acaba a sequencia');
    }

    yield () => {
        console.log('vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
