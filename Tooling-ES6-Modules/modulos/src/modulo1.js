export const nome = 'Rodrigo';
export const sobrenome = 'Quintais';
export const idade = 22;

//colocando default essa funcao vira padrão do modulo e pode ser importada facilmente com qualquer nome;
export function soma(x, y) {
    return x + y;
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

//export{ nome as nome2, sobrenome, idade, soma };
//nome as nome2: alterarndo o nome de nome para nome2 ao exportar;

//colocando default essa funcao vira padrão do modulo e pode ser importada facilmente com qualquer nome;
//exportando uma arrow function como padrão do modulo.
export default (x,y) => {
        return x *y
}