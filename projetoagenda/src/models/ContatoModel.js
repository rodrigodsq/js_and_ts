const mongoose = require('mongoose');
const { async } = require('regenerator-runtime');
const validator = require('validator');


const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },
  criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

//utilizando contructor function

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
};

Contato.prototype.register = async function() {
  this.valida();

  if (this.errors.length > 0) return;

  this.contato = await ContatoModel.create(this.body)
};

  //valida(): chama a funcao cleanUp, verifica se os campos são validos, se não for ele coloca o erro no array errors;
Contato.prototype.valida = function() {
  this.cleanUp()

  //O email precisa ser valido
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail invalido.');

  if(!this.body.nome) this.errors.push('Nome é um campo obrigatorio.');

  if(!this.body.email && !this.body.telefone ){
    return this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
  } 

};

  //cleanUp(): funcao que verifica se o campos são uma string, e adiciona os dados formatados na var body;
Contato.prototype.cleanUp = function() {
  for(const key in this.body){
    if( typeof this.body[key] !== 'string' ){
      this.body[key] = '';
    };
  }

  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  }
}

Contato.prototype.edit = async function (id) {
  if (typeof id !== 'string') return;

  this.valida();

  if (this.errors.length > 0) return;

  //para atualizar um contato pelo id passado.  //new: true : significa que deve retorna o dados ja atualizados e não os antigos;
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });

}

//------------------METODOS ESTATICOS-----------------//
//são metodos que nao utiliza outro metodos e nem a palavra this;

Contato.buscarPorId = async function(id){
  if (typeof id !== 'string') return;                             //verificando se é uma string;
  const contato = await ContatoModel.findById(id);                   //buncando registro com esse id no bd
  return contato;
}

Contato.buscaContatos = async function(){

  //buscando todos os contatos, sort({}): para buscar por ordem cronologica, 1 para crescente e -1 para decrescente
  const contatos = await ContatoModel.find()
  .sort({criadoEm: 1})

  return contatos;
}

Contato.delete = async function(id){
  if (typeof id !== 'string') return;

  //apagando um contato, podemos passar qualquer chave de filtro, so caso utilizamos o _id ;
  const contato = await ContatoModel.findOneAndDelete({ _id: id})

  return contato;
}



module.exports = Contato;
