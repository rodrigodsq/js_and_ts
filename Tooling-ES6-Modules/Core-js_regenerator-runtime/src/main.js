//importa esses modulos  para resolver error de não conseguir compilar codigo atual(Promise e async), em navegadores antigos;
import 'core-js/stable'                                    
import 'regenerator-runtime/runtime';                       

import './style.css';

import executa from './modules/promises';

executa();