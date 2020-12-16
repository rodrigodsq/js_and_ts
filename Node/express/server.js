const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));        //para o nodejs poder reconhecer dados do request enviado via body;

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome">
            <button> Olá mundo </button>
        </form>
    `);
});

//recebendo parametros na url (/:idUsuarios);  colocar ? no final para ficar um param opcional.
//req.param: /testes/param1/param2
//req.query: /testes/?nome=Rodrigo&sobrenome=Quintaz
app.get('/testes/:idUsuarios?/:param?', (req, res) => {
    console.log(req.params);
    //res.send(req.params);
    res.send(req.query);                            //parametro passado diretamente na url : http://localhost:3000/testes/?nome=Rodrigo
})

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send(`Recebi: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000...');
});