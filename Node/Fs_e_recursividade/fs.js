const fs = require('fs').promises;              //para manipular arquivos.
const path = require('path');                   //manipular rotas de diretorios.

async function readdir(diretorio) {
    let rootdir = diretorio || path.resolve(__dirname);         //se não tiver nada no parametro diretorio vai pegar o dirname;
    const files = await fs.readdir(rootdir);                    //fs.readdir(): criase um array das pastas contida no diretorio;
    walk(files, rootdir);
};

async function walk(files, rootdir) {
    for(let file of files){
        const fileFullPath = path.resolve(rootdir, file);       //refazendo o diretorio completo.
        const stats = await fs.stat(fileFullPath);              //stat(): pega algumas informações dos arquivos.     
        
        if(/\.git/g.test(fileFullPath)) continue;               //utilizando expressão regular para remover as pastas .git de ser exibida.

        if( stats.isDirectory()){                               //isDirectory(): verificar se é um diretorio;
            readdir(fileFullPath)                               //reenviar esse diretorio para a funcão  //funcao recursiva.
            continue;
        }

        if(!/\.css/g.test(fileFullPath)) continue;               //utilizando expressão regular para exibir apenas aquivos .css .
        
        console.log(file);
    }
}
    
readdir('/Users/rodrigo/Desktop/Estudos/Js and Ts/');               //passando o diretorio.

//--------ACESSANDO DIRETORIO COM PROMISE----------------//
// fs.readdir(path.resolve(__dirname, '..'))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));