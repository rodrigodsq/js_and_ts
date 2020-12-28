//aquivos webpack;
import 'core-js/stable';
import 'regenerator-runtime/runtime';

//importando o arquivo para validação do front, e inicializando;
import Login from  './modules/Login'; 

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

//importando o css;
//import './assets/css/style.css';

