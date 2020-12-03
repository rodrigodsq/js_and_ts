const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let total = 0;

//forOf
for (const valor of a1) {           
    console.log(valor)
};

//forEach
a1.forEach( (value, indice, array) => {
    console.log(value, indice)
    total += value;
});

console.log(total);

