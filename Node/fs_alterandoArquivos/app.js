const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json');       //passando o caminho do arquivo;
const escreve = require('./modules/escreve');
const ler = require('./modules/ler');

//----------BLOCO ESCREVER--------------------//
// const familia = [
//     {nome: 'Rodrigo'},
//     {nome: 'Mirian'},
//     {nome: 'Cicero'},
// ];

// const json = JSON.stringify(familia, '', 2);
// escreve(caminhoArquivo, json);               //mandando os dados para o modulo que cria e escreve um arquivo.


//----------BLOCO LER--------------------//
 async function lerArquivo(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados);
 };

 function renderizaDados(dados){
    dados = JSON.parse(dados);                  //convertendo os dados em json;
    //console.log(dados);
    dados.forEach(value => console.log(value.nome) );
}

 lerArquivo(caminhoArquivo);

 //----exibindo os dados------------//
//  const dadosArquivos = lerArquivo(caminhoArquivo)
//     .then(dados => console.log(dados))
