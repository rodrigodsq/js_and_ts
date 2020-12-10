const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

//pegando uma letra maiuscula da tabela ASCII, conforme a posição dela na tabela, posição definida aleatoriamente pela função rand();
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));

const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));

//criando uma string com varios simbolos;
const simbolos = ',.;~^[]{}!@#$%*()_+=-';       

//pegando um simbolo aleatorio;
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

//função que vai gerar a senha aleatoria com determina quantia de caracteres(definida pelo parametro qtd).
//Parametros:ela recebe 5 parametros onde o primeiro é numero e o restante é booleano. 
//a senha tem uma sequencia onde sempre segue o formato: Maiuscula, minuscula, numeros, simbolos.
export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  qtd = Number(qtd);

  for(let i = 0; i < qtd; i++) {

    //operação de curto cirtuito: se maiusculas for true, faz o push da uma letra,numero ou simbolo no array senhaArray;
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  //retornando a senha com o tamanho desejado.
  return senhaArray.join('').slice(0, qtd);
}
