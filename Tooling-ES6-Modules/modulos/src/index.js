//importando const do modulo1;
//import { nome, sobrenome as sobrenome2, idade, soma, Pessoa } from './modulo1';

//importando tudo do modulo1;
//import * as MeuModulo from './modulo1';

//importando o padrão do modulo1;
// import padrao from './modulo1';
// console.log(padrao(5, 3));

//importando o padrão com o restante das const;
import padrao, {nome, sobrenome, soma } from './modulo1';
console.log(padrao(6, 7), nome);

// console.log(nome, sobrenome, sobrenome2);

//const p1 = new Pessoa('Heitor', 'VB');

//OBS: sobrenome as sobrenome2: estou passando o valor da var importada p essa outra var que criei, com isso posso alterar os valores da minha var importada; 