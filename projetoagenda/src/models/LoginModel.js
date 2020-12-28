const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null; 
  }

  //------------------------------------------------BLOCO DE LOGIN--------------------------------------------------------//

  async login(){
    this.valida();
    if (this.errors.length > 0) return;
    this.user = await LoginModel.findOne({email: this.body.email});

    //verificação se houve retorno do findOne (Buscar no bd) do email, se não retorna é pq o usuario ñ existe;
    if(!this.user){
      this.errors.push('Usuario não existe');
      return;
    }

    //fazendo a comparação da senha passada com a senha correspodente a esse usuario no bd.
    if(!bcryptjs.compareSync(this.body.password, this.user.password)){
      this.errors.push('Senha inválida');
      this.user = null;                             //garantindo que o user fique null;
      return;
    }

  }


  //------------------------------------------------BLOCO DO CADASTRO--------------------------------------------------------//

  //funcao onde chamara a funcao que valida os campos;
  //verifica se o array errors tem algum erro;
  //cadastrar um usuario no bd e retorna esse usuaio na var user;
  async register(){
    this.valida();
    if (this.errors.length > 0) return;

    await this.userExists();

    if (this.errors.length > 0) return;

    const salt = bcryptjs.genSaltSync();                                    //gerando um salt do bcrypt
    this.body.password = bcryptjs.hashSync(this.body.password, salt);       //criptografando(hasheando) a senha do usuario;


      this.user = await LoginModel.create(this.body);

  }

  //userExists(): verificar se o usuario ja existe no BD;
  async userExists(){
    this.user = await LoginModel.findOne({ email: this.body.email})

    if(this.user) this.errors.push('Usuario ja existe.');
  }

  //valida(): chama a funcao cleanUp, verifica se o email e a senha é valida, se não for ele ad o erro no array errors;
  valida(){
    this.cleanUp()

    //O email precisa ser valido
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail invalido.');

    //A senha precisa ter entre 3 e 60 caracter
    if (this.body.password.length < 3 || this.body.password.length > 50 ) this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');

  }

  //cleanUp(): funcao que verifica se o campos são uma string, e adiciona os dados formatados na var body;
  cleanUp(){
    for(const key in this.body){
     if( typeof this.body[key] !== 'string' ){
        this.body[key] = '';
      };
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
    }
  }

}

module.exports = Login;
