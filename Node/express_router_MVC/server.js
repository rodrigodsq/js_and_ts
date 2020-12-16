require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');
const session = require('express-session');                    //pegando a sessão do express;
const MongoStore = require('connect-mongo')(session);          //armazenar a session numa especie de session do mongo;
const flash = require('connect-flash');     

const helmet = require('helmet');
const csrf = require('csurf');


//-------Conexão com o mongodb---------//
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Conexão mongodb concluida ')
        app.emit('pronto')                                      //app.emit(): emite um sinal;
    })
    .catch((e) => {
        console.log(e)
    });
    

//-----------------CONFIGURAÇOES PADRÃO------------///
app.use(express.urlencoded({ extended: true }));        //para o nodejs poder reconhecer dados do request enviado via body;
app.use(express.json());                                //para o nodejs reconhcer dados enviados do tipo json.

app.use(express.static(path.resolve(__dirname, 'public')));     //passando o caminho dos arquivos estaticos(imagem, icon, html, css)


//-----------------CONFIGURAÇOES DE SEGURANÇA------------///
app.use(helmet())
app.use(csrf());                                        //inicializando o csrf para proteger nossos formularios, ele utiliza de tokens para validação.


//-------configurando como nossa session irá funcionar;----------------//
const sessionOptions = session({
    secret: 'qwerty',                                                       //senha da nossa session;
    store: new MongoStore({ mongooseConnection: mongoose.connection }),     //passando a conexão (no caso o mongoose);
    resave: false,
    saveUninitialized: false,
    cookie: {                                                              //tempo de duração do cookie(session);
        maxAge: 1000*60*60*24,                                             //passando a duração de 7 dias;
        httpOnly: true
    }
});

app.use(sessionOptions);                                            //passando para o app usar o nosso sessionOption com as config da session;
app.use(flash());


//---------------CONFIGURANDO VIEWS---------------------------------//
app.set('views', path.resolve(__dirname, 'src', 'views') )      //informando ao nodejs ao ficara nossa pasta de views(paginas html) para que reconheca execute;
app.set('view engine', 'ejs');                         //informando qual ferramenta iremos usar para exibir nossas paginas;


//--------------CONFIGURANDO MIDDLEWARES----------------------///
app.use(middlewareGlobal);                              //com isso esse middleware vai ser global e passar em todas as requisições do sistema;
app.use(checkCsrfError);                                //utilizando o middleware de segurança do CSRF;
app.use(csrfMiddleware);                                //utilizando o middleware de segurança do CSRF;

app.use(routes);                                        //para o nodejs utilizar as rotas que estaõ no arquivo routes.js;

//app.on(): captura um determinado sinal do emit. (no caso o pronto);
//com isso esse evento(inicialização do server) so vai ser executado apos a conexão com o banco de dados;
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor executando na porta 3000...');
    });
})                                      

