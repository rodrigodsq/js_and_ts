const { async } = require('regenerator-runtime');
const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {

  //como buscaContatos é um metodo estatico, podemos chamalo direto, sem precisar criar uma instancia(new);
  const contatos = await Contato.buscaContatos();

  return res.render('index', { contatos: contatos });

};
