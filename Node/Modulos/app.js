//const mod1 = require('./mod1');                                       //importando um modulo.
//const {nome, sobrenome, falaNome} = require('./mod1');                //importando alguns exportaveis do modulo.
const {Pessoa} = require('./mod1');

//const falanome = mod1.falaNome;
//console.log(falaNome);

const p1 = new Pessoa('Rodrigo');

console.log(p1);

// __filename: pega o diretorio desse arquivo (no cado o arquivo app.js);
// __dirname: pega o diretorio dessa pasta (no caso a pasta Modulos1);