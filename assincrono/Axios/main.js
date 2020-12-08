//EXPLICANDO COMO FAZER REQUISIÇÃO COM Axios()

//-----------------UTILIZANDO Fetch----------------//
// fetch('pessoas.json')
//     .then(resp => resp.json())
//     .then(json => carregaElementosNaPagina(json));

//---------------UTILIZANDO AXIOS------------------//
axios('pessoas.json')
    .then( resp => carregaElementosNaPagina(resp.data))         

function carregaElementosNaPagina(json){
    const table = document.createElement('table');                      //criando uma tabela

    for(let pessoa of json){
        const tr = document.createElement('tr');                        //criando uma tr (Linha)
        let td1 = document.createElement('td');                          //criando uma td (Coluna)
        td1.innerHTML = pessoa.nome;                                     // add a chave nome na td;
        tr.appendChild(td1);                                             //add td na tr; (add uma coluna na linha);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);                                          //add tr na tabela (add uma linha na tabela);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);                                       //add a tabela na div resultado.
}