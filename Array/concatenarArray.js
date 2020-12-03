//concat(): concatena array, junta os arrays e valores em um so array.

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//const a3 = a1.concat(a2, [7, 8, 9], 'Rodrigo');       //concatenando usando concat();

const a3 = [...a1, ...a2, 'Quintais'];          //concatenando usando spread operator, que pega o resto do valor, nesse caso pegar os arrays e os juntas; //Melhor

console.log(a3);

