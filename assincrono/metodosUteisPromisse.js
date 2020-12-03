 /*
 Promise.all:
 Promise.race:
 Promise.resolve:
 Promise.reject:
 */

function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject(false);            //caso não seja uma string (der error) executa o reject;
        setTimeout(() => {
            resolve(msg);                                           //caso de tudo certo, executamos o resolve e no caso passamos um parametro.
        }, tempo);
    });
}

const promises = [
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 1000),
    esperaAi('promise 3', 2300),
    //'outro valor;'
];

//Promise.all(): resolve todas as promises.
Promise.all(promises)
.then( valor => {
    console.log(valor)
})
.catch( err => {
    console.log(err)
});

//Promise.race(): retorna a primeira promisse ou valor que for resolvido mais rapido. //mesmo entregando a mais rapida, as outras continua a ser executadas
Promise.race(promises)
.then( valor => {
    console.log(valor)
})
.catch( err => {
    console.log(err)
});


function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve('Pagina em cache');          //Promise.resolve(): retorna apenas promise resolvida;
        //return Promise.reject('Pagina em cache');          //Promise.reject(): retorna apenas promise reject(com erro);
    }else {
        console.log('Baixando a pagina...')
        return esperaAi('Baixei a pagina!!', 2500);
    }
}

baixaPagina()
.then( dadosPagina => {
    console.log(dadosPagina);
})
.catch( e => {
    console.log('err: '+e)
})