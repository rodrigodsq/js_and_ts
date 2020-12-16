const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
    // req.session = {
    //     nome: 'Rodrigo',
    //     sobrenome: 'quintais'
    // }
    console.log('Passei no middleware.');
    next();
}

//Rotas da home;
route.get('/', meuMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaInicial);




module.exports = route;