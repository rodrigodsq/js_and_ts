function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;          //gerando um valor aleatorio entre 1000 e 3000;
    return Math.floor(num);
}

//Passar uma funcao como parametro, para se caso tiver msm uma funcao nesse parametro, ela ser executado apos essa.
function f1( callback ){
    setTimeout(() => {
        console.log('f1')
        if(callback) callback();
    }, rand());
}

function f2( callback ){
    setTimeout(() => {
        console.log('f2')
        if(callback) callback();
    }, rand());
}

function f3( callback ){
    setTimeout(() => {
        console.log('f3')
        if(callback) callback();
    }, rand());
}

//passando a funcao f1Callback como parametro para ser executada apos o codigo da funcao f1.
f1(f1Callback);

function f1Callback(){
    f2(f2Callback)                      //executar a funcao f2Callback apos a funcao f2.
}

function f2Callback(){
    f3(f3Callback)
}

function f3Callback(){
    console.log('Ola Mundo');
}