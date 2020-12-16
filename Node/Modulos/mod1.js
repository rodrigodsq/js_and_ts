const nome = 'Rodrigo';
const sobrenome = 'Quintaz';

const falaNome = () => {
    return nome+ ' '+ sobrenome;
}

exports.nome = nome;                                //exportando conteudo.
exports.sobrenome = sobrenome;
exports.falaNome = falaNome();

this.qualquerCoisa = 'O que eu quiser exportar';


//----------------------UTILIZANDO CLASSE-------------------------//

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;            //exportando a class;