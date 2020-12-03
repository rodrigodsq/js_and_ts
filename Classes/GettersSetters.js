//Symbol(): criar uma chave unica;    //no caso estamos utilizando para proteger a nossa chave velocidade.

const __velocidade = Symbol('velocidade');

class Carro {
    constructor(nome){
        this.nome = nome;
        this[__velocidade] = 0;
    }

    get velocidade(){
        return this[__velocidade];
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[__velocidade] = valor;
    }

    acelerar(){
        if(this[__velocidade] >= 100) return;
        this[__velocidade]++;
    }

    freiar(){
        if(this[__velocidade] <= 0) return;
        this[__velocidade]--;
    }
}

const c1 = new Carro('Fusca');

c1.velocidade = 15;

console.log(c1.velocidade)

// Ctrl + Shift + L :  Seleciona todos os nome que forem iguais e altera todos ao mesmo tempo.
