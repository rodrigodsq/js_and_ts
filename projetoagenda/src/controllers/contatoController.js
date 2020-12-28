const { async } = require('regenerator-runtime');
const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato', {
        contato: {}                                         //enviando um objeto vazio p ñ da error;
    });
};

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return
        }
        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return        
    } catch (error) {
        console.log(error);
        return res.render('404');
    }

};

exports.editIndex = async (req, res) => {

    if (!req.params.id) return res.render('404');               //caso nãao venha nenhum id na rota.

    const contato = await Contato.buscarPorId(req.params.id);

    if (!contato) return res.render('404');

    res.render('contato', {
        contato: contato
    });
};

//caso seja passado o id do contato na rota, executaremos essa função
exports.edit = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404');               //caso nãao venha nenhum id na rota.

        const contato = new Contato(req.body)

        await contato.edit(req.params.id)

        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return
        }
        req.flash('success', 'Contato editado com sucesso.');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return   
    } catch (error) {
        console.log(error);
        res.render('404');
    }
}

exports.delete = async (req, res) => {
    if (!req.params.id) return res.render('404');               //caso nãao venha nenhum id na rota.

    const contato = await Contato.delete(req.params.id);

    if (!contato) return res.render('404');

    req.flash('success', 'Contato apagado com sucesso.');
    req.session.save(() => res.redirect('back'));
    return  
}