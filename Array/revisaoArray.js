const nomes = ['Heitor1', 'Kamila1', 'Rodrigo1'];

nomes[2] = 'rodrigo2';

delete nomes[2];                        //delete o conteudo na posição 2, mas não remove a posição;

const novo = [...nomes];                 //rest operator: faz uma copia dos valores de 'nomes', e não altera o array principal 'nomes';

novo.pop();                             //remover o ultimo indice;

novo.shift();                           //remover o primeiro indice;

novo.push('Heitor2');                   //adiciona algum valor no final do array;

novo.unshift('Rodrigo3');               //adiciona algum valor no comeco do array, e empurra todos os valores para indices tras;

//novo.slice(0, 2);                     //fatiar o array, escolher apenas alguns indices entre dois valores passados;

//novo.slice(0, -1)                     //pega todos menos o ultimo indice;

//console.log(nomes, novo, novo.slice(1, 3));


const pessoa = 'Cicero Mirian Michele'; 
const pessoas = pessoa.split(' ')              //criar um array a partir de uma string, separando por espaços (' '), por virgula (',');

const fulano = ['Cicero', 'Mirian', 'Michele'];
const fulanos = fulano.join(' ');                  //junta todos os valores do array, passando qual o separador, no caso foi espaço (' ');

console.log(pessoas, fulanos);