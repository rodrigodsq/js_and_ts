const { async } = require('regenerator-runtime');
const Login = require('../models/LoginModel');

exports.index = (req, res) => {

  if(req.session.user){                                 //verificando se tem session, pq se tiver o usuario ja esta logado e não pode exibir a pagina de login;
    return res.render('login-logado');
  }
    return res.render('login');
  };

exports.register = async (req, res) => {

  try {
    const login = new Login(req.body)
    await login.register();                         //por ser um metodo async ele precisa ser aync aqui tbm;

    if(login.errors.length > 0){  
      req.flash('errors', login.errors)             //passando p flash as mensagens de erro;
      req.session.save( () => {                     //salvar a sessão;
        return res.redirect('back');                //redirecionar para a pagina anterior;
      })
      return;
    }
    
    req.flash('success', 'Seu usuario foi criado com sucesso.')             //passando p flash as mensagens de erro;
    req.session.save( () => {                     //salvar a sessão;
      return res.redirect('back');                //redirecionar para a pagina anterior;
    })
    //return res.send(login.user); 

  } catch (error) {
    console.log(error)
    return res.render('404');
  }


};


exports.login = async (req, res) => {

  try {
    const login = new Login(req.body)
    await login.login();                         //por ser um metodo async ele precisa ser aync aqui tbm;

    if(login.errors.length > 0){  
      req.flash('errors', login.errors)             //passando p flash as mensagens de erro;
      req.session.save( () => {                     //salvar a sessão;
        return res.redirect('back');                //redirecionar para a pagina anterior;
      })
      return;
    }
    
    req.flash('success', 'Você entrou no sistema.')             //passando p flash as mensagens de erro;
    req.session.user = login.user;                              //salvando o usuario na sessão.
    req.session.save( () => {                     //salvar a sessão;
      return res.redirect('back');                //redirecionar para a pagina anterior;
    })
    //return res.send(login.user); 

  } catch (error) {
    console.log(error)
    return res.render('404');
  }

};

exports.logout = (req, res) => {
  req.session.destroy();                    //para apagar a sessão do usuario;
  res.redirect('/');
}