//EXPLICANDO COMO FAZER REQUISIÇÃO COM XMLHttpRequest(); MODELO ANTIGO DE FAZER REQUISIÇÃO
//FAZENDO EXIBIR O HTML DE UMA REQUISIÇAÕ ASSINCRONA, COMO SE FOSSE UMA SPA;

//-------------------FORMA ANTIGA DE FAZER REQUISIÇÃO----------------------------------//
/*
const request = obj => {                                //objeto da requisição;
    const xhr = new XMLHttpRequest();                   //XMLHttpRequest(): utilizado para fazer requisições;
    xhr.open(obj.method, obj.url , true);               //aqui pegamos o metodo (GET, POST..), pegamos a url para fazer a req, e se é assincrono ou não (true, false);
    xhr.send();                                         //utilizamos para se cado precise retorna dados. bastante utilizado em chamadas post.

    // addEventListener('load'): utilizado para verificar como ocorreu a requisição.
    xhr.addEventListener('load', () =>{
         //caso o codigo de status esteja entre 200 e 300 ele retorna a mensagem da request (no caso o codigo html da pagina);
        if(xhr.status >= 200 && xhr.status < 300){
            obj.sucess(xhr.responseText)
        } else {
            obj.error(xhr.statusText)
        }
    })
};
*/

//---------------FORMA DE FAZER REQUISIÇÃO COM PROMISSE, REQUISIÇÃO ASSINCRONA-----------------//
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();               //XMLHttpRequest(): utilizado para fazer requisições;
        xhr.open(obj.method, obj.url , true);           //aqui pegamos o metodo (GET, POST..), pegamos a url para fazer a req, e se é assincrono ou não (true, false);
        xhr.send();                                     //utilizamos para se cado precise retorna dados. bastante utilizado em chamadas post.
    
        // addEventListener('load'): utilizado para verificar como ocorreu a requisição.
        xhr.addEventListener('load', () =>{
             //caso o codigo de status esteja entre 200 e 300 ele retorna a mensagem da request (no caso o codigo html da pagina);
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

//addEventListene(): diretamente no document da pagina, estamos pegando qualquer evento, qualquer clique.
//estamos verificando se o elemento clicado é um link (<a>);
//preventDefault(): previnindo um evento, no caso estamos previnindo que ao clicar no link, não seja redirecionado automaticamente.
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

//pegando o link contido no href do elemento clicado;
//pegando o link do elemnto e passando para um obj de requisição;
async function carregaPagina(el){
    const href = el.getAttribute('href');

    const objConfig = {                                     //criando um obj para requisição;
        method: 'GET',
        url: href,
    };

    //---------UTILIZANDO ASYNC AWAIT----------//
    try {
        const response = await request(objConfig);
        carregarResultado(response)
    } catch (error) {
        console.log(error);
    }

    //---------UTILIZANDO PROMISE NA REQUISIÇÃO---------//
    // request(objConfig).then(response => {
    //     carregarResultado(response)                 //caso tudo ok com a requisição, ele executa a funcao carregaResultado();
    // }).catch( error => {
    //     console.log(error);
    // })

    //--------------OBJETO ANTIGO--------------
    // const objConfig = {                                 //criando um obj para requisição;
    //     method: 'GET',
    //     url: href,
    //     sucess(response){                               //funcao do obj da requisição; executa caso der tudo ok na requisição
    //         carregarResultado(response);
    //     },
    //     error(errorText){
    //         console.log(errorText)
    //     },
    // };
    //request(objConfig)                                  //passando o objt para a funcao request;
}

//colocando o html da pagina passada na class 'resultado' da pagina atual;
function carregarResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}