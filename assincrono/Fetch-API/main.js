//EXPLICANDO COMO FAZER REQUISIÇÃO COM Fetch()
//Fetch(): retorna uma Promise por padrão; sempre precisamos tratar o dado retornado dele, temos que converte em text() ou json() e etc..


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

    //---------UTILIZANDO ASYNC AWAIT----------//
    try {
        const response = await fetch(href);                                     //fazendo a requisição com fetch();
        if(response.status !== 200) return console.error('Error 404! não deu');     //caso tenha algum erro retorna essa msg;
        const html = await response.text();                                     //tratando a resposta da requsição(response) e convertendo para text;
        carregarResultado(html); 
    } catch (error) {
        console.log(error);
    }

    //-----------DIRETAMENTE COM Fetch()------------//
    //fetch(): ja faz a requisição de forma assincrona;
    // fetch(href)
    //     .then(response =>{
    //         if(response.status !== 200) return new Error('Error 404! não deu');      //caso tenha algum erro enviar essa msg;
    //         return response.text();                            //pegando a resposta da requsição(response) e convertendo para text;
    //     })              
    //     .then( html => {                                //aqui recebemos a resposta da requisição ja convertido;
    //         carregarResultado(html);
    //     })
    //     .catch( error => {
    //         console.log(error)
    //     })
    
}

//colocando o html da pagina passada na class 'resultado' da pagina atual;
function carregarResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}