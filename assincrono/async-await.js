
function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string'){                                //caso não seja uma string (der error) executa o reject;
            reject('Cai no Erro');
            return;                                                 //return para parar o fluxo, se não ele continua a executar o codigo abaixo;
        }           
        setTimeout(() => {
            resolve(msg);                                           //caso de tudo certo, executamos o resolve e no caso passamos um parametro.
            return;
        }, tempo);
    });
}

async function executa() {          
    try {
        //await: aguarda enquanto a constante recebe o valor da Promise, e so apos ele passa p o codigo abaixo
        const fase1 = await esperaAi('fase 1', rand(5,7));
        console.log(fase1);

        const fase2 = await esperaAi('fase 2', rand(1,3));
        console.log(fase2);

        const fase3 = await esperaAi('fase 3', rand(3,4));
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch (error) {                                   //qualquer erro que ocorrer nas promises no bloco acima cai aqui.
        console.log(error);
    }
}

executa();