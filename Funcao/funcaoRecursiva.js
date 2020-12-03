//Função recursiva: é uma função que se chama de volta;
function recursiva(max) {
    if(max >= 10000) return;
    max++;
    console.log(max);
    recursiva(max);                                 //chamando essa msm funcao novamente.
}

recursiva(-10);