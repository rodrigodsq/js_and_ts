//-------Funcão construtora:-------------
//sempre iniciar essas funcoes com letra maiuscula. 
//Sempre que criar um objeto utilizar a palavra new. 
//Essas funcoes não precisa de return.
//so podemos acessar metodos e var que possuem o this, se for const não podemos acessar

function Pessoa(nome, sobrenome) {
    //atributos e metodos Publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () =>{
        console.log('sou um metodo')
    };

    //Atributo e metodos privados
    const id = 1234567;                          //var privada so utilizada aqui dentro, não podemos instanciala.

    const metodoInterno = () => {                   //metodo privado, nao podemos instancialo em um objeto.
        console.log('sou um metodo interno')
    };

}

const p1 = new Pessoa('Rodrigo', 'Quintais');

console.log(p1.nome);
p1.metodo();