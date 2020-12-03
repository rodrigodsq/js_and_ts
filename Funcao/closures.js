//Closures é a habilidade que a função tem em acessar o seu escopo lexico.

function retornaFuncao(nome){                 
    return function(){                             //essa funcao pode acessar tres escopo, o dela, o do pai, e p global.
        return nome
    };
}

const funcao = retornaFuncao('rodrigo');

console.log(funcao());                              //preciso executar essa const com () para pode exibiro conteudo da funcao.