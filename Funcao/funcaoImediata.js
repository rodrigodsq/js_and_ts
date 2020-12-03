//Caso precise escrever algum trecho de codigo que não interfira no escopo global, use a função imediata.
(function(nome, sobrenome){

    function falaNome(){
        console.log(sobrenome + ' ' + nome);
    }

    falaNome();

})('Rodrigo', 'Quintais' );                 //passando os parametros para a função imediata.