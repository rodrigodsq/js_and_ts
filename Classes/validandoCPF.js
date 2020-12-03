// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

class ValidaCPF{
    constructor(cpfEnviado){
        this.cpfLimpo = cpfEnviado.replace(/\D+/g, '');
    }

    valida(){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCpf === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);              //geraDigito() é um metodo statico, por isso precisamos chamar pelo nome da classe primeiro;
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso --;
        }

        const digito = 11 - (total % 11);                   //resto da dividão de total - 11
        return digito <= 9 ? String(digito) : '0';          // se digito foi menor ou igual a 9 retorna o digito, se não retorna 0;
    }

    isSequencia(){
        //charAt(): Pega o valor da posição. repeat(11): repete o valor em 11 posições e no caso compara com o valor de cpfLimpo para ver se não é uma sequencia.
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;         
    }

}

const cpf = new ValidaCPF('324442708-10');

if(cpf.valida()) {
  console.log('Cpf válido');
} else {
  console.log('Cpf inválido');
}


//OBS: Quando não se tem nenhum this no metodo, ele pode se torna um metodo statico;