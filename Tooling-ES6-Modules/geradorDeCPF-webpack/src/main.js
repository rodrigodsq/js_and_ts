import GeraCPF from './modules/GeraCPF';                            //importando o modulo que gera o cpf.

import './style.css';                                               //importando o css que vai ser usado na pagina index, pois o main.js manipula o html.

(function() {
  const gera = new GeraCPF();                                       //criando um obj da classe(modulo) importado.
  const cpfGerado = document.querySelector('.cpf-gerado');          //pegando um elemento do html.
  cpfGerado.innerHTML = gera.geraNovoCpf();                         //colocando o cpf gerado no elemento html.
})();