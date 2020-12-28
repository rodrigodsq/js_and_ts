//utilizado para fazer a validação do front end;

import validator from 'validator';

export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name = "email"]');                   //pegando o valor do campo input email;
        const passwordlInput = el.querySelector('input[name = "password"]'); 
        let error = false;

        if (!validator.isEmail(emailInput.value)) {
            alert('E-mail invalido');
            error = true;
        }
        if (passwordlInput.value.length < 3 || passwordlInput.value.length > 50) {
            alert('Senha precisa ter entre 3 e 50 caracteres');
            error = true;
        }

        //se não ocorrer error, liberamos o submit (liberamos para enviar os dados ao back end);
        if (!error ) el.submit();

        console.log(emailInput.value, passwordlInput.value);
    }
}