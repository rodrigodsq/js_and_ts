const fs = require('fs').promises;

module.exports = (caminho) => {
    return fs.readFile(caminho, 'utf-8');                       //fs.readFile(): serve para ler algum arquivo;
}