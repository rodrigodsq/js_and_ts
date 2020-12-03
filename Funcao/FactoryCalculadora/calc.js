function criarCalculadora(){
    return{

        display: document.querySelector('.display'),                //pegar pela class.
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
            console.log('Ola Mundo!!');
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){               //verificando se no elemento do click tem a class btn-num.
                    this.btnParaDisplay(el.innerText);              //innerText: pega o que esta contido no label do botao.
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }   
            });                  
            //.bind(this)   //o this sempre se referencia a funcao em que esta no caso a document, com isso ele vai se referenciar ao criarCalculadora(antigo)
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = ''
        },

        apagaUm(){      //funcão para apagar o ultimo caracter
            this.display.value = this.display.value.slice(0, -1)
        },

        pressionaEnter(){                       //executar apos pressionar o botão enter;
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    console.log('entrouu')
                    this.realizaConta();
                }
                console.log(e.keyCode)
            })
        },

        realizaConta(){
            let conta = this.display.value;
            try {
                conta = eval(conta);                //realizar a conta qie contem dentro da string  //PERIGOSO ESSE eval.
                if (!conta) {
                    alert('Conta invalida');
                    return;
                }
            } catch (e) {
                alert('Conta invalida');
                return
            }
        },

    };
}

const calculadora = criarCalculadora();
calculadora.inicia();