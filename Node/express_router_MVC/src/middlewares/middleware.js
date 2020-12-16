exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local';                       //passando essa variavel 'umaVariavelLocal' em todas as rotas;
    console.log('Passei no middleware global.');
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){                                //verificando de error, verificar se esta passando o token de segurança do crsf;
        return res.render('404');
    }
}

//passando o token gerado no csrfToken() para o res.locals.csrfToken;
//locals: é tipo uma var global para guarda valores, pode ser acessado de qualquer lugar do sistema;
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();                                
    next();
}