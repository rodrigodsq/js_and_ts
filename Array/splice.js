const nomes = ['Heitor1', 'Kamila1', 'Rodrigo1', 'Michele', 'Mirian', 'Cicero'];
//nomes.splice(indice, delete, elem1, elem2, elem3);            //exemplo de como funciona;
//const removidos = nomes.splice(3 , 2)         //passando p 'removidos' os valores retirados no array, no caso o splice remover dois indices a partir do indice 3;

//---------------------------------//
     
//const alterando = nomes.splice(3, 0, 'Quintais ')      //adicionando na posição 3 o 'Quintais' sem remover o valor que ja existia, aumentando o array.

//const alterando2 = nomes.splice(3, 2, 'Quintais ')    //substituindo o valor da posição 3 e 4 por 'Quintais', e colocando o valor removido na var alterando2.

//const removidos2 = nomes.splice(-3, 2)              //selecionando os 3 ultimos valores e pegando os dois antes do ultimo.

//console.log(Number.MAX_VALUE)                   //Number.MAX_VALUE: numero maximo do javascript;    

//-------------------------------------//

//pop
//nomes.splice(-1, 1);          //removendo a ultima posição do array.

//shift
//nomes.splice(0, 1);               //removendo a primeira posição do array.

//push
nomes.splice(nomes.length, 0, 'Quintais');      //adicionando mais uma posição no final array.
//nomes.splice(3, 0, 'Quintais');        //adicionando um valor na posição 4 e aumentando o array, sem remover nenhum valor.



console.log(nomes);