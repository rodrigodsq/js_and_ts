/*Classe: {
    construtor: tem um 'metodo' especifico para passarmos os parametros do construtor;
    prototype: ja atribui seu metodos ao prototype automaticamente, com isso deixando mais simples e aconomizando processamento;
    //Exemplo abaixo//
}
*/

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    falar(){                                                //essa função ja fica atrelada ao proto
        console.log(`${this.nome} esta falando!`);
    }

    get nomeCompleto(){
        return this.nome +' '+ this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');                           //criar um array a partir de uma string, separando por espaços (' ') no caso;
        this.nome = valor.shift();                          //pega o primeiro indice;
        this.sobrenome = valor.join(' ');                   //junta todos os valores do array, passando qual o separador, no caso foi espaço (' ');
    }

}

const p1 = new Pessoa('Rodrigo', 'Quintais');

p1.nomeCompleto = 'Kamila vilas boas';

console.log(p1.sobrenome);