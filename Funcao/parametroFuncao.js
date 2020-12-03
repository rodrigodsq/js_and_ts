//arguments que sustenta todos os argumentos enviados, não funciona em arrow function.
function funcao(a, b, c = 2){
    
    total = b || 0;                         //verificar se tem algum valor no parametro B

    for (let argumento of arguments){               //argumentos são os parametro passado para a função
        total += argumento
    }
    console.log(total, a, b);
}
funcao(2)


//Desestruturação função
function desestructFunc({nome, sobrenome, idade}, [v1, v2, v3]){        //passando um objeto e um array, fazendo desustruturação
 console.log(nome, sobrenome, idade);
 console.log(v1, v2, v3);
}
let objPessoa = {nome:'Heitor', sobrenome:'VB', idade:0};
let arrayPessoa = ['Kamila', 'VB', '6'];
desestructFunc(objPessoa, arrayPessoa);


//rest operator, utiliza-se ...(tres pontinhos) para pegar o restante dos parametros. sempre tem quer ser o ultimo parametro.
const conta = (operador, acumulador, ...numeros) => {    
    console.log(operador, acumulador);
    for(let num of numeros){
        if(operador === '+') acumulador += num;
        if(operador === '-') acumulador -= num;
        if(operador === '*') acumulador * num;
        if(operador === '/') acumulador /= num;
    }
    console.log(acumulador);
};
conta('+', 0, 10, 20, 30, 40);

