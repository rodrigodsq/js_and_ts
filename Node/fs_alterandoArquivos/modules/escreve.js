const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {
        flag: 'w',
    })
}


//--------------------------estudos------------------------------//

//const caminhoArquivo = path.resolve(__dirname, '..', 'test.json');       //passando o caminho do arquivo;

//fs.writeFile(): escreve algum arquivo.(cria arquivo). parametros são: o caminho do arquivo, o conteudo(txt), opções; 
// fs.writeFile(caminhoArquivo, 'Frase 1\n', {
//     //flag: 'w',                  //apaga tudo que esteja dentro do arquivo caso ele ja exista, e coloque apenas o texto passado ('Frase 1');
//     flag: 'a',                    //adiciona ao arquivo o texto passado ('Frase 1');
//     encoding: 'utf-8'           //padrão do arquivo.
// });