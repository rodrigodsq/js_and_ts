
class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')         //Pegando tudo que esta contindo dentro da class formulario;
        this.eventos();
    }

    //evento inicializado ao aperta no botão submit;
    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    //evento que sera executado apos aperta o botão
    handleSubmit(e){
        e.preventDefault();                                     //preventDefault(): Cancela o evento se for cancelável, sem parar a propagação do mesmo;
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        if(camposValidos && senhasValidas){
            alert('Formulario enviado!!');
            this.formulario.submit();
        }
    }

    senhasSaoValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campo senha e repetir senha precisam ser iguais');
            this.criaErro(repetirSenha, 'Campo senha e repetir senha precisam ser iguais');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Campo senha precisa ter entre 6 e 12 caracteres.');
        }

        return valid
    }

    camposSaoValidos(){
        let valid = true;

        //verificando se ja tem exibido as mensagens de error para não exibir duas vezes, atraves da class error-text;
        for(let errorText of this.formulario.querySelectorAll('.error-text')){     
             errorText.remove();            //removendo caso tenha alguma msg de error;
        }

        //Pegando todas as classes validar que esta dentro da class formulario;
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;               //pegando a tag anterior a tag que esta sendo passada no for;
            
            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode esta em branco`);
                valid = false;
            }

            //validando o campo de cpf
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF invalido')
            return false;
        }

        return true
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres.')
            valid = false;
        }

        //Verificando se contem apenas letras e numeros.
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuario precisa conter apenas letras e/ou numeros')

            valid = false;
        }
        return true;
    }

    //criando as mensagens de error 
    criaErro(campo, msg){
        const div = document.createElement('div');                  //criando uma div no html;
        div.innerHTML = msg;                                        //add uma mensagem na div;             
        div.classList.add('error-text')                             //add uma class a div;
        campo.insertAdjacentElement('afterend', div)                //para colocar a div apos a tag do "campo";      
    }


}

const valida = new ValidaFormulario();