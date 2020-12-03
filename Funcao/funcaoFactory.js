//Factory function (Função fabrica)
function criarPessoa(nome, sobrenome, alt, kg){
    return{
        name: nome,
        sobrename: sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.name} ${this.sobrename}`;
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');               // faz um array dividido pelos espaços;
            this.name = valor.shift();              //shift: pega a primera posição do array e a remover do array.
            this.sobrename = valor.join(' ');       //join: junta o array com outra strig e define como sera separado, no caso por espaço ' ';
            console.log(valor);
        },

        fala(assunto){
            return `${this.name} está ${assunto}`
        },

        altura: alt,
        peso: kg,

        get imc(){                                              //Getter
            const indice = this.peso / (this.altura ** 2);      //calculo de imc, ** significa a altura vezes a altura vezes 2;
            return indice.toFixed(2)                            //pegar apenas duas casas decimais;
        }
    }
}

const p1 = criarPessoa('Rodrigo', 'Quintais', 1.79, 73);
p1.nomeCompleto = 'Kamila vilas boas';

console.log(p1.nomeCompleto);
console.log( p1.fala('programando'));
console.log(p1.imc);

//console.log({ pessoa: p1.fala('programando'), imc: p1.imc()});