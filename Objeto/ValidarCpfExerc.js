//324.442.708-19    --> MEU CPF

//PASSO A PASSO 
//705.484.450.52    -> CPF TESTE

// 7* 0* 5* 4* 8* 4* 4* 5* 0*               -> PEGA OS PRIMEIROS 9 NUMEROS;
// 10 9  8  7  6  5  4  3  2                -> MULTIPLICA POR ESSA SEQUENCIA;
// 70 0  40 28 48 20 16 15 0 = 237          -> SOMA DOS RESULTADOS DAS MULTIPLICAÇÕES;

//11 - (237 % 11) = 5                       ->(Primeiro digito) FAZ ESSE CALCULO E VERIFICA SE A RESPOSTA É MAIOR QUE 9, SE FOR CONSIDERAMOS 0 ;

// 7* 0* 5* 4* 8* 4* 4* 5* 0* 5*            -> PEGA OS PRIMEIROS 10 NUMEROS;
// 11 10 9  8  7  6  5  4  3  2             -> MULTIPLICA POR ESSA SEQUENCIA;
// 77 0  45 32 56 24 20 20 0  10 = 284      -> SOMA DOS RESULTADOS DAS MULTIPLICAÇÕES;

//11 - (284 % 11) = 2                       -> (Segundo digito) 

//  cpf atual           ===     cpf do calculo com o 1° e 2° digito
//  705.484.450.52      ===     705.484.450.52          //os dois numeros final são o primeiro e segundo digito;


//-----------------------------------------------------------------//


let cpf = '324.442.708-19';
let cpfLimpo = cpf.replace(/\D+/g, '')      //\D+/g : expressão p pegar todos os numeros. // removendo todos oa caracter não numericos;
let cpfArray = Array.from(cpfLimpo)      //colocando em formato de array, cada digito é uma casa no array;
let cpfReduzido = cpfLimpo.slice(0, 9 );

//console.log(cpfReduzido);

function ValidarCpf(cpf) {
    this.numValue = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    this.cpfLimpo = cpf.replace(/\D+/g, '');

    this.primeiroDigito = () =>{
        let cpfArray = Array.from(this.cpfLimpo).splice(0, 9);
        let cpfSomaMultip = cpfArray.reduce((acumulador, valor, index) => {
            let ac = valor * this.numValue[index+1];
            return Number(acumulador) + ac;
        }, []);
        let primeiroDig = 11 - (cpfSomaMultip % 11);
        if(primeiroDig > 9) return 0;
        return  primeiroDig;
    }

    this.segundoDigito = () =>{
        let cpfArray = Array.from(this.cpfLimpo).splice(0, 10);
        let cpfSomaMultip = cpfArray.reduce((acumulador, valor, index) => {
            let ac = valor * this.numValue[index];
            return Number(acumulador) + ac;
        }, []);
        let primeiroDig = 11 - (cpfSomaMultip % 11);
        if(primeiroDig > 9) return 0;
        return  primeiroDig;
    }

    this.verificarCpf = () => {
        let digito1 = this.primeiroDigito();
        let digito2 = this.segundoDigito();
        let meuCpf = this.cpfLimpo.slice(0,9) + digito1 + digito2;
        if(Number(this.cpfLimpo) === Number(meuCpf) ) return 'Valido';
        return 'Invalido';
    }
}


let pessoa = new ValidarCpf('705.484.450.52');

console.log(pessoa.verificarCpf());

// \D+/g : expressão q verifica se ñ é um numero, com isso substitui por nada ou seja remove o q ñ for numero




/*
 this.primeiroDigito = () =>{
        let cpfArray = Array.from(this.cpfLimpo).splice(0, 9);
        let cpfSomaMultip = cpfArray.reduce((acumulador, valor, index) => {
            let ac = valor * this.numValue[index+1];
            return Number(acumulador) + ac;
        }, []);
        let primeiroDig = 11 - (cpfSomaMultip % 11);
        if(this.primeiroDigito > 9) return 0;
        return  primeiroDig;
    }
*/

/*
    this.primeiroDigito = (cpfParcial) =>{
        let regressivo = cpfParcial.length + 1;
        let cpfSomaMultip = Array(cpfParcial).reduce((acumulador, valor, index) => {
            let ac = valor * regressivo;
            regressivo --
            return Number(acumulador) + ac;
        }, []);
        //return cpfSomaMultip;
        let primeiroDig = 11 - (cpfSomaMultip % 11);
        console.log(primeiroDig)
        if(primeiroDig > 9) return 0;
        return  primeiroDig;
    }
*/