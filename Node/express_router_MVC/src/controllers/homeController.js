

exports.paginaInicial = (req, res) => {

//passando o nome do arquivo na pasta views que essa rota ira exibir;
    res.render('index', {
        titulo: 'Esse sera o titulo',                               //passando esse conteudo para as views
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });                                    

    return;                                                 //p fechar a request;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return
}


//----------------------EXEMPLO DE UTILIZAÇÃO BASICA DE MONGODB-------------------------------------------------//
//exports.paginaInicial = (req, res) => {
// const HomeModel = require('../models/HomeModel');                   //importando o model do mongoose;

//create(): inserindo dados no bd.
// HomeModel.create({
//     titulo: 'Um titulo de testes',
//     descricao: 'Uma descricao de testes',
// }).then( dados => console.log(dados))
//     .catch(e => console.log(e));

//find(): busca dados no banco
// HomeModel.find()
// .then( dados => console.log(dados))
// .catch(e => console.log(e));

//     res.render('index');                                    //passando o nome do arquivo na pasta views que essa rota ira exibir
//     return;                                                 //p fechar a request;
// }


//------------------------EXEMPLO DE UTILIZAÇÃO DE SESSION E FLASH MESSAGES-----------------------------------------//
//exports.paginaInicial = (req, res) => {

    //----exemplo de como usar session e pegar as informações da session em novas request, sempre ficara aqui ate que o cookie ou session expire------;
    //req.session.usuario = {nome: 'Rodrigo', logado: true};                    //colocando dados na session
    //console.log(req.session.usuario);

    //----exemplo de como usar flash e pegar as informações do flash apenas na proxima request, dpois são apagadas------;
    // req.flash('info', 'Ola Mundo!!');
    // req.flash('ERR', 'DEU RUIMM!!');
    // req.flash('Sucess', 'Que Maravilha!!');
   //console.log(req.flash('ERR'), req.flash('Sucess'), req.flash('info'));         //pegando o flash add na ultima request.

    //console.log(`Olha o que tem na req.session.nome: ${req.session.nome}`)      //pegando a informação que vinha sendo passada na session da requisição;

//     res.render('index');                                    //passando o nome do arquivo na pasta views que essa rota ira exibir
//     return;                                                 //p fechar a request;
// }