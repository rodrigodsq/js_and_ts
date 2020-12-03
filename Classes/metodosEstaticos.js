
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //Metodos de instancias
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    //Metodo estatico                                   //esse tipo de metodo não pode ser instanciado, so funciona aqui dentro da classe.
    static trocaPilha(){
        console.log('ok, vou trocar')
    }

}

const controle1 = new ControleRemoto('LG');

//controle1.aumentarVolume();

console.log(controle1);