//Promise: é uma função assincrona que faz com que o controlemos a sequencia das funcoes chamadas.

function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string'){                                //caso não seja uma string (der error) executa o reject;
            reject('BAD VALUE');
            return;                                                 //return para parar o fluxo, se não ele continua a executar o codigo abaixo;
        }           
        setTimeout(() => {
            resolve(msg);                                           //caso de tudo certo, executamos o resolve e no caso passamos um parametro.
            return;
        }, tempo);
    });
}

esperaAi('teste', rand(1,3))
    .then(resposta => {                                         //then(): caso na promise seja executado o resolve ele cai aqui.
        console.log(resposta);
        return esperaAi('Frase2', rand(1,3));                   //chamando uma nova funcao assincrona atraves da resposta da primeira.
    })
    .then(resposta => {                                         //nova funcao assincrona com a resposta da nova chamada feita a cima.
        console.log(resposta);
        return esperaAi('Frase3', rand(1,3));
        //return resposta + ' vai pro outro then';                 //enviando a 'resposta' para o then abaixo.                    
    }).then( resposta => {
        console.log(resposta)
    }).then( () =>{
        console.log('Eu serei o ultimo a ser exibido');
    })
    .catch( e => {
        console.log('ERROR: '+ e);
    });