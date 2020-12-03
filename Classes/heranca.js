class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' está ligado');
            return;
        };
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return;
        };
        this.ligado = false;
    }

}


class Smartphone extends DispositivoEletronico {                    //extends: smatphone esta herdando as caracteristicas de DispositivoEle..
    constructor(nome, cor, modelo){
        super(nome);                                                //super(): passando os parametros para utilizar o construtor da classe pai;
        this.cor = cor;
        this.modelo = modelo;
    }

    ligar(){                                                        //sobreescrevendo o metodo da classe pai.
        console.log('voce ligou do Smartphone');
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'A71' );

//console.log(s1);

s1.ligar();
s1.ligar();